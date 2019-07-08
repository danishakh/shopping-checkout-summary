import React, { Component } from 'react';
import { Container, Grid, Typography, Paper, Divider } from '@material-ui/core';

import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';
import Taxes from './components/Taxes';
import TotalPrice from './components/TotalPrice';
import ItemDetails from './components/ItemDetails';
import PromoCode from './components/PromoCode';


class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      subTotal: 750,
      pickupSavings: -5.75,
      tax: 0,
      totalPrice: 0,
      cartItems: {
          id: 1,
          name: 'adidas pharrell williams nmd hu holi - equality',
          price: 750,
          qty: 1
      },
      disablePromo: false
    }
  }

  componentDidMount() {
    this.calcTaxAndTotal();
  }

  calcTaxAndTotal() {
    this.setState({
      tax: ((this.state.subTotal + this.state.pickupSavings) * 0.09).toFixed(2)
    }, () => {
      this.setState({
        totalPrice: (Number(this.state.subTotal) + Number(this.state.tax) + this.state.pickupSavings)
      });
    });
  }
  
  render() {
    return (
      <Container maxWidth="md" style={{marginTop: 50}}>
        <Grid container justify='space-between' alignItems="center" direction="column" spacing={6}>
          <Grid item sm={8}>
              <Typography align="center" color="textPrimary" variant="h4">
                Shopping Cart Summary             
              </Typography>
          </Grid>
        </Grid>

        <Container maxWidth="xs" style={{marginTop: 30}}>
          <Paper elevation={20} style={{padding: 30}} md={6}>
              <Grid container justify='space-between' alignItems="flex-start" direction="column" spacing={1}>
                <Grid item sm={12}>
                  <Subtotal price={this.state.subTotal.toFixed(2)} />
                </Grid>
                <Grid item sm={12}>
                  <PickupSavings savingsAmount={this.state.pickupSavings} />
                </Grid>
                <Grid item sm={12}>
                  <Taxes tax={this.state.tax} />
                </Grid>
              </Grid>

              <br />
                <Divider variant="middle" />
              <br />

              <Grid container justify='space-between' alignItems="center" direction="column" spacing={1}>
                <Grid item sm={12}>
                  <ItemDetails description={this.state.cartItems.name} price={this.state.cartItems.price} qty={this.state.cartItems.qty} />
                </Grid>
                <Grid item sm={12}>
                  <PromoCode giveDiscount={() => this.giveDiscountHandler()} disabled={this.state.disablePromo} />
                </Grid>
                <Grid item sm={12}>
                  <TotalPrice total={this.state.totalPrice} />
                </Grid>
              </Grid>
          </Paper>
        </Container>  
          
      </Container>
    );
  }
  
}

export default App;

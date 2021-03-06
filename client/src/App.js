import React, { Component } from 'react';
import { Container, Grid, Typography, Paper, Divider } from '@material-ui/core';

import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';
import Taxes from './components/Taxes';
import TotalPrice from './components/TotalPrice';
import ItemDetails from './components/ItemDetails';
import PromoCode from './components/PromoCode';

import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';
import { getCartItems, calcTaxAndTotal, calcPromoTotal } from './actions/cartItemActions';


class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      disablePromo: false
    }
  }

  componentDidMount() {
    this.props.getCartItems()
    this.props.calcTaxAndTotal();
  }


  giveDiscountHandler() {
    
    // if promo code exists in our promos list then apply it and calculate new total
    if (this.props.promoCode in this.props.promos) {
      let promoValueToApply = this.props.promos[this.props.promoCode];
      this.props.calcPromoTotal(promoValueToApply, this.props.cartTotals.finalTotal);

      // disable text box and apply promo button
      this.setState({
        disablePromo: true
      });
    }

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
                  <Subtotal 
                  price={this.props.cartTotals.itemTotal}
                  />
                </Grid>

                <Grid item sm={12}>
                  <PickupSavings savingsAmount={(this.props.pickupSavings).toFixed(2)} />
                </Grid>

                <Grid item sm={12}>
                  <Taxes tax={this.props.cartTotals.tax} />
                </Grid>
              </Grid>

              <br />
                <Divider variant="middle" />
              <br />

              <Grid container justify='space-between' alignItems="center" direction="column" spacing={1}>
                <Grid item sm={12}>
                  <ItemDetails cartItems={this.props.cartItems}/>
                </Grid>
                <Grid item sm={12}>
                  <PromoCode giveDiscount={() => this.giveDiscountHandler()} isDisabled={this.state.disablePromo} />
                </Grid>
                <Grid item sm={12}>
                
                {/* Some conditional rendering based on if a promo code is applied */}
                {
                  this.state.disablePromo
                  ? <TotalPrice 
                      total={(Number(this.props.promoTotal) + this.props.pickupSavings).toFixed(2)} 
                    />
                  : <TotalPrice 
                      total={(Number(this.props.cartTotals.finalTotal) + this.props.pickupSavings).toFixed(2)} 
                    />
                }

                </Grid>
              </Grid>
          </Paper>
        </Container>  
          
      </Container>
    );
  }
  
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value,
  cartItems: state.cart.cartItems,
  cartTotals: state.cart.cartTotals,
  pickupSavings: state.cart.pickupSavings,
  promos: state.cart.promos,
  promoTotal: state.cart.promoTotal
});

export default connect(mapStateToProps, { handleChange, getCartItems, calcTaxAndTotal, calcPromoTotal })(App);

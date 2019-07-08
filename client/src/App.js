import React, { Component } from 'react';
import { Container, Grid, Typography, Paper } from '@material-ui/core';

import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';


class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      total: 100,
      pickupSavings: -5.75
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
                  <Subtotal price={this.state.total.toFixed(2)} />
                </Grid>
                <Grid item sm={12}>
                  <PickupSavings savingsAmount={this.state.pickupSavings} />
                </Grid>
              </Grid>
          </Paper>
        </Container>  
          
      </Container>
    );
  }
  
}

export default App;

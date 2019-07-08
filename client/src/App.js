import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';


class App extends Component {
  
  render() {
    return (
      <Container maxWidth="md" style={{marginTop: 50}}>
        <Grid container justify='space-between' alignItems="center" direction="column" spacing={6}>
          <Grid item>
              <Typography align="center" color="textPrimary" variant="h4">
                Shopping Cart Summary             
              </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
  
}

export default App;

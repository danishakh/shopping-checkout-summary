import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';

export default class Subtotal extends Component {
    render() {
        return (
            <Grid container justify='flex-start' alignItems="center" direction="row" spacing={10}>
                <Grid item>
                    <Typography align="center" color="textPrimary" variant="body1">
                        Subtotal:
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align="center" color="textPrimary" variant="body1">
                        {`$${this.props.price}`}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

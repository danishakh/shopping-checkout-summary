import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';

export default class Subtotal extends Component {
    render() {
        return (
            <Grid>
                <Grid item>
                    <Typography align="inherit" color="textPrimary" variant="subtitle1">
                        Subtotal:
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align="inherit" color="textPrimary" variant="overline">
                        {`$${this.props.price}`}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

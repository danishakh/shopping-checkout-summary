import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';

export default class Subtotal extends Component {
    render() {
        return (
            <Grid container justify='space-between' alignItems="center" direction="row" spacing={6}>
                <Grid item>
                    <Typography align="center" color="textPrimary" variant="body1">
                        Subtotal: {`$${this.props.price}`}
                    </Typography>
                </Grid>
                {/* <Grid item>
                    <Typography align>

                    </Typography>
                </Grid> */}
            </Grid>
        )
    }
}

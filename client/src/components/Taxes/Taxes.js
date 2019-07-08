import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';

export default class Taxes extends Component {
    render() {
        return (
            <Grid>
                <Grid item>
                    <Typography align="inherit" color="textPrimary" variant="subtitle1">
                        Taxes:
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align="inherit" color="textPrimary" variant="overline">
                        {`$${this.props.tax}`}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

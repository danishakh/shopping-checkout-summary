import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';

export default class TotalPrice extends Component {
    render() {
        return (
            <Grid>
                <Grid item>
                    <Typography align="inherit" color="textPrimary" variant="h6">
                        Estimated Total:
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align="inherit" color="textPrimary" variant="overline">
                        {`$${this.props.total}`}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

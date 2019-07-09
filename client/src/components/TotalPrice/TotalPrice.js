import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';

export default class TotalPrice extends Component {
    render() {
        return (
            <Grid container justify='flex-start' direction='column'>
                <Grid item>
                    <Typography align="inherit" color="textPrimary" variant="h6">
                        Estimated Total:
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align="inherit" color="textPrimary" variant="body2">
                        {`$${this.props.total}`}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

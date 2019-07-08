import React, { Component } from 'react';
import { Grid, Typography, Tooltip } from '@material-ui/core';


const tooltipText = `Save this amount by dropping in for a pickup instead of getting it delivered!`;

export default class PickupSavings extends Component {

    render() {

        return (
            <Grid>
                <Grid item>
                    <Tooltip 
                        id="pickup-savings-tooltip"
                        disableFocusListener 
                        disableTouchListener
                        enterDelay={300}
                        placement="bottom"
                        title={tooltipText}
                    >
                        <Typography align="inherit" color="textPrimary" variant="subtitle1">
                            <u>Pickup Savings:</u>
                        </Typography>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Typography align="inherit" color="error" variant="overline">
                        {`$ ${this.props.savingsAmount}`}
                    </Typography>
                </Grid>
            </Grid>
            
        )
    }
}

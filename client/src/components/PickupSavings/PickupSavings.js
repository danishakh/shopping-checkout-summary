import React, { Component } from 'react';
import { Grid, Typography, Tooltip } from '@material-ui/core';


const tooltipText = `Save this amount by dropping in for a pickup instead of getting it delivered!`;

export default function PickupSavings(props) {

        return (
            <Grid container justify='flex-start' alignItems="center" direction="row" spacing={10}>
                <Grid item>
                    <Tooltip 
                        id="pickup-savings-tooltip"
                        disableFocusListener 
                        disableTouchListener
                        enterDelay={300}
                        placement="bottom"
                        title={tooltipText}
                    >
                        <Typography align="center" color="textPrimary" variant="body1">
                            Pickup Savings:
                        </Typography>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Typography align="center" color="error" variant="body1">
                        {`$ ${props.savingsAmount}`}
                    </Typography>
                </Grid>
            </Grid>
            
        )
}

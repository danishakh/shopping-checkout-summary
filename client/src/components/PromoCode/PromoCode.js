import React, { Component } from 'react'
import {Grid, Typography, TextField, Button, Fab } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class PromoCode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            promoCode: ''
        }
    }

    onChangeHandler = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="promo-code-panel-header"
                >
                <Typography variant="overline">Promo Code</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container justify='space-between' alignItems='center' direction='column' spacing={2}>
                        <Grid item>
                            <TextField
                                id="promo-code"
                                name="promo-code"
                                fullWidth
                                value={this.props.promoCode}
                                onChange={this.onChangeHandler}
                            />
                        </Grid>
                        <Grid item>
                            <Fab
                                variant="extended"
                                size="medium"
                                color="primary"
                                aria-label="Apply"
                                onClick={this.props.giveDiscount}
                                disabled={this.props.isDisabled}
                            >
                                Apply
                            </Fab>
                        </Grid>
                        
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

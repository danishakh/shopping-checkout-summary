import React, { Component } from 'react'
import {Grid, Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export default class ItemDetails extends Component {

    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="item-details-panel-header"
                >
                <Typography variant="overline">Shopping Cart Details</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container justify='space-between' alignItems='center' direction='row' spacing={2}>
                        <Grid item md={6}>
                            <img
                                width={100}
                                height={100}
                                alt="img-thumbnail"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuMNgbjSKWKfPmI7bUoHGZaUaWNc0BTVkdGQPtc3GjYRmgj34pg"
                            />
                        </Grid>
                        <Grid item md={6}>
                            <Grid container justify='space-between' alignItems="center" direction="column" spacing={1}>
                                <Grid item>
                                    <Typography>
                                        {this.props.description}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography align="inherit" color="textPrimary" variant="overline">
                                        {`Price: $${this.props.price}`}
                                        <br />
                                        {`Qty: ${this.props.qty}`}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

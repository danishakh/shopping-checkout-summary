import React, { Component } from 'react'
import {Grid, Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//import { connect } from 'react-redux';
//import { getCartItems } from '../../actions/cartItemActions';

export default class ItemDetails extends Component {

    // componentDidMount() {
    //     this.props.getCartItems();
    // }

    render() {

        const cartItems = this.props.cartItems.map(item => (
                <Grid key={item.id} container justify='space-between' alignItems='center' direction='row' spacing={2}>
                    <Grid item md={6}>
                        <img
                            width={100}
                            height={100}
                            alt="img-thumbnail"
                            src={item.image}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <Grid container justify='space-between' alignItems="center" direction="column" spacing={1}>
                            <Grid item>
                                <Typography>
                                    {item.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align="inherit" color="textPrimary" variant="overline">
                                    {`Price: $${item.price}`}
                                    <br />
                                    {`Qty: ${item.qty}`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            
        ));

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
                    <Grid container justify='space-between' alignItems='center' direction='column' spacing={4}>
                        {cartItems}
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

// const mapStateToProps = state => ({
//     cartItems: state.cart.cartItems
// });

// export default connect(mapStateToProps, { getCartItems })(ItemDetails);
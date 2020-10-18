import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from "react-redux";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FloatingCartButton() {
    const classes = useStyles();
    const cart = useSelector(state => state.cart)
    let history = useHistory();
    return (
        <div className={classes.root}>
            <Fab
                onClick={() => history.push('/checkout')}
                className={classes.fab}
                variant="extended"
                color={cart.items.length ? 'primary' : 'default'}>
                <ShoppingCartIcon className={classes.extendedIcon}/>
                ({cart.items.length})
            </Fab>
        </div>
    );
}

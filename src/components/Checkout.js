import React, {Fragment, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Summary from "./Review";
import PaymentForm from "./PaymentForm";
import {useSelector} from "react-redux";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(6),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));


export default function Checkout() {
    const classes = useStyles();
    const cart = useSelector(state => state.cart)
    const [valid, setValid] = useState(false);

    let history = useHistory();

    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    {cart.items.length ? <Fragment><Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                        <Summary cartItems={cart.items} price={cart.totalPrice}/>
                        <PaymentForm setValid={setValid}/>
                        <div className={classes.buttons}>
                            <Button
                                variant="contained"
                                className={classes.button}
                                onClick={() => history.push('/')}
                            >
                                <ArrowBackIcon/>Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={!cart.items.length || !valid}
                                className={classes.button}
                                onClick={() => history.push('verify')}
                            >
                                Pay
                                <ArrowForwardIcon/>
                            </Button>
                        </div>
                    </Fragment> : <Typography component="h1" variant="h4" align="center">
                        Oops, looks like your cart is empty, visit <a href='http://localhost:3000'>home</a>
                    </Typography>}
                </Paper>
            </main>
        </React.Fragment>
    );
}

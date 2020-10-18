import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
            padding: theme.spacing(5),
        },
    },
    stepper: {
        padding: theme.spacing(3, 5, 5),
    },
    title: {
        paddingBottom: theme.spacing(2),
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
    let history = useHistory();
    const orderId = history.location.state ? history.location.state.orderId : null;
    const resetAndRedirect = () => {
        history.push('/')
    }

    return (
        <React.Fragment>
            {orderId === null && history.push('/')}
            <CssBaseline/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    {orderId === -1 ?
                        <Typography className={classes.title} color='secondary' component="h1" variant="h4"
                                    align="center">
                            Payment failed!
                        </Typography> :
                        <Fragment><Typography className={classes.title} component="h1" variant="h4" align="center">
                            ORDER NO: {orderId}
                        </Typography>

                            <Typography className={classes.title} variant="subtitle1">
                                Your order number is #{orderId}. We have emailed your order confirmation, and will
                                send you an update when your order has shipped.
                            </Typography>
                            <Typography variant="h5" align='center' gutterBottom>
                                Thank you for shopping with us!
                            </Typography></Fragment>}
                    <div className={classes.buttons}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={resetAndRedirect}
                            className={classes.button}
                        >
                            Home
                        </Button>
                    </div>
                </Paper>
            </main>
        </React.Fragment>
    );
}

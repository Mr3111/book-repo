import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useSelector} from "react-redux";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import store from "../store";

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
    helper: {
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(1)
    },
    info: {
        padding: theme.spacing(4)
    },
    OTP: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
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


export default function OTP() {
    const classes = useStyles();
    const cart = useSelector(state => state.cart)

    let history = useHistory();

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const verify = () => {
        const orderId = values.password === '123456' ? Math.floor(Math.random() * Math.floor(9999999)) : -1
        if (orderId > -1) store.dispatch({type: 'CLEAR_CART', payload: {}})
        history.push({
            pathname: '/finish', state: {
                orderId
            }
        })
    }


    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    {cart.items.length ? <Fragment><Typography component="h1" variant="h4" align="center">
                        Secure Payment Gateway
                    </Typography>
                        <Typography className={classes.info} variant="body2">Enter the OTP sent on your registered
                            mobile number</Typography>
                        <Grid className={classes.OTP} container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required id="cardName"
                                    label="OTP"
                                    onChange={handleChange('password')}
                                    fullWidth
                                    type={values.showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Typography className={classes.helper} color='secondary' variant="body2">Enter 123456 for success flow</Typography>
                        <div className={classes.buttons}>
                            <Button
                                variant="contained"
                                className={classes.button}
                                onClick={() => history.goBack()}
                            >
                                <ArrowBackIcon/>Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={!cart.items.length}
                                className={classes.button}
                                onClick={verify}
                            >
                                Submit
                                <ArrowForwardIcon/>
                            </Button>
                        </div>
                    </Fragment> : <Typography component="h1" variant="h4" align="center">
                        Oops, looks like your cart is empty, visit <a href='http://localhost:3000'>here</a>
                    </Typography>}
                </Paper>
            </main>
        </React.Fragment>
    );
}

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import {func} from "prop-types";
import InputAdornment from "@material-ui/core/InputAdornment";
import EventIcon from '@material-ui/icons/Event';
import PaymentIcon from '@material-ui/icons/Payment';

function DateMask(props) {
    const {inputRef, ...other} = props;
    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, '/', /\d/, /\d/]}
        />
    );
}

function CVVMask(props) {
    const {inputRef, ...other} = props;
    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, /\d/]}
        />
    );
}

function CardMask(props) {
    const {inputRef, ...other} = props;
    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        />
    );
}

DateMask.propTypes = {
    inputRef: func.isRequired,
};

export default function PaymentForm({setValid}) {
    const [values, setValues] = React.useState({
        'card-number': '-',
        'expiry': '_',
        'cvv': '_',
        'name': ''
    });

    const handleChange = (event, type) => {
        const newValues = {...values, [type]: event.target.value,}
        setValues(newValues);
        if (type === 'name' && !event.target.value.length) {
            setValid(false)
            return
        }

        for (const [key, value] of Object.entries(newValues)) {
            if (value.includes('_')) {
                setValid(false)
                return
            }
        }
        setValid(true)
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Enter Card details
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        onChange={(e) => handleChange(e, 'name')}
                        required id="cardName"
                        label="Name on card"
                        fullWidth
                        autoComplete="cc-name"
                        placeholder='John Doe'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Card number"
                        fullWidth
                        onChange={(e) => handleChange(e, "card-number")}
                        InputProps={{
                            inputComponent: CardMask,
                            endAdornment: (
                                <InputAdornment position="start">
                                    <PaymentIcon/>
                                </InputAdornment>
                            ),
                        }}
                        autoComplete="cc-number"
                        placeholder='XXXX-XXXX-XXXX-XXXX'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required id="expDate"
                        label="Expiry date"
                        fullWidth autoComplete="cc-exp"
                        onChange={(e) => handleChange(e, "expiry")}
                        InputProps={{
                            inputComponent: DateMask,
                            endAdornment: (
                                <InputAdornment position="start">
                                    <EventIcon/>
                                </InputAdornment>
                            ),
                        }}
                        placeholder='MM/YY'
                    />

                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        onChange={(e) => handleChange(e, "cvv")}
                        InputProps={{
                            inputComponent: CVVMask,
                        }}
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                        placeholder='XXX'
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

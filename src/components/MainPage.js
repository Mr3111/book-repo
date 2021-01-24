import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FloatingCartButton from "./CartButton";
import ReactVirtualizedTable from "./BooksList";

const _ = require('lodash')

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    main: {
        backgroundColor: theme.palette.background.paper,
    },
    cardGrid: {
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(6),
    },
}));

export default function MainPage({history, selectProduct}) {
    const classes = useStyles();
    const [data, setData] = useState([]);



    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.main}>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Book Repo
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Listing the best books online!
                        </Typography>
                    </Container>
                </div>
                <ReactVirtualizedTable/>
                <FloatingCartButton/>
            </main>

        </React.Fragment>
    );
}

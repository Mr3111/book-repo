import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import RecipeCard from "./RecipeCard";
import store from "../store";
import SearchField from "./SearchField";
import FloatingCartButton from "./CartButton";

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

export default function Recipes({history, selectProduct}) {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [filterString, setFilterString] = useState('')

    const handlePurchase = (prodId, mode) => {
        const item = _.find(data, {id: prodId})
        store.dispatch({type: 'ADD_ITEM', payload: item})
        if (mode) {
            history.push('/checkout')
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://starlord.hackerearth.com/recipe',
            );

            setData(result.data);
        };

        fetchData();
    }, []);

    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.main}>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Recipe Mall
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Best place for getting recipes.
                        </Typography>
                        <SearchField handleChange={setFilterString}/>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={4}>
                        {_.filter(data, item => (item.name.toLowerCase().includes(filterString) || item.description.toLowerCase().includes(filterString)))
                            .map(({id, name, image, price, description, category, label}) => (
                                <Grid key={id} item
                                      xs={12} sm={10} md={8} lg={6} xl={4}
                                ><RecipeCard
                                    id={id}
                                    key={id}
                                    name={name}
                                    imageURL={image}
                                    price={price}
                                    description={description}
                                    selectProduct={handlePurchase}
                                    category={category}
                                    label={label}
                                /></Grid>
                            ))}
                    </Grid>
                </Container>
                <FloatingCartButton/>
            </main>

        </React.Fragment>
    );
}

import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
    root: {
        maxWidth: 385,
    },
    cardHovered: {
        transform: "scale3d(1.05, 1.05, 1)"
    },
    media: {height: 140,},
});

export default function RecipeCard({id, name, imageURL, price, description, selectProduct, category, label}) {
    const classes = useStyles();
    const [state, setState] = useState({
        raised: false,
        shadow: 1,
    })

    return (
        <Card className={classes.root} raised={state.raised} zdepth={state.shadow}
              onMouseOver={() => setState({raised: true, shadow: 3})}
              onMouseOut={() => setState({raised: false, shadow: 1})}
        >
            <CardMedia
                component="img"
                height="310"
                image={imageURL}
                title={name}
            />

            <CardContent style={{height: 150}}>
                {category && <Chip
                    size='small'
                    label={category}
                    color="secondary"
                />}
                {label && <Chip
                    size='small'
                    label={label}
                    color="primary"
                />}
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color={state.raised ? 'primary' : 'textSecondary'} component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <h4>$ {price}</h4>
                <Button size="large" color="secondary" onClick={() => selectProduct(id, true)}
                        startIcon={<FlashOnIcon/>}>
                    BUY NOW
                </Button>
                <Button variant='outlined' size="small" color="primary" onClick={() => selectProduct(id, false)}>
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}

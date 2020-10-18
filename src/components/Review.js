import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(0, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(1),
    },
}));

export default function Summary({cartItems, price}) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {cartItems.map((product) => (
                    <ListItem className={classes.listItem} key={Math.random()}>
                        <ListItemText primary={product.name}/>
                        <Typography variant="body2">${product.price}</Typography>
                        {/*<DeleteIcon onClick={()=>store.dispatch({type:'DELETE_ITEM', id:product.id})}/>*/}
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" className={classes.total}>
                        ${price}
                    </Typography>
                </ListItem>
            </List>

        </React.Fragment>
    );
}

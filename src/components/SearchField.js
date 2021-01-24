import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        // width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

export default function SearchField({handleChange}) {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                onChange={(e) => handleChange(e.target.value.toLowerCase())}
                className={classes.input}
                placeholder="Start typing to search..."
                inputProps={{'aria-label': 'search books'}}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
}

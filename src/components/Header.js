import Toolbar from "@material-ui/core/Toolbar";
import BookIcon from '@material-ui/icons/Book';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));

export default function Header() {
    const classes = useStyles();
    return (<AppBar position="relative">
        <Toolbar>
            <BookIcon className={classes.icon}/>
            <Typography variant="h6" color="inherit" noWrap>

            </Typography>
        </Toolbar>
    </AppBar>);
}

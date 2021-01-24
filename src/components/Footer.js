import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing(5),
        padding: theme.spacing(4),
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="http://localhost:3000/">
                    Book Repo
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography></footer>
    );
}

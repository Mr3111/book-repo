import React, {Component} from 'react'
import './App.css'
import {connect} from 'react-redux'
import {fetchArticleDetails} from "./actions";
import {createBrowserHistory} from 'history'
import {Route, Router, Switch} from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Checkout from "./components/Checkout";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Finish from "./components/Finish";
import OTP from "./components/OTP";

const history = createBrowserHistory()

class App extends Component {

    render() {
        return (
            <Paper>
                <CssBaseline/>
                <Header/>
                <Router history={history}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <MainPage
                                    history={history}
                                />
                            )}
                        />
                        <Route
                            path="/checkout"
                            render={() => (
                                <Checkout/>)}
                        />
                        <Route
                            path="/verify"
                            render={() => (
                                <OTP/>)}
                        />
                        <Route
                            path="/finish"
                            render={() => (
                                <Finish/>)}
                        />
                    </Switch>
                </Router>
                <Footer/>
            </Paper>
        );
    }
}

export default connect(
    state => ({}),
    {}
)(App)

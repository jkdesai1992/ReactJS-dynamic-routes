import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Image from "./components/Image"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Dynamic from "./components/Dynamic";
import Login from "./components/Login";
import Details from "./components/Details";
import RightSidebar from "./components/Sidebar/RightSidebar";
import LeftSidebar from "./components/Sidebar/LeftSidebar";

class App extends Component {

    constructor() {
        super();
        this.state = {

        }
    };

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Header/>
                        <div className="container-fluid text-center">
                            <div className="row content">
                                <RightSidebar/>
                                <div className="col-sm-8 text-left">
                                    <Switch>
                                        <Route exact path="/" component={Home}/>
                                        <Route path="/about" component={About}/>
                                        <Route path="/image" component={Image}/>
                                        <Route path="/login" component={Login}/>
                                        <Route exact path="/:page/:details" component={Details}/>
                                        <Route exact path="/:page" component={Dynamic}/>
                                    </Switch>
                                </div>
                               <LeftSidebar/>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </Router>
            </div>
    );
  }
}

export default App;

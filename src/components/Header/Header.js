import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routeList: [{
                urlPage: "java",
                Label: "Java"
            }, {
                urlPage: "c++",
                Label: "C++"
            }, {
                urlPage: "go",
                Label: "Go"
            }, {
                urlPage: "flutter",
                Label: "Flutter"
            }, {
                urlPage: "dart",
                Label: "Dart"
            }, {
                urlPage: "iot",
                Label: "IOT"
            }, {
                urlPage: "angular",
                Label: "AngularJS"
            }, {
                urlPage: "vue",
                Label: "Vue"
            }, {
                urlPage: "node",
                Label: "Node"
            }, {
                urlPage: "react",
                Label: "React"
            }],
            more: [{
                more0: [
                    {
                        urlPage: "vue0",
                        Label: "Vue0"
                    }, {
                        urlPage: "node0",
                        Label: "Node0"
                    }, {
                        urlPage: "react0",
                        Label: "React0"
                    }
                ],
                more1: [
                    {
                        urlPage: "vue1",
                        Label: "Vue1"
                    }, {
                        urlPage: "node1",
                        Label: "Node1"
                    }, {
                        urlPage: "react1",
                        Label: "React1"
                    }
                ]
            }]
        }
    };

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="#">Logo</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/image">Image ||</Link></li>
                            {
                                this.state.routeList.length && this.state.routeList.map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <Link to={`/${item.urlPage}`}>{item.Label}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/login">
                                    <span className="glyphicon glyphicon-log-in"/> Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;
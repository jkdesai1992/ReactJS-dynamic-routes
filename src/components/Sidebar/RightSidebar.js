import React from 'react';
import {Link} from "react-router-dom";

class RightSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                text: "home",
                route: "home",
                urlPage: "react"
            },{
                text: "Overview",
                route: "overview",
                urlPage: "react"
            },{
                text: "Components",
                route: "components",
                urlPage: "react"
            },{
                text: "State Overview",
                route: "state",
                urlPage: "react"
            },{
                text: "Props Overview",
                route: "props",
                urlPage: "react"
            },{
                text: "Events",
                route: "events",
                urlPage: "react"
            }]
        }
    };

    componentWillMount(){
        debugger
    }

    render() {
        return (
            <div className="col-sm-2 sidenav">
                {
                    this.state.data.map((item,i)=>{
                        return(
                            <p key={i}>
                                <Link to={`/${item.urlPage}/${item.route}`}>{item.text}</Link>
                            </p>
                        )
                    })
                }
            </div>
        );
    }
}
export default RightSidebar;
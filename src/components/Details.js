import React from 'react';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
    };

    componentWillMount() {
        let headerPage = this.props.match && this.props.match.params && this.props.match.params.page;
        let sidebarDetails = this.props.match && this.props.match.params && this.props.match.params.details;
        this.gitSidebarInfo(headerPage, sidebarDetails)
    }

    componentWillUpdate(nextProps, nextState) {
        let headerPage = nextProps.match && nextProps.match.params && nextProps.match.params.page;
        let sidebarDetails = nextProps.match && nextProps.match.params && nextProps.match.params.details;
        this.gitSidebarInfo(headerPage, sidebarDetails)
    }

    gitSidebarInfo = (hider, side) =>{
        console.log("sidebar", hider + side)
    }

    render() {
        return (
            <div className="card">
                <h1>sidebar</h1>
            </div>
        );
    }
}
export default Details;
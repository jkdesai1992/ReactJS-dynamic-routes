import React from 'react';

class LeftSidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    };

    render() {
        return (
            <div className="col-sm-2 sidenav">
                <div className="well">
                    <p>ADS</p>
                </div>
                <div className="well">
                    <p>ADS</p>
                </div>
            </div>
        );
    }
}
export default LeftSidebar;
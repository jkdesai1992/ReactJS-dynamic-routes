import React from 'react';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ""
        }
    };

    render() {
        return (
            <footer className="container-fluid text-center">
                <p>Footer Text</p>
            </footer>
        );
    }
}
export default Footer;
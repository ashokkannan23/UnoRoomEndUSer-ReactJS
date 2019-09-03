import React, { Component } from 'react';
import NavBar from '../Components/navbar';
import FooterTitle from '../Components/footerTitle';

const containerFluidStyle = {
    paddingRight: '0px',
    paddingLeft: '0px'

}

class About extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid" style={containerFluidStyle}>
                    <NavBar />
                    <div className="container">
                        <FooterTitle />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

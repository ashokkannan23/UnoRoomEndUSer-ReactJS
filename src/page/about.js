import React from 'react';
import NavBar from '../Components/navbar';
import FooterTitle from '../Components/footerTitle';

const containerFluidStyle = {
    paddingRight: '0px',
    paddingLeft: '0px'

}

function About() {
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

export default About;

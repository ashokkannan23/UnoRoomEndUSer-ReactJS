import React from 'react';
import { Link } from 'react-router-dom';
import './src/../../assets/css/navBar.css';

import unoLogo from './src/../../assets/image/Room_logo.png';

const imgstyle = {
    width: '120px',
    height: '50px'

}

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="NavBar">
            <Link to="/" className="navbar-brand"><img src={unoLogo} style={imgstyle} alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
                <form className="form-inline my-2 my-lg-0" id="Address">
                    <li>
                        90, K.H. Road, Double Road, Opp. KSRTC Office,<br />
                        Shanthi Nagar, Bangalore, Pincode - 560 027. India <br />
                        <span className="contact">Phone no: +91 80 22248655</span>
                    </li>
                </form>
            </div>
        </nav>
    );
}


export default NavBar;
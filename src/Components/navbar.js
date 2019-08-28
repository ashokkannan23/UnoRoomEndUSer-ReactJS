import React from 'react';
import unologo from '../assets/image/1Room_logo.png';

function NavBar() {
    return (
        <div className="jumbotron">

            <div className="navbar navbar-default">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html"><img src={unologo}></img></a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">

                    <ul className="nav navbar-nav navbar-right" id="PropertyAddress">
                        <li>
                            90, K.H. Road, Double Road,<br />
                            Opp. KSRTC Office, Shanthi Nagar, Bangalore, <br />
                            Pincode - 560 027. India<br />
                            <span className="contact">Phone no: +91 80 22248655</span>
                        </li>
                        <li className="contact">+91 80 22248655</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}


export default NavBar;
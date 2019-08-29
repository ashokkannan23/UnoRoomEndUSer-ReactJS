import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../assets/css/footerTitle.css';
import UnoRoom from '../pages/unoRoom';
import Faq from '../pages/faq';

const containerstyle = {
    paddingTop: '20px',
    overflow: 'hidden',
    clear: 'both'
}

function FooterTitle() {
    return (
        <Router>
            <div className="container" style={containerstyle}>
                <div className="row" id="width1200">
                    <div className="col-sm-2" id="footerLinks">
                        <Link to="/unoRoom"><p>About Uno</p></Link>
                    </div>
                    <div className="col-sm-2" id="footerLinks">
                        <Link to=""><p>FAQ's</p></Link>
                    </div>
                    <div className="col-sm-2" id="footerLinks">
                        <Link to="/faq"><p>Guest Policies</p></Link>
                    </div>
                    <div className="col-sm-2" id="footerLinks">
                        <Link to=""><p>Privacy policy</p></Link>
                    </div>
                    <div className="col-sm-2" id="footerLinks">
                        <Link to=""><p>Terms of use</p></Link>
                    </div>
                    <div className="col-sm-2" id="footerLinks">
                        <Link to=""><p>Help Center</p></Link>
                    </div>
                </div>
                <div className="row" id="width992">
                    <div className="col-sm-3" id="footerLinks">
                        <Link to=""><p>About Uno</p></Link>
                    </div>
                    <div className="col-sm-3" id="footerLinks">
                        <Link to=""><p>FAQ's</p></Link>
                    </div>
                    <div className="col-sm-3" id="footerLinks">
                        <Link to=""><p>Guest Policies</p></Link>
                    </div>
                    <div className="col-sm-3" id="footerLinks">
                        <Link to=""><p>Privacy policy</p></Link>
                    </div>
                    <div className="col-sm-3" id="footerLinks">
                        <Link to=""><p>Terms of use</p></Link>
                    </div>
                    <div className="col-sm-3" id="footerLinks">
                        <Link to=""><p>Help Center</p></Link>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/unoRoom" component={UnoRoom} />
                    <Route path="/faq" component={Faq} />
                </Switch>
            </div>
        </Router>
    );
}


export default FooterTitle;
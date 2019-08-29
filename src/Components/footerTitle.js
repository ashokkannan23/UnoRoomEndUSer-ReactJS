import React from 'react';
import '../assets/css/footerTitle.css';

const containerstyle = {
    paddingTop: '20px',
    overflow: 'hidden',
    clear: 'both'
}

function FooterTitle() {
    return (
        <div className="container" style={containerstyle}>
            <div className="row" id="width1200">
                <div className="col-sm-2" id="footerLinks">
                    <p onclick="location.href='aboutUno.html';">About Uno</p>
                </div>
                <div className="col-sm-2" id="footerLinks">
                    <p onclick="location.href='faq.html';">FAQ's</p>
                </div>
                <div className="col-sm-2" id="footerLinks">
                    <p onclick="location.href='GuestPolicies.html';">Guest Policies</p>
                </div>
                <div className="col-sm-2" id="footerLinks">
                    <p onclick="location.href='privacy.html';">Privacy policy</p>
                </div>
                <div className="col-sm-2" id="footerLinks">
                    <p onclick="location.href='termsofuse.html';">Terms of use</p>
                </div>
                <div className="col-sm-2" id="footerLinks">
                    <p onclick="location.href='helpCenter.html';">Help Center</p>
                </div>
            </div>
            <div className="row" id="width992">
                <div className="col-sm-3" id="footerLinks">
                    <p onclick="location.href='aboutUno.html';">About Uno</p>
                </div>
                <div className="col-sm-3" id="footerLinks">
                    <p onclick="location.href='faq.html';">FAQ's</p>
                </div>
                <div className="col-sm-3" id="footerLinks">
                    <p onclick="location.href='GuestPolicies.html';">Guest Policies</p>
                </div>
                <div className="col-sm-3" id="footerLinks">
                    <p onclick="location.href='privacy.html';">Privacy policy</p>
                </div>
                <div className="col-sm-3" id="footerLinks">
                    <p onclick="location.href='termsofuse.html';">Terms of use</p>
                </div>
                <div className="col-sm-3" id="footerLinks">
                    <p onclick="location.href='helpCenter.html';">Help Center</p>
                </div>
            </div>
        </div>
    );
}


export default FooterTitle;
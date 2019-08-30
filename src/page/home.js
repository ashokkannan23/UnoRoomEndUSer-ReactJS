import React from 'react';
import { Link } from "react-router-dom";
import NavBarwithSearch from '../Components/navbarwithsearch';

const containerFluidStyle = {
    paddingRight: '0px',
    paddingLeft: '0px'

}

function YourComponent() {
    return (
        <div>
            <div className="container-fluid" style={containerFluidStyle}>
                <NavBarwithSearch />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <Link to="/gotoabout">GoTo About</Link>
                    </div>
                    <div className="col-md-6 text-center">
                        <Link to="/gotosearch">GoTo Search</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YourComponent;
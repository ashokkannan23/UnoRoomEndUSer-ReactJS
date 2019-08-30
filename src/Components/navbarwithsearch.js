import React from 'react';
import './src/../../assets/css/navbarwithsearch.css';
import '../assets/css/t-datepicker.min.css';
import NavBar from './navbar';

function NavBarwithSearch() {
    return (
        <div className="jumbotron-fluid">
            <NavBar />
            <div className="container">
                <div className="center" style={{ margin: '0 auto' }}>
                    <div className="form-inline" id="form" action="">
                        <button type="" id="propertyname">UnoRoom in Bangalore</button>
                        <select name="roomtype" id="roomType" placeholder="Room Type"></select>
                        <div className="t-datepicker">
                            <div className="t-check-in"></div>
                            <div className="t-check-out"></div>
                        </div>
                        <select name="adults" id="" placeholder="Adults">
                            <option value="1adult">1 adult</option>
                            <option value="2adults">2 adults</option>
                            <option value="3adults">3 adults</option>
                            <option value="4 adults">4 adults</option>
                        </select>
                        <button id="search" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NavBarwithSearch;
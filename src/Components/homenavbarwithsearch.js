import React, { Component } from 'react';
import './src/../../assets/css/homenavbarwithsearch.css';
import NavBar from './navbar';
import Example from '../Components/datepicker';
import axios from 'axios';
import '../scripts/api';

class HomeNavBarwithSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyname: [],
            buildingtype: [],
            uiRoomType: {
                "SingleBedRoom": "Single Bed Room",
                "DoubleBedRoom": "Double Bed Room",
                "OneBHKApartment": "One BHK Apartment",
                "TwoBHKApartment": "Two BHK Apartment",
                "ThreeBHKApartment": "Three BHK Apartment",
            }
        }
    }


    componentDidMount() {
        axios.all([
            axios.get(`/facility`),
            axios.get(`/meta/roomtypes?buildingtype=Hotel`)
        ])
            .then(axios.spread((propertyname, buildingtype) => {
                console.log(propertyname.data[0].name, buildingtype.data);
                this.setState({
                    propertyname: propertyname.data[0].name,
                    buildingtype: buildingtype.data
                });
            }))
            .catch(error => console.log(error));
    }


    render() {
        const { propertyname, buildingtype, uiRoomType } = this.state;
        return (
            <div className="jumbotron-fluid">
                <div className="container-fluid">
                    <NavBar />
                </div>
                <div className="container-fluid" style={{ paddingBottom: '40px', paddingTop: '60px' }}>

                    <div className="center">
                        <span style={{ fontSize: '18px' }}>Hotel</span>
                        <div className="form-inline" id="form" action="">
                            <button type="" id="propertyname">{propertyname}</button>
                            <select name="roomtype" id="roomType" placeholder="Room Type">
                                {buildingtype.map((roomtype, index) => (
                                    <option key={index} value={roomtype}>{uiRoomType[roomtype]}</option>
                                ))}
                            </select>
                            <Example />
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
}


export default HomeNavBarwithSearch;
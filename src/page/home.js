import React from 'react';
import { Link } from "react-router-dom";

function YourComponent() {
    return (
        <div>
            <div className="contaner">
                <div>
                    <div className="input-group">
                        <span className="input-group-btn">
                            <Link to="/gotoabout">GoTo About</Link>
                            <br />
                            <Link to="/gotosearch">GoTo Search</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YourComponent;
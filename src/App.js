import React from 'react';
import NavBar from './Components/navbar';
import FooterTitle from './Components/footerTitle';
import UnoRoom from './pages/unoRoom';

const containerFluidStyle = {
    paddingRight: '0px',
    paddingLeft: '0px'

}

function App() {
    return (
        <div>
            <div className="container-fluid" style={containerFluidStyle}>
                <NavBar />
                <FooterTitle />
                <UnoRoom />
            </div>
        </div>
    );
}


export default App;
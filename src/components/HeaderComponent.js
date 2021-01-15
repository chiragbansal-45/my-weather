import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';

const Header = (props) => {
    return(
        <div>
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/" > Chirag Bansal </NavbarBrand>
                    </div>
                 </Navbar>
        </div>

        </div>
    )
}
export default Header;
import React, {Component} from 'react';

//assets imports
import Logo from '../assets/images/logo.png';

class Navbar extends Component {

    render() {

        return (
            <nav>

                <div className="application-container">
                    <div className="nav__container animatedParent">
                        <div className="nav__logo animated fadeInLeftShort">
                            <img src={Logo} alt="BdayStashPostLogo"/>
                        </div>
                        <div className="nav__links animated fadeInRightShort">
                            {/*Link*/}
                            <div className="nav__link">
                                <a href="#">Home</a>
                            </div>
                            {/*Link*/}
                            <div className="nav__link">
                                <a href="#">Login</a>
                            </div>
                            {/*Link*/}
                            <div className="nav__link">
                                <a href="#">Register</a>
                            </div>
                            {/*Link*/}
                            <div className="nav__link">
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        )

    }

}

export default Navbar;
import React, {Component} from 'react';

//assets imports
import Logo from '../assets/images/logo.png';
//popup Imports
import SignInPopUp from "./signIn";
import RegisterPopup from './register'

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signOpen: false,
            registerOpen: false
        };

    }

    //popup signInOpen handler
    handleClickSignOpen = () => {
        this.setState({signOpen: true});
    };

    //popup registerOpen handler
    handleClickRegisterOpen = () => {
        this.setState({registerOpen: true});
    };

    //signInpopup Close
    handleSignClose = () => {
        this.setState({signOpen: false});
    };

    //Registerpopup Close
    handleRegisterClose = () => {
        this.setState({registerOpen: false});
    };

    //active class nav handler
    activeNav = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.querySelector("nav").classList.add("active");
        } else if (document.body.scrollTop < 150 || document.documentElement.scrollTop > 150) {
            document.querySelector("nav").classList.remove("active");
        }
    }

    //component did mount
    componentDidMount() {
        window.addEventListener('scroll', this.activeNav);
    }

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
                            <div onClick={this.handleClickSignOpen} className="nav__link">
                                <a href="javascript:void(0)">Login</a>
                            </div>
                            {/*Link*/}
                            <div onClick={this.handleClickRegisterOpen} className="nav__link">
                                <a href="javascript:void(0)">Register</a>
                            </div>
                            {/*Link*/}
                            <div className="nav__link">
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>


                {/*signIn popup*/}
                {
                    this.state.signOpen ? <SignInPopUp
                        open={this.state.signOpen}
                        closeHandler={this.handleSignClose}
                    /> : null
                }
                {/*registeration Popup*/}
                {
                    this.state.registerOpen ? <RegisterPopup
                        open={this.state.registerOpen}
                        closeHandler={this.handleRegisterClose}
                    /> : null
                }


            </nav>
        )

    }

}

export default Navbar;
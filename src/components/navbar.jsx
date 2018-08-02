import React, {Component} from 'react';

//assets imports
import Logo from '../assets/images/logo.png';
//popup Imports
import SignInPopUp from "./signIn";

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };

    }

    //popup Open handler
    handleClickOpen = () => {
        this.setState({open: true});
    };

    //popup Close
    handleClose = () => {
        this.setState({open: false});
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
                            <div onClick={this.handleClickOpen} className="nav__link">
                                <a href="javascript:void(0)">Login</a>
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

                <SignInPopUp
                    open={this.state.open}
                    closeHandler={this.handleClose}
                />


            </nav>
        )

    }

}

export default Navbar;
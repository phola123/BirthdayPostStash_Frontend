import React, {Component} from 'react';

//assets imports
import Logo from '../assets/images/logo.png';

//redux import
import {connect} from 'react-redux';
import actions from "../store/actions";

class Navbar extends Component {

    //active class nav handler
    activeNav = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.querySelector("nav").classList.add("active");
        } else if (document.body.scrollTop < 150 || document.documentElement.scrollTop > 150) {
            document.querySelector("nav").classList.remove("active");
        }
    }

    //navbarSpacer

    navSpacer = () => {
        const navHeight = document.querySelector('nav').clientHeight;
        const navSpacerEle = document.querySelectorAll('.nav__spacer');
        const navArray = [...navSpacerEle];

        for (let ele of navArray) {
            ele.style.height = navHeight + 'px';
        }
    }

    //component did mount
    componentDidMount() {
        window.addEventListener('scroll', this.activeNav);
        setTimeout(() => {
            this.navSpacer();
        }, 200);
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
                            <div onClick={this.props.handleClickSignOpen} className="nav__link">
                                <a href="javascript:void(0)">Login</a>
                            </div>
                            {/*Link*/}
                            <div onClick={this.props.handleClickRegisterOpen} className="nav__link">
                                <a href="javascript:void(0)">Register</a>
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

const mapDispatchToProps = dispatch => {

    return {

        //popup signInOpen handler
        handleClickSignOpen: () => {
            dispatch(actions.signInOpen);
        },
        //popup registerOpen handler
        handleClickRegisterOpen: () => {
            dispatch(actions.registerOpen);
        }

    }

}


export default connect(null, mapDispatchToProps)(Navbar);
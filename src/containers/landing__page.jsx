import React, {Component} from 'react';

import BaloonScroll from '../assets/images/balloon.png';

//Component Imports

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page_loaded: false
        }

    }


    render() {

        return (

            <div className="landing__container">
                <header>

                    <div className="nav__spacer"></div>
                    <div className="landing__headerWrapper">
                        <div className="application-container">

                            <div className="landing__headInfo animatedParent">

                                <div className="landing__heading animated fadeInUpShort delay-250">
                                    Birthday Post Stash
                                </div>
                                <div className="landing__desc animated fadeInUpShort delay-500">
                                    Lorem ipsum dormet Lorem ipsum dormet Lorem ipsum dormet Lorem ipsum dormet.
                                </div>

                            </div>

                        </div>

                        <div className="landing__scroll animatedParent">
                            <img className="animated pulse infinite" src={BaloonScroll} alt="scrollDown"/>
                        </div>

                    </div>

                </header>

                <section>

                    <div className="section__wrapper">

                        <div className="application-container">

                            <div className="section__header">
                                <div className="section__title">
                                    Our <span>K</span>ey Features
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

            </div>


        )


    }


}


export default Landing;
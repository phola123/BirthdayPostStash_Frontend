import React, {Component} from 'react';
import jump from 'jump.js'
import { easeInOutQuad } from 'ez.js';

// img imports
import BaloonScroll from '../assets/images/balloon.png';
import tagIt from '../assets/images/friend_photo.png';
import bell from '../assets/images/bell.png';
import fBack from '../assets/images/feature__back.png';
import build from '../assets/images/buildIt.png';
import fNext from '../assets/images/feature__next.png';
import sSocial from '../assets/images/shareSocial.png';

// slider import
import $ from 'jquery';
import 'slick-carousel';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page_loaded: false,
        }

    }

    componentDidMount() {
        $('.keyFeature__wrapper').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '.feature__next',
            prevArrow: '.feature__prev',
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ]
        });


        //  Scroll Functions
        const balloonTarget = document.querySelector('.our__features');

        document.querySelector('.landing__scroll').addEventListener('click', function () {


            jump(balloonTarget, {
                duration: 1000,
                offset: -60,
                callback: undefined,
                easing: easeInOutQuad,
                a11y: false
            });
        });


    }


    render() {

        return (

            <div className="landing__container">

                <header>

                    <div className="nav__spacer"></div>
                    <div className="landing__headerWrapper">
                        <div className="application-container">

                            <div className="landing__headInfo animatedParent animateOnce">

                                <div className="landing__heading animated fadeInUpShort delay-250">
                                    Birthday Post Stash
                                </div>
                                <div className="landing__desc animated fadeInUpShort delay-500">
                                    Lorem ipsum dormet Lorem ipsum dormet Lorem ipsum dormet Lorem ipsum dormet.
                                </div>

                            </div>

                        </div>


                        <div className="landing__scroll animatedParent animateOnce">
                            <img  className="animated pulse infinite" src={BaloonScroll} alt="scrollDown"/>
                        </div>
                    </div>

                </header>


                <section className="our__features">
                    <div className="section__wrapper">

                        <div className="application-container">

                            <div className="section__header animatedParent animateOnce">
                                <div className="section__title animated fadeInUp">
                                    Our <span>K</span>ey Features
                                </div>
                            </div>

                            {/*key Fatures Cards ui*/}
                            <div className="keyFeature__wrapper animatedParent animateOnce">

                                {/*feature*/}
                                <div className="keyFeature__card  animated fadeInUpShort delay-250">
                                    <div className="keyFeature__icon">
                                        <img alt="TagImage" src={tagIt}/>
                                    </div>
                                    <div className="keyFeature__header">
                                        Keep it, Tag Them!
                                    </div>
                                    <div className="keyFeature__desc">
                                        Keep all the funny pictures of your friends in a stash. And tag your friends
                                        in them.
                                    </div>
                                </div>

                                {/*feature*/}
                                <div className="keyFeature__card animated fadeInUpShort delay-500">
                                    <div className="keyFeature__icon">
                                        <img alt="bellImage" src={bell}/>
                                    </div>
                                    <div className="keyFeature__header">
                                        Stay updated, Get Notified!
                                    </div>
                                    <div className="keyFeature__desc">
                                        Get a reminder on a special event and access all the photos you stored of
                                        that friend without any hassle of scrolling through all.
                                    </div>
                                </div>

                                {/*feature*/}
                                <div className="keyFeature__card animated fadeInUpShort delay-750">
                                    <div className="keyFeature__icon">
                                        <img alt="buildImage" src={build}/>
                                    </div>
                                    <div className="keyFeature__header">
                                        Create It! Save It.
                                    </div>
                                    <div className="keyFeature__desc">
                                        Get a collage/video of all the photos fabricated specially for your friend on
                                        the special day.
                                    </div>
                                </div>

                                {/*feature*/}
                                <div className="keyFeature__card animated fadeInUpShort delay-1000">
                                    <div className="keyFeature__icon">
                                        <img alt="share Social" src={sSocial}/>
                                    </div>
                                    <div className="keyFeature__header">
                                        Sharing Is Caring.
                                    </div>
                                    <div className="keyFeature__desc">
                                        Access all of these photos in one page so that you can post them on other social
                                        media platforms.
                                    </div>
                                </div>


                            </div>

                            <div className="keyFeature__arrows">


                                <div className="feature__prev">
                                    <img alt="slideBack" src={fBack}/>
                                </div>
                                <div className="feature__next">
                                    <img alt="slideNext" src={fNext}/>
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


/*

1. Keep all the funny pictures of your friends in a stash. And tag your friends in them.
2. Get a reminder on a special event and access all the photos you stored of that friend without any hassle of scrolling through all.

*/
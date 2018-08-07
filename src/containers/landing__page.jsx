import React, {Component} from 'react';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';
import BaloonScroll from '../assets/images/balloon.png';

//img imports
import tagIt from '../assets/images/friend_photo.png';
import bell from '../assets/images/bell.png';
import fBack from '../assets/images/feature__back.png';
import fNext from '../assets/images/feature__next.png';

//Component Imports

//slider import
import $ from 'jquery';
import 'slick-carousel';

configureAnchors({offset: 60, scrollDuration: 800, keepLastAnchorHash: false});


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page_loaded: false
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

                        <a href='#section1'>
                            <div className="landing__scroll animatedParent">
                                <img className="animated pulse infinite" src={BaloonScroll} alt="scrollDown"/>
                            </div>
                        </a>
                    </div>

                </header>

                <ScrollableAnchor id={'section1'}>
                    <section className="our__features">
                        <div className="section__wrapper">

                            <div className="application-container">

                                <div className="section__header animatedParent">
                                    <div className="section__title animated fadeInUp">
                                        Our <span>K</span>ey Features
                                    </div>
                                </div>

                                {/*key Fatures Cards ui*/}
                                <div className="keyFeature__wrapper animatedParent">

                                    {/*feature*/}
                                    <div className="keyFeature__card  animated fadeInUpShort delay-250">
                                        <div className="keyFeature__icon">
                                            <img src={tagIt}/>
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
                                            <img src={bell}/>
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
                                            <img src={tagIt}/>
                                        </div>
                                        <div className="keyFeature__header">
                                            Tag Them!
                                        </div>
                                        <div className="keyFeature__desc">
                                            Keep all the funny pictures of your friends in a stash. And tag your friends
                                            in them.
                                        </div>
                                    </div>

                                    {/*feature*/}
                                    <div className="keyFeature__card  animated fadeInUpShort delay-250">
                                        <div className="keyFeature__icon">
                                            <img src={tagIt}/>
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
                                            <img src={bell}/>
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
                                            <img src={tagIt}/>
                                        </div>
                                        <div className="keyFeature__header">
                                            Tag Them!
                                        </div>
                                        <div className="keyFeature__desc">
                                            Keep all the funny pictures of your friends in a stash. And tag your friends
                                            in them.
                                        </div>
                                    </div>

                                </div>

                                <div className="keyFeature__arrows">


                                    <div className="feature__prev">
                                        <img src={fBack} />
                                    </div>
                                    <div className="feature__next">
                                        <img src={fNext} />
                                    </div>


                                </div>

                            </div>

                        </div>

                    </section>
                </ScrollableAnchor>

            </div>


        )


    }


}


export default Landing;


/*

1. Keep all the funny pictures of your friends in a stash. And tag your friends in them.
2. Get a reminder on a special event and access all the photos you stored of that friend without any hassle of scrolling through all.

*/
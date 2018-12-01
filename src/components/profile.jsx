import React, {Component} from 'react';


// img imports
import dummy1 from '../assets/images/placeholder/2.jpg';
import dummy2 from '../assets/images/placeholder/4.jpg';
import dummy3 from '../assets/images/placeholder/Adelaine Morin.jpg';
import dummy4 from '../assets/images/placeholder/ana.jpg';
import dummy5 from '../assets/images/placeholder/claire.jpg';
import dummy6 from '../assets/images/placeholder/Glenne Headly.jpg';
import dummy7 from '../assets/images/placeholder/Hiroyuki Sanada.jpg';


class Profile extends Component {
    constructor(props) {
        super(props);

        this.placeholder = null;

    }


    render() {
        return (
            <div className="main">


                <div id="profilePage">
                    <div className="row">
                        <div className="leftProfile col-md-8">
                            <div className="wrapper">
                                <div className="leftInfo">
                                    <div className="wrapperTwo">
                                        <div className="topPart">
                                            <h4>Hello, Vivek Anand Oberoi</h4>
                                            <p className="interest"><span>Birthday: </span>15th September, 1996</p>
                                            <p className="interest"><span>Zodiac:︎ </span>Gemini ♊</p>
                                            <p className="interest"><span>Loves to do: </span>Skiing, Snowboarding,
                                                Electric guitar, Acoustic guitar</p>
                                            <p className="interest"><span>Favorite food: </span>Peanut Butter, Jelly</p>
                                            <h5 className="birthdayHeading">Upcoming Birthdays</h5>

                                            <p data-toggle="tooltip" data-placement="top" data-html="true"
                                               title="<img class='tooltipimg' src=src={dummy4} width='150' /> <p class='tooltipPara'>Claire Littleton<br>Birthday: 25th November</p>"
                                               className="birthdays">Claire Littleton, 25th November</p>
                                            <p data-toggle="tooltip" data-placement="top" data-html="true"
                                               title="<img class='tooltipimg' src={dummy3} width='150' /> <p class='tooltipPara'>Adelaine Morin<br>Birthday: 29th November</p>"
                                               className="birthdays">Adelaine Morin, 29th November</p>
                                            <p data-toggle="tooltip" data-placement="top" data-html="true"
                                               title="<img class='tooltipimg' src={dummy4} width='150' /> <p class='tooltipPara'>Ana Lucia<br>Birthday: 29th November</p>"
                                               className="birthdays">Ana Lucia, 29th November</p>
                                            <p data-toggle="tooltip" data-placement="top" data-html="true"
                                               title="<img class='tooltipimg' src='images/rachel.jpg' width='150' /> <p class='tooltipPara'>Rachel Green<br>Birthday: 15th December</p>"
                                               className="birthdays">Rachel Green, 15th December</p>

                                        </div>
                                        {/*topPart */}

                                        <div className="bottomButtons">
                                            <a className="anchor1" href="#">Add Friends</a>
                                            <a className="anchor2" href="#">Add More Photos</a>
                                        </div>

                                    </div>

                                </div>


                                <div className="rightPicture">
                                    <div className="innerWrapper">
                                        <div className="topBox"></div>
                                        <img src={dummy1} alt="Profile Picture"/>
                                        <div className="bottomBox">
                                            <p>I always wanted to be a great writer, like Victor Hugo who wrote "Les
                                                Miserable", or like Roman Roland who wrote "John Christopher".
                                            </p>
                                        </div>
                                    </div>

                                </div>


                                <a id="viewAll" href="#">View All Friends</a>


                                <p>Recently added friends</p>
                                <ul className="meow">
                                    <li><img src={dummy2} alt=""/></li>
                                    <li><img src={dummy2} alt=""/></li>
                                    <li><img src={dummy2} alt=""/></li>
                                    <li><img src={dummy2} alt=""/></li>
                                    <li><img src={dummy2} alt=""/></li>
                                    <li><img src={dummy2} alt=""/></li>
                                    <li><img src={dummy2} alt=""/></li>
                                    <li><img src={dummy2} alt=""/></li>
                                    <li><img src={dummy2} alt=""/></li>
                                </ul>


                            </div>


                        </div>


                        <div className="rightFriends col-md-4">
                            <div className="wrapper">
                                <h3>Your Top Five Friends</h3>
                                <div className="friend friendOne">
                                    <div className="innerWrapper">
                                        <div className="leftImage">
                                            <img src={dummy2} alt="Niha malhotra"/>
                                        </div>


                                        <div className="rightText">
                                            <h4>Niha Malhotra</h4>
                                            <p>Loves cookies, yoga and dancing</p>
                                        </div>


                                        <div className="overlay">
                                            <div className="socialIcons">
                                                <a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                                <a href="http://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                                <a href="http://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                                <a href="http://www.whatsapp.com"><i
                                                    className="fab fa-whatsapp"></i></a>
                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <div className="friend friendTwo">
                                    <div className="innerWrapper">
                                        <div className="leftImage">
                                            <img src="images/tomholland.jpg" alt="Niha malhotra"/>
                                        </div>


                                        <div className="rightText">
                                            <h4>Tom Holland</h4>
                                            <p>Loves playing golf and bridge</p>
                                        </div>


                                        <div className="overlay">
                                            <div className="socialIcons">
                                                <a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                                <a href="http://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                                <a href="http://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                                <a href="http://www.whatsapp.com"><i
                                                    className="fab fa-whatsapp"></i></a>
                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <div className="friend friendThree">
                                    <div className="innerWrapper">
                                        <div className="leftImage">
                                            <img src="images/Glenne Headly.jpg" alt="Niha malhotra"/>
                                        </div>


                                        <div className="rightText">
                                            <h4>Glenne Headly</h4>
                                            <p>Loves shooting, yoga and dancing</p>
                                        </div>


                                        <div className="overlay">
                                            <div className="socialIcons">
                                                <a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                                <a href="http://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                                <a href="http://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                                <a href="http://www.whatsapp.com"><i
                                                    className="fab fa-whatsapp"></i></a>
                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <div className="friend friendFour">
                                    <div className="innerWrapper">
                                        <div className="leftImage">
                                            <img src="images/Hiroyuki Sanada.jpg" alt="Niha malhotra"/>
                                        </div>


                                        <div className="rightText">
                                            <h4>Hiroyuki Sanada</h4>
                                            <p>Loves Kung fu, yoga and dancing</p>
                                        </div>


                                        <div className="overlay">
                                            <div className="socialIcons">
                                                <a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                                <a href="http://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                                <a href="http://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                                <a href="http://www.whatsapp.com"><i
                                                    className="fab fa-whatsapp"></i></a>
                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <div className="friend friendFive">
                                    <div className="innerWrapper">
                                        <div className="leftImage">
                                            <img src="images/Michael Mantenuto.jpg" alt="Niha malhotra"/>
                                        </div>


                                        <div className="rightText">
                                            <h4>Michael Mantenuto</h4>
                                            <p>Loves car racing, surfing</p>
                                        </div>


                                        <div className="overlay">
                                            <div className="socialIcons">
                                                <a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                                <a href="http://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                                                <a href="http://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                                <a href="http://www.whatsapp.com"><i
                                                    className="fab fa-whatsapp"></i></a>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }


}

export default Profile;
import React, {Component} from 'react';

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

                    <div className="navbar__spacer"></div>

                </header>
            </div>


        )


    }


}


export default Landing;
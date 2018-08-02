import React from 'react';

//Component Imports
import Popup from '../containers/popup';

// images import

import signInImage from '../assets/images/sign-in-1.png';

const SignInPopUp = (props) => {

    return (
        <Popup open={props.open}
               closeHandler={props.closeHandler}>
            <div className="access__wrapper">

                <div className="access__lhs">
                    <img src={signInImage} alt="signInImage"/>
                </div>

                <div className="access__rhs">


                </div>
            </div>
        </Popup>

    )


}


export default SignInPopUp;
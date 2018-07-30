import React from 'react';

//images import

import signInImage from '../assets/images/sign-in-1.png';

const SignInPopUp = () => {


    return(

        <div className="modal fade" id="SignInModal" tabIndex="-1" role="dialog" aria-labelledby="SignInModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">

                {/*commom wrapper for sign in and register*/}
               <div className="access__wrapper">

                   <div className="access__lhs">
                       <img src={signInImage} alt="signInImage" />
                   </div>

                   <div className="access__rhs">



                   </div>

               </div>

            </div>
        </div>


    )



};

export default SignInPopUp;
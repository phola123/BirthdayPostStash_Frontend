import React from 'react';
import loaderImg from '../assets/images/loader.svg';

const Loader = () => {

    return (

        <div className='overlay'>
            <img alt="Loading" src={loaderImg} />
        </div>

    )

}

export default Loader;
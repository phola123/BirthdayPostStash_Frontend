import React from 'react';
import loaderImg from '../assets/images/loader.svg';

const Loader = () => {

    return (

        <div className='overlay'>
            <img src={loaderImg} />
        </div>

    )

}

export default Loader;
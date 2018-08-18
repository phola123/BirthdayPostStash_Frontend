import React from 'react';

const Loader = () => {

    return (

        <div className='overlay'>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )

}

export default Loader;
import React from 'react';

const Banner = () => {
    return (
        <div style={{ height: 440, backgroundSize: 'cover' }} className='position-relative background-banner'>
            <div className='position-absolute top-50 end-50 m-5'>
                <p className='text-white fs-2 fs-sm-6 fw-bold'>Computer Engineering</p>
                <p className='text-white'>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

// backgroundImage: `url("https://i.ibb.co/f0XGSfB/Rectangle-2.png")`,
export default Banner;
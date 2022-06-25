import React from 'react'
import banner from '../../images/banner.png'

const Banner = () => {
    return (
        <div className='flex justify-center items-center mt-4 mb-8 md:my-[60px]'>
            <img src={banner} />
        </div>
    )
}

export default Banner
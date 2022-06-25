import React from 'react'

const SellerCard = ({rank, name, price, src}) => {
    return (
        <div className='relative bg-white border border-[#E3E1E3] rounded-[20px] flex flex-col justify-center items-center pt-8 md:pt-11 pb-2 md:pb-5 px-6 md:px-11'>
            <div className='absolute top-1 left-1 flex justify-center items-center bg-[#DA18A3] rounded-full w-[33px] h-[33px]'>
                {rank}
            </div>
            <div className='overflow-hidden w-[77px] h-[77px] rounded-full'>
                <img src={src}/>
            </div>
            <div className='text-[#1B1A21] font-semibold text-center'>{name}</div>
            <div>{price}</div>
        </div>
    )
}

export default SellerCard
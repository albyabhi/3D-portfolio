import React from 'react'
import { clientReviews } from '../contants'

const Clients = () => {
  return (
   <section className='c-space my-20'>
    <h3 className='head-text'> Hear my clients</h3>
    <div className='clients-container'>

        {clientReviews.map(({id ,name , review ,position, img})=>(
            <div key={id} className='client-review'>
                    <div className='text-white font-light'>
                      {review}
                    </div>
                    <div className='client-content'>
                       <div className='flex gap-3'>
                        <img src={img} alt={name} className='w-12 h-12 rounded-full' />
                       <div className='flex flex-col'>
                            <p className='font-semibold text-white-800'>
                                {name}
                            </p>
                            <p className=' text-white-500 md:text-base text-sm font-light'>
                                {position}
                            </p>
                       </div>
                       <div className='flex selt-end items-center gap-2'>
                             {Array.from({length:5}).map((_,index) =>(
                                <img src='/assets/star.png' key={index}  className='w-5 h-5'/>
                             ))}
                       </div>
                       </div>
                    </div>
            </div>
        ))}

    </div>
   </section>
  )
}

export default Clients
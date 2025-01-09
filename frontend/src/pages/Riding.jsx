import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-home-5-line"></i>
        </Link>
      <div className='h-1/2'>
      <img className='h-full w-full object-cover' src="https://blogadmin.uberinternal.com/wp-content/uploads/2022/08/image11-11.png" alt="" />
      </div>
      <div className="h-1/2 p-4">
      <div className='flex items-center justify-between'>
      <img className="h-12" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
      <div className='text-right'>
        <h2 className='text-lg font-medium'>Andrew</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>WB 04 AB 1234</h4>
        <p className='text-sm text-gray600'>Maruti Swift Dzire</p>
      </div>
      </div>
      <div className="flex gap-5 justify-between flex-col items-center">        
      </div>
      <div className="w-full mt-5">
        
        <div className="flex ietms-center gap-5 p-3 border-b-2">
        <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya Talab,Ahmedabad
            </p>
          </div>
        </div>
        <div className="flex ietms-center gap-5 p-3 border-b-2">
        <i className="ri-currency-line"></i>
          <div>
            <h3 className="text-lg font-medium">$14.99</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
          </div>
        </div>
      </div>
      <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a payment</button>
      </div>
    </div>
  )
}

export default Riding

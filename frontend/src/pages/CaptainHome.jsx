import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
      <div className='h-screen'>
        <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
      <div className='h-1/2'>
      <img className='h-full w-full object-cover' src="https://blogadmin.uberinternal.com/wp-content/uploads/2022/08/image11-11.png" alt="" />
      </div>
      <div className="h-1/2 p-4">
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <img className='h-10 w-10 rounded-full object-cover' src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.png?width=1024&format=png&auto=webp&s=c4e9abc47d193474a2fa1a7e337d9d9340dce947" alt="" />
          <h4 className='text-lg font-medium'>Harsh Goenka</h4>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>$12.087</h4>
          <p className='text-sm bg-gray-600'>Earned</p>
        </div>
      </div>
      <div className='flex justify-center gap-5 items-start'>
        <div className='text-center '>
          <i className='text-2xl font-thin ri-timer-2-line'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center '>
          <i className="text-2xl font-thin ri-speed-up-line"></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center '>
          <i className="text-2xl font-thin ri-booklet-line"></i>
          <h5 className='text-lg font-medium' font-medium>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CaptainHome

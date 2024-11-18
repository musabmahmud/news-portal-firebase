import React from 'react'
import { FaFacebook, FaFacebookF, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa'

const RightSideBar = () => {
  return (
    <div>
      <div className='space-y-3 mb-6 p-4'>
        <h2 className="text-3xl">Login with</h2>
        <button className="w-full btn btn-outline">
          <FaGoogle /> Google
        </button>
        <button className="w-full btn btn-outline">
          <FaFacebook /> Facebook
        </button>
      </div>

      <div className='p-4'>
        <h2 className="mb-3 text-3xl">Find Us on</h2>
        <a href="" className='flex items-center p-4 border rounded-t-lg text-lg'>
          <FaFacebook className='mr-3' />
          <span>Facebook</span>
        </a>
        <a href="" className='flex items-center border-x p-4 border text-lg'>
          <FaTwitter className='mr-3' />
          <span>Twitter</span>
        </a>
        <a href="" className='flex items-center p-4 border rounded-b-lg text-lg'>
          <FaLinkedin className='mr-3' />
          <span>Linkedin</span>
        </a>
      </div>
    </div>
  )
}

export default RightSideBar
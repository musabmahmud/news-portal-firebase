import React from 'react'
import RightSideBar from '../../shared/RightSideBar'
import LeftSideBar from '../../shared/LeftSideBar'
import BreakingNews from './BreakingNews'
import Navbar from '../../shared/Navbar'

const Home = () => {
  return (
    <>
      <BreakingNews />
      <Navbar />
      <div className='gap-5 grid lg:grid-cols-4 columns-1'>
        <LeftSideBar />
        <div className='lg:col-span-2'>Home</div>
        <RightSideBar />
      </div>
    </>
  )
}

export default Home
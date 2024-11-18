import React from 'react'
import Header from '../../shared/Header'
import Navbar from '../../shared/Navbar'
import RightSideBar from '../../shared/RightSideBar'
import LeftSideBar from '../../shared/LeftSideBar'
import BreakingNews from './BreakingNews'

const Home = () => {
  return (
    <>
      <Header />
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
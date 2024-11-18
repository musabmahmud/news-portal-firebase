import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import Header from '../shared/Header'

const Root = () => {
    return (
        <div className='mx-auto max-w-6xl font-poppins'>
            <Header />
            <Outlet />
        </div>
    )
}

export default Root
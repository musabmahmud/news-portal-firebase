import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div className='mx-auto max-w-6xl font-poppins'>
            <Outlet />
        </div>
    )
}

export default Root
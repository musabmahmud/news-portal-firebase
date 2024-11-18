import React from 'react'
import { Link } from 'react-router-dom'
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className="mb-5 navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul
                        tabIndex={0}
                        className="z-[1] bg-base-100 shadow pb-2 rounded-box w-52 dropdown-content menu menu-sm">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                {/* <a className="text-xl btn btn-ghost">daisyUI</a> */}
            </div>
            <div className="lg:flex hidden navbar-center">
                <ul className="px-1 menu menu-horizontal">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className='flex items-center gap-2'>
                    <img className='w-8 h-8' src={user} alt="" />
                    <span className='font-semibold'>Login</span>
                </Link>
            </div>
        </div >
    )
}

export default Navbar
import React from 'react'
import logo from '../assets/logo.png';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='space-y-3 pt-10 text-center'>
            <Link to='/'>
                <img className='mx-auto' src={logo} alt="Dragon News" />
            </Link>
            <p>Journalism Without Fear or Favor</p>
            <p className="text-xl">{moment().format('dddd, MMMM DD, YYYY')}</p>
        </div>
    )
}

export default Header
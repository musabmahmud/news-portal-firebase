import React from 'react'
import logo from '../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='space-y-3 pt-10 text-center'>
            <img className='mx-auto' src={logo} alt="Dragon News" />
            <p>Journalism Without Fear or Favor</p>
            <p className="text-xl">{moment().format('dddd, MMMM DD, YYYY')}</p>
        </div>
    )
}

export default Header
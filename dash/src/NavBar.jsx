import React from 'react';
import { FaDashcube } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import {FaMoneyBill} from 'react-icons/fa'
import { FaCreditCard } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'
import './index.css'
const NavBar = () => {
  return (
    <div className='main'>
      <ul>
        <li className='list1'>Home</li>
       <li className='list'> <FaDashcube className='icon'/> <p className='p'>DashBoards</p></li>
        <li className='list'><FaCalendar /> <p className='p'>Calendar</p></li>
        <li className='list'><FaMoneyBill/> <p className='p'>Taxes</p></li>
        <li className='list'><FaCreditCard/> <p className='p'>Payments</p></li>
        <li className='list'><FaPlus/> <p className='p'>Subscribtion</p></li>
        <li className='list'><FaBookmark/> <p className='p'>Pins</p></li>
        <li className='list'><FaCheck/> <p className='p'> Work ToDos</p></li>
      </ul>
    </div>
  )
}

export default NavBar
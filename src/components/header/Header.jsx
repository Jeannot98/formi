import { useState } from 'react'
import './Header.scss'
import {AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Header = () => {

    const [open, setOpen] = useState(false);

    const showKenu = () => {
        setOpen(!open)
    }
  return (
    <div className='header'>
        <div className="header__logo">
            <h1>Formi.</h1>
        </div>

        <div className="menu__icon">
            <AiOutlineMenu size={30} className='menu' onClick={showKenu}/>
        </div>

        <nav className={open ? 'navbar active' : 'navbar'}>
            <ul className='nav__ul'>
                <div className="closed">
                    <AiOutlineCloseCircle size={24} className='close' onClick={showKenu}/>
                </div>

                <li>
                    <Link to='/'>Work</Link>
                </li>
                <li>
                    <Link to='/'>Services</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Culture</Link>
                </li>
                <li>
                    <Link to='/'>testimonials</Link>
                </li>
                <li>
                    <Link to='/'>Methods</Link>
                </li>
                <li>
                    <Link to='/'>Blog</Link>
                </li>
                <div className="header__contact">
                    <Link to='/contact'>Contact Us</Link>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Header
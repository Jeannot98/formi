import './Footer.scss'
import { Link } from 'react-router-dom'
import {AiOutlineInstagram, AiFillLinkedin, AiOutlineFacebook,AiFillTwitterCircle} from 'react-icons/ai'
import {BsYoutube, BsPinterest} from 'react-icons/bs'
const Footer = () => {
  return (
    <section className='footer'>
        <div className="footer__container">
            <div className="footer__logo">
                <h1>LOGO</h1>
                <p>Company Slogan</p>
            </div>

            <div className="footer__card">
                <Link to='/'>Dark Designs</Link>
                <Link to='/'>Pre Sale Faqs</Link>
                <Link to='/'>Affiliates</Link>
                <Link to='/'>Ressources</Link>
            </div>

            <div className="footer__card">
                <Link to='/'>Dark Designs</Link>
                <Link to='/'>Pre Sale Faqs</Link>
                <Link to='/'>Affiliates</Link>
                <Link to='/'>Ressources</Link>
            </div>

            <div className="footer__card">
                <Link to='/'>Dark Designs</Link>
                <Link to='/'>Pre Sale Faqs</Link>
                <Link to='/'>Affiliates</Link>
                <Link to='/'>Ressources</Link>
            </div>
        </div>

        <div className="footer__icons">
            <AiOutlineInstagram className='footer__icon'/>
            <AiOutlineFacebook className='footer__icon'/>
            <AiFillTwitterCircle className='footer__icon'/>
            <BsYoutube className='footer__icon'/>
            <AiFillLinkedin className='footer__icon'/>
            <BsPinterest className='footer__icon'/>
        </div>
    </section>
  )
}

export default Footer
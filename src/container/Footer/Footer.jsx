import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { images } from '../../constants'
import './Footer.css'
import { FooterOverlay, Newsletter } from '../../components'
const Footer = () => (
  <div className="app__footer section__padding " id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd st, New York, NY 10019, USA</p>
        <p className="p__opensans">+233 26347 2565</p>
        <p className="p__opensans">+233 26347 2565</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <p className="p__opensans">
            The best way to find yourself is to lose yourself in the service of
            others.
          </p>
          <img src={images.spoon} alt="spoon_image" style={{ marginTop: 50 }} />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mondat-Friday:</p>
        <p className="p__opensans">08:00 am -12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00am - 11:30Pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All rights reserved.</p>
    </div>
  </div>
)

export default Footer

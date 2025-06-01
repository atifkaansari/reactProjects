import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div id='footer'>
        <div className="footer-content">
            <div className="footer-social">
                <button><i className='fa-brands fa-twitter'></i></button>
                <button><i className='fa-brands fa-facebook'></i></button>
                <button><i className='fa-brands fa-instagram'></i></button>
                <button><i className='fa-brands fa-linkedin'></i></button>
            </div>
            <div className="footer-section">
                <p>İstanbul, Türkiye <a href="tel:+905555555555">+905555555555</a> <a href="mailto:info@example.com">info@example.com</a></p>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2025 <a href="https://kodkit.com.tr">KodKit</a>. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
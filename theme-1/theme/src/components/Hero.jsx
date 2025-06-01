import React from 'react'
import '../css/Hero.css'

const Hero = () => {
  return (
    <div id='hero'>
        <div className="hero-content">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus aliquam magnam quas nesciunt sapiente consequuntur corporis sit voluptas architecto. A amet in nesciunt voluptatibus accusantium. Consectetur eligendi saepe sapiente voluptatibus optio quod veritatis doloremque, magni magnam eveniet id cum tenetur ea suscipit aliquam possimus vero, perferendis a consequuntur reprehenderit?</p>
            <p><b>For any questions please contact</b> <a href="mailto:">info@yourdomain.com</a></p>
        </div>
        <div id='hero-cards' className="hero-cards">
            <div className="hero-card">
                <img src="/download.jpg" alt="" />
                <h4>about</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.</p>
                <a href="#">learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="hero-card">
                <img src="/download.jpg" alt="" />
                <h4>Contact</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.</p>
                <a href="#">learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Hero
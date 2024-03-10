import React from 'react'
import "./footer.scss"
import linkedin from "../../assets/linkedin.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"


const footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="left">
                    <p className='lefthead'>Stay Informed</p>
                    <p>Sign up for our newsletter to recieve the latest updates, tips, and exclusive content.</p>
                    <input type="email" placeholder='email'/><br/>
                    <button className='signUp'>Sign Up</button>
                </div>
                <div className='right'>
                    <div className="rightflex">
                        <div className='rightleft'>
                            <p className='righthead'>Company</p>
                            <ul className='company'>
                                <li>About us</li>
                                <li>Our Vision</li>
                                <li>Our Mission</li>
                                <li>Our Values</li>
                                <li>Our Idea</li>
                            </ul>
                        </div>
                        <div className='rightright'>
                            <p className='righthead'>Customer Service</p>
                            <ul className='customer'>
                                <li>Contact us</li>
                                <li>My Account</li>
                            </ul>
                        </div>
                    </div>
                    <div className="follow">
                        Follow us on
                        <div className="icons">
                            <img src={linkedin} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottomleft">
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
                <div className="bottomright">
                    <p>© 2024 StressAway.</p>
                    <p>All trademarks are property of their respective owners.</p>
                </div>
            </div>
        </div>
    )
}

export default footer
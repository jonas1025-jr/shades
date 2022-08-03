import React from 'react'
import './Header.css'
const Header = () => {
    return(
        <div className="header">
            <div className="header__container">
                <span>PRESENT YOUR SERVICE</span>
                    <h1>Make landing pages fast and easily</h1>
                    <p>Create custom landing pages with Shades that convert more visitors than any websites-no coding required.</p>
                <div className="header__container-inputs">
                    <input type='text' placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
                <span>Trusted by over 50,000+ customers</span>
            </div>
        </div>
    )
}
export default Header
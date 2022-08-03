import { Layers } from '@mui/icons-material'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__left">           
                <div className="navbar__logo-container">
                    <Layers />
                    <h2>Shades</h2>
                </div>
                <div className="navbar__links">
                    <a href="#">Free Landing Pages</a>
                    <a href="#">Features</a>
                    <a href="#">Services</a>
                    <a href="#">Prices</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div className="navbar__right">
                <a href='#'>Get Started</a>
            </div>
        </div>
    )
}

export default Navbar
import React from "react";
import ReactDOM from "react-dom/client";
export const Header = () => {
    return (
        <div className="Header">
        <div className="logo-container">
            <img className="logo"
             src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
            />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    );
};
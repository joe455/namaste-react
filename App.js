import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
                {/* <img className="logo" src="assets/logo.png"></img> */}

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
}

const AppLayOut = () => {
    return (
        <div className="">
            <Header />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayOut />);



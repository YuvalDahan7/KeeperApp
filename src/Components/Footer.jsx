import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear(); 

function Footer() {
    return (
    <div className="footer">
        <p>Yuval Dahan ⓒ {currentYear}</p>
    </div>
    )
} 

export default Footer;
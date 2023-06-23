import React from "react";

function Footer(){

    const curYear = new Date().getFullYear();

    return <footer>
     <p>copyright @ NotHuman {curYear}</p>;
    </footer> 
}

export default Footer;
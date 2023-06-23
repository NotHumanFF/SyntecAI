import React from "react";

function Header(){
    return <div className="navbar">
        <h1 className="logo">
            AI GPT
        </h1>
        <div className="navlinkbox">
            <a className="navlink" href="#">Home</a>
            <a className="navlink" href="#">AboutUs</a>
            <a className="navlink" href="#">Blog</a>
            <a className="navlink" href="#">Contact</a>
        </div>
        <a class="glow-on-hover" href="https://nothumanff.github.io/nlp/">Try Now </a>    
    </div>
}

export default Header;

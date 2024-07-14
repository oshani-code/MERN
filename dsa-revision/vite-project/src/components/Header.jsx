import React from "react";
import site from "../../public/images/site-logo.svg"


function Header(){
    return(
        <>
        <header>
        <div className=" flex text-center bg-gray-500 h-6 w-6">
           <img src={site} alt="logo" />
           <a href="#"><span className="logo-text font-bold ">DSA Revision</span></a>
        </div>
        </header>
        </>
    )
}

export default Header
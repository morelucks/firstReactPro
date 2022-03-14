import React from "react";
import Header from "./Header.css";
function header({title}){
    console.log({title})
    return( 
    <nav>
        {title}
         <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>

    </ul>
    </nav>
    );
}
export default header;
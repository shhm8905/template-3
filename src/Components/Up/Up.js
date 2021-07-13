import React from 'react';
import{Link} from "react-scroll";
import "./Up.css";

function Up() {
    window.addEventListener('scroll',()=>{
        const upIcon = document.getElementById('upIcon');
        if(window.scrollY>=600){
            upIcon.style.display="flex";
        }else{
            upIcon.style.display="none";
        }
    });

    return (
        <div className="upIcon" id="upIcon">
            <Link smooth={true} to="navbar" >
            <i className="fa fa-angle-double-up icon" aria-hidden="true"></i>
            </Link>
        </div>
    )
}

export default Up;

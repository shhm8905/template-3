import React from 'react';
import{HashLink} from "react-router-hash-link";
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
            <HashLink smooth to="#navbar" >
            <i className="fa fa-angle-double-up icon" aria-hidden="true"></i>
            </HashLink>
        </div>
    )
}

export default Up;

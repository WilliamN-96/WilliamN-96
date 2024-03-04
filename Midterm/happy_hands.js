//This file contains the functions attatched to the Happy Hands project

function mobileNav(){
    let mNav = document.querySelector("nav");
    if (mNav.style.display === "none"){
        mNav.style.display = "inline";
    }else{
        mNav.style.display = "none";
    }
}


var menuItems= document.getElementById("menuItems");
document.getElementById("menuItems").style.zIndex=100;

var x=window.matchMedia("(max-width:800px)"); //This is media query for javascript

function setMenuItemHeight(x){ //This function sets menuItems height depend on the page width
    if(x.matches){
        menuItems.style.maxHeight = "0px";
    }else{
        menuItems.style.maxHeight = "500px";
    }
}

setMenuItemHeight(x);
x.addEventListener(setMenuItemHeight);

// Menu toggle Script
function menutoggle(){
    if (menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "500px";
    }
    else
    {
        menuItems.style.maxHeight = "0px";
    }
}


// // Menu toggle Script 
// var menuItems= document.getElementById("menuItems");
// menuItems.style.maxHeight = "0px";
// document.getElementById("menuItems").style.zIndex=100;

// function menutoggle(){
//     if (menuItems.style.maxHeight == "0px")
//     {
//         menuItems.style.maxHeight = "500px";
//     }
//     else
//     {
//         menuItems.style.maxHeight = "0px";
//     }
// }



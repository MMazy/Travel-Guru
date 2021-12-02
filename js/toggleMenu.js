// Menu toggle Script
var menuItems= document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";
document.getElementById("menuItems").style.zIndex=100;

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




var menuItems= document.getElementById("menuItems");
document.getElementById("menuItems").style.zIndex=100;



function setMenuItemHeight(x){ //This function sets menuItems height depend on the page width
    var x = window.matchMedia("(max-width:800px)"); //This is media query for javascript to check window width
    if(x.matches){
        menuItems.style.maxHeight = "0px";
    }else{
        menuItems.style.maxHeight = "500px";
    }
}

//window.addEventListener("resize",setMenuItemHeight);
//if the window size changes then it will run the setMenuItemHeight function


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


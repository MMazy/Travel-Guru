/* Adapted from the following links: 

https://www.w3schools.com/howto/howto_js_accordion.asp
https://codepen.io/ubahthebuilder/pen/gORqxNe
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_symbol */

function registerAccordionPanelHandlers() {
  var acc = document.getElementsByClassName("toplistingsaccordionpanel");
  var i;

  /* d-md-none d-lg-none */
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
} 

function hideOrExpandPanels() {
  var acc = document.getElementsByClassName("toplistingsaccordionpanel");
  for (i = 0; i < acc.length; i++) {
      var panel = acc[i].nextElementSibling;
      if (window.innerWidth <= 800) {
        panel.style.display = "none";
        acc[i].style.display = "block";
      } else {
        panel.style.display = "block";
        acc[i].style.display = "none";
      }
  }
}

registerAccordionPanelHandlers();
window.addEventListener("resize", hideOrExpandPanels);
hideOrExpandPanels();


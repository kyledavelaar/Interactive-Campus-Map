//==================NAVBAR ===============================================

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//========CAROUSEL NO AUTO SLIDE PICS=====================================


$('.carousel').carousel({
    interval: false
}); 
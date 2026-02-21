// using Jquery to make sure the HTML button loads before the script.
jQuery(function() {

// creating two variables for the inner-width and -height of screen
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

// creating a hover function to the button
$("#btn").on("mouseenter", function() {
    // Getting two random numbers for the new button position
    let randomWidth = Math.floor(Math.random() * (screenWidth - $(this).outerWidth()));
    let randomHeight = Math.floor(Math.random() * (screenHeight - $(this).outerHeight()));
    
    // setting the buttons new position
    $(this).css({
        left: randomWidth + "px",
        top: randomHeight + "px",
    })
})

// adding a function if user manages to click the button.
$("#btn").on("click", function() {
    // hides the button
    $(this).hide();

    //adding some text to the HTML
    $("#secret").fadeIn(3000);
})
})
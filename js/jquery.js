/*The codes were written here in this external file and invoked in the body of page 2.
This is an efficient way of programming once the code doesn't get mixed with the HTML elements.*/

//JQUERY FUNCTIONS

/**
 * In this function once the document is ready or loaded and the user click on the button whose id is "toggle",
 * the history div section will slowly slide down, making it interactive.
 * This function was sourced from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_down
 */
$(document).ready(function () {
  $("#toggle").click(function () {
    $(".history").slideDown("slow");
  });
});

/**
 * In this function once the document is ready or loaded and the user "unclicks" the button whose id is "toggle",
 * the history div section will slowy slide up, making it interactive.
 * This function was sourced from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_up
 */
$(document).ready(function () {
  $("#toggle").mouseleave(function () {
    $(".history").slideUp("slow"); //precisa do slow?
  });
});

/**
 * In this function once the document is ready or loaded and the user click on the button whose id is "large-button",
 * the discover div section will be displayed, making it interactive.
 * This function was sourced from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show
 */
$(document).ready(function () {
  $("#large-button").click(function () {
    $(".discover").show("slow");      
  });
});

/**
 * In this function once the document is ready or loaded and the user "unclicks" the button whose id is "large-button",
 * the discover div section will be hidden, making it interactive.
 * This function was sourced from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show
 */
$(document).ready(function () {
  $("#large-button").mouseleave(function () {
    $(".discover").hide("slow");     
  });
});

/**
 * In this function once the document is ready or loaded and the user click on the button whose id is "show",
 * the reviews div section will be displayed, making it interactive.
 * This function was sourced from: https://www.w3schools.com/jquery/jquery_hide_show.asp
 */
$(document).ready(function () {
  $("#show").click(function () {
    $(".reviews").show();

  });
});

/**
 * In this function once the document is ready or loaded and the user hovers the button whose id is "pic",
 * the 'founders' image will slowly slide down, making it interactive.
 * This function was sourced from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_down
 */
$(document).ready(function () {
  $("#pic").mouseenter(function () {
    $("#founders").slideDown("slow");
  });
});

/**
 * In this function once the document is ready or loaded and the user removes the cursor from the button whose id is "pic",
 * the 'founders' image will slowly slide up, making it interactive.
 * This function was sourced from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_up
 */
$(document).ready(function () {
  $("#pic").mouseleave(function () {
    $("#founders").slideUp("slow");
  });
});

/**
 * In this function once the document is ready or loaded and the user clicks the button whose id is "gal",
 * the gallery div section will fade in very slowly, making it interactive.
 * This function was sourced from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadein
 */
$(document).ready(function () {
  $("#gal").click(function () {
    $(".gallery").fadeIn(4000);
  });
});

/**
 * In this function once the document is ready or loaded and the user hovers the cursor on the button whose id is "contact1",
 * the 'panel1' element will slowly slide down, making it interactive.
 * This function was sourced from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_down
 */
$(document).ready(function () {
  $("#contact1").mouseenter(function () {
    $("#panel1").slideDown("slow");
  });
});





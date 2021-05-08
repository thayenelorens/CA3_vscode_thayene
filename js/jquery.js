
//citar w3: funcão show/hide
$(document).ready(function () {
    $("#show").click(function () {
      $(".reviews").show();

    });
  });

  //https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle  - trocar referência
  $(document).ready(function () {
    $("#toggle").click(function () {
      $(".history").slideDown("slow");
    });
  });

  $(document).ready(function () {
    $("#toggle").mouseleave(function () {
      $(".history").slideUp("slow"); //precisa do slow?
    });
  });

  //https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadetoggle
  $(document).ready(function () {
    $("button").click(function () {
      $(".discover").show("slow");     //CHOOSE WHICH ONE! NORMAL >SLOW OR 3000? 
    });
  });


  $(document).ready(function () {
    $("button").mouseleave(function () {
      $(".discover").hide("slow");     //CHOOSE WHICH ONE! NORMAL >SLOW OR 3000? 
    });
  });

  //to change the founders image - fade in

  $(document).ready(function(){
    $("#pic").mouseenter(function(){
      $("#founders").slideDown("slow");
    });
    });

    $(document).ready(function(){
        $("#pic").mouseleave(function(){
          $("#founders").slideUp("slow");
        });
        });
  
    // to change the founders image -fade in - trocar de botão?
    $(document).ready(function(){
        $("#gal").click(function(){
          $(".gallery").fadeIn(3000);
        });
        });

        $(document).ready(function(){
            $("#contact1").mouseenter(function(){
              $("#panel1").slideDown("slow");
            });
          });

          


      
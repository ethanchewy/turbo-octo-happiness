var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
  
  /*Opens about section*/
  $('.pictures').click(function() {
   $('.menu').animate({
      left: "0px"
      
    }, 200);
    
    $('body').animate({
      left: "-500px"
    }, 200);

    $('.photo').animate({
      left: "512px"
    }, 200);
    
  });
};
$(document).ready(main);

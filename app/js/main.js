
$(document).ready(function() {
  $(".burger").click(function() {
    $(this).toggleClass("active");
    $("body").toggleClass("no-scroll");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });

  $('.form__input-phone').mask('+380 (00) 000-00-00');
});



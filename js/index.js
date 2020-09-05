$("#education").click(function(){
    window.location = $(this).find("a").attr("href");
    return false;
})

$(document).ready(function(){
    $("#menu, #menu2, #menu3, #menu4").hover(function(){
      $(".dropdown-content", this).slideDown(250);
    }, function(){
      $(".dropdown-content", this).stop().slideUp(100);
    });
  })
  
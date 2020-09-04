$("#education").click(function(){
    window.location = $(this).find("a").attr("href");
    return false;
})

$(document).ready(function(){
  $("#menu").hover(function(){
    $(".dropdown-content", this).slideDown(100);
  }, function(){
    $(".dropdown-content", this).stop().slideUp(100);
  });
})
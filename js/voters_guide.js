$(".toggleOpen").on("click", function(){
    if ($(".accordion").is(":visible")) {
        $(".accordion").slideUp();

        $(".twoColumns").css("grid-template-rows", "2fr 2fr 1fr");

        $(".openArrow").attr("src", "/Users/lindsaysmith/Desktop/GitHub/lwvaa/Images/dashicons_arrow-down-alt2.png", "height", "50px"); 

        console.log("close");
 
    }

    else { 
        $(".accordion").slideDown();

        $(".twoColumns").css("grid-template-rows", "2fr 4fr 1fr");



        $(".openArrow").attr("src", "/Users/lindsaysmith/Desktop/GitHub/lwvaa/Images/dashicons_arrow-up-alt2.png", "height", "50px");

        console.log("open");
    }
});

//    $(".twoColumns").css("grid-template-rows", "2fr 4fr 1fr");

    

//     $(".openArrow").attr("src", "/Users/lindsaysmith/Desktop/GitHub/lwvaa/Images/dashicons_arrow-down-alt2.png", "height", "50px");
    
//    $(".twoColumns").css("grid-template-rows", "2fr 4fr 1fr");

//     $(".openArrow").attr("src", "/Users/lindsaysmith/Desktop/GitHub/lwvaa/Images/dashicons_arrow-up-alt2.png", "height", "50px");

//     $(".toggle").removeClass("toggleOpen");

//     console.log("Open");
// })

// $(".toggleClose").on("click", function(){
//     $(".accordion").slideUp();

//     /*$(".twoColumns").css("grid-template-rows", "2fr 2fr 1fr");*/

//     $(".openArrow").attr("src", "/Users/lindsaysmith/Desktop/GitHub/lwvaa/Images/dashicons_arrow-down-alt2.png", "height", "50px");

//     $(".toggle").removeClass("toggleClose");

//     $(".toggle").addClass("toggleOpen");

//     console.log("Close");
// })
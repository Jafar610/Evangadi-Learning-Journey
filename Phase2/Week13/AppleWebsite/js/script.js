
let h3 = $(".footer-links-wrapper h3")
h3.on('click', function(){
    $(this).toggleClass("expanded");
    $(this).next("ul").slideToggle("slow");
});


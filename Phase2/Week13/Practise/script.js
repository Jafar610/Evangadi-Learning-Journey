// * selecting element.
$("h1"); // document.querySelector("h1")
$(".sample"); // document.getElementByClassName("sample")

// * Manipulate

let h1 = $("h1").html();
console.log(h1)
$(".sample").text("New text");
// $("#list").append("<li>List 1</li>");
// $("#list").append("<li>List 2</li>");
// $("#list").prepend("<li>List 3</li>");


// * Filtering element

// console.log($("#list").text());
console.log($("li:nth-child(4)").text());
console.log($(".l2").after("<li>Banana</li>"));

$(".sample").before("<h2>Before para.</h2>")



// * Romiving or hide.
// $(".sample").show();
// $(".sample").hide();
// $(".sample").empty();
// $(".sample").remove();

//* Adding Attributes
// $(".sample").addClass("sample2")
// $(".sample").removeClass("sample")

$(".sample").attr("id", "sample2")
// $(".sample").removeAttr("id")

// $(".sample").css("background-color", "red");
$(".sample").css({
    backgroundColor:"red",
    color: "yellow",
    fontSize: "30px"
});

// * Event
$("#form1").on('submit', function(e){
    e.preventDefault();
   let value1 = $("#fName").val();
   let value2 = $("#LName").val();

   console.log(value1);
   console.log(value2);

   $(".value").text(`${value1} ${value2}`);
});

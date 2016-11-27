// Check off specific Todos by clicking
// Because with jQuery, only pre-listed li's
// will only have the click on-click function
// To implement newly added li elements with the on-click
// function, you need to select the whole ul and add the
// "li" into the parameter so that it implements all the li's
// in the ul with the on-click function
// Adding that "li" into the parameter specifies that all
// li's that may or may not have been added when the page was loaded
// to have that on-click function
$('ul').on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click on x to delete Todos
$('ul').on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // Grab the entered text in the input and store
    // it into a variable
    var toDoText = $(this).val();
    // Create a new li and add it to the ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+toDoText+"</li>");
    $(this).val("");
  }
});

$('.fa-plus').on("click", function(){
  $("input[type='text']").fadeToggle();
});

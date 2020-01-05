// Here toook care of ON function it's very useful
// as you saw when we add new value to input value
// then it doesn't run but when we make changes with .CLICK
// and .ON function then it starts doing work
// For example you can see it in line no 7 and 12. 

$("ul").on("click", "li", function(){ // here previously written as $("li").click(function(){.....})
$(this).toggleClass("completed");
});

// This is for delete button
$("ul").on("click", "span", function(event){
   $(this).parent().fadeOut(500, function(){
     $(this).remove();
   });
   event.stopPropagation();
});

// Grabbing New text from Todo
 $("input[type='text']").keypress(function(event){
    if(event.which === 13){
    	var todotext = $(this).val();
    	// now making value of input equal to zero
        $(this).val("");
        // Create a new  li and put it into input 
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>")
    }

 });

 // To make the + button workable
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
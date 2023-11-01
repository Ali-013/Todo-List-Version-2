$(document).ready(function() {
    var total =0;
    
    $("#inputButton").click(function() {
        var inputValue = $("#inputBox").val();
        if (inputValue !== "") {
            $("#listBox").prepend("<li class='listItem'>"+inputValue +"<span class='done'>🗸</span>"+"<span class='cross'>X</span>"+ "</li>");
            $("#inputBox").val("");
            
            $(".cross").click(function(){
                $(this).closest("li").remove();
              });
             // Clear the input box after appending
            $(".done").click(function(){
                $(this).closest("li").toggleClass("checked");
                $(this).remove();
                $(".cross").remove();
                total = total+1;
                $("#forCount").empty();
                $("#forCount").append("<span>"+": "+total+"</span>");
              });
        }
        else if(inputValue===""){
            
        }
    });
    
    
});
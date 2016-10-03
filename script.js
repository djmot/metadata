$(document).ready(function() {
    
    $("#input-submit").on("click", function(evt) {
        
        evt.preventDefault();
        var files = $("#input-file")[0].files;
        if (!files) {return;}
        if (files.length < 1) {return;}
        console.log("Sending POST");
        var result = JSON.stringify({"size":files[0].size});
        $.post(
            "https://metadata-djmot.herokuapp.com/",
            result,
            function() {console.log("Request succeeded");}
        );
        
    });
    
});
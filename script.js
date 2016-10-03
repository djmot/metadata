$(document).ready(function() {
    
    $("#input-submit").on("click", function(evt) {
        
        evt.preventDefault();
        var files = $("#input-file")[0].files;
        if (!files) {return;}
        if (files.length < 1) {return;}
        console.log("Sending info");
        var result = {"size":files[0].size};
        $.post(
            "https://metadata-djmot.herokuapp.com/",
            result,
            function(data) {
                document.write("<head><style>body {font-family: 'Consolas', monospace}</style></head><body>"+JSON.stringify(data)+"</body>");
            }
        );
        
    });
    
});

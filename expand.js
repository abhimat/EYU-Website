$(document).ready(function() {
    //When the toggle div is clicked
    $(".expand-toggle").click(function() {
        $(this).next(".expand-content").slideToggle();;
    });


});
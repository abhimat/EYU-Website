$(document).ready(function() {
    var arrows=["&#10506;", "&#10507;"];
    //When the toggle div is clicked
    $(".expand-toggle").click(function() {
        $(this).next(".expand-content").slideToggle(300, "swing");
        $(this).toggleClass("round-bottom");
        var className = $(this).attr('class').split(' ');
        var currentArrow;
        if (className.indexOf('down-arrow') > -1) {
            currentArrow = 'down'; 
            $(this).removeClass('down-arrow');
            $(this).addClass('up-arrow');
        } else if (className.indexOf('up-arrow') > -1) {
            currentArrow = 'up';
            $(this).removeClass('up-arrow');
            $(this).addClass('down-arrow');
        }
        if (currentArrow === 'down') {
            $(this).find("p").text($("<div>").html(arrows[0]).text());
        } else if (currentArrow === 'up') {
            $(this).find("p").text($("<div>").html(arrows[1]).text());
        } 
    });


});

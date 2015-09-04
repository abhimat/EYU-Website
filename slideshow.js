

var images = ["Kittens-3-animals-34865509-1680-1050.jpg", "Cute-Kitten-kittens-16096566-1280-800.jpg", "cats-animals-kittens-background.jpg"];
var imgNum = 1;
var imgDir = "images";
function setImage(image) {
    $(".slide-container").find("img").attr("src", image);
    setTimeout(function(){setImage(imgDir+"/"+images[imgNum++%images.length])}, 4000);
}

function preload(imgArr) {
    $(imgArr).each(function(){
        var image = imgDir+"/"+this;
        $('<img/>')[0].src = image;
    });


};
preload(images);



$(document).ready(function() {
    setImage(imgDir+"/"+images[0]);
});

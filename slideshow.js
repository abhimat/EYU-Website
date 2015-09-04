

var images = ['Copy of IMG_20141116_162018927.jpg', 'IMG_0089.JPG', 'IMG_0113.JPG', 'IMG_0125.JPG', 'IMG_0184.JPG', 'IMG_0260.JPG', 'IMG_0313.JPG', 'IMG_0330.JPG', 'IMG_0350.JPG', 'IMG_0408.JPG', 'IMG_0414.JPG', 'IMG_0496.JPG'] ;
var imgNum = 1;
var imgDir = "SlideshowPhotos";
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

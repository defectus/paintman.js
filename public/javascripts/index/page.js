$(document).ready(function(){
    $.picasa.images('107338561604267943588', '5783652459313142673', function(images){
        $.each(images, function(i, image) {
            var $photoDiv = $('<div>', {
                'class': i === 0 ? 'active item' : 'item'
            }).append($('<img>', {
                src: image.url,
                style: 'width:600px;height:400px'
            }));
            $('div#sampleWorkCarousel div.carousel-inner').append($photoDiv);
        });
        $('div#sampleWorkCarousel').css('visibility', 'visible').carousel({
            interval: 5000
        });
    });
});
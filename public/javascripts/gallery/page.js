$(document).ready(function(){
    var $pictureBox = $('div.pictureBox');
    $.picasa.images('107338561604267943588', '5783652459313142673', function(images){
        $.each(images, function(i, image) {
            var $photoDiv = $('<div>', {
                'class': i === 0 ? 'active item' : 'item'
            }).append($('<img>', {
                src: image.url,
                style: 'width:600px;height:400px'
            }));
            $pictureBox.append($photoDiv);
        });
        
        $pictureBox.picoGal({thumbWidth:'160', thumbHeight:'120'}).picoGal('show')
    });
        
});
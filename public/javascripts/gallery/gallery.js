$(document).ready(function(){
    $.picasa.images('107338561604267943588', '5783652459313142673', function(images){
        $.each(images, function(i, image) {
            var $photoDiv = $('<div>', {
                'class': i === 0 ? 'active item' : 'item'
            }).append($('<img>', {
                src: image.url,
                style: 'width:600px;height:400px'
            }));
            $('div.pictureBox').append($photoDiv);
        });
    });
});

(function ($) {
    var methods = {
        init:function (settings) {            
            var _this = this, images = this.find('img').map(function(){
                return _this.src;
            }).get();
            this.data('images', images);
            this.data('settings', $.extend({
            }, settings));
            return this;
        },
        show:function () {
            if (this.size() === 0){
                methods.build();
            }
            this.show();
            return this;
        },
        hide:function () {
            this.hide();
            return this;
        },
        build:function () {            
            var _this = this, 
                settings = this.data('settings'),
                images = this.data('images');
            this.children().remove();
            var $container = $('<div>',{
                css: {
                    width: settings.$containerWidth,
                    height: settings.$containerHeight,
                    position: 'relative'
                }
            });
            $.each(images, function(i,v){
                var $img = $('<img>',{
                    src:v,
                    css:{
                        width: settings.thumbnailWidth,
                        position: 'relative',
                        border: 0,
                        margin: 0,
                        padding: 0,
                        'font-weight': 'normal',
                        opacity: 0,
                        '-moz-box-shadow': '0 0 4px 1px #ddf',
                        '-webkit-box-shadow': '0 0 4px 1px #DDF',
                        'box-shadow': '0 0 4px 1px #DDF',
                        '-moz-border-radius': '4px',
                        'border-radius': '4px',
                        cursor: 'pointer'
                    }}).on('click', imgOnClick);
                $container.append($img);                
            });
        },
        destroy:function () {
            this.remove();
        }
    };

    function imgOnClick() {
        var $preview = $(document).find('body>#preview').size() > 0 ? $(document).find('body>#preview'): $('<img>', {
            id: 'preview',
            css: {
                display: 'none',
                'z-index': 999999999,
                'position': 'absolute',
                '-moz-box-shadow': '0 0 4px 1px #ddf',
                '-webkit-box-shadow': '0 0 4px 1px #ddf',
                'box-shadow': '0 0 4px 1px #ddf',
                '-moz-border-radius': '4px',
                'border-radius': '4px'
            }
        });
        $preview.attr("src", $(this).attr("src").replace("s144", "s800"));
        $preview.on('load', function() {
            $preview.css("left", ($(document).width() - $("#preview").width()) / 2);
            $preview.fadeIn("slow");
        });

        $preview.on('click', function() {
            $preview.fadeOut("slow", function() {
                $preview.remove();
            });
        });
    }
    
    $.fn.picoGal = function (method) {
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.picoGal');
        }
    };

})(jQuery);
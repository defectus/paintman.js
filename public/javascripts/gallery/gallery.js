(function ($) {
    var methods = {
        init:function (settings) {
            this.data('settings', $.extend({
            }, settings));
            return this;
        },
        show:function (s) {
            return this;
        },
        hide:function () {
            return this;
        },
        build:function () {
        },
        destroy:function () {

        }
    };

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
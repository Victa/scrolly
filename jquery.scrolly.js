/*
 *  Project: Scrolly : parallax is easy !
 *  Description: Base on jQuery boilerplate
 *  Author: Victor C. / Octave & Octave
 */

// Usage :
// <div id="fish" class="paralax" data-velocity=".8"></div>  -- data-velocity : oo > velocity < 1
// $('.parallax').scrolly();
(function ( $, window, document, undefined ) {
    // Create the defaults once
    var pluginName = 'scrolly',
        defaults = {};

    function Plugin( element, options ) {
        this.element = element;
        this.$element = $(this.element);

        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this;
        this.startPosition = this.$element.position().top;
        this.offsetTop = this.$element.offset().top;
        this.height = this.$element.outerHeight(true);
        this.velocity = this.$element.attr('data-velocity');

        $(document).scroll(function(){
            self.scrolly();
        });
    };

    Plugin.prototype.scrolly = function() {
        var dT =  $(window).scrollTop(),
            wH = $(window).height(),
            position = this.startPosition;

        if(this.offsetTop >= (dT+wH+this.height)) {
            this.$element.addClass('scrolly-invisible');
        } else {
            if(this.$element.hasClass('scrolly-invisible')){
                position = this.startPosition + (dT + ( wH- this.offsetTop ) + this.height ) * this.velocity;
            } else {
                position = this.startPosition + dT  * this.velocity;
            }
        }
        this.$element.css({top: position});
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

})(jQuery, window, document);

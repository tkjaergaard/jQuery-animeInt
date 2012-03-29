/*
 *  Project: animInt
 *  Description: A small plugin that animates one number to another.
 *  Author: Thomas Kjærgaard
 *  License: DBAD license
 */
;(function ( $, window, document, undefined ) {
    
    var pluginName = 'animInt',
        defaults = {
            end: 0,
            speed: 1000,
            fps: null
        };

    function Plugin( element, options ) {
        this.elm = element;
        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
                
        this.init();
    }

    Plugin.prototype.init = function () {
        this.start     = parseInt( $(this.elm).text(), 10 );
        this.dir       = (this.start > this.options.end ? 'down' : 'up');
        this.dif       = (this.options.fps ? this.options.fps : Math.abs((this.start) - (this.options.end)) );

        this.doShuffle();
    };

    Plugin.prototype.doShuffle = function () {
        var Plugin = this;
            if( Plugin.dir == 'down' )
            {
                if( Plugin.start > Plugin.options.end )
                {
                    $(Plugin.elm).text( --Plugin.start );
                    Plugin.t = setTimeout( function(){ Plugin.doShuffle(); }, Plugin.options.speed / Plugin.dif);
                }
            }
            else if( Plugin.dir == 'up' )
            {
                if( Plugin.start < Plugin.options.end )
                {
                    $(Plugin.elm).text( ++Plugin.start );
                    Plugin.t   = setTimeout( function(){ Plugin.doShuffle(); }, Plugin.options.speed / Plugin.dif);
                }
            }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };
    
})(jQuery, window, document);
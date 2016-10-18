/*! Offscreen.js | (c) 2016 @gijsroge | MIT license | https://github.com/gijsroge/offscreen.js */
(function ( $ ) {

  $.fn.offscreen = function(options) {

    //set default options
    var defaults = {
      rightClass: 'right-edge',
      leftClass: 'left-edge',
      topClass: 'top-edge',
      bottomClass: 'bottom-edge',
      offset: 0,
      smartResize: true
    };

    //call in the default otions
    var options = $.extend(defaults, options);
    var $this = $(this);

    function offscreenInitiate(){
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      $($this).each(function(){

        /**
         * Check if element falls off top or bottom viewport
         */
        var top = $(this).offset().top;
        var height = $(this).outerHeight();

        if(windowHeight < (top + height)){
          $(this).addClass(defaults.bottomClass);
        }else if(windowHeight > (top + height * 1.5)){
          $(this).removeClass(defaults.bottomClass);
        }

        if((top < 0)){
          $(this).addClass(defaults.topClass);
        }else if((top > height)){
          $(this).removeClass(defaults.topClass);
        }

        /**
         * Check if element falls off right or left viewport
         */
        var left = $(this).offset().left;
        var width = $(this).outerWidth() + defaults.offset;
        if(windowWidth < (left + width)){
          $(this).addClass(defaults.rightClass);
        }

        if((left < 0)){
          $(this).addClass(defaults.leftClass);
        }else if((left * 2 > width)){
          $(this).removeClass(defaults.leftClass);
        }
      });
    };

    //get the ball rolling
    offscreenInitiate();

    if(defaults.smartResize === true){

      // debouncing function from John Hann
      // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
      (function(e,t){var n=function(e,t,n){var r;return function(){function u(){if(!n)e.apply(s,o);r=null}var s=this,o=arguments;if(r)clearTimeout(r);else if(n)e.apply(s,o);r=setTimeout(u,t||100)}};jQuery.fn[t]=function(e){return e?this.bind("resize",n(e)):this.trigger(t)}})(jQuery,"smartresize");

      $(window).smartresize(function(){
        offscreenInitiate();
      });
    }else{
      $( window ).resize(function() {
        offscreenInitiate();
      });
    }

  }

  $('[data-offscreen]').offscreen();

}( jQuery ));
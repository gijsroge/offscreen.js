$.fn.offscreen = function(options) {

    //set default options
    var defaults = {
        rightClass: 'right-edge',
        leftClass: 'left-edge',
        smartResize: false
    };

    //call in the default otions
    var options = $.extend(defaults, options);

    var $this = $(this);
    function offscreenInitiate(){
        var windowWidth = $(window).width();
        $($this).each(function(){
            if(windowWidth < ($(this).offset().left + $(this).outerWidth())){
                $(this).addClass(defaults.rightClass);
            }else if(windowWidth > ($(this).offset().left + $(this).outerWidth() * 1.5)){
                $(this).removeClass(defaults.rightClass);
            }

            if(($(this).offset().left < 0)){
                $(this).addClass(defaults.leftClass);
            }else if(($(this).offset().left > 0)){
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
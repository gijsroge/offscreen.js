$.fn.offscreen = function() {
    //set default options
    var $this = $(this);
    function offscreenInitiate(){
        var windowWidth = $(window).width();
        $($this).each(function(){
            if(windowWidth < ($(this).offset().left + $(this).outerWidth())){
                $(this).addClass('offviewport');
            }else if(windowWidth > ($(this).offset().left + $(this).outerWidth() * 2)){
                $(this).removeClass('offviewport');
            }
        });
    };

    //get the ball rolling
    offscreenInitiate();

    $(window).resize(function(){
        offscreenInitiate();
    });
}
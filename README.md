offscreen.js
=========

Detects if an element (tooltip) falls of the right/left/top/bottom side of your screen/viewport


#### [demo](http://gijsroge.github.io/offscreen.js)


#### What does it do?
Adds a class to all your elements with the defined selector that fall of the right/left/top/bottom side of the screen. 


 - checks all the elements with the defined selector.
 - rechecks everything when resize (optimized resize)
 - customize classes


#### Usage:
```
$( document ).ready(function() {
  $('.tooltip__content').offscreen({
    rightClass: 'right-edge',
    leftClass: 'left-edge',
    topClass: 'top-edge',
    bottomClass: 'bottom-edge',
    widthOffset: 40, //px value
    smartResize: true
  });
});   
```

#### Requires:
```
jQuery
```


[@GijsRoge](https://twitter.com/GijsRoge)

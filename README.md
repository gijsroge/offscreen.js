offscreen.js
=========

Detects if an element (tooltip) falls of the right/left side of your screen/viewport


#### [demo](http://gijsroge.github.io/offscreen.js)


#### What does it do?
Adds a class to all your elements with the defined selector that fall of the right/left side of the screen. 


 - checks all the elements with the defined selector.
 - rechecks everything when resize (optimized resize)
 - smartresize to increase performance
 - customize classes


#### Usage:
```
$( document ).ready(function() {
  $('.tooltip__content').offscreen({
    smartResize: true,
    rightClass: 'right-edge',
    leftClass: 'left-edge'
  });
});   
```

#### Requires:
```
jQuery
```


[@GijsRoge](https://twitter.com/GijsRoge)

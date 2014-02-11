offscreen.js
=========

Detects if an element falls of the right side of your screen


#### What does it do?
Adds a class "offscreen" to all your elements with the defined selector that fall of the right side of the screen. 

<dl>
  <dd>• checks all the elements with the defined selector.</dd>
  <dd>• rechecks everything when resize (optimized resize)</dd>
  <dd>• smartresize to increase performance</dd>
  <dd>• customize classes</dd>
</dl>

#### [demo](http://gijsroge.github.io/offscreen.js)


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
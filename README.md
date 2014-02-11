offscreen.js
=========

Detects if an element falls of the right side of your screen

#### What does it do?
Adds a class "offscreen" to all your elements with the defined selector that fall of the right side of the screen. 

<dl>
  <dd>checks all the elements with the defined selector.</dd>
  <dt>rechecks everything when resize (optimized resize)</dt>
</dl>


#### Usage:
```
$( document ).ready(function() {
  $('yourelements').offscreen();
});   
```

[@GijsRoge](https://twitter.com/GijsRoge)
edgeDetection.js
================

## Still work in progress.

Detects if an element (e.g. a tooltip) falls of the right/left/top/bottom side of your container (can be any element, including the window).


#### [demo](http://gijsroge.github.io/offscreen.js)

 - checks all the elements with the defined selector.
 - rechecks everything when resize (optimized resize)
 - customize classes

#### Usage:
```
import edgeDetection from 'edgeDetection';

new edgeDetection(document.querySelectorAll('.js-edge-detection'), options);
```

Options (object)
```
{
    items: '.js-edge-detection-item',
    test: '.js-edge-detection-test',
    classes: {
        rightSide: 'right-edge',
        leftSide: 'left-edge',
        topSide: 'top-edge',
        bottomSide: 'bottom-edge',
    },
}
```

Example html
```
<html class="js-edge-detection">
    <body>
        <div class="js-edge-detection-item">content</div>
        <div class="js-edge-detection-item">content</div>
        <div class="js-edge-detection-item">content</div>
    </body>

    <script src="edgeDetection.min.js"></script>
    <script>
        new edgeDetection(document.querySelectorAll('.js-edge-detection'), options);
    </script>
</html>
```

[@GijsRoge](https://twitter.com/GijsRoge)

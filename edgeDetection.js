import debounce from 'debounce';

export default class edgeDetection {

    constructor(scope, options) {

        // DOM scope of instance
        this.scope = scope;

        // Default options
        const defaults = {
            items: '.js-edge-detection-item',
            test: '.js-edge-detection-test',
            classes: {
                rightSide: 'right-edge',
                leftSide: 'left-edge',
                topSide: 'top-edge',
                bottomSide: 'bottom-edge',
            },
        };

        // Merge default options with user specific options passed through the constructor
        this.settings = [defaults, options].reduce(Object.assign, {});

        // Items to check
        this.items = this.scope.querySelectorAll(this.settings.items);

        // Bind events
        this.bind();

        // Check all items
        this.checkAllItems();
    }

    checkAllItems() {
        for (let item of this.items) {
            this.check(item);
        }
    }

    removeClasses(item) {
        Object.keys(this.settings.classes).forEach((key) => item.classList.remove(this.settings.classes[key]));
    }

    check(item) {

        // Remove all classes before checking
        this.removeClasses(item);

        const itemPosition = item.querySelector(this.settings.test).getBoundingClientRect();
        const scopePosition = this.scope.getBoundingClientRect();

        if (itemPosition.right > scopePosition.right) {
            console.log(`falls off the right side`);
            item.classList.add(this.settings.classes.rightSide);
        }

        if (itemPosition.left < scopePosition.left) {
            console.log(`falls off the left side`);
            item.classList.add(this.settings.classes.leftSide);
        }

        if (itemPosition.bottom > scopePosition.bottom) {
            console.log(`falls off the bottom side`);
            item.classList.add(this.settings.classes.bottomSide);
        }

        if (itemPosition.top < scopePosition.top) {
            console.log(`falls off the top side`);
            item.classList.add(this.settings.classes.topSide);
        }
    }

    bind() {
        window.onresize = debounce(() => {
            this.checkAllItems();
        }, 200);
    }
}
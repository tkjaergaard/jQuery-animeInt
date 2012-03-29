# jQuery Animate Interger Plugin

## About

This is a small plugin made for a project where it was needed to "animate" one number to another.

The plugin will perform a "coundown"-like effect from a number within an element to a defined number.

## Options
* `end` `integer` `the number the plugin shoud animate to` `default: 0`
* `speed` `integer` `the speed in milliseconds` `default: 1000`
* `fps` `integer` `the speed will be devided with the fps` `default: difference from start to end`

## Example
jQuery is required.

Animate with defaults:
```javascript
;(function($){
	$('div').animInt();
})(jQuery);
```

Animate with options:
```javascript
;(function($){
	$('div').animInt({
		end: 20,
		speed: 800,
		fps: 25
	});
})(jQuery);
```

## License
animInt is published under the "Don't be a dick" license by Phil Sturgeon
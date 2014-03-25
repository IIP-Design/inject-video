# Inject Video

jQuery plugin that replaces a placeholder image with embeded YouTube video.

## Instructions

### Markup

```html
<div class="media-container ratio-16-9" data-video-id="C175zW8-6j8">
  <div class="play">
    <span class="play-button"></span>
  </div>
</div>
```

Before the closing `</body>` tag, include a link to jQuery and the plugin, and instantiate it.

```html
...

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script src="../src/jquery.inject-video.js"></script>
		<script>
      (function () {
        $('.media-container').injectVideo();
      })();
		</script>
	</body>
```

### Plugin Options

To overwrite the plugin defaults, pass a JS object at instantiation, like so:

```javascript
(function () {
  $('.media-container').injectVideo({
    thumbQuality: 'default.jpg',
    parameters: {autohide: 0, autoplay: 0}
  });
})();
```

`thumbQuality` options:

* default.jpg (aspect ratio: 4:3),
* sddefault.jpg (aspect ratio: 4:3),
* mqdefault.jpg (aspect ratio: 16:9),
* hqdefault.jpg (aspect ratio: 4:3),
* maxresdefault.jpg (aspect ratio: 16:9)

**Note**: When choosing a thumbnail different than the plugin's default, for
example one with a 4:3 aspect ratio, you will have to swap out the class `ratio-16-9` for `ratio-4-3` in your markup.

`parameters` options:

You can pass a Javascript object with any of the YouTube Embedded Player
parameters found here: https://developers.google.com/youtube/player_parameters#Parameters


## Browser Support

Chrome, FF, Opera, Safari, IE7-11

## License

### MIT License

Copyright (c) 2013 copyright Office of Innovative Engagement, U.S.
Department of State.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

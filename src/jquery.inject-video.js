;(function ( $, window, document, undefined ) {

		// Create the defaults once
		var pluginName = "injectVideo",

        // thumbQuality options: 'default.jpg', 'sddefault.jpg', 'mqdefault.jpg', 'hqdefault.jpg',
        // 'maxresdefault.jpg'

        // parameters options: Any of the YouTube player parameters from
        // https://developers.google.com/youtube/player_parameters#Parameters

				defaults = {
            thumbQuality: 'mqdefault.jpg',
            parameters: {autoplay: 1}
		};

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		Plugin.prototype = {
				init: function () {
            this.$videos = $(this.element);
            this.keys = {
                space: 32,
                enter: 13
            };
            this.loadPoster();
            this.bindUiActions();
				},

        bindUiActions: function () {
            this.click();
            this.keyDown();
        },

        click: function () {
            var _this = this;

            _this.$videos.on('click', function () {
                _this.loadVideo( $(this) );
            });
        },

        keyDown: function () {
            var _this = this;

            _this.$videos.on('keydown', function (e) {
                var $this = $(this);

                switch (true) {
                    case (e.which === _this.keys.space):
                        e.preventDefault();
                        _this.loadVideo( $(this) );
                        break;
                    case (e.which === _this.keys.enter):
                        e.preventDefault();
                        _this.loadVideo( $(this) );
                        break;
                }
            });
        },

        loadPoster: function () {
            var _this = this;

            _this.$videos.each(function (i) {
                var baseUrl = 'http://img.youtube.com/vi/',
                    videoId = $(this).attr('data-video-id'),
                    altText = $(this).attr('data-placeholder-alt'),
                    url = baseUrl + videoId + '/' + _this.settings.thumbQuality,
                    code = $('<img>', {
                        'src': url,
                        'alt': altText
                    });

                $(this).prepend(code);
            });
        },

        loadVideo: function (i) {
            var _this = i,
                baseUrl = 'https://www.youtube.com/embed/',
                videoId = _this.attr('data-video-id'),
                params = $.param(this.settings.parameters),
                url = baseUrl + videoId + '?' + params,
                code = $('<iframe />', {
                    frameborder: '0',
                    allowfullscreen: 'true',
                    src: url
                });

            _this.children().remove();
            _this.append(code);
        }
		};

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});

				// chain jQuery functions
				return this;
		};

})( jQuery, window, document );

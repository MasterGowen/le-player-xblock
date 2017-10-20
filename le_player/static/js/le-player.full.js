/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(69);
	
	__webpack_require__(70);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _PlayButton = __webpack_require__(6);
	
	var _PlayButton2 = _interopRequireDefault(_PlayButton);
	
	var _SplashIcon = __webpack_require__(8);
	
	var _SplashIcon2 = _interopRequireDefault(_SplashIcon);
	
	var _Icon = __webpack_require__(5);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Time = __webpack_require__(9);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _ControlCollection = __webpack_require__(10);
	
	var _ControlCollection2 = _interopRequireDefault(_ControlCollection);
	
	var _Sections = __webpack_require__(11);
	
	var _Sections2 = _interopRequireDefault(_Sections);
	
	var _ErrorDisplay = __webpack_require__(12);
	
	var _ErrorDisplay2 = _interopRequireDefault(_ErrorDisplay);
	
	var _Poster = __webpack_require__(13);
	
	var _Poster2 = _interopRequireDefault(_Poster);
	
	var _FullscreenApi = __webpack_require__(14);
	
	var _FullscreenApi2 = _interopRequireDefault(_FullscreenApi);
	
	var _utils = __webpack_require__(7);
	
	var _cookie = __webpack_require__(15);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _browser = __webpack_require__(16);
	
	var _MediaError = __webpack_require__(17);
	
	var _MediaError2 = _interopRequireDefault(_MediaError);
	
	__webpack_require__(18);
	
	__webpack_require__(19);
	
	__webpack_require__(21);
	
	__webpack_require__(25);
	
	__webpack_require__(27);
	
	__webpack_require__(28);
	
	__webpack_require__(29);
	
	__webpack_require__(30);
	
	__webpack_require__(32);
	
	__webpack_require__(33);
	
	__webpack_require__(34);
	
	__webpack_require__(35);
	
	__webpack_require__(36);
	
	__webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Register common controls
	
	
	_Control2.default.registerControl('divider', function () {
		return {
			element: (0, _jquery2.default)('<div/>').addClass('divider')
		};
	});
	
	/**
	 * Return array with excluded dist's items from source array
	 *
	 * @access private
	 * @param {Array} source
	 * @param {Array} dist
	 * @return {Array}
	 */
	function excludeArray(source, dist) {
		var result = [].concat(source);
		dist.forEach(function (item) {
			var index = result.indexOf(item);
			if (index > -1) {
				result.splice(index, 1);
				return;
			}
		});
	
		return result;
	}
	
	var defaultOptions = {
		entity: 'Html5',
		autoplay: false,
		height: 'auto',
		loop: false,
		muted: false,
		preload: 'metadata',
		poster: null,
		svgPath: '',
		innactivityTimeout: 5000,
		rate: {
			step: 0.25,
			min: 0.5,
			max: 4.0,
			default: 1
		},
		playback: {
			step: {
				short: 5,
				medium: 10,
				long: 30
			}
		},
		controls: {
			common: [['play', 'volume', 'divider', 'timeline', 'divider', 'section', 'divider', 'fullscreen'], ['rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'keybinding info']],
			fullscreen: [['play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', 'keybinding info', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'section', 'divider', 'fullscreen']],
			mini: [['play', 'volume', 'divider', 'fullscreen', 'divider', 'timeinfo']]
		},
		controlsOptions: {
	
			common: {
				align: ['justify', 'left']
			},
	
			fullscreen: {
				align: 'justify'
			}
		},
		volume: {
			default: 0.4,
			mutelimit: 0.05,
			step: 0.1
		},
		keyBinding: [{
			key: 32,
			info: ['Space'],
			description: 'Начать проигрывание / поставить на паузу',
			fn: function fn(player) {
				player.video.togglePlay();
			}
		}, {
			key: 37,
			info: ['←'],
			description: '\u041F\u0435\u0440\u0435\u043C\u043E\u0442\u0430\u0442\u044C \u043D\u0430 10 \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434',
			fn: function fn(player) {
				player.video.currentTime -= player.options.playback.step.medium;
				player.splashIcon.show('undo');
			}
		}, {
			key: 39,
			info: ['→'],
			description: '\u041F\u0435\u0440\u0435\u043C\u043E\u0442\u0430\u0442\u044C \u043D\u0430 10 \u0441\u0435\u043A\u0443\u043D\u0434 \u0432\u043F\u0435\u0440\u0451\u0434',
			fn: function fn(player) {
				player.video.currentTime += player.options.playback.step.medium;
				player.splashIcon.show('redo');
			}
		}, {
			shiftKey: true,
			info: ['Shift', '←'],
			description: 'Перейти на предыдущую секцию',
			key: 37,
			fn: function fn(player) {
				if (player.sections == null) {
					return;
				}
				player.sections.prev();
			}
		}, {
			shiftKey: true,
			key: 39,
			info: ['Shift', '→'],
			description: 'Перейти на следующую секцию',
			fn: function fn(player) {
				if (player.sections == null) {
					return;
				}
				player.sections.next();
			}
		}, {
			key: 38,
			info: ['↑'],
			description: 'Увеличить громкость',
			fn: function fn(player) {
				player.video.volume += player.options.volume.step;
	
				player.splashIcon.show(player.calcVolumeIcon(player.video.volume));
			}
		}, {
			key: 40,
			info: ['↓'],
			description: 'Уменьшить громкость',
			fn: function fn(player) {
				player.video.volume -= player.options.volume.step;
	
				player.splashIcon.show(player.calcVolumeIcon(player.video.volume));
			}
		}, {
			key: 70,
			info: ['f'],
			description: 'Открыть/закрыть полноэкраный режим',
			fn: function fn(player) {
				player.toggleFullscreen();
			}
		}],
		plugins: {
			miniplayer: {}
		},
		onPlayerInited: _utils.noop
	};
	
	/**
	 * @class Player
	 * @extends Component
	 * @param {jQuery} element Element when player will init
	 * @param {Object} [options]
	 * @param {Boolean} [options.autoplay=false]
	 * When present, the video will automatically start playing as soon as it can do so without stopping.
	 * @param {String|Number} [options.height='auto'] Height of video container
	 * @param {String} [options.width] Width of video container
	 * @param {Boolean} [options.loop=false]
	 * When present, it specifies that the video will start over again, every time it is finished.
	 * @param {Boolean} [options.muted=false]
	 * When present, it specifies that the audio output of the video should be muted.
	 * @param {String} [options.preload='metadata'] Can be ('auto'|'metadata'|'none')
	 * @param {String} [options.poster] Path to poster of video
	 * @param {String} [options.svgPath] Path to svg sprite for icons
	 * @param {Object} [options.rate] Rate options
	 * @param {Number} [options.rate.step=0.25] Step of increase/decrease by rate control
	 * @param {Number} [options.rate.min=0.5] Min of rate
	 * @param {Number} [options.rate.max=4.0] Max of rate
	 * @param {Number} [options.rate.default=1]
	 * @param {Object} [options.playback] Playback options
	 * @param {Object} [options.playback.step]
	 * @param {Nubmer} [options.playback.step.short=5]
	 * @param {Nubmer} [options.playback.step.medium=30]
	 * @param {Nubmer} [options.playback.step.long=60]
	 * @param {Obejct} [options.controls] Object of controls
	 * @param {String[]} [options.controls.common] Array of controls for default view
	 * @param {String[]} [options.controls.fullscreen] Array of control for fullsreen view
	 * @param {String[]} [options.controls.mini] Array of control for miniplayer
	 * @param {Object} [options.excludeControls] Object of exclude controls. Structure is the same as that of options.controls
	 * @param {Object} [options.volume] Volume's options
	 * @param {Number} [options.volume.default=0.4] Default volume
	 * @param {Number} [options.volume.mutelimit=0.05] Delta when volume is muted
	 * @param {Number} [options.volume.step=0.05]
	 * @param {Object[]} [options.keybinding]
	 * Object with keybinding options, when key it's name of key binding, and value it's key binding settings
	 * @param {Number} [options.keybinding[].key] Code of key binding (for example 32 it's space)
	 * @param {String[]} [options.keybinding[].info] Array of keystrokes order
	 * @param {String} options.keybinding[].description] Description of key binding
	 * @param {Function} options.keybinding[].fn] Callback
	 * @param {Object|Boolean} [options.miniplayer=false]
	 * @param {String} [options.miniplayer.width] Width of miniplayer container
	 * @param {String} [options.miniplayer.width] MiniPlayer's width
	 * @param {String} [options.sectionContainer] Selector for sections
	 * @param {Object} [options.plugins] Keys of objects are name of plugin, value - plugin options
	 * @param {String|Object} [options.data] Url or JSON with data for player
	 * @param {Array} [options.data.sections] Sections array
	 */
	
	var Player = function (_Component) {
		_inherits(Player, _Component);
	
		function Player(element, options) {
			_classCallCheck(this, Player);
	
			options.createElement = false;
	
			var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, null, options));
	
			_this._element = element;
	
			/**
	   * DOM container to hold inner of player
	   *
	   * @memberof! Player#
	   * @type {jQuery}
	   */
			_this.innerElement = (0, _utils.createEl)('div');
	
			// Users options
			_this._userOptions = options;
			_this._initOptions();
	
			if (_this.options.svgPath === '') {
				Player._loadSVGSprite(Player.defaultSprite);
			}
	
			_this._view = 'common';
	
			/**
	   * DOM container to hold all player
	   *
	   * @memberof! Player#
	   * @type {jQuery}
	   */
			_this.element = _this.createElement();
	
			_this.loadEntity(_this.options.entity, { ctx: element });
			/**
	   * Video html5 component
	   *
	   * @memberof! Player#
	   * @type {Entity}
	   */
			_this.video = _this.entity;
	
			// Create controls
			// TODO: move this action to the createElement
			_this.controls = {};
			_this._initControls();
	
			/**
	   * @access private
	   */
			_this._dblclickTimeout = null;
	
			_this._initSections().then(function (data) {
				_this.sections = data.sectionsComponent;
	
				/**
	    * Sections init event
	    *
	    * @event Player#sectionsinit
	    * @example
	    * const player = new Player($('#video'), options);
	    * player.on('sectionsinit', (e, data) => cosnole.log(data));
	    *
	    */
				_this.trigger('sectionsinit', data);
			});
			_this._initPlugins();
	
			_this._listenHotKeys();
	
			_this._userActivity = false;
			_this._listenUserActivity();
	
			_this._waitingTimeouts = [];
	
			/* Retrigger {@link Entity} Events */
			[
			/**
	   * durationchange player event
	   *
	   * @event Player#durationchange
	   */
			'durationchange',
	
			/**
	   * progress html5 media event
	   *
	   * @event Player#progress
	   */
			'progress',
	
			/**
	   * dblclick
	   *
	   * @event Player#dbclick
	   */
			'dblclick',
	
			/**
	   * dblclick
	   *
	   * @event Player#dbclick
	   */
			'click',
	
			/**
	   * canplay html5 media event
	   *
	   * @event Player#canplay
	   */
			'canplay',
	
			/**
	   * qualitychange html5
	   *
	   * @event Player#qualitychange
	   */
			'qualitychange',
	
			/**
	   * qualitychange html5
	   *
	   * @event Player#trackschange
	   */
			'trackschange'].forEach(function (eventName) {
				_this.video.on(eventName, function () {
					_this.trigger(eventName);
				});
			});
	
			_this.video.one('play', function () {
				/**
	    * First play event
	    *
	    * @event Player#firstplay
	    */
				_this.trigger('firstplay');
				_this.removeClass('leplayer--virgin');
			});
	
			_this.video.on('timeupdate', function () {
				if (_this.video.currentTime > 0) {
					_this.removeClass('leplayer--virgin');
				}
	
				/**
	    * timeupdate html5 media event
	    *
	    * @event Player#timeupdate
	    */
				_this.trigger('timeupdate', { time: _this.video.currentTime, duration: _this.video.duration });
			});
	
			_this.video.on('loadstart', function () {
				_this.removeClass('leplayer--ended');
	
				_this.error = null;
				/**
	    * loadstart player event
	    *
	    * @event Player#loadstart
	    */
				_this.trigger('loadstart');
			});
	
			_this.video.on('seeking', function () {
				_this._startWaiting();
				/**
	    * seeking html5 media event
	    *
	    * @event Player#seeking
	    */
				_this.trigger('seeking');
			});
	
			_this.video.on('seeked', function () {
				_this._stopWayting();
				/**
	    * seeked html5 media event
	    *
	    * @event Player#seeked
	    */
				_this.trigger('seeked');
			});
	
			_this.video.on('volumechange', function () {
				/**
	    * volumechange html5 media event
	    *
	    * @event Player#volumechange
	    */
				_this.trigger('volumechange', { volume: _this.video.volume });
			});
	
			_this.video.on('posterchange', function (e, data) {
				var url = data.url;
				_this.poster.url = url;
				_this.trigger('posterchange');
			});
	
			_this.video.on('play', function (e) {
				_this.removeClass('leplayer--ended');
				_this.removeClass('leplayer--paused');
				_this.addClass('leplayer--playing');
	
				/**
	    * play html5 media event
	    *
	    * @event Player#play
	    */
				_this.trigger('play');
			});
	
			_this.video.on('pause', function () {
				_this.removeClass('leplayer--playing');
				_this.addClass('leplayer--paused');
	
				/**
	    * pause html5 media event
	    *
	    * @event Player#pause
	    */
				_this.trigger('pause');
			});
	
			_this.video.on('playing', function () {
				_this._stopWayting();
	
				/**
	    * playing html5 media event
	    *
	    * @event Player#playing
	    */
				_this.trigger('playing');
			});
	
			_this.video.on('ratechange', function () {
				/**
	    * rate html5 media event
	    *
	    * @event Player#rate
	    */
				_this.trigger('ratechange', { rate: _this.video.rate });
			});
	
			_this.video.on('ended', function () {
				_this.addClass('leplayer--ended');
	
				if (_this.options.loop) {
					_this.currentTime = 0;
					_this.video.play();
				} else if (!_this.video.paused) {
					_this.video.pause();
				}
	
				/**
	    * ended html5 media event
	    *
	    * @event Player#ended
	    */
				_this.trigger('ended');
			});
	
			_this.video.on('canplaythrough', function () {
				_this._stopWayting();
				/**
	    * canplaythrough html5 media event
	    *
	    * @event Player#canplaythrough
	    */
				_this.trigger('canplaythrough');
			});
	
			_this.video.on('waiting', function () {
				_this._startWaiting();
	
				_this.video.one('timeupdate', function () {
					return _this._stopWayting();
				});
	
				/**
	    * waiting html5 media event
	    *
	    * @event Player#waiting
	    */
				_this.trigger('waiting');
			});
	
			_this.video.on('error', function (e, data) {
				_this.error = new _MediaError2.default(data.code);
			});
	
			_this.video.init().then(function () {
				/**
	    * Player init event
	    *
	    * @event Player#inited
	    */
				_this.trigger('inited');
	
				if (_this.options.time) {
					_this.currentTime = _this.options.time;
				}
	
				if (_this.video.src != null && _this.options.autoplay) {
					_this.play();
				}
			});
	
			_this.on('fullscreenchange', _this._onFullscreenChange.bind(_this));
			_this.on('click', _this._onClick.bind(_this));
			_this.on('dblclick', _this._onDbclick.bind(_this));
			_this.on('inited', _this._onInited.bind(_this));
			_this.on('play', _this._onPlay.bind(_this));
			_this.on('pause', _this._onPause.bind(_this));
	
			(0, _jquery2.default)(document).on(_FullscreenApi2.default.fullscreenchange, _this._onEntityFullscrenChange.bind(_this));
			return _this;
		}
	
		_createClass(Player, [{
			key: 'loadEntity',
			value: function loadEntity(name, options) {
				var Entity = Player.getComponent(name);
				this._entity = new Entity(this, options);
			}
	
			/**
	   * Starts playing the video
	   *
	   *
	   * @access public
	   * @example
	   * const player = new Player($("#video"),options);
	   * $('.some-button').on('click', () => player.play());
	   */
	
		}, {
			key: 'play',
			value: function play() {
				return this.video.play();
			}
	
			/**
	   * Pauses the currently playing video
	   *
	   * @access public
	   */
	
		}, {
			key: 'pause',
			value: function pause() {
				return this.video.pause();
			}
	
			/**
	   * Toggle the currently playing video
	   *
	   * @access public
	   */
	
		}, {
			key: 'togglePlay',
			value: function togglePlay() {
				return this.video.togglePlay();
			}
	
			/**
	   * Begin loading the src data
	   *
	   * @access public
	   */
	
		}, {
			key: 'load',
			value: function load() {
				return this.video.load();
			}
	
			/**
	   * On set view callback
	   *
	   * @access public
	   * @param {String} view View name
	   * @returns {Player} this
	   * @example
	   * const player = new Player($('#video'), options);
	   * player.onSetView('mini', () => console.log('Miniplayer yeah!')
	   *     .onSetView('fullscreen', () => console.log('Fullscreen boom!')
	   *     .onSetView('common', () => console.log('Common view - lol');
	   */
	
		}, {
			key: 'onSetView',
			value: function onSetView(view) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}
	
				this.on.apply(this, ['setview.' + view].concat(args));
	
				return this;
			}
	
			/**
	   * On del view callback
	   *
	   * @access public
	   * @param {String} view View name
	   * @returns {Player} this
	   * @example
	   * const player = new Player($('#video'), options);
	   * player.onDelView('mini', () => console.log('Exit miniplayer')
	   */
	
		}, {
			key: 'onDelView',
			value: function onDelView(view) {
				for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
					args[_key2 - 1] = arguments[_key2];
				}
	
				this.on.apply(this, ['delview.' + view].concat(args));
	
				return this;
			}
	
			/**
	   * Get some data for player
	   *
	   * @access public
	   * @returns {jQuery.promise} Promise
	   */
	
		}, {
			key: 'getData',
			value: function getData() {
				var dfd = new _jquery2.default.Deferred();
	
				if (this._data !== undefined) {
					dfd.resolve(this._data);
					return dfd.promise();
				}
	
				if (typeof this.options.data === 'string') {
					return _jquery2.default.ajax({
						url: this.options.data,
						method: 'GET',
						dataType: 'json'
					}).promise();
				} else if (_typeof(this.options.data) === 'object') {
					dfd.resolve(this.options.data);
					return dfd.promise();
				}
			}
		}, {
			key: 'getSectionData',
			value: function getSectionData() {
				return this.getData().then(function (data) {
					return data.sections;
				});
			}
	
			/**
	   * Request fullscreen
	   *
	   * @access public
	   * @fires Player#fullscreenchange
	   */
	
		}, {
			key: 'requestFullscreen',
			value: function requestFullscreen() {
				var fsApi = _FullscreenApi2.default;
	
				if (fsApi.requestFullscreen) {
					// Call HTML5 Video api requestFullscreen
					this.element[0][fsApi.requestFullscreen]();
	
					/**
	     * fullscreenchange html5 media event
	     *
	     * @event Player#fullscreenchange
	     */
					this.trigger('fullscreenchange', true);
				} else if (this.video.supportsFullScreen()) {
					this.video.enterFullscreen();
				}
			}
	
			/**
	   * Exit fullscreen
	   *
	   * @access public
	   * @fires Player#fullscreenchange
	   */
	
		}, {
			key: 'exitFullscreen',
			value: function exitFullscreen() {
				var fsApi = _FullscreenApi2.default;
	
				if (fsApi.exitFullscreen) {
					document[fsApi.exitFullscreen]();
				} else if (this.video.supportsFullScreen()) {
					this.video.exitFullscreen();
				}
	
				this.trigger('fullscreenchange', false);
			}
	
			/**
	   * Toggle fullscreen
	   *
	   * @access public
	   * @fires Player#fullscreenchange
	   */
	
		}, {
			key: 'toggleFullscreen',
			value: function toggleFullscreen() {
				if (this.view === 'fullscreen') {
					this.exitFullscreen();
				} else {
					this.requestFullscreen();
				}
			}
	
			/**
	   * Get ControlCollection of Player by name (e.x 'common', 'fullscreen')
	   *
	   * @access public
	   * @param {String} name - Name of ControlCollection
	   * @returns {ControlCollection}
	   */
	
		}, {
			key: 'getControls',
			value: function getControls(name) {
				return this.controls[name];
			}
	
			/**
	   * Return the width of player.
	   *
	   * @access public
	   * @returns {Number} Width in px
	   */
	
		}, {
			key: 'getWidth',
			value: function getWidth() {
				return this.element.width();
			}
	
			/**
	   * Complete the sections, by the additional field 'end' in each section
	   *
	   * @access private
	   * @param {Object} sections - Sections
	   * @returns {Object} New sections
	   */
	
		}, {
			key: '_completeSections',
			value: function _completeSections(sections) {
				if (sections == null || sections.length === 0) {
					return;
				}
				var newSections = [].concat(sections);
				for (var i = 0; i < newSections.length; i++) {
					var endSection = void 0;
					if (i < newSections.length - 1) {
						endSection = newSections[i + 1].begin;
					} else {
						endSection = this.video.duration;
					}
					newSections[i].end = endSection;
				}
				return newSections;
			}
	
			/**
	   * Get and set the current playback position in the audio/video (in seconds)
	   * Getter and setter
	   *
	   * @access public
	   * @memberof! Player#
	   * @type {Nubmer}
	   */
	
		}, {
			key: 'createElement',
	
	
			/**
	   * Remove unnecessary attributes, and set some attrs from options (loop, poster etc...). Create main DOM objects
	   *
	   * @override
	   */
			value: function createElement() {
				var options = this.options;
				var element = this._element;
	
				this.element = (0, _utils.createEl)('div');
	
				this.element = this.element.addClass('leplayer').attr('tabindex', 0).css('width', options.width && '100%').css('max-width', options.width);
	
				/**
	    * Error display component.
	    *
	    * @type {ErrorDisplay}
	    * @memberof! Player#
	    */
				this.errorDisplay = new _ErrorDisplay2.default(this);
	
				/**
	    * Play button component.
	    *
	    * @type {PlayButton}
	    * @memberof! Player#
	    */
				this.playButton = new _PlayButton2.default(this);
	
				// TODO: Вынести это в отдельнеый компонент
				this.loader = (0, _jquery2.default)('<div />').addClass('leplayer-loader-container').append(new _Icon2.default(this, {
					iconName: 'refresh',
					className: 'leplayer-loader-container__icon'
				}).element);
	
				/**
	    * Splash icon component.
	    *
	    * @type {SplashIcon}
	    * @memberof! Player#
	    */
				this.splashIcon = new _SplashIcon2.default(this);
	
				this.videoContainer = (0, _utils.createEl)('div', {
					className: 'leplayer-video'
				}).append(this.errorDisplay.element).append(this.playButton.element).append(this.loader).append(this.splashIcon.element);
	
				this.poster = new _Poster2.default(this);
				this.videoContainer.append(this.poster.element);
	
				var lastTimer = new _Time2.default(this, {
					fn: function fn(player) {
						var video = player.video;
						return (0, _utils.secondsToTime)(video.duration - video.currentTime);
					}
				});
	
				if (this.options.videoInfo) {
					console.warn('options.videoInfo is deprecated, please use istead options.description');
				}
	
				this.infoElement = (0, _utils.createEl)('div', {
					className: 'leplayer__info'
				}).append((0, _utils.createEl)('div', {
					className: 'leplayer__title',
					html: this.options.title || ""
				})).append((0, _utils.createEl)('div', {
					className: 'leplayer__video-info',
					html: this.options.description || this.options.videoInfo || ""
				})).append((0, _utils.createEl)('div', {
					className: 'leplayer__last',
					html: '\u0412\u0438\u0434\u0435\u043E \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 '
				}).append(lastTimer.element));
	
				this.innerElement = (0, _jquery2.default)('<div />').addClass('leplayer__inner').append(this.videoContainer).append(this.infoElement);
	
				this.element = this.element.append(this.innerElement);
	
				this.addClass('leplayer--paused');
				this.addClass('leplayer--virgin');
	
				if (options.sectionContainer) {
					this.sectionsContainer = (0, _jquery2.default)(options.sectionContainer);
				}
	
				element.before(this.element);
				this.videoContainer.append(element);
	
				return this.element;
			}
	
			/**
	   * Get options from video's attribute ( height, width, poster, preload etc...)
	   * Get source video from src attr or <source> element with data attr 'data-quality'
	   * Also get sources for different quality from <source> element with data attr 'data-quality'
	   *
	   * @access private
	   * @returns {Object} options
	   */
	
		}, {
			key: '_optionsFromElement',
			value: function _optionsFromElement() {
				// Copy video attrs to the opitons
				var element = this._element;
				if (element == null || element.length === 0) {
					return {};
				}
	
				var attrOptions = ['height', 'width', 'poster', 'autoplay', 'loop', 'muted', 'preload'].reduce(function (obj, item) {
					var val = element.attr(item);
					if (val != null) {
						obj[item] = element.attr(item);
					}
					return obj;
				}, {});
	
				attrOptions.sources = [];
	
				// Src it is main source, that will be load
				if (element.attr('src')) {
					attrOptions.src = {
						url: element.attr('src'),
						title: element.attr('data-quality') || element.attr('title') || 'default'
					};
				}
	
				// Copy sources from HTML5 source element with data-quality attr
				// If data-quality attr does not exist - no
				element.find('source').each(function (i, item) {
					item = (0, _jquery2.default)(item);
					if (!item.attr('data-quality')) {
						return;
					}
					attrOptions.sources = attrOptions.sources.concat({
						url: item.attr('src'),
						title: item.attr('data-quality') || item.attr('title') || 'default'
					});
				});
	
				return attrOptions;
			}
	
			/**
	   * Return a name of icon. If less then 0.1 return volume-off,
	   * if less then 0.5 return volume down, else return volume-up
	   *
	   * @access private
	   * @param {Number} value Volume value
	   * @returns {String} Icon name
	   */
	
		}, {
			key: 'calcVolumeIcon',
			value: function calcVolumeIcon(value) {
				if (value == null) {
					value = this.video.volume;
				}
				var volume = value;
	
				if (volume < this.options.volume.mutelimit) {
					return 'volume-off';
				} else if (value < 0.5) {
					return 'volume-down';
				} else {
					return 'volume-up';
				}
			}
	
			/**
	   * Merge defaultOptions, presetOptions with attrOptions and user's options;
	   *
	   * And complement two objects: controls and excludeControls
	   *
	   * @access private
	   */
	
		}, {
			key: '_initOptions',
			value: function _initOptions() {
				var _this2 = this;
	
				var attrOptions = this._optionsFromElement();
				var presetOptions = {};
	
				if (this._userOptions.preset && Player.getPreset(this._userOptions.preset)) {
					presetOptions = Player.getPreset(this._userOptions.preset).options;
				}
	
				// Merge default options + preset options + video attributts+ user options
				this.options = _jquery2.default.extend(true, {}, defaultOptions, presetOptions, attrOptions, this._userOptions);
	
				if (this.options.sources && !Array.isArray(this.options.sources)) {
					this.options.sources = [this.options.sources];
				}
	
				if (typeof this.options.src === 'string') {
					this.options.src = { url: this.options.src };
				}
	
				if (this.options.src == null && this.options.sources.length > 0) {
					this.options.src = this.options.sources[0];
				}
	
				// Merge correctly controls, without deep merge
				this.options.controls = _jquery2.default.extend({}, defaultOptions.controls, presetOptions.controls, this._userOptions.controls);
	
				// exclude controls option
				// TODO(adinvadim):
				// Set depreceted flag for this option;
	
				var _loop = function _loop(name) {
					if (!_this2.options.excludeControls.hasOwnProperty(name)) return {
							v: void 0
						};
					var controlCollection = _this2.options.excludeControls[name];
					controlCollection.forEach(function (row, index) {
						if (_this2.options.controls[name] && _this2.options.controls[name][index]) {
							_this2.options.controls[name][index] = excludeArray(_this2.options.controls[name][index], row);
						}
					});
				};
	
				for (var name in this.options.excludeControls) {
					var _ret = _loop(name);
	
					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				}
	
				if (this.options.preset && Player.getPreset(this.options.preset)) {
					Player.getPreset(this.options.preset).initOptions();
				}
			}
	
			/**
	   * Create and init all controls
	   *
	   * @access private
	   */
	
		}, {
			key: '_initControls',
			value: function _initControls() {
				var _arr = ['common', 'fullscreen'];
	
				for (var _i = 0; _i < _arr.length; _i++) {
					var name = _arr[_i];
					if (!this.options.controls.hasOwnProperty(name)) return;
					var controlCollection = new _ControlCollection2.default(this, { name: name });
					this.element.append(controlCollection.element);
				}
	
				if (this.controls.common != null) {
					this.controls.common.active = true;
				}
			}
		}, {
			key: '_listenHotKeys',
			value: function _listenHotKeys() {
				var _this3 = this;
	
				var isKeyBinding = function isKeyBinding(e, binding) {
					return (e.which === binding.key || e.key === binding.key) && !!binding.shiftKey === e.shiftKey && !!binding.ctrlKey === e.ctrlKey;
				};
	
				this.element.on('keydown.leplayer.hotkey', function (e) {
					_this3.options.keyBinding.forEach(function (binding) {
	
						if (isKeyBinding(e, binding)) {
							e.preventDefault();
							binding.fn(_this3);
							return false;
						}
					});
				});
			}
	
			/**
	   * Init sections, get ajax or json with sections data and create Sections object and added them to the DOM
	   *
	   * @access private
	   * @returns {jqPromise} jQuery promise
	   */
	
		}, {
			key: '_initSections',
			value: function _initSections() {
				var _this4 = this;
	
				var dfd = _jquery2.default.Deferred();
				if (this.options.data == null) {
					dfd.reject(null);
				} else {
					this.getSectionData().done(function (sections) {
						sections = [].concat(_toConsumableArray(sections));
	
						var isSectionOutside = _this4.sectionsContainer && _this4.sectionsContainer.length > 0;
	
						if (sections == null || sections.length === 0) {
							dfd.reject(null);
							return;
						}
	
						sections = _this4._completeSections(sections);
	
						var sectionsComponent = new _Sections2.default(_this4, {
							items: sections,
							fullscreenOnly: isSectionOutside,
							hideScroll: true
						});
	
						_this4.innerElement.append(sectionsComponent.element);
	
						if (isSectionOutside) {
							var outsideSections = new _Sections2.default(_this4, {
								items: sections
							});
							_this4.sectionsContainer.append(outsideSections.element);
						}
						dfd.resolve({ sectionsComponent: sectionsComponent, items: sections });
					});
				}
	
				return dfd.promise();
			}
	
			/**
	   * Function, than init all plugins from player options.
	   * If plugin doesn't exist throw an error
	   *
	   * @access private
	   * @returns {Player} this
	   */
	
		}, {
			key: '_initPlugins',
			value: function _initPlugins() {
				if (this.options.plugins) {
					for (var name in this.options.plugins) {
						if (!this.options.plugins.hasOwnProperty(name)) return;
						var pluginOptions = this.options.plugins[name];
						if (this[name]) {
							if (pluginOptions) {
								this[name](pluginOptions);
							}
						} else {
							console.error('Plugin \'' + name + '\' doesn\'t exist');
						}
					}
				}
	
				return this;
			}
	
			/**
	   * @access private
	   */
	
		}, {
			key: '_listenUserActivity',
			value: function _listenUserActivity() {
				var _this5 = this;
	
				var mouseInProgress = void 0;
				var lastMoveX = void 0;
				var lastMoveY = void 0;
	
				var onMouseMove = function onMouseMove(e) {
					if (e.screenX !== lastMoveX || e.screenY !== lastMoveY) {
						lastMoveX = e.screenX;
						lastMoveY = e.screenY;
						_this5._userActivity = true;
					}
				};
	
				var onMouseDown = function onMouseDown(e) {
					_this5._userActivity = true;
	
					// While user is pressing mouse or touch, dispatch user activity
					clearInterval(mouseInProgress);
	
					mouseInProgress = setInterval(function () {
						_this5._userActivity = true;
					}, 250);
				};
	
				var onMouseUp = function onMouseUp(e) {
					_this5._userActivity = true;
					clearInterval(mouseInProgress);
				};
	
				this.element.on('mousemove', onMouseMove);
	
				this.element.on('mousedown', onMouseDown);
	
				this.element.on('mouseup', onMouseUp);
	
				this.element.on('keydown', function (e) {
					return _this5._userActivity = true;
				});
				this.element.on('keyup', function (e) {
					return _this5._userActivity = true;
				});
	
				// See http://ejohn.org/blog/learning-from-twitter/
				var inactivityTimeout = void 0;
				var delay = this.options.innactivityTimeout;
				setInterval(function () {
					if (_this5._userActivity) {
	
						// Reset user activuty tracker
						_this5._userActivity = false;
	
						_this5.userActive = true;
	
						clearTimeout(inactivityTimeout);
	
						if (delay > 0) {
	
							inactivityTimeout = setTimeout(function () {
								if (!_this5._userActivity) {
									_this5.userActive = false;
								}
							}, delay);
						}
					}
				}, 250);
			}
	
			/**
	   * Stop showing spinner and clear delay of showing spinner
	   *
	   * @access private
	   */
	
		}, {
			key: '_stopWayting',
			value: function _stopWayting() {
				this._waitingTimeouts.forEach(function (item) {
					return clearTimeout(item);
				});
				this._waitingTimeouts = [];
				this.removeClass('leplayer--waiting');
			}
	
			/**
	   * Show spinner with delay in 300ms
	   *
	   * @access private
	   */
	
		}, {
			key: '_startWaiting',
			value: function _startWaiting() {
				var _this6 = this;
	
				this._waitingTimeouts.push(setTimeout(function () {
					_this6.addClass('leplayer--waiting');
				}, 300));
			}
	
			/**
	   * On inited player event handler
	   *
	   * @access private
	   * @param {PlayerEvent} e
	   */
	
		}, {
			key: '_onInited',
			value: function _onInited(e) {
				this.addClass('leplayer--inited');
	
				this.options.onPlayerInited.call(this, e);
			}
	
			/**
	   * On click video event handler. Focus on video and togglePlay
	   *
	   * @access private
	   * @param {PlayerEvent} e
	   */
	
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				var _this7 = this;
	
				clearTimeout(this._dblclickTimeout);
				this._dblclickTimeout = setTimeout(function () {
					_this7.video.element.focus();
					_this7.togglePlay();
				}, 300);
			}
	
			/**
	   * On dblclick on the video player event handler
	   *
	   * @access private
	   * @param {PlayerEvent} e
	   */
	
		}, {
			key: '_onDbclick',
			value: function _onDbclick(e) {
				clearTimeout(this._dblclickTimeout);
				this.toggleFullscreen();
			}
	
			/**
	   * On fullscreen change player event handler
	   *
	   * @access private
	   * @param {PlayerEvent} e
	   */
	
		}, {
			key: '_onFullscreenChange',
			value: function _onFullscreenChange(e, isFs) {
				if (isFs) {
					this.view = 'fullscreen';
					this.focus();
				} else {
					this.view = 'common';
	
					if (_browser.IS_ANDROID_PHONE || _browser.IS_IPHONE || _browser.IS_IPOD) {
						this.pause();
					}
				}
			}
	
			/**
	   * On play event handler
	   *
	   * @access private
	   * @param {PlayerEvent} e
	   */
	
		}, {
			key: '_onPlay',
			value: function _onPlay() {
				this.splashIcon.show('play');
			}
	
			/**
	   * On pause player event handler
	   * Show pause icon in the center of video
	   *
	   * @access private
	   */
	
		}, {
			key: '_onPause',
			value: function _onPause() {
				this.splashIcon.show('pause');
			}
		}, {
			key: '_onEntityFullscrenChange',
			value: function _onEntityFullscrenChange() {
				var fsApi = _FullscreenApi2.default;
				var isFs = !!document[fsApi.fullscreenElement];
				this.trigger('fullscreenchange', isFs);
			}
		}, {
			key: 'entity',
			get: function get() {
				return this._entity;
			}
		}, {
			key: 'currentTime',
			get: function get() {
				return this.video.currentTime;
			},
			set: function set(value) {
				this.video.currentTime = value;
			}
	
			/**
	   * Returns the length of the current audio/video (in seconds)
	   * Getter
	   *
	   * @access public
	   * @memberof! Player#
	   * @type {Nubmer}
	   */
	
		}, {
			key: 'duration',
			get: function get() {
				return this.video.duration;
			}
	
			/**
	   * Returns whether the playback of the audio/video has ended or not
	   * Getter
	   *
	   * @memberof! Player#
	   * @type {Boolean}
	   */
	
		}, {
			key: 'ended',
			get: function get() {
				return this.video.ended;
			}
	
			/**
	   * Returns and set whether the playback of the audio/video has ended or not
	   * Getter and setter
	   *
	   * @access public
	   * @memberof! Player#
	   * @type {MediaError|String}
	   * @fires Player#error
	   */
	
		}, {
			key: 'error',
			get: function get() {
				return this._error || null;
			},
			set: function set(value) {
				if (value === null) {
					this._error = null;
					this.removeClass('leplayer--error');
					if (this.errorDisplay) {
						this.errorDisplay.element.hide();
					}
					return this;
				}
				this._error = new _MediaError2.default(value);
	
				this.addClass('leplayer--error');
	
				/**
	    * error event
	    *
	    * @event Player#error
	    * @property {MediaError} error
	    * @example
	    * const player = new Player($('#video'), options);
	    * player.on('error', (e, data) => console.error(data.error));
	    */
				this.trigger('error', { error: this._error });
	
				return this;
			}
	
			/**
	   * Return the height of player. If you want get height only of video element, use this.video.height or whatever
	   *
	   * @access public
	   * @type {Number}
	   * @memberof! Player#
	   */
	
		}, {
			key: 'height',
			get: function get() {
				return this.element.height();
			}
	
			/**
	   * Return unnecessary video heigth
	   * @access public
	   * @type {Number}
	   * @memberof! Player#
	   */
	
		}, {
			key: 'videoHeight',
			get: function get() {
				return this.video.height;
			}
	
			/**
	   * @access public
	   * @type {Boolean}
	   * @mebmerof! Player#
	   */
	
		}, {
			key: 'userActive',
			get: function get() {
				return this._userActive || false;
			},
			set: function set(value) {
				if (value !== this.getUserActive) {
					this._userActive = value;
					this.toggleClass('leplayer--user-active', value);
					/**
	     * User active event
	     *
	     * @event Player#useractive
	     */
					this.trigger('useractive');
				}
			}
	
			/**
	   * Set and get player view. View Can be 'common', 'fullscreen', 'mini'w
	   *
	   * @access public
	   * @type {String}
	   * @memberof! Player#
	   */
	
		}, {
			key: 'view',
			get: function get() {
				return this._view;
			},
			set: function set(view) {
				if (this.view != null) {
					this.removeClass('leplayer--' + this.view);
					this.trigger('delview.' + this.view);
				}
	
				this._view = view;
				this.element.addClass('leplayer--' + view);
				this.trigger('setview.' + view);
	
				return this;
			}
		}]);
	
		return Player;
	}(_Component3.default);
	
	/**
	 * Static helper for creating a plugins for leplayer
	 *
	 * @access public
	 * @static
	 * @param {String} name The name of plugin
	 * @param {Function} fn Plugin init function
	 *
	 * @example
	 * Player.plugin('helloWorld', function(pluginOptions) {
	 *    const player = this;
	 *    player.on('click', () => console.log('Hello world'));
	 * })
	 *
	 */
	
	
	Player.plugin = function (name, fn) {
		Player.prototype[name] = fn;
	};
	
	/**
	 * Get by name registered component
	 *
	 * @param {String} name - Name of component
	 * @return {Component}
	 */
	Player.getComponent = _Component3.default.getComponent;
	
	/**
	 * Register component
	 *
	 * @access public
	 * @static
	 * @param {String} name
	 * @param {Component} component
	 *
	 * @example
	 * Player.registerComponent('ErrorDisplay', ErrorDisplay);
	 */
	Player.registerComponent = _Component3.default.registerComponent;
	
	/**
	 * Register control
	 *
	 * @access public
	 * @static
	 * @param {String} name
	 * @param {Control} control
	 */
	Player.getControl = _Control2.default.getControl;
	
	/**
	 * Get by name registered control
	 *
	 * @access public
	 * @static
	 * @param {String} name
	 * @returns {Control}
	 *
	 * @example
	 * Player.registerControl('backward', BackwardControl);
	 */
	Player.registerControl = _Control2.default.registerControl;
	
	/**
	 * Convert seconds to format string 'hh?:mm:ss'
	 *
	 * @access public
	 * @param {Number} seconds Seconds
	 * @param {Boolean} showHours convert to format 'hh:mm:ss'
	 * @returns {String}
	 */
	Player.secondsToTime = _utils.secondsToTime;
	
	/**
	 * Static helper for creating a plugins for leplayer
	 *
	 * @access public
	 * @static
	 * @param {String} name The name of plugin
	 * @param {Function|Object} fn Plugin init function
	 *
	 * @example
	 * Player.preset('common', {
	 *     width : '100%',
	 *     plugins : {
	 *         miniplayer : true
	 *     }
	 * });
	 */
	Player.preset = function (name, obj) {
		if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
			Player._presets[name] = _jquery2.default.extend({}, {
				options: {},
				initOptions: _utils.noop
			}, obj);
		} else if (typeof obj === 'function') {
			Player._presets[name] = obj();
		}
	};
	
	Player.getPreset = function (name) {
		if (Player._presets[name]) {
			return Player._presets[name];
		} else {
			console.error('preset ' + name + ' doesn\'t exist');
			return null;
		}
	};
	
	Player._presets = {};
	
	Player.Cookie = _cookie2.default;
	
	Player._loadSVGSprite = function (svg) {
		var hiddenElement = (0, _jquery2.default)('<div/>').hide();
		(0, _jquery2.default)('body').prepend(hiddenElement.append(svg));
		return hiddenElement;
	};
	
	Player.defaultSprite = __webpack_require__(64);
	
	/* global VERSION */
	Player.version = ("0.4.1");
	
	window.$.fn.lePlayer = function (options) {
		return this.each(function () {
			return new Player((0, _jquery2.default)(this), options);
		});
	};
	
	window.$.lePlayer = Player;
	
	window.lePlayer = Player;
	
	/**
	 * Mini Player plugin
	 *
	 * @plugin
	 */
	Player.plugin('miniplayer', function (pluginOptions) {
		var _this8 = this;
	
		var player = this;
	
		// Мержим с this.options.miniplayer, чтобы не сломать обратную совместимось, так как раньше
		// миниплеер не был плагином плеера.
		var options = _jquery2.default.extend({}, {
			width: '100%',
			offsetShow: function offsetShow(player) {
				var offset = player.element.offset().top + player.element.outerHeight() - player.getControls('common').element.height();
	
				return offset;
			}
		}, this.options.miniplayer, pluginOptions);
	
		var controls = new _ControlCollection2.default(this, {
			name: 'mini',
			controls: options.controls,
			controlOptions: {
				control: {
					disable: false
				}
			}
		});
	
		// Вставляем в infoElement под title и description
		this.infoElement.append(controls.element);
	
		/**
	  * Return offset on oY , when miniplayer should showing or hiding
	  *
	  * @returns {Number}
	  */
		var offsetShow = function offsetShow() {
			if (_jquery2.default.isFunction(options.offsetShow)) {
				return options.offsetShow(player);
			}
	
			return options.offsetShow;
		};
	
		var getWidth = function getWidth() {
			return options.width || _this8.element.width();
		};
	
		this._updateMiniPlayer = function (e, force) {
			var scrollTop = (0, _jquery2.default)(window).scrollTop();
	
			// Because in force update, for normally count height and padding
			// miniplayer before the show must first be hidden
			if (force) {
				_this8.hideMiniPlayer(force);
			}
	
			if (scrollTop > offsetShow()) {
				_this8.showMiniPlayer(force);
			} else {
				_this8.hideMiniPlayer();
			}
		};
	
		this.showMiniPlayer = function (force) {
			if (!force && _this8.view === 'mini') {
				return;
			}
	
			// Added empty space
			_this8.element.css('padding-top', _this8.videoContainer.height());
	
			_this8.view = 'mini';
		};
	
		this.hideMiniPlayer = function (force) {
			if (!force && _this8.view !== 'mini') {
				return;
			}
			_this8.view = 'common';
		};
	
		(0, _jquery2.default)(window).on('scroll', this._updateMiniPlayer.bind(this));
		(0, _jquery2.default)(window).on('resize', this._updateMiniPlayer.bind(this));
		this.on('inited', function (e) {
			return _this8._updateMiniPlayer(e, true);
		});
	
		this.onSetView('mini', function () {
			_this8.innerElement.css('max-width', getWidth());
			_this8.innerElement.css('height', _this8.video.height);
		});
	
		this.onDelView('mini', function () {
			_this8.innerElement.css('max-width', '');
			_this8.innerElement.css('height', '');
	
			_this8.element.css('padding-top', '');
		});
	
		this._updateMiniPlayer();
	});
	
	Player.preset('vps', __webpack_require__(65).preset);
	Player.preset('simple', __webpack_require__(66).preset);
	Player.preset('sms', __webpack_require__(67).preset);
	Player.preset('compressed', __webpack_require__(68).preset);
	
	module.exports = Player;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Control.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Icon = __webpack_require__(5);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class Control
	 * @param {Player} player Main player
	 * @param {Object} [options] Control's options
	 * @param {String} [options.iconName] Name of control's icon. If empty, control will not have a icon
	 * @param {String} [options.className]
	 * @param {String} [options.name]
	 * @param {String} [options.collection]
	 * @param {String} [options.title] Contorl's tooltip, title attr
	 * @param {Function} [options.onClick] On click event handler
	 * @param {Boolean} [options.disable=false]
	 * @property {Icon} icon Icon in control, if it is exist
	 * @extends Component
	 */
	var Control = function (_Component) {
		_inherits(Control, _Component);
	
		function Control(player, options) {
			_classCallCheck(this, Control);
	
			var _this = _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).call(this, player, options));
	
			_this.disable = _this.options.disable != null ? _this.options.disable : true;
	
			_this.player.on('inited', function (e) {
				_this.disable = _this.options.disable != null ? _this.options.disable : false;
			});
	
			_this.element.on({
				click: _this._onClick.bind(_this),
				leplayer_control_click: _this.onClick.bind(_this)
			});
	
			_this.player.on('inited', _this.onPlayerInited.bind(_this));
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(Control, [{
			key: 'createElement',
			value: function createElement() {
				if (this.options.iconName) {
					this.icon = new _Icon2.default(this.player, {
						iconName: this.options.iconName
					});
				}
				var attrs = {
					role: 'button',
					title: this.options.title
				};
				this.element = (0, _jquery2.default)('<div />').addClass(this.buildCSSClass()).append(this.icon && this.icon.element).attr(attrs);
	
				return this.element;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control ' + this.options.className + ' ' + _get(Control.prototype.__proto__ || Object.getPrototypeOf(Control.prototype), 'buildCSSClass', this).call(this);
			}
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				if (this.disable) {
					return false;
				}
				this.element.trigger('leplayer_control_click');
				this.player.trigger('controlclick', { control: this });
			}
	
			/**
	   *
	   * On click event handler
	   * @abstact
	   */
	
		}, {
			key: 'onClick',
			value: function onClick(e) {
				e.preventDefault();
				if (typeof this.options.onClick === 'function') {
					this.options.onClick.call(this, arguments);
				}
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {}
		}, {
			key: 'disable',
			set: function set(value) {
				this._disable = value;
				this.element.toggleClass('disabled', value);
			},
			get: function get() {
				return this._disable;
			}
		}], [{
			key: 'registerControl',
			value: function registerControl(name, control) {
				if (name == null) {
					return;
				}
	
				if (Control._controls == null) {
					Control._controls = {};
				}
	
				Control._controls[name] = control;
	
				return control;
			}
		}, {
			key: 'getControl',
			value: function getControl(name) {
				if (name == null) {
					return;
				}
	
				if (Control._controls && Control._controls[name]) {
					return Control._controls[name];
				}
			}
		}, {
			key: 'create',
			value: function create(player, name, options) {
				var controlClass = this.getControl(name);
				if (controlClass == null) {
					console.error('Control ' + name + ' doesn\'t exist');
					return null;
				}
	
				return new controlClass(player, options);
			}
		}]);
	
		return Control;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Control', Control);
	Control.registerControl('control', Control);
	exports.default = Control;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Component.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Player component - Base class for all UI
	 *
	 * @param {Player} player Main player
	 * @param {Object} [options] Options of component
	 * @param {jQuery} [options.element] Элемент на котором можно иницилизовать класс.
	 * @property {Object} options
	 * @property {jQuery} element
	 * @class Component
	 */
	var Component = function () {
		function Component(player, options) {
			_classCallCheck(this, Component);
	
			options = this.options = _jquery2.default.extend({}, {
				createElement: true
			}, this.options, options);
	
			if (!player && this.play != null) {
				this.player = player = this;
			} else {
				this.player = player;
			}
	
			if (options.createElement) {
	
				if (options.element) {
					this.element = options.element;
				} else {
					this.createElement();
				}
	
				if (this.element.length !== 1) {
					console.error('Component.prototype.element.length must equal 1, not ' + this.element.length + '\n', this.element);
				}
	
				this.element[0].__node = this;
			}
		}
	
		/**
	  * @abstract
	  */
	
	
		_createClass(Component, [{
			key: 'createElement',
			value: function createElement() {
	
				return '';
			}
	
			/**
	   * @abstract
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return '';
			}
	
			/**
	   * Set the focus to this component
	   */
	
		}, {
			key: 'focus',
			value: function focus() {
				this.element.focus();
			}
	
			/**
	   * Remove the focus from this component
	   */
	
		}, {
			key: 'blur',
			value: function blur() {
				this.element.blur();
			}
	
			/**
	   * Emit a player event (the name of event would be a leplayer_smth)
	   *
	   * @access public
	   * @param {String} eventName
	   * @param {Arguments} ...args jQuery.fn.on other arguments
	   * @returns {Player} this
	   */
	
		}, {
			key: 'trigger',
			value: function trigger(eventName) {
				var _element;
	
				var event = _jquery2.default.Event('leplayer_' + eventName, { player: this.player });
	
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}
	
				(_element = this.element).triggerHandler.apply(_element, [event].concat(args));
				return this;
			}
	
			/**
	   * Listen a player event with leplayer_ suffix
	   *
	   * @access public
	   * @param {String} eventName
	   * @param {Arguments} ...args jQuery.fn.on other arguments
	   * @returns {Player} this
	   */
	
		}, {
			key: 'on',
			value: function on(eventName) {
				var _element2;
	
				for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
					args[_key2 - 1] = arguments[_key2];
				}
	
				(_element2 = this.element).on.apply(_element2, ['leplayer_' + eventName].concat(args));
				return this;
			}
		}, {
			key: 'one',
			value: function one(eventName) {
				var _element3;
	
				for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
					args[_key3 - 1] = arguments[_key3];
				}
	
				(_element3 = this.element).one.apply(_element3, ['leplayer_' + eventName].concat(args));
			}
	
			/**
	   * Add the CSS class for general leplayer DOM element
	   *
	   * @access public
	   * @param {String} className Name of class (not a selector, it's mean, that string sould be without point at the start)
	   * @returns {Player} this
	   */
	
		}, {
			key: 'addClass',
			value: function addClass(className) {
				this.element.addClass(className);
				return this;
			}
	
			/**
	   * Remove the CSS class from general leplayer DOM element
	   *
	   * @access public
	   * @param {String} className Name of class
	   * @returns {Player} this
	   */
	
		}, {
			key: 'removeClass',
			value: function removeClass(className) {
				this.element.removeClass(className);
				return this;
			}
	
			/**
	   * Toggle the CSS class from general leplayer DOM element
	   *
	   * @access public
	   * @param {String} className
	   * @param {Boolean} flag
	   * @returns {Player} this
	   */
	
		}, {
			key: 'toggleClass',
			value: function toggleClass(className, flag) {
				this.element.toggleClass(className, flag);
				return this;
			}
		}, {
			key: 'hasClass',
			value: function hasClass(className) {
				return this.element.hasClass(className);
			}
		}], [{
			key: 'registerComponent',
			value: function registerComponent(name, component) {
				if (name == null) {
					return;
				}
	
				if (Component._components == null) {
					Component._components = {};
				}
	
				Component._components[name] = component;
	
				return component;
			}
		}, {
			key: 'getComponent',
			value: function getComponent(name) {
				if (name == null) {
					return;
				}
	
				if (Component._components && Component._components[name]) {
					return Component._components[name];
				}
			}
		}]);
	
		return Component;
	}();
	
	Component.registerComponent('Component', Component);
	exports.default = Component;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Icon.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options] Icon's options
	 * @param {String} [options.iconName=''] Icon's name. If use svgsprite icons, iconName it's id in sprite
	 * @class Icon
	 * @extends Component
	 */
	var Icon = function (_Component) {
		_inherits(Icon, _Component);
	
		function Icon(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, Icon);
	
			options = _jquery2.default.extend({}, {
				className: '',
				iconName: ''
			}, options);
			return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, player, options));
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(Icon, [{
			key: 'createElement',
			value: function createElement() {
				this._useTag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
				this._svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	
				this.iconName = this._iconName = this.options.iconName;
				this._svgTag.appendChild(this._useTag);
				this.element = (0, _jquery2.default)('<div />').addClass(this.buildCSSClass()).attr('title', this.options.title).append((0, _jquery2.default)(this._svgTag));
				return this.element;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return _get(Icon.prototype.__proto__ || Object.getPrototypeOf(Icon.prototype), 'buildCSSClass', this).call(this) + ' leplayer-icon ' + this.options.className;
			}
	
			/**
	   * Setter of iconName field
	   * @param {String} iconName
	   */
	
		}, {
			key: 'iconName',
			set: function set(iconName) {
				var _useTag, _useTag2;
	
				var attrNS = ['http://www.w3.org/1999/xlink', 'href'];
				(_useTag = this._useTag).removeAttributeNS.apply(_useTag, attrNS.concat([this.player.options.svgPath + '#leplayer-icon-' + this.iconName]));
				(_useTag2 = this._useTag).setAttributeNS.apply(_useTag2, attrNS.concat([this.player.options.svgPath + '#leplayer-icon-' + iconName]));
				this._iconName = iconName;
			}
	
			/**
	   * Getter of iconName field
	   * @return {String} Icon's name
	   */
			,
			get: function get() {
				return this._iconName;
			}
		}]);
	
		return Icon;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Icon', Icon);
	exports.default = Icon;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file PlayButton.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Icon = __webpack_require__(5);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 */
	var PlayButton = function (_Control) {
		_inherits(PlayButton, _Control);
	
		function PlayButton(player, options) {
			_classCallCheck(this, PlayButton);
	
			var _this = _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this, player, options));
	
			_this.element.on('dblclick', _this._onDbclick.bind(_this));
			return _this;
		}
	
		_createClass(PlayButton, [{
			key: 'createElement',
			value: function createElement() {
				var inner = (0, _utils.createEl)('div', {
					className: 'leplayer-play-button__button'
				}).append(new _Icon2.default(this.player, { iconName: 'play' }).element);
	
				this.element = (0, _utils.createEl)('div', {
					className: this.buildCSSClass
				}).append(inner);
	
				return this.element;
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				_get(PlayButton.prototype.__proto__ || Object.getPrototypeOf(PlayButton.prototype), 'onClick', this).call(this, e);
				this.player.trigger('click');
			}
		}, {
			key: '_onDbclick',
			value: function _onDbclick() {
				this.player.trigger('dblclick');
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'leplayer-play-button';
			}
		}]);
	
		return PlayButton;
	}(_Control3.default);
	
	_Component2.default.registerComponent('PlayButton', PlayButton);
	_Control3.default.registerControl('play button', PlayButton);
	exports.default = PlayButton;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file time.js
	 *
	 * @module time
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getScrollBarWidth = undefined;
	exports.secondsToTime = secondsToTime;
	exports.percentify = percentify;
	exports.createEl = createEl;
	exports.noop = noop;
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Convert seconds to format string 'hh?:mm:ss'
	 *
	 * @access public
	 * @param {Number} seconds Seconds
	 * @param {Boolean} showHours convert to format 'hh:mm:ss'
	 * @returns {String}
	 */
	function secondsToTime(seconds, showHours) {
		var h = Math.floor(seconds / 3600);
		var m = Math.floor(seconds % 3600 / 60);
		var s = Math.floor(seconds % 3600 % 60);
		var out = '';
		if (m < 10) {
			m = '0' + m;
		}
		if (s < 10) {
			s = '0' + s;
		}
		out = m + ':' + s;
	
		if (h > 0 || showHours) {
			out = h + ':' + out;
		}
		return out;
	}
	
	/**
	 * Return length / end
	 *
	 * @access public
	 * @param {Number} length
	 * @param {Nubmer} end
	 */
	function percentify(length, end) {
		// or zero beacase NaN
		var percent = length / end || 0;
		return percent >= 1 ? 1 : percent;
	}
	
	function createEl() {
		var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
		var props = arguments[1];
	
		if (props && props.className) {
			props["class"] = props.className;
			delete props.className;
		}
		return (0, _jquery2.default)('<' + tag + '/>', props);
	}
	
	function noop() {}
	
	var getScrollBarWidth = exports.getScrollBarWidth = function () {
		var result = void 0;
	
		return function () {
	
			if (result != null) {
				return result;
			}
	
			var outer = (0, _jquery2.default)('<div />').css({
				visibility: 'hidden',
				width: 100,
				overflow: 'scroll'
			}).appendTo('body');
	
			var widthWithScroll = (0, _jquery2.default)('<div />').css({
				width: '100%'
			}).appendTo(outer).outerWidth();
	
			outer.remove();
			return result = 100 - widthWithScroll;
		};
	}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SplashIcon.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Icon = __webpack_require__(5);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @class SplashIcon
	 * @extends Component
	 */
	var SplashIcon = function (_Component) {
		_inherits(SplashIcon, _Component);
	
		function SplashIcon() {
			_classCallCheck(this, SplashIcon);
	
			return _possibleConstructorReturn(this, (SplashIcon.__proto__ || Object.getPrototypeOf(SplashIcon)).apply(this, arguments));
		}
	
		_createClass(SplashIcon, [{
			key: 'show',
			value: function show(name) {
				var _this2 = this;
	
				this.icon.iconName = name;
				this.element.addClass('leplayer-splashicon--active');
				setTimeout(function () {
					return _this2.element.removeClass('leplayer-splashicon--active');
				}, 300);
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'createElement',
			value: function createElement() {
				this.icon = new _Icon2.default(this.player);
				return this.element = (0, _jquery2.default)('<div />').addClass('leplayer-splashicon').append(this.icon.element);
			}
		}]);
	
		return SplashIcon;
	}(_Component3.default);
	
	exports.default = SplashIcon;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Time.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// TODO: Использовать этот блок в TimeControl
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @class Time
	 * @extends Control
	 */
	var Time = function (_Component) {
		_inherits(Time, _Component);
	
		function Time(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, Time);
	
			options = _jquery2.default.extend({}, {
				fn: function fn(player) {
					var video = player.video;
					return (0, _utils.secondsToTime)(video.currentTime);
				}
			}, options);
	
			var _this = _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this, player, options));
	
			_this.player.on('timeupdate', _this.updateText.bind(_this));
			_this.player.on('inited', _this.updateText.bind(_this));
			return _this;
		}
	
		_createClass(Time, [{
			key: 'updateText',
			value: function updateText(e, data) {
				this.element.text(this.options.fn(this.player));
			}
		}, {
			key: 'createElement',
			value: function createElement() {
				this.element = (0, _utils.createEl)('div', { className: 'leplayer-time' });
				return this.element;
			}
		}]);
	
		return Time;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Time', Time);
	exports.default = Time;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ControlCollection.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options] Options of component
	 * @param {jQuery} [options.controls] Array of rows of control's name
	 * @param {Object} [options.controlsOptions] Control options
	 * @property {Array} Array of rows of control's name
	 * @pr
	 *
	 */
	var ControlCollection = function (_Component) {
		_inherits(ControlCollection, _Component);
	
		function ControlCollection(player, options) {
			_classCallCheck(this, ControlCollection);
	
			var name = options.name;
	
			var playerOptions = {
				controls: player.options.controls[name]
			};
	
			if (player.options.controlsOptions[name]) {
				playerOptions['align'] = player.options.controlsOptions[name].align;
				playerOptions['controlsOptions'] = player.options.controlsOptions[name].controls;
			}
	
			options = _jquery2.default.extend({}, {
				controls: [],
				controlsOptions: {},
				align: 'left'
			}, playerOptions, options);
	
			var _this = _possibleConstructorReturn(this, (ControlCollection.__proto__ || Object.getPrototypeOf(ControlCollection)).call(this, player, options));
	
			_this.active = options.active || false;
			_this.name = options.name;
	
			_this.player.controls[_this.name] = _this;
			return _this;
		}
	
		_createClass(ControlCollection, [{
			key: '_getControlOptions',
			value: function _getControlOptions(name) {
				var controlsOptions = this.options.controlsOptions;
	
				var result = controlsOptions.control || {};
	
				if (controlsOptions[name]) {
					result = _jquery2.default.extend(true, {}, result, controlsOptions[name]);
				}
	
				return result;
			}
		}, {
			key: 'addControl',
			value: function addControl(indexRow, name, options) {
				var control = _Control2.default.create(this.player, name, _extends({
					collection: this.options.name
				}, options));
	
				if (control == null) {
					return;
				}
	
				while (indexRow > this._rows.length) {
					this.addRow();
				}
	
				var elemRow = this._rows[indexRow];
				elemRow.append(control.element);
	
				if (this.controls == null) {
					this.controls = [];
				}
				if (this.controls[indexRow] == null) {
					this.controls[indexRow] = {};
				}
	
				this.controls[indexRow][name] = control;
			}
		}, {
			key: 'getControl',
			value: function getControl(first, second) {
				if (second == null) {
					var name = first;
					for (var i = 0; i < this.controls.length; i++) {
						if (this.controls[i][name] != null) {
							return this.controls[i][name];
						}
					}
				} else {
					var _name = first;
					var indexRow = second;
					return this.controls[indexRow][_name];
				}
	
				return null;
			}
		}, {
			key: 'addRow',
			value: function addRow() {
				var elemRow = (0, _utils.createEl)('div', {
					className: 'leplayer-controls controls-' + this.options.name
				});
	
				if (this._rows == null) {
					this._rows = [];
				}
				this._rows.push(elemRow);
				this.element.append(elemRow);
	
				return elemRow;
			}
		}, {
			key: 'getRow',
			value: function getRow(indexRow) {
				return this._rows[indexRow || 0];
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;
	
				var _options = this.options,
				    name = _options.name,
				    controls = _options.controls,
				    align = _options.align;
	
				var globalAlign = null;
	
				this.element = (0, _utils.createEl)('div', {
					className: 'leplayer-control-collection leplayer-control-collection--' + name
				});
	
				if (typeof align === 'string') {
					globalAlign = align;
				}
	
				controls.forEach(function (row, indexRow) {
					var elemRow = _this2.addRow();
					var rowAlign = globalAlign;
	
					if (Array.isArray(align) && align[indexRow]) {
						rowAlign = align[indexRow];
					}
	
					row.forEach(function (controlName) {
	
						if (controlName === 'timeline' && rowAlign !== 'justify') {
							console.warn('Conrols should have justify align, if there is the timeline in it');
						}
	
						_this2.addControl(indexRow, controlName, _this2._getControlOptions(name));
					});
	
					elemRow.addClass('leplayer-controls--' + rowAlign).attr('tabindex', 0);
	
					elemRow.find('.divider + .divider').remove();
				});
	
				return this.element;
			}
		}, {
			key: 'hide',
			value: function hide() {
				this.element.hide();
				this.element.find('.leplayer-controls').hide();
			}
		}, {
			key: 'show',
			value: function show() {
				this.element.show();
				this.element.find('.leplayer-controls').show();
			}
		}]);
	
		return ControlCollection;
	}(_Component3.default);
	
	_Component3.default.registerComponent('ControlCollection', ControlCollection);
	exports.default = ControlCollection;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Sections.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class Sections
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {Array} [options.items=[]} Data for sections
	 * @param {Boolean} [options.views] Show section only in fullscreen
	 * @extends Component
	 */
	var Sections = function (_Component) {
		_inherits(Sections, _Component);
	
		function Sections(player, options) {
			var _ret;
	
			_classCallCheck(this, Sections);
	
			var _options$items = options.items,
			    items = _options$items === undefined ? [] : _options$items;
	
			items = [].concat(items);
	
			//options.items = items;
	
			var _this = _possibleConstructorReturn(this, (Sections.__proto__ || Object.getPrototypeOf(Sections)).call(this, player, options));
	
			_this.scrollElement = _this._innerElement;
			_this.activeSection = _this.getSectionByIndex(0);
	
			_this.items = items;
			_this.length = _this.items.length;
	
			_this.setActiveByIndex(0);
	
			_this.element.find('.leplayer-section').on('click', _this.onSectionClick.bind(_this));
	
			_this.player.on('sectionstoggle', _this._onSectionsToggle.bind(_this));
	
			_this.player.on('timeupdate', _this.onTimeUpdate.bind(_this));
	
			_this.player.on('inited', _this.updateSectionDuration.bind(_this));
	
			_this.player.on('durationchange', _this.updateSectionDuration.bind(_this));
	
			_this.player.on('focus', function () {
				return _this.player.focus();
			});
	
			return _ret = _this, _possibleConstructorReturn(_this, _ret);
		}
	
		_createClass(Sections, [{
			key: 'next',
			value: function next() {
				var sectionIndex = parseInt(this.activeSection.attr('data-index'));
				var newIndex = sectionIndex >= this.length ? this.length : sectionIndex + 1;
	
				this.setActiveByIndex(newIndex);
	
				this.player.video.currentTime = this.items[sectionIndex].end;
			}
		}, {
			key: 'prev',
			value: function prev() {
				var sectionIndex = parseInt(this.activeSection.attr('data-index'));
				var newIndex = sectionIndex <= 0 ? 0 : sectionIndex - 1;
	
				this.setActiveByIndex(newIndex);
				this.player.video.currentTime = this.items[newIndex].begin;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'createElement',
			value: function createElement() {
				var _options = this.options,
				    fullscreenOnly = _options.fullscreenOnly,
				    hideScroll = _options.hideScroll;
	
	
				this.element = (0, _jquery2.default)('<div />').addClass('leplayer-sections').attr('tabindex', '0');
	
				this._innerElement = (0, _jquery2.default)('<div />').addClass('leplayer-sections__inner');
	
				if (fullscreenOnly) {
					this.element.addClass('leplayer-sections--fsonly');
				}
	
				if (hideScroll) {
					this.element.addClass('leplayer-sections--hide-scroll');
					this._innerElement.css({
						right: -1 * (0, _utils.getScrollBarWidth)()
					});
				}
	
				this.element.append(this._innerElement.append(this._createSections(this.options.items)));
	
				return this.element;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'updateSectionDuration',
			value: function updateSectionDuration() {
				if (this.items != null && this.items.length > 0) {
					var length = this.items.length;
					this.items[length - 1].end = this.player.video.duration;
	
					// TODO: Продумать функцияю updateSection
					//this.updateSection(this.items[length - 1], length - 1);
				}
			}
		}, {
			key: 'onSectionClick',
			value: function onSectionClick(e) {
				var video = this.player.video;
				var section = (0, _jquery2.default)(e.target).closest('.leplayer-section');
				video.currentTime = section.attr('data-begin');
				this.player.trigger('sectionsclick', { section: this.items[section.attr('data-index')] });
			}
		}, {
			key: 'setActiveByIndex',
			value: function setActiveByIndex(index) {
				if (this.activeSection.length === 0 || parseInt(this.activeSection.attr('data-index')) === index || this.getSectionByIndex(index).length === 0) {
					return this;
				}
	
				this.activeSection.removeClass('leplayer-section--active');
				this.activeSection = this.getSectionByIndex(index);
				this.activeSection.addClass('leplayer-section--active');
	
				var topPosition = this.activeSection.position().top;
	
				this.scrollElement.animate({
					scrollTop: this.scrollElement.scrollTop() + topPosition
				}, 800);
	
				this.player.trigger('sectionschange', { section: this.items[index] });
	
				return this;
			}
		}, {
			key: 'getSectionByIndex',
			value: function getSectionByIndex(index) {
				return this.element.find('.leplayer-section[data-index="' + index + '"]');
			}
		}, {
			key: 'onTimeUpdate',
			value: function onTimeUpdate(e, data) {
				if (this.activeSection.length === 0) {
					return;
				}
	
				var currentTime = this.player.currentTime;
	
				// Update span with end section time
				// TODO: Вынести это в отдельный компонент ShowTime или типо того
				if (this.player.view === 'mini') {
					var endSectionTime = this.activeSection.attr('data-end');
					this.activeSection.next().find('.time').text((0, _utils.secondsToTime)(endSectionTime - currentTime));
				}
	
				for (var i = 0; i < this.items.length; i++) {
					var section = this.items[i];
					if (currentTime < section.end) {
						this.setActiveByIndex(i);
						break;
					}
				}
			}
		}, {
			key: '_onSectionsToggle',
			value: function _onSectionsToggle(e, data) {
				if (this.element.hasClass('leplayer-sections--hidden') && data.checked) {
					this.element.removeClass('leplayer-sections--hidden');
				} else if (!data.checked) {
					this.element.addClass('leplayer-sections--hidden');
				}
			}
	
			/**
	   * Create HTML of section by data and index section
	   *
	   * @returns {String} HTML
	   */
	
		}, {
			key: 'createSection',
			value: function createSection(section, index) {
				var items = this.items || this.options.items;
				var item = ('\n\t\t\t<div class="leplayer-section ' + (!index ? 'leplayer-section--active' : '') + '"\n\t\t\t\tdata-begin="' + section.begin + '"\n\t\t\t\tdata-index="' + index.toString() + '"\n\t\t\t\tdata-end="' + section.end + '">\n\t\t\t\t<div class="leplayer-section-time">' + (0, _utils.secondsToTime)(section.begin) + '</div>\n\t\t\t\t<div class="leplayer-section-info">\n\t\t\t\t\t<div class="leplayer-section-next-info">\n\t\t\t\t\t\t' + (section.nextInfo || 'Следующая секция начнется через') + '\n\t\t\t\t\t\t<span class="time">' + (0, _utils.secondsToTime)(items[0].end) + '</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t' + (section.title != null ? '<div class="leplayer-section-title">' + section.title + '</div>' : '') + '\n\t\t\t\t\t' + (section.description != null ? '<div class="leplayer-section-description">' + section.description + '</div>' : '') + '\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t').trim();
				return item;
			}
	
			// TODO: Придумать что сделать с событиями после обновления полносью секции
			/**
	   * Find section by index and update him using data
	   *
	   * @param {Object} data
	   * @param {Number} index
	   */
	
		}, {
			key: 'updateSection',
			value: function updateSection(data, index) {
				this.getSectionByIndex(index).replaceWith(this.createSection(data, index)).on('click', this.onSectionClick.bind(this));
			}
		}, {
			key: '_createSections',
			value: function _createSections(items) {
				var _this2 = this;
	
				var result = '';
				items.forEach(function (section, index) {
					result += _this2.createSection(section, index);
				});
				return result;
			}
		}]);
	
		return Sections;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Sections', Sections);
	exports.default = Sections;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ErrorDisplay.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @class ErrorDisplay
	 * @extends Component
	 */
	var ErrorDisplay = function (_Component) {
		_inherits(ErrorDisplay, _Component);
	
		function ErrorDisplay(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, ErrorDisplay);
	
			var _this = _possibleConstructorReturn(this, (ErrorDisplay.__proto__ || Object.getPrototypeOf(ErrorDisplay)).call(this, player, options));
	
			if (_this.player._error != null) {
				_this.message = _this.player._error.message;
				_this.element.show();
			}
			_this.player.on('error', _this.onPlayerError.bind(_this));
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(ErrorDisplay, [{
			key: 'createElement',
			value: function createElement() {
				this.element = (0, _jquery2.default)('<div />').addClass('leplayer-error-display');
			}
		}, {
			key: 'onPlayerError',
			value: function onPlayerError(e, data) {
				var error = data.error;
				this.message = error.message;
				this.element.show();
			}
		}, {
			key: 'message',
			set: function set(value) {
				this.element.html(value);
			}
		}]);
	
		return ErrorDisplay;
	}(_Component3.default);
	
	_Component3.default.registerComponent('ErrorDisplay', ErrorDisplay);
	exports.default = ErrorDisplay;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ErrorDisplay.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {String} [options.url] path to poster image
	 * @class Poster
	 * @extends Component
	 */
	var Poster = function (_Component) {
		_inherits(Poster, _Component);
	
		function Poster(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, Poster);
	
			options = _jquery2.default.extend({}, {
				url: options.url
			}, options);
	
			var _this = _possibleConstructorReturn(this, (Poster.__proto__ || Object.getPrototypeOf(Poster)).call(this, player, options));
	
			_this.url = _this.options.url;
			return _this;
		}
	
		_createClass(Poster, [{
			key: 'createElement',
	
	
			/**
	   * @override
	   */
			value: function createElement() {
				this.element = (0, _jquery2.default)('<div />').addClass('leplayer-poster');
	
				return this.element;
			}
		}, {
			key: 'url',
			set: function set(value) {
				if (value == null) {
					return;
				}
				this._url = value;
				this.element.css('background-image', 'url("' + value + '")');
			},
			get: function get() {
				return this._url;
			}
		}]);
	
		return Poster;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Poster', Poster);
	exports.default = Poster;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * @file fullscreen-api.js
	 */
	
	/*
	 * Store the browser-specific methods for the fullscreen API
	 * @type {Object|undefined}
	 * @private
	 */
	var FullscreenApi = {};
	
	// browser API methods
	// map approach from Screenful.js - https://github.com/sindresorhus/screenfull.js
	var apiMap = [
	// Spec: https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html
	['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'],
	// WebKit
	['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'],
	// Old WebKit (Safari 5.1)
	['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'],
	// Mozilla
	['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'],
	// Microsoft
	['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
	
	var specApi = apiMap[0];
	
	var browserApi = void 0;
	
	// determine the supported set of functions
	for (var i = 0; i < apiMap.length; i++) {
		// check for exitFullscreen function
		if (apiMap[i][1] in document) {
			browserApi = apiMap[i];
			break;
		}
	}
	
	// map the browser API names to the spec API names
	if (browserApi) {
		for (var _i = 0; _i < browserApi.length; _i++) {
			FullscreenApi[specApi[_i]] = browserApi[_i];
		}
	}
	
	exports.default = FullscreenApi;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	/**
	 * @file cookie-control.js
	 *
	 * @clas Cookie
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Cookie = function () {
		function Cookie() {
			_classCallCheck(this, Cookie);
		}
	
		_createClass(Cookie, null, [{
			key: 'get',
	
			/**
	   * @public
	   *
	   * @param {String} name Name of cookie
	   * @param {String} [dflt] Return default value if this field is empty
	   *
	   */
			value: function get(name, dflt) {
				var cookies = document.cookie.split(';');
				for (var i in cookies) {
					var d = cookies[i].trim().split('=');
					if (d[0] === 'leplayer_' + name) return d[1];
				}
				return dflt;
			}
	
			/**
	   * @public
	   *
	   * @param {String} name Key
	   * @param {String} value Value
	   */
	
		}, {
			key: 'set',
			value: function set(name, value) {
				var d = new Date();
				d.setDate(d.year + 1);
				document.cookie = 'leplayer_' + name + '=' + value + ';expires=' + d.toString();
			}
		}]);
	
		return Cookie;
	}();
	
	exports.default = Cookie;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @file browser.js
	 */
	
	var USER_AGENT = window.navigator && window.navigator.userAgent || '';
	
	var IS_MOBILE = exports.IS_MOBILE = /Mobile/i.test(USER_AGENT);
	
	var IS_CHROME = exports.IS_CHROME = USER_AGENT.indexOf('Chrome') > -1;
	
	var IS_ANDROID = exports.IS_ANDROID = /Android/i.test(USER_AGENT);
	
	var IS_ANDROID_PHONE = exports.IS_ANDROID_PHONE = IS_ANDROID && IS_MOBILE;
	
	var IS_IPAD = exports.IS_IPAD = /iPad/i.test(USER_AGENT);
	// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
	// to identify iPhones, we need to exclude iPads.
	// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
	var IS_IPHONE = exports.IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
	var IS_IPOD = exports.IS_IPOD = /iPod/i.test(USER_AGENT);
	var IS_IOS = exports.IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;
	
	var IS_SAFARI = exports.IS_SAFARI = USER_AGENT.indexOf('Safari') > -1 && !IS_CHROME;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MediaError = function MediaError(value) {
		_classCallCheck(this, MediaError);
	
		if (value instanceof MediaError) {
			return value;
		}
		if (typeof value === 'number') {
			this.code = value;
		} else if (typeof value === 'string') {
			// default code is zero, so this is a custom error
			this.message = value;
		} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	
			// We assign the `code` property manually because native MediaError objects
			// do not expose it as an own/enumerable property of the object.
			if (typeof value.code === 'number') {
				this.code = value.code;
			}
	
			_jquery2.default.extend(this, value);
		}
	
		if (!this.message) {
			this.message = MediaError.defaultMessages[this.code] || '';
		}
	};
	
	MediaError.prototype.code = 0;
	
	MediaError.prototype.message = '';
	
	MediaError.errorTypes = ['MEDIA_ERR_CUSTOM', 'MEDIA_ERR_ABORTED', 'MEDIA_ERR_NETWORK', 'MEDIA_ERR_DECODE', 'MEDIA_ERR_SRC_NOT_SUPPORTED', 'MEDIA_ERR_ENCRYPTED'];
	
	MediaError.defaultMessages = {
		1: 'Вы прервали загрузку видео.',
		2: 'Загрузка видео прервана из-за потери соединения.',
		3: 'Загрузка видео остановлена из-за проблем с видеофайлом или из-за того, что ваш браузер не поддерживает воспроизведение данного файла.',
		4: 'Видео не может быть загружено из-за проблем с интернет-соединением или проблем на сервере. Или формат файла не поддерживается вашим браузером.',
		5: 'Видео зашифровано, и мы не можем его расшифровать.'
	};
	
	// Add types as properties on MediaError
	// e.g. MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
	for (var errNum = 0; errNum < MediaError.errorTypes.length; errNum++) {
		MediaError[MediaError.errorTypes[errNum]] = errNum;
		// values should be accessible on both the class and instance
		MediaError.prototype[MediaError.errorTypes[errNum]] = errNum;
	}
	
	exports.default = MediaError;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file PlayControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class PlayControl
	 * @param {Player} player Main player
	 * @extends Control
	 */
	var PlayControl = function (_Control) {
		_inherits(PlayControl, _Control);
	
		function PlayControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, PlayControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'play',
				title: 'Воспроизвести видео',
				className: 'play',
				name: 'play'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (PlayControl.__proto__ || Object.getPrototypeOf(PlayControl)).call(this, player, options));
	
			_this.player.on('play', _this.showPause.bind(_this));
			_this.player.on('playing', _this.showPause.bind(_this));
			_this.player.on('pause', _this.showPlay.bind(_this));
			_this.player.on('ended', _this.showReplay.bind(_this));
	
			_this.player.on('play', _this.removeReplay.bind(_this));
			_this.player.on('seeking', _this.removeReplay.bind(_this));
			_this.player.on('loadstart', _this.removeReplay.bind(_this));
			return _this;
		}
	
		/**
	  * Pause the video
	  */
	
	
		_createClass(PlayControl, [{
			key: 'showPlay',
			value: function showPlay() {
				if (this.icon.iconName === 'play') return;
				this.icon.iconName = 'play';
				this.element.attr('title', this.options.title);
			}
	
			/**
	   * Play the video
	   */
	
		}, {
			key: 'showPause',
			value: function showPause() {
				if (this.icon.iconName === 'pause') return;
				this.icon.iconName = 'pause';
				this.element.attr('title', 'Поставить на паузу');
			}
		}, {
			key: 'showReplay',
			value: function showReplay() {
				if (this.icon.iconName === 'refresh') return;
				if (this.player.duration !== Infinity) {
					this._replay = true;
					this.icon.iconName = 'refresh';
					this.element.attr('title', 'Запустить заново');
				}
			}
		}, {
			key: 'removeReplay',
			value: function removeReplay() {
				if (!this._replay) {
					return;
				}
				this._replay = false;
	
				if (this.player.video.paused) {
					this.showPlay();
				} else {
					this.showPause();
				}
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'onClick',
			value: function onClick(e) {
				//super.onClick(e);
				this.player.video.togglePlay();
			}
		}]);
	
		return PlayControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('PlayControl', PlayControl);
	_Control3.default.registerControl('play', PlayControl);
	exports.default = PlayControl;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file VolumeControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlDropdown2 = __webpack_require__(20);
	
	var _ControlDropdown3 = _interopRequireDefault(_ControlDropdown2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class VolumeControl
	 * @extends ControlDropdown
	 */
	var VolumeControl = function (_ControlDropdown) {
		_inherits(VolumeControl, _ControlDropdown);
	
		function VolumeControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, VolumeControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'volume-down',
				className: 'volume-control',
				name: 'volume'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (VolumeControl.__proto__ || Object.getPrototypeOf(VolumeControl)).call(this, player, options));
	
			_this.player.on('volumechange', function (e, data) {
				var video = _this.player.video;
				_this.value = video.muted ? 0 : video.volume;
			});
			return _this;
		}
	
		_createClass(VolumeControl, [{
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;
	
				_get(VolumeControl.prototype.__proto__ || Object.getPrototypeOf(VolumeControl.prototype), 'createElement', this).call(this);
				var drag = false;
				var video = this.player.video;
	
				this.marker = (0, _jquery2.default)('<div/>').addClass('volume-marker');
	
				this.active = (0, _jquery2.default)('<div/>').addClass('volume-active');
	
				this.line = (0, _jquery2.default)('<div/>').addClass('volume-line').append(this.active).append(this.marker).on('click', function (e) {
					if (drag) return;
					var p = _this2.getPosition(e.pageY);
					if (p >= 0 && p <= 1) {
						if (video.muted) {
							video.muted = false;
						}
						video.volume = 1 - p;
					}
				});
	
				this.dropdownContent.addClass('volume-slider').append(this.line);
	
				this.icon.element.attr('title', 'Отключить звук');
	
				this.marker.on('mousedown', function (e) {
					if (e.which !== 1) return;
					drag = true;
				});
	
				(0, _jquery2.default)(document).on({
					mousemove: function mousemove(e) {
						if (!drag) return;
						var p = _this2.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							if (video.muted) {
								video.muted = false;
							}
							video.volume = 1 - p;
						}
					},
	
					mouseup: function mouseup(e) {
						drag = false;
					}
				});
				return this.element;
			}
		}, {
			key: 'toggleMuted',
			value: function toggleMuted() {
				var video = this.player.video;
	
	
				video.muted = !video.muted;
			}
		}, {
			key: 'getPosition',
			value: function getPosition(y) {
				return (y - this.line.offset().top) / this.line.height();
			}
		}, {
			key: 'onClick',
			value: function onClick(e) {
				_get(VolumeControl.prototype.__proto__ || Object.getPrototypeOf(VolumeControl.prototype), 'onClick', this).call(this, e);
				this.toggleMuted();
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited() {
				this.value = this.player.video.defaultVolume;
			}
		}, {
			key: 'value',
			set: function set(value) {
				this.icon.iconName = this.player.calcVolumeIcon(value);
	
				var p = Math.round(value * 100).toString() + '%';
				this.active.css('height', p);
				this.marker.css('bottom', p);
			}
		}]);
	
		return VolumeControl;
	}(_ControlDropdown3.default);
	
	_Component2.default.registerComponent('VolumeControl', VolumeControl);
	_Control2.default.registerControl('volume', VolumeControl);
	exports.default = VolumeControl;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ControlDropdown.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class ControlDropdown
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @property {jQuery} dropdownContent Content of popup
	 * @extends Control
	 */
	var ControlDropdown = function (_Control) {
		_inherits(ControlDropdown, _Control);
	
		function ControlDropdown(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, ControlDropdown);
	
			var _this = _possibleConstructorReturn(this, (ControlDropdown.__proto__ || Object.getPrototypeOf(ControlDropdown)).call(this, player, options));
	
			_this.element.on('mouseenter', function () {
				return !_this.disable && _this.dropdownContent.show();
			});
			_this.element.on('mouseleave', function () {
				return _this.dropdownContent.hide();
			});
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(ControlDropdown, [{
			key: 'createElement',
			value: function createElement() {
				_get(ControlDropdown.prototype.__proto__ || Object.getPrototypeOf(ControlDropdown.prototype), 'createElement', this).call(this);
				this.dropdownContent = (0, _jquery2.default)('<div />').addClass('control-dropdown__content');
				this.element.append(this.dropdownContent);
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-dropdown ' + _get(ControlDropdown.prototype.__proto__ || Object.getPrototypeOf(ControlDropdown.prototype), 'buildCSSClass', this).call(this);
			}
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				if ((0, _jquery2.default)(e.target).closest(this.dropdownContent).length > 0) {
					return;
				}
	
				_get(ControlDropdown.prototype.__proto__ || Object.getPrototypeOf(ControlDropdown.prototype), '_onClick', this).call(this, e);
			}
		}]);
	
		return ControlDropdown;
	}(_Control3.default);
	
	_Component2.default.registerComponent('ControlDropdown', ControlDropdown);
	_Control3.default.registerControl('dropdown', ControlDropdown);
	exports.default = ControlDropdown;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file TimelineControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _ControlText = __webpack_require__(22);
	
	var _ControlText2 = _interopRequireDefault(_ControlText);
	
	var _BufferedRanges = __webpack_require__(23);
	
	var _BufferedRanges2 = _interopRequireDefault(_BufferedRanges);
	
	var _Marker = __webpack_require__(24);
	
	var _Marker2 = _interopRequireDefault(_Marker);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class TimelineControl
	 * @property {ControlText} currentTime Current time's text
	 * @property {ControlText} totalTime Total time
	 * @property {jQuery} line
	 * @extends Control
	 */
	var TimelineControl = function (_Control) {
		_inherits(TimelineControl, _Control);
	
		function TimelineControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, TimelineControl);
	
			options = _jquery2.default.extend({}, {
				name: 'timeline',
				className: 'timeline timeline-container'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (TimelineControl.__proto__ || Object.getPrototypeOf(TimelineControl)).call(this, player, options));
	
			_this.marker.element.on('leplayer_mousemove', _this._onMarkerMousemove.bind(_this));
	
			_this.marker.element.on('leplayer_mousedown', _this._onMarkerMousedown.bind(_this));
	
			_this.player.on('sectionsinit', _this.onSectionsInit.bind(_this));
	
			_this.player.on('timeupdate', _this._onTimeUpdate.bind(_this));
	
			_this.player.on('timeupdateload', _this._onTimeUpdate.bind(_this));
	
			_this.player.on('durationchange', _this._onDurationChange.bind(_this));
			return _this;
		}
	
		_createClass(TimelineControl, [{
			key: '_onMarkerMousedown',
			value: function _onMarkerMousedown(e) {
				this.markerShadow.element.hide();
			}
		}, {
			key: '_onMarkerMousemove',
			value: function _onMarkerMousemove(e, data) {
				var x = data.x;
				var p = this.getPosition(x);
				var video = this.player.video;
				if (p > 0 && p < 1) {
					this.marker.markerTime.show().html((0, _utils.secondsToTime)(video.duration * p));
					video.currentTime = video.duration * p;
				}
			}
		}, {
			key: '_onTimeUpdate',
			value: function _onTimeUpdate(e, data) {
				var duration = this.player.video.duration;
				var currentTime = this.player.currentTime;
				if (data && data.currentTime !== undefined) {
					currentTime = data.currentTime;
				}
				var percent = currentTime / duration;
	
				if (isNaN(duration) && currentTime === 0) percent = 0;
	
				this.move({ percent: percent, currentTime: currentTime });
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;
	
				_get(TimelineControl.prototype.__proto__ || Object.getPrototypeOf(TimelineControl.prototype), 'createElement', this).call(this);
				var video = this.player.video;
	
				this.drag = false;
	
				// Create labels
				this.currentTime = new _ControlText2.default(this.player, { className: 'time-current' });
				this.currentTime.text = '00:00';
				this.totalTime = new _ControlText2.default(this.player, { className: 'time-total' });
	
				// Create line with markers and played range
	
				this.marker = new _Marker2.default(this.player, {
					drag: true
				});
	
				this.markerShadow = new _Marker2.default(this.player, {
					className: 'shadow'
				});
				this.markerShadow.element.hide();
	
				// Played ranges
				this.playedRanges = (0, _jquery2.default)('<div />').addClass('time-played');
	
				// Buffered ranges
				this.bufferedRanges = new _BufferedRanges2.default(this.player).element;
	
				this.line = (0, _jquery2.default)('<div />').addClass('timeline').append(this.marker.element).append(this.markerShadow.element).append(this.playedRanges).append(this.bufferedRanges).on({
					mousemove: function mousemove(e) {
						if (_this2.marker.drag) return;
	
						var p = _this2.getPosition(e.pageX);
						if (p > 0 && p < 1) {
							_this2.markerShadow.element.show().css('left', p * 100 + '%');
							_this2.markerShadow.markerTime.show().html((0, _utils.secondsToTime)(video.duration * p));
						} else {
							_this2.markerShadow.element.hide();
						}
					},
	
					mouseleave: function mouseleave(e) {
						if (_this2.drag) return;
						_this2.markerShadow.element.hide();
					},
	
					mousedown: function mousedown(e) {},
	
					click: this._onLineClick.bind(this),
	
					touchmove: function touchmove(e) {}
				});
	
				this.element.addClass('timeline-container').append((0, _jquery2.default)('<div />').addClass('timeline-subcontainer').append(this.currentTime.element).append(this.line).append(this.totalTime.element));
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				e.preventDefault();
			}
		}, {
			key: '_onLineClick',
			value: function _onLineClick(e) {
				if (e.which !== 1) return;
				if (this.drag) return;
				var video = this.player.video;
				this.move({ percent: this.getPosition(e.pageX) });
				video.currentTime = video.duration * this.getPosition(e.pageX);
			}
		}, {
			key: 'onSectionsInit',
			value: function onSectionsInit(e) {
				var duration = this.player.video.duration;
				if (isNaN(duration)) {
					return;
				}
				if (this.player.sections) {
					this.updateSectionRanges(this.player.sections.items);
				}
			}
		}, {
			key: 'updateSectionRanges',
			value: function updateSectionRanges(items) {
				if (this.sections == null || this.sections.length === 0) {
					this.sections = this.createSectionRanges(items);
					this.line.append(this.sections);
				} else {
					this.sections.html(this.createSectionRanges(items));
				}
			}
		}, {
			key: 'createSectionRanges',
			value: function createSectionRanges(items) {
				var duration = this.player.video.duration;
				var result = (0, _jquery2.default)('<div />').addClass('leplayer-timeline-sections');
				items.forEach(function (section) {
					var length = section.end - section.begin;
					var item = (0, _jquery2.default)('<div />').addClass('leplayer-timeline-section').css({
						width: length / duration * 100 + '%',
						left: section.begin / duration * 100 + '%'
					});
					result.append(item);
				});
				return result;
			}
		}, {
			key: 'getPosition',
			value: function getPosition(x) {
				return (x - this.line.offset().left) / this.line.width();
			}
	
			/**
	   * Move marker on timeline on percent from argument, not from video.currentTime
	   * @param {Number} percent The percent which you want to move marker on timeline
	   */
	
		}, {
			key: 'move',
			value: function move(_ref) {
				var percent = _ref.percent,
				    currentTime = _ref.currentTime;
	
				if (currentTime === undefined) {
					currentTime = this.player.video.duration * percent;
				}
	
				if (isNaN(currentTime)) return;
				percent = percent * 100;
				this.marker.element.css('left', percent + '%');
				this.playedRanges.css('width', percent + '%');
				this.currentTime.text = (0, _utils.secondsToTime)(currentTime);
			}
		}, {
			key: 'updateLabels',
			value: function updateLabels() {
				var video = this.player.video;
				this.totalTime.text = (0, _utils.secondsToTime)(0, Math.floor(video.duration / 3600) > 0);
				var width = this.totalTime.element.width();
	
				this.totalTime.text = (0, _utils.secondsToTime)(video.duration);
				this.currentTime.text = (0, _utils.secondsToTime)(video.currentTime || 0);
				this.currentTime.element.css({
					width: width
				});
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e) {
				this.updateLabels();
				if (this.player.sections) {
					this.updateSectionRanges(this.player.sections.items);
				}
			}
		}, {
			key: '_initWatchBuffer',
			value: function _initWatchBuffer() {
				var _this3 = this;
	
				clearInterval(this.watchBufferInterval);
				var video = this.player.video;
				var updateProgressBar = function updateProgressBar() {
					var END = 1;
					var START = 0;
					var result = (0, _jquery2.default)('');
					video.loaded.forEach(function (item) {
						var domItem = (0, _jquery2.default)('<div />').addClass('time-buffered');
						domItem.css({
							left: item[START] * 100 + '%',
							width: (item[END] - item[START]) * 100 + '%'
						});
						result = result.add(domItem);
					});
					_this3.buffered.html(result);
					if (video.loaded.length && 1 - video.loadedSize <= 0.05) {
						clearInterval(_this3.watchBufferInterval);
					}
				};
				this.watchBufferInterval = setInterval(updateProgressBar, 500);
			}
	
			/**
	   * On durationchange event handler
	   */
	
		}, {
			key: '_onDurationChange',
			value: function _onDurationChange() {
				this.updateLabels();
				if (this.player.sections) {
					this.updateSectionRanges(this.player.sections.items);
				}
			}
		}]);
	
		return TimelineControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('TimelineControl', TimelineControl);
	_Control3.default.registerControl('timeline', TimelineControl);
	exports.default = TimelineControl;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ControlText.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class ControlText
	 * @exnteds Control
	 */
	var ControlText = function (_Control) {
		_inherits(ControlText, _Control);
	
		function ControlText(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, ControlText);
	
			options = _jquery2.default.extend({}, {
				className: ''
			}, options);
			return _possibleConstructorReturn(this, (ControlText.__proto__ || Object.getPrototypeOf(ControlText)).call(this, player, options));
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(ControlText, [{
			key: 'createElement',
			value: function createElement() {
				_get(ControlText.prototype.__proto__ || Object.getPrototypeOf(ControlText.prototype), 'createElement', this).call(this);
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-text ' + this.options.className;
			}
	
			/**
	   * Setter of text field
	   * @public
	   * @param {String} value
	   */
	
		}, {
			key: 'text',
			set: function set(value) {
				this._text = value;
				this.element.html(value);
			},
			get: function get() {
				return this._text;
			}
		}]);
	
		return ControlText;
	}(_Control3.default);
	
	_Component2.default.registerComponent('ControlText', ControlText);
	_Control3.default.registerControl('text', ControlText);
	exports.default = ControlText;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file BufferedRanges.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(7);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class BufferedRanges
	 * @extends Control
	 */
	
	var BufferedRanges = function (_Component) {
		_inherits(BufferedRanges, _Component);
	
		function BufferedRanges(player, options) {
			_classCallCheck(this, BufferedRanges);
	
			var _this = _possibleConstructorReturn(this, (BufferedRanges.__proto__ || Object.getPrototypeOf(BufferedRanges)).call(this, player, options));
	
			_this.player.on('progress', _this.update.bind(_this));
			_this.player.on('seeked', _this.update.bind(_this));
			_this.player.on('loadstart', _this.update.bind(_this));
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(BufferedRanges, [{
			key: 'createElement',
			value: function createElement() {
				this.range = (0, _utils.createEl)('div', {
					className: 'leplayer-timeline-buffered__range'
				});
	
				return this.element = (0, _utils.createEl)('div', {
					className: 'leplayer-timeline-buffered'
				}).append(this.range);
			}
		}, {
			key: 'update',
			value: function update() {
				var buffered = this.player.video.buffered;
				var duration = this.player.video.duration;
				if (buffered == null) return;
	
				var end = 0;
				if (buffered.length > 0) {
					end = buffered.end(buffered.length - 1);
				}
	
				var width = 0;
				if (duration > 0) {
					width = (0, _utils.percentify)(end, duration) * 100 + '%';
				}
				this.range.css({ width: width });
			}
		}]);
	
		return BufferedRanges;
	}(_Component3.default);
	
	_Component3.default.registerComponent('BufferedRanges', BufferedRanges);
	exports.default = BufferedRanges;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Marker = function (_Component) {
		_inherits(Marker, _Component);
	
		function Marker(player, options) {
			_classCallCheck(this, Marker);
	
			options = _jquery2.default.extend({}, {
				drag: false,
				className: ''
			}, options);
	
			var _this = _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).call(this, player, options));
	
			_this.element.on('mousedown', _this._onMousedown.bind(_this));
	
			(0, _jquery2.default)(document).on({
	
				mousemove: function mousemove(e) {
					if (!_this.drag) return;
					_this.element.trigger('leplayer_mousemove', { x: e.pageX });
				},
	
				mouseup: function mouseup(e) {
					if (!_this.drag) return;
					_this.drag = false;
					_this.markerTime.hide();
					_this.element.trigger('leplayer_mouseup', { x: e.pageX });
				}
			});
			return _this;
		}
	
		_createClass(Marker, [{
			key: '_onMousedown',
			value: function _onMousedown(e) {
				if (e.which !== 1) return;
				e.preventDefault();
				if (this.options.drag) {
					this.drag = true;
				}
				this.element.trigger('leplayer_mousedown');
			}
		}, {
			key: 'createElement',
			value: function createElement() {
				// Marker of current time on timeline
				this.markerTime = (0, _jquery2.default)('<div />').addClass('time').hide();
	
				return this.element = (0, _jquery2.default)('<div />').addClass('time-marker ' + this.options.className).append(this.markerTime);
			}
		}, {
			key: 'drag',
			set: function set(value) {
				this._drag = value;
				this.element.toggleClass('time-marker--drag', value);
			},
			get: function get() {
				return this._drag;
			}
		}]);
	
		return Marker;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Marker', Marker);
	exports.default = Marker;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SectionControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlCheckbox2 = __webpack_require__(26);
	
	var _ControlCheckbox3 = _interopRequireDefault(_ControlCheckbox2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class SectionControl
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {Boolean} [options.checked=true]
	 * @extends ControlCheckbox
	 */
	var SectionControl = function (_ControlCheckbox) {
		_inherits(SectionControl, _ControlCheckbox);
	
		function SectionControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, SectionControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'list-ul',
				className: 'section',
				name: 'section',
				title: 'Показать/скрыть секции',
				disable: true
			}, options);
	
			var _this = _possibleConstructorReturn(this, (SectionControl.__proto__ || Object.getPrototypeOf(SectionControl)).call(this, player, options));
	
			_this.player.on('sectionsinit', _this._onSectionsInit.bind(_this));
			return _this;
		}
	
		_createClass(SectionControl, [{
			key: 'onChecked',
			value: function onChecked(e, data) {
				_get(SectionControl.prototype.__proto__ || Object.getPrototypeOf(SectionControl.prototype), 'onChecked', this).call(this, e);
				this.player.trigger('sectionstoggle', {
					checked: data.checked,
					view: this.player.view
				});
			}
		}, {
			key: '_onSectionsInit',
			value: function _onSectionsInit(e) {
				this.options.disable = this.disable = false;
				this.checked = true;
			}
		}]);
	
		return SectionControl;
	}(_ControlCheckbox3.default);
	
	_Component2.default.registerComponent('SectionControl', SectionControl);
	_Control2.default.registerControl('section', SectionControl);
	exports.default = SectionControl;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file control-checkbox.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {boolean} [options.checked=false]
	 * @class ControlCheckbox Toggable control
	 */
	var ControlCheckbox = function (_Control) {
		_inherits(ControlCheckbox, _Control);
	
		function ControlCheckbox(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, ControlCheckbox);
	
			var _this = _possibleConstructorReturn(this, (ControlCheckbox.__proto__ || Object.getPrototypeOf(ControlCheckbox)).call(this, player, options));
	
			_this.checked = _this.options.checked || false;
			_this.element.on('leplayer_checked', _this.onChecked.bind(_this));
			return _this;
		}
	
		/**
	  * Setter for checked property
	  * @public
	  * @param {boolean} val
	  */
	
	
		_createClass(ControlCheckbox, [{
			key: 'onClick',
	
	
			/**
	   * @override
	   */
			value: function onClick(e) {
				_get(ControlCheckbox.prototype.__proto__ || Object.getPrototypeOf(ControlCheckbox.prototype), 'onClick', this).call(this, e);
				this.checked = !this.checked;
			}
	
			/**
	   * On checked event handler
	   *
	   * @param {Event} e
	   * @param {Object} data
	   */
	
		}, {
			key: 'onChecked',
			value: function onChecked(e, data) {}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-checkbox ' + _get(ControlCheckbox.prototype.__proto__ || Object.getPrototypeOf(ControlCheckbox.prototype), 'buildCSSClass', this).call(this);
			}
		}, {
			key: 'checked',
			set: function set(val) {
				if (this.disable) {
					return;
				}
				val = !!val;
				this._checked = val;
				this.element.toggleClass('control-checkbox--checked', val);
				this.element.trigger('leplayer_checked', { checked: val });
			}
	
			/**
	   * Getter for checked propery
	   * @public
	   * @return {boolean}
	   */
			,
			get: function get() {
				return this._checked;
			}
		}]);
	
		return ControlCheckbox;
	}(_Control3.default);
	
	_Component2.default.registerComponent('ControlCheckbox', ControlCheckbox);
	_Control3.default.registerControl('checkbox', ControlCheckbox);
	exports.default = ControlCheckbox;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file FullscreenControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class FullscreenControl
	 * @extends Control
	 */
	var FullscreenControl = function (_Control) {
		_inherits(FullscreenControl, _Control);
	
		function FullscreenControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, FullscreenControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'arrows-alt',
				className: 'fullscreen',
				title: 'Развернуть/свернуть на полный экран',
				name: 'fullscreen'
			}, options);
			return _possibleConstructorReturn(this, (FullscreenControl.__proto__ || Object.getPrototypeOf(FullscreenControl)).call(this, player, options));
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(FullscreenControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(FullscreenControl.prototype.__proto__ || Object.getPrototypeOf(FullscreenControl.prototype), 'onClick', this).call(this, e);
				this.player.toggleFullscreen();
			}
		}]);
	
		return FullscreenControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('FullscreenControl', FullscreenControl);
	_Control3.default.registerControl('fullscreen', FullscreenControl);
	exports.default = FullscreenControl;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file RateControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _ControlText = __webpack_require__(22);
	
	var _ControlText2 = _interopRequireDefault(_ControlText);
	
	var _cookie = __webpack_require__(15);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class RateControl
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @property {Control} downControl  Down rate control
	 * @property {Control} upControl  Up rate control
	 * @property {ControlText} currentRate Control of cuurent rate
	 * @extends Control
	 */
	var RateControl = function (_Control) {
		_inherits(RateControl, _Control);
	
		function RateControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, RateControl);
	
			options = _jquery2.default.extend({}, {
				className: 'control-container'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (RateControl.__proto__ || Object.getPrototypeOf(RateControl)).call(this, player, options));
	
			_this.player.on('ratechange', function () {
				_this.update();
			});
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(RateControl, [{
			key: 'createElement',
			value: function createElement() {
				_get(RateControl.prototype.__proto__ || Object.getPrototypeOf(RateControl.prototype), 'createElement', this).call(this);
				var video = this.player.video;
	
				this.downControl = new _Control3.default(this.player, {
					className: 'rate-down',
					name: 'rate-down',
					iconName: 'backward',
					collection: this.options.collection,
					title: 'Уменьшить скорость проигрывания',
					onClick: function onClick(e) {
						video.decreaseRate();
					}
				});
	
				this.upControl = new _Control3.default(this.player, {
					className: 'rate-up',
					name: 'rate-up',
					iconName: 'forward',
					collection: this.options.collection,
					title: 'Увеличить скорость проигрывания',
					onClick: function onClick(e) {
						video.increaseRate();
					}
				});
	
				this.currentRate = new _ControlText2.default(this.player, {
					className: 'rate-current',
					onClick: function onClick(e) {
						video.rate = this.player.options.rate.default;
					}
				});
	
				this.element.append(this.downControl.element).append(this.currentRate.element).append(this.upControl.element);
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return this.options.className;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited() {
				this.update();
			}
	
			/**
	   *
	   */
	
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				e.preventDefault();
			}
		}, {
			key: 'update',
			value: function update(value) {
				var video = this.player.video;
	
				value = value || video.rate;
				value = parseFloat(value).toFixed(2).toString().replace(/,/g, '.');
				this.currentRate.text = '×' + value;
	
				if (this.disable) return;
	
				if (video.rate <= video.rateMin) {
					this.downControl.disable = true;
				} else {
					this.downControl.disable = false;
				}
	
				if (video.rate >= video.rateMax) {
					this.upControl.disable = true;
				} else {
					this.upControl.disable = false;
				}
			}
		}, {
			key: 'init',
			value: function init() {
				var rate = _cookie2.default.get('rate', this.player.options.rate.default);
				this.show(rate);
			}
		}, {
			key: 'disable',
			set: function set(value) {
				this._disable = value;
				this.downControl.disable = value;
				this.upControl.disable = value;
			}
		}]);
	
		return RateControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('RateControl', RateControl);
	_Control3.default.registerControl('rate', RateControl);
	exports.default = RateControl;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file BackwardControl.js
	 *
	 * Backward control
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options={}] Options
	 * @class BackwardControl
	 * @extends Control
	 */
	var BackwardControl = function (_Control) {
		_inherits(BackwardControl, _Control);
	
		function BackwardControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, BackwardControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'undo',
				className: 'backward',
				name: 'backward',
				title: '\u041E\u0442\u043C\u043E\u0442\u0430\u0442\u044C \u043D\u0430\u0437\u0430\u0434 \u043D\u0430 ' + player.options.playback.step.medium + ' \u0441\u0435\u043A\u0443\u043D\u0434',
				disable: true
			}, options);
	
			var _this = _possibleConstructorReturn(this, (BackwardControl.__proto__ || Object.getPrototypeOf(BackwardControl)).call(this, player, options));
	
			_this.player.on('firstplay', function () {
				return _this.disable = false;
			});
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(BackwardControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(BackwardControl.prototype.__proto__ || Object.getPrototypeOf(BackwardControl.prototype), 'onClick', this).call(this, e);
				this.player.video.currentTime -= this.player.options.playback.step.medium;
				this.player.splashIcon.show('undo');
			}
		}]);
	
		return BackwardControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('BackwardControl', BackwardControl);
	_Control3.default.registerControl('backward', BackwardControl);
	exports.default = BackwardControl;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SourceControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlContainer2 = __webpack_require__(31);
	
	var _ControlContainer3 = _interopRequireDefault(_ControlContainer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @class SourceControl
	 * @param {Player} player Main player
	 * @extends ControlConainer
	 */
	var SourceControl = function (_ControlContainer) {
		_inherits(SourceControl, _ControlContainer);
	
		// TODO: Делать disable/enable после options init
		function SourceControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, SourceControl);
	
			options = _jquery2.default.extend({}, {
				name: 'source',
				iconName: 'bullseye',
				title: 'Качество',
				className: 'source-control',
				disable: true
			}, options);
	
			var _this = _possibleConstructorReturn(this, (SourceControl.__proto__ || Object.getPrototypeOf(SourceControl)).call(this, player, options));
	
			_this.player.on('playing', _this.update.bind(_this));
			_this.player.on('qualitychange', _this.update.bind(_this));
			return _this;
		}
	
		_createClass(SourceControl, [{
			key: 'onItemClick',
			value: function onItemClick(e) {
				e.preventDefault();
	
				var item = (0, _jquery2.default)(e.target);
				var video = this.player.video;
				video.playbackQuality = item.data('name');
	
				this.dropdownContent.hide();
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {
				this.update();
			}
		}, {
			key: 'getData',
			value: function getData() {
				return this.player.video.getAvailableQualityLevels();
			}
		}, {
			key: 'getCurrentValue',
			value: function getCurrentValue() {
				return this.player.video.playbackQuality;
			}
		}]);
	
		return SourceControl;
	}(_ControlContainer3.default);
	
	_Component2.default.registerComponent('SourceControl', SourceControl);
	_Control2.default.registerControl('source', SourceControl);
	exports.default = SourceControl;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ControlContainer.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlDropdown2 = __webpack_require__(20);
	
	var _ControlDropdown3 = _interopRequireDefault(_ControlDropdown2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class ControlContainer
	 * @extends ControlDropdown
	 */
	var ControlContainer = function (_ControlDropdown) {
		_inherits(ControlContainer, _ControlDropdown);
	
		function ControlContainer(player, options) {
			_classCallCheck(this, ControlContainer);
	
			var _this = _possibleConstructorReturn(this, (ControlContainer.__proto__ || Object.getPrototypeOf(ControlContainer)).call(this, player, options));
	
			_this._active = null;
			/**
	   * List of items
	   *
	   * @public
	   * @type {Array}
	   */
			_this.list = [];
			return _this;
		}
	
		/**
	  * Get item of container by index
	  *
	  * @public
	  * @param {number} index
	  */
	
	
		_createClass(ControlContainer, [{
			key: 'getByIndex',
			value: function getByIndex(index) {
				return this.list[index];
			}
	
			/**
	   * Set item active by index
	   *
	   * @public
	   * @param {number} index
	   */
	
		}, {
			key: 'setActiveByIndex',
			value: function setActiveByIndex(index) {
				if (this.active) {
					this.active.removeClass('control-container__item--active');
				}
				this._active = this.list[index].addClass('control-container__item--active');
				return this._active;
			}
	
			/**
	   * Getter of active field
	   *
	   * @public
	   * @type {jQuery}
	   */
	
		}, {
			key: 'addItem',
	
	
			/**
	   * @public
	   * @param {String|jQuery} Content of item
	   * @param {Object} Data of item
	   */
			value: function addItem(content, data) {
				var item = (0, _jquery2.default)('<div />').addClass('control-container__item').data(data).attr('title', data.tooltip).on('click', this.onItemClick.bind(this)).append(content);
	
				this.list = this.list.concat(item);
	
				this.dropdownContent.append(item);
	
				return item;
			}
	
			/**
	   * On item click event handler
	   * @public
	   * @param {Event} e
	   */
	
		}, {
			key: 'onItemClick',
			value: function onItemClick(e) {
				this.active = e.currentTarget;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return _get(ControlContainer.prototype.__proto__ || Object.getPrototypeOf(ControlContainer.prototype), 'buildCSSClass', this).call(this) + ' control-container';
			}
		}, {
			key: 'update',
			value: function update() {
				var _this2 = this;
	
				var data = this.getData();
				var currentValue = this.getCurrentValue();
	
				if (data == null || data.length === 0) {
					this.disable = true;
					return;
				}
	
				this.list = [];
				this.dropdownContent.empty();
	
				data.forEach(function (item) {
					var elem = _this2.addItem(item.title, item);
					if (currentValue && currentValue.name === item.name) {
	
						_this2.active = elem;
					}
				});
				this.disable = false;
			}
		}, {
			key: 'active',
			get: function get() {
				var _this3 = this;
	
				if (this._active && this._active.length > 0) {
					return this._active;
				}
				this.list.forEach(function (item) {
					if (item.hasClass('control-container__item--active')) {
						_this3._active = item;
					}
				});
				return this._active;
			}
	
			/**
	   * Setter of active field
	   *
	   * @public
	   * @param {jQuery} Item of container
	   */
			,
			set: function set(element) {
				if (this.active) {
					this.active.removeClass('control-container__item--active');
				}
				if (element) {
					(0, _jquery2.default)(element).addClass('control-container__item--active');
				}
				this._active = element;
				return this._active;
			}
		}]);
	
		return ControlContainer;
	}(_ControlDropdown3.default);
	
	_Component2.default.registerComponent('ControlContainer', ControlContainer);
	_Control2.default.registerControl('container', ControlContainer);
	exports.default = ControlContainer;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SubtitleControl.js
	 *
	 * Subtitle control
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlContainer2 = __webpack_require__(31);
	
	var _ControlContainer3 = _interopRequireDefault(_ControlContainer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class SubtitleControl
	 * @extends ControlContainer
	 */
	var SubtitleControl = function (_ControlContainer) {
		_inherits(SubtitleControl, _ControlContainer);
	
		function SubtitleControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, SubtitleControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'commenting-o',
				title: 'Субтитры',
				name: 'subtitle',
				className: 'subtitle-control',
				disable: true
			}, options);
	
			var _this = _possibleConstructorReturn(this, (SubtitleControl.__proto__ || Object.getPrototypeOf(SubtitleControl)).call(this, player, options));
	
			_this.player.on('playing', _this.update.bind(_this));
			_this.player.on('trackschange', _this.update.bind(_this));
			return _this;
		}
	
		_createClass(SubtitleControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(SubtitleControl.prototype.__proto__ || Object.getPrototypeOf(SubtitleControl.prototype), 'onClick', this).call(this, e);
				var video = this.player.video;
				video.track = null;
			}
		}, {
			key: 'onItemClick',
			value: function onItemClick(e) {
				e.preventDefault();
				e.stopPropagation();
	
				var item = (0, _jquery2.default)(e.target);
				var video = this.player.video;
				if (item.data()) {
					video.track = item.data();
				}
	
				this.dropdownContent.hide();
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {
				this.update();
			}
		}, {
			key: 'update',
			value: function update() {
				_get(SubtitleControl.prototype.__proto__ || Object.getPrototypeOf(SubtitleControl.prototype), 'update', this).call(this);
				var hasValue = !!(this.getCurrentValue() && this.getCurrentValue().name != null);
				this.element.toggleClass('control-checkbox--checked', hasValue);
			}
		}, {
			key: 'getData',
			value: function getData() {
				return this.player.video.subtitles;
			}
		}, {
			key: 'getCurrentValue',
			value: function getCurrentValue() {
				return this.player.video.track;
			}
		}]);
	
		return SubtitleControl;
	}(_ControlContainer3.default);
	
	_Component2.default.registerComponent('SubtitleControl', SubtitleControl);
	_Control2.default.registerControl('subtitle', SubtitleControl);
	exports.default = SubtitleControl;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file DownloadControl.js
	 *
	 * Download control
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Icon = __webpack_require__(5);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @class DownloadControl
	 * @exnteds Control
	 */
	var DownloadControl = function (_Control) {
		_inherits(DownloadControl, _Control);
	
		function DownloadControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, DownloadControl);
	
			options = _jquery2.default.extend({
				title: 'Скачать видео',
				className: 'download',
				name: 'download'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (DownloadControl.__proto__ || Object.getPrototypeOf(DownloadControl)).call(this, player, options));
	
			_this.player.on('loadstart', _this.onLoadStart.bind(_this));
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(DownloadControl, [{
			key: 'createElement',
			value: function createElement() {
				// TODO: Доопределить этот метод, а не переопредлеить
				this.element = (0, _jquery2.default)('<a />').attr({
					href: '',
					target: '_blank',
					download: true,
					title: this.options.title
				}).addClass(this.buildCSSClass()).append(new _Icon2.default(this.player, { iconName: 'download' }).element);
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return '' + _get(DownloadControl.prototype.__proto__ || Object.getPrototypeOf(DownloadControl.prototype), 'buildCSSClass', this).call(this);
			}
	
			/**
	   * Setter of link field
	   * @public
	   * @param {String} value Path for video
	   */
	
		}, {
			key: 'onLoadStart',
			value: function onLoadStart(e, data) {
				this.link = this.player.video.src.url;
			}
		}, {
			key: 'link',
			set: function set(value) {
				var parser = document.createElement('a');
				parser.href = value;
				var fileName = parser.pathname.split('/');
				fileName = fileName[fileName.length - 1];
				this.element.attr({
					href: value,
					download: fileName
				});
			}
		}]);
	
		return DownloadControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('DownloadControl', DownloadControl);
	_Control3.default.registerControl('download', DownloadControl);
	exports.default = DownloadControl;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';
	/**
	 * @file KeybindingInfoControl.js
	 *
	 * Info control
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control = __webpack_require__(3);
	
	var _Control2 = _interopRequireDefault(_Control);
	
	var _ControlDropdown2 = __webpack_require__(20);
	
	var _ControlDropdown3 = _interopRequireDefault(_ControlDropdown2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class KeyBindingInfoControl
	 * @extends ControlDropdown
	 */
	var KeyBindingInfoControl = function (_ControlDropdown) {
		_inherits(KeyBindingInfoControl, _ControlDropdown);
	
		function KeyBindingInfoControl(player, options) {
			_classCallCheck(this, KeyBindingInfoControl);
	
			options = _jquery2.default.extend({}, {
				iconName: 'info',
				title: 'Инфо',
				className: 'info-control',
				name: 'info'
			}, options);
			return _possibleConstructorReturn(this, (KeyBindingInfoControl.__proto__ || Object.getPrototypeOf(KeyBindingInfoControl)).call(this, player, options));
		}
	
		_createClass(KeyBindingInfoControl, [{
			key: 'createElement',
			value: function createElement() {
				_get(KeyBindingInfoControl.prototype.__proto__ || Object.getPrototypeOf(KeyBindingInfoControl.prototype), 'createElement', this).call(this);
				var keyBinding = this.player.options.keyBinding;
				var infoContent = '';
				for (var _key in keyBinding) {
					if (!keyBinding.hasOwnProperty(_key)) continue;
	
					var hotkey = keyBinding[_key];
					var item = '';
					var keyString = '';
	
					hotkey.info.forEach(function (key, index) {
						if (index !== 0) {
							keyString += ' + ';
						}
						keyString += '<kbd class="leplayer-key">' + key + '</kbd>';
					});
	
					item = '\n\t\t\t\t<div class="info-control__item">\n\t\t\t\t\t' + keyString + ' - ' + hotkey.description + '\n\t\t\t\t</div>\n\t\t\t';
	
					infoContent += item;
				}
				this.dropdownContent.addClass('info-control__content').append(infoContent);
			}
		}]);
	
		return KeyBindingInfoControl;
	}(_ControlDropdown3.default);
	
	_Component2.default.registerComponent('KeyBindingInfoControl', KeyBindingInfoControl);
	_Control2.default.registerControl('keybinding info', KeyBindingInfoControl);
	exports.default = KeyBindingInfoControl;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file TimeInfoControl.js
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Control2 = __webpack_require__(3);
	
	var _Control3 = _interopRequireDefault(_Control2);
	
	var _ControlText = __webpack_require__(22);
	
	var _ControlText2 = _interopRequireDefault(_ControlText);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @param {Player} player Main player
	 * @class TimeInfoControl
	 * @property {ControlText} currentTime Current time's text
	 * @property {ControlText} totalTime Total time
	 * @property {jQuery} line
	 * @extends Control
	 */
	var TimeInfoControl = function (_Control) {
		_inherits(TimeInfoControl, _Control);
	
		function TimeInfoControl(player) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, TimeInfoControl);
	
			options = _jquery2.default.extend({}, {
				className: 'timeline timeline-container',
				name: 'time-info'
			}, options);
	
			var _this = _possibleConstructorReturn(this, (TimeInfoControl.__proto__ || Object.getPrototypeOf(TimeInfoControl)).call(this, player, options));
	
			_this.player.on('timeupdate', function (e, data) {
				var time = _this.player.currentTime;
				_this._currentTimeControl.text = (0, _utils.secondsToTime)(time);
			});
	
			_this.player.on('durationchange', function (e) {
				_this._totalTimeControl.text = (0, _utils.secondsToTime)(_this.player.video.duration);
			});
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(TimeInfoControl, [{
			key: 'createElement',
			value: function createElement() {
				var duration = this.player.video.duration;
				var currentTime = this.player.video.currentTime;
				this._currentTimeControl = new _ControlText2.default(this.player, { className: 'control-time__current' });
				this._totalTimeControl = new _ControlText2.default(this.player, { className: 'control-time__total' });
	
				if (isNaN(duration) || duration == null) {
					this._totalTimeControl.text = '';
				} else {
					this._totalTimeControl.text = (0, _utils.secondsToTime)(duration);
				}
	
				if (currentTime == null) {
					this._currentTimeControl.text = (0, _utils.secondsToTime)(0);
				} else {
					this._currentTimeControl.text = (0, _utils.secondsToTime)(currentTime);
				}
	
				this.element = (0, _jquery2.default)('<div/>').addClass('control-time');
				this.element.append(this._currentTimeControl.element).append(this._totalTimeControl.element);
	
				return this.element;
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e) {
				var video = this.player.video;
				this._currentTimeControl.text = (0, _utils.secondsToTime)(video.currentTime);
				this._totalTimeControl.text = (0, _utils.secondsToTime)(video.duration);
			}
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				e.preventDefault();
			}
		}]);
	
		return TimeInfoControl;
	}(_Control3.default);
	
	_Component2.default.registerComponent('TimeInfoControl', TimeInfoControl);
	_Control3.default.registerControl('timeinfo', TimeInfoControl);
	exports.default = TimeInfoControl;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _cookie = __webpack_require__(15);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _Component = __webpack_require__(4);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _browser = __webpack_require__(16);
	
	var _Entity2 = __webpack_require__(37);
	
	var _Entity3 = _interopRequireDefault(_Entity2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Html5 = function (_Entity) {
		_inherits(Html5, _Entity);
	
		function Html5(player, options) {
			_classCallCheck(this, Html5);
	
			var _this = _possibleConstructorReturn(this, (Html5.__proto__ || Object.getPrototypeOf(Html5)).call(this, player, options));
	
			_this.media = _this.element[0];
	
			_this.subtitles = [];
			_this.bufferRanges = [];
	
			_this.src = _this.player.options.src;
	
			if (_this.player.options.poster != null) {
				_this.poster = _this.player.options.poster;
			}
	
			if (_this.getAvailableQualityLevels().length > 0) {
				_this._playbackQuality = _this.getAvailableQualityLevels()[0];
			}
	
			_this.element.on('loadstart', _this.onLoadStart.bind(_this));
			_this.element.on('timeupdate', _this.onTimeUpdate.bind(_this));
			_this.element.on('durationchange', _this.onDurationChange.bind(_this));
			_this.element.on('progress', _this.onProgress.bind(_this));
			_this.element.on('seeking', _this.onSeeking.bind(_this));
			_this.element.on('seeked', _this.onSeeked.bind(_this));
			_this.element.on('volumechange', _this.onVolumeChange.bind(_this));
			_this.element.on('click', _this.onClick.bind(_this));
			_this.element.on('dblclick', _this.onDblclick.bind(_this));
			_this.element.on('play', _this.onPlay.bind(_this));
			_this.element.on('pause', _this.onPause.bind(_this));
			_this.element.on('ratechange', _this.onRateChange.bind(_this));
			_this.element.on('ended', _this.onEnded.bind(_this));
			_this.element.on('canplaythrough', _this.onCanplayThrough.bind(_this));
			_this.element.on('waiting', _this.onWaiting.bind(_this));
			_this.element.on('error', _this.onError.bind(_this));
			return _this;
		}
	
		_createClass(Html5, [{
			key: 'onLoadStart',
			value: function onLoadStart(e) {
				this.trigger('loadstart');
			}
		}, {
			key: 'onTimeUpdate',
			value: function onTimeUpdate(e) {
				this.trigger('timeupdate');
			}
		}, {
			key: 'onDurationChange',
			value: function onDurationChange(e) {
				this.trigger('durationchange');
			}
		}, {
			key: 'onProgress',
			value: function onProgress(e) {
				this.trigger('progress');
			}
		}, {
			key: 'onSeeking',
			value: function onSeeking(e) {
				this.trigger('seeking');
			}
		}, {
			key: 'onSeeked',
			value: function onSeeked(e) {
				this.trigger('seeked');
			}
		}, {
			key: 'onVolumeChange',
			value: function onVolumeChange(e) {
				this.trigger('volumechange');
			}
		}, {
			key: 'onClick',
			value: function onClick() {
				this.trigger('click');
			}
		}, {
			key: 'onDblclick',
			value: function onDblclick() {
				this.trigger('dblclick');
			}
		}, {
			key: 'onPlay',
			value: function onPlay() {
				this.trigger('play');
			}
		}, {
			key: 'onPause',
			value: function onPause() {
				this.trigger('pause');
			}
		}, {
			key: 'onPlaying',
			value: function onPlaying() {
				this.trigger('playing');
			}
		}, {
			key: 'onRateChange',
			value: function onRateChange() {
				this.trigger('ratechange');
			}
		}, {
			key: 'onEnded',
			value: function onEnded() {
				this.trigger('ended');
			}
		}, {
			key: 'onCanplayThrough',
			value: function onCanplayThrough() {
				this.trigger('canplaythrough');
			}
		}, {
			key: 'onWaiting',
			value: function onWaiting() {
				this.trigger('waiting');
			}
		}, {
			key: 'onError',
			value: function onError(e) {
				this.trigger('error', { code: e.target.error.code });
			}
	
			/* TODO */
	
		}, {
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;
	
				this.element = this.options.ctx;
				[
	
				// Remove controls because we dont not support native controls yet
				'controls', 'poster',
	
				// It is unnecessary attrs, this functionality solve CSS
				'height', 'width'].forEach(function (item) {
					_this2.element.removeAttr(item);
				});
	
				// Set attrs from options
				['preload', 'autoplay', 'loop', 'muted'].forEach(function (item) {
					if (_this2.player.options[item]) {
						_this2.element.attr(item, _this2.player.options[item]);
						_this2.element.prop(item, _this2.player.options[item]);
					}
				});
	
				this.element.find('source[data-quality]').each(function (i, item) {
					(0, _jquery2.default)(item).remove();
				});
	
				return this.element;
			}
		}, {
			key: 'getAvailableQualityLevels',
			value: function getAvailableQualityLevels() {
				return this.player.options.sources.map(function (item) {
					return _extends({
						name: item.title
					}, item);
				});
			}
		}, {
			key: 'init',
			value: function init() {
				var _this3 = this;
	
				_get(Html5.prototype.__proto__ || Object.getPrototypeOf(Html5.prototype), 'init', this).call(this);
				var dfd = _jquery2.default.Deferred();
				this._initSubtitles();
				this._initVideo().done(function () {
					_this3._initRate();
					_this3._initVolume();
					dfd.resolve();
				});
				return dfd.promise();
			}
		}, {
			key: 'supportsFullScreen',
			value: function supportsFullScreen() {
				if (typeof this.media.webkitEnterFullScreen === 'function') {
					var userAgent = window.navigator && window.navigator.userAgent || '';
	
					// Seems to be broken in Chromium/Chrome && Safari in Leopard
					if (/Android/.test(userAgent) || !/Chrome|Mac OS X 10.5/.test(userAgent)) {
						return true;
					}
				}
				return false;
			}
		}, {
			key: 'enterFullscreen',
			value: function enterFullscreen() {
				var _this4 = this;
	
				var video = this.media;
				if (video.paused && video.networkState <= video.HAVE_METADATA) {
					// attempt to prime the video element for programmatic access
					// this isn't necessary on the desktop but shouldn't hurt
					this.play();
	
					// playing and pausing synchronously during the transition to fullscreen
					// can get iOS ~6.1 devices into a play/pause loop
					setTimeout(function () {
						_this4.pause();
						video.webkitEnterFullScreen();
					}, 0);
				} else {
					video.webkitEnterFullScreen();
				}
			}
		}, {
			key: 'exitFullscreen',
			value: function exitFullscreen() {
				this.media.webkitExitFullScreen();
			}
		}, {
			key: 'togglePlay',
			value: function togglePlay() {
				if (!this.media.played || this.media.paused) {
					this.play();
				} else {
					this.pause();
				}
			}
		}, {
			key: 'play',
			value: function play() {
				var dfd = _jquery2.default.Deferred();
				var playPromise = this.media.play();
	
				if (playPromise != null) {
					playPromise.then(function () {
						dfd.resolve();
					});
				} else {
					dfd.resolve();
				}
				return dfd.promise();
			}
		}, {
			key: 'pause',
			value: function pause() {
				var dfd = _jquery2.default.Deferred();
				var pausePromise = this.media.pause();
	
				if (pausePromise != null) {
					pausePromise.then(function () {
						dfd.resolve();
					});
				} else {
					dfd.resolve();
				}
				return dfd.promise();
			}
		}, {
			key: 'load',
			value: function load() {
				return this.media.load();
			}
		}, {
			key: '_initSubtitles',
			value: function _initSubtitles() {
				var _self = this;
				this.element.children('track[kind="subtitles"]').each(function () {
					var language = (0, _jquery2.default)(this).attr('srclang');
					var title = (0, _jquery2.default)(this).attr('label');
					var src = (0, _jquery2.default)(this).attr('src');
					if (title.length > 0 && src.length > 0) {
						_self.subtitles.push({
							title: title,
							name: language,
							language: language
						});
					}
				});
			}
		}, {
			key: '_initVideo',
			value: function _initVideo() {
				var _this5 = this;
	
				var dfd = _jquery2.default.Deferred();
				if (this.media.readyState > HTMLMediaElement.HAVE_NOTHING) {
					dfd.resolve();
					this._textTracksHack();
				} else {
					(0, _jquery2.default)(this.media).one('loadedmetadata', function (e) {
						dfd.resolve();
						_this5._textTracksHack();
					});
				}
				dfd.notify();
				return dfd.promise();
			}
		}, {
			key: '_textTracksHack',
			value: function _textTracksHack() {
	
				// This is generally for Firefox only
				// because it somehow resets track list
				// for video element after DOM manipulation.
	
				if (this.media.textTracks.length === 0 && this.subtitles.length > 0) {
					this.element.children('track[kind="subtitles"]').remove();
					for (var i in this.subtitles) {
						if (this.subtitles.hasOwnProperty(i)) {
							this.element.append((0, _jquery2.default)('<track/>').attr('label', this.subtitles[i].title).attr('src', this.subtitles[i].src).attr('srclang', this.subtitles[i].language).attr('id', this.subtitles[i].language).attr('kind', 'subtitles'));
						}
					}
				}
			}
		}, {
			key: 'currentTime',
			get: function get() {
				return this.media.currentTime;
			},
			set: function set(value) {
				var time = void 0;
				if (value > this.duration) {
					time = this.duration;
				} else if (value < 0) {
					time = 0;
				} else {
					time = value;
				}
	
				this.player.trigger('timeupdateload', { currentTime: time });
	
				this.media.currentTime = time;
			}
		}, {
			key: 'duration',
			get: function get() {
				return this.media.duration;
			}
		}, {
			key: 'height',
			get: function get() {
				return this.media.clientHeight;
			}
		}, {
			key: 'width',
			get: function get() {
				return this.media.clientWidth;
			}
		}, {
			key: 'rate',
			get: function get() {
				return this.media.playbackRate;
			},
			set: function set(value) {
				_set(Html5.prototype.__proto__ || Object.getPrototypeOf(Html5.prototype), 'rate', value, this);
				this.media.playbackRate = value;
			}
		}, {
			key: 'muted',
			set: function set(value) {
				this.media.muted = value;
			},
			get: function get() {
				return this.media.muted;
			}
		}, {
			key: 'rateMax',
			get: function get() {
				var max = this.player.options.rate.max;
				if (_browser.IS_IOS || _browser.IS_ANDROID) {
					max = Html5.MOBILE_MAX_RATE;
				}
				if (_browser.IS_SAFARI) {
					max = Html5.SAFARI_MAX_RATE;
				}
	
				return max;
			}
		}, {
			key: 'rateMin',
			get: function get() {
				var min = this.player.options.rate.min;
	
				if (_browser.IS_IOS || _browser.IS_ANDROID) {
					min = Html5.MOBILE_MIN_RATE;
				}
	
				if (_browser.IS_SAFARI) {
					min = Html5.SAFARI_MIN_RATE;
				}
	
				return min;
			}
		}, {
			key: 'playbackQuality',
			set: function set(name) {
				_set(Html5.prototype.__proto__ || Object.getPrototypeOf(Html5.prototype), 'playbackQuality', name, this);
				var time = this.currentTime;
				var rate = this.rate;
				var stop = this.paused;
	
				this._playbackQuality = this.getAvailableQualityLevels().find(function (item) {
					return item.name === name;
				});
	
				this.src = this._playbackQuality;
				this.playbackRate = rate;
				this.currentTime = time;
	
				if (stop) {
					this.pause();
				} else {
					this.play();
				}
	
				this.trigger('qualitychange', this._playbackQuality);
			},
			get: function get() {
				return this._playbackQuality;
			}
		}, {
			key: 'src',
			set: function set(src) {
				if (src == null) return;
				if (this.src && this.src.url === src.url) return;
	
				this.media.src = src.url;
	
				this._source = src;
			},
			get: function get() {
				return this._source;
			}
		}, {
			key: 'track',
			get: function get() {
				return this._track;
			},
			set: function set(value) {
				[].concat(_toConsumableArray(this.media.textTracks)).forEach(function (item) {
					if (value != null && item.language === value.language) {
						item.mode = 'showing';
					} else {
						item.mode = 'hidden';
					}
				});
				this._track = value;
				this.trigger('trackschange');
			}
		}, {
			key: 'paused',
			get: function get() {
				return this.media.paused;
			}
		}, {
			key: 'volume',
			get: function get() {
				return this.media.volume;
			},
			set: function set(value) {
				_set(Html5.prototype.__proto__ || Object.getPrototypeOf(Html5.prototype), 'volume', value, this);
				var player = this.player;
				if (value > 1) {
					this.media.volume = 1;
				} else if (value < player.options.volume.mutelimit) {
					this.media.volume = 0;
				} else {
					this.media.volume = value;
				}
				this.media.mute = value < player.options.volume.mutelimit;
			}
		}, {
			key: 'buffered',
			get: function get() {
				return this.media.buffered;
			}
	
			/**
	   * @return {TimeRanges}
	   */
	
		}, {
			key: 'seekable',
			get: function get() {
				return this.media.seekable;
			}
	
			/**
	   * @return {TimeRanges}
	   */
	
		}, {
			key: 'played',
			get: function get() {
				return this.media.played;
			}
		}, {
			key: 'playedPercentage',
			get: function get() {
				var result = 0;
				for (var i = 0; i < this.played.length; i++) {
					result += this.played.end(i) - this.played.start(i);
				}
	
				return result / this.duration * 100;
			}
		}, {
			key: 'currentSrc',
			get: function get() {
				return this.media.currentSrc;
			}
		}]);
	
		return Html5;
	}(_Entity3.default);
	
	/**
	 * Min rate for android and ios
	 */
	
	
	Html5.MOBILE_MIN_RATE = 0.5;
	
	/**
	 * Max rate for android and ios
	 */
	Html5.MOBILE_MAX_RATE = 2;
	
	Html5.SAFARI_MIN_RATE = 0.5;
	
	Html5.SAFARI_MAX_RATE = 2;
	
	_Component2.default.registerComponent('Html5', Html5);
	exports.default = Html5;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Component2 = __webpack_require__(4);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _cookie = __webpack_require__(15);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _MediaError = __webpack_require__(17);
	
	var _MediaError2 = _interopRequireDefault(_MediaError);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Entity = function (_Component) {
		_inherits(Entity, _Component);
	
		function Entity(player, options) {
			_classCallCheck(this, Entity);
	
			var _this = _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).call(this, player, options));
	
			_this._triggerStack = [];
			_this._stopListen = false;
	
			if (_this.player.options.src == null) {
				_this.player.error = new _MediaError2.default('Видеофайл не найден.');
			}
	
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(Entity, [{
			key: 'trigger',
			value: function trigger() {
				var _get2;
	
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
	
				if (!this._stopListen) {
					this._triggerStack.push(args);
				}
				(_get2 = _get(Entity.prototype.__proto__ || Object.getPrototypeOf(Entity.prototype), 'trigger', this)).call.apply(_get2, [this].concat(args));
			}
		}, {
			key: 'init',
			value: function init() {
				var _this2 = this;
	
				this._stopListen = true;
				this._triggerStack.forEach(function (args) {
					_this2.trigger.apply(_this2, _toConsumableArray(args));
				});
			}
		}, {
			key: 'createElement',
			value: function createElement() {
				return this.element = (0, _jquery2.default)('<div />');
			}
		}, {
			key: 'increaseRate',
			value: function increaseRate() {
				this.rate += this.player.options.rate.step;
			}
		}, {
			key: 'decreaseRate',
			value: function decreaseRate() {
				this.rate -= this.player.options.rate.step;
			}
		}, {
			key: 'supportsFullScreen',
			value: function supportsFullScreen() {}
		}, {
			key: 'play',
			value: function play() {}
		}, {
			key: 'pause',
			value: function pause() {}
		}, {
			key: 'load',
			value: function load() {}
		}, {
			key: 'togglePlay',
			value: function togglePlay() {
				if (this.paused) {
					this.play();
				} else {
					this.pause();
				}
			}
		}, {
			key: '_initRate',
			value: function _initRate() {
				this.rate = this.defaultRate;
			}
		}, {
			key: '_initVolume',
			value: function _initVolume() {
				this.volume = this.defaultVolume;
			}
		}, {
			key: 'poster',
			set: function set(url) {
				this._poster = url;
				this.trigger('posterchange', { url: url });
			},
			get: function get() {
				return this._poster;
			}
		}, {
			key: 'currentTime',
			get: function get() {
				return;
			},
			set: function set(value) {}
		}, {
			key: 'duration',
			get: function get() {
				return;
			}
		}, {
			key: 'muted',
			set: function set(value) {},
			get: function get() {}
		}, {
			key: 'height',
			get: function get() {
				return this.element.innerHeight();
			}
		}, {
			key: 'width',
			get: function get() {
				return this.element.width();
			}
		}, {
			key: 'rateMax',
			set: function set(value) {
				this._rateMax = value;
			},
			get: function get() {
				return this._rateMax || this.player.options.rate.max;
			}
		}, {
			key: 'rateMin',
			set: function set(value) {
				this._rateMin = value;
			},
			get: function get() {
				return this._rateMin || this.player.options.rate.min;
			}
		}, {
			key: 'rate',
			get: function get() {},
			set: function set(value) {
				if (value > this.rateMax || value < this.rateMin) return;
				_cookie2.default.set('rate', value);
			}
		}, {
			key: 'playbackQuality',
			set: function set(name) {
				var levels = this.getAvailableQualityLevels();
				if (!levels.some(function (obj) {
					return name in obj;
				})) {
					return;
				}
			},
			get: function get() {}
		}, {
			key: 'paused',
			get: function get() {}
		}, {
			key: 'played',
			get: function get() {}
		}, {
			key: 'defaultRate',
			get: function get() {
				return _cookie2.default.get('rate') || this.player.options.rate.default;
			}
		}, {
			key: 'defaultVolume',
			get: function get() {
				return _cookie2.default.get('volume') || this.player.options.volume.default;
			}
		}, {
			key: 'volume',
			set: function set(value) {
				var player = this.player;
				if (value < 1 && value > player.options.volume.mutelimit) {
					_cookie2.default.set('volume', value);
				}
			}
		}, {
			key: 'src',
			set: function set(value) {},
			get: function get() {}
		}]);
	
		return Entity;
	}(_Component3.default);
	
	_Component3.default.registerComponent('Entity', Entity);
	exports.default = Entity;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(39);
	var ES = __webpack_require__(43);
	
	var implementation = __webpack_require__(61);
	var getPolyfill = __webpack_require__(62);
	var shim = __webpack_require__(63);
	
	var slice = Array.prototype.slice;
	
	var polyfill = getPolyfill();
	
	var boundFindShim = function find(array, predicate) { // eslint-disable-line no-unused-vars
		ES.RequireObjectCoercible(array);
		var args = slice.call(arguments, 1);
		return polyfill.apply(array, args);
	};
	
	define(boundFindShim, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});
	
	module.exports = boundFindShim;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var keys = __webpack_require__(40);
	var foreach = __webpack_require__(42);
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	var toStr = Object.prototype.toString;
	
	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};
	
	var arePropertyDescriptorsSupported = function () {
		var obj = {};
		try {
			Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
	        /* eslint-disable no-unused-vars, no-restricted-syntax */
	        for (var _ in obj) { return false; }
	        /* eslint-enable no-unused-vars, no-restricted-syntax */
			return obj.x === obj;
		} catch (e) { /* this is IE 8. */
			return false;
		}
	};
	var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();
	
	var defineProperty = function (object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			Object.defineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value;
		}
	};
	
	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = props.concat(Object.getOwnPropertySymbols(map));
		}
		foreach(props, function (name) {
			defineProperty(object, name, map[name], predicates[name]);
		});
	};
	
	defineProperties.supportsDescriptors = !!supportsDescriptors;
	
	module.exports = defineProperties;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(41);
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};
	
	var keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];
	
		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}
	
		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}
	
		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}
	
		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	
			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
	
	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				return (Object.keys(arguments) || '').length === 2;
			}(1, 2));
			if (!keysWorksWithArguments) {
				var originalKeys = Object.keys;
				Object.keys = function keys(object) {
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					} else {
						return originalKeys(object);
					}
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};
	
	module.exports = keysShim;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;
	
	module.exports = function forEach (obj, fn, ctx) {
	    if (toString.call(fn) !== '[object Function]') {
	        throw new TypeError('iterator must be a function');
	    }
	    var l = obj.length;
	    if (l === +l) {
	        for (var i = 0; i < l; i++) {
	            fn.call(ctx, obj[i], i, obj);
	        }
	    } else {
	        for (var k in obj) {
	            if (hasOwn.call(obj, k)) {
	                fn.call(ctx, obj[k], k, obj);
	            }
	        }
	    }
	};
	


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
	var symbolToStr = hasSymbols ? Symbol.prototype.toString : toStr;
	
	var $isNaN = __webpack_require__(44);
	var $isFinite = __webpack_require__(45);
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
	
	var assign = __webpack_require__(46);
	var sign = __webpack_require__(47);
	var mod = __webpack_require__(48);
	var isPrimitive = __webpack_require__(49);
	var toPrimitive = __webpack_require__(50);
	var parseInteger = parseInt;
	var bind = __webpack_require__(55);
	var strSlice = bind.call(Function.call, String.prototype.slice);
	var isBinary = bind.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i);
	var isOctal = bind.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i);
	var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
	var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
	var hasNonWS = bind.call(Function.call, RegExp.prototype.test, nonWSregex);
	var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
	var isInvalidHexLiteral = bind.call(Function.call, RegExp.prototype.test, invalidHexLiteral);
	
	// whitespace from: http://es5.github.io/#x15.5.4.20
	// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
	var ws = [
		'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
		'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
		'\u2029\uFEFF'
	].join('');
	var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
	var replace = bind.call(Function.call, String.prototype.replace);
	var trim = function (value) {
		return replace(value, trimRegex, '');
	};
	
	var ES5 = __webpack_require__(57);
	
	var hasRegExpMatcher = __webpack_require__(59);
	
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
	var ES6 = assign(assign({}, ES5), {
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
		Call: function Call(F, V) {
			var args = arguments.length > 2 ? arguments[2] : [];
			if (!this.IsCallable(F)) {
				throw new TypeError(F + ' is not a function');
			}
			return F.apply(V, args);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
		ToPrimitive: toPrimitive,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
		// ToBoolean: ES5.ToBoolean,
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber
		ToNumber: function ToNumber(argument) {
			var value = isPrimitive(argument) ? argument : toPrimitive(argument, 'number');
			if (typeof value === 'symbol') {
				throw new TypeError('Cannot convert a Symbol value to a number');
			}
			if (typeof value === 'string') {
				if (isBinary(value)) {
					return this.ToNumber(parseInteger(strSlice(value, 2), 2));
				} else if (isOctal(value)) {
					return this.ToNumber(parseInteger(strSlice(value, 2), 8));
				} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
					return NaN;
				} else {
					var trimmed = trim(value);
					if (trimmed !== value) {
						return this.ToNumber(trimmed);
					}
				}
			}
			return Number(value);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
		// ToInteger: ES5.ToNumber,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
		// ToInt32: ES5.ToInt32,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
		// ToUint32: ES5.ToUint32,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
		ToInt16: function ToInt16(argument) {
			var int16bit = this.ToUint16(argument);
			return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
		// ToUint16: ES5.ToUint16,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
		ToInt8: function ToInt8(argument) {
			var int8bit = this.ToUint8(argument);
			return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
		ToUint8: function ToUint8(argument) {
			var number = this.ToNumber(argument);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
			var posInt = sign(number) * Math.floor(Math.abs(number));
			return mod(posInt, 0x100);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
		ToUint8Clamp: function ToUint8Clamp(argument) {
			var number = this.ToNumber(argument);
			if ($isNaN(number) || number <= 0) { return 0; }
			if (number >= 0xFF) { return 0xFF; }
			var f = Math.floor(argument);
			if (f + 0.5 < number) { return f + 1; }
			if (number < f + 0.5) { return f; }
			if (f % 2 !== 0) { return f + 1; }
			return f;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
		ToString: function ToString(argument) {
			if (typeof argument === 'symbol') {
				throw new TypeError('Cannot convert a Symbol value to a string');
			}
			return String(argument);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
		ToObject: function ToObject(value) {
			this.RequireObjectCoercible(value);
			return Object(value);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
		ToPropertyKey: function ToPropertyKey(argument) {
			var key = this.ToPrimitive(argument, String);
			return typeof key === 'symbol' ? symbolToStr.call(key) : this.ToString(key);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
		ToLength: function ToLength(argument) {
			var len = this.ToInteger(argument);
			if (len <= 0) { return 0; } // includes converting -0 to +0
			if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
			return len;
		},
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
		CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
			if (toStr.call(argument) !== '[object String]') {
				throw new TypeError('must be a string');
			}
			if (argument === '-0') { return -0; }
			var n = this.ToNumber(argument);
			if (this.SameValue(this.ToString(n), argument)) { return n; }
			return void 0;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
		RequireObjectCoercible: ES5.CheckObjectCoercible,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
		IsArray: Array.isArray || function IsArray(argument) {
			return toStr.call(argument) === '[object Array]';
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
		// IsCallable: ES5.IsCallable,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
		IsConstructor: function IsConstructor(argument) {
			return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
		IsExtensible: function IsExtensible(obj) {
			if (!Object.preventExtensions) { return true; }
			if (isPrimitive(obj)) {
				return false;
			}
			return Object.isExtensible(obj);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
		IsInteger: function IsInteger(argument) {
			if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
				return false;
			}
			var abs = Math.abs(argument);
			return Math.floor(abs) === abs;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
		IsPropertyKey: function IsPropertyKey(argument) {
			return typeof argument === 'string' || typeof argument === 'symbol';
		},
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp
		IsRegExp: function IsRegExp(argument) {
			if (!argument || typeof argument !== 'object') {
				return false;
			}
			if (hasSymbols) {
				var isRegExp = argument[Symbol.match];
				if (typeof isRegExp !== 'undefined') {
					return ES5.ToBoolean(isRegExp);
				}
			}
			return hasRegExpMatcher(argument);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
		// SameValue: ES5.SameValue,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
		SameValueZero: function SameValueZero(x, y) {
			return (x === y) || ($isNaN(x) && $isNaN(y));
		},
	
		/**
		 * 7.3.2 GetV (V, P)
		 * 1. Assert: IsPropertyKey(P) is true.
		 * 2. Let O be ToObject(V).
		 * 3. ReturnIfAbrupt(O).
		 * 4. Return O.[[Get]](P, V).
		 */
		GetV: function GetV(V, P) {
			// 7.3.2.1
			if (!this.IsPropertyKey(P)) {
				throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
	
			// 7.3.2.2-3
			var O = this.ToObject(V);
	
			// 7.3.2.4
			return O[P];
		},
	
		/**
		 * 7.3.9 - http://www.ecma-international.org/ecma-262/6.0/#sec-getmethod
		 * 1. Assert: IsPropertyKey(P) is true.
		 * 2. Let func be GetV(O, P).
		 * 3. ReturnIfAbrupt(func).
		 * 4. If func is either undefined or null, return undefined.
		 * 5. If IsCallable(func) is false, throw a TypeError exception.
		 * 6. Return func.
		 */
		GetMethod: function GetMethod(O, P) {
			// 7.3.9.1
			if (!this.IsPropertyKey(P)) {
				throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
	
			// 7.3.9.2
			var func = this.GetV(O, P);
	
			// 7.3.9.4
			if (func == null) {
				return undefined;
			}
	
			// 7.3.9.5
			if (!this.IsCallable(func)) {
				throw new TypeError(P + 'is not a function');
			}
	
			// 7.3.9.6
			return func;
		},
	
		/**
		 * 7.3.1 Get (O, P) - http://www.ecma-international.org/ecma-262/6.0/#sec-get-o-p
		 * 1. Assert: Type(O) is Object.
		 * 2. Assert: IsPropertyKey(P) is true.
		 * 3. Return O.[[Get]](P, O).
		 */
		Get: function Get(O, P) {
			// 7.3.1.1
			if (this.Type(O) !== 'Object') {
				throw new TypeError('Assertion failed: Type(O) is not Object');
			}
			// 7.3.1.2
			if (!this.IsPropertyKey(P)) {
				throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
			// 7.3.1.3
			return O[P];
		},
	
		Type: function Type(x) {
			if (typeof x === 'symbol') {
				return 'Symbol';
			}
			return ES5.Type(x);
		},
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
		SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
			if (this.Type(O) !== 'Object') {
				throw new TypeError('Assertion failed: Type(O) is not Object');
			}
			var C = O.constructor;
			if (typeof C === 'undefined') {
				return defaultConstructor;
			}
			if (this.Type(C) !== 'Object') {
				throw new TypeError('O.constructor is not an Object');
			}
			var S = hasSymbols && Symbol.species ? C[Symbol.species] : undefined;
			if (S == null) {
				return defaultConstructor;
			}
			if (this.IsConstructor(S)) {
				return S;
			}
			throw new TypeError('no constructor found');
		}
	});
	
	delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible
	
	module.exports = ES6;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = Number.isNaN || function isNaN(a) {
		return a !== a;
	};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	var $isNaN = Number.isNaN || function (a) { return a !== a; };
	
	module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	var has = Object.prototype.hasOwnProperty;
	module.exports = Object.assign || function assign(target, source) {
		for (var key in source) {
			if (has.call(source, key)) {
				target[key] = source[key];
			}
		}
		return target;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = function sign(number) {
		return number >= 0 ? 1 : -1;
	};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = function mod(number, modulo) {
		var remain = number % modulo;
		return Math.floor(remain >= 0 ? remain : remain + modulo);
	};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
	
	var isPrimitive = __webpack_require__(51);
	var isCallable = __webpack_require__(52);
	var isDate = __webpack_require__(53);
	var isSymbol = __webpack_require__(54);
	
	var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
		if (typeof O === 'undefined' || O === null) {
			throw new TypeError('Cannot call method on ' + O);
		}
		if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
			throw new TypeError('hint must be "string" or "number"');
		}
		var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
		var method, result, i;
		for (i = 0; i < methodNames.length; ++i) {
			method = O[methodNames[i]];
			if (isCallable(method)) {
				result = method.call(O);
				if (isPrimitive(result)) {
					return result;
				}
			}
		}
		throw new TypeError('No default value');
	};
	
	var GetMethod = function GetMethod(O, P) {
		var func = O[P];
		if (func !== null && typeof func !== 'undefined') {
			if (!isCallable(func)) {
				throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
			}
			return func;
		}
	};
	
	// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
	module.exports = function ToPrimitive(input, PreferredType) {
		if (isPrimitive(input)) {
			return input;
		}
		var hint = 'default';
		if (arguments.length > 1) {
			if (PreferredType === String) {
				hint = 'string';
			} else if (PreferredType === Number) {
				hint = 'number';
			}
		}
	
		var exoticToPrim;
		if (hasSymbols) {
			if (Symbol.toPrimitive) {
				exoticToPrim = GetMethod(input, Symbol.toPrimitive);
			} else if (isSymbol(input)) {
				exoticToPrim = Symbol.prototype.valueOf;
			}
		}
		if (typeof exoticToPrim !== 'undefined') {
			var result = exoticToPrim.call(input, hint);
			if (isPrimitive(result)) {
				return result;
			}
			throw new TypeError('unable to convert exotic object to primitive');
		}
		if (hint === 'default' && (isDate(input) || isSymbol(input))) {
			hint = 'string';
		}
		return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
	};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';
	
	var fnToStr = Function.prototype.toString;
	
	var constructorRegex = /^\s*class /;
	var isES6ClassFn = function isES6ClassFn(value) {
		try {
			var fnStr = fnToStr.call(value);
			var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
			var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
			var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
			return constructorRegex.test(spaceStripped);
		} catch (e) {
			return false; // not a function
		}
	};
	
	var tryFunctionObject = function tryFunctionObject(value) {
		try {
			if (isES6ClassFn(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	'use strict';
	
	var getDay = Date.prototype.getDay;
	var tryDateObject = function tryDateObject(value) {
		try {
			getDay.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	
	var toStr = Object.prototype.toString;
	var dateClass = '[object Date]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isDateObject(value) {
		if (typeof value !== 'object' || value === null) { return false; }
		return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
	};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	if (hasSymbols) {
		var symToStr = Symbol.prototype.toString;
		var symStringRegex = /^Symbol\(.*\)$/;
		var isSymbolObject = function isSymbolObject(value) {
			if (typeof value.valueOf() !== 'symbol') { return false; }
			return symStringRegex.test(symToStr.call(value));
		};
		module.exports = function isSymbol(value) {
			if (typeof value === 'symbol') { return true; }
			if (toStr.call(value) !== '[object Symbol]') { return false; }
			try {
				return isSymbolObject(value);
			} catch (e) {
				return false;
			}
		};
	} else {
		module.exports = function isSymbol(value) {
			// this environment does not support Symbols.
			return false;
		};
	}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var implementation = __webpack_require__(56);
	
	module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';
	
	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);
	
	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };
	
	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }
	
	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
	
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	
	    return bound;
	};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $isNaN = __webpack_require__(44);
	var $isFinite = __webpack_require__(45);
	
	var sign = __webpack_require__(47);
	var mod = __webpack_require__(48);
	
	var IsCallable = __webpack_require__(52);
	var toPrimitive = __webpack_require__(58);
	
	// https://es5.github.io/#x9
	var ES5 = {
		ToPrimitive: toPrimitive,
	
		ToBoolean: function ToBoolean(value) {
			return Boolean(value);
		},
		ToNumber: function ToNumber(value) {
			return Number(value);
		},
		ToInteger: function ToInteger(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number)) { return 0; }
			if (number === 0 || !$isFinite(number)) { return number; }
			return sign(number) * Math.floor(Math.abs(number));
		},
		ToInt32: function ToInt32(x) {
			return this.ToNumber(x) >> 0;
		},
		ToUint32: function ToUint32(x) {
			return this.ToNumber(x) >>> 0;
		},
		ToUint16: function ToUint16(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
			var posInt = sign(number) * Math.floor(Math.abs(number));
			return mod(posInt, 0x10000);
		},
		ToString: function ToString(value) {
			return String(value);
		},
		ToObject: function ToObject(value) {
			this.CheckObjectCoercible(value);
			return Object(value);
		},
		CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
			/* jshint eqnull:true */
			if (value == null) {
				throw new TypeError(optMessage || 'Cannot call method on ' + value);
			}
			return value;
		},
		IsCallable: IsCallable,
		SameValue: function SameValue(x, y) {
			if (x === y) { // 0 === -0, but they are not identical.
				if (x === 0) { return 1 / x === 1 / y; }
				return true;
			}
			return $isNaN(x) && $isNaN(y);
		},
	
		// http://www.ecma-international.org/ecma-262/5.1/#sec-8
		Type: function Type(x) {
			if (x === null) {
				return 'Null';
			}
			if (typeof x === 'undefined') {
				return 'Undefined';
			}
			if (typeof x === 'function' || typeof x === 'object') {
				return 'Object';
			}
			if (typeof x === 'number') {
				return 'Number';
			}
			if (typeof x === 'boolean') {
				return 'Boolean';
			}
			if (typeof x === 'string') {
				return 'String';
			}
		}
	};
	
	module.exports = ES5;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	var isPrimitive = __webpack_require__(51);
	
	var isCallable = __webpack_require__(52);
	
	// https://es5.github.io/#x8.12
	var ES5internalSlots = {
		'[[DefaultValue]]': function (O, hint) {
			var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);
	
			if (actualHint === String || actualHint === Number) {
				var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
				var value, i;
				for (i = 0; i < methods.length; ++i) {
					if (isCallable(O[methods[i]])) {
						value = O[methods[i]]();
						if (isPrimitive(value)) {
							return value;
						}
					}
				}
				throw new TypeError('No default value');
			}
			throw new TypeError('invalid [[DefaultValue]] hint supplied');
		}
	};
	
	// https://es5.github.io/#x9
	module.exports = function ToPrimitive(input, PreferredType) {
		if (isPrimitive(input)) {
			return input;
		}
		return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(60);
	var regexExec = RegExp.prototype.exec;
	var gOPD = Object.getOwnPropertyDescriptor;
	
	var tryRegexExecCall = function tryRegexExec(value) {
		try {
			var lastIndex = value.lastIndex;
			value.lastIndex = 0;
	
			regexExec.call(value);
			return true;
		} catch (e) {
			return false;
		} finally {
			value.lastIndex = lastIndex;
		}
	};
	var toStr = Object.prototype.toString;
	var regexClass = '[object RegExp]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}
		if (!hasToStringTag) {
			return toStr.call(value) === regexClass;
		}
	
		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}
	
		return tryRegexExecCall(value);
	};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(55);
	
	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ES = __webpack_require__(43);
	
	module.exports = function find(predicate) {
		var list = ES.ToObject(this);
		var length = ES.ToInteger(ES.ToLength(list.length));
		if (!ES.IsCallable(predicate)) {
			throw new TypeError('Array#find: predicate must be a function');
		}
		if (length === 0) {
			return undefined;
		}
		var thisArg = arguments[1];
		for (var i = 0, value; i < length; i++) {
			value = list[i];
			if (ES.Call(predicate, thisArg, [value, i, list])) {
				return value;
			}
		}
		return undefined;
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function getPolyfill() {
		// Detect if an implementation exists
		// Detect early implementations which skipped holes in sparse arrays
	  // eslint-disable-next-line no-sparse-arrays
		var implemented = Array.prototype.find && [, 1].find(function () {
			return true;
		}) !== 1;
	
	  // eslint-disable-next-line global-require
		return implemented ? Array.prototype.find : __webpack_require__(61);
	};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(39);
	var getPolyfill = __webpack_require__(62);
	
	module.exports = function shimArrayPrototypeFind() {
		var polyfill = getPolyfill();
	
		define(Array.prototype, { find: polyfill }, {
			find: function () {
				return Array.prototype.find !== polyfill;
			}
		});
	
		return polyfill;
	};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\"><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-arrows-alt\"><title>arrows-alt</title><path d=\"M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-backward\"><title>backward</title><path d=\"M1683 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-8-9-13-19v710q0 26-13 32t-32-13l-710-710q-19-19-19-45t19-45l710-710q19-19 32-13t13 32v710q5-11 13-19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-bullseye\"><title>bullseye</title><path d=\"M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm128 0q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm128 0q0 212-150 362t-362 150-362-150-150-362 150-362 362-150 362 150 150 362zm128 0q0-130-51-248.5t-136.5-204-204-136.5-248.5-51-248.5 51-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5zm128 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 400 380\" id=\"leplayer-icon-cat\"><title>cat</title> <path d=\"M 151.34904,307.20455 L 264.34904,307.20455 C 264.34904,291.14096 263.2021,287.95455 236.59904,287.95455 C 240.84904,275.20455 258.12424,244.35808 267.72404,244.35808 C 276.21707,244.35808 286.34904,244.82592 286.34904,264.20455 C 286.34904,286.20455 323.37171,321.67547 332.34904,307.20455 C 345.72769,285.63897 309.34904,292.21514 309.34904,240.20455 C 309.34904,169.05135 350.87417,179.18071 350.87417,139.20455 C 350.87417,119.20455 345.34904,116.50374 345.34904,102.20455 C 345.34904,83.30695 361.99717,84.403577 358.75805,68.734879 C 356.52061,57.911656 354.76962,49.23199 353.46516,36.143889 C 352.53959,26.857305 352.24452,16.959398 342.59855,17.357382 C 331.26505,17.824992 326.96549,37.77419 309.34904,39.204549 C 291.76851,40.631991 276.77834,24.238028 269.97404,26.579549 C 263.22709,28.901334 265.34904,47.204549 269.34904,60.204549 C 275.63588,80.636771 289.34904,107.20455 264.34904,111.20455 C 239.34904,115.20455 196.34904,119.20455 165.34904,160.20455 C 134.34904,201.20455 135.49342,249.3212 123.34904,264.20455 C 82.590696,314.15529 40.823919,293.64625 40.823919,335.20455 C 40.823919,353.81019 72.349045,367.20455 77.349045,361.20455 C 82.349045,355.20455 34.863764,337.32587 87.995492,316.20455 C 133.38711,298.16014 137.43914,294.47663 151.34904,307.20455 z \" style=\"fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/> </symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-commenting-o\"><title>commenting-o</title><path d=\"M640 896q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm384 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm384 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-512-512q-204 0-381.5 69.5t-282 187.5-104.5 255q0 112 71.5 213.5t201.5 175.5l87 50-27 96q-24 91-70 172 152-63 275-171l43-38 57 6q69 8 130 8 204 0 381.5-69.5t282-187.5 104.5-255-104.5-255-282-187.5-381.5-69.5zm896 512q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22h-5q-15 0-27-10.5t-16-27.5v-1q-3-4-.5-12t2-10 4.5-9.5l6-9 7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-130 71-248.5t191-204.5 286-136.5 348-50.5 348 50.5 286 136.5 191 204.5 71 248.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-download\"><title>download</title><path d=\"M1344 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h465l135 136q58 56 136 56t136-56l136-136h464q40 0 68 28t28 68zm-325-569q17 41-14 70l-448 448q-18 19-45 19t-45-19l-448-448q-31-29-14-70 17-39 59-39h256v-448q0-26 19-45t45-19h256q26 0 45 19t19 45v448h256q42 0 59 39z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-edit\"><title>edit</title><path d=\"M888 1184l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672h-288v-288zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-forward\"><title>forward</title><path d=\"M109 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q8 8 13 19v-710q0-26 13-32t32 13l710 710q19 19 19 45t-19 45l-710 710q-19 19-32 13t-13-32v-710q-5 10-13 19z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-info\"><title>info</title><path d=\"M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-list-ul\"><title>list-ul</title><path d=\"M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-magic\"><title>magic</title><path d=\"M1254 581l293-293-107-107-293 293zm447-293q0 27-18 45l-1286 1286q-18 18-45 18t-45-18l-198-198q-18-18-18-45t18-45l1286-1286q18-18 45-18t45 18l198 198q18 18 18 45zm-1351-190l98 30-98 30-30 98-30-98-98-30 98-30 30-98zm350 162l196 60-196 60-60 196-60-196-196-60 196-60 60-196zm930 478l98 30-98 30-30 98-30-98-98-30 98-30 30-98zm-640-640l98 30-98 30-30 98-30-98-98-30 98-30 30-98z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-pause\"><title>pause</title><path d=\"M1664 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zm-896 0v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-plane\"><title>plane</title><path d=\"M1568 160q44 52 12 148t-108 172l-161 161 160 696q5 19-12 33l-128 96q-7 6-19 6-4 0-7-1-15-3-21-16l-279-508-259 259 53 194q5 17-8 31l-96 96q-9 9-23 9h-2q-15-2-24-13l-189-252-252-189q-11-7-13-23-1-13 9-25l96-97q9-9 23-9 6 0 8 1l194 53 259-259-508-279q-14-8-17-24-2-16 9-27l128-128q14-13 30-8l665 159 160-160q76-76 172-108t148 12z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-play\"><title>play</title><path d=\"M1576 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-plus\"><title>plus</title><path d=\"M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-redo\"><title>redo</title><path d=\"M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-refresh\"><title>refresh</title><path d=\"M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-trash\"><title>trash</title><path d=\"M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-undo\"><title>undo</title><path d=\"M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-down\"><title>volume-down</title><path d=\"M1088 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-off\"><title>volume-off</title><path d=\"M1280 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45z\"/></symbol><symbol fill=\"currentColor\" viewBox=\"0 0 1792 1792\" id=\"leplayer-icon-volume-up\"><title>volume-up</title><path d=\"M832 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142zm256 0q0 153-85 282.5t-225 188.5q-13 5-25 5-27 0-46-19t-19-45q0-39 39-59 56-29 76-44 74-54 115.5-135.5t41.5-173.5-41.5-173.5-115.5-135.5q-20-15-76-44-39-20-39-59 0-26 19-45t45-19q13 0 26 5 140 59 225 188.5t85 282.5zm256 0q0 230-127 422.5t-338 283.5q-13 5-26 5-26 0-45-19t-19-45q0-36 39-59 7-4 22.5-10.5t22.5-10.5q46-25 82-51 123-91 192-227t69-289-69-289-192-227q-36-26-82-51-7-4-22.5-10.5t-22.5-10.5q-39-23-39-59 0-26 19-45t45-19q13 0 26 5 211 91 338 283.5t127 422.5z\"/></symbol></svg>"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var preset = exports.preset = {
		options: {
			width: '100%',
			controls: {
				common: [['play', 'volume', 'divider', 'timeline', 'divider', 'fullscreen'], ['rate', 'divider', 'backward', 'divider', 'source', 'divider', 'download']],
				fullscreen: [['play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', 'backward', 'divider', 'source', 'divider', 'download', 'divider', 'fullscreen']]
			}
		}
	};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var controls = ['play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'download', 'fullscreen'];
	
	var preset = exports.preset = {
		options: {
			controls: {
				common: [controls, []],
				fullscreen: [controls]
			}
		}
	};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var preset = exports.preset = {
		options: {
			width: '100%',
			controls: {
				common: [['play', 'volume', 'timeline', 'rate', 'source', 'divider', 'download', 'fullscreen'], []],
				fullscreen: [['play', 'volume', 'timeline', 'rate', 'source', 'divider', 'download', 'fullscreen']]
			}
		}
	};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var preset = exports.preset = {
		options: {
			width: '100%',
			controls: {
				common: [['play', 'volume', 'timeline', 'rate', 'source', 'divider', 'fullscreen'], []],
				fullscreen: [['play', 'volume', 'timeline', 'rate', 'source', 'divider', 'fullscreen']]
			}
		}
	};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Player = window.lePlayer || window.$.lePlayer;
	var defaultOptions = {
		videoPlayed: [25, 50, 100],
		videoPlayedDelta: 5,
		volumeChangeDelay: 1000,
		rateChangeDelay: 2000
	};
	
	Player.plugin('ga', function (pluginOptions) {
		var options = _jquery2.default.extend({}, defaultOptions, pluginOptions);
		var player = this;
	
		if (!window.ga) {
			console.error('Google Analytics does not exist');
			return;
		}
	
		player.on('firstplay', function (e) {
			window.ga('send', 'event', 'Player Video Started');
		});
	
		player.on('controlclick', function (e, data) {
			var control = data.control;
			var _control$options = control.options,
			    name = _control$options.name,
			    collection = _control$options.collection;
	
			if (name) {
				window.ga('send', 'event', 'Player Control Click', name, collection);
			}
		});
	
		player.on('sectionsclick', function (e, data) {
			window.ga('send', 'event', 'Player Sections', 'Click', player.view);
		});
	
		var volumeChangeTimeout = null;
	
		player.on('volumechange', function (e, data) {
			clearTimeout(volumeChangeTimeout);
	
			volumeChangeTimeout = setTimeout(function (_) {
				var value = data.volume;
				window.ga('send', 'event', 'Player Volume Change', Number(value).toFixed(1));
			}, options.volumeChangeDelay);
		});
	
		var rateChangeTimeout = null;
		player.on('ratechange', function (e, data) {
			clearTimeout(rateChangeTimeout);
	
			rateChangeTimeout = setTimeout(function (_) {
				var value = data.rate;
				window.ga('send', 'event', 'Player Rate Change', value);
			}, options.rateChangeDelay);
		});
	
		var playedEventsSent = {};
		player.on('timeupdate', function () {
			var percent = player.video.playedPercentage;
			var delta = options.videoPlayedDelta;
			options.videoPlayed.forEach(function (item) {
				if (!playedEventsSent[item] && Math.abs(percent - item) < delta) {
					window.ga('send', 'event', 'Player Video Played', item - delta + '-' + item + '%');
					playedEventsSent[item] = true;
				}
			});
		});
	
		// First qualitychange fired on player init, and we don't need track this to GA
		var loadQuality = false;
		player.on('qualitychange', function (e) {
			if (!loadQuality) {
				loadQuality = true;
				return;
			}
	
			if (player.video.playbackQuality != null) {
				window.ga('send', 'event', 'Player Change Quality', player.video.playbackQuality.title);
			}
		});
	});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Player = window.lePlayer || window.$.lePlayer;
	var Entity = Player.getComponent('Entity');
	
	var trackProvide = function trackProvide(track) {
		if (track == null || track.languageCode == null) {
			return track;
		}
		return {
			language: track.languageCode,
			title: track.languageCode,
			tooltip: track.languageName,
			name: track.languageCode
		};
	};
	
	var Youtube = function (_Entity) {
		_inherits(Youtube, _Entity);
	
		function Youtube(player, options) {
			_classCallCheck(this, Youtube);
	
			var _this = _possibleConstructorReturn(this, (Youtube.__proto__ || Object.getPrototypeOf(Youtube)).call(this, player, options));
	
			_this._paused = true;
	
			_this.src = _this.player.options.src;
	
			_this.player.addClass('leplayer--youtube');
			_this.element.on('click', _this.onClick.bind(_this));
			_this.element.on('dblclick', _this.onDblclick.bind(_this));
			return _this;
		}
	
		/**
	  * @override
	  */
	
	
		_createClass(Youtube, [{
			key: 'onClick',
			value: function onClick(event) {
				this.trigger('click');
			}
		}, {
			key: 'onDblclick',
			value: function onDblclick() {
				this.trigger('dblclick');
			}
		}, {
			key: 'increaseRate',
	
	
			/**
	   * @override
	   */
			value: function increaseRate() {
				var index = this.availableRates.indexOf(this.rate);
				if (index + 1 >= this.availableRates.length) return;
				return this.rate = this.availableRates[index + 1];
			}
	
			/**
	   * @override
	   */
	
		}, {
			key: 'decreaseRate',
			value: function decreaseRate() {
				var index = this.availableRates.indexOf(this.rate);
				if (index - 1 < 0) return;
				return this.rate = this.availableRates[index - 1];
			}
		}, {
			key: 'getAvailableQualityLevels',
			value: function getAvailableQualityLevels() {
				var arr = this.ytPlayer.getAvailableQualityLevels();
				var index = arr.indexOf('auto');
	
				if (index > -1) {
					arr.splice(index, 1);
				}
	
				return arr.map(function (item) {
					return {
						title: Youtube.QUALITY_NAMES[item] || item,
						name: item
					};
				});
			}
		}, {
			key: 'supportsFullScreen',
			value: function supportsFullScreen() {
				return true;
			}
		}, {
			key: 'play',
			value: function play() {
				this.ytPlayer.playVideo();
				this.trigger('play');
			}
		}, {
			key: 'pause',
			value: function pause() {
				this.ytPlayer.pauseVideo();
				this.trigger('pause');
			}
		}, {
			key: 'init',
			value: function init() {
				var _this2 = this;
	
				_get(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'init', this).call(this);
				return Youtube.apiLoaded().then(function () {
					return _this2.initYTPlayer();
				});
			}
		}, {
			key: 'createElement',
			value: function createElement() {
				this.element = (0, _jquery2.default)('<div />').addClass('leplayer__youtube-wrapper').attr('tabindex', '0');
				this.youtubeElement = (0, _jquery2.default)('<div />').addClass('leplayer__youtube');
				this.blocker = (0, _jquery2.default)('<div />').addClass('leplayer__youtube-blocker');
	
				return this.element.append(this.blocker).append(this.youtubeElement);
			}
		}, {
			key: 'initYTPlayer',
			value: function initYTPlayer() {
				var _this3 = this;
	
				this._initPromise = _jquery2.default.Deferred();
				var globalOptions = this.player.options;
				var ytOptions = {
					autoplay: globalOptions.autoplay ? 1 : 0,
					loop: globalOptions.loop ? 1 : 0,
					iv_load_policy: 3,
					controls: 0,
					modestbranding: 1,
					rel: 0,
					showinfo: 0,
					cc_load_policy: 0,
					disablekb: 0,
					fs: 0,
					start: globalOptions.time
				};
	
				YT.ready(function () {
					_this3.options.ctx.replaceWith(_this3.element);
	
					_this3.ytPlayer = new YT.Player(_this3.youtubeElement[0], {
						videoId: _this3.videoId,
						width: globalOptions.width || '100%',
						playerVars: ytOptions,
						events: {
							onReady: _this3.onYTPReady.bind(_this3),
							onStateChange: _this3.onYTPStateChange.bind(_this3),
							onPlaybackRateChange: _this3.onYTPRateChange.bind(_this3),
							onPlaybackQualityChange: _this3.onYTPPlaybackQualityChange.bind(_this3)
						}
					});
				});
				return this._initPromise.promise();
			}
		}, {
			key: 'setAvailablePlaybackRates',
			value: function setAvailablePlaybackRates() {
				this.availableRates = this.ytPlayer.getAvailablePlaybackRates();
				this.rateMin = this.availableRates[0];
				this.rateMax = this.availableRates[this.availableRates.length - 1];
			}
		}, {
			key: 'onYTPReady',
			value: function onYTPReady(e) {
				this._initPromise.resolve();
				this._initRate();
				this._initVolume();
				this.setAvailablePlaybackRates();
			}
		}, {
			key: 'onYTPRateChange',
			value: function onYTPRateChange(e) {
				this.trigger('ratechange');
			}
		}, {
			key: 'onYTPPlaybackQualityChange',
			value: function onYTPPlaybackQualityChange(e) {
				var data = e.data;
				this._playbackQuality = this.getAvailableQualityLevels().find(function (item) {
					return item.name === data;
				});
				this.trigger('qualitychange', this._playbackQuality);
			}
		}, {
			key: 'onYTPStateChange',
			value: function onYTPStateChange(e) {
				var state = e.data;
				if (state === this.lastState) {
					return;
				}
	
				this.lastState = state;
				switch (state) {
					case YT.PlayerState.UNSTARTED:
						this.trigger('loadstart');
						this.trigger('loadedmetadata');
						this.trigger('durationchange');
						this.trigger('ratechange');
						this.trigger('volumechange');
						this.trigger('trackschange');
						if (this.player.options.autoplay) {
							this.trigger('play');
						}
						break;
	
					case YT.PlayerState.ENDED:
						this.trigger('pause');
						this.trigger('ended');
						break;
	
					case YT.PlayerState.PLAYING:
						this.trigger('timeupdate');
						this.trigger('durationchange');
						this.trigger('playing');
	
						this.ytPlayer.setPlaybackQuality(this._nextPlaybackQuality);
	
						if (this.isSeeking) {
							this.onSeeked();
						}
	
						this.loadCaptions();
						this.emitTimeupdate();
						break;
	
					case YT.PlayerState.PAUSED:
						this.trigger('canplay');
	
						if (this.isSeeking) {
							this.onSeeked();
						}
						break;
	
					case YT.PlayerState.BUFFERING:
						this.player.trigger('timeupdate');
						this.player.trigger('waiting');
	
						this.ytPlayer.setPlaybackQuality(this._nextPlaybackQuality);
	
						break;
				}
			}
		}, {
			key: 'onSeeked',
			value: function onSeeked() {
				clearInterval(this.seekingInterval);
				this.isSeeking = false;
	
				if (this.wasPausedBeforeSeek) {
					this.pause();
				}
	
				this.trigger('seeked');
			}
		}, {
			key: 'emitTimeupdate',
			value: function emitTimeupdate() {
				var _this4 = this;
	
				clearInterval(this.seekingInterval);
	
				this.seekingInterval = setInterval(function () {
					if (_this4.lastState === YT.PlayerState.PAUSED) {
						clearInterval(_this4.seekingInterval);
					} else if (_this4.currentTime !== _this4.timeBeforeSeek) {
						_this4.trigger('timeupdate');
					}
				}, 250);
			}
		}, {
			key: 'loadCaptions',
			value: function loadCaptions() {
				var _this5 = this;
	
				var emptyTracklist = function emptyTracklist() {
					return _this5.subtitles == null || _this5.subtitles.length === 0;
				};
	
				clearInterval(this._loadCaptionsWatcher);
				if (!this._tracksDisable && this.checkCaptionsExist() && emptyTracklist()) {
					this.ytPlayer.loadModule('captions');
	
					this._loadCaptionsWatcher = setInterval(function () {
						if (!emptyTracklist() && _this5.checkCaptionsExist()) {
							_this5.trigger('trackschange');
							clearInterval(_this5._loadCaptionsWatcher);
						}
					}, 250);
				}
			}
		}, {
			key: 'checkCaptionsExist',
			value: function checkCaptionsExist() {
				try {
					return this.ytPlayer.getOptions('captions') != null;
				} catch (error) {
					return false;
				}
			}
		}, {
			key: 'src',
			set: function set(src) {
				if (src == null) return;
				if (this.src && this.src.url === src.url) return;
	
				var url = src.url || src.id;
	
				this.videoId = Youtube.parseUrl(url);
	
				if (this.player.options.poster) {
					this.poster = this.player.options.poster;
				} else {
					this.poster = 'https://img.youtube.com/vi/' + this.videoId + '/0.jpg';
				}
			}
		}, {
			key: 'currentTime',
			get: function get() {
				return this.ytPlayer ? this.ytPlayer.getCurrentTime() : 0;
			},
			set: function set(value) {
				if (this.lastState === YT.PlayerState.PAUSED) {
					this.timeBeforeSeek = this.currentTime;
				}
	
				if (!this.isSeeking) {
					this.wasPausedBeforeSeek = this.paused;
				}
	
				var time = void 0;
				if (value >= this.duration) {
					time = this.duration;
				} else if (value < 0) {
					time = 0;
				} else {
					time = value;
				}
	
				this.isSeeking = true;
				this.ytPlayer.seekTo(time, true);
				this.player.trigger('timeupdateload', { currentTime: time });
	
				this.trigger('seeking');
	
				this.emitTimeupdate();
			}
		}, {
			key: 'duration',
			get: function get() {
				return this.ytPlayer && this.ytPlayer.getDuration ? this.ytPlayer.getDuration() : NaN;
			}
		}, {
			key: 'paused',
			get: function get() {
				return this.ytPlayer ? this.lastState !== YT.PlayerState.PLAYING && this.lastState !== YT.PlayerState.BUFFERING : true;
			}
		}, {
			key: 'rate',
			get: function get() {
				return this.ytPlayer.getPlaybackRate();
			},
			set: function set(value) {
				_set(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'rate', value, this);
				this.ytPlayer.setPlaybackRate(value);
				this.trigger('ratechange');
			}
		}, {
			key: 'muted',
			set: function set(value) {
				var _this6 = this;
	
				if (value) {
					this.ytPlayer.mute();
				} else {
					this.ytPlayer.unMute();
				}
	
				setTimeout(function () {
					_this6.trigger('volumechange');
				}, 50);
			},
			get: function get() {
				return this.ytPlayer.isMuted();
			}
		}, {
			key: 'subtitles',
			get: function get() {
				return this.checkCaptionsExist() ? (this.ytPlayer.getOption('captions', 'tracklist') || []).map(trackProvide) : [];
			}
		}, {
			key: 'track',
			get: function get() {
				if (this._track === undefined && this.checkCaptionsExist()) {
					return trackProvide(this.ytPlayer.getOption('captions', 'track'));
				} else {
					return this._track;
				}
			},
			set: function set(value) {
				this._track = value;
				if (value === null) {
					this._tracksDisable = true;
					/* Disable captions */
					this.ytPlayer.unloadModule('captions');
	
					this.trigger('trackschange');
					return;
				}
				this.ytPlayer.setOption('captions', 'track', { languageCode: value.name }).setOption('captions', 'reload', true);
	
				if (this._tracksDisable) {
					/* Enable captions */
					this.ytPlayer.loadModule('captions');
				}
				this.trigger('trackschange');
			}
		}, {
			key: 'playbackQuality',
			set: function set(name) {
				_set(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'playbackQuality', name, this);
				var time = this.currentTime;
				var status = this.ytPlayer.getPlayerState();
	
				if (status !== YT.PlayerState.UNSTARTED && status !== YT.PlayerState.CUED) {
					this.ytPlayer.pauseVideo();
				}
	
				this._nextPlaybackQuality = name;
				this.ytPlayer.setPlaybackQuality(name);
				this.ytPlayer.seekTo(time);
	
				if (status !== YT.PlayerState.PAUSED) {
					this.ytPlayer.playVideo();
				}
			},
			get: function get() {
				var _this7 = this;
	
				if (this._playbackQuality == null) {
					this._playbackQuality = this.getAvailableQualityLevels().find(function (item) {
						return item.name === _this7.ytPlayer.getPlaybackQuality();
					});
				}
				return this._playbackQuality;
			}
		}, {
			key: 'volume',
			get: function get() {
				return this.ytPlayer ? this.ytPlayer.getVolume() / 100.0 : 1;
			},
			set: function set(value) {
				var _this8 = this;
	
				_set(Youtube.prototype.__proto__ || Object.getPrototypeOf(Youtube.prototype), 'volume', value, this);
				this.ytPlayer.setVolume(value * 100);
	
				setTimeout(function () {
					_this8.trigger('volumechange');
				}, 50);
			}
		}], [{
			key: 'parseUrl',
			value: function parseUrl(url) {
				var result = null;
				var regex = Youtube.URL_REGEX;
				var match = url.match(regex);
				if (url.length === 11) {
					result = url;
				} else if (match && match[2].length === 11) {
					result = match[2];
				}
				return result;
			}
		}]);
	
		return Youtube;
	}(Entity);
	
	Youtube.URL_REGEX = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	
	Youtube.QUALITY_NAMES = {
		tiny: '140p',
		small: '240p',
		medium: '360p',
		large: '480p',
		hd720: '720p',
		hd1080: '1080p',
		highres: 'HD',
		auto: 'Авто'
	};
	
	Youtube.apiLoaded = function () {
		var _this9 = this;
	
		if (this._loaded) return _jquery2.default.Deferred().resolve();
	
		return _jquery2.default.getScript('https://www.youtube.com/iframe_api').then(function () {
			return _this9._loaded = true;
		});
	};
	
	Player.registerComponent('Youtube', Youtube);
	
	Player.preset('youtube', {
		options: {
			entity: 'Youtube',
			controls: {
				common: [['play', 'volume', 'timeline', 'rate', 'backward', 'source', 'subtitle', 'divider', 'section', 'fullscreen'], []],
				fullscreen: [['play', 'volume', 'timeline', 'rate', 'backward', 'source', 'subtitle', 'divider', 'section', 'fullscreen']]
			}
		}
	});
	
	Player.plugin('youtube', function (pluginOptions) {
	
		/* global YT */
		Youtube.apiLoaded();
	});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODhmMWM1ZTAxNWZkYmVkYjhlMjE/MTFiMioqIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9sZS1wbGF5ZXIuZnVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbGUtcGxheWVyLmpzPzZkMDIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiPzU3YWEqKiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sLmpzPzgxY2MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29tcG9uZW50LmpzP2Y1NzgiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcz83ZGVmIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlCdXR0b24uanM/ZTcyYiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvaW5kZXguanM/NjVkOSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzP2E5ZjEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZS5qcz8xZDI4Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb2xsZWN0aW9uLmpzPzE0NWEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanM/Y2Q2NyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9FcnJvckRpc3BsYXkuanM/NTRhMSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Qb3N0ZXIuanM/MzJmNSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcz8yMmJjIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9jb29raWUuanM/YTAzZiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvYnJvd3Nlci5qcz8wNjQ1Iiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzP2QzZTMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvUGxheUNvbnRyb2wuanM/MTI1NSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Wb2x1bWVDb250cm9sLmpzP2FhMjAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzPzg2MTgiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVDb250cm9sLmpzP2JmZGQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbFRleHQuanM/NzAyMiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9CdWZmZXJlZFJhbmdlcy5qcz83ZDQwIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL01hcmtlci5qcz9lMzkyIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1NlY3Rpb25Db250cm9sLmpzP2YwN2IiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENoZWNrYm94LmpzP2IyYjciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wuanM/NWRiNiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9SYXRlQ29udHJvbC5qcz8xZTliIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcz84NzZhIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wuanM/ZDFlZiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ29udGFpbmVyLmpzPzM3MzUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzPzQxNzkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvRG93bmxvYWRDb250cm9sLmpzPzdlODYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvS2V5YmluZGluZ0luZm9Db250cm9sLmpzPzUwNGQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzP2Y2ZjMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9IdG1sNS5qcz9iZDczIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvRW50aXR5LmpzP2YxZDIiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbmRleC5qcz83YzQyIiwid2VicGFjazovLy8uL34vZGVmaW5lLXByb3BlcnRpZXMvaW5kZXguanM/ZTRmOCIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1rZXlzL2luZGV4LmpzP2E1M2IiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcz9mYjk0Iiwid2VicGFjazovLy8uL34vZm9yZWFjaC9pbmRleC5qcz9mN2FkIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM2LmpzP2EzMTMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzPzcxYzIiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzRmluaXRlLmpzPzg3MDUiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2Fzc2lnbi5qcz9lNjllIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzP2QwY2EiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL21vZC5qcz8xOTEzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc1ByaW1pdGl2ZS5qcz84NzMzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qcz84OTU5Iiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2hlbHBlcnMvaXNQcmltaXRpdmUuanM/ZDkwYiIsIndlYnBhY2s6Ly8vLi9+L2lzLWNhbGxhYmxlL2luZGV4LmpzPzViYjAiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1kYXRlLW9iamVjdC9pbmRleC5qcz8xMjNlIiwid2VicGFjazovLy8uL34vaXMtc3ltYm9sL2luZGV4LmpzPzI5ODQiLCJ3ZWJwYWNrOi8vLy4vfi9mdW5jdGlvbi1iaW5kL2luZGV4LmpzPzZiYmUiLCJ3ZWJwYWNrOi8vLy4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzP2MzMmQiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9lczUuanM/Y2MyMCIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9lczUuanM/YjdkYSIsIndlYnBhY2s6Ly8vLi9+L2lzLXJlZ2V4L2luZGV4LmpzP2IyNzAiLCJ3ZWJwYWNrOi8vLy4vfi9oYXMvc3JjL2luZGV4LmpzPzVkMDYiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbXBsZW1lbnRhdGlvbi5qcz8wNjkwIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvcG9seWZpbGwuanM/ZDZlNCIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL3NoaW0uanM/OWFkNyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N2Zy9zdmctZGVmcy5zdmc/YTRhYSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy92cHMuanM/YjMwZCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9zaW1wbGUuanM/NmIzMiIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9zbXMuanM/N2M3MCIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzP2RlMGIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLWdhLmpzPzBlNTciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLXlvdXR1YmUuanM/MTJjYyJdLCJuYW1lcyI6WyJyZWdpc3RlckNvbnRyb2wiLCJlbGVtZW50IiwiYWRkQ2xhc3MiLCJleGNsdWRlQXJyYXkiLCJzb3VyY2UiLCJkaXN0IiwicmVzdWx0IiwiY29uY2F0IiwiZm9yRWFjaCIsImluZGV4IiwiaW5kZXhPZiIsIml0ZW0iLCJzcGxpY2UiLCJkZWZhdWx0T3B0aW9ucyIsImVudGl0eSIsImF1dG9wbGF5IiwiaGVpZ2h0IiwibG9vcCIsIm11dGVkIiwicHJlbG9hZCIsInBvc3RlciIsInN2Z1BhdGgiLCJpbm5hY3Rpdml0eVRpbWVvdXQiLCJyYXRlIiwic3RlcCIsIm1pbiIsIm1heCIsImRlZmF1bHQiLCJwbGF5YmFjayIsInNob3J0IiwibWVkaXVtIiwibG9uZyIsImNvbnRyb2xzIiwiY29tbW9uIiwiZnVsbHNjcmVlbiIsIm1pbmkiLCJjb250cm9sc09wdGlvbnMiLCJhbGlnbiIsInZvbHVtZSIsIm11dGVsaW1pdCIsImtleUJpbmRpbmciLCJrZXkiLCJpbmZvIiwiZGVzY3JpcHRpb24iLCJmbiIsInBsYXllciIsInZpZGVvIiwidG9nZ2xlUGxheSIsImN1cnJlbnRUaW1lIiwib3B0aW9ucyIsInNwbGFzaEljb24iLCJzaG93Iiwic2hpZnRLZXkiLCJzZWN0aW9ucyIsInByZXYiLCJuZXh0IiwiY2FsY1ZvbHVtZUljb24iLCJ0b2dnbGVGdWxsc2NyZWVuIiwicGx1Z2lucyIsIm1pbmlwbGF5ZXIiLCJvblBsYXllckluaXRlZCIsIlBsYXllciIsImNyZWF0ZUVsZW1lbnQiLCJfZWxlbWVudCIsImlubmVyRWxlbWVudCIsIl91c2VyT3B0aW9ucyIsIl9pbml0T3B0aW9ucyIsIl9sb2FkU1ZHU3ByaXRlIiwiZGVmYXVsdFNwcml0ZSIsIl92aWV3IiwibG9hZEVudGl0eSIsImN0eCIsIl9pbml0Q29udHJvbHMiLCJfZGJsY2xpY2tUaW1lb3V0IiwiX2luaXRTZWN0aW9ucyIsInRoZW4iLCJkYXRhIiwic2VjdGlvbnNDb21wb25lbnQiLCJ0cmlnZ2VyIiwiX2luaXRQbHVnaW5zIiwiX2xpc3RlbkhvdEtleXMiLCJfdXNlckFjdGl2aXR5IiwiX2xpc3RlblVzZXJBY3Rpdml0eSIsIl93YWl0aW5nVGltZW91dHMiLCJvbiIsImV2ZW50TmFtZSIsIm9uZSIsInJlbW92ZUNsYXNzIiwidGltZSIsImR1cmF0aW9uIiwiZXJyb3IiLCJfc3RhcnRXYWl0aW5nIiwiX3N0b3BXYXl0aW5nIiwiZSIsInVybCIsInBsYXkiLCJwYXVzZWQiLCJwYXVzZSIsImNvZGUiLCJpbml0Iiwic3JjIiwiX29uRnVsbHNjcmVlbkNoYW5nZSIsImJpbmQiLCJfb25DbGljayIsIl9vbkRiY2xpY2siLCJfb25Jbml0ZWQiLCJfb25QbGF5IiwiX29uUGF1c2UiLCJkb2N1bWVudCIsImZ1bGxzY3JlZW5jaGFuZ2UiLCJfb25FbnRpdHlGdWxsc2NyZW5DaGFuZ2UiLCJuYW1lIiwiRW50aXR5IiwiZ2V0Q29tcG9uZW50IiwiX2VudGl0eSIsImxvYWQiLCJ2aWV3IiwiYXJncyIsImRmZCIsIkRlZmVycmVkIiwiX2RhdGEiLCJ1bmRlZmluZWQiLCJyZXNvbHZlIiwicHJvbWlzZSIsImFqYXgiLCJtZXRob2QiLCJkYXRhVHlwZSIsImdldERhdGEiLCJmc0FwaSIsInJlcXVlc3RGdWxsc2NyZWVuIiwic3VwcG9ydHNGdWxsU2NyZWVuIiwiZW50ZXJGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJ3aWR0aCIsImxlbmd0aCIsIm5ld1NlY3Rpb25zIiwiaSIsImVuZFNlY3Rpb24iLCJiZWdpbiIsImVuZCIsImF0dHIiLCJjc3MiLCJlcnJvckRpc3BsYXkiLCJwbGF5QnV0dG9uIiwibG9hZGVyIiwiYXBwZW5kIiwiaWNvbk5hbWUiLCJjbGFzc05hbWUiLCJ2aWRlb0NvbnRhaW5lciIsImxhc3RUaW1lciIsInZpZGVvSW5mbyIsImNvbnNvbGUiLCJ3YXJuIiwiaW5mb0VsZW1lbnQiLCJodG1sIiwidGl0bGUiLCJzZWN0aW9uQ29udGFpbmVyIiwic2VjdGlvbnNDb250YWluZXIiLCJiZWZvcmUiLCJhdHRyT3B0aW9ucyIsInJlZHVjZSIsIm9iaiIsInZhbCIsInNvdXJjZXMiLCJmaW5kIiwiZWFjaCIsInZhbHVlIiwiX29wdGlvbnNGcm9tRWxlbWVudCIsInByZXNldE9wdGlvbnMiLCJwcmVzZXQiLCJnZXRQcmVzZXQiLCJleHRlbmQiLCJBcnJheSIsImlzQXJyYXkiLCJleGNsdWRlQ29udHJvbHMiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnRyb2xDb2xsZWN0aW9uIiwicm93IiwiaW5pdE9wdGlvbnMiLCJhY3RpdmUiLCJpc0tleUJpbmRpbmciLCJiaW5kaW5nIiwid2hpY2giLCJjdHJsS2V5IiwicHJldmVudERlZmF1bHQiLCJyZWplY3QiLCJnZXRTZWN0aW9uRGF0YSIsImRvbmUiLCJpc1NlY3Rpb25PdXRzaWRlIiwiX2NvbXBsZXRlU2VjdGlvbnMiLCJpdGVtcyIsImZ1bGxzY3JlZW5Pbmx5IiwiaGlkZVNjcm9sbCIsIm91dHNpZGVTZWN0aW9ucyIsInBsdWdpbk9wdGlvbnMiLCJtb3VzZUluUHJvZ3Jlc3MiLCJsYXN0TW92ZVgiLCJsYXN0TW92ZVkiLCJvbk1vdXNlTW92ZSIsInNjcmVlblgiLCJzY3JlZW5ZIiwib25Nb3VzZURvd24iLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJvbk1vdXNlVXAiLCJpbmFjdGl2aXR5VGltZW91dCIsImRlbGF5IiwidXNlckFjdGl2ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJwdXNoIiwiY2FsbCIsImZvY3VzIiwiaXNGcyIsImZ1bGxzY3JlZW5FbGVtZW50IiwiZW5kZWQiLCJfZXJyb3IiLCJoaWRlIiwiX3VzZXJBY3RpdmUiLCJnZXRVc2VyQWN0aXZlIiwidG9nZ2xlQ2xhc3MiLCJwbHVnaW4iLCJwcm90b3R5cGUiLCJyZWdpc3RlckNvbXBvbmVudCIsImdldENvbnRyb2wiLCJzZWNvbmRzVG9UaW1lIiwiX3ByZXNldHMiLCJDb29raWUiLCJzdmciLCJoaWRkZW5FbGVtZW50IiwicHJlcGVuZCIsInJlcXVpcmUiLCJ2ZXJzaW9uIiwid2luZG93IiwiJCIsImxlUGxheWVyIiwib2Zmc2V0U2hvdyIsIm9mZnNldCIsInRvcCIsIm91dGVySGVpZ2h0IiwiZ2V0Q29udHJvbHMiLCJjb250cm9sT3B0aW9ucyIsImNvbnRyb2wiLCJkaXNhYmxlIiwiaXNGdW5jdGlvbiIsImdldFdpZHRoIiwiX3VwZGF0ZU1pbmlQbGF5ZXIiLCJmb3JjZSIsInNjcm9sbFRvcCIsImhpZGVNaW5pUGxheWVyIiwic2hvd01pbmlQbGF5ZXIiLCJvblNldFZpZXciLCJvbkRlbFZpZXciLCJtb2R1bGUiLCJleHBvcnRzIiwiQ29udHJvbCIsImNsaWNrIiwibGVwbGF5ZXJfY29udHJvbF9jbGljayIsIm9uQ2xpY2siLCJpY29uIiwiYXR0cnMiLCJyb2xlIiwiYnVpbGRDU1NDbGFzcyIsImFyZ3VtZW50cyIsIl9kaXNhYmxlIiwiX2NvbnRyb2xzIiwiY29udHJvbENsYXNzIiwiQ29tcG9uZW50IiwiX19ub2RlIiwiYmx1ciIsImV2ZW50IiwiRXZlbnQiLCJ0cmlnZ2VySGFuZGxlciIsImZsYWciLCJoYXNDbGFzcyIsImNvbXBvbmVudCIsIl9jb21wb25lbnRzIiwiSWNvbiIsIl91c2VUYWciLCJjcmVhdGVFbGVtZW50TlMiLCJfc3ZnVGFnIiwiX2ljb25OYW1lIiwiYXBwZW5kQ2hpbGQiLCJhdHRyTlMiLCJyZW1vdmVBdHRyaWJ1dGVOUyIsInNldEF0dHJpYnV0ZU5TIiwiUGxheUJ1dHRvbiIsImlubmVyIiwicGVyY2VudGlmeSIsImNyZWF0ZUVsIiwibm9vcCIsInNlY29uZHMiLCJzaG93SG91cnMiLCJoIiwiTWF0aCIsImZsb29yIiwibSIsInMiLCJvdXQiLCJwZXJjZW50IiwidGFnIiwicHJvcHMiLCJnZXRTY3JvbGxCYXJXaWR0aCIsIm91dGVyIiwidmlzaWJpbGl0eSIsIm92ZXJmbG93IiwiYXBwZW5kVG8iLCJ3aWR0aFdpdGhTY3JvbGwiLCJvdXRlcldpZHRoIiwicmVtb3ZlIiwiU3BsYXNoSWNvbiIsIlRpbWUiLCJ1cGRhdGVUZXh0IiwidGV4dCIsIkNvbnRyb2xDb2xsZWN0aW9uIiwicGxheWVyT3B0aW9ucyIsImluZGV4Um93IiwiY3JlYXRlIiwiY29sbGVjdGlvbiIsIl9yb3dzIiwiYWRkUm93IiwiZWxlbVJvdyIsImZpcnN0Iiwic2Vjb25kIiwiZ2xvYmFsQWxpZ24iLCJyb3dBbGlnbiIsImNvbnRyb2xOYW1lIiwiYWRkQ29udHJvbCIsIl9nZXRDb250cm9sT3B0aW9ucyIsIlNlY3Rpb25zIiwic2Nyb2xsRWxlbWVudCIsIl9pbm5lckVsZW1lbnQiLCJhY3RpdmVTZWN0aW9uIiwiZ2V0U2VjdGlvbkJ5SW5kZXgiLCJzZXRBY3RpdmVCeUluZGV4Iiwib25TZWN0aW9uQ2xpY2siLCJfb25TZWN0aW9uc1RvZ2dsZSIsIm9uVGltZVVwZGF0ZSIsInVwZGF0ZVNlY3Rpb25EdXJhdGlvbiIsInNlY3Rpb25JbmRleCIsInBhcnNlSW50IiwibmV3SW5kZXgiLCJyaWdodCIsIl9jcmVhdGVTZWN0aW9ucyIsInNlY3Rpb24iLCJ0YXJnZXQiLCJjbG9zZXN0IiwidG9wUG9zaXRpb24iLCJwb3NpdGlvbiIsImFuaW1hdGUiLCJlbmRTZWN0aW9uVGltZSIsImNoZWNrZWQiLCJ0b1N0cmluZyIsIm5leHRJbmZvIiwidHJpbSIsInJlcGxhY2VXaXRoIiwiY3JlYXRlU2VjdGlvbiIsIkVycm9yRGlzcGxheSIsIm1lc3NhZ2UiLCJvblBsYXllckVycm9yIiwiUG9zdGVyIiwiX3VybCIsIkZ1bGxzY3JlZW5BcGkiLCJhcGlNYXAiLCJzcGVjQXBpIiwiYnJvd3NlckFwaSIsImRmbHQiLCJjb29raWVzIiwiY29va2llIiwic3BsaXQiLCJkIiwiRGF0ZSIsInNldERhdGUiLCJ5ZWFyIiwiVVNFUl9BR0VOVCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIklTX01PQklMRSIsInRlc3QiLCJJU19DSFJPTUUiLCJJU19BTkRST0lEIiwiSVNfQU5EUk9JRF9QSE9ORSIsIklTX0lQQUQiLCJJU19JUEhPTkUiLCJJU19JUE9EIiwiSVNfSU9TIiwiSVNfU0FGQVJJIiwiTWVkaWFFcnJvciIsImRlZmF1bHRNZXNzYWdlcyIsImVycm9yVHlwZXMiLCJlcnJOdW0iLCJQbGF5Q29udHJvbCIsInNob3dQYXVzZSIsInNob3dQbGF5Iiwic2hvd1JlcGxheSIsInJlbW92ZVJlcGxheSIsIkluZmluaXR5IiwiX3JlcGxheSIsIlZvbHVtZUNvbnRyb2wiLCJkcmFnIiwibWFya2VyIiwibGluZSIsInAiLCJnZXRQb3NpdGlvbiIsInBhZ2VZIiwiZHJvcGRvd25Db250ZW50IiwibW91c2Vtb3ZlIiwibW91c2V1cCIsInkiLCJ0b2dnbGVNdXRlZCIsImRlZmF1bHRWb2x1bWUiLCJyb3VuZCIsIkNvbnRyb2xEcm9wZG93biIsIlRpbWVsaW5lQ29udHJvbCIsIl9vbk1hcmtlck1vdXNlbW92ZSIsIl9vbk1hcmtlck1vdXNlZG93biIsIm9uU2VjdGlvbnNJbml0IiwiX29uVGltZVVwZGF0ZSIsIl9vbkR1cmF0aW9uQ2hhbmdlIiwibWFya2VyU2hhZG93IiwieCIsIm1hcmtlclRpbWUiLCJpc05hTiIsIm1vdmUiLCJ0b3RhbFRpbWUiLCJwbGF5ZWRSYW5nZXMiLCJidWZmZXJlZFJhbmdlcyIsInBhZ2VYIiwibW91c2VsZWF2ZSIsIm1vdXNlZG93biIsIl9vbkxpbmVDbGljayIsInRvdWNobW92ZSIsInVwZGF0ZVNlY3Rpb25SYW5nZXMiLCJjcmVhdGVTZWN0aW9uUmFuZ2VzIiwibGVmdCIsInVwZGF0ZUxhYmVscyIsIndhdGNoQnVmZmVySW50ZXJ2YWwiLCJ1cGRhdGVQcm9ncmVzc0JhciIsIkVORCIsIlNUQVJUIiwibG9hZGVkIiwiZG9tSXRlbSIsImFkZCIsImJ1ZmZlcmVkIiwibG9hZGVkU2l6ZSIsIkNvbnRyb2xUZXh0IiwiX3RleHQiLCJCdWZmZXJlZFJhbmdlcyIsInVwZGF0ZSIsInJhbmdlIiwiTWFya2VyIiwiX29uTW91c2Vkb3duIiwiX2RyYWciLCJTZWN0aW9uQ29udHJvbCIsIl9vblNlY3Rpb25zSW5pdCIsIkNvbnRyb2xDaGVja2JveCIsIm9uQ2hlY2tlZCIsIl9jaGVja2VkIiwiRnVsbHNjcmVlbkNvbnRyb2wiLCJSYXRlQ29udHJvbCIsImRvd25Db250cm9sIiwiZGVjcmVhc2VSYXRlIiwidXBDb250cm9sIiwiaW5jcmVhc2VSYXRlIiwiY3VycmVudFJhdGUiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInJlcGxhY2UiLCJyYXRlTWluIiwicmF0ZU1heCIsImdldCIsIkJhY2t3YXJkQ29udHJvbCIsIlNvdXJjZUNvbnRyb2wiLCJwbGF5YmFja1F1YWxpdHkiLCJnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzIiwiQ29udHJvbENvbnRhaW5lciIsIl9hY3RpdmUiLCJsaXN0IiwiY29udGVudCIsInRvb2x0aXAiLCJvbkl0ZW1DbGljayIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50VmFsdWUiLCJnZXRDdXJyZW50VmFsdWUiLCJlbXB0eSIsImVsZW0iLCJhZGRJdGVtIiwiU3VidGl0bGVDb250cm9sIiwidHJhY2siLCJzdG9wUHJvcGFnYXRpb24iLCJoYXNWYWx1ZSIsInN1YnRpdGxlcyIsIkRvd25sb2FkQ29udHJvbCIsIm9uTG9hZFN0YXJ0IiwiaHJlZiIsImRvd25sb2FkIiwibGluayIsInBhcnNlciIsImZpbGVOYW1lIiwicGF0aG5hbWUiLCJLZXlCaW5kaW5nSW5mb0NvbnRyb2wiLCJpbmZvQ29udGVudCIsIl9rZXkiLCJob3RrZXkiLCJrZXlTdHJpbmciLCJUaW1lSW5mb0NvbnRyb2wiLCJfY3VycmVudFRpbWVDb250cm9sIiwiX3RvdGFsVGltZUNvbnRyb2wiLCJIdG1sNSIsIm1lZGlhIiwiYnVmZmVyUmFuZ2VzIiwiX3BsYXliYWNrUXVhbGl0eSIsIm9uRHVyYXRpb25DaGFuZ2UiLCJvblByb2dyZXNzIiwib25TZWVraW5nIiwib25TZWVrZWQiLCJvblZvbHVtZUNoYW5nZSIsIm9uRGJsY2xpY2siLCJvblBsYXkiLCJvblBhdXNlIiwib25SYXRlQ2hhbmdlIiwib25FbmRlZCIsIm9uQ2FucGxheVRocm91Z2giLCJvbldhaXRpbmciLCJvbkVycm9yIiwicmVtb3ZlQXR0ciIsInByb3AiLCJtYXAiLCJfaW5pdFN1YnRpdGxlcyIsIl9pbml0VmlkZW8iLCJfaW5pdFJhdGUiLCJfaW5pdFZvbHVtZSIsIndlYmtpdEVudGVyRnVsbFNjcmVlbiIsIm5ldHdvcmtTdGF0ZSIsIkhBVkVfTUVUQURBVEEiLCJ3ZWJraXRFeGl0RnVsbFNjcmVlbiIsInBsYXllZCIsInBsYXlQcm9taXNlIiwicGF1c2VQcm9taXNlIiwiX3NlbGYiLCJjaGlsZHJlbiIsImxhbmd1YWdlIiwicmVhZHlTdGF0ZSIsIkhUTUxNZWRpYUVsZW1lbnQiLCJIQVZFX05PVEhJTkciLCJfdGV4dFRyYWNrc0hhY2siLCJub3RpZnkiLCJ0ZXh0VHJhY2tzIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJwbGF5YmFja1JhdGUiLCJNT0JJTEVfTUFYX1JBVEUiLCJTQUZBUklfTUFYX1JBVEUiLCJNT0JJTEVfTUlOX1JBVEUiLCJTQUZBUklfTUlOX1JBVEUiLCJzdG9wIiwiX3NvdXJjZSIsIl90cmFjayIsIm1vZGUiLCJtdXRlIiwic2Vla2FibGUiLCJzdGFydCIsImN1cnJlbnRTcmMiLCJfdHJpZ2dlclN0YWNrIiwiX3N0b3BMaXN0ZW4iLCJkZWZhdWx0UmF0ZSIsIl9wb3N0ZXIiLCJpbm5lckhlaWdodCIsIl9yYXRlTWF4IiwiX3JhdGVNaW4iLCJzZXQiLCJsZXZlbHMiLCJzb21lIiwidmlkZW9QbGF5ZWQiLCJ2aWRlb1BsYXllZERlbHRhIiwidm9sdW1lQ2hhbmdlRGVsYXkiLCJyYXRlQ2hhbmdlRGVsYXkiLCJnYSIsInZvbHVtZUNoYW5nZVRpbWVvdXQiLCJOdW1iZXIiLCJyYXRlQ2hhbmdlVGltZW91dCIsInBsYXllZEV2ZW50c1NlbnQiLCJwbGF5ZWRQZXJjZW50YWdlIiwiZGVsdGEiLCJhYnMiLCJsb2FkUXVhbGl0eSIsInRyYWNrUHJvdmlkZSIsImxhbmd1YWdlQ29kZSIsImxhbmd1YWdlTmFtZSIsIllvdXR1YmUiLCJfcGF1c2VkIiwiYXZhaWxhYmxlUmF0ZXMiLCJhcnIiLCJ5dFBsYXllciIsIlFVQUxJVFlfTkFNRVMiLCJwbGF5VmlkZW8iLCJwYXVzZVZpZGVvIiwiYXBpTG9hZGVkIiwiaW5pdFlUUGxheWVyIiwieW91dHViZUVsZW1lbnQiLCJibG9ja2VyIiwiX2luaXRQcm9taXNlIiwiZ2xvYmFsT3B0aW9ucyIsInl0T3B0aW9ucyIsIml2X2xvYWRfcG9saWN5IiwibW9kZXN0YnJhbmRpbmciLCJyZWwiLCJzaG93aW5mbyIsImNjX2xvYWRfcG9saWN5IiwiZGlzYWJsZWtiIiwiZnMiLCJZVCIsInJlYWR5IiwidmlkZW9JZCIsInBsYXllclZhcnMiLCJldmVudHMiLCJvblJlYWR5Iiwib25ZVFBSZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJvbllUUFN0YXRlQ2hhbmdlIiwib25QbGF5YmFja1JhdGVDaGFuZ2UiLCJvbllUUFJhdGVDaGFuZ2UiLCJvblBsYXliYWNrUXVhbGl0eUNoYW5nZSIsIm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlIiwiZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcyIsInNldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMiLCJzdGF0ZSIsImxhc3RTdGF0ZSIsIlBsYXllclN0YXRlIiwiVU5TVEFSVEVEIiwiRU5ERUQiLCJQTEFZSU5HIiwic2V0UGxheWJhY2tRdWFsaXR5IiwiX25leHRQbGF5YmFja1F1YWxpdHkiLCJpc1NlZWtpbmciLCJsb2FkQ2FwdGlvbnMiLCJlbWl0VGltZXVwZGF0ZSIsIlBBVVNFRCIsIkJVRkZFUklORyIsInNlZWtpbmdJbnRlcnZhbCIsIndhc1BhdXNlZEJlZm9yZVNlZWsiLCJ0aW1lQmVmb3JlU2VlayIsImVtcHR5VHJhY2tsaXN0IiwiX2xvYWRDYXB0aW9uc1dhdGNoZXIiLCJfdHJhY2tzRGlzYWJsZSIsImNoZWNrQ2FwdGlvbnNFeGlzdCIsImxvYWRNb2R1bGUiLCJnZXRPcHRpb25zIiwiaWQiLCJwYXJzZVVybCIsImdldEN1cnJlbnRUaW1lIiwic2Vla1RvIiwiZ2V0RHVyYXRpb24iLCJOYU4iLCJnZXRQbGF5YmFja1JhdGUiLCJzZXRQbGF5YmFja1JhdGUiLCJ1bk11dGUiLCJpc011dGVkIiwiZ2V0T3B0aW9uIiwidW5sb2FkTW9kdWxlIiwic2V0T3B0aW9uIiwic3RhdHVzIiwiZ2V0UGxheWVyU3RhdGUiLCJDVUVEIiwiZ2V0UGxheWJhY2tRdWFsaXR5IiwiZ2V0Vm9sdW1lIiwic2V0Vm9sdW1lIiwicmVnZXgiLCJVUkxfUkVHRVgiLCJtYXRjaCIsInRpbnkiLCJzbWFsbCIsImxhcmdlIiwiaGQ3MjAiLCJoZDEwODAiLCJoaWdocmVzIiwiYXV0byIsIl9sb2FkZWQiLCJnZXRTY3JpcHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBQ0E7O0FBQ0EseUI7Ozs7OztBQ0ZBOzs7Ozs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQWhCQTs7O0FBbUJBLG1CQUFRQSxlQUFSLENBQXdCLFNBQXhCLEVBQW1DLFlBQVc7QUFDN0MsU0FBTztBQUNOQyxZQUFVLHNCQUFFLFFBQUYsRUFBWUMsUUFB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QSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEIsV0FBVztBQUNyQztBQUNBLG9EQUFtRCxVQUFVO0FBQzdEO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWdFO0FBQ2hFLEdBQUU7O0FBRUY7QUFDQTtBQUNBLG1DQUFrQyxhQUFhO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFF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QUFTLE9BTmM7QUFPdkJDLFdBQVUsSUFQYTtBQVF2QkMsUUFBTztBQVJnQixFQUF4Qjs7QUFXQXZGLFNBQVFRLFNBQVIsR0FBb0IsWUFBVztBQUFBOztBQUM5QixNQUFHLEtBQUtnRixPQUFSLEVBQWlCLE9BQU8saUJBQUU5aUIsUUFBRixHQUFhRyxPQUFiLEVBQVA7O0FBRWpCLFNBQU8saUJBQUU0aUIsU0FBRixDQUFZLG9DQUFaLEVBQ0wzbEIsSUFESyxDQUNBO0FBQUEsVUFBTSxPQUFLMGxCLE9BQUwsR0FBZSxJQUFyQjtBQUFBLEdBREEsQ0FBUDtBQUVBLEVBTEQ7O0FBT0F4bUIsUUFBT2tLLGlCQUFQLENBQXlCLFNBQXpCLEVBQW9DOFcsT0FBcEM7O0FBRUFoaEIsUUFBTzRHLE1BQVAsQ0FBYyxTQUFkLEVBQXlCO0FBQ3hCeEgsV0FBVTtBQUNUbkMsV0FBUyxTQURBO0FBRVRrQixhQUFXO0FBQ1ZDLFlBQVMsQ0FDUixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFVBQXZDLEVBQW1ELFFBQW5ELEVBQTZELFVBQTdELEVBQXlFLFNBQXpFLEVBQW9GLFNBQXBGLEVBQStGLFlBQS9GLENBRFEsRUFFUixFQUZRLENBREM7QUFLVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFVBQXZDLEVBQW1ELFFBQW5ELEVBQTZELFVBQTdELEVBQXlFLFNBQXpFLEVBQW9GLFNBQXBGLEVBQStGLFlBQS9GLENBRFk7QUFMSDtBQUZGO0FBRGMsRUFBekI7O0FBZUEyQixRQUFPZ0ssTUFBUCxDQUFjLFNBQWQsRUFBeUIsVUFBUzNCLGFBQVQsRUFBd0I7O0FBRWhEO0FBQ0EyWSxVQUFRUSxTQUFSO0FBQ0EsRUFKRCxFIiwiZmlsZSI6ImxlLXBsYXllci5mdWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODhmMWM1ZTAxNWZkYmVkYjhlMjEiLCJpbXBvcnQgJy4vbGUtcGxheWVyJ1xuaW1wb3J0ICcuL3BsdWdpbnMvbGUtcGxheWVyLWdhJ1xuaW1wb3J0ICcuL3BsdWdpbnMvbGUtcGxheWVyLXlvdXR1YmUnXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2xlLXBsYXllci5mdWxsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUGxheUJ1dHRvbic7XG5pbXBvcnQgU3BsYXNoSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvU3BsYXNoSWNvbic7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vY29tcG9uZW50cy9JY29uJztcbmltcG9ydCBUaW1lIGZyb20gJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lJztcbmltcG9ydCBDb250cm9sQ29sbGVjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24nO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9ucyc7XG5pbXBvcnQgRXJyb3JEaXNwbGF5IGZyb20gJy4vY29tcG9uZW50cy9FcnJvckRpc3BsYXknO1xuaW1wb3J0IFBvc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUG9zdGVyJztcbmltcG9ydCBGdWxsc2NyZWVuQXBpIGZyb20gJy4vRnVsbHNjcmVlbkFwaSc7XG5cbmltcG9ydCB7IGNyZWF0ZUVsLCBzZWNvbmRzVG9UaW1lLCBub29wIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4vdXRpbHMvY29va2llJztcbmltcG9ydCB7IElTX0lQSE9ORSwgSVNfSVBPRCwgSVNfQU5EUk9JRF9QSE9ORSB9IGZyb20gJy4vdXRpbHMvYnJvd3Nlcic7XG5cbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4vTWVkaWFFcnJvcic7XG5cbi8vIFJlZ2lzdGVyIGNvbW1vbiBjb250cm9sc1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUGxheUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvQmFja3dhcmRDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sJztcblxuaW1wb3J0ICcuL2VudGl0eS9IdG1sNSc7XG5cbmltcG9ydCAnYXJyYXkucHJvdG90eXBlLmZpbmQnO1xuXG5cbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkaXZpZGVyJywgZnVuY3Rpb24oKSB7XG5cdHJldHVybiB7XG5cdFx0ZWxlbWVudCA6ICQoJzxkaXYvPicpLmFkZENsYXNzKCdkaXZpZGVyJylcblx0fTtcbn0pO1xuXG5cblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgd2l0aCBleGNsdWRlZCBkaXN0J3MgaXRlbXMgZnJvbSBzb3VyY2UgYXJyYXlcbiAqXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZVxuICogQHBhcmFtIHtBcnJheX0gZGlzdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGV4Y2x1ZGVBcnJheShzb3VyY2UsIGRpc3QpIHtcblx0Y29uc3QgcmVzdWx0ID0gW10uY29uY2F0KHNvdXJjZSk7XG5cdGRpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRjb25zdCBpbmRleCA9IHJlc3VsdC5pbmRleE9mKGl0ZW0pO1xuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRyZXN1bHQuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0ZW50aXR5IDogJ0h0bWw1Jyxcblx0YXV0b3BsYXkgOiBmYWxzZSxcblx0aGVpZ2h0IDogJ2F1dG8nLFxuXHRsb29wIDogZmFsc2UsXG5cdG11dGVkIDogZmFsc2UsXG5cdHByZWxvYWQgOiAnbWV0YWRhdGEnLFxuXHRwb3N0ZXIgOiBudWxsLFxuXHRzdmdQYXRoIDogJycsXG5cdGlubmFjdGl2aXR5VGltZW91dCA6IDUwMDAsXG5cdHJhdGUgOiB7XG5cdFx0c3RlcCA6IDAuMjUsXG5cdFx0bWluIDogMC41LFxuXHRcdG1heCA6IDQuMCxcblx0XHRkZWZhdWx0IDogMVxuXHR9LFxuXHRwbGF5YmFjayA6IHtcblx0XHRzdGVwIDoge1xuXHRcdFx0c2hvcnQgOiA1LFxuXHRcdFx0bWVkaXVtIDogMTAsXG5cdFx0XHRsb25nIDogMzBcblx0XHR9XG5cdH0sXG5cdGNvbnRyb2xzIDoge1xuXHRcdGNvbW1vbiA6IFtcblx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0WydyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAna2V5YmluZGluZyBpbmZvJ11cblx0XHRdLFxuXHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAna2V5YmluZGluZyBpbmZvJywgICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ11cblx0XHRdLFxuXHRcdG1pbmkgOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbicsICdkaXZpZGVyJywgJ3RpbWVpbmZvJ11cblx0XHRdXG5cdH0sXG5cdGNvbnRyb2xzT3B0aW9ucyA6IHtcblxuXHRcdGNvbW1vbiA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ2xlZnQnXVxuXHRcdH0sXG5cblx0XHRmdWxsc2NyZWVuIDoge1xuXHRcdFx0YWxpZ24gOiAnanVzdGlmeSdcblx0XHR9XG5cdH0sXG5cdHZvbHVtZSA6IHtcblx0XHRkZWZhdWx0IDogMC40LFxuXHRcdG11dGVsaW1pdCA6IDAuMDUsXG5cdFx0c3RlcCA6IDAuMVxuXHR9LFxuXHRrZXlCaW5kaW5nIDogW1xuXHRcdHtcblx0XHRcdGtleSA6IDMyLFxuXHRcdFx0aW5mbyA6IFsnU3BhY2UnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cd0LDRh9Cw0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40LUgLyDQv9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzcsXG5cdFx0XHRpbmZvIDogWyfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INC90LDQt9Cw0LRgLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSBwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzksXG5cdFx0XHRpbmZvIDogWyfihpInXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INCy0L/QtdGA0ZHQtGAsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lICs9IHBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCdyZWRvJyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRpbmZvIDogWydTaGlmdCcsICfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cf0LXRgNC10LnRgtC4INC90LAg0L/RgNC10LTRi9C00YPRidGD0Y4g0YHQtdC60YbQuNGOJyxcblx0XHRcdGtleSA6IDM3LFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5wcmV2KCk7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdGtleSA6IDM5LFxuXHRcdFx0aW5mbyA6IFsnU2hpZnQnLCAn4oaSJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC50YLQuCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDRgdC10LrRhtC40Y4nLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5uZXh0KClcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM4LFxuXHRcdFx0aW5mbyA6IFsn4oaRJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0LPRgNC+0LzQutC+0YHRgtGMJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udm9sdW1lICs9IHBsYXllci5vcHRpb25zLnZvbHVtZS5zdGVwO1xuXG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3cocGxheWVyLmNhbGNWb2x1bWVJY29uKHBsYXllci52aWRlby52b2x1bWUpKTtcblxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHRrZXkgOiA0MCxcblx0XHRcdGluZm8gOiBbJ+KGkyddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0KPQvNC10L3RjNGI0LjRgtGMINCz0YDQvtC80LrQvtGB0YLRjCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnZvbHVtZSAtPSBwbGF5ZXIub3B0aW9ucy52b2x1bWUuc3RlcDtcblxuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KHBsYXllci5jYWxjVm9sdW1lSWNvbihwbGF5ZXIudmlkZW8udm9sdW1lKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdGtleSA6IDcwLFxuXHRcdFx0aW5mbyA6IFsnZiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J7RgtC60YDRi9GC0Ywv0LfQsNC60YDRi9GC0Ywg0L/QvtC70L3QvtGN0LrRgNCw0L3Ri9C5INGA0LXQttC40LwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRdLFxuXHRwbHVnaW5zIDoge1xuXHRcdG1pbmlwbGF5ZXIgOiB7fVxuXHR9LFxuXHRvblBsYXllckluaXRlZCA6IG5vb3Bcbn07XG5cbi8qKlxuICogQGNsYXNzIFBsYXllclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCBFbGVtZW50IHdoZW4gcGxheWVyIHdpbGwgaW5pdFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hdXRvcGxheT1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgdGhlIHZpZGVvIHdpbGwgYXV0b21hdGljYWxseSBzdGFydCBwbGF5aW5nIGFzIHNvb24gYXMgaXQgY2FuIGRvIHNvIHdpdGhvdXQgc3RvcHBpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IFtvcHRpb25zLmhlaWdodD0nYXV0byddIEhlaWdodCBvZiB2aWRlbyBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy53aWR0aF0gV2lkdGggb2YgdmlkZW8gY29udGFpbmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxvb3A9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSB2aWRlbyB3aWxsIHN0YXJ0IG92ZXIgYWdhaW4sIGV2ZXJ5IHRpbWUgaXQgaXMgZmluaXNoZWQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm11dGVkPWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgYXVkaW8gb3V0cHV0IG9mIHRoZSB2aWRlbyBzaG91bGQgYmUgbXV0ZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucHJlbG9hZD0nbWV0YWRhdGEnXSBDYW4gYmUgKCdhdXRvJ3wnbWV0YWRhdGEnfCdub25lJylcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wb3N0ZXJdIFBhdGggdG8gcG9zdGVyIG9mIHZpZGVvXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc3ZnUGF0aF0gUGF0aCB0byBzdmcgc3ByaXRlIGZvciBpY29uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnJhdGVdIFJhdGUgb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUuc3RlcD0wLjI1XSBTdGVwIG9mIGluY3JlYXNlL2RlY3JlYXNlIGJ5IHJhdGUgY29udHJvbFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWluPTAuNV0gTWluIG9mIHJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLm1heD00LjBdIE1heCBvZiByYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5kZWZhdWx0PTFdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGxheWJhY2tdIFBsYXliYWNrIG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwXVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAuc2hvcnQ9NV1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bT0zMF1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLmxvbmc9NjBdXG4gKiBAcGFyYW0ge09iZWpjdH0gW29wdGlvbnMuY29udHJvbHNdIE9iamVjdCBvZiBjb250cm9sc1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMuY29tbW9uXSBBcnJheSBvZiBjb250cm9scyBmb3IgZGVmYXVsdCB2aWV3XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5mdWxsc2NyZWVuXSBBcnJheSBvZiBjb250cm9sIGZvciBmdWxsc3JlZW4gdmlld1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMubWluaV0gQXJyYXkgb2YgY29udHJvbCBmb3IgbWluaXBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmV4Y2x1ZGVDb250cm9sc10gT2JqZWN0IG9mIGV4Y2x1ZGUgY29udHJvbHMuIFN0cnVjdHVyZSBpcyB0aGUgc2FtZSBhcyB0aGF0IG9mIG9wdGlvbnMuY29udHJvbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy52b2x1bWVdIFZvbHVtZSdzIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUuZGVmYXVsdD0wLjRdIERlZmF1bHQgdm9sdW1lXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLm11dGVsaW1pdD0wLjA1XSBEZWx0YSB3aGVuIHZvbHVtZSBpcyBtdXRlZFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5zdGVwPTAuMDVdXG4gKiBAcGFyYW0ge09iamVjdFtdfSBbb3B0aW9ucy5rZXliaW5kaW5nXVxuICogT2JqZWN0IHdpdGgga2V5YmluZGluZyBvcHRpb25zLCB3aGVuIGtleSBpdCdzIG5hbWUgb2Yga2V5IGJpbmRpbmcsIGFuZCB2YWx1ZSBpdCdzIGtleSBiaW5kaW5nIHNldHRpbmdzXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMua2V5YmluZGluZ1tdLmtleV0gQ29kZSBvZiBrZXkgYmluZGluZyAoZm9yIGV4YW1wbGUgMzIgaXQncyBzcGFjZSlcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmtleWJpbmRpbmdbXS5pbmZvXSBBcnJheSBvZiBrZXlzdHJva2VzIG9yZGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5rZXliaW5kaW5nW10uZGVzY3JpcHRpb25dIERlc2NyaXB0aW9uIG9mIGtleSBiaW5kaW5nXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmtleWJpbmRpbmdbXS5mbl0gQ2FsbGJhY2tcbiAqIEBwYXJhbSB7T2JqZWN0fEJvb2xlYW59IFtvcHRpb25zLm1pbmlwbGF5ZXI9ZmFsc2VdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWluaXBsYXllci53aWR0aF0gV2lkdGggb2YgbWluaXBsYXllciBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5taW5pcGxheWVyLndpZHRoXSBNaW5pUGxheWVyJ3Mgd2lkdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyXSBTZWxlY3RvciBmb3Igc2VjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbHVnaW5zXSBLZXlzIG9mIG9iamVjdHMgYXJlIG5hbWUgb2YgcGx1Z2luLCB2YWx1ZSAtIHBsdWdpbiBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IFtvcHRpb25zLmRhdGFdIFVybCBvciBKU09OIHdpdGggZGF0YSBmb3IgcGxheWVyXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5kYXRhLnNlY3Rpb25zXSBTZWN0aW9ucyBhcnJheVxuICovXG5cbmNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMuY3JlYXRlRWxlbWVudCA9IGZhbHNlO1xuXG5cdFx0c3VwZXIobnVsbCwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCBpbm5lciBvZiBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jyk7XG5cblx0XHQvLyBVc2VycyBvcHRpb25zXG5cdFx0dGhpcy5fdXNlck9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuX2luaXRPcHRpb25zKCk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc3ZnUGF0aCA9PT0gJycpIHtcblx0XHRcdFBsYXllci5fbG9hZFNWR1Nwcml0ZShQbGF5ZXIuZGVmYXVsdFNwcml0ZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlldyA9ICdjb21tb24nO1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIGFsbCBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cblx0XHR0aGlzLmxvYWRFbnRpdHkodGhpcy5vcHRpb25zLmVudGl0eSwgeyBjdHggOiBlbGVtZW50IH0pO1xuXHRcdC8qKlxuXHRcdCAqIFZpZGVvIGh0bWw1IGNvbXBvbmVudFxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge0VudGl0eX1cblx0XHQgKi9cblx0XHR0aGlzLnZpZGVvID0gdGhpcy5lbnRpdHk7XG5cblx0XHQvLyBDcmVhdGUgY29udHJvbHNcblx0XHQvLyBUT0RPOiBtb3ZlIHRoaXMgYWN0aW9uIHRvIHRoZSBjcmVhdGVFbGVtZW50XG5cdFx0dGhpcy5jb250cm9scyA9IHt9O1xuXHRcdHRoaXMuX2luaXRDb250cm9scygpO1xuXG5cdFx0LyoqXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fZGJsY2xpY2tUaW1lb3V0ID0gbnVsbDtcblxuXHRcdHRoaXMuX2luaXRTZWN0aW9ucygpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zQ29tcG9uZW50O1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIFNlY3Rpb25zIGluaXQgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlY3Rpb25zaW5pdFxuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHRcdFx0ICogcGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCAoZSwgZGF0YSkgPT4gY29zbm9sZS5sb2coZGF0YSkpO1xuXHRcdFx0ICpcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWN0aW9uc2luaXQnLCBkYXRhKTtcblx0XHR9KTtcblx0XHR0aGlzLl9pbml0UGx1Z2lucygpO1xuXG5cdFx0dGhpcy5fbGlzdGVuSG90S2V5cygpO1xuXG5cdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gZmFsc2U7XG5cdFx0dGhpcy5fbGlzdGVuVXNlckFjdGl2aXR5KCk7XG5cblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMgPSBbXTtcblxuXHRcdC8qIFJldHJpZ2dlciB7QGxpbmsgRW50aXR5fSBFdmVudHMgKi9cblx0XHRbXG5cdFx0XHQvKipcblx0XHRcdCAqIGR1cmF0aW9uY2hhbmdlIHBsYXllciBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZHVyYXRpb25jaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J2R1cmF0aW9uY2hhbmdlJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwcm9ncmVzcyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcHJvZ3Jlc3Ncblx0XHRcdCAqL1xuXHRcdFx0J3Byb2dyZXNzJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBkYmxjbGlja1xuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZGJjbGlja1xuXHRcdFx0ICovXG5cdFx0XHQnZGJsY2xpY2snLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGRibGNsaWNrXG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkYmNsaWNrXG5cdFx0XHQgKi9cblx0XHRcdCdjbGljaycsXG5cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBjYW5wbGF5IGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNjYW5wbGF5XG5cdFx0XHQgKi9cblx0XHRcdCdjYW5wbGF5JyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBxdWFsaXR5Y2hhbmdlIGh0bWw1XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNxdWFsaXR5Y2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdCdxdWFsaXR5Y2hhbmdlJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBxdWFsaXR5Y2hhbmdlIGh0bWw1XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN0cmFja3NjaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J3RyYWNrc2NoYW5nZScsXG5cblxuXG5cdFx0XS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG5cdFx0XHR0aGlzLnZpZGVvLm9uKGV2ZW50TmFtZSwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoZXZlbnROYW1lKTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uZSgncGxheScsICgpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmlyc3QgcGxheSBldmVudFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBldmVudCBQbGF5ZXIjZmlyc3RwbGF5XG4gICAgICAgICAgICAgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZmlyc3RwbGF5Jyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMudmlkZW8uY3VycmVudFRpbWUgPiAwKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiB0aW1ldXBkYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN0aW1ldXBkYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScsIHsgdGltZSA6IHRoaXMudmlkZW8uY3VycmVudFRpbWUsIGR1cmF0aW9uIDogdGhpcy52aWRlby5kdXJhdGlvbiB9KTtcblxuXHRcdH0pXG5cblx0XHR0aGlzLnZpZGVvLm9uKCdsb2Fkc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblxuXHRcdFx0dGhpcy5lcnJvciA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIGxvYWRzdGFydCBwbGF5ZXIgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2xvYWRzdGFydFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2luZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBzZWVraW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVraW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2VkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogc2Vla2VkIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVrZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3ZvbHVtZWNoYW5nZScsICgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogdm9sdW1lY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN2b2x1bWVjaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnLCB7IHZvbHVtZSA6IHRoaXMudmlkZW8udm9sdW1lIH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncG9zdGVyY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHVybCA9IGRhdGEudXJsO1xuXHRcdFx0dGhpcy5wb3N0ZXIudXJsID0gdXJsO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwb3N0ZXJjaGFuZ2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGxheWluZycpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwYXVzZScsICgpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1wbGF5aW5nJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGF1c2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BhdXNlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXlpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXlpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdyYXRlY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiByYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNyYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScsIHsgcmF0ZSA6IHRoaXMudmlkZW8ucmF0ZSB9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2VuZGVkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy5sb29wKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnZpZGVvLnBsYXkoKTtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMudmlkZW8ucGF1c2VkKSB7XG5cdFx0XHRcdHRoaXMudmlkZW8ucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBlbmRlZCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZW5kZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBjYW5wbGF5dGhyb3VnaCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjY2FucGxheXRocm91Z2hcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignd2FpdGluZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXG5cdFx0XHR0aGlzLnZpZGVvLm9uZSgndGltZXVwZGF0ZScsICgpID0+IHRoaXMuX3N0b3BXYXl0aW5nKCkpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHdhaXRpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3dhaXRpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdlcnJvcicsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHR0aGlzLmVycm9yID0gbmV3IE1lZGlhRXJyb3IoZGF0YS5jb2RlKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8uaW5pdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBQbGF5ZXIgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjaW5pdGVkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignaW5pdGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy50aW1lKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLm9wdGlvbnMudGltZTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy52aWRlby5zcmMgIT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuYXV0b3BsYXkpIHtcblx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0aGlzLl9vbkZ1bGxzY3JlZW5DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignY2xpY2snLCB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2RibGNsaWNrJywgdGhpcy5fb25EYmNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2luaXRlZCcsIHRoaXMuX29uSW5pdGVkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ3BsYXknLCB0aGlzLl9vblBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbigncGF1c2UnLCB0aGlzLl9vblBhdXNlLmJpbmQodGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub24oRnVsbHNjcmVlbkFwaS5mdWxsc2NyZWVuY2hhbmdlLCB0aGlzLl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGdldCBlbnRpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VudGl0eTtcblx0fVxuXG5cdGxvYWRFbnRpdHkobmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IEVudGl0eSA9IFBsYXllci5nZXRDb21wb25lbnQobmFtZSk7XG5cdFx0dGhpcy5fZW50aXR5ID0gbmV3IEVudGl0eSh0aGlzLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgcGxheWluZyB0aGUgdmlkZW9cblx0ICpcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKFwiI3ZpZGVvXCIpLG9wdGlvbnMpO1xuXHQgKiAkKCcuc29tZS1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiBwbGF5ZXIucGxheSgpKTtcblx0ICovXG5cdHBsYXkoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGxheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhdXNlcyB0aGUgY3VycmVudGx5IHBsYXlpbmcgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdHBhdXNlKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnBhdXNlKCk7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBjdXJyZW50bHkgcGxheWluZyB2aWRlb1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0dG9nZ2xlUGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby50b2dnbGVQbGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQmVnaW4gbG9hZGluZyB0aGUgc3JjIGRhdGFcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdGxvYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ubG9hZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIHNldCB2aWV3IGNhbGxiYWNrXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3IFZpZXcgbmFtZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHQgKiBwbGF5ZXIub25TZXRWaWV3KCdtaW5pJywgKCkgPT4gY29uc29sZS5sb2coJ01pbmlwbGF5ZXIgeWVhaCEnKVxuXHQgKiAgICAgLm9uU2V0VmlldygnZnVsbHNjcmVlbicsICgpID0+IGNvbnNvbGUubG9nKCdGdWxsc2NyZWVuIGJvb20hJylcblx0ICogICAgIC5vblNldFZpZXcoJ2NvbW1vbicsICgpID0+IGNvbnNvbGUubG9nKCdDb21tb24gdmlldyAtIGxvbCcpO1xuXHQgKi9cblx0b25TZXRWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBzZXR2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGRlbCB2aWV3IGNhbGxiYWNrXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3IFZpZXcgbmFtZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHQgKiBwbGF5ZXIub25EZWxWaWV3KCdtaW5pJywgKCkgPT4gY29uc29sZS5sb2coJ0V4aXQgbWluaXBsYXllcicpXG5cdCAqL1xuXHRvbkRlbFZpZXcodmlldywgLi4uYXJncykge1xuXHRcdHRoaXMub24oYGRlbHZpZXcuJHt2aWV3fWAsIC4uLmFyZ3MpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHNvbWUgZGF0YSBmb3IgcGxheWVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEByZXR1cm5zIHtqUXVlcnkucHJvbWlzZX0gUHJvbWlzZVxuXHQgKi9cblx0Z2V0RGF0YSgpIHtcblx0XHRjb25zdCBkZmQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXG5cdFx0aWYgKHRoaXMuX2RhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGZkLnJlc29sdmUodGhpcy5fZGF0YSk7XG5cdFx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJC5hamF4KHtcblx0XHRcdFx0dXJsIDogdGhpcy5vcHRpb25zLmRhdGEsXG5cdFx0XHRcdG1ldGhvZCA6ICdHRVQnLFxuXHRcdFx0XHRkYXRhVHlwZSA6ICdqc29uJ1xuXHRcdFx0fSkucHJvbWlzZSgpO1xuXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRkZmQucmVzb2x2ZSh0aGlzLm9wdGlvbnMuZGF0YSk7XG5cdFx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHRcdH1cblx0fVxuXG5cdGdldFNlY3Rpb25EYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLmdldERhdGEoKVxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnNlY3Rpb25zXG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlcXVlc3QgZnVsbHNjcmVlblxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZmlyZXMgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0ICovXG5cdHJlcXVlc3RGdWxsc2NyZWVuKCkge1xuXHRcdGNvbnN0IGZzQXBpID0gRnVsbHNjcmVlbkFwaTtcblxuXHRcdGlmKGZzQXBpLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG5cdFx0XHQvLyBDYWxsIEhUTUw1IFZpZGVvIGFwaSByZXF1ZXN0RnVsbHNjcmVlblxuXHRcdFx0dGhpcy5lbGVtZW50WzBdW2ZzQXBpLnJlcXVlc3RGdWxsc2NyZWVuXSgpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIGZ1bGxzY3JlZW5jaGFuZ2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJ1ZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnZpZGVvLnN1cHBvcnRzRnVsbFNjcmVlbigpKSB7XG5cdFx0XHR0aGlzLnZpZGVvLmVudGVyRnVsbHNjcmVlbigpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGl0IGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHRleGl0RnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cblx0XHRpZihmc0FwaS5leGl0RnVsbHNjcmVlbikge1xuXHRcdFx0ZG9jdW1lbnRbZnNBcGkuZXhpdEZ1bGxzY3JlZW5dKCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnZpZGVvLnN1cHBvcnRzRnVsbFNjcmVlbigpKSB7XG5cdFx0XHR0aGlzLnZpZGVvLmV4aXRGdWxsc2NyZWVuKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJywgZmFsc2UpO1xuXG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHR0b2dnbGVGdWxsc2NyZWVuKCkge1xuXHRcdGlmKHRoaXMudmlldyA9PT0gJ2Z1bGxzY3JlZW4nKSB7XG5cdFx0XHR0aGlzLmV4aXRGdWxsc2NyZWVuKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZXF1ZXN0RnVsbHNjcmVlbigpXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBDb250cm9sQ29sbGVjdGlvbiBvZiBQbGF5ZXIgYnkgbmFtZSAoZS54ICdjb21tb24nLCAnZnVsbHNjcmVlbicpXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gTmFtZSBvZiBDb250cm9sQ29sbGVjdGlvblxuXHQgKiBAcmV0dXJucyB7Q29udHJvbENvbGxlY3Rpb259XG5cdCAqL1xuXHRnZXRDb250cm9scyhuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbbmFtZV07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB3aWR0aCBvZiBwbGF5ZXIuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFdpZHRoIGluIHB4XG5cdCAqL1xuXHRnZXRXaWR0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LndpZHRoKClcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wbGV0ZSB0aGUgc2VjdGlvbnMsIGJ5IHRoZSBhZGRpdGlvbmFsIGZpZWxkICdlbmQnIGluIGVhY2ggc2VjdGlvblxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtPYmplY3R9IHNlY3Rpb25zIC0gU2VjdGlvbnNcblx0ICogQHJldHVybnMge09iamVjdH0gTmV3IHNlY3Rpb25zXG5cdCAqL1xuXHRfY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucykge1xuXHRcdGlmIChzZWN0aW9ucyA9PSBudWxsIHx8IHNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBuZXdTZWN0aW9ucyA9IFtdLmNvbmNhdChzZWN0aW9ucylcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgZW5kU2VjdGlvbjtcblx0XHRcdGlmIChpIDwgKG5ld1NlY3Rpb25zLmxlbmd0aCAtIDEpKSB7XG5cdFx0XHRcdGVuZFNlY3Rpb24gPSBuZXdTZWN0aW9uc1tpKzFdLmJlZ2luXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbmRTZWN0aW9uID0gdGhpcy52aWRlby5kdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdG5ld1NlY3Rpb25zW2ldLmVuZCA9IGVuZFNlY3Rpb247XG5cdFx0fVxuXHRcdHJldHVybiBuZXdTZWN0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYW5kIHNldCB0aGUgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvbiBpbiB0aGUgYXVkaW8vdmlkZW8gKGluIHNlY29uZHMpXG5cdCAqIEdldHRlciBhbmQgc2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TnVibWVyfVxuXHQgKi9cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0dGhpcy52aWRlby5jdXJyZW50VGltZSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgY3VycmVudCBhdWRpby92aWRlbyAoaW4gc2Vjb25kcylcblx0ICogR2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TnVibWVyfVxuXHQgKi9cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmR1cmF0aW9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgd2hldGhlciB0aGUgcGxheWJhY2sgb2YgdGhlIGF1ZGlvL3ZpZGVvIGhhcyBlbmRlZCBvciBub3Rcblx0ICogR2V0dGVyXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBlbmRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5lbmRlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuZCBzZXQgd2hldGhlciB0aGUgcGxheWJhY2sgb2YgdGhlIGF1ZGlvL3ZpZGVvIGhhcyBlbmRlZCBvciBub3Rcblx0ICogR2V0dGVyIGFuZCBzZXR0ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqIEB0eXBlIHtNZWRpYUVycm9yfFN0cmluZ31cblx0ICogQGZpcmVzIFBsYXllciNlcnJvclxuXHQgKi9cblx0Z2V0IGVycm9yKCkge1xuXHRcdHJldHVybiB0aGlzLl9lcnJvciB8fCBudWxsO1xuXHR9XG5cblx0c2V0IGVycm9yKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9lcnJvciA9IG51bGw7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZXJyb3InKTtcblx0XHRcdGlmKHRoaXMuZXJyb3JEaXNwbGF5KSB7XG5cdFx0XHRcdHRoaXMuZXJyb3JEaXNwbGF5LmVsZW1lbnQuaGlkZSgpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0dGhpcy5fZXJyb3IgPSBuZXcgTWVkaWFFcnJvcih2YWx1ZSk7XG5cblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tZXJyb3InKTtcblxuXHRcdC8qKlxuXHRcdCAqIGVycm9yIGV2ZW50XG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgUGxheWVyI2Vycm9yXG5cdFx0ICogQHByb3BlcnR5IHtNZWRpYUVycm9yfSBlcnJvclxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdFx0ICogcGxheWVyLm9uKCdlcnJvcicsIChlLCBkYXRhKSA9PiBjb25zb2xlLmVycm9yKGRhdGEuZXJyb3IpKTtcblx0XHQgKi9cblx0XHR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgeyBlcnJvciA6IHRoaXMuX2Vycm9yfSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIGhlaWdodCBvZiBwbGF5ZXIuIElmIHlvdSB3YW50IGdldCBoZWlnaHQgb25seSBvZiB2aWRlbyBlbGVtZW50LCB1c2UgdGhpcy52aWRlby5oZWlnaHQgb3Igd2hhdGV2ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaGVpZ2h0KClcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdW5uZWNlc3NhcnkgdmlkZW8gaGVpZ3RoXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZGVvSGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmhlaWdodDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKiBAbWVibWVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB1c2VyQWN0aXZlKCkge1xuXHRcdHJldHVybiB0aGlzLl91c2VyQWN0aXZlIHx8IGZhbHNlO1xuXHR9XG5cblx0c2V0IHVzZXJBY3RpdmUodmFsdWUpIHtcblx0XHRpZih2YWx1ZSAhPT0gdGhpcy5nZXRVc2VyQWN0aXZlKSB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZlID0gdmFsdWU7XG5cdFx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdsZXBsYXllci0tdXNlci1hY3RpdmUnLCB2YWx1ZSk7XG5cdFx0XHQvKipcblx0XHRcdCAqIFVzZXIgYWN0aXZlIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN1c2VyYWN0aXZlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndXNlcmFjdGl2ZScpO1xuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldCBhbmQgZ2V0IHBsYXllciB2aWV3LiBWaWV3IENhbiBiZSAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nLCAnbWluaSd3XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtTdHJpbmd9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZXcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZpZXc7XG5cdH1cblxuXHRzZXQgdmlldyh2aWV3KSB7XG5cdFx0aWYodGhpcy52aWV3ICE9IG51bGwpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoYGxlcGxheWVyLS0ke3RoaXMudmlld31gKTtcblx0XHRcdHRoaXMudHJpZ2dlcihgZGVsdmlldy4ke3RoaXMudmlld31gKTtcblx0XHR9XG5cblx0XHR0aGlzLl92aWV3ID0gdmlldztcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoYGxlcGxheWVyLS0ke3ZpZXd9YClcblx0XHR0aGlzLnRyaWdnZXIoYHNldHZpZXcuJHt2aWV3fWApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXMsIGFuZCBzZXQgc29tZSBhdHRycyBmcm9tIG9wdGlvbnMgKGxvb3AsIHBvc3RlciBldGMuLi4pLiBDcmVhdGUgbWFpbiBET00gb2JqZWN0c1xuXHQgKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnKTtcblxuXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsIDApXG5cdFx0XHQuY3NzKCd3aWR0aCcsIG9wdGlvbnMud2lkdGggJiYgJzEwMCUnKVxuXHRcdFx0LmNzcygnbWF4LXdpZHRoJywgb3B0aW9ucy53aWR0aClcblxuXHRcdC8qKlxuXHRcdCAqIEVycm9yIGRpc3BsYXkgY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge0Vycm9yRGlzcGxheX1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLmVycm9yRGlzcGxheSA9IG5ldyBFcnJvckRpc3BsYXkodGhpcyk7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFBsYXkgYnV0dG9uIGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtQbGF5QnV0dG9ufVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMucGxheUJ1dHRvbiA9IG5ldyBQbGF5QnV0dG9uKHRoaXMpO1xuXG5cdFx0Ly8gVE9ETzog0JLRi9C90LXRgdGC0Lgg0Y3RgtC+INCyINC+0YLQtNC10LvRjNC90LXRi9C5INC60L7QvNC/0L7QvdC10L3RglxuXHRcdHRoaXMubG9hZGVyID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLWxvYWRlci1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLCB7XG5cdFx0XHRcdGljb25OYW1lIDogJ3JlZnJlc2gnLFxuXHRcdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItbG9hZGVyLWNvbnRhaW5lcl9faWNvbidcblx0XHRcdH0pLmVsZW1lbnQpO1xuXG5cblx0XHQvKipcblx0XHQgKiBTcGxhc2ggaWNvbiBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7U3BsYXNoSWNvbn1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLnNwbGFzaEljb24gPSBuZXcgU3BsYXNoSWNvbih0aGlzKTtcblxuXHRcdHRoaXMudmlkZW9Db250YWluZXIgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXZpZGVvJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZCh0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50KVxuXHRcdC5hcHBlbmQodGhpcy5wbGF5QnV0dG9uLmVsZW1lbnQpXG5cdFx0LmFwcGVuZCh0aGlzLmxvYWRlcilcblx0XHQuYXBwZW5kKHRoaXMuc3BsYXNoSWNvbi5lbGVtZW50KVxuXG5cdFx0dGhpcy5wb3N0ZXIgPSBuZXcgUG9zdGVyKHRoaXMpO1xuXHRcdHRoaXMudmlkZW9Db250YWluZXIuYXBwZW5kKHRoaXMucG9zdGVyLmVsZW1lbnQpO1xuXG5cblx0XHRjb25zdCBsYXN0VGltZXIgPSBuZXcgVGltZSh0aGlzLCB7XG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSBwbGF5ZXIudmlkZW87XG5cdFx0XHRcdHJldHVybiBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uIC0gdmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRpZih0aGlzLm9wdGlvbnMudmlkZW9JbmZvKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ29wdGlvbnMudmlkZW9JbmZvIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgaXN0ZWFkIG9wdGlvbnMuZGVzY3JpcHRpb24nKTtcblx0XHR9XG5cblx0XHR0aGlzLmluZm9FbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9faW5mbydcblx0XHR9KVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fdGl0bGUnLFxuXHRcdFx0aHRtbCA6IHRoaXMub3B0aW9ucy50aXRsZSB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX192aWRlby1pbmZvJyxcblx0XHRcdGh0bWwgOiB0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb24gfHwgdGhpcy5vcHRpb25zLnZpZGVvSW5mbyB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX19sYXN0Jyxcblx0XHRcdGh0bWwgOiBg0JLQuNC00LXQviDQt9Cw0LrQvtC90YfQuNGC0YHRjyDRh9C10YDQtdC3IGAsXG5cdFx0fSkuYXBwZW5kKGxhc3RUaW1lci5lbGVtZW50KSlcblxuXHRcdHRoaXMuaW5uZXJFbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX19pbm5lcicpXG5cdFx0XHQuYXBwZW5kKHRoaXMudmlkZW9Db250YWluZXIpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaW5mb0VsZW1lbnQpXG5cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5pbm5lckVsZW1lbnQpXG5cblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXG5cblx0XHRpZihvcHRpb25zLnNlY3Rpb25Db250YWluZXIpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIgPSAkKG9wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5iZWZvcmUodGhpcy5lbGVtZW50KTtcblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9wdGlvbnMgZnJvbSB2aWRlbydzIGF0dHJpYnV0ZSAoIGhlaWdodCwgd2lkdGgsIHBvc3RlciwgcHJlbG9hZCBldGMuLi4pXG5cdCAqIEdldCBzb3VyY2UgdmlkZW8gZnJvbSBzcmMgYXR0ciBvciA8c291cmNlPiBlbGVtZW50IHdpdGggZGF0YSBhdHRyICdkYXRhLXF1YWxpdHknXG5cdCAqIEFsc28gZ2V0IHNvdXJjZXMgZm9yIGRpZmZlcmVudCBxdWFsaXR5IGZyb20gPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge09iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0X29wdGlvbnNGcm9tRWxlbWVudCgpIHtcblx0XHQvLyBDb3B5IHZpZGVvIGF0dHJzIHRvIHRoZSBvcGl0b25zXG5cdFx0Y29uc3QgIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXHRcdGlmIChlbGVtZW50ID09IG51bGwgfHwgZWxlbWVudC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB7fVxuXHRcdH1cblxuXHRcdGxldCBhdHRyT3B0aW9ucyA9IFtcblx0XHRcdCdoZWlnaHQnLFxuXHRcdFx0J3dpZHRoJyxcblx0XHRcdCdwb3N0ZXInLFxuXHRcdFx0J2F1dG9wbGF5Jyxcblx0XHRcdCdsb29wJyxcblx0XHRcdCdtdXRlZCcsXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XVxuXHRcdC5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0aWYodmFsICE9IG51bGwpIHtcblx0XHRcdFx0b2JqW2l0ZW1dID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9LCB7fSk7XG5cblx0XHRhdHRyT3B0aW9ucy5zb3VyY2VzID0gW107XG5cblx0XHQvLyBTcmMgaXQgaXMgbWFpbiBzb3VyY2UsIHRoYXQgd2lsbCBiZSBsb2FkXG5cdFx0aWYoZWxlbWVudC5hdHRyKCdzcmMnKSkge1xuXHRcdFx0YXR0ck9wdGlvbnMuc3JjID0ge1xuXHRcdFx0XHR1cmwgOiBlbGVtZW50LmF0dHIoJ3NyYycpLFxuXHRcdFx0XHR0aXRsZSA6IGVsZW1lbnQuYXR0cignZGF0YS1xdWFsaXR5JykgfHwgZWxlbWVudC5hdHRyKCd0aXRsZScpIHx8ICdkZWZhdWx0J1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgc291cmNlcyBmcm9tIEhUTUw1IHNvdXJjZSBlbGVtZW50IHdpdGggZGF0YS1xdWFsaXR5IGF0dHJcblx0XHQvLyBJZiBkYXRhLXF1YWxpdHkgYXR0ciBkb2VzIG5vdCBleGlzdCAtIG5vXG5cdFx0ZWxlbWVudC5maW5kKCdzb3VyY2UnKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHRpdGVtID0gJChpdGVtKTtcblx0XHRcdGlmKCFpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpKSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IGF0dHJPcHRpb25zLnNvdXJjZXMuY29uY2F0KHtcblx0XHRcdFx0dXJsIDogaXRlbS5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGl0ZW0uYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH0pXG5cblx0XHR9KTtcblxuXHRcdHJldHVybiBhdHRyT3B0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBuYW1lIG9mIGljb24uIElmIGxlc3MgdGhlbiAwLjEgcmV0dXJuIHZvbHVtZS1vZmYsXG5cdCAqIGlmIGxlc3MgdGhlbiAwLjUgcmV0dXJuIHZvbHVtZSBkb3duLCBlbHNlIHJldHVybiB2b2x1bWUtdXBcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBWb2x1bWUgdmFsdWVcblx0ICogQHJldHVybnMge1N0cmluZ30gSWNvbiBuYW1lXG5cdCAqL1xuXHRjYWxjVm9sdW1lSWNvbih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHZhbHVlID0gdGhpcy52aWRlby52b2x1bWU7XG5cdFx0fVxuXHRcdGNvbnN0IHZvbHVtZSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZvbHVtZSA8IHRoaXMub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1vZmYnO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwLjUpIHtcblx0XHRcdHJldHVybiAndm9sdW1lLWRvd24nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS11cCc7XG5cdFx0fVxuXHR9XG5cblxuXG5cdC8qKlxuXHQgKiBNZXJnZSBkZWZhdWx0T3B0aW9ucywgcHJlc2V0T3B0aW9ucyB3aXRoIGF0dHJPcHRpb25zIGFuZCB1c2VyJ3Mgb3B0aW9ucztcblx0ICpcblx0ICogQW5kIGNvbXBsZW1lbnQgdHdvIG9iamVjdHM6IGNvbnRyb2xzIGFuZCBleGNsdWRlQ29udHJvbHNcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfaW5pdE9wdGlvbnMoKSB7XG5cdFx0Y29uc3QgYXR0ck9wdGlvbnMgPSB0aGlzLl9vcHRpb25zRnJvbUVsZW1lbnQoKTtcblx0XHRsZXQgcHJlc2V0T3B0aW9ucyA9IHt9O1xuXG5cdFx0aWYgKHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCAmJiBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkpIHtcblx0XHRcdHByZXNldE9wdGlvbnMgPSBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkub3B0aW9ucztcblx0XHR9XG5cblxuXHRcdC8vIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyArIHByZXNldCBvcHRpb25zICsgdmlkZW8gYXR0cmlidXR0cysgdXNlciBvcHRpb25zXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIGRlZmF1bHRPcHRpb25zLCBwcmVzZXRPcHRpb25zLCBhdHRyT3B0aW9ucywgdGhpcy5fdXNlck9wdGlvbnMpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLnNvdXJjZXMgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnNvdXJjZXMpKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc291cmNlcyA9IFt0aGlzLm9wdGlvbnMuc291cmNlc11cblx0XHR9XG5cblx0XHRpZih0eXBlb2YgdGhpcy5vcHRpb25zLnNyYyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zcmMgPSB7IHVybCA6IHRoaXMub3B0aW9ucy5zcmMgfVxuXHRcdH1cblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zcmMgPT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuc291cmNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3JjID0gdGhpcy5vcHRpb25zLnNvdXJjZXNbMF1cblx0XHR9XG5cblx0XHQvLyBNZXJnZSBjb3JyZWN0bHkgY29udHJvbHMsIHdpdGhvdXQgZGVlcCBtZXJnZVxuXHRcdHRoaXMub3B0aW9ucy5jb250cm9scyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucy5jb250cm9scywgcHJlc2V0T3B0aW9ucy5jb250cm9scywgdGhpcy5fdXNlck9wdGlvbnMuY29udHJvbHMpO1xuXG5cdFx0Ly8gZXhjbHVkZSBjb250cm9scyBvcHRpb25cblx0XHQvLyBUT0RPKGFkaW52YWRpbSk6XG5cdFx0Ly8gU2V0IGRlcHJlY2V0ZWQgZmxhZyBmb3IgdGhpcyBvcHRpb247XG5cdFx0Zm9yIChjb25zdCBuYW1lIGluIHRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHMpIHtcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY29udHJvbENvbGxlY3Rpb24gPSB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzW25hbWVdO1xuXHRcdFx0Y29udHJvbENvbGxlY3Rpb24uZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdICYmIHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0pIHtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdID0gZXhjbHVkZUFycmF5KHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0sIHJvdyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5wcmVzZXQgJiYgUGxheWVyLmdldFByZXNldCh0aGlzLm9wdGlvbnMucHJlc2V0KSkge1xuXHRcdFx0UGxheWVyLmdldFByZXNldCh0aGlzLm9wdGlvbnMucHJlc2V0KS5pbml0T3B0aW9ucygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW5kIGluaXQgYWxsIGNvbnRyb2xzXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2luaXRDb250cm9scygpIHtcblx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgWydjb21tb24nLCAnZnVsbHNjcmVlbiddKSB7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY29udHJvbENvbGxlY3Rpb24gPSBuZXcgQ29udHJvbENvbGxlY3Rpb24odGhpcywgeyBuYW1lIH0pO1xuXHRcdFx0dGhpcy5lbGVtZW50LmFwcGVuZChjb250cm9sQ29sbGVjdGlvbi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jb250cm9scy5jb21tb24gIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scy5jb21tb24uYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXG5cdF9saXN0ZW5Ib3RLZXlzKCkge1xuXG5cdFx0Y29uc3QgaXNLZXlCaW5kaW5nID0gKGUsIGJpbmRpbmcpID0+IHtcblx0XHRcdHJldHVybiAoKGUud2hpY2ggPT09IGJpbmRpbmcua2V5KSB8fCAoZS5rZXkgPT09IGJpbmRpbmcua2V5KSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLnNoaWZ0S2V5ID09PSBlLnNoaWZ0S2V5KSAmJlxuXHRcdFx0XHRcdCghIWJpbmRpbmcuY3RybEtleSA9PT0gZS5jdHJsS2V5KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5ZG93bi5sZXBsYXllci5ob3RrZXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmcuZm9yRWFjaChiaW5kaW5nID0+IHtcblxuXHRcdFx0XHRpZihpc0tleUJpbmRpbmcoZSwgYmluZGluZykpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0YmluZGluZy5mbih0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgc2VjdGlvbnMsIGdldCBhamF4IG9yIGpzb24gd2l0aCBzZWN0aW9ucyBkYXRhIGFuZCBjcmVhdGUgU2VjdGlvbnMgb2JqZWN0IGFuZCBhZGRlZCB0aGVtIHRvIHRoZSBET01cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtqcVByb21pc2V9IGpRdWVyeSBwcm9taXNlXG5cdCAqL1xuXHRfaW5pdFNlY3Rpb25zKCkge1xuXHRcdGNvbnN0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5vcHRpb25zLmRhdGEgPT0gbnVsbCkge1xuXHRcdFx0ZGZkLnJlamVjdChudWxsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25EYXRhKCkuZG9uZShzZWN0aW9ucyA9PiB7XG5cdFx0XHRcdHNlY3Rpb25zID0gWy4uLnNlY3Rpb25zXTtcblxuXHRcdFx0XHRjb25zdCBpc1NlY3Rpb25PdXRzaWRlID0gKHRoaXMuc2VjdGlvbnNDb250YWluZXIgJiYgdGhpcy5zZWN0aW9uc0NvbnRhaW5lci5sZW5ndGggPiAwKTtcblxuXHRcdFx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRkZmQucmVqZWN0KG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlY3Rpb25zID0gdGhpcy5fY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucyk7XG5cblx0XHRcdFx0Y29uc3Qgc2VjdGlvbnNDb21wb25lbnQgPSBuZXcgU2VjdGlvbnModGhpcywge1xuXHRcdFx0XHRcdGl0ZW1zIDogc2VjdGlvbnMsXG5cdFx0XHRcdFx0ZnVsbHNjcmVlbk9ubHkgOiBpc1NlY3Rpb25PdXRzaWRlLFxuXHRcdFx0XHRcdGhpZGVTY3JvbGwgOiB0cnVlXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuaW5uZXJFbGVtZW50LmFwcGVuZChzZWN0aW9uc0NvbXBvbmVudC5lbGVtZW50KTtcblxuXHRcdFx0XHRpZiAoaXNTZWN0aW9uT3V0c2lkZSkge1xuXHRcdFx0XHRcdGNvbnN0IG91dHNpZGVTZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0XHRpdGVtcyA6IHNlY3Rpb25zXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5zZWN0aW9uc0NvbnRhaW5lci5hcHBlbmQob3V0c2lkZVNlY3Rpb25zLmVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRmZC5yZXNvbHZlKHsgc2VjdGlvbnNDb21wb25lbnQsIGl0ZW1zIDogc2VjdGlvbnMgfSk7XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpXG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb24sIHRoYW4gaW5pdCBhbGwgcGx1Z2lucyBmcm9tIHBsYXllciBvcHRpb25zLlxuXHQgKiBJZiBwbHVnaW4gZG9lc24ndCBleGlzdCB0aHJvdyBhbiBlcnJvclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0X2luaXRQbHVnaW5zKCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMucGx1Z2lucykge1xuXHRcdFx0Zm9yIChjb25zdCBuYW1lIGluIHRoaXMub3B0aW9ucy5wbHVnaW5zKSB7XG5cdFx0XHRcdGlmKCF0aGlzLm9wdGlvbnMucGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0XHRjb25zdCBwbHVnaW5PcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XG5cdFx0XHRcdGlmKHRoaXNbbmFtZV0pIHtcblx0XHRcdFx0XHRpZihwbHVnaW5PcHRpb25zKSB7XG5cdFx0XHRcdFx0XHR0aGlzW25hbWVdKHBsdWdpbk9wdGlvbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBQbHVnaW4gJyR7bmFtZX0nIGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfbGlzdGVuVXNlckFjdGl2aXR5KCkge1xuXHRcdGxldCBtb3VzZUluUHJvZ3Jlc3M7XG5cdFx0bGV0IGxhc3RNb3ZlWDtcblx0XHRsZXQgbGFzdE1vdmVZO1xuXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuXHRcdFx0aWYoZS5zY3JlZW5YICE9PSBsYXN0TW92ZVggfHwgZS5zY3JlZW5ZICE9PSBsYXN0TW92ZVkpIHtcblx0XHRcdFx0bGFzdE1vdmVYID0gZS5zY3JlZW5YO1xuXHRcdFx0XHRsYXN0TW92ZVkgPSBlLnNjcmVlblk7XG5cdFx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWVcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBvbk1vdXNlRG93biA9IChlKSA9PiB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cblx0XHRcdC8vIFdoaWxlIHVzZXIgaXMgcHJlc3NpbmcgbW91c2Ugb3IgdG91Y2gsIGRpc3BhdGNoIHVzZXIgYWN0aXZpdHlcblx0XHRcdGNsZWFySW50ZXJ2YWwobW91c2VJblByb2dyZXNzKTtcblxuXHRcdFx0bW91c2VJblByb2dyZXNzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHR9LCAyNTApO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uTW91c2VVcCA9IChlKSA9PiB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHRjbGVhckludGVydmFsKG1vdXNlSW5Qcm9ncmVzcyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2V1cCcsIG9uTW91c2VVcCk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXl1cCcsIChlKSA9PiB0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlKTtcblxuXHRcdC8vIFNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvbGVhcm5pbmctZnJvbS10d2l0dGVyL1xuXHRcdGxldCBpbmFjdGl2aXR5VGltZW91dDtcblx0XHRjb25zdCBkZWxheSA9IHRoaXMub3B0aW9ucy5pbm5hY3Rpdml0eVRpbWVvdXQ7XG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuX3VzZXJBY3Rpdml0eSkge1xuXG5cdFx0XHRcdC8vIFJlc2V0IHVzZXIgYWN0aXZ1dHkgdHJhY2tlclxuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLnVzZXJBY3RpdmUgPSB0cnVlO1xuXG5cdFx0XHRcdGNsZWFyVGltZW91dChpbmFjdGl2aXR5VGltZW91dCk7XG5cblx0XHRcdFx0aWYgKGRlbGF5ID4gMCkge1xuXG5cdFx0XHRcdFx0aW5hY3Rpdml0eVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5fdXNlckFjdGl2aXR5KSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sIDI1MClcblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9wIHNob3dpbmcgc3Bpbm5lciBhbmQgY2xlYXIgZGVsYXkgb2Ygc2hvd2luZyBzcGlubmVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0b3BXYXl0aW5nKCkge1xuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cy5mb3JFYWNoKGl0ZW0gPT4gY2xlYXJUaW1lb3V0KGl0ZW0pKTtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMgPSBbXTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0td2FpdGluZycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cgc3Bpbm5lciB3aXRoIGRlbGF5IGluIDMwMG1zXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0YXJ0V2FpdGluZygpIHtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMucHVzaChzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS13YWl0aW5nJyk7XG5cdFx0fSwgMzAwKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBPbiBpbml0ZWQgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkluaXRlZChlKSB7XG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWluaXRlZCcpO1xuXG5cdFx0dGhpcy5vcHRpb25zLm9uUGxheWVySW5pdGVkLmNhbGwodGhpcywgZSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBPbiBjbGljayB2aWRlbyBldmVudCBoYW5kbGVyLiBGb2N1cyBvbiB2aWRlbyBhbmQgdG9nZ2xlUGxheVxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uQ2xpY2soZSkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLl9kYmxjbGlja1RpbWVvdXQpO1xuXHRcdHRoaXMuX2RibGNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy52aWRlby5lbGVtZW50LmZvY3VzKClcblx0XHRcdHRoaXMudG9nZ2xlUGxheSgpO1xuXHRcdH0sIDMwMCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gZGJsY2xpY2sgb24gdGhlIHZpZGVvIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25EYmNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHR0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBmdWxsc2NyZWVuIGNoYW5nZSBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRnVsbHNjcmVlbkNoYW5nZShlLCBpc0ZzKSB7XG5cdFx0aWYoaXNGcykge1xuXHRcdFx0dGhpcy52aWV3ID0gJ2Z1bGxzY3JlZW4nO1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZpZXcgPSAnY29tbW9uJztcblxuXHRcdFx0aWYoSVNfQU5EUk9JRF9QSE9ORSB8fCBJU19JUEhPTkUgfHwgSVNfSVBPRCkge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogT24gcGxheSBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25QbGF5KCkge1xuXHRcdHRoaXMuc3BsYXNoSWNvbi5zaG93KCdwbGF5Jyk7XG5cdH1cblxuXHQvKipcblx0ICogT24gcGF1c2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICogU2hvdyBwYXVzZSBpY29uIGluIHRoZSBjZW50ZXIgb2YgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfb25QYXVzZSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGF1c2UnKTtcblx0fVxuXG5cdF9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSgpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cdFx0Y29uc3QgaXNGcyA9ICEhZG9jdW1lbnRbZnNBcGkuZnVsbHNjcmVlbkVsZW1lbnRdO1xuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGlzRnMpO1xuXHR9XG5cbn1cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGx1Z2luIGluaXQgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnBsdWdpbignaGVsbG9Xb3JsZCcsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcbiAqICAgIGNvbnN0IHBsYXllciA9IHRoaXM7XG4gKiAgICBwbGF5ZXIub24oJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2coJ0hlbGxvIHdvcmxkJykpO1xuICogfSlcbiAqXG4gKi9cblBsYXllci5wbHVnaW4gPSBmdW5jdGlvbihuYW1lLCBmbikge1xuXHRQbGF5ZXIucHJvdG90eXBlW25hbWVdID0gZm47XG59XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cblBsYXllci5nZXRDb21wb25lbnQgPSBDb21wb25lbnQuZ2V0Q29tcG9uZW50O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGNvbXBvbmVudFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG4gKi9cblBsYXllci5yZWdpc3RlckNvbXBvbmVudCA9IENvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbnRyb2x9IGNvbnRyb2xcbiAqL1xuUGxheWVyLmdldENvbnRyb2wgPSBDb250cm9sLmdldENvbnRyb2w7XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Q29udHJvbH1cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb250cm9sID0gQ29udHJvbC5yZWdpc3RlckNvbnRyb2w7XG5cblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5QbGF5ZXIuc2Vjb25kc1RvVGltZSA9IHNlY29uZHNUb1RpbWU7XG5cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wcmVzZXQoJ2NvbW1vbicsIHtcbiAqICAgICB3aWR0aCA6ICcxMDAlJyxcbiAqICAgICBwbHVnaW5zIDoge1xuICogICAgICAgICBtaW5pcGxheWVyIDogdHJ1ZVxuICogICAgIH1cbiAqIH0pO1xuICovXG5QbGF5ZXIucHJlc2V0ID0gZnVuY3Rpb24obmFtZSwgb2JqKSB7XG5cdGlmKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG5cdFx0UGxheWVyLl9wcmVzZXRzW25hbWVdID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG9wdGlvbnMgOiB7fSxcblx0XHRcdGluaXRPcHRpb25zIDogbm9vcFxuXHRcdH0sIG9iaik7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9IG9iaigpO1xuXHR9XG59O1xuXG5cblBsYXllci5nZXRQcmVzZXQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdGlmKFBsYXllci5fcHJlc2V0c1tuYW1lXSkge1xuXHRcdHJldHVybiBQbGF5ZXIuX3ByZXNldHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcihgcHJlc2V0ICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cblxuUGxheWVyLl9wcmVzZXRzID0ge307XG5cblBsYXllci5Db29raWUgPSBDb29raWU7XG5cblBsYXllci5fbG9hZFNWR1Nwcml0ZSA9IGZ1bmN0aW9uKHN2Zykge1xuXHRjb25zdCBoaWRkZW5FbGVtZW50ID0gJCgnPGRpdi8+JykuaGlkZSgpO1xuXHQkKCdib2R5JykucHJlcGVuZChoaWRkZW5FbGVtZW50LmFwcGVuZChzdmcpKTtcblx0cmV0dXJuIGhpZGRlbkVsZW1lbnQ7XG59XG5cblBsYXllci5kZWZhdWx0U3ByaXRlID0gcmVxdWlyZSgnLi4vLi4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnJyk7XG5cbi8qIGdsb2JhbCBWRVJTSU9OICovXG5QbGF5ZXIudmVyc2lvbiA9IFZFUlNJT047XG5cbndpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQbGF5ZXIoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdH0pO1xufTtcblxud2luZG93LiQubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cbndpbmRvdy5sZVBsYXllciA9IFBsYXllcjtcblxuXG4vKipcbiAqIE1pbmkgUGxheWVyIHBsdWdpblxuICpcbiAqIEBwbHVnaW5cbiAqL1xuUGxheWVyLnBsdWdpbignbWluaXBsYXllcicsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0Y29uc3QgcGxheWVyID0gdGhpcztcblxuXHQvLyDQnNC10YDQttC40Lwg0YEgdGhpcy5vcHRpb25zLm1pbmlwbGF5ZXIsINGH0YLQvtCx0Ysg0L3QtSDRgdC70L7QvNCw0YLRjCDQvtCx0YDQsNGC0L3Rg9GOINGB0L7QstC80LXRgdGC0LjQvNC+0YHRjCwg0YLQsNC6INC60LDQuiDRgNCw0L3RjNGI0LVcblx0Ly8g0LzQuNC90LjQv9C70LXQtdGAINC90LUg0LHRi9C7INC/0LvQsNCz0LjQvdC+0Lwg0L/Qu9C10LXRgNCwLlxuXHRjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRvZmZzZXRTaG93IDogKHBsYXllcikgPT4ge1xuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gcGxheWVyLmVsZW1lbnQub2Zmc2V0KCkudG9wXG5cdFx0XHRcdCsgcGxheWVyLmVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuXHRcdFx0XHQtIHBsYXllci5nZXRDb250cm9scygnY29tbW9uJykuZWxlbWVudC5oZWlnaHQoKTtcblxuXHRcdFx0cmV0dXJuIG9mZnNldDtcblx0XHR9XG5cdH0sIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCBwbHVnaW5PcHRpb25zKTtcblxuXHRjb25zdCBjb250cm9scyA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzLCB7XG5cdFx0bmFtZSA6ICdtaW5pJyxcblx0XHRjb250cm9scyA6IG9wdGlvbnMuY29udHJvbHMsXG5cdFx0Y29udHJvbE9wdGlvbnMgOiB7XG5cdFx0XHRjb250cm9sIDoge1xuXHRcdFx0XHRkaXNhYmxlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vINCS0YHRgtCw0LLQu9GP0LXQvCDQsiBpbmZvRWxlbWVudCDQv9C+0LQgdGl0bGUg0LggZGVzY3JpcHRpb25cblx0dGhpcy5pbmZvRWxlbWVudC5hcHBlbmQoY29udHJvbHMuZWxlbWVudCk7XG5cblx0LyoqXG5cdCAqIFJldHVybiBvZmZzZXQgb24gb1kgLCB3aGVuIG1pbmlwbGF5ZXIgc2hvdWxkIHNob3dpbmcgb3IgaGlkaW5nXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRjb25zdCBvZmZzZXRTaG93ID0gKCkgPT4ge1xuXHRcdGlmICgkLmlzRnVuY3Rpb24ob3B0aW9ucy5vZmZzZXRTaG93KSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMub2Zmc2V0U2hvdyhwbGF5ZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3dcblx0fVxuXG5cdGNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuXHRcdHJldHVybiBvcHRpb25zLndpZHRoIHx8IHRoaXMuZWxlbWVudC53aWR0aCgpO1xuXHR9XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyID0gKGUsIGZvcmNlKSA9PiB7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0Ly8gQmVjYXVzZSBpbiBmb3JjZSB1cGRhdGUsIGZvciBub3JtYWxseSBjb3VudCBoZWlnaHQgYW5kIHBhZGRpbmdcblx0XHQvLyBtaW5pcGxheWVyIGJlZm9yZSB0aGUgc2hvdyBtdXN0IGZpcnN0IGJlIGhpZGRlblxuXHRcdGlmKGZvcmNlKSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9XG5cblx0XHRpZihzY3JvbGxUb3AgPiBvZmZzZXRTaG93KCkpIHtcblx0XHRcdHRoaXMuc2hvd01pbmlQbGF5ZXIoZm9yY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zaG93TWluaVBsYXllciA9IChmb3JjZSkgPT4ge1xuXHRcdGlmICghZm9yY2UgJiYgdGhpcy52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBZGRlZCBlbXB0eSBzcGFjZVxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgdGhpcy52aWRlb0NvbnRhaW5lci5oZWlnaHQoKSk7XG5cblx0XHR0aGlzLnZpZXcgPSdtaW5pJztcblx0fVxuXG5cdHRoaXMuaGlkZU1pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZighZm9yY2UgJiYgdGhpcy52aWV3ICE9PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cdH1cblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgdGhpcy5fdXBkYXRlTWluaVBsYXllci5iaW5kKHRoaXMpKTtcblx0dGhpcy5vbignaW5pdGVkJywgKGUpID0+IHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoZSwgdHJ1ZSkpO1xuXG5cdHRoaXMub25TZXRWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCB0aGlzLnZpZGVvLmhlaWdodCk7XG5cdH0pO1xuXG5cdHRoaXMub25EZWxWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgJycpXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCAnJylcblxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgJycpO1xuXHR9KTtcblxuXG5cdHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoKTtcbn0pO1xuXG5QbGF5ZXIucHJlc2V0KCd2cHMnLCByZXF1aXJlKCcuL3ByZXNldHMvdnBzLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ3NpbXBsZScsIHJlcXVpcmUoJy4vcHJlc2V0cy9zaW1wbGUuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnc21zJywgcmVxdWlyZSgnLi9wcmVzZXRzL3Ntcy5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdjb21wcmVzc2VkJywgcmVxdWlyZSgnLi9wcmVzZXRzL2NvbXByZXNzZWQuanMnKS5wcmVzZXQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9sZS1wbGF5ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb250cm9sJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmljb25OYW1lXSBOYW1lIG9mIGNvbnRyb2wncyBpY29uLiBJZiBlbXB0eSwgY29udHJvbCB3aWxsIG5vdCBoYXZlIGEgaWNvblxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNsYXNzTmFtZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5uYW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNvbGxlY3Rpb25dXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudGl0bGVdIENvbnRvcmwncyB0b29sdGlwLCB0aXRsZSBhdHRyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5vbkNsaWNrXSBPbiBjbGljayBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRpc2FibGU9ZmFsc2VdXG4gKiBAcHJvcGVydHkge0ljb259IGljb24gSWNvbiBpbiBjb250cm9sLCBpZiBpdCBpcyBleGlzdFxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5kaXNhYmxlID0gdGhpcy5vcHRpb25zLmRpc2FibGUgIT0gbnVsbD8gdGhpcy5vcHRpb25zLmRpc2FibGUgOiB0cnVlO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIChlKSA9PiB7XG5cdFx0XHR0aGlzLmRpc2FibGUgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZSAhPSBudWxsPyB0aGlzLm9wdGlvbnMuZGlzYWJsZSA6IGZhbHNlO1xuXHRcdH0pXG5cblx0XHR0aGlzLmVsZW1lbnQub24oe1xuXHRcdFx0Y2xpY2sgOiB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHRsZXBsYXllcl9jb250cm9sX2NsaWNrIDogdGhpcy5vbkNsaWNrLmJpbmQodGhpcylcblx0XHR9KTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLm9uUGxheWVySW5pdGVkLmJpbmQodGhpcykpXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuaWNvbk5hbWUpIHtcblx0XHRcdHRoaXMuaWNvbiA9IG5ldyBJY29uKHRoaXMucGxheWVyLCB7XG5cdFx0XHRcdGljb25OYW1lIDogdGhpcy5vcHRpb25zLmljb25OYW1lXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0bGV0IGF0dHJzID0ge1xuXHRcdFx0cm9sZSA6ICdidXR0b24nLFxuXHRcdFx0dGl0bGUgOiB0aGlzLm9wdGlvbnMudGl0bGVcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaWNvbiAmJiB0aGlzLmljb24uZWxlbWVudClcblx0XHRcdC5hdHRyKGF0dHJzKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbCAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9ICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG5cdHNldCBkaXNhYmxlKHZhbHVlKSB7XG5cdFx0dGhpcy5fZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZGlzYWJsZVxuXHR9XG5cblx0X29uQ2xpY2sgKGUpIHtcblx0XHRpZiAodGhpcy5kaXNhYmxlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9jb250cm9sX2NsaWNrJyk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignY29udHJvbGNsaWNrJywgeyBjb250cm9sIDogdGhpcyB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBPbiBjbGljayBldmVudCBoYW5kbGVyXG5cdCAqIEBhYnN0YWN0XG5cdCAqL1xuXHRvbkNsaWNrIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5vbkNsaWNrLmNhbGwodGhpcywgYXJndW1lbnRzKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uUGxheWVySW5pdGVkIChlLCBkYXRhKSB7XG5cblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbnRyb2wuX2NvbnRyb2xzID09IG51bGwpIHtcblx0XHRcdENvbnRyb2wuX2NvbnRyb2xzID0ge307XG5cdFx0fVxuXG5cdFx0Q29udHJvbC5fY29udHJvbHNbbmFtZV0gPSBjb250cm9sO1xuXG5cdFx0cmV0dXJuIGNvbnRyb2w7XG5cdH1cblxuXHRzdGF0aWMgZ2V0Q29udHJvbChuYW1lKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29udHJvbC5fY29udHJvbHMgJiYgQ29udHJvbC5fY29udHJvbHNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBDb250cm9sLl9jb250cm9sc1tuYW1lXTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHBsYXllciwgbmFtZSwgb3B0aW9ucykge1xuXHRcdHZhciBjb250cm9sQ2xhc3MgPSB0aGlzLmdldENvbnRyb2wobmFtZSk7XG5cdFx0aWYoY29udHJvbENsYXNzID09IG51bGwpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbnRyb2wgJHtuYW1lfSBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IGNvbnRyb2xDbGFzcyhwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sJywgQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY29udHJvbCcsIENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbXBvbmVudC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogUGxheWVyIGNvbXBvbmVudCAtIEJhc2UgY2xhc3MgZm9yIGFsbCBVSVxuICpcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvZiBjb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBbb3B0aW9ucy5lbGVtZW50XSDQrdC70LXQvNC10L3RgiDQvdCwINC60L7RgtC+0YDQvtC8INC80L7QttC90L4g0LjQvdC40YbQuNC70LjQt9C+0LLQsNGC0Ywg0LrQu9Cw0YHRgS5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZWxlbWVudFxuICogQGNsYXNzIENvbXBvbmVudFxuICovXG5jbGFzcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y3JlYXRlRWxlbWVudCA6IHRydWVcblx0XHR9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG5cdFx0aWYoIXBsYXllciAmJiB0aGlzLnBsYXkgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXIgPSB0aGlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcblx0XHR9XG5cblx0XHRpZihvcHRpb25zLmNyZWF0ZUVsZW1lbnQpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMuZWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuZWxlbWVudC5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgQ29tcG9uZW50LnByb3RvdHlwZS5lbGVtZW50Lmxlbmd0aCBtdXN0IGVxdWFsIDEsIG5vdCAke3RoaXMuZWxlbWVudC5sZW5ndGh9XFxuYCwgdGhpcy5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbGVtZW50WzBdLl9fbm9kZSA9IHRoaXM7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3Rcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuICcnXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGZvY3VzIHRvIHRoaXMgY29tcG9uZW50XG5cdCAqL1xuXHRmb2N1cygpIHtcblx0XHR0aGlzLmVsZW1lbnQuZm9jdXMoKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgZm9jdXMgZnJvbSB0aGlzIGNvbXBvbmVudFxuXHQgKi9cblx0Ymx1cigpIHtcblx0XHR0aGlzLmVsZW1lbnQuYmx1cigpO1xuXHR9XG5cblxuXHQvKipcblx0ICogRW1pdCBhIHBsYXllciBldmVudCAodGhlIG5hbWUgb2YgZXZlbnQgd291bGQgYmUgYSBsZXBsYXllcl9zbXRoKVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG5cdCAqIEBwYXJhbSB7QXJndW1lbnRzfSAuLi5hcmdzIGpRdWVyeS5mbi5vbiBvdGhlciBhcmd1bWVudHNcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0dHJpZ2dlcihldmVudE5hbWUsIC4uLmFyZ3MpIHtcblx0XHRjb25zdCBldmVudCA9ICQuRXZlbnQoYGxlcGxheWVyXyR7ZXZlbnROYW1lfWAsIHsgcGxheWVyIDogdGhpcy5wbGF5ZXIgfSk7XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXJIYW5kbGVyKGV2ZW50LCAuLi5hcmdzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIExpc3RlbiBhIHBsYXllciBldmVudCB3aXRoIGxlcGxheWVyXyBzdWZmaXhcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuXHQgKiBAcGFyYW0ge0FyZ3VtZW50c30gLi4uYXJncyBqUXVlcnkuZm4ub24gb3RoZXIgYXJndW1lbnRzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdG9uKGV2ZW50TmFtZSwgLi4uYXJncykge1xuXHRcdHRoaXMuZWxlbWVudC5vbihgbGVwbGF5ZXJfJHtldmVudE5hbWV9YCwgLi4uYXJncyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdG9uZShldmVudE5hbWUsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLmVsZW1lbnQub25lKGBsZXBsYXllcl8ke2V2ZW50TmFtZX1gLCAuLi5hcmdzKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEFkZCB0aGUgQ1NTIGNsYXNzIGZvciBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgTmFtZSBvZiBjbGFzcyAobm90IGEgc2VsZWN0b3IsIGl0J3MgbWVhbiwgdGhhdCBzdHJpbmcgc291bGQgYmUgd2l0aG91dCBwb2ludCBhdCB0aGUgc3RhcnQpXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdGFkZENsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGZyb20gZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIE5hbWUgb2YgY2xhc3Ncblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0cmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBDU1MgY2xhc3MgZnJvbSBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcblx0ICogQHBhcmFtIHtCb29sZWFufSBmbGFnXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmxhZykge1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZsYWcpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpO1xuXHR9XG5cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb21wb25lbnQobmFtZSwgY29tcG9uZW50KSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29tcG9uZW50Ll9jb21wb25lbnRzID09IG51bGwpIHtcblx0XHRcdENvbXBvbmVudC5fY29tcG9uZW50cyA9IHt9O1xuXHRcdH1cblxuXHRcdENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcblxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxuXHRzdGF0aWMgZ2V0Q29tcG9uZW50KG5hbWUpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb21wb25lbnQuX2NvbXBvbmVudHMgJiYgQ29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdKSB7XG5cdFx0XHRyZXR1cm4gQ29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdO1xuXHRcdH1cblxuXHR9XG5cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbXBvbmVudCcsIENvbXBvbmVudCk7XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEljb24uanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBJY29uJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmljb25OYW1lPScnXSBJY29uJ3MgbmFtZS4gSWYgdXNlIHN2Z3Nwcml0ZSBpY29ucywgaWNvbk5hbWUgaXQncyBpZCBpbiBzcHJpdGVcbiAqIEBjbGFzcyBJY29uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJycsXG5cdFx0XHRpY29uTmFtZSA6ICcnXG5cdFx0fSwgb3B0aW9ucylcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5fdXNlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd1c2UnKTtcblx0XHR0aGlzLl9zdmdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuXG5cdFx0dGhpcy5pY29uTmFtZSA9IHRoaXMuX2ljb25OYW1lID0gdGhpcy5vcHRpb25zLmljb25OYW1lO1xuXHRcdHRoaXMuX3N2Z1RhZy5hcHBlbmRDaGlsZCh0aGlzLl91c2VUYWcpO1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKVxuXHRcdFx0LmFwcGVuZCgkKHRoaXMuX3N2Z1RhZykpO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9IGxlcGxheWVyLWljb24gJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWBcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgaWNvbk5hbWUgZmllbGRcblx0ICogQHBhcmFtIHtTdHJpbmd9IGljb25OYW1lXG5cdCAqL1xuXHRzZXQgaWNvbk5hbWUoaWNvbk5hbWUpIHtcblx0XHRsZXQgYXR0ck5TID0gWydodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnXVxuXHRcdHRoaXMuX3VzZVRhZy5yZW1vdmVBdHRyaWJ1dGVOUyguLi5hdHRyTlMsIGAke3RoaXMucGxheWVyLm9wdGlvbnMuc3ZnUGF0aH0jbGVwbGF5ZXItaWNvbi0ke3RoaXMuaWNvbk5hbWV9YClcblx0XHR0aGlzLl91c2VUYWcuc2V0QXR0cmlidXRlTlMoLi4uYXR0ck5TLCBgJHt0aGlzLnBsYXllci5vcHRpb25zLnN2Z1BhdGh9I2xlcGxheWVyLWljb24tJHtpY29uTmFtZX1gKVxuXHRcdHRoaXMuX2ljb25OYW1lID0gaWNvbk5hbWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0dGVyIG9mIGljb25OYW1lIGZpZWxkXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gSWNvbidzIG5hbWVcblx0ICovXG5cdGdldCBpY29uTmFtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2ljb25OYW1lO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdJY29uJywgSWNvbik7XG5leHBvcnQgZGVmYXVsdCBJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUGxheUJ1dHRvbi5qc1xuICovXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKi9cbmNsYXNzIFBsYXlCdXR0b24gZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpXG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5fb25EYmNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBpbm5lciA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItcGxheS1idXR0b25fX2J1dHRvbidcblx0XHR9KVxuXHRcdC5hcHBlbmQobmV3IEljb24odGhpcy5wbGF5ZXIsIHsgaWNvbk5hbWUgOiAncGxheScgfSkuZWxlbWVudCk7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogdGhpcy5idWlsZENTU0NsYXNzXG5cdFx0fSlcblx0XHQuYXBwZW5kKGlubmVyKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRfb25EYmNsaWNrKCkge1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgbGVwbGF5ZXItcGxheS1idXR0b25gXG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlCdXR0b24nLCBQbGF5QnV0dG9uKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdwbGF5IGJ1dHRvbicsIFBsYXlCdXR0b24pO1xuZXhwb3J0IGRlZmF1bHQgUGxheUJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlCdXR0b24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIHRpbWUuanNcbiAqXG4gKiBAbW9kdWxlIHRpbWVcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kc1RvVGltZSAoc2Vjb25kcywgc2hvd0hvdXJzKSB7XG5cdHZhciBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG5cdHZhciBtID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKTtcblx0dmFyIHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwICUgNjApO1xuXHR2YXIgb3V0ID0gJyc7XG5cdGlmIChtIDwgMTApIHtcblx0XHRtID0gJzAnICsgbTtcblx0fVxuXHRpZiAocyA8IDEwKSB7XG5cdFx0cyA9ICcwJyArIHM7XG5cdH1cblx0b3V0ID0gYCR7bX06JHtzfWA7XG5cblx0aWYoaCA+IDAgfHwgc2hvd0hvdXJzKSB7XG5cdFx0b3V0ID0gYCR7aH06YCArIG91dFxuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cblxuLyoqXG4gKiBSZXR1cm4gbGVuZ3RoIC8gZW5kXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVibWVyfSBlbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnRpZnkgKGxlbmd0aCwgZW5kKSB7XG5cdC8vIG9yIHplcm8gYmVhY2FzZSBOYU5cblx0Y29uc3QgcGVyY2VudCA9IChsZW5ndGggLyBlbmQpIHx8IDA7XG5cdHJldHVybiAocGVyY2VudCA+PSAxKSA/IDEgOiBwZXJjZW50O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWc9J2RpdicsIHByb3BzKSB7XG5cdGlmKHByb3BzICYmIHByb3BzLmNsYXNzTmFtZSkge1xuXHRcdHByb3BzW1wiY2xhc3NcIl0gPSBwcm9wcy5jbGFzc05hbWU7XG5cdFx0ZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcblx0fVxuXHRyZXR1cm4gJChgPCR7dGFnfS8+YCwgcHJvcHMpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGNvbnN0IGdldFNjcm9sbEJhcldpZHRoID0gKGZ1bmN0aW9uKCkge1xuXHRsZXQgcmVzdWx0O1xuXG5cdHJldHVybiBmdW5jdGlvbigpIHtcblxuXHRcdGlmKHJlc3VsdCAhPSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNvbnN0IG91dGVyID0gJCgnPGRpdiAvPicpLmNzcyh7XG5cdFx0XHR2aXNpYmlsaXR5IDogJ2hpZGRlbicsXG5cdFx0XHR3aWR0aCA6IDEwMCxcblx0XHRcdG92ZXJmbG93IDogJ3Njcm9sbCdcblx0XHR9KS5hcHBlbmRUbygnYm9keScpO1xuXG5cdFx0Y29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gJCgnPGRpdiAvPicpLmNzcyh7XG5cdFx0XHR3aWR0aCA6ICcxMDAlJ1xuXHRcdH0pLmFwcGVuZFRvKG91dGVyKS5vdXRlcldpZHRoKCk7XG5cblx0XHRvdXRlci5yZW1vdmUoKTtcblx0XHRyZXR1cm4gcmVzdWx0ID0gMTAwIC0gd2lkdGhXaXRoU2Nyb2xsO1xuXHR9XG5cbn0oKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNwbGFzaEljb24uanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFNwbGFzaEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBTcGxhc2hJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRzaG93KG5hbWUpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbi0tYWN0aXZlJyk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24tLWFjdGl2ZScpLCAzMDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmljb24gPSBuZXcgSWNvbih0aGlzLnBsYXllcik7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uJylcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uLmVsZW1lbnQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsYXNoSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NwbGFzaEljb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWUuanNcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUsIGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vLyBUT0RPOiDQmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0Y3RgtC+0YIg0LHQu9C+0Log0LIgVGltZUNvbnRyb2xcbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFRpbWVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvID0gcGxheWVyLnZpZGVvO1xuXHRcdFx0XHRyZXR1cm4gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVRleHQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMudXBkYXRlVGV4dC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHVwZGF0ZVRleHQoZSwgZGF0YSkge1xuXHRcdHRoaXMuZWxlbWVudC50ZXh0KHRoaXMub3B0aW9ucy5mbih0aGlzLnBsYXllcikpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2JywgeyBjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZScgfSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZScsIFRpbWUpO1xuZXhwb3J0IGRlZmF1bHQgVGltZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb2xsZWN0aW9uLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi91dGlscyc7XG5cblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2YgY29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gW29wdGlvbnMuY29udHJvbHNdIEFycmF5IG9mIHJvd3Mgb2YgY29udHJvbCdzIG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5jb250cm9sc09wdGlvbnNdIENvbnRyb2wgb3B0aW9uc1xuICogQHByb3BlcnR5IHtBcnJheX0gQXJyYXkgb2Ygcm93cyBvZiBjb250cm9sJ3MgbmFtZVxuICogQHByXG4gKlxuICovXG5jbGFzcyBDb250cm9sQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRjb25zdCBuYW1lID0gb3B0aW9ucy5uYW1lO1xuXG5cdFx0bGV0IHBsYXllck9wdGlvbnMgPSB7XG5cdFx0XHRjb250cm9scyA6IHBsYXllci5vcHRpb25zLmNvbnRyb2xzW25hbWVdLFxuXHRcdH1cblxuXHRcdGlmKHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0cGxheWVyT3B0aW9uc1snYWxpZ24nXSA9IHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tuYW1lXS5hbGlnbjtcblx0XHRcdHBsYXllck9wdGlvbnNbJ2NvbnRyb2xzT3B0aW9ucyddID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNPcHRpb25zW25hbWVdLmNvbnRyb2xzO1xuXHRcdH1cblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y29udHJvbHMgOiBbXSxcblx0XHRcdGNvbnRyb2xzT3B0aW9ucyA6IHt9LFxuXHRcdFx0YWxpZ24gOiAnbGVmdCcsXG5cdFx0fSwgcGxheWVyT3B0aW9ucywgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5hY3RpdmUgPSBvcHRpb25zLmFjdGl2ZSB8fCBmYWxzZTtcblx0XHR0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XG5cblx0XHR0aGlzLnBsYXllci5jb250cm9sc1t0aGlzLm5hbWVdID0gdGhpcztcblx0fVxuXG5cblx0X2dldENvbnRyb2xPcHRpb25zKG5hbWUpIHtcblx0XHRjb25zdCB7IGNvbnRyb2xzT3B0aW9ucyB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGxldCByZXN1bHQgPSBjb250cm9sc09wdGlvbnMuY29udHJvbCB8fCB7fTtcblxuXHRcdGlmKGNvbnRyb2xzT3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0cmVzdWx0ID0gJC5leHRlbmQodHJ1ZSwge30sIHJlc3VsdCwgY29udHJvbHNPcHRpb25zW25hbWVdKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0YWRkQ29udHJvbChpbmRleFJvdywgbmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IGNvbnRyb2wgPSBDb250cm9sLmNyZWF0ZSh0aGlzLnBsYXllciwgbmFtZSwge1xuXHRcdFx0Y29sbGVjdGlvbiA6IHRoaXMub3B0aW9ucy5uYW1lLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0aWYoY29udHJvbCA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2hpbGUoaW5kZXhSb3cgPiB0aGlzLl9yb3dzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hZGRSb3coKTtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtUm93ID0gdGhpcy5fcm93c1tpbmRleFJvd107XG5cdFx0ZWxlbVJvdy5hcHBlbmQoY29udHJvbC5lbGVtZW50KTtcblxuXHRcdGlmICh0aGlzLmNvbnRyb2xzID09IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHMgPSBbXTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY29udHJvbHNbaW5kZXhSb3ddID09IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHNbaW5kZXhSb3ddID0ge307XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250cm9sc1tpbmRleFJvd11bbmFtZV0gPSBjb250cm9sO1xuXHR9XG5cblx0Z2V0Q29udHJvbChmaXJzdCwgc2Vjb25kKSB7XG5cdFx0aWYoc2Vjb25kID09IG51bGwpIHtcblx0XHRcdGNvbnN0IG5hbWUgPSBmaXJzdDtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHRoaXMuY29udHJvbHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW2ldW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG5hbWUgPSBmaXJzdDtcblx0XHRcdGNvbnN0IGluZGV4Um93ID0gc2Vjb25kO1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbaW5kZXhSb3ddW25hbWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0YWRkUm93KCkge1xuXHRcdGNvbnN0IGVsZW1Sb3cgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogYGxlcGxheWVyLWNvbnRyb2xzIGNvbnRyb2xzLSR7dGhpcy5vcHRpb25zLm5hbWV9YFxuXHRcdH0pO1xuXG5cdFx0aWYgKHRoaXMuX3Jvd3MgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fcm93cyA9IFtdXG5cdFx0fVxuXHRcdHRoaXMuX3Jvd3MucHVzaChlbGVtUm93KTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1Sb3cpO1xuXG5cdFx0cmV0dXJuIGVsZW1Sb3c7XG5cdH1cblxuXHRnZXRSb3coaW5kZXhSb3cpIHtcblx0XHRyZXR1cm4gdGhpcy5fcm93c1tpbmRleFJvdyB8fCAwXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyBuYW1lLCBjb250cm9scywgYWxpZ24gfSA9IHRoaXMub3B0aW9ucztcblx0XHRsZXQgZ2xvYmFsQWxpZ24gPSBudWxsO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IGBsZXBsYXllci1jb250cm9sLWNvbGxlY3Rpb24gbGVwbGF5ZXItY29udHJvbC1jb2xsZWN0aW9uLS0ke25hbWV9YCxcblx0XHR9KVxuXG5cdFx0aWYodHlwZW9mIGFsaWduID09PSAnc3RyaW5nJykge1xuXHRcdFx0Z2xvYmFsQWxpZ24gPSBhbGlnbjtcblx0XHR9XG5cblx0XHRjb250cm9scy5mb3JFYWNoKChyb3csIGluZGV4Um93KSA9PiB7XG5cdFx0XHRjb25zdCBlbGVtUm93ID0gdGhpcy5hZGRSb3coKTtcblx0XHRcdGxldCByb3dBbGlnbiA9IGdsb2JhbEFsaWduO1xuXG5cdFx0XHRpZihBcnJheS5pc0FycmF5KGFsaWduKSAmJiBhbGlnbltpbmRleFJvd10pIHtcblx0XHRcdFx0cm93QWxpZ24gPSBhbGlnbltpbmRleFJvd11cblx0XHRcdH1cblxuXHRcdFx0cm93LmZvckVhY2goY29udHJvbE5hbWUgPT4ge1xuXG5cdFx0XHRcdGlmKGNvbnRyb2xOYW1lID09PSAndGltZWxpbmUnICYmIHJvd0FsaWduICE9PSAnanVzdGlmeScpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ0NvbnJvbHMgc2hvdWxkIGhhdmUganVzdGlmeSBhbGlnbiwgaWYgdGhlcmUgaXMgdGhlIHRpbWVsaW5lIGluIGl0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmFkZENvbnRyb2woaW5kZXhSb3csIGNvbnRyb2xOYW1lLCB0aGlzLl9nZXRDb250cm9sT3B0aW9ucyhuYW1lKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0ZWxlbVJvdy5hZGRDbGFzcyhgbGVwbGF5ZXItY29udHJvbHMtLSR7cm93QWxpZ259YClcblx0XHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgMCk7XG5cblx0XHRcdGVsZW1Sb3cuZmluZCgnLmRpdmlkZXIgKyAuZGl2aWRlcicpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdGhpZGUgKCkge1xuXHRcdHRoaXMuZWxlbWVudC5oaWRlKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1jb250cm9scycpLmhpZGUoKVxuXHR9XG5cblx0c2hvdyAoKSB7XG5cdFx0dGhpcy5lbGVtZW50LnNob3coKVxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCcubGVwbGF5ZXItY29udHJvbHMnKS5zaG93KClcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xDb2xsZWN0aW9uJywgQ29udHJvbENvbGxlY3Rpb24pO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENvbGxlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ29sbGVjdGlvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU2VjdGlvbnMuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmltcG9ydCB7IHNlY29uZHNUb1RpbWUsIGdldFNjcm9sbEJhcldpZHRoIH0gZnJvbSAnLi4vdXRpbHMnO1xuLyoqXG4gKiBAY2xhc3MgU2VjdGlvbnNcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7QXJyYXl9IFtvcHRpb25zLml0ZW1zPVtdfSBEYXRhIGZvciBzZWN0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy52aWV3c10gU2hvdyBzZWN0aW9uIG9ubHkgaW4gZnVsbHNjcmVlblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFNlY3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0bGV0IHsgaXRlbXMgPSBbXSB9ID0gb3B0aW9ucztcblx0XHRpdGVtcyA9IFtdLmNvbmNhdChpdGVtcyk7XG5cblx0XHQvL29wdGlvbnMuaXRlbXMgPSBpdGVtcztcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSB0aGlzLl9pbm5lckVsZW1lbnQ7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uQnlJbmRleCgwKTtcblxuXHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcblx0XHR0aGlzLmxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KDApO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuZmluZCgnLmxlcGxheWVyLXNlY3Rpb24nKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignc2VjdGlvbnN0b2dnbGUnLCB0aGlzLl9vblNlY3Rpb25zVG9nZ2xlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLnVwZGF0ZVNlY3Rpb25EdXJhdGlvbi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMudXBkYXRlU2VjdGlvbkR1cmF0aW9uLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5wbGF5ZXIuZm9jdXMoKSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkluZGV4ID0gcGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSk7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSBzZWN0aW9uSW5kZXggPj0gdGhpcy5sZW5ndGggPyB0aGlzLmxlbmd0aCA6IHNlY3Rpb25JbmRleCArIDE7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgobmV3SW5kZXgpO1xuXG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgPSB0aGlzLml0ZW1zW3NlY3Rpb25JbmRleF0uZW5kO1xuXHR9XG5cblx0cHJldigpIHtcblx0XHRjb25zdCBzZWN0aW9uSW5kZXggPSBwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKTtcblx0XHRjb25zdCBuZXdJbmRleCA9IHNlY3Rpb25JbmRleCA8PSAwID8gMCA6IHNlY3Rpb25JbmRleCAtIDE7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgobmV3SW5kZXgpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lID0gdGhpcy5pdGVtc1tuZXdJbmRleF0uYmVnaW47XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IHsgZnVsbHNjcmVlbk9ubHksIGhpZGVTY3JvbGwgfSA9IHRoaXMub3B0aW9ucztcblxuXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cblx0XHR0aGlzLl9pbm5lckVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zX19pbm5lcicpO1xuXG5cdFx0aWYoZnVsbHNjcmVlbk9ubHkpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWZzb25seScpO1xuXHRcdH1cblxuXHRcdGlmKGhpZGVTY3JvbGwpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGUtc2Nyb2xsJyk7XG5cdFx0XHR0aGlzLl9pbm5lckVsZW1lbnQuY3NzKHtcblx0XHRcdFx0cmlnaHQgOiAtMSAqIGdldFNjcm9sbEJhcldpZHRoKClcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZChcblx0XHRcdHRoaXMuX2lubmVyRWxlbWVudC5hcHBlbmQodGhpcy5fY3JlYXRlU2VjdGlvbnModGhpcy5vcHRpb25zLml0ZW1zKSlcblx0XHQpXG5cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHR1cGRhdGVTZWN0aW9uRHVyYXRpb24oKSB7XG5cdFx0aWYodGhpcy5pdGVtcyAhPSBudWxsICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGhcblx0XHRcdHRoaXMuaXRlbXNbbGVuZ3RoIC0gMV0uZW5kID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cblx0XHRcdC8vIFRPRE86INCf0YDQvtC00YPQvNCw0YLRjCDRhNGD0L3QutGG0LjRj9GOIHVwZGF0ZVNlY3Rpb25cblx0XHRcdC8vdGhpcy51cGRhdGVTZWN0aW9uKHRoaXMuaXRlbXNbbGVuZ3RoIC0gMV0sIGxlbmd0aCAtIDEpO1xuXHRcdH1cblx0fVxuXG5cblx0b25TZWN0aW9uQ2xpY2soZSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0Y29uc3Qgc2VjdGlvbiA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5sZXBsYXllci1zZWN0aW9uJyk7XG5cdFx0dmlkZW8uY3VycmVudFRpbWUgPSBzZWN0aW9uLmF0dHIoJ2RhdGEtYmVnaW4nKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc2NsaWNrJywgeyBzZWN0aW9uIDogdGhpcy5pdGVtc1tzZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKV19KTtcblx0fVxuXG5cdHNldEFjdGl2ZUJ5SW5kZXgoaW5kZXgpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24ubGVuZ3RoID09PSAwIHx8XG5cdFx0XHRwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKSA9PT0gaW5kZXggfHxcblx0XHRcdHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpLmxlbmd0aCA9PT0gMFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScpO1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpO1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyk7XG5cblx0XHRjb25zdCB0b3BQb3NpdGlvbiA9IHRoaXMuYWN0aXZlU2VjdGlvbi5wb3NpdGlvbigpLnRvcDtcblxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudFxuXHRcdFx0LmFuaW1hdGUoe1xuXHRcdFx0XHRzY3JvbGxUb3AgOiB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkgKyB0b3BQb3NpdGlvblxuXHRcdFx0fSwgODAwKVxuXG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnNjaGFuZ2UnLCB7IHNlY3Rpb24gOiB0aGlzLml0ZW1zW2luZGV4XX0pO1xuXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdGdldFNlY3Rpb25CeUluZGV4KGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5maW5kKGAubGVwbGF5ZXItc2VjdGlvbltkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcblx0fVxuXG5cblx0b25UaW1lVXBkYXRlKGUsIGRhdGEpIHtcblx0XHRpZiAodGhpcy5hY3RpdmVTZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0Y29uc3QgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblxuXHRcdC8vIFVwZGF0ZSBzcGFuIHdpdGggZW5kIHNlY3Rpb24gdGltZVxuXHRcdC8vIFRPRE86INCS0YvQvdC10YHRgtC4INGN0YLQviDQsiDQvtGC0LTQtdC70YzQvdGL0Lkg0LrQvtC80L/QvtC90LXQvdGCIFNob3dUaW1lINC40LvQuCDRgtC40L/QviDRgtC+0LPQvlxuXHRcdGlmKHRoaXMucGxheWVyLnZpZXcgPT09ICdtaW5pJykge1xuXHRcdFx0Y29uc3QgZW5kU2VjdGlvblRpbWUgPSB0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1lbmQnKTtcblx0XHRcdHRoaXMuYWN0aXZlU2VjdGlvblxuXHRcdFx0XHQubmV4dCgpXG5cdFx0XHRcdC5maW5kKCcudGltZScpXG5cdFx0XHRcdC50ZXh0KHNlY29uZHNUb1RpbWUoZW5kU2VjdGlvblRpbWUgLSBjdXJyZW50VGltZSkpO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgc2VjdGlvbiA9IHRoaXMuaXRlbXNbaV07XG5cdFx0XHRpZiAoY3VycmVudFRpbWUgPCBzZWN0aW9uLmVuZCkge1xuXHRcdFx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgoaSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0X29uU2VjdGlvbnNUb2dnbGUoZSwgZGF0YSkge1xuXHRcdGlmICh0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKSAmJiBkYXRhLmNoZWNrZWQpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpO1xuXHRcdH0gZWxzZSBpZiAoIWRhdGEuY2hlY2tlZCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBIVE1MIG9mIHNlY3Rpb24gYnkgZGF0YSBhbmQgaW5kZXggc2VjdGlvblxuXHQgKlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBIVE1MXG5cdCAqL1xuXHRjcmVhdGVTZWN0aW9uKHNlY3Rpb24sIGluZGV4KSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zIHx8IHRoaXMub3B0aW9ucy5pdGVtcztcblx0XHRjb25zdCBpdGVtID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24gJHshaW5kZXggPyAnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyA6ICcnfVwiXG5cdFx0XHRcdGRhdGEtYmVnaW49XCIke3NlY3Rpb24uYmVnaW59XCJcblx0XHRcdFx0ZGF0YS1pbmRleD1cIiR7aW5kZXgudG9TdHJpbmcoKX1cIlxuXHRcdFx0XHRkYXRhLWVuZD1cIiR7c2VjdGlvbi5lbmR9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLXRpbWVcIj4ke3NlY29uZHNUb1RpbWUoc2VjdGlvbi5iZWdpbil9PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWluZm9cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1uZXh0LWluZm9cIj5cblx0XHRcdFx0XHRcdCR7c2VjdGlvbi5uZXh0SW5mbyB8fCAn0KHQu9C10LTRg9GO0YnQsNGPINGB0LXQutGG0LjRjyDQvdCw0YfQvdC10YLRgdGPINGH0LXRgNC10LcnfVxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JHtzZWNvbmRzVG9UaW1lKGl0ZW1zWzBdLmVuZCl9PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCR7XG5cdFx0XHRcdFx0XHRzZWN0aW9uLnRpdGxlICE9IG51bGwgP1xuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tdGl0bGVcIj4ke3NlY3Rpb24udGl0bGV9PC9kaXY+YFxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQke1xuXHRcdFx0XHRcdFx0c2VjdGlvbi5kZXNjcmlwdGlvbiAhPSBudWxsID9cblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWRlc2NyaXB0aW9uXCI+JHtzZWN0aW9uLmRlc2NyaXB0aW9ufTwvZGl2PmBcblx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YC50cmltKClcblx0XHRyZXR1cm4gaXRlbVxuXHR9XG5cblx0Ly8gVE9ETzog0J/RgNC40LTRg9C80LDRgtGMINGH0YLQviDRgdC00LXQu9Cw0YLRjCDRgSDRgdC+0LHRi9GC0LjRj9C80Lgg0L/QvtGB0LvQtSDQvtCx0L3QvtCy0LvQtdC90LjRjyDQv9C+0LvQvdC+0YHRjNGOINGB0LXQutGG0LjQuFxuXHQvKipcblx0ICogRmluZCBzZWN0aW9uIGJ5IGluZGV4IGFuZCB1cGRhdGUgaGltIHVzaW5nIGRhdGFcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGFcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG5cdCAqL1xuXHR1cGRhdGVTZWN0aW9uKGRhdGEsIGluZGV4KSB7XG5cdFx0dGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleClcblx0XHRcdC5yZXBsYWNlV2l0aCh0aGlzLmNyZWF0ZVNlY3Rpb24oZGF0YSwgaW5kZXgpKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfY3JlYXRlU2VjdGlvbnMoaXRlbXMpIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcblx0XHRcdHJlc3VsdCArPSB0aGlzLmNyZWF0ZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpO1xuXHRcdH0pO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZWN0aW9ucycsIFNlY3Rpb25zKTtcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEVycm9yRGlzcGxheS5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBFcnJvckRpc3BsYXlcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBFcnJvckRpc3BsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0aWYodGhpcy5wbGF5ZXIuX2Vycm9yICE9IG51bGwpIHtcblx0XHRcdHRoaXMubWVzc2FnZSA9IHRoaXMucGxheWVyLl9lcnJvci5tZXNzYWdlO1xuXHRcdFx0dGhpcy5lbGVtZW50LnNob3coKTtcblx0XHR9XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2Vycm9yJywgdGhpcy5vblBsYXllckVycm9yLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItZXJyb3ItZGlzcGxheScpXG5cdH1cblxuXHRzZXQgbWVzc2FnZSh2YWx1ZSkge1xuXHRcdHRoaXMuZWxlbWVudC5odG1sKHZhbHVlKTtcblx0fVxuXG5cdG9uUGxheWVyRXJyb3IoZSwgZGF0YSkge1xuXHRcdGNvbnN0IGVycm9yID0gZGF0YS5lcnJvcjtcblx0XHR0aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXHRcdHRoaXMuZWxlbWVudC5zaG93KCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdFcnJvckRpc3BsYXknLCBFcnJvckRpc3BsYXkpO1xuZXhwb3J0IGRlZmF1bHQgRXJyb3JEaXNwbGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBFcnJvckRpc3BsYXkuanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudXJsXSBwYXRoIHRvIHBvc3RlciBpbWFnZVxuICogQGNsYXNzIFBvc3RlclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFBvc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHR1cmwgOiBvcHRpb25zLnVybFxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMudXJsID0gdGhpcy5vcHRpb25zLnVybDtcblx0fVxuXG5cdHNldCB1cmwodmFsdWUpIHtcblx0XHRpZih2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX3VybCA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKFwiJHt2YWx1ZX1cIilgKVxuXHR9XG5cblx0Z2V0IHVybCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXJsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItcG9zdGVyJyk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQb3N0ZXInLCBQb3N0ZXIpO1xuZXhwb3J0IGRlZmF1bHQgUG9zdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUG9zdGVyLmpzIiwiLyoqXG4gKiBAZmlsZSBmdWxsc2NyZWVuLWFwaS5qc1xuICovXG5cblxuLypcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSVxuICogQHR5cGUge09iamVjdHx1bmRlZmluZWR9XG4gKiBAcHJpdmF0ZVxuICovXG5sZXQgRnVsbHNjcmVlbkFwaSA9IHt9O1xuXG4vLyBicm93c2VyIEFQSSBtZXRob2RzXG4vLyBtYXAgYXBwcm9hY2ggZnJvbSBTY3JlZW5mdWwuanMgLSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3NjcmVlbmZ1bGwuanNcbmNvbnN0IGFwaU1hcCA9IFtcblx0Ly8gU3BlYzogaHR0cHM6Ly9kdmNzLnczLm9yZy9oZy9mdWxsc2NyZWVuL3Jhdy1maWxlL3RpcC9PdmVydmlldy5odG1sXG5cdFtcblx0XHQncmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCdleGl0RnVsbHNjcmVlbicsXG5cdFx0J2Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnZnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCdmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBXZWJLaXRcblx0W1xuXHRcdCd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcblx0XHQnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE9sZCBXZWJLaXQgKFNhZmFyaSA1LjEpXG5cdFtcblx0XHQnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE1vemlsbGFcblx0W1xuXHRcdCdtb3pSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0J21vekNhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0J21vekZ1bGxTY3JlZW5FbmFibGVkJyxcblx0XHQnbW96ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J21vemZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gTWljcm9zb2Z0XG5cdFtcblx0XHQnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J21zRXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCdtc0Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnbXNGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J01TRnVsbHNjcmVlbkNoYW5nZScsXG5cdFx0J01TRnVsbHNjcmVlbkVycm9yJ1xuXHRdXG5dO1xuXG5cbmxldCBzcGVjQXBpID0gYXBpTWFwWzBdO1xuXG5sZXQgYnJvd3NlckFwaTtcblxuLy8gZGV0ZXJtaW5lIHRoZSBzdXBwb3J0ZWQgc2V0IG9mIGZ1bmN0aW9uc1xuZm9yIChsZXQgaSA9IDA7IGkgPCBhcGlNYXAubGVuZ3RoOyBpKyspIHtcblx0Ly8gY2hlY2sgZm9yIGV4aXRGdWxsc2NyZWVuIGZ1bmN0aW9uXG5cdGlmIChhcGlNYXBbaV1bMV0gaW4gZG9jdW1lbnQpIHtcblx0XHRicm93c2VyQXBpID0gYXBpTWFwW2ldO1xuXHRcdGJyZWFrO1xuXHR9XG59XG5cbi8vIG1hcCB0aGUgYnJvd3NlciBBUEkgbmFtZXMgdG8gdGhlIHNwZWMgQVBJIG5hbWVzXG5pZiAoYnJvd3NlckFwaSkge1xuXHRmb3IgKGxldCBpPTA7IGk8YnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuXHRcdEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgY29va2llLWNvbnRyb2wuanNcbiAqXG4gKiBAY2xhcyBDb29raWVcbiAqL1xuY2xhc3MgQ29va2llIHtcblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiBjb29raWVcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtkZmx0XSBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiB0aGlzIGZpZWxkIGlzIGVtcHR5XG5cdCAqXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IChuYW1lLCBkZmx0KSB7XG5cdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblx0XHRmb3IgKGxldCBpIGluIGNvb2tpZXMpIHtcblx0XHRcdHZhciBkID0gY29va2llc1sgaSBdLnRyaW0oKS5zcGxpdCgnPScpO1xuXHRcdFx0aWYgKGRbIDAgXSA9PT0gJ2xlcGxheWVyXycgKyBuYW1lKVxuXHRcdFx0XHRyZXR1cm4gZFsgMSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIEtleVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVmFsdWVcblx0ICovXG5cdHN0YXRpYyBzZXQgKG5hbWUsIHZhbHVlKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdGQuc2V0RGF0ZShkLnllYXIgKyAxKTtcblx0XHRkb2N1bWVudC5jb29raWUgPSAnbGVwbGF5ZXJfJyArIG5hbWUgKyAnPScgKyB2YWx1ZSArICc7ZXhwaXJlcz0nICsgZC50b1N0cmluZygpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tpZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9jb29raWUuanMiLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqL1xuXG5cbmNvbnN0IFVTRVJfQUdFTlQgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5leHBvcnQgY29uc3QgSVNfTU9CSUxFID0gKC9Nb2JpbGUvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuZXhwb3J0IGNvbnN0IElTX0NIUk9NRSA9IFVTRVJfQUdFTlQuaW5kZXhPZignQ2hyb21lJykgPiAtMTtcblxuZXhwb3J0IGNvbnN0IElTX0FORFJPSUQgPSAoL0FuZHJvaWQvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuZXhwb3J0IGNvbnN0IElTX0FORFJPSURfUEhPTkUgPSBJU19BTkRST0lEICYmIElTX01PQklMRTtcblxuZXhwb3J0IGNvbnN0IElTX0lQQUQgPSAoL2lQYWQvaSkudGVzdChVU0VSX0FHRU5UKTtcbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcbmV4cG9ydCBjb25zdCBJU19JUE9EID0gKC9pUG9kL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG5leHBvcnQgY29uc3QgSVNfSU9TID0gSVNfSVBIT05FIHx8IElTX0lQQUQgfHwgSVNfSVBPRDtcblxuZXhwb3J0IGNvbnN0IElTX1NBRkFSSSA9IFVTRVJfQUdFTlQuaW5kZXhPZignU2FmYXJpJykgPiAtMSAmJiAhSVNfQ0hST01FO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBNZWRpYUVycm9yIHtcblx0Y29uc3RydWN0b3IodmFsdWUpIHtcblx0XHRpZih2YWx1ZSBpbnN0YW5jZW9mIE1lZGlhRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdHRoaXMuY29kZSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdC8vIGRlZmF1bHQgY29kZSBpcyB6ZXJvLCBzbyB0aGlzIGlzIGEgY3VzdG9tIGVycm9yXG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblxuXHRcdFx0Ly8gV2UgYXNzaWduIHRoZSBgY29kZWAgcHJvcGVydHkgbWFudWFsbHkgYmVjYXVzZSBuYXRpdmUgTWVkaWFFcnJvciBvYmplY3RzXG5cdFx0XHQvLyBkbyBub3QgZXhwb3NlIGl0IGFzIGFuIG93bi9lbnVtZXJhYmxlIHByb3BlcnR5IG9mIHRoZSBvYmplY3QuXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlLmNvZGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHRoaXMuY29kZSA9IHZhbHVlLmNvZGU7XG5cdFx0XHR9XG5cblx0XHRcdCQuZXh0ZW5kKHRoaXMsIHZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMubWVzc2FnZSkge1xuXHRcdFx0dGhpcy5tZXNzYWdlID0gTWVkaWFFcnJvci5kZWZhdWx0TWVzc2FnZXNbdGhpcy5jb2RlXSB8fCAnJztcblx0XHR9XG5cdH1cbn1cblxuTWVkaWFFcnJvci5wcm90b3R5cGUuY29kZSA9IDA7XG5cbk1lZGlhRXJyb3IucHJvdG90eXBlLm1lc3NhZ2UgPSAnJztcblxuTWVkaWFFcnJvci5lcnJvclR5cGVzID0gW1xuXHQnTUVESUFfRVJSX0NVU1RPTScsXG5cdCdNRURJQV9FUlJfQUJPUlRFRCcsXG5cdCdNRURJQV9FUlJfTkVUV09SSycsXG5cdCdNRURJQV9FUlJfREVDT0RFJyxcblx0J01FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCcsXG5cdCdNRURJQV9FUlJfRU5DUllQVEVEJ1xuXTtcblxuXG5NZWRpYUVycm9yLmRlZmF1bHRNZXNzYWdlcyA9IHtcblx0MSA6ICfQktGLINC/0YDQtdGA0LLQsNC70Lgg0LfQsNCz0YDRg9C30LrRgyDQstC40LTQtdC+LicsXG5cdDIgOiAn0JfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+INC/0YDQtdGA0LLQsNC90LAg0LjQty3Qt9CwINC/0L7RgtC10YDQuCDRgdC+0LXQtNC40L3QtdC90LjRjy4nLFxuXHQzIDogJ9CX0LDQs9GA0YPQt9C60LAg0LLQuNC00LXQviDQvtGB0YLQsNC90L7QstC70LXQvdCwINC40Lct0LfQsCDQv9GA0L7QsdC70LXQvCDRgSDQstC40LTQtdC+0YTQsNC50LvQvtC8INC40LvQuCDQuNC3LdC30LAg0YLQvtCz0L4sINGH0YLQviDQstCw0Ygg0LHRgNCw0YPQt9C10YAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YIg0LLQvtGB0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNC1INC00LDQvdC90L7Qs9C+INGE0LDQudC70LAuJyxcblx0NCA6ICfQktC40LTQtdC+INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQt9Cw0LPRgNGD0LbQtdC90L4g0LjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGBINC40L3RgtC10YDQvdC10YIt0YHQvtC10LTQuNC90LXQvdC40LXQvCDQuNC70Lgg0L/RgNC+0LHQu9C10Lwg0L3QsCDRgdC10YDQstC10YDQtS4g0JjQu9C4INGE0L7RgNC80LDRgiDRhNCw0LnQu9CwINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyDQstCw0YjQuNC8INCx0YDQsNGD0LfQtdGA0L7QvC4nLFxuXHQ1IDogJ9CS0LjQtNC10L4g0LfQsNGI0LjRhNGA0L7QstCw0L3Qviwg0Lgg0LzRiyDQvdC1INC80L7QttC10Lwg0LXQs9C+INGA0LDRgdGI0LjRhNGA0L7QstCw0YLRjC4nXG59O1xuXG4vLyBBZGQgdHlwZXMgYXMgcHJvcGVydGllcyBvbiBNZWRpYUVycm9yXG4vLyBlLmcuIE1lZGlhRXJyb3IuTUVESUFfRVJSX1NSQ19OT1RfU1VQUE9SVEVEID0gNDtcbmZvciAobGV0IGVyck51bSA9IDA7IGVyck51bSA8IE1lZGlhRXJyb3IuZXJyb3JUeXBlcy5sZW5ndGg7IGVyck51bSsrKSB7XG5cdE1lZGlhRXJyb3JbTWVkaWFFcnJvci5lcnJvclR5cGVzW2Vyck51bV1dID0gZXJyTnVtO1xuXHQvLyB2YWx1ZXMgc2hvdWxkIGJlIGFjY2Vzc2libGUgb24gYm90aCB0aGUgY2xhc3MgYW5kIGluc3RhbmNlXG5cdE1lZGlhRXJyb3IucHJvdG90eXBlW01lZGlhRXJyb3IuZXJyb3JUeXBlc1tlcnJOdW1dXSA9IGVyck51bTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFFcnJvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBQbGF5Q29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQGNsYXNzIFBsYXlDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFBsYXlDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3BsYXknLFxuXHRcdFx0dGl0bGUgOiAn0JLQvtGB0L/RgNC+0LjQt9Cy0LXRgdGC0Lgg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAncGxheScsXG5cdFx0XHRuYW1lIDogJ3BsYXknXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5JywgdGhpcy5zaG93UGF1c2UuYmluZCh0aGlzKSlcblx0XHR0aGlzLnBsYXllci5vbigncGxheWluZycsIHRoaXMuc2hvd1BhdXNlLmJpbmQodGhpcykpXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BhdXNlJywgdGhpcy5zaG93UGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignZW5kZWQnLCB0aGlzLnNob3dSZXBsYXkuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncGxheScsIHRoaXMucmVtb3ZlUmVwbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWVraW5nJywgdGhpcy5yZW1vdmVSZXBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2xvYWRzdGFydCcsIHRoaXMucmVtb3ZlUmVwbGF5LmJpbmQodGhpcykpO1xuXHR9XG5cblxuXHQvKipcblx0ICogUGF1c2UgdGhlIHZpZGVvXG5cdCAqL1xuXHRzaG93UGxheSAoKSB7XG5cdFx0aWYodGhpcy5pY29uLmljb25OYW1lID09PSAncGxheScpIHJldHVybjtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGxheSc7XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbGF5IHRoZSB2aWRlb1xuXHQgKi9cblx0c2hvd1BhdXNlICgpIHtcblx0XHRpZih0aGlzLmljb24uaWNvbk5hbWUgPT09ICdwYXVzZScpIHJldHVybjtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGF1c2UnO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsICfQn9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyk7XG5cdH1cblxuXHRzaG93UmVwbGF5KCkge1xuXHRcdGlmKHRoaXMuaWNvbi5pY29uTmFtZSA9PT0gJ3JlZnJlc2gnKSByZXR1cm47XG5cdFx0aWYodGhpcy5wbGF5ZXIuZHVyYXRpb24gIT09IEluZmluaXR5KSB7XG5cdFx0XHR0aGlzLl9yZXBsYXkgPSB0cnVlO1xuXHRcdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3JlZnJlc2gnO1xuXHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9CX0LDQv9GD0YHRgtC40YLRjCDQt9Cw0L3QvtCy0L4nKVxuXHRcdH1cblx0fVxuXG5cdHJlbW92ZVJlcGxheSgpIHtcblx0XHRpZighdGhpcy5fcmVwbGF5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX3JlcGxheSA9IGZhbHNlO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIudmlkZW8ucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnNob3dQbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd1BhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0Ly9zdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlDb250cm9sJywgUGxheUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3BsYXknLCBQbGF5Q29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBQbGF5Q29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBWb2x1bWVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBWb2x1bWVDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgVm9sdW1lQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndm9sdW1lLWRvd24nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3ZvbHVtZS1jb250cm9sJyxcblx0XHRcdG5hbWUgOiAndm9sdW1lJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndm9sdW1lY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0XHR0aGlzLnZhbHVlID0gdmlkZW8ubXV0ZWQgPyAwIDogdmlkZW8udm9sdW1lO1xuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgZHJhZyA9IGZhbHNlO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR0aGlzLm1hcmtlciA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtbWFya2VyJyk7XG5cblx0XHR0aGlzLmFjdGl2ZSA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtYWN0aXZlJyk7XG5cblx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2Lz4nKVxuXHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtbGluZScpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYWN0aXZlKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlcilcblx0XHRcdC5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1zbGlkZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpO1xuXG5cdFx0dGhpcy5pY29uLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0J7RgtC60LvRjtGH0LjRgtGMINC30LLRg9C6Jyk7XG5cblx0XHR0aGlzLm1hcmtlci5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cdFx0XHRkcmFnID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblx0XHRcdG1vdXNlbW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdGlmICghZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG1vdXNldXAgOiAoZSkgPT4ge1xuXHRcdFx0XHRkcmFnID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cblx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9IHRoaXMucGxheWVyLmNhbGNWb2x1bWVJY29uKHZhbHVlKTtcblxuXHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHR0aGlzLmFjdGl2ZS5jc3MoJ2hlaWdodCcsIHApO1xuXHRcdHRoaXMubWFya2VyLmNzcygnYm90dG9tJywgcCk7XG5cdH1cblxuXHR0b2dnbGVNdXRlZCAoKSB7XG5cdFx0Y29uc3QgeyB2aWRlbyB9ID0gdGhpcy5wbGF5ZXI7XG5cblx0XHR2aWRlby5tdXRlZCA9ICF2aWRlby5tdXRlZDtcblx0fVxuXG5cdGdldFBvc2l0aW9uICh5KSB7XG5cdFx0cmV0dXJuICh5IC0gdGhpcy5saW5lLm9mZnNldCgpLnRvcCkgLyB0aGlzLmxpbmUuaGVpZ2h0KCk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnRvZ2dsZU11dGVkKCk7XG5cdH1cblxuXHRvblBsYXllckluaXRlZCgpIHtcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5wbGF5ZXIudmlkZW8uZGVmYXVsdFZvbHVtZTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVm9sdW1lQ29udHJvbCcsIFZvbHVtZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3ZvbHVtZScsIFZvbHVtZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVm9sdW1lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xEcm9wZG93bi5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbERyb3Bkb3duXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZHJvcGRvd25Db250ZW50IENvbnRlbnQgb2YgcG9wdXBcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbERyb3Bkb3duIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZW50ZXInLCAoKSA9PiAhdGhpcy5kaXNhYmxlICYmIHRoaXMuZHJvcGRvd25Db250ZW50LnNob3coKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtZHJvcGRvd25fX2NvbnRlbnQnKTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZHJvcGRvd25Db250ZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLWRyb3Bkb3duICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRpZigkKGUudGFyZ2V0KS5jbG9zZXN0KHRoaXMuZHJvcGRvd25Db250ZW50KS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3VwZXIuX29uQ2xpY2soZSk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xEcm9wZG93bicsIENvbnRyb2xEcm9wZG93bik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZHJvcGRvd24nLCBDb250cm9sRHJvcGRvd24pO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbERyb3Bkb3duO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lbGluZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi4vQ29udHJvbFRleHQnO1xuaW1wb3J0IEJ1ZmZlcmVkUmFuZ2VzIGZyb20gJy4vQnVmZmVyZWRSYW5nZXMnO1xuaW1wb3J0IE1hcmtlciBmcm9tICcuL01hcmtlcic7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBUaW1lbGluZUNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSdzIHRleHRcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IHRvdGFsVGltZSBUb3RhbCB0aW1lXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gbGluZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lbGluZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRuYW1lIDogJ3RpbWVsaW5lJyxcblx0XHRcdGNsYXNzTmFtZSA6ICd0aW1lbGluZSB0aW1lbGluZS1jb250YWluZXInXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5vbignbGVwbGF5ZXJfbW91c2Vtb3ZlJywgdGhpcy5fb25NYXJrZXJNb3VzZW1vdmUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLm1hcmtlci5lbGVtZW50Lm9uKCdsZXBsYXllcl9tb3VzZWRvd24nLCB0aGlzLl9vbk1hcmtlck1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCB0aGlzLm9uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZWxvYWQnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSlcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMuX29uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfb25NYXJrZXJNb3VzZWRvd24oZSkge1xuXHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXHR9XG5cblx0X29uTWFya2VyTW91c2Vtb3ZlKGUsIGRhdGEpIHtcblx0XHRjb25zdCB4ID0gZGF0YS54O1xuXHRcdGNvbnN0IHAgPSB0aGlzLmdldFBvc2l0aW9uKHgpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHR0aGlzLm1hcmtlci5tYXJrZXJUaW1lXG5cdFx0XHRcdC5zaG93KClcblx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gdmlkZW8uZHVyYXRpb24gKiBwXG5cdFx0fVxuXHR9XG5cblx0X29uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRsZXQgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblx0XHRpZihkYXRhICYmIGRhdGEuY3VycmVudFRpbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y3VycmVudFRpbWUgPSBkYXRhLmN1cnJlbnRUaW1lO1xuXHRcdH1cblx0XHRsZXQgcGVyY2VudCA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgJiYgY3VycmVudFRpbWUgPT09IDApIHBlcmNlbnQgPSAwO1xuXG5cdFx0dGhpcy5tb3ZlKHsgcGVyY2VudCwgY3VycmVudFRpbWUgfSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXG5cdFx0Ly8gQ3JlYXRlIGxhYmVsc1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ3RpbWUtY3VycmVudCcgfSk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gJzAwOjAwJztcblx0XHR0aGlzLnRvdGFsVGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwge2NsYXNzTmFtZSA6ICd0aW1lLXRvdGFsJyB9KTtcblxuXHRcdC8vIENyZWF0ZSBsaW5lIHdpdGggbWFya2VycyBhbmQgcGxheWVkIHJhbmdlXG5cblx0XHR0aGlzLm1hcmtlciA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGRyYWcgOiB0cnVlXG5cdFx0fSk7XG5cblx0XHR0aGlzLm1hcmtlclNoYWRvdyA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdzaGFkb3cnXG5cdFx0fSk7XG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cblxuXHRcdC8vIFBsYXllZCByYW5nZXNcblx0XHR0aGlzLnBsYXllZFJhbmdlcyA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1wbGF5ZWQnKTtcblxuXG5cdFx0Ly8gQnVmZmVyZWQgcmFuZ2VzXG5cdFx0dGhpcy5idWZmZXJlZFJhbmdlcyA9IG5ldyBCdWZmZXJlZFJhbmdlcyh0aGlzLnBsYXllcikuZWxlbWVudDtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZScpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMucGxheWVkUmFuZ2VzKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmJ1ZmZlcmVkUmFuZ2VzKVxuXHRcdFx0Lm9uKHtcblx0XHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5tYXJrZXIuZHJhZykgcmV0dXJuO1xuXG5cdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdGlmIChwID4gMCAmJiBwIDwgMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudFxuXHRcdFx0XHRcdFx0XHQuc2hvdygpXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ2xlZnQnLCBwICogMTAwICsgJyUnKTtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93XG5cdFx0XHRcdFx0XHRcdC5tYXJrZXJUaW1lXG5cdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdG1vdXNlbGVhdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdG1vdXNlZG93biA6IChlKSA9PiB7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Y2xpY2sgOiB0aGlzLl9vbkxpbmVDbGljay5iaW5kKHRoaXMpLFxuXG5cdFx0XHRcdHRvdWNobW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCd0aW1lbGluZS1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZS1zdWJjb250YWluZXInKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudFRpbWUuZWxlbWVudClcblx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy50b3RhbFRpbWUuZWxlbWVudCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X29uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdF9vbkxpbmVDbGljayhlKSB7XG5cdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLm1vdmUoeyBwZXJjZW50IDogdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKX0pO1xuXHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gKHZpZGVvLmR1cmF0aW9uICogdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKSk7XG5cdH1cblxuXHRvblNlY3Rpb25zSW5pdChlKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihpc05hTihkdXJhdGlvbikpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlU2VjdGlvblJhbmdlcyhpdGVtcykge1xuXHRcdGlmKHRoaXMuc2VjdGlvbnMgPT0gbnVsbCB8fCB0aGlzLnNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5zZWN0aW9ucyA9IHRoaXMuY3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcyk7XG5cdFx0XHR0aGlzLmxpbmUuYXBwZW5kKHRoaXMuc2VjdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zLmh0bWwodGhpcy5jcmVhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKSk7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcykge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0bGV0IHJlc3VsdCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItdGltZWxpbmUtc2VjdGlvbnMnKTtcblx0XHRpdGVtcy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG5cdFx0XHRjb25zdCBsZW5ndGggPSAoc2VjdGlvbi5lbmQgLSBzZWN0aW9uLmJlZ2luKTtcblx0XHRcdGNvbnN0IGl0ZW0gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci10aW1lbGluZS1zZWN0aW9uJylcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0d2lkdGggOiBsZW5ndGggLyBkdXJhdGlvbiAqIDEwMCArICclJyxcblx0XHRcdFx0XHRsZWZ0IDogc2VjdGlvbi5iZWdpbiAvIGR1cmF0aW9uICogMTAwICsgJyUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0cmVzdWx0LmFwcGVuZChpdGVtKTtcblx0XHR9KVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRQb3NpdGlvbiAoeCkge1xuXHRcdHJldHVybiAoeCAtIHRoaXMubGluZS5vZmZzZXQoKS5sZWZ0KSAvIHRoaXMubGluZS53aWR0aCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vdmUgbWFya2VyIG9uIHRpbWVsaW5lIG9uIHBlcmNlbnQgZnJvbSBhcmd1bWVudCwgbm90IGZyb20gdmlkZW8uY3VycmVudFRpbWVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBlcmNlbnQgVGhlIHBlcmNlbnQgd2hpY2ggeW91IHdhbnQgdG8gbW92ZSBtYXJrZXIgb24gdGltZWxpbmVcblx0ICovXG5cdG1vdmUgKHsgcGVyY2VudCwgY3VycmVudFRpbWUgfSkge1xuXHRcdGlmKGN1cnJlbnRUaW1lID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb24gKiBwZXJjZW50O1xuXHRcdH1cblxuXHRcdGlmKGlzTmFOKGN1cnJlbnRUaW1lKSkgcmV0dXJuO1xuXHRcdHBlcmNlbnQgPSBwZXJjZW50ICogMTAwO1xuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQuY3NzKCdsZWZ0JywgcGVyY2VudCArICclJyk7XG5cdFx0dGhpcy5wbGF5ZWRSYW5nZXMuY3NzKCd3aWR0aCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMuY3VycmVudFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoY3VycmVudFRpbWUpO1xuXHR9XG5cblx0dXBkYXRlTGFiZWxzKCkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy50b3RhbFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoMCwgTWF0aC5mbG9vcih2aWRlby5kdXJhdGlvbiAvIDM2MDApID4gMCk7XG5cdFx0Y29uc3Qgd2lkdGggPSB0aGlzLnRvdGFsVGltZS5lbGVtZW50LndpZHRoKCk7XG5cblx0XHR0aGlzLnRvdGFsVGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSB8fCAwKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQuY3NzKHtcblx0XHRcdHdpZHRoXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKGUpIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVscygpO1xuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxuXHRfaW5pdFdhdGNoQnVmZmVyICgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0bGV0IHVwZGF0ZVByb2dyZXNzQmFyID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgRU5EID0gMTtcblx0XHRcdGNvbnN0IFNUQVJUID0gMDtcblx0XHRcdGxldCByZXN1bHQgPSAkKCcnKTtcblx0XHRcdHZpZGVvLmxvYWRlZC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRsZXQgZG9tSXRlbSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1idWZmZXJlZCcpO1xuXHRcdFx0XHRkb21JdGVtLmNzcyh7XG5cdFx0XHRcdFx0bGVmdCA6IGl0ZW1bU1RBUlRdICogMTAwICsgJyUnLFxuXHRcdFx0XHRcdHdpZHRoIDogKGl0ZW1bRU5EXSAtIGl0ZW1bU1RBUlRdKSAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmFkZChkb21JdGVtKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5idWZmZXJlZC5odG1sKHJlc3VsdCk7XG5cdFx0XHRpZiAodmlkZW8ubG9hZGVkLmxlbmd0aCAmJiAoMSAtIHZpZGVvLmxvYWRlZFNpemUpIDw9IDAuMDUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVQcm9ncmVzc0JhciwgNTAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkdXJhdGlvbmNoYW5nZSBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRfb25EdXJhdGlvbkNoYW5nZSAoKSB7XG5cdFx0dGhpcy51cGRhdGVMYWJlbHMoKTtcblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lbGluZUNvbnRyb2wnLCBUaW1lbGluZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVsaW5lJywgVGltZWxpbmVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbFRleHQuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBDb250cm9sVGV4dFxuICogQGV4bnRlZHMgQ29udHJvbFxuICovXG5jbGFzcyBDb250cm9sVGV4dCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLXRleHQgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgdGV4dCBmaWVsZFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuXHQgKi9cblxuXHRzZXQgdGV4dCAodmFsdWUpIHtcblx0XHR0aGlzLl90ZXh0ID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG5cblx0Z2V0IHRleHQgKCkge1xuXHRcdHJldHVybiB0aGlzLl90ZXh0XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sVGV4dCcsIENvbnRyb2xUZXh0KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0ZXh0JywgQ29udHJvbFRleHQpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQnVmZmVyZWRSYW5nZXMuanNcbiAqL1xuXG5pbXBvcnQgeyBwZXJjZW50aWZ5LCBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQnVmZmVyZWRSYW5nZXNcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuXG5jbGFzcyBCdWZmZXJlZFJhbmdlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwcm9ncmVzcycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWVrZWQnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMucmFuZ2UgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkX19yYW5nZSdcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkJ1xuXHRcdH0pLmFwcGVuZCh0aGlzLnJhbmdlKTtcblx0fVxuXG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IGJ1ZmZlcmVkID0gdGhpcy5wbGF5ZXIudmlkZW8uYnVmZmVyZWQ7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihidWZmZXJlZCA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgZW5kID0gMDtcblx0XHRpZiAoYnVmZmVyZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0ZW5kID0gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xuXHRcdH1cblxuXHRcdGxldCB3aWR0aCA9IDA7XG5cdFx0aWYgKGR1cmF0aW9uID4gMCkge1xuXHRcdFx0d2lkdGggPSBwZXJjZW50aWZ5KGVuZCwgZHVyYXRpb24pICogMTAwICsgJyUnXG5cdFx0fVxuXHRcdHRoaXMucmFuZ2UuY3NzKHsgd2lkdGggfSlcblx0fVxufVxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdCdWZmZXJlZFJhbmdlcycsIEJ1ZmZlcmVkUmFuZ2VzKTtcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcmVkUmFuZ2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuXG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0ZHJhZyA6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lIDogJydcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblxuXHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNlbW92ZScsIHsgeCA6IGUucGFnZVggfSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRtb3VzZXVwIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubWFya2VyVGltZS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZXVwJywgeyB4IDogZS5wYWdlWCB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNldCBkcmFnKHZhbHVlKSB7XG5cdFx0dGhpcy5fZHJhZyA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygndGltZS1tYXJrZXItLWRyYWcnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZHJhZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fZHJhZztcblx0fVxuXG5cdF9vbk1vdXNlZG93bihlKSB7XG5cdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5vcHRpb25zLmRyYWcpIHtcblx0XHRcdHRoaXMuZHJhZyA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZWRvd24nKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gTWFya2VyIG9mIGN1cnJlbnQgdGltZSBvbiB0aW1lbGluZVxuXHRcdHRoaXMubWFya2VyVGltZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lJylcblx0XHRcdC5oaWRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoYHRpbWUtbWFya2VyICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclRpbWUpXG5cblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01hcmtlcicsIE1hcmtlcik7XG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNlY3Rpb25Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ2hlY2tib3ggZnJvbSAnLi9Db250cm9sQ2hlY2tib3gnO1xuXG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jaGVja2VkPXRydWVdXG4gKiBAZXh0ZW5kcyBDb250cm9sQ2hlY2tib3hcbiAqL1xuY2xhc3MgU2VjdGlvbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ2hlY2tib3gge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdsaXN0LXVsJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzZWN0aW9uJyxcblx0XHRcdG5hbWUgOiAnc2VjdGlvbicsXG5cdFx0XHR0aXRsZSA6ICfQn9C+0LrQsNC30LDRgtGML9GB0LrRgNGL0YLRjCDRgdC10LrRhtC40LgnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMuX29uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25DaGVja2VkKGUsIGRhdGEpIHtcblx0XHRzdXBlci5vbkNoZWNrZWQoZSk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnN0b2dnbGUnLCB7XG5cdFx0XHRjaGVja2VkIDogZGF0YS5jaGVja2VkLFxuXHRcdFx0dmlldyA6IHRoaXMucGxheWVyLnZpZXdcblx0XHR9KTtcblx0fVxuXG5cdF9vblNlY3Rpb25zSW5pdChlKSB7XG5cdFx0dGhpcy5vcHRpb25zLmRpc2FibGUgPSB0aGlzLmRpc2FibGUgPSBmYWxzZTtcblx0XHR0aGlzLmNoZWNrZWQgPSB0cnVlO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU2VjdGlvbkNvbnRyb2wnLCBTZWN0aW9uQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnc2VjdGlvbicsIFNlY3Rpb25Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIGNvbnRyb2wtY2hlY2tib3guanNcbiAqL1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNoZWNrZWQ9ZmFsc2VdXG4gKiBAY2xhc3MgQ29udHJvbENoZWNrYm94IFRvZ2dhYmxlIGNvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbENoZWNrYm94IGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLm9wdGlvbnMuY2hlY2tlZCB8fCBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2xlcGxheWVyX2NoZWNrZWQnLCB0aGlzLm9uQ2hlY2tlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIGZvciBjaGVja2VkIHByb3BlcnR5XG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtib29sZWFufSB2YWxcblx0ICovXG5cdHNldCBjaGVja2VkICh2YWwpIHtcblx0XHRpZiAodGhpcy5kaXNhYmxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhbCA9ICEhdmFsO1xuXHRcdHRoaXMuX2NoZWNrZWQgPSB2YWxcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2NvbnRyb2wtY2hlY2tib3gtLWNoZWNrZWQnLCB2YWwpO1xuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9jaGVja2VkJywgeyBjaGVja2VkIDogdmFsIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ5XG5cdCAqIEBwdWJsaWNcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBjaGVja2VkICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hlY2tlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdH1cblxuXHQvKipcblx0ICogT24gY2hlY2tlZCBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGFcblx0ICovXG5cdG9uQ2hlY2tlZChlLCBkYXRhKSB7XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtY2hlY2tib3ggJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YFxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ2hlY2tib3gnLCBDb250cm9sQ2hlY2tib3gpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NoZWNrYm94JywgQ29udHJvbENoZWNrYm94KTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDaGVja2JveDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDaGVja2JveC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRnVsbHNjcmVlbkNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBGdWxsc2NyZWVuQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBGdWxsc2NyZWVuQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdhcnJvd3MtYWx0Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdmdWxsc2NyZWVuJyxcblx0XHRcdHRpdGxlIDogJ9Cg0LDQt9Cy0LXRgNC90YPRgtGML9GB0LLQtdGA0L3Rg9GC0Ywg0L3QsCDQv9C+0LvQvdGL0Lkg0Y3QutGA0LDQvScsXG5cdFx0XHRuYW1lIDogJ2Z1bGxzY3JlZW4nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSlcblx0XHR0aGlzLnBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdGdWxsc2NyZWVuQ29udHJvbCcsIEZ1bGxzY3JlZW5Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdmdWxsc2NyZWVuJywgRnVsbHNjcmVlbkNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgRnVsbHNjcmVlbkNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9GdWxsc2NyZWVuQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUmF0ZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4vQ29udHJvbFRleHQnO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlscy9jb29raWUnO1xuXG4vKipcbiAqIEBjbGFzcyBSYXRlQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHByb3BlcnR5IHtDb250cm9sfSBkb3duQ29udHJvbCAgRG93biByYXRlIGNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbH0gdXBDb250cm9sICBVcCByYXRlIGNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRSYXRlIENvbnRyb2wgb2YgY3V1cmVudCByYXRlXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFJhdGVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdjb250cm9sLWNvbnRhaW5lcidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3JhdGVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZG93bkNvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRuYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRpY29uTmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9C80LXQvdGM0YjQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uZGVjcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLnVwQ29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS11cCcsXG5cdFx0XHRuYW1lIDogJ3JhdGUtdXAnLFxuXHRcdFx0aWNvbk5hbWUgOiAnZm9yd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uaW5jcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmN1cnJlbnRSYXRlID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS1jdXJyZW50Jyxcblx0XHRcdG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZpZGVvLnJhdGUgPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuZG93bkNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50UmF0ZS5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLnVwQ29udHJvbC5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZCgpIHtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqL1xuXHRfb25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cblxuXHR1cGRhdGUodmFsdWUpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dmFsdWUgPSB2YWx1ZSB8fCB2aWRlby5yYXRlO1xuXHRcdHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSlcblx0XHRcdC50b0ZpeGVkKDIpXG5cdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0LnJlcGxhY2UoLywvZywgJy4nKTtcblx0XHR0aGlzLmN1cnJlbnRSYXRlLnRleHQgPSAnw5cnICsgdmFsdWU7XG5cblx0XHRpZih0aGlzLmRpc2FibGUpIHJldHVybjtcblxuXHRcdGlmKHZpZGVvLnJhdGUgPD0gdmlkZW8ucmF0ZU1pbikge1xuXHRcdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYodmlkZW8ucmF0ZSA+PSB2aWRlby5yYXRlTWF4KSB7XG5cdFx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHNldCBkaXNhYmxlKHZhbHVlKSB7XG5cdFx0dGhpcy5fZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMuZG93bkNvbnRyb2wuZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSB2YWx1ZTtcblx0fVxuXG5cdGluaXQgKCkge1xuXHRcdGxldCByYXRlID0gQ29va2llLmdldCgncmF0ZScsIHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0KTtcblx0XHR0aGlzLnNob3cocmF0ZSk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1JhdGVDb250cm9sJywgUmF0ZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3JhdGUnLCBSYXRlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBSYXRlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1JhdGVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBCYWNrd2FyZENvbnRyb2wuanNcbiAqXG4gKiBCYWNrd2FyZCBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbnNcbiAqIEBjbGFzcyBCYWNrd2FyZENvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQmFja3dhcmRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3VuZG8nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2JhY2t3YXJkJyxcblx0XHRcdG5hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0dGl0bGUgOiBg0J7RgtC80L7RgtCw0YLRjCDQvdCw0LfQsNC0INC90LAgJHtwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bX0g0YHQtdC60YPQvdC0YCxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdmaXJzdHBsYXknLCAoKSA9PiB0aGlzLmRpc2FibGUgPSBmYWxzZSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgLT0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHR0aGlzLnBsYXllci5zcGxhc2hJY29uLnNob3coJ3VuZG8nKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0JhY2t3YXJkQ29udHJvbCcsIEJhY2t3YXJkQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgQmFja3dhcmRDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQmFja3dhcmRDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTb3VyY2VDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ29udGFpbmVyIGZyb20gJy4vQ29udHJvbENvbnRhaW5lcic7XG5cblxuLyoqXG4gKiBAY2xhc3MgU291cmNlQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGV4dGVuZHMgQ29udHJvbENvbmFpbmVyXG4gKi9cbmNsYXNzIFNvdXJjZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcblx0Ly8gVE9ETzog0JTQtdC70LDRgtGMIGRpc2FibGUvZW5hYmxlINC/0L7RgdC70LUgb3B0aW9ucyBpbml0XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG5hbWUgOiAnc291cmNlJyxcblx0XHRcdGljb25OYW1lIDogJ2J1bGxzZXllJyxcblx0XHRcdHRpdGxlIDogJ9Ca0LDRh9C10YHRgtCy0L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3NvdXJjZS1jb250cm9sJyxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5aW5nJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uSXRlbUNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBpdGVtID0gJChlLnRhcmdldCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR2aWRlby5wbGF5YmFja1F1YWxpdHkgPSBpdGVtLmRhdGEoJ25hbWUnKTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmhpZGUoKTtcblxuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoZSwgZGF0YSkge1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHRnZXREYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XG5cdH1cblxuXHRnZXRDdXJyZW50VmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLnBsYXliYWNrUXVhbGl0eTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NvdXJjZUNvbnRyb2wnLCBTb3VyY2VDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzb3VyY2UnLCBTb3VyY2VDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFNvdXJjZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sQ29udGFpbmVyLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBDb250cm9sQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgQ29udHJvbENvbnRhaW5lciBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl9hY3RpdmUgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIExpc3Qgb2YgaXRlbXNcblx0XHQgKlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKiBAdHlwZSB7QXJyYXl9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ID0gW107XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGl0ZW0gb2YgY29udGFpbmVyIGJ5IGluZGV4XG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqL1xuXHRnZXRCeUluZGV4KGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMubGlzdFtpbmRleF07XG5cdH1cblxuXHQvKipcblx0ICogU2V0IGl0ZW0gYWN0aXZlIGJ5IGluZGV4XG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqL1xuXHRzZXRBY3RpdmVCeUluZGV4KGluZGV4KSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZS5yZW1vdmVDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdH1cblx0XHR0aGlzLl9hY3RpdmUgPSB0aGlzLmxpc3RbaW5kZXhdLmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldHRlciBvZiBhY3RpdmUgZmllbGRcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHQgKi9cblx0Z2V0IGFjdGl2ZSAoKSB7XG5cdFx0aWYgKHRoaXMuX2FjdGl2ZSAmJiB0aGlzLl9hY3RpdmUubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZTtcblx0XHR9XG5cdFx0dGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZiAoaXRlbS5oYXNDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpKSB7XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IGl0ZW07XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBhY3RpdmUgZmllbGRcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge2pRdWVyeX0gSXRlbSBvZiBjb250YWluZXJcblx0ICovXG5cdHNldCBhY3RpdmUgKGVsZW1lbnQpIHtcblx0XHRpZiAodGhpcy5hY3RpdmUpIHtcblx0XHRcdHRoaXMuYWN0aXZlLnJlbW92ZUNsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHQkKGVsZW1lbnQpLmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdHRoaXMuX2FjdGl2ZSA9IGVsZW1lbnQ7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZVxuXHR9XG5cblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ3xqUXVlcnl9IENvbnRlbnQgb2YgaXRlbVxuXHQgKiBAcGFyYW0ge09iamVjdH0gRGF0YSBvZiBpdGVtXG5cdCAqL1xuXHRhZGRJdGVtIChjb250ZW50LCBkYXRhKSB7XG5cdFx0Y29uc3QgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbScpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgZGF0YS50b29sdGlwKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKSlcblx0XHRcdC5hcHBlbmQoY29udGVudCk7XG5cblx0XHR0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KGl0ZW0pO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuYXBwZW5kKGl0ZW0pO1xuXG5cdFx0cmV0dXJuIGl0ZW07XG5cdH1cblxuXHQvKipcblx0ICogT24gaXRlbSBjbGljayBldmVudCBoYW5kbGVyXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHQgKi9cblx0b25JdGVtQ2xpY2sgKGUpIHtcblx0XHR0aGlzLmFjdGl2ZSA9IGUuY3VycmVudFRhcmdldDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX0gY29udHJvbC1jb250YWluZXJgXG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpXG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsdWUoKVxuXG5cdFx0aWYoZGF0YSA9PSBudWxsIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLmRpc2FibGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGlzdCA9IFtdO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmVtcHR5KCk7XG5cblx0XHRkYXRhLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRjb25zdCBlbGVtID0gdGhpcy5hZGRJdGVtKGl0ZW0udGl0bGUsIGl0ZW0pO1xuXHRcdFx0aWYoY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5uYW1lID09PSBpdGVtLm5hbWUpIHtcblxuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IGVsZW07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5kaXNhYmxlID0gZmFsc2U7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ29udGFpbmVyJywgQ29udHJvbENvbnRhaW5lcik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY29udGFpbmVyJywgQ29udHJvbENvbnRhaW5lcik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbnRhaW5lci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU3VidGl0bGVDb250cm9sLmpzXG4gKlxuICogU3VidGl0bGUgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbENvbnRhaW5lciBmcm9tICcuL0NvbnRyb2xDb250YWluZXInO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBTdWJ0aXRsZUNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xDb250YWluZXJcbiAqL1xuY2xhc3MgU3VidGl0bGVDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2NvbW1lbnRpbmctbycsXG5cdFx0XHR0aXRsZSA6ICfQodGD0LHRgtC40YLRgNGLJyxcblx0XHRcdG5hbWUgOiAnc3VidGl0bGUnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3N1YnRpdGxlLWNvbnRyb2wnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXlpbmcnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbigndHJhY2tzY2hhbmdlJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHZpZGVvLnRyYWNrID0gbnVsbFxuXHR9XG5cblx0b25JdGVtQ2xpY2sgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXG5cdFx0Y29uc3QgaXRlbSA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRpZiAoaXRlbS5kYXRhKCkpIHtcblx0XHRcdHZpZGVvLnRyYWNrID0gaXRlbS5kYXRhKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpXG5cdH1cblxuXHRvblBsYXllckluaXRlZChlLCBkYXRhKSB7XG5cdFx0dGhpcy51cGRhdGUoKVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdHN1cGVyLnVwZGF0ZSgpO1xuXHRcdGNvbnN0IGhhc1ZhbHVlID0gISEodGhpcy5nZXRDdXJyZW50VmFsdWUoKSAmJiB0aGlzLmdldEN1cnJlbnRWYWx1ZSgpLm5hbWUgIT0gbnVsbCk7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKFxuXHRcdFx0J2NvbnRyb2wtY2hlY2tib3gtLWNoZWNrZWQnLFxuXHRcdFx0aGFzVmFsdWVcblx0XHQpXG5cdH1cblxuXHRnZXREYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby5zdWJ0aXRsZXM7XG5cdH1cblxuXHRnZXRDdXJyZW50VmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLnRyYWNrO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTdWJ0aXRsZUNvbnRyb2wnLCBTdWJ0aXRsZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3N1YnRpdGxlJywgU3VidGl0bGVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFN1YnRpdGxlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRG93bmxvYWRDb250cm9sLmpzXG4gKlxuICogRG93bmxvYWQgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBEb3dubG9hZENvbnRyb2xcbiAqIEBleG50ZWRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRG93bmxvYWRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe1xuXHRcdFx0dGl0bGUgOiAn0KHQutCw0YfQsNGC0Ywg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnZG93bmxvYWQnLFxuXHRcdFx0bmFtZSA6ICdkb3dubG9hZCdcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdsb2Fkc3RhcnQnLCB0aGlzLm9uTG9hZFN0YXJ0LmJpbmQodGhpcykpO1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdC8vIFRPRE86INCU0L7QvtC/0YDQtdC00LXQu9C40YLRjCDRjdGC0L7RgiDQvNC10YLQvtC0LCDQsCDQvdC1INC/0LXRgNC10L7Qv9GA0LXQtNC70LXQuNGC0Yxcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8YSAvPicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGhyZWYgOiAnJyxcblx0XHRcdFx0dGFyZ2V0IDogJ19ibGFuaycsXG5cdFx0XHRcdGRvd25sb2FkIDogdHJ1ZSxcblx0XHRcdFx0dGl0bGUgOiB0aGlzLm9wdGlvbnMudGl0bGUsXG5cdFx0XHR9KVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLnBsYXllciwgeyBpY29uTmFtZSA6ICdkb3dubG9hZCcgfSkuZWxlbWVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBsaW5rIGZpZWxkXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFBhdGggZm9yIHZpZGVvXG5cdCAqL1xuXHRzZXQgbGluayAodmFsdWUpIHtcblx0XHRjb25zdCBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0cGFyc2VyLmhyZWYgPSB2YWx1ZTtcblx0XHRsZXQgZmlsZU5hbWUgPSBwYXJzZXIucGF0aG5hbWUuc3BsaXQoJy8nKTtcblx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lW2ZpbGVOYW1lLmxlbmd0aCAtIDFdO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKHtcblx0XHRcdGhyZWYgOiB2YWx1ZSxcblx0XHRcdGRvd25sb2FkIDogZmlsZU5hbWVcblx0XHR9KTtcblx0fVxuXG5cblx0b25Mb2FkU3RhcnQoZSwgZGF0YSkge1xuXHRcdHRoaXMubGluayA9IHRoaXMucGxheWVyLnZpZGVvLnNyYy51cmxcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRG93bmxvYWRDb250cm9sJywgRG93bmxvYWRDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkb3dubG9hZCcsIERvd25sb2FkQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBEb3dubG9hZENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Eb3dubG9hZENvbnRyb2wuanMiLCJcbid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgS2V5YmluZGluZ0luZm9Db250cm9sLmpzXG4gKlxuICogSW5mbyBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBLZXlCaW5kaW5nSW5mb0NvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBLZXlCaW5kaW5nSW5mb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnaW5mbycsXG5cdFx0XHR0aXRsZSA6ICfQmNC90YTQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnaW5mby1jb250cm9sJyxcblx0XHRcdG5hbWUgOiAnaW5mbydcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0bGV0IGtleUJpbmRpbmcgPSB0aGlzLnBsYXllci5vcHRpb25zLmtleUJpbmRpbmc7XG5cdFx0bGV0IGluZm9Db250ZW50ID0gYGA7XG5cdFx0Zm9yIChsZXQgX2tleSBpbiBrZXlCaW5kaW5nKSB7XG5cdFx0XHRpZiAoIWtleUJpbmRpbmcuaGFzT3duUHJvcGVydHkoX2tleSkpIGNvbnRpbnVlO1xuXG5cdFx0XHRsZXQgaG90a2V5ID0ga2V5QmluZGluZ1tfa2V5XTtcblx0XHRcdGxldCBpdGVtID0gJyc7XG5cdFx0XHRsZXQga2V5U3RyaW5nID0gJyc7XG5cblx0XHRcdGhvdGtleS5pbmZvLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYgKGluZGV4ICE9PSAwKSB7XG5cdFx0XHRcdFx0a2V5U3RyaW5nICs9IGAgKyBgXG5cdFx0XHRcdH1cblx0XHRcdFx0a2V5U3RyaW5nICs9IGA8a2JkIGNsYXNzPVwibGVwbGF5ZXIta2V5XCI+JHtrZXl9PC9rYmQ+YFxuXHRcdFx0fSk7XG5cblx0XHRcdGl0ZW0gPSBgXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJpbmZvLWNvbnRyb2xfX2l0ZW1cIj5cblx0XHRcdFx0XHQke2tleVN0cmluZ30gLSAke2hvdGtleS5kZXNjcmlwdGlvbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRgXG5cblx0XHRcdGluZm9Db250ZW50ICs9IGl0ZW07XG5cblx0XHR9XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnRcblx0XHRcdC5hZGRDbGFzcygnaW5mby1jb250cm9sX19jb250ZW50Jylcblx0XHRcdC5hcHBlbmQoaW5mb0NvbnRlbnQpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnS2V5QmluZGluZ0luZm9Db250cm9sJywgS2V5QmluZGluZ0luZm9Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdrZXliaW5kaW5nIGluZm8nLCBLZXlCaW5kaW5nSW5mb0NvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgS2V5QmluZGluZ0luZm9Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvS2V5YmluZGluZ0luZm9Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lSW5mb0NvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4vQ29udHJvbFRleHQnO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVGltZUluZm9Db250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUncyB0ZXh0XG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSB0b3RhbFRpbWUgVG90YWwgdGltZVxuICogQHByb3BlcnR5IHtqUXVlcnl9IGxpbmVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZUluZm9Db250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3RpbWVsaW5lIHRpbWVsaW5lLWNvbnRhaW5lcicsXG5cdFx0XHRuYW1lIDogJ3RpbWUtaW5mbydcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHRpbWUpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgKGUpID0+IHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb24pO1xuXHRcdH0pO1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0Y29uc3QgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZTtcblx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ2NvbnRyb2wtdGltZV9fY3VycmVudCd9KTtcblx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7IGNsYXNzTmFtZSA6ICdjb250cm9sLXRpbWVfX3RvdGFsJ30pO1xuXG5cdFx0aWYoaXNOYU4oZHVyYXRpb24pIHx8IGR1cmF0aW9uID09IG51bGwpIHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKGR1cmF0aW9uKTtcblx0XHR9XG5cblx0XHRpZihjdXJyZW50VGltZSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZShjdXJyZW50VGltZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtdGltZScpO1xuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5fdG90YWxUaW1lQ29udHJvbC5lbGVtZW50KVxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25QbGF5ZXJJbml0ZWQoZSkge1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdH1cblxuXHRfb25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lSW5mb0NvbnRyb2wnLCBUaW1lSW5mb0NvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVpbmZvJywgVGltZUluZm9Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVJbmZvQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbC5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxzL2Nvb2tpZSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCB7IElTX1NBRkFSSSwgSVNfSU9TLCBJU19BTkRST0lEIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcblxuXG5jbGFzcyBIdG1sNSBleHRlbmRzIEVudGl0eSB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMubWVkaWEgPSB0aGlzLmVsZW1lbnRbMF07XG5cblx0XHR0aGlzLnN1YnRpdGxlcyA9IFtdO1xuXHRcdHRoaXMuYnVmZmVyUmFuZ2VzID0gW107XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMucGxheWVyLm9wdGlvbnMuc3JjO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXIgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSB0aGlzLnBsYXllci5vcHRpb25zLnBvc3Rlcjtcblx0XHR9XG5cblx0XHRpZih0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKVswXTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2xvYWRzdGFydCcsIHRoaXMub25Mb2FkU3RhcnQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd0aW1ldXBkYXRlJywgdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMub25EdXJhdGlvbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3Byb2dyZXNzJywgdGhpcy5vblByb2dyZXNzLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignc2Vla2luZycsIHRoaXMub25TZWVraW5nLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignc2Vla2VkJywgdGhpcy5vblNlZWtlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3ZvbHVtZWNoYW5nZScsIHRoaXMub25Wb2x1bWVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5vbkRibGNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncGxheScsIHRoaXMub25QbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncGF1c2UnLCB0aGlzLm9uUGF1c2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdyYXRlY2hhbmdlJywgdGhpcy5vblJhdGVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdlbmRlZCcsIHRoaXMub25FbmRlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NhbnBsYXl0aHJvdWdoJywgdGhpcy5vbkNhbnBsYXlUaHJvdWdoLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignd2FpdGluZycsIHRoaXMub25XYWl0aW5nLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZXJyb3InLCB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkxvYWRTdGFydChlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdsb2Fkc3RhcnQnKTtcblx0fVxuXG5cdG9uVGltZVVwZGF0ZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdH1cblxuXHRvbkR1cmF0aW9uQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdH1cblxuXHRvblByb2dyZXNzKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3Byb2dyZXNzJyk7XG5cdH1cblxuXHRvblNlZWtpbmcoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXHR9XG5cblx0b25TZWVrZWQoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdH1cblxuXHRvblZvbHVtZUNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uQ2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0b25EYmxjbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHRvblBsYXkoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdH1cblxuXHRvblBhdXNlKCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0fVxuXG5cdG9uUGxheWluZygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblx0fVxuXG5cdG9uUmF0ZUNoYW5nZSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uRW5kZWQoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHR9XG5cblx0b25DYW5wbGF5VGhyb3VnaCgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXl0aHJvdWdoJyk7XG5cdH1cblxuXHRvbldhaXRpbmcoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cdH1cblxuXHRvbkVycm9yKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgeyBjb2RlIDogZS50YXJnZXQuZXJyb3IuY29kZSB9KTtcblx0fVxuXG5cdC8qIFRPRE8gKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuY3R4O1xuXHRcdFtcblxuXHRcdFx0Ly8gUmVtb3ZlIGNvbnRyb2xzIGJlY2F1c2Ugd2UgZG9udCBub3Qgc3VwcG9ydCBuYXRpdmUgY29udHJvbHMgeWV0XG5cdFx0XHQnY29udHJvbHMnLFxuXHRcdFx0J3Bvc3RlcicsXG5cblx0XHRcdC8vIEl0IGlzIHVubmVjZXNzYXJ5IGF0dHJzLCB0aGlzIGZ1bmN0aW9uYWxpdHkgc29sdmUgQ1NTXG5cdFx0XHQnaGVpZ2h0Jyxcblx0XHRcdCd3aWR0aCdcblxuXHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyKGl0ZW0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gU2V0IGF0dHJzIGZyb20gb3B0aW9uc1xuXHRcdFtcblx0XHRcdCdwcmVsb2FkJyxcblx0XHRcdCdhdXRvcGxheScsXG5cdFx0XHQnbG9vcCcsXG5cdFx0XHQnbXV0ZWQnXG5cdFx0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYXR0cihpdGVtLCB0aGlzLnBsYXllci5vcHRpb25zW2l0ZW1dKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnByb3AoaXRlbSwgdGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCdzb3VyY2VbZGF0YS1xdWFsaXR5XScpLmVhY2goKGksIGl0ZW0pID0+IHtcblx0XHRcdCQoaXRlbSkucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jdXJyZW50VGltZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSAodmFsdWUpIHtcblx0XHRsZXQgdGltZTtcblx0XHRpZiAodmFsdWUgPiB0aGlzLmR1cmF0aW9uKSB7XG5cdFx0XHR0aW1lID0gdGhpcy5kdXJhdGlvblxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG5cdFx0XHR0aW1lID0gMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZWxvYWQnLCB7IGN1cnJlbnRUaW1lIDogdGltZSB9KTtcblxuXHRcdHRoaXMubWVkaWEuY3VycmVudFRpbWUgPSB0aW1lO1xuXHR9XG5cblx0Z2V0IGR1cmF0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5kdXJhdGlvbjtcblx0fVxuXG5cdGdldCBoZWlnaHQgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmNsaWVudEhlaWdodDtcblx0fVxuXG5cdGdldCB3aWR0aCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY2xpZW50V2lkdGg7XG5cdH1cblxuXHRnZXQgcmF0ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGxheWJhY2tSYXRlO1xuXHR9XG5cblx0c2V0IG11dGVkKHZhbHVlKSB7XG5cdFx0dGhpcy5tZWRpYS5tdXRlZCA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLm11dGVkXG5cdH1cblxuXHRnZXQgcmF0ZU1heCgpIHtcblx0XHRsZXQgbWF4ID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1heDtcblx0XHRpZihJU19JT1MgfHwgSVNfQU5EUk9JRCkge1xuXHRcdFx0bWF4ID0gSHRtbDUuTU9CSUxFX01BWF9SQVRFO1xuXHRcdH1cblx0XHRpZihJU19TQUZBUkkpIHtcblx0XHRcdG1heCA9IEh0bWw1LlNBRkFSSV9NQVhfUkFURTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWF4O1xuXHR9XG5cblx0Z2V0IHJhdGVNaW4oKSB7XG5cdFx0bGV0IG1pbiA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cblx0XHRpZiAoSVNfSU9TIHx8IElTX0FORFJPSUQpIHtcblx0XHRcdG1pbiA9IEh0bWw1Lk1PQklMRV9NSU5fUkFURTtcblx0XHR9XG5cblx0XHRpZiAoSVNfU0FGQVJJKSB7XG5cdFx0XHRtaW4gPSBIdG1sNS5TQUZBUklfTUlOX1JBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdHNldCByYXRlICh2YWx1ZSkge1xuXHRcdHN1cGVyLnJhdGUgPSB2YWx1ZTtcblx0XHR0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIub3B0aW9ucy5zb3VyY2VzLm1hcChpdGVtID0+ICh7XG5cdFx0XHRuYW1lIDogaXRlbS50aXRsZSxcblx0XHRcdC4uLml0ZW1cblx0XHR9KSk7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRzdXBlci5wbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHJhdGUgPSB0aGlzLnJhdGU7XG5cdFx0Y29uc3Qgc3RvcCA9IHRoaXMucGF1c2VkO1xuXG5cdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0XHR0aGlzLnBsYXliYWNrUmF0ZSA9IHJhdGU7XG5cdFx0dGhpcy5jdXJyZW50VGltZSA9IHRpbWU7XG5cblx0XHRpZiAoc3RvcCkge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLl9wbGF5YmFja1F1YWxpdHkpO1xuXG5cdH1cblxuXHRnZXQgcGxheWJhY2tRdWFsaXR5KCkge1xuXHRcdHJldHVybiB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdH1cblxuXHRzZXQgc3JjIChzcmMpIHtcblx0XHRpZihzcmMgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmKHRoaXMuc3JjICYmIHRoaXMuc3JjLnVybCA9PT0gc3JjLnVybCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5tZWRpYS5zcmMgPSBzcmMudXJsO1xuXG5cdFx0dGhpcy5fc291cmNlID0gc3JjO1xuXHR9XG5cblx0Z2V0IHNyYyAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3NvdXJjZVxuXHR9XG5cblx0Z2V0IHRyYWNrICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdHJhY2s7XG5cdH1cblxuXHRzZXQgdHJhY2sgKHZhbHVlKSB7XG5cdFx0Wy4uLnRoaXMubWVkaWEudGV4dFRyYWNrc10uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmKHZhbHVlICE9IG51bGwgJiYgaXRlbS5sYW5ndWFnZSA9PT0gdmFsdWUubGFuZ3VhZ2UpIHtcblx0XHRcdFx0aXRlbS5tb2RlID0gJ3Nob3dpbmcnXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpdGVtLm1vZGUgPSAnaGlkZGVuJztcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLl90cmFjayA9IHZhbHVlO1xuXHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBhdXNlZDtcblx0fVxuXG5cdGdldCB2b2x1bWUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnZvbHVtZTtcblx0fVxuXG5cdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0c3VwZXIudm9sdW1lID0gdmFsdWU7XG5cdFx0Y29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cdFx0aWYgKHZhbHVlID4gMSkge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSAxO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCBwbGF5ZXIub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gdmFsdWU7XG5cdFx0fVxuXHRcdHRoaXMubWVkaWEubXV0ZSA9ICh2YWx1ZSA8IHBsYXllci5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpO1xuXHR9XG5cblxuXHRnZXQgYnVmZmVyZWQgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmJ1ZmZlcmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1RpbWVSYW5nZXN9XG5cdCAqL1xuXHRnZXQgc2Vla2FibGUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnNlZWthYmxlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1RpbWVSYW5nZXN9XG5cdCAqL1xuXHRnZXQgcGxheWVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBsYXllZDtcblx0fVxuXG5cdGdldCBwbGF5ZWRQZXJjZW50YWdlKCkge1xuXHRcdGxldCByZXN1bHQgPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCArPSAodGhpcy5wbGF5ZWQuZW5kKGkpIC0gdGhpcy5wbGF5ZWQuc3RhcnQoaSkpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdCAvIHRoaXMuZHVyYXRpb24gKiAxMDBcblx0fVxuXG5cdGdldCBjdXJyZW50U3JjKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmN1cnJlbnRTcmM7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRzdXBlci5pbml0KCk7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHR0aGlzLl9pbml0U3VidGl0bGVzKCk7XG5cdFx0dGhpcy5faW5pdFZpZGVvKClcblx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHRcdFx0dGhpcy5faW5pdFZvbHVtZSgpO1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRzdXBwb3J0c0Z1bGxTY3JlZW4oKSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1lZGlhLndlYmtpdEVudGVyRnVsbFNjcmVlbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc3QgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuXHRcdFx0Ly8gU2VlbXMgdG8gYmUgYnJva2VuIGluIENocm9taXVtL0Nocm9tZSAmJiBTYWZhcmkgaW4gTGVvcGFyZFxuXHRcdFx0aWYgKCgvQW5kcm9pZC8pLnRlc3QodXNlckFnZW50KSB8fCAhKC9DaHJvbWV8TWFjIE9TIFggMTAuNS8pLnRlc3QodXNlckFnZW50KSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZW50ZXJGdWxsc2NyZWVuKCkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5tZWRpYTtcblx0XHRpZiAodmlkZW8ucGF1c2VkICYmIHZpZGVvLm5ldHdvcmtTdGF0ZSA8PSB2aWRlby5IQVZFX01FVEFEQVRBKSB7XG5cdFx0XHQvLyBhdHRlbXB0IHRvIHByaW1lIHRoZSB2aWRlbyBlbGVtZW50IGZvciBwcm9ncmFtbWF0aWMgYWNjZXNzXG5cdFx0XHQvLyB0aGlzIGlzbid0IG5lY2Vzc2FyeSBvbiB0aGUgZGVza3RvcCBidXQgc2hvdWxkbid0IGh1cnRcblx0XHRcdHRoaXMucGxheSgpO1xuXG5cdFx0XHQvLyBwbGF5aW5nIGFuZCBwYXVzaW5nIHN5bmNocm9ub3VzbHkgZHVyaW5nIHRoZSB0cmFuc2l0aW9uIHRvIGZ1bGxzY3JlZW5cblx0XHRcdC8vIGNhbiBnZXQgaU9TIH42LjEgZGV2aWNlcyBpbnRvIGEgcGxheS9wYXVzZSBsb29wXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0XHR2aWRlby53ZWJraXRFbnRlckZ1bGxTY3JlZW4oKTtcblx0XHRcdH0sIDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2aWRlby53ZWJraXRFbnRlckZ1bGxTY3JlZW4oKTtcblx0XHR9XG5cdH1cblxuXHRleGl0RnVsbHNjcmVlbigpIHtcblx0XHR0aGlzLm1lZGlhLndlYmtpdEV4aXRGdWxsU2NyZWVuKCk7XG5cdH1cblxuXHR0b2dnbGVQbGF5ICgpIHtcblx0XHRpZiAoIXRoaXMubWVkaWEucGxheWVkIHx8IHRoaXMubWVkaWEucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdHBsYXkgKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgcGxheVByb21pc2UgPSB0aGlzLm1lZGlhLnBsYXkoKTtcblxuXHRcdGlmKHBsYXlQcm9taXNlICE9IG51bGwpIHtcblx0XHRcdHBsYXlQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdHBhdXNlICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHBhdXNlUHJvbWlzZSA9IHRoaXMubWVkaWEucGF1c2UoKTtcblxuXHRcdGlmKHBhdXNlUHJvbWlzZSAhPSBudWxsKSB7XG5cdFx0XHRwYXVzZVByb21pc2UudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0bG9hZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5sb2FkKClcblx0fVxuXG5cdF9pbml0U3VidGl0bGVzICgpIHtcblx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXHRcdHRoaXMuZWxlbWVudC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSAkKHRoaXMpLmF0dHIoJ3NyY2xhbmcnKTtcblx0XHRcdGNvbnN0IHRpdGxlID0gJCh0aGlzKS5hdHRyKCdsYWJlbCcpO1xuXHRcdFx0Y29uc3Qgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcblx0XHRcdGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHNyYy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdF9zZWxmLnN1YnRpdGxlcy5wdXNoKHtcblx0XHRcdFx0XHR0aXRsZSA6IHRpdGxlLFxuXHRcdFx0XHRcdG5hbWUgOiBsYW5ndWFnZSxcblx0XHRcdFx0XHRsYW5ndWFnZSA6IGxhbmd1YWdlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0X2luaXRWaWRlbyAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5tZWRpYS5yZWFkeVN0YXRlID4gSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcpIHtcblx0XHRcdGRmZC5yZXNvbHZlKClcblx0XHRcdHRoaXMuX3RleHRUcmFja3NIYWNrKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcy5tZWRpYSkub25lKCdsb2FkZWRtZXRhZGF0YScsIChlKSA9PiB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKClcblx0XHRcdFx0dGhpcy5fdGV4dFRyYWNrc0hhY2soKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRkZmQubm90aWZ5KCk7XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRfdGV4dFRyYWNrc0hhY2sgKCkge1xuXG5cdFx0Ly8gVGhpcyBpcyBnZW5lcmFsbHkgZm9yIEZpcmVmb3ggb25seVxuXHRcdC8vIGJlY2F1c2UgaXQgc29tZWhvdyByZXNldHMgdHJhY2sgbGlzdFxuXHRcdC8vIGZvciB2aWRlbyBlbGVtZW50IGFmdGVyIERPTSBtYW5pcHVsYXRpb24uXG5cblx0XHRpZiAodGhpcy5tZWRpYS50ZXh0VHJhY2tzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2hpbGRyZW4oJ3RyYWNrW2tpbmQ9XCJzdWJ0aXRsZXNcIl0nKS5yZW1vdmUoKTtcblx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5zdWJ0aXRsZXMpIHtcblx0XHRcdFx0aWYgKHRoaXMuc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50XG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzx0cmFjay8+Jylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2xhYmVsJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS50aXRsZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3NyYycsIHRoaXMuc3VidGl0bGVzWyBpIF0uc3JjKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignc3JjbGFuZycsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdraW5kJywgJ3N1YnRpdGxlcycpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG5cblxuLyoqXG4gKiBNaW4gcmF0ZSBmb3IgYW5kcm9pZCBhbmQgaW9zXG4gKi9cbkh0bWw1Lk1PQklMRV9NSU5fUkFURSA9IDAuNTtcblxuLyoqXG4gKiBNYXggcmF0ZSBmb3IgYW5kcm9pZCBhbmQgaW9zXG4gKi9cbkh0bWw1Lk1PQklMRV9NQVhfUkFURSA9IDJcblxuXG5IdG1sNS5TQUZBUklfTUlOX1JBVEUgPSAwLjU7XG5cbkh0bWw1LlNBRkFSSV9NQVhfUkFURSA9IDI7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnSHRtbDUnLCBIdG1sNSk7XG5leHBvcnQgZGVmYXVsdCBIdG1sNTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4uL01lZGlhRXJyb3InO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgRW50aXR5IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2sgPSBbXTtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy5wbGF5ZXIub3B0aW9ucy5zcmMgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIuZXJyb3IgPSBuZXcgTWVkaWFFcnJvcign0JLQuNC00LXQvtGE0LDQudC7INC90LUg0L3QsNC50LTQtdC9LicpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0dHJpZ2dlciguLi5hcmdzKSB7XG5cdFx0aWYoIXRoaXMuX3N0b3BMaXN0ZW4pIHtcblx0XHRcdHRoaXMuX3RyaWdnZXJTdGFjay5wdXNoKGFyZ3MpO1xuXHRcdH1cblx0XHRzdXBlci50cmlnZ2VyKC4uLmFyZ3MpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gdHJ1ZTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2suZm9yRWFjaChhcmdzID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlciguLi5hcmdzKTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKTtcblx0fVxuXG5cdHNldCBwb3N0ZXIodXJsKSB7XG5cdFx0dGhpcy5fcG9zdGVyID0gdXJsO1xuXHRcdHRoaXMudHJpZ2dlcigncG9zdGVyY2hhbmdlJywgeyB1cmwgfSk7XG5cdH1cblxuXG5cdGdldCBwb3N0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Bvc3Rlcjtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuXG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXG5cdH1cblxuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaW5uZXJIZWlnaHQoKVxuXHR9XG5cblx0Z2V0IHdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQud2lkdGgoKVxuXHR9XG5cblx0c2V0IHJhdGVNYXgodmFsdWUpIHtcblx0XHR0aGlzLl9yYXRlTWF4ID0gdmFsdWU7XG5cdH1cblxuXHRzZXQgcmF0ZU1pbih2YWx1ZSkge1xuXHRcdHRoaXMuX3JhdGVNaW4gPSB2YWx1ZTtcblx0fVxuXG5cdGdldCByYXRlTWF4KCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWF4IHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWluIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cdH1cblxuXHRnZXQgcmF0ZSgpIHtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPiB0aGlzLnJhdGVNYXggfHwgdmFsdWUgPCB0aGlzLnJhdGVNaW4pIHJldHVybjtcblx0XHRDb29raWUuc2V0KCdyYXRlJywgdmFsdWUpO1xuXHR9XG5cblx0aW5jcmVhc2VSYXRlKCkge1xuXHRcdHRoaXMucmF0ZSArPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0fVxuXG5cdGRlY3JlYXNlUmF0ZSgpIHtcblx0XHR0aGlzLnJhdGUgLT0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLnN0ZXA7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRjb25zdCBsZXZlbHMgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0XHRpZighbGV2ZWxzLnNvbWUob2JqID0+IG5hbWUgaW4gb2JqKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cblx0fVxuXG5cdGdldCBwbGF5ZWQoKSB7XG5cblx0fVxuXG5cdGdldCBkZWZhdWx0UmF0ZSgpIHtcblx0XHRyZXR1cm4gQ29va2llLmdldCgncmF0ZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0XG5cdH1cblxuXHRnZXQgZGVmYXVsdFZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIENvb2tpZS5nZXQoJ3ZvbHVtZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMudm9sdW1lLmRlZmF1bHQ7XG5cdH1cblxuXHRzZXQgdm9sdW1lKHZhbHVlKSB7XG5cdFx0Y29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cdFx0aWYodmFsdWUgPCAxICYmIHZhbHVlID4gcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0Q29va2llLnNldCgndm9sdW1lJywgdmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdHNldCBzcmMgKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBzcmMoKSB7XG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblxuXHR9XG5cblx0cGxheSgpIHtcblxuXHR9XG5cblx0cGF1c2UgKCkge1xuXG5cdH1cblxuXHRsb2FkKCkge1xuXHR9XG5cblx0dG9nZ2xlUGxheSAoKSB7XG5cdFx0aWYgKHRoaXMucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdF9pbml0UmF0ZSAoKSB7XG5cdFx0dGhpcy5yYXRlID0gdGhpcy5kZWZhdWx0UmF0ZTtcblx0fVxuXG5cdF9pbml0Vm9sdW1lICgpIHtcblx0XHR0aGlzLnZvbHVtZSA9IHRoaXMuZGVmYXVsdFZvbHVtZTtcblx0fVxuXG59XG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0VudGl0eScsIEVudGl0eSk7XG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvZW50aXR5L0VudGl0eS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG52YXIgYm91bmRGaW5kU2hpbSA9IGZ1bmN0aW9uIGZpbmQoYXJyYXksIHByZWRpY2F0ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJyYXkpO1xuXHR2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0cmV0dXJuIHBvbHlmaWxsLmFwcGx5KGFycmF5LCBhcmdzKTtcbn07XG5cbmRlZmluZShib3VuZEZpbmRTaGltLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBib3VuZEZpbmRTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGZvcmVhY2ggPSByZXF1aXJlKCdmb3JlYWNoJyk7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgpID09PSAnc3ltYm9sJztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdHRyeSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ3gnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogb2JqIH0pO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbiAgICAgICAgZm9yICh2YXIgXyBpbiBvYmopIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5cdFx0cmV0dXJuIG9iai54ID09PSBvYmo7XG5cdH0gY2F0Y2ggKGUpIHsgLyogdGhpcyBpcyBJRSA4LiAqL1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQoKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgdmFsdWUsIHByZWRpY2F0ZSkge1xuXHRpZiAobmFtZSBpbiBvYmplY3QgJiYgKCFpc0Z1bmN0aW9uKHByZWRpY2F0ZSkgfHwgIXByZWRpY2F0ZSgpKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRvYmplY3RbbmFtZV0gPSB2YWx1ZTtcblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBwcm9wcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3JlYWNoKHByb3BzLCBmdW5jdGlvbiAobmFtZSkge1xuXHRcdGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgbWFwW25hbWVdLCBwcmVkaWNhdGVzW25hbWVdKTtcblx0fSk7XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCIndXNlIHN0cmljdCc7XG5cbi8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xudmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcbnZhciBoYXNQcm90b0VudW1CdWcgPSBpc0VudW1lcmFibGUuY2FsbChmdW5jdGlvbiAoKSB7fSwgJ3Byb3RvdHlwZScpO1xudmFyIGRvbnRFbnVtcyA9IFtcblx0J3RvU3RyaW5nJyxcblx0J3RvTG9jYWxlU3RyaW5nJyxcblx0J3ZhbHVlT2YnLFxuXHQnaGFzT3duUHJvcGVydHknLFxuXHQnaXNQcm90b3R5cGVPZicsXG5cdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdCdjb25zdHJ1Y3Rvcidcbl07XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xufTtcbnZhciBleGNsdWRlZEtleXMgPSB7XG5cdCRjb25zb2xlOiB0cnVlLFxuXHQkZXh0ZXJuYWw6IHRydWUsXG5cdCRmcmFtZTogdHJ1ZSxcblx0JGZyYW1lRWxlbWVudDogdHJ1ZSxcblx0JGZyYW1lczogdHJ1ZSxcblx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHQkaW5uZXJXaWR0aDogdHJ1ZSxcblx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0JHBhZ2VYT2Zmc2V0OiB0cnVlLFxuXHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdCRwYXJlbnQ6IHRydWUsXG5cdCRzY3JvbGxMZWZ0OiB0cnVlLFxuXHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHQkc2Nyb2xsWDogdHJ1ZSxcblx0JHNjcm9sbFk6IHRydWUsXG5cdCRzZWxmOiB0cnVlLFxuXHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdCR3aW5kb3c6IHRydWVcbn07XG52YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn0oKSk7XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fVxuXHR0cnkge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdHZhciB0aGVLZXlzID0gW107XG5cblx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdH1cblxuXHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRoZUtleXM7XG59O1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHRyZXR1cm4gKE9iamVjdC5rZXlzKGFyZ3VtZW50cykgfHwgJycpLmxlbmd0aCA9PT0gMjtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdHZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIlxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvckVhY2ggKG9iaiwgZm4sIGN0eCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKGZuKSAhPT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIGwgPSBvYmoubGVuZ3RoO1xuICAgIGlmIChsID09PSArbCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZm4uY2FsbChjdHgsIG9ialtpXSwgaSwgb2JqKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwob2JqLCBrKSkge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY3R4LCBvYmpba10sIGssIG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZm9yZWFjaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG52YXIgc3ltYm9sVG9TdHIgPSBoYXNTeW1ib2xzID8gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA6IHRvU3RyO1xuXG52YXIgJGlzTmFOID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzTmFOJyk7XG52YXIgJGlzRmluaXRlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzRmluaXRlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzaWduJyk7XG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM2Jyk7XG52YXIgcGFyc2VJbnRlZ2VyID0gcGFyc2VJbnQ7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBzdHJTbGljZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnNsaWNlKTtcbnZhciBpc0JpbmFyeSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMGJbMDFdKyQvaSk7XG52YXIgaXNPY3RhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMG9bMC03XSskL2kpO1xudmFyIG5vbldTID0gWydcXHUwMDg1JywgJ1xcdTIwMGInLCAnXFx1ZmZmZSddLmpvaW4oJycpO1xudmFyIG5vbldTcmVnZXggPSBuZXcgUmVnRXhwKCdbJyArIG5vbldTICsgJ10nLCAnZycpO1xudmFyIGhhc05vbldTID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgbm9uV1NyZWdleCk7XG52YXIgaW52YWxpZEhleExpdGVyYWwgPSAvXlstK10weFswLTlhLWZdKyQvaTtcbnZhciBpc0ludmFsaWRIZXhMaXRlcmFsID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgaW52YWxpZEhleExpdGVyYWwpO1xuXG4vLyB3aGl0ZXNwYWNlIGZyb206IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuNS40LjIwXG4vLyBpbXBsZW1lbnRhdGlvbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL3YzLjQuMC9lczUtc2hpbS5qcyNMMTMwNC1MMTMyNFxudmFyIHdzID0gW1xuXHQnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnLFxuXHQnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjgnLFxuXHQnXFx1MjAyOVxcdUZFRkYnXG5dLmpvaW4oJycpO1xudmFyIHRyaW1SZWdleCA9IG5ldyBSZWdFeHAoJyheWycgKyB3cyArICddKyl8KFsnICsgd3MgKyAnXSskKScsICdnJyk7XG52YXIgcmVwbGFjZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xudmFyIHRyaW0gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIHRyaW1SZWdleCwgJycpO1xufTtcblxudmFyIEVTNSA9IHJlcXVpcmUoJy4vZXM1Jyk7XG5cbnZhciBoYXNSZWdFeHBNYXRjaGVyID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFic3RyYWN0LW9wZXJhdGlvbnNcbnZhciBFUzYgPSBhc3NpZ24oYXNzaWduKHt9LCBFUzUpLCB7XG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWNhbGwtZi12LWFyZ3Ncblx0Q2FsbDogZnVuY3Rpb24gQ2FsbChGLCBWKSB7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKEYpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKEYgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdHJldHVybiBGLmFwcGx5KFYsIGFyZ3MpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3ByaW1pdGl2ZVxuXHRUb1ByaW1pdGl2ZTogdG9QcmltaXRpdmUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvYm9vbGVhblxuXHQvLyBUb0Jvb2xlYW46IEVTNS5Ub0Jvb2xlYW4sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbnVtYmVyXG5cdFRvTnVtYmVyOiBmdW5jdGlvbiBUb051bWJlcihhcmd1bWVudCkge1xuXHRcdHZhciB2YWx1ZSA9IGlzUHJpbWl0aXZlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdG9QcmltaXRpdmUoYXJndW1lbnQsICdudW1iZXInKTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBudW1iZXInKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGlmIChpc0JpbmFyeSh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIocGFyc2VJbnRlZ2VyKHN0clNsaWNlKHZhbHVlLCAyKSwgMikpO1xuXHRcdFx0fSBlbHNlIGlmIChpc09jdGFsKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcihwYXJzZUludGVnZXIoc3RyU2xpY2UodmFsdWUsIDIpLCA4KSk7XG5cdFx0XHR9IGVsc2UgaWYgKGhhc05vbldTKHZhbHVlKSB8fCBpc0ludmFsaWRIZXhMaXRlcmFsKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gTmFOO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHRyaW1tZWQgPSB0cmltKHZhbHVlKTtcblx0XHRcdFx0aWYgKHRyaW1tZWQgIT09IHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIodHJpbW1lZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50ZWdlclxuXHQvLyBUb0ludGVnZXI6IEVTNS5Ub051bWJlcixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQzMlxuXHQvLyBUb0ludDMyOiBFUzUuVG9JbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50MzJcblx0Ly8gVG9VaW50MzI6IEVTNS5Ub1VpbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQxNlxuXHRUb0ludDE2OiBmdW5jdGlvbiBUb0ludDE2KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGludDE2Yml0ID0gdGhpcy5Ub1VpbnQxNihhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDE2Yml0ID49IDB4ODAwMCA/IGludDE2Yml0IC0gMHgxMDAwMCA6IGludDE2Yml0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQxNlxuXHQvLyBUb1VpbnQxNjogRVM1LlRvVWludDE2LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDhcblx0VG9JbnQ4OiBmdW5jdGlvbiBUb0ludDgoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50OGJpdCA9IHRoaXMuVG9VaW50OChhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDhiaXQgPj0gMHg4MCA/IGludDhiaXQgLSAweDEwMCA6IGludDhiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhcblx0VG9VaW50ODogZnVuY3Rpb24gVG9VaW50OChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09PSAwIHx8ICEkaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdHZhciBwb3NJbnQgPSBzaWduKG51bWJlcikgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuXHRcdHJldHVybiBtb2QocG9zSW50LCAweDEwMCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhjbGFtcFxuXHRUb1VpbnQ4Q2xhbXA6IGZ1bmN0aW9uIFRvVWludDhDbGFtcChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyIDw9IDApIHsgcmV0dXJuIDA7IH1cblx0XHRpZiAobnVtYmVyID49IDB4RkYpIHsgcmV0dXJuIDB4RkY7IH1cblx0XHR2YXIgZiA9IE1hdGguZmxvb3IoYXJndW1lbnQpO1xuXHRcdGlmIChmICsgMC41IDwgbnVtYmVyKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdGlmIChudW1iZXIgPCBmICsgMC41KSB7IHJldHVybiBmOyB9XG5cdFx0aWYgKGYgJSAyICE9PSAwKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdHJldHVybiBmO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3N0cmluZ1xuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0cmV0dXJuIFN0cmluZyhhcmd1bWVudCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvb2JqZWN0XG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh2YWx1ZSk7XG5cdFx0cmV0dXJuIE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJvcGVydHlrZXlcblx0VG9Qcm9wZXJ0eUtleTogZnVuY3Rpb24gVG9Qcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHZhciBrZXkgPSB0aGlzLlRvUHJpbWl0aXZlKGFyZ3VtZW50LCBTdHJpbmcpO1xuXHRcdHJldHVybiB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IHN5bWJvbFRvU3RyLmNhbGwoa2V5KSA6IHRoaXMuVG9TdHJpbmcoa2V5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcblx0VG9MZW5ndGg6IGZ1bmN0aW9uIFRvTGVuZ3RoKGFyZ3VtZW50KSB7XG5cdFx0dmFyIGxlbiA9IHRoaXMuVG9JbnRlZ2VyKGFyZ3VtZW50KTtcblx0XHRpZiAobGVuIDw9IDApIHsgcmV0dXJuIDA7IH0gLy8gaW5jbHVkZXMgY29udmVydGluZyAtMCB0byArMFxuXHRcdGlmIChsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB7IHJldHVybiBNQVhfU0FGRV9JTlRFR0VSOyB9XG5cdFx0cmV0dXJuIGxlbjtcblx0fSxcblxuXHQvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY2Fub25pY2FsbnVtZXJpY2luZGV4c3RyaW5nXG5cdENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZzogZnVuY3Rpb24gQ2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHRvU3RyLmNhbGwoYXJndW1lbnQpICE9PSAnW29iamVjdCBTdHJpbmddJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBiZSBhIHN0cmluZycpO1xuXHRcdH1cblx0XHRpZiAoYXJndW1lbnQgPT09ICctMCcpIHsgcmV0dXJuIC0wOyB9XG5cdFx0dmFyIG4gPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAodGhpcy5TYW1lVmFsdWUodGhpcy5Ub1N0cmluZyhuKSwgYXJndW1lbnQpKSB7IHJldHVybiBuOyB9XG5cdFx0cmV0dXJuIHZvaWQgMDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxuXHRSZXF1aXJlT2JqZWN0Q29lcmNpYmxlOiBFUzUuQ2hlY2tPYmplY3RDb2VyY2libGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzYXJyYXlcblx0SXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHRvU3RyLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBBcnJheV0nO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NhbGxhYmxlXG5cdC8vIElzQ2FsbGFibGU6IEVTNS5Jc0NhbGxhYmxlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NvbnN0cnVjdG9yXG5cdElzQ29uc3RydWN0b3I6IGZ1bmN0aW9uIElzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnZnVuY3Rpb24nICYmICEhYXJndW1lbnQucHJvdG90eXBlOyAvLyB1bmZvcnR1bmF0ZWx5IHRoZXJlJ3Mgbm8gd2F5IHRvIHRydWx5IGNoZWNrIHRoaXMgd2l0aG91dCB0cnkvY2F0Y2ggYG5ldyBhcmd1bWVudGBcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNleHRlbnNpYmxlLW9cblx0SXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBJc0V4dGVuc2libGUob2JqKSB7XG5cdFx0aWYgKCFPYmplY3QucHJldmVudEV4dGVuc2lvbnMpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAoaXNQcmltaXRpdmUob2JqKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gT2JqZWN0LmlzRXh0ZW5zaWJsZShvYmopO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2ludGVnZXJcblx0SXNJbnRlZ2VyOiBmdW5jdGlvbiBJc0ludGVnZXIoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ICE9PSAnbnVtYmVyJyB8fCAkaXNOYU4oYXJndW1lbnQpIHx8ICEkaXNGaW5pdGUoYXJndW1lbnQpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBhYnMgPSBNYXRoLmFicyhhcmd1bWVudCk7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoYWJzKSA9PT0gYWJzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc3Byb3BlcnR5a2V5XG5cdElzUHJvcGVydHlLZXk6IGZ1bmN0aW9uIElzUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pc3JlZ2V4cFxuXHRJc1JlZ0V4cDogZnVuY3Rpb24gSXNSZWdFeHAoYXJndW1lbnQpIHtcblx0XHRpZiAoIWFyZ3VtZW50IHx8IHR5cGVvZiBhcmd1bWVudCAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRcdHZhciBpc1JlZ0V4cCA9IGFyZ3VtZW50W1N5bWJvbC5tYXRjaF07XG5cdFx0XHRpZiAodHlwZW9mIGlzUmVnRXhwICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gRVM1LlRvQm9vbGVhbihpc1JlZ0V4cCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoYXNSZWdFeHBNYXRjaGVyKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlXG5cdC8vIFNhbWVWYWx1ZTogRVM1LlNhbWVWYWx1ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlemVyb1xuXHRTYW1lVmFsdWVaZXJvOiBmdW5jdGlvbiBTYW1lVmFsdWVaZXJvKHgsIHkpIHtcblx0XHRyZXR1cm4gKHggPT09IHkpIHx8ICgkaXNOYU4oeCkgJiYgJGlzTmFOKHkpKTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjIgR2V0ViAoViwgUClcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBPIGJlIFRvT2JqZWN0KFYpLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChPKS5cblx0ICogNC4gUmV0dXJuIE8uW1tHZXRdXShQLCBWKS5cblx0ICovXG5cdEdldFY6IGZ1bmN0aW9uIEdldFYoViwgUCkge1xuXHRcdC8vIDcuMy4yLjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdC8vIDcuMy4yLjItM1xuXHRcdHZhciBPID0gdGhpcy5Ub09iamVjdChWKTtcblxuXHRcdC8vIDcuMy4yLjRcblx0XHRyZXR1cm4gT1tQXTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjkgLSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0bWV0aG9kXG5cdCAqIDEuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAyLiBMZXQgZnVuYyBiZSBHZXRWKE8sIFApLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChmdW5jKS5cblx0ICogNC4gSWYgZnVuYyBpcyBlaXRoZXIgdW5kZWZpbmVkIG9yIG51bGwsIHJldHVybiB1bmRlZmluZWQuXG5cdCAqIDUuIElmIElzQ2FsbGFibGUoZnVuYykgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cblx0ICogNi4gUmV0dXJuIGZ1bmMuXG5cdCAqL1xuXHRHZXRNZXRob2Q6IGZ1bmN0aW9uIEdldE1ldGhvZChPLCBQKSB7XG5cdFx0Ly8gNy4zLjkuMVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuMlxuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXG5cdFx0Ly8gNy4zLjkuNFxuXHRcdGlmIChmdW5jID09IG51bGwpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuNVxuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFAgKyAnaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS42XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4xIEdldCAoTywgUCkgLSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0LW8tcFxuXHQgKiAxLiBBc3NlcnQ6IFR5cGUoTykgaXMgT2JqZWN0LlxuXHQgKiAyLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMy4gUmV0dXJuIE8uW1tHZXRdXShQLCBPKS5cblx0ICovXG5cdEdldDogZnVuY3Rpb24gR2V0KE8sIFApIHtcblx0XHQvLyA3LjMuMS4xXG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHQvLyA3LjMuMS4yXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuM1xuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiAnU3ltYm9sJztcblx0XHR9XG5cdFx0cmV0dXJuIEVTNS5UeXBlKHgpO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcblx0U3BlY2llc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgQyA9IE8uY29uc3RydWN0b3I7XG5cdFx0aWYgKHR5cGVvZiBDID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShDKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ08uY29uc3RydWN0b3IgaXMgbm90IGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgUyA9IGhhc1N5bWJvbHMgJiYgU3ltYm9sLnNwZWNpZXMgPyBDW1N5bWJvbC5zcGVjaWVzXSA6IHVuZGVmaW5lZDtcblx0XHRpZiAoUyA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdENvbnN0cnVjdG9yO1xuXHRcdH1cblx0XHRpZiAodGhpcy5Jc0NvbnN0cnVjdG9yKFMpKSB7XG5cdFx0XHRyZXR1cm4gUztcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm8gY29uc3RydWN0b3IgZm91bmQnKTtcblx0fVxufSk7XG5cbmRlbGV0ZSBFUzYuQ2hlY2tPYmplY3RDb2VyY2libGU7IC8vIHJlbmFtZWQgaW4gRVM2IHRvIFJlcXVpcmVPYmplY3RDb2VyY2libGVcblxubW9kdWxlLmV4cG9ydHMgPSBFUzY7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIGlzTmFOKGEpIHtcblx0cmV0dXJuIGEgIT09IGE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNOYU4uanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwidmFyICRpc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSAhPT0gYTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiAhJGlzTmFOKHgpICYmIHggIT09IEluZmluaXR5ICYmIHggIT09IC1JbmZpbml0eTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzRmluaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuXHRmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG5cdFx0aWYgKGhhcy5jYWxsKHNvdXJjZSwga2V5KSkge1xuXHRcdFx0dGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaWduKG51bWJlcikge1xuXHRyZXR1cm4gbnVtYmVyID49IDAgPyAxIDogLTE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1vZChudW1iZXIsIG1vZHVsbykge1xuXHR2YXIgcmVtYWluID0gbnVtYmVyICUgbW9kdWxvO1xuXHRyZXR1cm4gTWF0aC5mbG9vcihyZW1haW4gPj0gMCA/IHJlbWFpbiA6IHJlbWFpbiArIG1vZHVsbyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIGlzRGF0ZSA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdpcy1zeW1ib2wnKTtcblxudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSBmdW5jdGlvbiBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpIHtcblx0aWYgKHR5cGVvZiBPID09PSAndW5kZWZpbmVkJyB8fCBPID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyBPKTtcblx0fVxuXHRpZiAodHlwZW9mIGhpbnQgIT09ICdzdHJpbmcnIHx8IChoaW50ICE9PSAnbnVtYmVyJyAmJiBoaW50ICE9PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdoaW50IG11c3QgYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiJyk7XG5cdH1cblx0dmFyIG1ldGhvZE5hbWVzID0gaGludCA9PT0gJ3N0cmluZycgPyBbJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnXSA6IFsndmFsdWVPZicsICd0b1N0cmluZyddO1xuXHR2YXIgbWV0aG9kLCByZXN1bHQsIGk7XG5cdGZvciAoaSA9IDA7IGkgPCBtZXRob2ROYW1lcy5sZW5ndGg7ICsraSkge1xuXHRcdG1ldGhvZCA9IE9bbWV0aG9kTmFtZXNbaV1dO1xuXHRcdGlmIChpc0NhbGxhYmxlKG1ldGhvZCkpIHtcblx0XHRcdHJlc3VsdCA9IG1ldGhvZC5jYWxsKE8pO1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xufTtcblxudmFyIEdldE1ldGhvZCA9IGZ1bmN0aW9uIEdldE1ldGhvZChPLCBQKSB7XG5cdHZhciBmdW5jID0gT1tQXTtcblx0aWYgKGZ1bmMgIT09IG51bGwgJiYgdHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYgKCFpc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGZ1bmMgKyAnIHJldHVybmVkIGZvciBwcm9wZXJ0eSAnICsgUCArICcgb2Ygb2JqZWN0ICcgKyBPICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gZnVuYztcblx0fVxufTtcblxuLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0LCBQcmVmZXJyZWRUeXBlKSB7XG5cdGlmIChpc1ByaW1pdGl2ZShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblx0dmFyIGhpbnQgPSAnZGVmYXVsdCc7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdGlmIChQcmVmZXJyZWRUeXBlID09PSBTdHJpbmcpIHtcblx0XHRcdGhpbnQgPSAnc3RyaW5nJztcblx0XHR9IGVsc2UgaWYgKFByZWZlcnJlZFR5cGUgPT09IE51bWJlcikge1xuXHRcdFx0aGludCA9ICdudW1iZXInO1xuXHRcdH1cblx0fVxuXG5cdHZhciBleG90aWNUb1ByaW07XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0aWYgKFN5bWJvbC50b1ByaW1pdGl2ZSkge1xuXHRcdFx0ZXhvdGljVG9QcmltID0gR2V0TWV0aG9kKGlucHV0LCBTeW1ib2wudG9QcmltaXRpdmUpO1xuXHRcdH0gZWxzZSBpZiAoaXNTeW1ib2woaW5wdXQpKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG5cdFx0fVxuXHR9XG5cdGlmICh0eXBlb2YgZXhvdGljVG9QcmltICE9PSAndW5kZWZpbmVkJykge1xuXHRcdHZhciByZXN1bHQgPSBleG90aWNUb1ByaW0uY2FsbChpbnB1dCwgaGludCk7XG5cdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBjb252ZXJ0IGV4b3RpYyBvYmplY3QgdG8gcHJpbWl0aXZlJyk7XG5cdH1cblx0aWYgKGhpbnQgPT09ICdkZWZhdWx0JyAmJiAoaXNEYXRlKGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpKSB7XG5cdFx0aGludCA9ICdzdHJpbmcnO1xuXHR9XG5cdHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBoaW50ID09PSAnZGVmYXVsdCcgPyAnbnVtYmVyJyA6IGhpbnQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBjb25zdHJ1Y3RvclJlZ2V4ID0gL15cXHMqY2xhc3MgLztcbnZhciBpc0VTNkNsYXNzRm4gPSBmdW5jdGlvbiBpc0VTNkNsYXNzRm4odmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgZm5TdHIgPSBmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHZhciBzaW5nbGVTdHJpcHBlZCA9IGZuU3RyLnJlcGxhY2UoL1xcL1xcLy4qXFxuL2csICcnKTtcblx0XHR2YXIgbXVsdGlTdHJpcHBlZCA9IHNpbmdsZVN0cmlwcGVkLnJlcGxhY2UoL1xcL1xcKlsuXFxzXFxTXSpcXCpcXC8vZywgJycpO1xuXHRcdHZhciBzcGFjZVN0cmlwcGVkID0gbXVsdGlTdHJpcHBlZC5yZXBsYWNlKC9cXG4vbWcsICcgJykucmVwbGFjZSgvIHsyfS9nLCAnICcpO1xuXHRcdHJldHVybiBjb25zdHJ1Y3RvclJlZ2V4LnRlc3Qoc3BhY2VTdHJpcHBlZCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7IC8vIG5vdCBhIGZ1bmN0aW9uXG5cdH1cbn07XG5cbnZhciB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZm5DbGFzcyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG52YXIgZ2VuQ2xhc3MgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbGxhYmxlKHZhbHVlKSB7XG5cdGlmICghdmFsdWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRyZXR1cm4gc3RyQ2xhc3MgPT09IGZuQ2xhc3MgfHwgc3RyQ2xhc3MgPT09IGdlbkNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1jYWxsYWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRnZXREYXkuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGVPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woKSA9PT0gJ3N5bWJvbCc7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNTeW1ib2xPYmplY3QodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlLnZhbHVlT2YoKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0cmV0dXJuIHN5bVN0cmluZ1JlZ2V4LnRlc3Qoc3ltVG9TdHIuY2FsbCh2YWx1ZSkpO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0Ly8gdGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IFN5bWJvbHMuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLXN5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJ2YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVuY3Rpb24tYmluZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJ2YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKHRhcmdldCkgIT09IGZ1bmNUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJST1JfTUVTU0FHRSArIHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBNYXRoLm1heCgwLCB0YXJnZXQubGVuZ3RoIC0gYXJncy5sZW5ndGgpO1xuICAgIHZhciBib3VuZEFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvdW5kTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm91bmRBcmdzLnB1c2goJyQnICsgaSk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGJvdW5kQXJncy5qb2luKCcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xuXG52YXIgSXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM1Jyk7XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbnZhciBFUzUgPSB7XG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHRUb0Jvb2xlYW46IGZ1bmN0aW9uIFRvQm9vbGVhbih2YWx1ZSkge1xuXHRcdHJldHVybiBCb29sZWFuKHZhbHVlKTtcblx0fSxcblx0VG9OdW1iZXI6IGZ1bmN0aW9uIFRvTnVtYmVyKHZhbHVlKSB7XG5cdFx0cmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdH0sXG5cdFRvSW50ZWdlcjogZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cblx0XHRyZXR1cm4gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0fSxcblx0VG9JbnQzMjogZnVuY3Rpb24gVG9JbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4gMDtcblx0fSxcblx0VG9VaW50MzI6IGZ1bmN0aW9uIFRvVWludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+Pj4gMDtcblx0fSxcblx0VG9VaW50MTY6IGZ1bmN0aW9uIFRvVWludDE2KHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwMDApO1xuXHR9LFxuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUpIHtcblx0XHRyZXR1cm4gU3RyaW5nKHZhbHVlKTtcblx0fSxcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5DaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSk7XG5cdFx0cmV0dXJuIE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cdENoZWNrT2JqZWN0Q29lcmNpYmxlOiBmdW5jdGlvbiBDaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSwgb3B0TWVzc2FnZSkge1xuXHRcdC8qIGpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdElzQ2FsbGFibGU6IElzQ2FsbGFibGUsXG5cdFNhbWVWYWx1ZTogZnVuY3Rpb24gU2FtZVZhbHVlKHgsIHkpIHtcblx0XHRpZiAoeCA9PT0geSkgeyAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWwuXG5cdFx0XHRpZiAoeCA9PT0gMCkgeyByZXR1cm4gMSAvIHggPT09IDEgLyB5OyB9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuICRpc05hTih4KSAmJiAkaXNOYU4oeSk7XG5cdH0sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLThcblx0VHlwZTogZnVuY3Rpb24gVHlwZSh4KSB7XG5cdFx0aWYgKHggPT09IG51bGwpIHtcblx0XHRcdHJldHVybiAnTnVsbCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiAnVW5kZWZpbmVkJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuICdPYmplY3QnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG5cdFx0XHRyZXR1cm4gJ051bWJlcic7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gJ0Jvb2xlYW4nO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJ1N0cmluZyc7XG5cdFx0fVxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcblxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xuXG4vLyBodHRwczovL2VzNS5naXRodWIuaW8vI3g4LjEyXG52YXIgRVM1aW50ZXJuYWxTbG90cyA9IHtcblx0J1tbRGVmYXVsdFZhbHVlXV0nOiBmdW5jdGlvbiAoTywgaGludCkge1xuXHRcdHZhciBhY3R1YWxIaW50ID0gaGludCB8fCAodG9TdHIuY2FsbChPKSA9PT0gJ1tvYmplY3QgRGF0ZV0nID8gU3RyaW5nIDogTnVtYmVyKTtcblxuXHRcdGlmIChhY3R1YWxIaW50ID09PSBTdHJpbmcgfHwgYWN0dWFsSGludCA9PT0gTnVtYmVyKSB7XG5cdFx0XHR2YXIgbWV0aG9kcyA9IGFjdHVhbEhpbnQgPT09IFN0cmluZyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdFx0XHR2YXIgdmFsdWUsIGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoaXNDYWxsYWJsZShPW21ldGhvZHNbaV1dKSkge1xuXHRcdFx0XHRcdHZhbHVlID0gT1ttZXRob2RzW2ldXSgpO1xuXHRcdFx0XHRcdGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBbW0RlZmF1bHRWYWx1ZV1dIGhpbnQgc3VwcGxpZWQnKTtcblx0fVxufTtcblxuLy8gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCwgUHJlZmVycmVkVHlwZSkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQsIFByZWZlcnJlZFR5cGUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHJlZ2V4RXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIHRyeVJlZ2V4RXhlY0NhbGwgPSBmdW5jdGlvbiB0cnlSZWdleEV4ZWModmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgbGFzdEluZGV4ID0gdmFsdWUubGFzdEluZGV4O1xuXHRcdHZhbHVlLmxhc3RJbmRleCA9IDA7XG5cblx0XHRyZWdleEV4ZWMuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWdleENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHRyZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09IHJlZ2V4Q2xhc3M7XG5cdH1cblxuXHR2YXIgZGVzY3JpcHRvciA9IGdPUEQodmFsdWUsICdsYXN0SW5kZXgnKTtcblx0dmFyIGhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgaGFzKGRlc2NyaXB0b3IsICd2YWx1ZScpO1xuXHRpZiAoIWhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnlSZWdleEV4ZWNDYWxsKHZhbHVlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwidmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hhcy9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuXHR2YXIgbGlzdCA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuXHR2YXIgbGVuZ3RoID0gRVMuVG9JbnRlZ2VyKEVTLlRvTGVuZ3RoKGxpc3QubGVuZ3RoKSk7XG5cdGlmICghRVMuSXNDYWxsYWJsZShwcmVkaWNhdGUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkjZmluZDogcHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHR9XG5cdGlmIChsZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cdHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuXHRmb3IgKHZhciBpID0gMCwgdmFsdWU7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdHZhbHVlID0gbGlzdFtpXTtcblx0XHRpZiAoRVMuQ2FsbChwcmVkaWNhdGUsIHRoaXNBcmcsIFt2YWx1ZSwgaSwgbGlzdF0pKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0Ly8gRGV0ZWN0IGlmIGFuIGltcGxlbWVudGF0aW9uIGV4aXN0c1xuXHQvLyBEZXRlY3QgZWFybHkgaW1wbGVtZW50YXRpb25zIHdoaWNoIHNraXBwZWQgaG9sZXMgaW4gc3BhcnNlIGFycmF5c1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc3BhcnNlLWFycmF5c1xuXHR2YXIgaW1wbGVtZW50ZWQgPSBBcnJheS5wcm90b3R5cGUuZmluZCAmJiBbLCAxXS5maW5kKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSkgIT09IDE7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHJldHVybiBpbXBsZW1lbnRlZCA/IEFycmF5LnByb3RvdHlwZS5maW5kIDogcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9wb2x5ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1BcnJheVByb3RvdHlwZUZpbmQoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cblx0ZGVmaW5lKEFycmF5LnByb3RvdHlwZSwgeyBmaW5kOiBwb2x5ZmlsbCB9LCB7XG5cdFx0ZmluZDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maW5kICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1hcnJvd3MtYWx0XFxcIj48dGl0bGU+YXJyb3dzLWFsdDwvdGl0bGU+PHBhdGggZD1cXFwiTTE0MTEgNTQxbC0zNTUgMzU1IDM1NSAzNTUgMTQ0LTE0NHEyOS0zMSA3MC0xNCAzOSAxNyAzOSA1OXY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxNDQtMTQ0LTM1NS0zNTUtMzU1IDM1NSAxNDQgMTQ0cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxNDQgMTQ0IDM1NS0zNTUtMzU1LTM1NS0xNDQgMTQ0cS0xOSAxOS00NSAxOS0xMiAwLTI0LTUtNDAtMTctNDAtNTl2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHE0MiAwIDU5IDQwIDE3IDM5LTE0IDY5bC0xNDQgMTQ0IDM1NSAzNTUgMzU1LTM1NS0xNDQtMTQ0cS0zMS0zMC0xNC02OSAxNy00MCA1OS00MGg0NDhxMjYgMCA0NSAxOXQxOSA0NXY0NDhxMCA0Mi0zOSA1OS0xMyA1LTI1IDUtMjYgMC00NS0xOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYmFja3dhcmRcXFwiPjx0aXRsZT5iYWNrd2FyZDwvdGl0bGU+PHBhdGggZD1cXFwiTTE2ODMgMTQxcTE5LTE5IDMyLTEzdDEzIDMydjE0NzJxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTgtOS0xMy0xOXY3MTBxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTE5LTE5LTE5LTQ1dDE5LTQ1bDcxMC03MTBxMTktMTkgMzItMTN0MTMgMzJ2NzEwcTUtMTEgMTMtMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWJ1bGxzZXllXFxcIj48dGl0bGU+YnVsbHNleWU8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMTUyIDg5NnEwIDEwNi03NSAxODF0LTE4MSA3NS0xODEtNzUtNzUtMTgxIDc1LTE4MSAxODEtNzUgMTgxIDc1IDc1IDE4MXptMTI4IDBxMC0xNTktMTEyLjUtMjcxLjV0LTI3MS41LTExMi41LTI3MS41IDExMi41LTExMi41IDI3MS41IDExMi41IDI3MS41IDI3MS41IDExMi41IDI3MS41LTExMi41IDExMi41LTI3MS41em0xMjggMHEwIDIxMi0xNTAgMzYydC0zNjIgMTUwLTM2Mi0xNTAtMTUwLTM2MiAxNTAtMzYyIDM2Mi0xNTAgMzYyIDE1MCAxNTAgMzYyem0xMjggMHEwLTEzMC01MS0yNDguNXQtMTM2LjUtMjA0LTIwNC0xMzYuNS0yNDguNS01MS0yNDguNSA1MS0yMDQgMTM2LjUtMTM2LjUgMjA0LTUxIDI0OC41IDUxIDI0OC41IDEzNi41IDIwNCAyMDQgMTM2LjUgMjQ4LjUgNTEgMjQ4LjUtNTEgMjA0LTEzNi41IDEzNi41LTIwNCA1MS0yNDguNXptMTI4IDBxMCAyMDktMTAzIDM4NS41dC0yNzkuNSAyNzkuNS0zODUuNSAxMDMtMzg1LjUtMTAzLTI3OS41LTI3OS41LTEwMy0zODUuNSAxMDMtMzg1LjUgMjc5LjUtMjc5LjUgMzg1LjUtMTAzIDM4NS41IDEwMyAyNzkuNSAyNzkuNSAxMDMgMzg1LjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgMzgwXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1jYXRcXFwiPjx0aXRsZT5jYXQ8L3RpdGxlPiA8cGF0aCBkPVxcXCJNIDE1MS4zNDkwNCwzMDcuMjA0NTUgTCAyNjQuMzQ5MDQsMzA3LjIwNDU1IEMgMjY0LjM0OTA0LDI5MS4xNDA5NiAyNjMuMjAyMSwyODcuOTU0NTUgMjM2LjU5OTA0LDI4Ny45NTQ1NSBDIDI0MC44NDkwNCwyNzUuMjA0NTUgMjU4LjEyNDI0LDI0NC4zNTgwOCAyNjcuNzI0MDQsMjQ0LjM1ODA4IEMgMjc2LjIxNzA3LDI0NC4zNTgwOCAyODYuMzQ5MDQsMjQ0LjgyNTkyIDI4Ni4zNDkwNCwyNjQuMjA0NTUgQyAyODYuMzQ5MDQsMjg2LjIwNDU1IDMyMy4zNzE3MSwzMjEuNjc1NDcgMzMyLjM0OTA0LDMwNy4yMDQ1NSBDIDM0NS43Mjc2OSwyODUuNjM4OTcgMzA5LjM0OTA0LDI5Mi4yMTUxNCAzMDkuMzQ5MDQsMjQwLjIwNDU1IEMgMzA5LjM0OTA0LDE2OS4wNTEzNSAzNTAuODc0MTcsMTc5LjE4MDcxIDM1MC44NzQxNywxMzkuMjA0NTUgQyAzNTAuODc0MTcsMTE5LjIwNDU1IDM0NS4zNDkwNCwxMTYuNTAzNzQgMzQ1LjM0OTA0LDEwMi4yMDQ1NSBDIDM0NS4zNDkwNCw4My4zMDY5NSAzNjEuOTk3MTcsODQuNDAzNTc3IDM1OC43NTgwNSw2OC43MzQ4NzkgQyAzNTYuNTIwNjEsNTcuOTExNjU2IDM1NC43Njk2Miw0OS4yMzE5OSAzNTMuNDY1MTYsMzYuMTQzODg5IEMgMzUyLjUzOTU5LDI2Ljg1NzMwNSAzNTIuMjQ0NTIsMTYuOTU5Mzk4IDM0Mi41OTg1NSwxNy4zNTczODIgQyAzMzEuMjY1MDUsMTcuODI0OTkyIDMyNi45NjU0OSwzNy43NzQxOSAzMDkuMzQ5MDQsMzkuMjA0NTQ5IEMgMjkxLjc2ODUxLDQwLjYzMTk5MSAyNzYuNzc4MzQsMjQuMjM4MDI4IDI2OS45NzQwNCwyNi41Nzk1NDkgQyAyNjMuMjI3MDksMjguOTAxMzM0IDI2NS4zNDkwNCw0Ny4yMDQ1NDkgMjY5LjM0OTA0LDYwLjIwNDU0OSBDIDI3NS42MzU4OCw4MC42MzY3NzEgMjg5LjM0OTA0LDEwNy4yMDQ1NSAyNjQuMzQ5MDQsMTExLjIwNDU1IEMgMjM5LjM0OTA0LDExNS4yMDQ1NSAxOTYuMzQ5MDQsMTE5LjIwNDU1IDE2NS4zNDkwNCwxNjAuMjA0NTUgQyAxMzQuMzQ5MDQsMjAxLjIwNDU1IDEzNS40OTM0MiwyNDkuMzIxMiAxMjMuMzQ5MDQsMjY0LjIwNDU1IEMgODIuNTkwNjk2LDMxNC4xNTUyOSA0MC44MjM5MTksMjkzLjY0NjI1IDQwLjgyMzkxOSwzMzUuMjA0NTUgQyA0MC44MjM5MTksMzUzLjgxMDE5IDcyLjM0OTA0NSwzNjcuMjA0NTUgNzcuMzQ5MDQ1LDM2MS4yMDQ1NSBDIDgyLjM0OTA0NSwzNTUuMjA0NTUgMzQuODYzNzY0LDMzNy4zMjU4NyA4Ny45OTU0OTIsMzE2LjIwNDU1IEMgMTMzLjM4NzExLDI5OC4xNjAxNCAxMzcuNDM5MTQsMjk0LjQ3NjYzIDE1MS4zNDkwNCwzMDcuMjA0NTUgeiBcXFwiIHN0eWxlPVxcXCJmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjFcXFwiLz4gPC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWNvbW1lbnRpbmctb1xcXCI+PHRpdGxlPmNvbW1lbnRpbmctbzwvdGl0bGU+PHBhdGggZD1cXFwiTTY0MCA4OTZxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptLTUxMi01MTJxLTIwNCAwLTM4MS41IDY5LjV0LTI4MiAxODcuNS0xMDQuNSAyNTVxMCAxMTIgNzEuNSAyMTMuNXQyMDEuNSAxNzUuNWw4NyA1MC0yNyA5NnEtMjQgOTEtNzAgMTcyIDE1Mi02MyAyNzUtMTcxbDQzLTM4IDU3IDZxNjkgOCAxMzAgOCAyMDQgMCAzODEuNS02OS41dDI4Mi0xODcuNSAxMDQuNS0yNTUtMTA0LjUtMjU1LTI4Mi0xODcuNS0zODEuNS02OS41em04OTYgNTEycTAgMTc0LTEyMCAzMjEuNXQtMzI2IDIzMy00NTAgODUuNXEtNzAgMC0xNDUtOC0xOTggMTc1LTQ2MCAyNDItNDkgMTQtMTE0IDIyaC01cS0xNSAwLTI3LTEwLjV0LTE2LTI3LjV2LTFxLTMtNC0uNS0xMnQyLTEwIDQuNS05LjVsNi05IDctOC41IDgtOXE3LTggMzEtMzQuNXQzNC41LTM4IDMxLTM5LjUgMzIuNS01MSAyNy01OSAyNi03NnEtMTU3LTg5LTI0Ny41LTIyMHQtOTAuNS0yODFxMC0xMzAgNzEtMjQ4LjV0MTkxLTIwNC41IDI4Ni0xMzYuNSAzNDgtNTAuNSAzNDggNTAuNSAyODYgMTM2LjUgMTkxIDIwNC41IDcxIDI0OC41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1kb3dubG9hZFxcXCI+PHRpdGxlPmRvd25sb2FkPC90aXRsZT48cGF0aCBkPVxcXCJNMTM0NCAxMzQ0cTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1IDE5IDQ1IDQ1IDE5IDQ1LTE5IDE5LTQ1em0yNTYgMHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMTI4LTIyNHYzMjBxMCA0MC0yOCA2OHQtNjggMjhoLTE0NzJxLTQwIDAtNjgtMjh0LTI4LTY4di0zMjBxMC00MCAyOC02OHQ2OC0yOGg0NjVsMTM1IDEzNnE1OCA1NiAxMzYgNTZ0MTM2LTU2bDEzNi0xMzZoNDY0cTQwIDAgNjggMjh0MjggNjh6bS0zMjUtNTY5cTE3IDQxLTE0IDcwbC00NDggNDQ4cS0xOCAxOS00NSAxOXQtNDUtMTlsLTQ0OC00NDhxLTMxLTI5LTE0LTcwIDE3LTM5IDU5LTM5aDI1NnYtNDQ4cTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV2NDQ4aDI1NnE0MiAwIDU5IDM5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1lZGl0XFxcIj48dGl0bGU+ZWRpdDwvdGl0bGU+PHBhdGggZD1cXFwiTTg4OCAxMTg0bDExNi0xMTYtMTUyLTE1Mi0xMTYgMTE2djU2aDk2djk2aDU2em00NDAtNzIwcS0xNi0xNi0zMyAxbC0zNTAgMzUwcS0xNyAxNy0xIDMzdDMzLTFsMzUwLTM1MHExNy0xNyAxLTMzem04MCA1OTR2MTkwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTgzMnEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtODMycTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg4MzJxNjMgMCAxMTcgMjUgMTUgNyAxOCAyMyAzIDE3LTkgMjlsLTQ5IDQ5cS0xNCAxNC0zMiA4LTIzLTYtNDUtNmgtODMycS02NiAwLTExMyA0N3QtNDcgMTEzdjgzMnEwIDY2IDQ3IDExM3QxMTMgNDdoODMycTY2IDAgMTEzLTQ3dDQ3LTExM3YtMTI2cTAtMTMgOS0yMmw2NC02NHExNS0xNSAzNS03dDIwIDI5em0tOTYtNzM4bDI4OCAyODgtNjcyIDY3MmgtMjg4di0yODh6bTQ0NCAxMzJsLTkyIDkyLTI4OC0yODggOTItOTJxMjgtMjggNjgtMjh0NjggMjhsMTUyIDE1MnEyOCAyOCAyOCA2OHQtMjggNjh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWZvcndhcmRcXFwiPjx0aXRsZT5mb3J3YXJkPC90aXRsZT48cGF0aCBkPVxcXCJNMTA5IDE2NTFxLTE5IDE5LTMyIDEzdC0xMy0zMnYtMTQ3MnEwLTI2IDEzLTMydDMyIDEzbDcxMCA3MTBxOCA4IDEzIDE5di03MTBxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTE5IDE5IDE5IDQ1dC0xOSA0NWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWluZm9cXFwiPjx0aXRsZT5pbmZvPC90aXRsZT48cGF0aCBkPVxcXCJNMTIxNiAxMzQ0djEyOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloNjR2LTM4NGgtNjRxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgzODRxMjYgMCA0NSAxOXQxOSA0NXY1NzZoNjRxMjYgMCA0NSAxOXQxOSA0NXptLTEyOC0xMTUydjE5MnEwIDI2LTE5IDQ1dC00NSAxOWgtMjU2cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTkycTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWxpc3QtdWxcXFwiPjx0aXRsZT5saXN0LXVsPC90aXRsZT48cGF0aCBkPVxcXCJNMzg0IDE0MDhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMC01MTJxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0tMTQwOC05MjhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0wLTUxMnYxOTJxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTEyMTZxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di0xOTJxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgxMjE2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLW1hZ2ljXFxcIj48dGl0bGU+bWFnaWM8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjU0IDU4MWwyOTMtMjkzLTEwNy0xMDctMjkzIDI5M3ptNDQ3LTI5M3EwIDI3LTE4IDQ1bC0xMjg2IDEyODZxLTE4IDE4LTQ1IDE4dC00NS0xOGwtMTk4LTE5OHEtMTgtMTgtMTgtNDV0MTgtNDVsMTI4Ni0xMjg2cTE4LTE4IDQ1LTE4dDQ1IDE4bDE5OCAxOThxMTggMTggMTggNDV6bS0xMzUxLTE5MGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHptMzUwIDE2MmwxOTYgNjAtMTk2IDYwLTYwIDE5Ni02MC0xOTYtMTk2LTYwIDE5Ni02MCA2MC0xOTZ6bTkzMCA0NzhsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6bS02NDAtNjQwbDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wYXVzZVxcXCI+PHRpdGxlPnBhdXNlPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCAxOTJ2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1em0tODk2IDB2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGFuZVxcXCI+PHRpdGxlPnBsYW5lPC90aXRsZT48cGF0aCBkPVxcXCJNMTU2OCAxNjBxNDQgNTIgMTIgMTQ4dC0xMDggMTcybC0xNjEgMTYxIDE2MCA2OTZxNSAxOS0xMiAzM2wtMTI4IDk2cS03IDYtMTkgNi00IDAtNy0xLTE1LTMtMjEtMTZsLTI3OS01MDgtMjU5IDI1OSA1MyAxOTRxNSAxNy04IDMxbC05NiA5NnEtOSA5LTIzIDloLTJxLTE1LTItMjQtMTNsLTE4OS0yNTItMjUyLTE4OXEtMTEtNy0xMy0yMy0xLTEzIDktMjVsOTYtOTdxOS05IDIzLTkgNiAwIDggMWwxOTQgNTMgMjU5LTI1OS01MDgtMjc5cS0xNC04LTE3LTI0LTItMTYgOS0yN2wxMjgtMTI4cTE0LTEzIDMwLThsNjY1IDE1OSAxNjAtMTYwcTc2LTc2IDE3Mi0xMDh0MTQ4IDEyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGF5XFxcIj48dGl0bGU+cGxheTwvdGl0bGU+PHBhdGggZD1cXFwiTTE1NzYgOTI3bC0xMzI4IDczOHEtMjMgMTMtMzkuNSAzdC0xNi41LTM2di0xNDcycTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbHVzXFxcIj48dGl0bGU+cGx1czwvdGl0bGU+PHBhdGggZD1cXFwiTTE2MDAgNzM2djE5MnEwIDQwLTI4IDY4dC02OCAyOGgtNDE2djQxNnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtNDE2aC00MTZxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGg0MTZ2LTQxNnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4djQxNmg0MTZxNDAgMCA2OCAyOHQyOCA2OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcmVkb1xcXCI+PHRpdGxlPnJlZG88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDI1NnY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxMzgtMTM4cS0xNDgtMTM3LTM0OS0xMzctMTA0IDAtMTk4LjUgNDAuNXQtMTYzLjUgMTA5LjUtMTA5LjUgMTYzLjUtNDAuNSAxOTguNSA0MC41IDE5OC41IDEwOS41IDE2My41IDE2My41IDEwOS41IDE5OC41IDQwLjVxMTE5IDAgMjI1LTUydDE3OS0xNDdxNy0xMCAyMy0xMiAxNCAwIDI1IDlsMTM3IDEzOHE5IDggOS41IDIwLjV0LTcuNSAyMi41cS0xMDkgMTMyLTI2NCAyMDQuNXQtMzI3IDcyLjVxLTE1NiAwLTI5OC02MXQtMjQ1LTE2NC0xNjQtMjQ1LTYxLTI5OCA2MS0yOTggMTY0LTI0NSAyNDUtMTY0IDI5OC02MXExNDcgMCAyODQuNSA1NS41dDI0NC41IDE1Ni41bDEzMC0xMjlxMjktMzEgNzAtMTQgMzkgMTcgMzkgNTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXJlZnJlc2hcXFwiPjx0aXRsZT5yZWZyZXNoPC90aXRsZT48cGF0aCBkPVxcXCJNMTYzOSAxMDU2cTAgNS0xIDctNjQgMjY4LTI2OCA0MzQuNXQtNDc4IDE2Ni41cS0xNDYgMC0yODIuNS01NXQtMjQzLjUtMTU3bC0xMjkgMTI5cS0xOSAxOS00NSAxOXQtNDUtMTktMTktNDV2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1bC0xMzcgMTM3cTcxIDY2IDE2MSAxMDJ0MTg3IDM2cTEzNCAwIDI1MC02NXQxODYtMTc5cTExLTE3IDUzLTExNyA4LTIzIDMwLTIzaDE5MnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0yNS04MDB2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1IDE5LTQ1bDEzOC0xMzhxLTE0OC0xMzctMzQ5LTEzNy0xMzQgMC0yNTAgNjV0LTE4NiAxNzlxLTExIDE3LTUzIDExNy04IDIzLTMwIDIzaC0xOTlxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di03cTY1LTI2OCAyNzAtNDM0LjV0NDgwLTE2Ni41cTE0NiAwIDI4NCA1NS41dDI0NSAxNTYuNWwxMzAtMTI5cTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi10cmFzaFxcXCI+PHRpdGxlPnRyYXNoPC90aXRsZT48cGF0aCBkPVxcXCJNNzA0IDEzNzZ2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0yNTYgMHYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bTI1NiAwdi03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptLTU0NC05OTJoNDQ4bC00OC0xMTdxLTctOS0xNy0xMWgtMzE3cS0xMCAyLTE3IDExem05MjggMzJ2NjRxMCAxNC05IDIzdC0yMyA5aC05NnY5NDhxMCA4My00NyAxNDMuNXQtMTEzIDYwLjVoLTgzMnEtNjYgMC0xMTMtNTguNXQtNDctMTQxLjV2LTk1MmgtOTZxLTE0IDAtMjMtOXQtOS0yM3YtNjRxMC0xNCA5LTIzdDIzLTloMzA5bDcwLTE2N3ExNS0zNyA1NC02M3Q3OS0yNmgzMjBxNDAgMCA3OSAyNnQ1NCA2M2w3MCAxNjdoMzA5cTE0IDAgMjMgOXQ5IDIzelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi11bmRvXFxcIj48dGl0bGU+dW5kbzwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgODk2cTAgMTU2LTYxIDI5OHQtMTY0IDI0NS0yNDUgMTY0LTI5OCA2MXEtMTcyIDAtMzI3LTcyLjV0LTI2NC0yMDQuNXEtNy0xMC02LjUtMjIuNXQ4LjUtMjAuNWwxMzctMTM4cTEwLTkgMjUtOSAxNiAyIDIzIDEyIDczIDk1IDE3OSAxNDd0MjI1IDUycTEwNCAwIDE5OC41LTQwLjV0MTYzLjUtMTA5LjUgMTA5LjUtMTYzLjUgNDAuNS0xOTguNS00MC41LTE5OC41LTEwOS41LTE2My41LTE2My41LTEwOS41LTE5OC41LTQwLjVxLTk4IDAtMTg4IDM1LjV0LTE2MCAxMDEuNWwxMzcgMTM4cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxMzAgMTI5cTEwNy0xMDEgMjQ0LjUtMTU2LjV0Mjg0LjUtNTUuNXExNTYgMCAyOTggNjF0MjQ1IDE2NCAxNjQgMjQ1IDYxIDI5OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLWRvd25cXFwiPjx0aXRsZT52b2x1bWUtZG93bjwvdGl0bGU+PHBhdGggZD1cXFwiTTEwODggMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtb2ZmXFxcIj48dGl0bGU+dm9sdW1lLW9mZjwvdGl0bGU+PHBhdGggZD1cXFwiTTEyODAgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtdXBcXFwiPjx0aXRsZT52b2x1bWUtdXA8L3RpdGxlPjxwYXRoIGQ9XFxcIk04MzIgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyem0yNTYgMHEwIDE1My04NSAyODIuNXQtMjI1IDE4OC41cS0xMyA1LTI1IDUtMjcgMC00Ni0xOXQtMTktNDVxMC0zOSAzOS01OSA1Ni0yOSA3Ni00NCA3NC01NCAxMTUuNS0xMzUuNXQ0MS41LTE3My41LTQxLjUtMTczLjUtMTE1LjUtMTM1LjVxLTIwLTE1LTc2LTQ0LTM5LTIwLTM5LTU5IDAtMjYgMTktNDV0NDUtMTlxMTMgMCAyNiA1IDE0MCA1OSAyMjUgMTg4LjV0ODUgMjgyLjV6bTI1NiAwcTAgMjMwLTEyNyA0MjIuNXQtMzM4IDI4My41cS0xMyA1LTI2IDUtMjYgMC00NS0xOXQtMTktNDVxMC0zNiAzOS01OSA3LTQgMjIuNS0xMC41dDIyLjUtMTAuNXE0Ni0yNSA4Mi01MSAxMjMtOTEgMTkyLTIyN3Q2OS0yODktNjktMjg5LTE5Mi0yMjdxLTM2LTI2LTgyLTUxLTctNC0yMi41LTEwLjV0LTIyLjUtMTAuNXEtMzktMjMtMzktNTkgMC0yNiAxOS00NXQ0NS0xOXExMyAwIDI2IDUgMjExIDkxIDMzOCAyODMuNXQxMjcgNDIyLjV6XFxcIi8+PC9zeW1ib2w+PC9zdmc+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2Z1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFsncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvdnBzLmpzIiwiY29uc3QgY29udHJvbHMgPSBbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXTtcblxuZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0Y29udHJvbHMsXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0Y29udHJvbHNcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9zaW1wbGUuanMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvc21zLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL2NvbXByZXNzZWQuanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IFBsYXllciA9IHdpbmRvdy5sZVBsYXllciB8fCB3aW5kb3cuJC5sZVBsYXllcjtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuXHR2aWRlb1BsYXllZCA6IFsyNSwgNTAsIDEwMF0sXG5cdHZpZGVvUGxheWVkRGVsdGEgOiA1LFxuXHR2b2x1bWVDaGFuZ2VEZWxheSA6IDEwMDAsXG5cdHJhdGVDaGFuZ2VEZWxheSA6IDIwMDBcbn1cblxuUGxheWVyLnBsdWdpbignZ2EnLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG5cdGNvbnN0IG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIHBsdWdpbk9wdGlvbnMpO1xuXHRjb25zdCBwbGF5ZXIgPSB0aGlzO1xuXG5cdGlmICghd2luZG93LmdhKSB7XG5cdFx0Y29uc29sZS5lcnJvcignR29vZ2xlIEFuYWx5dGljcyBkb2VzIG5vdCBleGlzdCcpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBsYXllci5vbignZmlyc3RwbGF5JywgKGUpID0+IHtcblx0XHR3aW5kb3cuZ2EoXG5cdFx0XHQnc2VuZCcsXG5cdFx0XHQnZXZlbnQnLFxuXHRcdFx0J1BsYXllciBWaWRlbyBTdGFydGVkJ1xuXHRcdClcblx0fSk7XG5cblx0cGxheWVyLm9uKCdjb250cm9sY2xpY2snLCAoZSwgZGF0YSkgPT4ge1xuXHRcdGNvbnN0IGNvbnRyb2wgPSBkYXRhLmNvbnRyb2w7XG5cdFx0Y29uc3Qge25hbWUsIGNvbGxlY3Rpb259ID0gY29udHJvbC5vcHRpb25zO1xuXHRcdGlmKG5hbWUpIHtcblx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHQnUGxheWVyIENvbnRyb2wgQ2xpY2snLFxuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRjb2xsZWN0aW9uXG5cdFx0XHQpXG5cdFx0fVxuXHR9KTtcblxuXHRwbGF5ZXIub24oJ3NlY3Rpb25zY2xpY2snLCAoZSwgZGF0YSkgPT4ge1xuXHRcdHdpbmRvdy5nYShcblx0XHRcdCdzZW5kJyxcblx0XHRcdCdldmVudCcsXG5cdFx0XHQnUGxheWVyIFNlY3Rpb25zJyxcblx0XHRcdCdDbGljaycsXG5cdFx0XHRwbGF5ZXIudmlld1xuXHRcdClcblx0fSk7XG5cblxuXHRsZXQgdm9sdW1lQ2hhbmdlVGltZW91dCA9IG51bGw7XG5cblx0cGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdGNsZWFyVGltZW91dCh2b2x1bWVDaGFuZ2VUaW1lb3V0KTtcblxuXHRcdHZvbHVtZUNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KF8gPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBkYXRhLnZvbHVtZTtcblx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHQnUGxheWVyIFZvbHVtZSBDaGFuZ2UnLFxuXHRcdFx0XHROdW1iZXIodmFsdWUpLnRvRml4ZWQoMSlcblx0XHRcdClcblxuXHRcdH0sIG9wdGlvbnMudm9sdW1lQ2hhbmdlRGVsYXkpO1xuXHR9KTtcblxuXHRsZXQgcmF0ZUNoYW5nZVRpbWVvdXQgPSBudWxsO1xuXHRwbGF5ZXIub24oJ3JhdGVjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdGNsZWFyVGltZW91dChyYXRlQ2hhbmdlVGltZW91dCk7XG5cblx0XHRyYXRlQ2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoXyA9PiB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGRhdGEucmF0ZTtcblx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHQnUGxheWVyIFJhdGUgQ2hhbmdlJyxcblx0XHRcdFx0dmFsdWVcblx0XHRcdClcblxuXHRcdH0sIG9wdGlvbnMucmF0ZUNoYW5nZURlbGF5KTtcblx0fSlcblxuXG5cdGxldCBwbGF5ZWRFdmVudHNTZW50ID0ge307XG5cdHBsYXllci5vbigndGltZXVwZGF0ZScsICgpID0+IHtcblx0XHRjb25zdCBwZXJjZW50ID0gcGxheWVyLnZpZGVvLnBsYXllZFBlcmNlbnRhZ2U7XG5cdFx0Y29uc3QgZGVsdGEgPSBvcHRpb25zLnZpZGVvUGxheWVkRGVsdGE7XG5cdFx0b3B0aW9ucy52aWRlb1BsYXllZC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhcGxheWVkRXZlbnRzU2VudFtpdGVtXSAmJlxuXHRcdFx0XHRNYXRoLmFicyhwZXJjZW50IC0gaXRlbSkgPCBkZWx0YVxuXHRcdFx0KSB7XG5cdFx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdFx0J2V2ZW50Jyxcblx0XHRcdFx0XHQnUGxheWVyIFZpZGVvIFBsYXllZCcsXG5cdFx0XHRcdFx0YCR7aXRlbSAtIGRlbHRhfS0ke2l0ZW19JWBcblx0XHRcdFx0KTtcblx0XHRcdFx0cGxheWVkRXZlbnRzU2VudFtpdGVtXSA9IHRydWU7XG5cblx0XHRcdH1cblx0XHR9KVxuXHR9KTtcblxuXG5cdC8vIEZpcnN0IHF1YWxpdHljaGFuZ2UgZmlyZWQgb24gcGxheWVyIGluaXQsIGFuZCB3ZSBkb24ndCBuZWVkIHRyYWNrIHRoaXMgdG8gR0Fcblx0bGV0IGxvYWRRdWFsaXR5ID0gZmFsc2U7XG5cdHBsYXllci5vbigncXVhbGl0eWNoYW5nZScsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZighbG9hZFF1YWxpdHkpIHtcblx0XHRcdGxvYWRRdWFsaXR5ID0gdHJ1ZTtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmKHBsYXllci52aWRlby5wbGF5YmFja1F1YWxpdHkgIT0gbnVsbCkge1xuXHRcdFx0d2luZG93LmdhKFxuXHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdCdldmVudCcsXG5cdFx0XHRcdCdQbGF5ZXIgQ2hhbmdlIFF1YWxpdHknLFxuXHRcdFx0XHRwbGF5ZXIudmlkZW8ucGxheWJhY2tRdWFsaXR5LnRpdGxlXG5cdFx0XHQpXG5cdFx0fVxuXHR9KVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLWdhLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zdCBQbGF5ZXIgPSB3aW5kb3cubGVQbGF5ZXIgfHwgd2luZG93LiQubGVQbGF5ZXI7XG5jb25zdCBFbnRpdHkgPSBQbGF5ZXIuZ2V0Q29tcG9uZW50KCdFbnRpdHknKTtcblxuY29uc3QgdHJhY2tQcm92aWRlID0gdHJhY2sgPT4ge1xuXHRpZih0cmFjayA9PSBudWxsIHx8IHRyYWNrLmxhbmd1YWdlQ29kZSA9PSBudWxsKSB7XG5cdFx0cmV0dXJuIHRyYWNrXG5cdH1cblx0cmV0dXJuIHtcblx0XHRsYW5ndWFnZSA6IHRyYWNrLmxhbmd1YWdlQ29kZSxcblx0XHR0aXRsZSA6IHRyYWNrLmxhbmd1YWdlQ29kZSxcblx0XHR0b29sdGlwIDogdHJhY2subGFuZ3VhZ2VOYW1lLFxuXHRcdG5hbWUgOiB0cmFjay5sYW5ndWFnZUNvZGUsXG5cdH1cbn1cblxuXG5jbGFzcyBZb3V0dWJlIGV4dGVuZHMgRW50aXR5IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5zcmMgPSB0aGlzLnBsYXllci5vcHRpb25zLnNyYztcblxuXHRcdHRoaXMucGxheWVyLmFkZENsYXNzKCdsZXBsYXllci0teW91dHViZScpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkYmxjbGljaycsIHRoaXMub25EYmxjbGljay5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdHNldCBzcmMoc3JjKSB7XG5cdFx0aWYoc3JjID09IG51bGwpIHJldHVybjtcblx0XHRpZih0aGlzLnNyYyAmJiB0aGlzLnNyYy51cmwgPT09IHNyYy51cmwpIHJldHVybjtcblxuXHRcdGNvbnN0IHVybCA9IHNyYy51cmwgfHwgc3JjLmlkO1xuXG5cdFx0dGhpcy52aWRlb0lkID0gWW91dHViZS5wYXJzZVVybCh1cmwpO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXIpIHtcblx0XHRcdHRoaXMucG9zdGVyID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXJcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSAnaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHRoaXMudmlkZW9JZCArICcvMC5qcGcnO1xuXHRcdH1cblx0fVxuXG5cdG9uQ2xpY2soZXZlbnQpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRvbkRibGNsaWNrKCkge1xuXHRcdHRoaXMudHJpZ2dlcignZGJsY2xpY2snKTtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllcj8gdGhpcy55dFBsYXllci5nZXRDdXJyZW50VGltZSgpIDogMDtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXHRcdGlmKHRoaXMubGFzdFN0YXRlID09PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdHRoaXMudGltZUJlZm9yZVNlZWsgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdHRoaXMud2FzUGF1c2VkQmVmb3JlU2VlayA9IHRoaXMucGF1c2VkO1xuXHRcdH1cblxuXHRcdGxldCB0aW1lO1xuXHRcdGlmICh2YWx1ZSA+PSB0aGlzLmR1cmF0aW9uKSB7XG5cdFx0XHR0aW1lID0gdGhpcy5kdXJhdGlvblxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG5cdFx0XHR0aW1lID0gMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5pc1NlZWtpbmcgPSB0cnVlO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2Vla1RvKHRpbWUsIHRydWUpO1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGVsb2FkJywgeyBjdXJyZW50VGltZSA6IHRpbWUgfSk7XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtpbmcnKTtcblxuXHRcdHRoaXMuZW1pdFRpbWV1cGRhdGUoKTtcblx0fVxuXG5cdGdldCBkdXJhdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllciAmJiB0aGlzLnl0UGxheWVyLmdldER1cmF0aW9uID8gdGhpcy55dFBsYXllci5nZXREdXJhdGlvbigpIDogTmFOO1xuXHR9XG5cblx0Z2V0IHBhdXNlZCgpIHtcblx0XHRyZXR1cm4gKHRoaXMueXRQbGF5ZXIpID9cblx0XHRcdCh0aGlzLmxhc3RTdGF0ZSAhPT0gWVQuUGxheWVyU3RhdGUuUExBWUlORyAmJiB0aGlzLmxhc3RTdGF0ZSAhPT0gWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HKVxuXHRcdFx0OiB0cnVlO1xuXG5cdH1cblxuXG5cdGdldCByYXRlKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmdldFBsYXliYWNrUmF0ZSgpO1xuXHR9XG5cblx0c2V0IHJhdGUodmFsdWUpIHtcblx0XHRzdXBlci5yYXRlID0gdmFsdWU7XG5cdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1JhdGUodmFsdWUpO1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0c2V0IG11dGVkKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIubXV0ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLnVuTXV0ZSgpO1xuXHRcdH1cblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0XHR9LCA1MCk7XG5cdH1cblxuXHRnZXQgbXV0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuaXNNdXRlZCgpO1xuXHR9XG5cblx0Z2V0IHN1YnRpdGxlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKVxuXHRcdFx0PyAodGhpcy55dFBsYXllci5nZXRPcHRpb24oJ2NhcHRpb25zJywgJ3RyYWNrbGlzdCcpIHx8IFtdKS5tYXAodHJhY2tQcm92aWRlKVxuXHRcdFx0OiBbXVxuXHR9XG5cblx0Z2V0IHRyYWNrKCkge1xuXHRcdGlmKHRoaXMuX3RyYWNrID09PSB1bmRlZmluZWQgJiYgdGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKSkge1xuXHRcdFx0cmV0dXJuIHRyYWNrUHJvdmlkZSh0aGlzLnl0UGxheWVyLmdldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2snKSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3RyYWNrO1xuXHRcdH1cblx0fVxuXG5cdHNldCB0cmFjayh2YWx1ZSkge1xuXHRcdHRoaXMuX3RyYWNrID0gdmFsdWU7XG5cdFx0aWYodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdHRoaXMuX3RyYWNrc0Rpc2FibGUgPSB0cnVlO1xuXHRcdFx0LyogRGlzYWJsZSBjYXB0aW9ucyAqL1xuXHRcdFx0dGhpcy55dFBsYXllci51bmxvYWRNb2R1bGUoJ2NhcHRpb25zJyk7XG5cblx0XHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMueXRQbGF5ZXJcblx0XHRcdC5zZXRPcHRpb24oJ2NhcHRpb25zJywgJ3RyYWNrJywgeyBsYW5ndWFnZUNvZGUgOiB2YWx1ZS5uYW1lIH0pXG5cdFx0XHQuc2V0T3B0aW9uKCdjYXB0aW9ucycsICdyZWxvYWQnLCB0cnVlKTtcblxuXHRcdGlmKHRoaXMuX3RyYWNrc0Rpc2FibGUpIHtcblx0XHRcdC8qIEVuYWJsZSBjYXB0aW9ucyAqL1xuXHRcdFx0dGhpcy55dFBsYXllci5sb2FkTW9kdWxlKCdjYXB0aW9ucycpO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0aW5jcmVhc2VSYXRlKCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5hdmFpbGFibGVSYXRlcy5pbmRleE9mKHRoaXMucmF0ZSk7XG5cdFx0aWYoaW5kZXggKyAxID49IHRoaXMuYXZhaWxhYmxlUmF0ZXMubGVuZ3RoKSByZXR1cm47XG5cdFx0cmV0dXJuIHRoaXMucmF0ZSA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbaW5kZXggKyAxXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGRlY3JlYXNlUmF0ZSgpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuYXZhaWxhYmxlUmF0ZXMuaW5kZXhPZih0aGlzLnJhdGUpO1xuXHRcdGlmKGluZGV4IC0gMSA8IDApIHJldHVybjtcblx0XHRyZXR1cm4gdGhpcy5yYXRlID0gdGhpcy5hdmFpbGFibGVSYXRlc1tpbmRleCAtIDFdO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpIHtcblx0XHRjb25zdCBhcnIgPSB0aGlzLnl0UGxheWVyLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0XHRjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKCdhdXRvJyk7XG5cblx0XHRpZihpbmRleCA+IC0xKSB7XG5cdFx0XHRhcnIuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyLm1hcChpdGVtID0+ICh7XG5cdFx0XHR0aXRsZSA6IFlvdXR1YmUuUVVBTElUWV9OQU1FU1tpdGVtXSB8fCBpdGVtLFxuXHRcdFx0bmFtZSA6IGl0ZW1cblx0XHR9KSk7XG5cdH1cblxuXG5cdHNldCBwbGF5YmFja1F1YWxpdHkobmFtZSkge1xuXHRcdHN1cGVyLnBsYXliYWNrUXVhbGl0eSA9IG5hbWU7XG5cdFx0Y29uc3QgdGltZSA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0Y29uc3Qgc3RhdHVzID0gdGhpcy55dFBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpO1xuXG5cdFx0aWYoc3RhdHVzICE9PSBZVC5QbGF5ZXJTdGF0ZS5VTlNUQVJURUQgJiYgc3RhdHVzICE9PSBZVC5QbGF5ZXJTdGF0ZS5DVUVEKSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLnBhdXNlVmlkZW8oKTtcblx0XHR9XG5cblx0XHR0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eShuYW1lKTtcblx0XHR0aGlzLnl0UGxheWVyLnNlZWtUbyh0aW1lKTtcblxuXHRcdGlmKHN0YXR1cyAhPT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLnBsYXlWaWRlbygpO1xuXHRcdH1cblxuXHR9XG5cblx0Z2V0IHBsYXliYWNrUXVhbGl0eSgpIHtcblx0XHRpZiAodGhpcy5fcGxheWJhY2tRdWFsaXR5ID09IG51bGwpIHtcblx0XHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpXG5cdFx0XHRcdC5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSB0aGlzLnl0UGxheWVyLmdldFBsYXliYWNrUXVhbGl0eSgpKVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fcGxheWJhY2tRdWFsaXR5O1xuXHR9XG5cblx0Z2V0IHZvbHVtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllciA/IHRoaXMueXRQbGF5ZXIuZ2V0Vm9sdW1lKCkgLyAxMDAuMCA6IDE7XG5cdH1cblxuXHRzZXQgdm9sdW1lKHZhbHVlKSB7XG5cdFx0c3VwZXIudm9sdW1lID0gdmFsdWU7XG5cdFx0dGhpcy55dFBsYXllci5zZXRWb2x1bWUodmFsdWUgKiAxMDApO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdH0sIDUwKVxuXG5cdH1cblxuXHRzdXBwb3J0c0Z1bGxTY3JlZW4oKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwbGF5KCkge1xuXHRcdHRoaXMueXRQbGF5ZXIucGxheVZpZGVvKCk7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHR0aGlzLnl0UGxheWVyLnBhdXNlVmlkZW8oKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdH1cblxuXG5cdGluaXQoKSB7XG5cdFx0c3VwZXIuaW5pdCgpO1xuXHRcdHJldHVybiBZb3V0dWJlLmFwaUxvYWRlZCgpXG5cdFx0XHQudGhlbigoKSA9PiB0aGlzLmluaXRZVFBsYXllcigpKVxuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX3lvdXR1YmUtd3JhcHBlcicpXG5cdFx0XHQuYXR0cigndGFiaW5kZXgnLCAnMCcpO1xuXHRcdHRoaXMueW91dHViZUVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX3lvdXR1YmUnKTtcblx0XHR0aGlzLmJsb2NrZXIgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXJfX3lvdXR1YmUtYmxvY2tlcicpO1xuXG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuYmxvY2tlcilcblx0XHRcdC5hcHBlbmQodGhpcy55b3V0dWJlRWxlbWVudCk7XG5cdH1cblxuXHRpbml0WVRQbGF5ZXIoKSB7XG5cdFx0dGhpcy5faW5pdFByb21pc2UgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgZ2xvYmFsT3B0aW9ucyA9IHRoaXMucGxheWVyLm9wdGlvbnM7XG5cdFx0bGV0IHl0T3B0aW9ucyA9IHtcblx0XHRcdGF1dG9wbGF5IDogZ2xvYmFsT3B0aW9ucy5hdXRvcGxheSA/IDEgOiAwLFxuXHRcdFx0bG9vcCA6IGdsb2JhbE9wdGlvbnMubG9vcCA/IDEgOiAwLFxuXHRcdFx0aXZfbG9hZF9wb2xpY3kgOiAzLFxuXHRcdFx0Y29udHJvbHMgOiAwLFxuXHRcdFx0bW9kZXN0YnJhbmRpbmcgOiAxLFxuXHRcdFx0cmVsIDogMCxcblx0XHRcdHNob3dpbmZvIDogMCxcblx0XHRcdGNjX2xvYWRfcG9saWN5IDogMCxcblx0XHRcdGRpc2FibGVrYiA6IDAsXG5cdFx0XHRmcyA6IDAsXG5cdFx0XHRzdGFydCA6IGdsb2JhbE9wdGlvbnMudGltZVxuXHRcdH07XG5cblx0XHRZVC5yZWFkeSgoKSA9PiB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuY3R4LnJlcGxhY2VXaXRoKHRoaXMuZWxlbWVudCk7XG5cblx0XHRcdHRoaXMueXRQbGF5ZXIgPSBuZXcgWVQuUGxheWVyKHRoaXMueW91dHViZUVsZW1lbnRbMF0sIHtcblx0XHRcdFx0dmlkZW9JZCA6IHRoaXMudmlkZW9JZCxcblx0XHRcdFx0d2lkdGggOiBnbG9iYWxPcHRpb25zLndpZHRoIHx8ICcxMDAlJyxcblx0XHRcdFx0cGxheWVyVmFycyA6IHl0T3B0aW9ucyxcblx0XHRcdFx0ZXZlbnRzIDoge1xuXHRcdFx0XHRcdG9uUmVhZHkgOiB0aGlzLm9uWVRQUmVhZHkuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblN0YXRlQ2hhbmdlIDogdGhpcy5vbllUUFN0YXRlQ2hhbmdlLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25QbGF5YmFja1JhdGVDaGFuZ2UgOiB0aGlzLm9uWVRQUmF0ZUNoYW5nZS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uUGxheWJhY2tRdWFsaXR5Q2hhbmdlIDogdGhpcy5vbllUUFBsYXliYWNrUXVhbGl0eUNoYW5nZS5iaW5kKHRoaXMpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLl9pbml0UHJvbWlzZS5wcm9taXNlKCk7XG5cdH1cblxuXG5cdHNldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMoKSB7XG5cdFx0dGhpcy5hdmFpbGFibGVSYXRlcyA9IHRoaXMueXRQbGF5ZXIuZ2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpO1xuXHRcdHRoaXMucmF0ZU1pbiA9IHRoaXMuYXZhaWxhYmxlUmF0ZXNbMF07XG5cdFx0dGhpcy5yYXRlTWF4ID0gdGhpcy5hdmFpbGFibGVSYXRlc1t0aGlzLmF2YWlsYWJsZVJhdGVzLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0b25ZVFBSZWFkeShlKSB7XG5cdFx0dGhpcy5faW5pdFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdHRoaXMuX2luaXRSYXRlKCk7XG5cdFx0dGhpcy5faW5pdFZvbHVtZSgpO1xuXHRcdHRoaXMuc2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpO1xuXHR9XG5cblx0b25ZVFBSYXRlQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlKGUpIHtcblx0XHRjb25zdCBkYXRhID0gZS5kYXRhO1xuXHRcdHRoaXMuX3BsYXliYWNrUXVhbGl0eSA9IHRoaXMuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGRhdGEpO1xuXHRcdHRoaXMudHJpZ2dlcigncXVhbGl0eWNoYW5nZScsIHRoaXMuX3BsYXliYWNrUXVhbGl0eSk7XG5cdH1cblxuXHRvbllUUFN0YXRlQ2hhbmdlKGUpIHtcblx0XHRjb25zdCBzdGF0ZSA9IGUuZGF0YTtcblx0XHRpZihzdGF0ZSA9PT0gdGhpcy5sYXN0U3RhdGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxhc3RTdGF0ZSA9IHN0YXRlO1xuXHRcdHN3aXRjaChzdGF0ZSkge1xuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuVU5TVEFSVEVEOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCdsb2Fkc3RhcnQnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignbG9hZGVkbWV0YWRhdGEnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignZHVyYXRpb25jaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdFx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zLmF1dG9wbGF5KSB7XG5cdFx0XHRcdHRoaXMudHJpZ2dlcigncGxheScpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLkVOREVEOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCdwYXVzZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLlBMQVlJTkc6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignZHVyYXRpb25jaGFuZ2UnKTtcblx0XHRcdHRoaXMudHJpZ2dlcigncGxheWluZycpO1xuXG5cdFx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUXVhbGl0eSh0aGlzLl9uZXh0UGxheWJhY2tRdWFsaXR5KTtcblxuXHRcdFx0aWYodGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdFx0dGhpcy5vblNlZWtlZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmxvYWRDYXB0aW9ucygpXG5cdFx0XHR0aGlzLmVtaXRUaW1ldXBkYXRlKCk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuUEFVU0VEOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5Jyk7XG5cblx0XHRcdGlmKHRoaXMuaXNTZWVraW5nKSB7XG5cdFx0XHRcdHRoaXMub25TZWVrZWQoKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkc6XG5cdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cblx0XHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkpO1xuXG5cdFx0XHRicmVhaztcblx0XHR9XG5cblx0fVxuXG5cdG9uU2Vla2VkKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZWVraW5nSW50ZXJ2YWwpO1xuXHRcdHRoaXMuaXNTZWVraW5nID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy53YXNQYXVzZWRCZWZvcmVTZWVrKSB7XG5cdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0fVxuXG5cdGVtaXRUaW1ldXBkYXRlKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZWVraW5nSW50ZXJ2YWwpO1xuXG5cdFx0dGhpcy5zZWVraW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRpZih0aGlzLmxhc3RTdGF0ZSA9PT0gWVQuUGxheWVyU3RhdGUuUEFVU0VEKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zZWVraW5nSW50ZXJ2YWwpO1xuXHRcdFx0fSBlbHNlIGlmKHRoaXMuY3VycmVudFRpbWUgIT09IHRoaXMudGltZUJlZm9yZVNlZWspIHtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdFx0XHR9XG5cdFx0fSwgMjUwKVxuXHR9XG5cblx0bG9hZENhcHRpb25zKCkge1xuXHRcdGNvbnN0IGVtcHR5VHJhY2tsaXN0ID0gKCkgPT4gKHRoaXMuc3VidGl0bGVzID09IG51bGwgfHwgdGhpcy5zdWJ0aXRsZXMubGVuZ3RoID09PSAwKTtcblxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fbG9hZENhcHRpb25zV2F0Y2hlcik7XG5cdFx0aWYoXG5cdFx0XHQhdGhpcy5fdHJhY2tzRGlzYWJsZSAmJlxuXHRcdFx0dGhpcy5jaGVja0NhcHRpb25zRXhpc3QoKSAmJlxuXHRcdFx0ZW1wdHlUcmFja2xpc3QoKVxuXHRcdCkge1xuXHRcdFx0dGhpcy55dFBsYXllci5sb2FkTW9kdWxlKCdjYXB0aW9ucycpO1xuXG5cdFx0XHR0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRpZighZW1wdHlUcmFja2xpc3QoKSAmJiB0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpKSB7XG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuX2xvYWRDYXB0aW9uc1dhdGNoZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAyNTApXG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tDYXB0aW9uc0V4aXN0KCkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gdGhpcy55dFBsYXllci5nZXRPcHRpb25zKCdjYXB0aW9ucycpICE9IG51bGw7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgcGFyc2VVcmwodXJsKSB7XG5cdFx0bGV0IHJlc3VsdCA9IG51bGw7XG5cdFx0Y29uc3QgcmVnZXggPSBZb3V0dWJlLlVSTF9SRUdFWDtcblx0XHRjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdleCk7XG5cdFx0aWYodXJsLmxlbmd0aCA9PT0gMTEpIHtcblx0XHRcdHJlc3VsdCA9IHVybDtcblx0XHR9IGVsc2UgaWYobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoID09PSAxMSkge1xuXHRcdFx0cmVzdWx0ID0gbWF0Y2hbMl07XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuWW91dHViZS5VUkxfUkVHRVggPSAvXi4qKHlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fFxcJnY9KShbXiNcXCZcXD9dKikuKi87XG5cbllvdXR1YmUuUVVBTElUWV9OQU1FUyA9IHtcblx0dGlueSA6ICcxNDBwJyxcblx0c21hbGwgOiAnMjQwcCcsXG5cdG1lZGl1bSA6ICczNjBwJyxcblx0bGFyZ2UgOiAnNDgwcCcsXG5cdGhkNzIwIDogJzcyMHAnLFxuXHRoZDEwODAgOiAnMTA4MHAnLFxuXHRoaWdocmVzIDogJ0hEJyxcblx0YXV0byA6ICfQkNCy0YLQvidcbn1cblxuWW91dHViZS5hcGlMb2FkZWQgPSBmdW5jdGlvbigpIHtcblx0aWYodGhpcy5fbG9hZGVkKSByZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmUoKTtcblxuXHRyZXR1cm4gJC5nZXRTY3JpcHQoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknKVxuXHRcdC50aGVuKCgpID0+IHRoaXMuX2xvYWRlZCA9IHRydWUpXG59XG5cblBsYXllci5yZWdpc3RlckNvbXBvbmVudCgnWW91dHViZScsIFlvdXR1YmUpO1xuXG5QbGF5ZXIucHJlc2V0KCd5b3V0dWJlJywge1xuXHRvcHRpb25zIDoge1xuXHRcdGVudGl0eSA6ICdZb3V0dWJlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ2JhY2t3YXJkJywgJ3NvdXJjZScsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdiYWNrd2FyZCcsICdzb3VyY2UnLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59KTtcblxuUGxheWVyLnBsdWdpbigneW91dHViZScsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblxuXHQvKiBnbG9iYWwgWVQgKi9cblx0WW91dHViZS5hcGlMb2FkZWQoKVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci15b3V0dWJlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
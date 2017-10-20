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

	module.exports = __webpack_require__(1);


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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODhmMWM1ZTAxNWZkYmVkYjhlMjEiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2xlLXBsYXllci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9QbGF5QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9TcGxhc2hJY29uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1Bvc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9CdWZmZXJlZFJhbmdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Z1bGxzY3JlZW5Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL1JhdGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0JhY2t3YXJkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2VudGl0eS9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZmluZS1wcm9wZXJ0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWtleXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZvcmVhY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9lczYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzTmFOLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9zaWduLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvaGVscGVycy9tb2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNi5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vaXMtY2FsbGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1kYXRlLW9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLXN5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Z1bmN0aW9uLWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZXMtYWJzdHJhY3QvZXM1LmpzIiwid2VicGFjazovLy8uL34vZXMtdG8tcHJpbWl0aXZlL2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaGFzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2ltcGxlbWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL34vYXJyYXkucHJvdG90eXBlLmZpbmQvcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9zaGltLmpzIiwid2VicGFjazovLy8uL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2ZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy92cHMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL3ByZXNldHMvc2ltcGxlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wcmVzZXRzL3Ntcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcHJlc2V0cy9jb21wcmVzc2VkLmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQ29udHJvbCIsImVsZW1lbnQiLCJhZGRDbGFzcyIsImV4Y2x1ZGVBcnJheSIsInNvdXJjZSIsImRpc3QiLCJyZXN1bHQiLCJjb25jYXQiLCJmb3JFYWNoIiwiaW5kZXgiLCJpbmRleE9mIiwiaXRlbSIsInNwbGljZSIsImRlZmF1bHRPcHRpb25zIiwiZW50aXR5IiwiYXV0b3BsYXkiLCJoZWlnaHQiLCJsb29wIiwibXV0ZWQiLCJwcmVsb2FkIiwicG9zdGVyIiwic3ZnUGF0aCIsImlubmFjdGl2aXR5VGltZW91dCIsInJhdGUiLCJzdGVwIiwibWluIiwibWF4IiwiZGVmYXVsdCIsInBsYXliYWNrIiwic2hvcnQiLCJtZWRpdW0iLCJsb25nIiwiY29udHJvbHMiLCJjb21tb24iLCJmdWxsc2NyZWVuIiwibWluaSIsImNvbnRyb2xzT3B0aW9ucyIsImFsaWduIiwidm9sdW1lIiwibXV0ZWxpbWl0Iiwia2V5QmluZGluZyIsImtleSIsImluZm8iLCJkZXNjcmlwdGlvbiIsImZuIiwicGxheWVyIiwidmlkZW8iLCJ0b2dnbGVQbGF5IiwiY3VycmVudFRpbWUiLCJvcHRpb25zIiwic3BsYXNoSWNvbiIsInNob3ciLCJzaGlmdEtleSIsInNlY3Rpb25zIiwicHJldiIsIm5leHQiLCJjYWxjVm9sdW1lSWNvbiIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJwbHVnaW5zIiwibWluaXBsYXllciIsIm9uUGxheWVySW5pdGVkIiwiUGxheWVyIiwiY3JlYXRlRWxlbWVudCIsIl9lbGVtZW50IiwiaW5uZXJFbGVtZW50IiwiX3VzZXJPcHRpb25zIiwiX2luaXRPcHRpb25zIiwiX2xvYWRTVkdTcHJpdGUiLCJkZWZhdWx0U3ByaXRlIiwiX3ZpZXciLCJsb2FkRW50aXR5IiwiY3R4IiwiX2luaXRDb250cm9scyIsIl9kYmxjbGlja1RpbWVvdXQiLCJfaW5pdFNlY3Rpb25zIiwidGhlbiIsImRhdGEiLCJzZWN0aW9uc0NvbXBvbmVudCIsInRyaWdnZXIiLCJfaW5pdFBsdWdpbnMiLCJfbGlzdGVuSG90S2V5cyIsIl91c2VyQWN0aXZpdHkiLCJfbGlzdGVuVXNlckFjdGl2aXR5IiwiX3dhaXRpbmdUaW1lb3V0cyIsIm9uIiwiZXZlbnROYW1lIiwib25lIiwicmVtb3ZlQ2xhc3MiLCJ0aW1lIiwiZHVyYXRpb24iLCJlcnJvciIsIl9zdGFydFdhaXRpbmciLCJfc3RvcFdheXRpbmciLCJlIiwidXJsIiwicGxheSIsInBhdXNlZCIsInBhdXNlIiwiY29kZSIsImluaXQiLCJzcmMiLCJfb25GdWxsc2NyZWVuQ2hhbmdlIiwiYmluZCIsIl9vbkNsaWNrIiwiX29uRGJjbGljayIsIl9vbkluaXRlZCIsIl9vblBsYXkiLCJfb25QYXVzZSIsImRvY3VtZW50IiwiZnVsbHNjcmVlbmNoYW5nZSIsIl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSIsIm5hbWUiLCJFbnRpdHkiLCJnZXRDb21wb25lbnQiLCJfZW50aXR5IiwibG9hZCIsInZpZXciLCJhcmdzIiwiZGZkIiwiRGVmZXJyZWQiLCJfZGF0YSIsInVuZGVmaW5lZCIsInJlc29sdmUiLCJwcm9taXNlIiwiYWpheCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiZ2V0RGF0YSIsImZzQXBpIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJzdXBwb3J0c0Z1bGxTY3JlZW4iLCJlbnRlckZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsIndpZHRoIiwibGVuZ3RoIiwibmV3U2VjdGlvbnMiLCJpIiwiZW5kU2VjdGlvbiIsImJlZ2luIiwiZW5kIiwiYXR0ciIsImNzcyIsImVycm9yRGlzcGxheSIsInBsYXlCdXR0b24iLCJsb2FkZXIiLCJhcHBlbmQiLCJpY29uTmFtZSIsImNsYXNzTmFtZSIsInZpZGVvQ29udGFpbmVyIiwibGFzdFRpbWVyIiwidmlkZW9JbmZvIiwiY29uc29sZSIsIndhcm4iLCJpbmZvRWxlbWVudCIsImh0bWwiLCJ0aXRsZSIsInNlY3Rpb25Db250YWluZXIiLCJzZWN0aW9uc0NvbnRhaW5lciIsImJlZm9yZSIsImF0dHJPcHRpb25zIiwicmVkdWNlIiwib2JqIiwidmFsIiwic291cmNlcyIsImZpbmQiLCJlYWNoIiwidmFsdWUiLCJfb3B0aW9uc0Zyb21FbGVtZW50IiwicHJlc2V0T3B0aW9ucyIsInByZXNldCIsImdldFByZXNldCIsImV4dGVuZCIsIkFycmF5IiwiaXNBcnJheSIsImV4Y2x1ZGVDb250cm9scyIsImhhc093blByb3BlcnR5IiwiY29udHJvbENvbGxlY3Rpb24iLCJyb3ciLCJpbml0T3B0aW9ucyIsImFjdGl2ZSIsImlzS2V5QmluZGluZyIsImJpbmRpbmciLCJ3aGljaCIsImN0cmxLZXkiLCJwcmV2ZW50RGVmYXVsdCIsInJlamVjdCIsImdldFNlY3Rpb25EYXRhIiwiZG9uZSIsImlzU2VjdGlvbk91dHNpZGUiLCJfY29tcGxldGVTZWN0aW9ucyIsIml0ZW1zIiwiZnVsbHNjcmVlbk9ubHkiLCJoaWRlU2Nyb2xsIiwib3V0c2lkZVNlY3Rpb25zIiwicGx1Z2luT3B0aW9ucyIsIm1vdXNlSW5Qcm9ncmVzcyIsImxhc3RNb3ZlWCIsImxhc3RNb3ZlWSIsIm9uTW91c2VNb3ZlIiwic2NyZWVuWCIsInNjcmVlblkiLCJvbk1vdXNlRG93biIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm9uTW91c2VVcCIsImluYWN0aXZpdHlUaW1lb3V0IiwiZGVsYXkiLCJ1c2VyQWN0aXZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInB1c2giLCJjYWxsIiwiZm9jdXMiLCJpc0ZzIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJlbmRlZCIsIl9lcnJvciIsImhpZGUiLCJfdXNlckFjdGl2ZSIsImdldFVzZXJBY3RpdmUiLCJ0b2dnbGVDbGFzcyIsInBsdWdpbiIsInByb3RvdHlwZSIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0Q29udHJvbCIsInNlY29uZHNUb1RpbWUiLCJfcHJlc2V0cyIsIkNvb2tpZSIsInN2ZyIsImhpZGRlbkVsZW1lbnQiLCJwcmVwZW5kIiwicmVxdWlyZSIsInZlcnNpb24iLCJ3aW5kb3ciLCIkIiwibGVQbGF5ZXIiLCJvZmZzZXRTaG93Iiwib2Zmc2V0IiwidG9wIiwib3V0ZXJIZWlnaHQiLCJnZXRDb250cm9scyIsImNvbnRyb2xPcHRpb25zIiwiY29udHJvbCIsImRpc2FibGUiLCJpc0Z1bmN0aW9uIiwiZ2V0V2lkdGgiLCJfdXBkYXRlTWluaVBsYXllciIsImZvcmNlIiwic2Nyb2xsVG9wIiwiaGlkZU1pbmlQbGF5ZXIiLCJzaG93TWluaVBsYXllciIsIm9uU2V0VmlldyIsIm9uRGVsVmlldyIsIm1vZHVsZSIsImV4cG9ydHMiLCJDb250cm9sIiwiY2xpY2siLCJsZXBsYXllcl9jb250cm9sX2NsaWNrIiwib25DbGljayIsImljb24iLCJhdHRycyIsInJvbGUiLCJidWlsZENTU0NsYXNzIiwiYXJndW1lbnRzIiwiX2Rpc2FibGUiLCJfY29udHJvbHMiLCJjb250cm9sQ2xhc3MiLCJDb21wb25lbnQiLCJfX25vZGUiLCJibHVyIiwiZXZlbnQiLCJFdmVudCIsInRyaWdnZXJIYW5kbGVyIiwiZmxhZyIsImhhc0NsYXNzIiwiY29tcG9uZW50IiwiX2NvbXBvbmVudHMiLCJJY29uIiwiX3VzZVRhZyIsImNyZWF0ZUVsZW1lbnROUyIsIl9zdmdUYWciLCJfaWNvbk5hbWUiLCJhcHBlbmRDaGlsZCIsImF0dHJOUyIsInJlbW92ZUF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlTlMiLCJQbGF5QnV0dG9uIiwiaW5uZXIiLCJwZXJjZW50aWZ5IiwiY3JlYXRlRWwiLCJub29wIiwic2Vjb25kcyIsInNob3dIb3VycyIsImgiLCJNYXRoIiwiZmxvb3IiLCJtIiwicyIsIm91dCIsInBlcmNlbnQiLCJ0YWciLCJwcm9wcyIsImdldFNjcm9sbEJhcldpZHRoIiwib3V0ZXIiLCJ2aXNpYmlsaXR5Iiwib3ZlcmZsb3ciLCJhcHBlbmRUbyIsIndpZHRoV2l0aFNjcm9sbCIsIm91dGVyV2lkdGgiLCJyZW1vdmUiLCJTcGxhc2hJY29uIiwiVGltZSIsInVwZGF0ZVRleHQiLCJ0ZXh0IiwiQ29udHJvbENvbGxlY3Rpb24iLCJwbGF5ZXJPcHRpb25zIiwiaW5kZXhSb3ciLCJjcmVhdGUiLCJjb2xsZWN0aW9uIiwiX3Jvd3MiLCJhZGRSb3ciLCJlbGVtUm93IiwiZmlyc3QiLCJzZWNvbmQiLCJnbG9iYWxBbGlnbiIsInJvd0FsaWduIiwiY29udHJvbE5hbWUiLCJhZGRDb250cm9sIiwiX2dldENvbnRyb2xPcHRpb25zIiwiU2VjdGlvbnMiLCJzY3JvbGxFbGVtZW50IiwiX2lubmVyRWxlbWVudCIsImFjdGl2ZVNlY3Rpb24iLCJnZXRTZWN0aW9uQnlJbmRleCIsInNldEFjdGl2ZUJ5SW5kZXgiLCJvblNlY3Rpb25DbGljayIsIl9vblNlY3Rpb25zVG9nZ2xlIiwib25UaW1lVXBkYXRlIiwidXBkYXRlU2VjdGlvbkR1cmF0aW9uIiwic2VjdGlvbkluZGV4IiwicGFyc2VJbnQiLCJuZXdJbmRleCIsInJpZ2h0IiwiX2NyZWF0ZVNlY3Rpb25zIiwic2VjdGlvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJ0b3BQb3NpdGlvbiIsInBvc2l0aW9uIiwiYW5pbWF0ZSIsImVuZFNlY3Rpb25UaW1lIiwiY2hlY2tlZCIsInRvU3RyaW5nIiwibmV4dEluZm8iLCJ0cmltIiwicmVwbGFjZVdpdGgiLCJjcmVhdGVTZWN0aW9uIiwiRXJyb3JEaXNwbGF5IiwibWVzc2FnZSIsIm9uUGxheWVyRXJyb3IiLCJQb3N0ZXIiLCJfdXJsIiwiRnVsbHNjcmVlbkFwaSIsImFwaU1hcCIsInNwZWNBcGkiLCJicm93c2VyQXBpIiwiZGZsdCIsImNvb2tpZXMiLCJjb29raWUiLCJzcGxpdCIsImQiLCJEYXRlIiwic2V0RGF0ZSIsInllYXIiLCJVU0VSX0FHRU5UIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiSVNfTU9CSUxFIiwidGVzdCIsIklTX0NIUk9NRSIsIklTX0FORFJPSUQiLCJJU19BTkRST0lEX1BIT05FIiwiSVNfSVBBRCIsIklTX0lQSE9ORSIsIklTX0lQT0QiLCJJU19JT1MiLCJJU19TQUZBUkkiLCJNZWRpYUVycm9yIiwiZGVmYXVsdE1lc3NhZ2VzIiwiZXJyb3JUeXBlcyIsImVyck51bSIsIlBsYXlDb250cm9sIiwic2hvd1BhdXNlIiwic2hvd1BsYXkiLCJzaG93UmVwbGF5IiwicmVtb3ZlUmVwbGF5IiwiSW5maW5pdHkiLCJfcmVwbGF5IiwiVm9sdW1lQ29udHJvbCIsImRyYWciLCJtYXJrZXIiLCJsaW5lIiwicCIsImdldFBvc2l0aW9uIiwicGFnZVkiLCJkcm9wZG93bkNvbnRlbnQiLCJtb3VzZW1vdmUiLCJtb3VzZXVwIiwieSIsInRvZ2dsZU11dGVkIiwiZGVmYXVsdFZvbHVtZSIsInJvdW5kIiwiQ29udHJvbERyb3Bkb3duIiwiVGltZWxpbmVDb250cm9sIiwiX29uTWFya2VyTW91c2Vtb3ZlIiwiX29uTWFya2VyTW91c2Vkb3duIiwib25TZWN0aW9uc0luaXQiLCJfb25UaW1lVXBkYXRlIiwiX29uRHVyYXRpb25DaGFuZ2UiLCJtYXJrZXJTaGFkb3ciLCJ4IiwibWFya2VyVGltZSIsImlzTmFOIiwibW92ZSIsInRvdGFsVGltZSIsInBsYXllZFJhbmdlcyIsImJ1ZmZlcmVkUmFuZ2VzIiwicGFnZVgiLCJtb3VzZWxlYXZlIiwibW91c2Vkb3duIiwiX29uTGluZUNsaWNrIiwidG91Y2htb3ZlIiwidXBkYXRlU2VjdGlvblJhbmdlcyIsImNyZWF0ZVNlY3Rpb25SYW5nZXMiLCJsZWZ0IiwidXBkYXRlTGFiZWxzIiwid2F0Y2hCdWZmZXJJbnRlcnZhbCIsInVwZGF0ZVByb2dyZXNzQmFyIiwiRU5EIiwiU1RBUlQiLCJsb2FkZWQiLCJkb21JdGVtIiwiYWRkIiwiYnVmZmVyZWQiLCJsb2FkZWRTaXplIiwiQ29udHJvbFRleHQiLCJfdGV4dCIsIkJ1ZmZlcmVkUmFuZ2VzIiwidXBkYXRlIiwicmFuZ2UiLCJNYXJrZXIiLCJfb25Nb3VzZWRvd24iLCJfZHJhZyIsIlNlY3Rpb25Db250cm9sIiwiX29uU2VjdGlvbnNJbml0IiwiQ29udHJvbENoZWNrYm94Iiwib25DaGVja2VkIiwiX2NoZWNrZWQiLCJGdWxsc2NyZWVuQ29udHJvbCIsIlJhdGVDb250cm9sIiwiZG93bkNvbnRyb2wiLCJkZWNyZWFzZVJhdGUiLCJ1cENvbnRyb2wiLCJpbmNyZWFzZVJhdGUiLCJjdXJyZW50UmF0ZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwicmVwbGFjZSIsInJhdGVNaW4iLCJyYXRlTWF4IiwiZ2V0IiwiQmFja3dhcmRDb250cm9sIiwiU291cmNlQ29udHJvbCIsInBsYXliYWNrUXVhbGl0eSIsImdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMiLCJDb250cm9sQ29udGFpbmVyIiwiX2FjdGl2ZSIsImxpc3QiLCJjb250ZW50IiwidG9vbHRpcCIsIm9uSXRlbUNsaWNrIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsImdldEN1cnJlbnRWYWx1ZSIsImVtcHR5IiwiZWxlbSIsImFkZEl0ZW0iLCJTdWJ0aXRsZUNvbnRyb2wiLCJ0cmFjayIsInN0b3BQcm9wYWdhdGlvbiIsImhhc1ZhbHVlIiwic3VidGl0bGVzIiwiRG93bmxvYWRDb250cm9sIiwib25Mb2FkU3RhcnQiLCJocmVmIiwiZG93bmxvYWQiLCJsaW5rIiwicGFyc2VyIiwiZmlsZU5hbWUiLCJwYXRobmFtZSIsIktleUJpbmRpbmdJbmZvQ29udHJvbCIsImluZm9Db250ZW50IiwiX2tleSIsImhvdGtleSIsImtleVN0cmluZyIsIlRpbWVJbmZvQ29udHJvbCIsIl9jdXJyZW50VGltZUNvbnRyb2wiLCJfdG90YWxUaW1lQ29udHJvbCIsIkh0bWw1IiwibWVkaWEiLCJidWZmZXJSYW5nZXMiLCJfcGxheWJhY2tRdWFsaXR5Iiwib25EdXJhdGlvbkNoYW5nZSIsIm9uUHJvZ3Jlc3MiLCJvblNlZWtpbmciLCJvblNlZWtlZCIsIm9uVm9sdW1lQ2hhbmdlIiwib25EYmxjbGljayIsIm9uUGxheSIsIm9uUGF1c2UiLCJvblJhdGVDaGFuZ2UiLCJvbkVuZGVkIiwib25DYW5wbGF5VGhyb3VnaCIsIm9uV2FpdGluZyIsIm9uRXJyb3IiLCJyZW1vdmVBdHRyIiwicHJvcCIsIm1hcCIsIl9pbml0U3VidGl0bGVzIiwiX2luaXRWaWRlbyIsIl9pbml0UmF0ZSIsIl9pbml0Vm9sdW1lIiwid2Via2l0RW50ZXJGdWxsU2NyZWVuIiwibmV0d29ya1N0YXRlIiwiSEFWRV9NRVRBREFUQSIsIndlYmtpdEV4aXRGdWxsU2NyZWVuIiwicGxheWVkIiwicGxheVByb21pc2UiLCJwYXVzZVByb21pc2UiLCJfc2VsZiIsImNoaWxkcmVuIiwibGFuZ3VhZ2UiLCJyZWFkeVN0YXRlIiwiSFRNTE1lZGlhRWxlbWVudCIsIkhBVkVfTk9USElORyIsIl90ZXh0VHJhY2tzSGFjayIsIm5vdGlmeSIsInRleHRUcmFja3MiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRXaWR0aCIsInBsYXliYWNrUmF0ZSIsIk1PQklMRV9NQVhfUkFURSIsIlNBRkFSSV9NQVhfUkFURSIsIk1PQklMRV9NSU5fUkFURSIsIlNBRkFSSV9NSU5fUkFURSIsInN0b3AiLCJfc291cmNlIiwiX3RyYWNrIiwibW9kZSIsIm11dGUiLCJzZWVrYWJsZSIsInN0YXJ0IiwiY3VycmVudFNyYyIsIl90cmlnZ2VyU3RhY2siLCJfc3RvcExpc3RlbiIsImRlZmF1bHRSYXRlIiwiX3Bvc3RlciIsImlubmVySGVpZ2h0IiwiX3JhdGVNYXgiLCJfcmF0ZU1pbiIsInNldCIsImxldmVscyIsInNvbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7O0FBRUE7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFoQkE7OztBQW1CQSxtQkFBUUEsZUFBUixDQUF3QixTQUF4QixFQUFtQyxZQUFXO0FBQzdDLFNBQU87QUFDTkMsWUFBVSxzQkFBRSxRQUFGLEVBQVlDLFFBQVosQ0FBcUIsU0FBckI7QUFESixHQUFQO0FBR0EsRUFKRDs7QUFRQTs7Ozs7Ozs7QUFRQSxVQUFTQyxZQUFULENBQXNCQyxNQUF0QixFQUE4QkMsSUFBOUIsRUFBb0M7QUFDbkMsTUFBTUMsU0FBUyxHQUFHQyxNQUFILENBQVVILE1BQVYsQ0FBZjtBQUNBQyxPQUFLRyxPQUFMLENBQWEsZ0JBQVE7QUFDcEIsT0FBTUMsUUFBUUgsT0FBT0ksT0FBUCxDQUFlQyxJQUFmLENBQWQ7QUFDQSxPQUFJRixRQUFRLENBQUMsQ0FBYixFQUFnQjtBQUNmSCxXQUFPTSxNQUFQLENBQWNILEtBQWQsRUFBcUIsQ0FBckI7QUFDQTtBQUNBO0FBQ0QsR0FORDs7QUFRQSxTQUFPSCxNQUFQO0FBQ0E7O0FBRUQsS0FBTU8saUJBQWlCO0FBQ3RCQyxVQUFTLE9BRGE7QUFFdEJDLFlBQVcsS0FGVztBQUd0QkMsVUFBUyxNQUhhO0FBSXRCQyxRQUFPLEtBSmU7QUFLdEJDLFNBQVEsS0FMYztBQU10QkMsV0FBVSxVQU5ZO0FBT3RCQyxVQUFTLElBUGE7QUFRdEJDLFdBQVUsRUFSWTtBQVN0QkMsc0JBQXFCLElBVEM7QUFVdEJDLFFBQU87QUFDTkMsU0FBTyxJQUREO0FBRU5DLFFBQU0sR0FGQTtBQUdOQyxRQUFNLEdBSEE7QUFJTkMsWUFBVTtBQUpKLEdBVmU7QUFnQnRCQyxZQUFXO0FBQ1ZKLFNBQU87QUFDTkssV0FBUSxDQURGO0FBRU5DLFlBQVMsRUFGSDtBQUdOQyxVQUFPO0FBSEQ7QUFERyxHQWhCVztBQXVCdEJDLFlBQVc7QUFDVkMsV0FBUyxDQUNSLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsU0FBbkIsRUFBOEIsVUFBOUIsRUFBMkMsU0FBM0MsRUFBc0QsU0FBdEQsRUFBaUUsU0FBakUsRUFBNEUsWUFBNUUsQ0FEUSxFQUVSLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsVUFBcEIsRUFBZ0MsU0FBaEMsRUFBMkMsUUFBM0MsRUFBcUQsU0FBckQsRUFBZ0UsVUFBaEUsRUFBNEUsU0FBNUUsRUFBdUYsVUFBdkYsRUFBbUcsU0FBbkcsRUFBOEcsaUJBQTlHLENBRlEsQ0FEQztBQUtWQyxlQUFhLENBQ1osQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixTQUFuQixFQUE4QixVQUE5QixFQUEwQyxTQUExQyxFQUFxRCxNQUFyRCxFQUE2RCxTQUE3RCxFQUF3RSxpQkFBeEUsRUFBNEYsU0FBNUYsRUFBdUcsVUFBdkcsRUFBbUgsU0FBbkgsRUFBOEgsUUFBOUgsRUFBd0ksU0FBeEksRUFBbUosVUFBbkosRUFBK0osU0FBL0osRUFBMEssVUFBMUssRUFBc0wsU0FBdEwsRUFBaU0sU0FBak0sRUFBNE0sU0FBNU0sRUFBdU4sWUFBdk4sQ0FEWSxDQUxIO0FBUVZDLFNBQU8sQ0FDTixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFNBQW5CLEVBQThCLFlBQTlCLEVBQTRDLFNBQTVDLEVBQXVELFVBQXZELENBRE07QUFSRyxHQXZCVztBQW1DdEJDLG1CQUFrQjs7QUFFakJILFdBQVM7QUFDUkksV0FBUSxDQUFDLFNBQUQsRUFBWSxNQUFaO0FBREEsSUFGUTs7QUFNakJILGVBQWE7QUFDWkcsV0FBUTtBQURJO0FBTkksR0FuQ0k7QUE2Q3RCQyxVQUFTO0FBQ1JYLFlBQVUsR0FERjtBQUVSWSxjQUFZLElBRko7QUFHUmYsU0FBTztBQUhDLEdBN0NhO0FBa0R0QmdCLGNBQWEsQ0FDWjtBQUNDQyxRQUFNLEVBRFA7QUFFQ0MsU0FBTyxDQUFDLE9BQUQsQ0FGUjtBQUdDQyxnQkFBYywwQ0FIZjtBQUlDQyxPQUFLLFlBQUNDLE1BQUQsRUFBWTtBQUNoQkEsV0FBT0MsS0FBUCxDQUFhQyxVQUFiO0FBQ0E7QUFORixHQURZLEVBU1o7QUFDQ04sUUFBTSxFQURQO0FBRUNDLFNBQU8sQ0FBQyxHQUFELENBRlI7QUFHQ0Msa0tBSEQ7QUFJQ0MsT0FBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEJBLFdBQU9DLEtBQVAsQ0FBYUUsV0FBYixJQUE0QkgsT0FBT0ksT0FBUCxDQUFlckIsUUFBZixDQUF3QkosSUFBeEIsQ0FBNkJNLE1BQXpEO0FBQ0FlLFdBQU9LLFVBQVAsQ0FBa0JDLElBQWxCLENBQXVCLE1BQXZCO0FBQ0E7QUFQRixHQVRZLEVBa0JaO0FBQ0NWLFFBQU0sRUFEUDtBQUVDQyxTQUFPLENBQUMsR0FBRCxDQUZSO0FBR0NDLHdLQUhEO0FBSUNDLE9BQUssWUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQSxXQUFPQyxLQUFQLENBQWFFLFdBQWIsSUFBNEJILE9BQU9JLE9BQVAsQ0FBZXJCLFFBQWYsQ0FBd0JKLElBQXhCLENBQTZCTSxNQUF6RDtBQUNBZSxXQUFPSyxVQUFQLENBQWtCQyxJQUFsQixDQUF1QixNQUF2QjtBQUNBO0FBUEYsR0FsQlksRUEyQlo7QUFDQ0MsYUFBVyxJQURaO0FBRUNWLFNBQU8sQ0FBQyxPQUFELEVBQVUsR0FBVixDQUZSO0FBR0NDLGdCQUFjLDhCQUhmO0FBSUNGLFFBQU0sRUFKUDtBQUtDRyxPQUFLLFlBQUNDLE1BQUQsRUFBWTtBQUNoQixRQUFHQSxPQUFPUSxRQUFQLElBQW1CLElBQXRCLEVBQTRCO0FBQzNCO0FBQ0E7QUFDRFIsV0FBT1EsUUFBUCxDQUFnQkMsSUFBaEI7QUFFQTtBQVhGLEdBM0JZLEVBd0NaO0FBQ0NGLGFBQVcsSUFEWjtBQUVDWCxRQUFNLEVBRlA7QUFHQ0MsU0FBTyxDQUFDLE9BQUQsRUFBVSxHQUFWLENBSFI7QUFJQ0MsZ0JBQWMsNkJBSmY7QUFLQ0MsT0FBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEIsUUFBR0EsT0FBT1EsUUFBUCxJQUFtQixJQUF0QixFQUE0QjtBQUMzQjtBQUNBO0FBQ0RSLFdBQU9RLFFBQVAsQ0FBZ0JFLElBQWhCO0FBQ0E7QUFWRixHQXhDWSxFQW9EWjtBQUNDZCxRQUFNLEVBRFA7QUFFQ0MsU0FBTyxDQUFDLEdBQUQsQ0FGUjtBQUdDQyxnQkFBYyxxQkFIZjtBQUlDQyxPQUFLLFlBQUNDLE1BQUQsRUFBWTtBQUNoQkEsV0FBT0MsS0FBUCxDQUFhUixNQUFiLElBQXVCTyxPQUFPSSxPQUFQLENBQWVYLE1BQWYsQ0FBc0JkLElBQTdDOztBQUVBcUIsV0FBT0ssVUFBUCxDQUFrQkMsSUFBbEIsQ0FBdUJOLE9BQU9XLGNBQVAsQ0FBc0JYLE9BQU9DLEtBQVAsQ0FBYVIsTUFBbkMsQ0FBdkI7QUFFQTtBQVRGLEdBcERZLEVBZ0VaO0FBQ0NHLFFBQU0sRUFEUDtBQUVDQyxTQUFPLENBQUMsR0FBRCxDQUZSO0FBR0NDLGdCQUFjLHFCQUhmO0FBSUNDLE9BQUssWUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQSxXQUFPQyxLQUFQLENBQWFSLE1BQWIsSUFBdUJPLE9BQU9JLE9BQVAsQ0FBZVgsTUFBZixDQUFzQmQsSUFBN0M7O0FBRUFxQixXQUFPSyxVQUFQLENBQWtCQyxJQUFsQixDQUF1Qk4sT0FBT1csY0FBUCxDQUFzQlgsT0FBT0MsS0FBUCxDQUFhUixNQUFuQyxDQUF2QjtBQUNBO0FBUkYsR0FoRVksRUEyRVo7QUFDQ0csUUFBTSxFQURQO0FBRUNDLFNBQU8sQ0FBQyxHQUFELENBRlI7QUFHQ0MsZ0JBQWMsb0NBSGY7QUFJQ0MsT0FBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEJBLFdBQU9ZLGdCQUFQO0FBQ0E7QUFORixHQTNFWSxDQWxEUztBQXNJdEJDLFdBQVU7QUFDVEMsZUFBYTtBQURKLEdBdElZO0FBeUl0QkM7QUF6SXNCLEVBQXZCOztBQTRJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrRE1DLE07OztBQUNMLGtCQUFZNUQsT0FBWixFQUFxQmdELE9BQXJCLEVBQThCO0FBQUE7O0FBRTdCQSxXQUFRYSxhQUFSLEdBQXdCLEtBQXhCOztBQUY2QiwrR0FJdkIsSUFKdUIsRUFJakJiLE9BSmlCOztBQU03QixTQUFLYyxRQUFMLEdBQWdCOUQsT0FBaEI7O0FBRUE7Ozs7OztBQU1BLFNBQUsrRCxZQUFMLEdBQW9CLHFCQUFTLEtBQVQsQ0FBcEI7O0FBRUE7QUFDQSxTQUFLQyxZQUFMLEdBQW9CaEIsT0FBcEI7QUFDQSxTQUFLaUIsWUFBTDs7QUFFQSxPQUFHLE1BQUtqQixPQUFMLENBQWE1QixPQUFiLEtBQXlCLEVBQTVCLEVBQWdDO0FBQy9Cd0MsV0FBT00sY0FBUCxDQUFzQk4sT0FBT08sYUFBN0I7QUFDQTs7QUFFRCxTQUFLQyxLQUFMLEdBQWEsUUFBYjs7QUFFQTs7Ozs7O0FBTUEsU0FBS3BFLE9BQUwsR0FBZSxNQUFLNkQsYUFBTCxFQUFmOztBQUVBLFNBQUtRLFVBQUwsQ0FBZ0IsTUFBS3JCLE9BQUwsQ0FBYW5DLE1BQTdCLEVBQXFDLEVBQUV5RCxLQUFNdEUsT0FBUixFQUFyQztBQUNBOzs7Ozs7QUFNQSxTQUFLNkMsS0FBTCxHQUFhLE1BQUtoQyxNQUFsQjs7QUFFQTtBQUNBO0FBQ0EsU0FBS2tCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLd0MsYUFBTDs7QUFFQTs7O0FBR0EsU0FBS0MsZ0JBQUwsR0FBd0IsSUFBeEI7O0FBRUEsU0FBS0MsYUFBTCxHQUFxQkMsSUFBckIsQ0FBMEIsVUFBQ0MsSUFBRCxFQUFVO0FBQ25DLFVBQUt2QixRQUFMLEdBQWdCdUIsS0FBS0MsaUJBQXJCOztBQUVBOzs7Ozs7Ozs7QUFTQSxVQUFLQyxPQUFMLENBQWEsY0FBYixFQUE2QkYsSUFBN0I7QUFDQSxJQWJEO0FBY0EsU0FBS0csWUFBTDs7QUFFQSxTQUFLQyxjQUFMOztBQUVBLFNBQUtDLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxTQUFLQyxtQkFBTDs7QUFFQSxTQUFLQyxnQkFBTCxHQUF3QixFQUF4Qjs7QUFFQTtBQUNBO0FBQ0M7Ozs7O0FBS0EsbUJBTkQ7O0FBUUM7Ozs7O0FBS0EsYUFiRDs7QUFlQzs7Ozs7QUFLQSxhQXBCRDs7QUFzQkM7Ozs7O0FBS0EsVUEzQkQ7O0FBOEJDOzs7OztBQUtBLFlBbkNEOztBQXFDQzs7Ozs7QUFLQSxrQkExQ0Q7O0FBNENDOzs7OztBQUtBLGlCQWpERCxFQXFERTNFLE9BckRGLENBcURVLHFCQUFhO0FBQ3RCLFVBQUtzQyxLQUFMLENBQVdzQyxFQUFYLENBQWNDLFNBQWQsRUFBeUIsWUFBTTtBQUM5QixXQUFLUCxPQUFMLENBQWFPLFNBQWI7QUFDQSxLQUZEO0FBR0EsSUF6REQ7O0FBMkRBLFNBQUt2QyxLQUFMLENBQVd3QyxHQUFYLENBQWUsTUFBZixFQUF1QixZQUFNO0FBQ25COzs7OztBQUtULFVBQUtSLE9BQUwsQ0FBYSxXQUFiO0FBQ0EsVUFBS1MsV0FBTCxDQUFpQixrQkFBakI7QUFDQSxJQVJEOztBQVVBLFNBQUt6QyxLQUFMLENBQVdzQyxFQUFYLENBQWMsWUFBZCxFQUE0QixZQUFNO0FBQ2pDLFFBQUksTUFBS3RDLEtBQUwsQ0FBV0UsV0FBWCxHQUF5QixDQUE3QixFQUFnQztBQUMvQixXQUFLdUMsV0FBTCxDQUFpQixrQkFBakI7QUFDQTs7QUFFRDs7Ozs7QUFLQSxVQUFLVCxPQUFMLENBQWEsWUFBYixFQUEyQixFQUFFVSxNQUFPLE1BQUsxQyxLQUFMLENBQVdFLFdBQXBCLEVBQWlDeUMsVUFBVyxNQUFLM0MsS0FBTCxDQUFXMkMsUUFBdkQsRUFBM0I7QUFFQSxJQVpEOztBQWNBLFNBQUszQyxLQUFMLENBQVdzQyxFQUFYLENBQWMsV0FBZCxFQUEyQixZQUFNO0FBQ2hDLFVBQUtHLFdBQUwsQ0FBaUIsaUJBQWpCOztBQUVBLFVBQUtHLEtBQUwsR0FBYSxJQUFiO0FBQ0E7Ozs7O0FBS0EsVUFBS1osT0FBTCxDQUFhLFdBQWI7QUFDQSxJQVZEOztBQVlBLFNBQUtoQyxLQUFMLENBQVdzQyxFQUFYLENBQWMsU0FBZCxFQUF5QixZQUFNO0FBQzlCLFVBQUtPLGFBQUw7QUFDQTs7Ozs7QUFLQSxVQUFLYixPQUFMLENBQWEsU0FBYjtBQUNBLElBUkQ7O0FBVUEsU0FBS2hDLEtBQUwsQ0FBV3NDLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLFlBQU07QUFDN0IsVUFBS1EsWUFBTDtBQUNBOzs7OztBQUtBLFVBQUtkLE9BQUwsQ0FBYSxRQUFiO0FBQ0EsSUFSRDs7QUFVQSxTQUFLaEMsS0FBTCxDQUFXc0MsRUFBWCxDQUFjLGNBQWQsRUFBOEIsWUFBTTtBQUNuQzs7Ozs7QUFLQSxVQUFLTixPQUFMLENBQWEsY0FBYixFQUE2QixFQUFFeEMsUUFBUyxNQUFLUSxLQUFMLENBQVdSLE1BQXRCLEVBQTdCO0FBQ0EsSUFQRDs7QUFTQSxTQUFLUSxLQUFMLENBQVdzQyxFQUFYLENBQWMsY0FBZCxFQUE4QixVQUFDUyxDQUFELEVBQUlqQixJQUFKLEVBQWE7QUFDMUMsUUFBTWtCLE1BQU1sQixLQUFLa0IsR0FBakI7QUFDQSxVQUFLMUUsTUFBTCxDQUFZMEUsR0FBWixHQUFrQkEsR0FBbEI7QUFDQSxVQUFLaEIsT0FBTCxDQUFhLGNBQWI7QUFDQSxJQUpEOztBQU1BLFNBQUtoQyxLQUFMLENBQVdzQyxFQUFYLENBQWMsTUFBZCxFQUFzQixVQUFDUyxDQUFELEVBQU87QUFDNUIsVUFBS04sV0FBTCxDQUFpQixpQkFBakI7QUFDQSxVQUFLQSxXQUFMLENBQWlCLGtCQUFqQjtBQUNBLFVBQUtyRixRQUFMLENBQWMsbUJBQWQ7O0FBRUE7Ozs7O0FBS0EsVUFBSzRFLE9BQUwsQ0FBYSxNQUFiO0FBQ0EsSUFYRDs7QUFhQSxTQUFLaEMsS0FBTCxDQUFXc0MsRUFBWCxDQUFjLE9BQWQsRUFBdUIsWUFBTTtBQUM1QixVQUFLRyxXQUFMLENBQWlCLG1CQUFqQjtBQUNBLFVBQUtyRixRQUFMLENBQWMsa0JBQWQ7O0FBRUE7Ozs7O0FBS0EsVUFBSzRFLE9BQUwsQ0FBYSxPQUFiO0FBQ0EsSUFWRDs7QUFZQSxTQUFLaEMsS0FBTCxDQUFXc0MsRUFBWCxDQUFjLFNBQWQsRUFBeUIsWUFBTTtBQUM5QixVQUFLUSxZQUFMOztBQUVBOzs7OztBQUtBLFVBQUtkLE9BQUwsQ0FBYSxTQUFiO0FBQ0EsSUFURDs7QUFXQSxTQUFLaEMsS0FBTCxDQUFXc0MsRUFBWCxDQUFjLFlBQWQsRUFBNEIsWUFBTTtBQUNqQzs7Ozs7QUFLQSxVQUFLTixPQUFMLENBQWEsWUFBYixFQUEyQixFQUFFdkQsTUFBTyxNQUFLdUIsS0FBTCxDQUFXdkIsSUFBcEIsRUFBM0I7QUFDQSxJQVBEOztBQVNBLFNBQUt1QixLQUFMLENBQVdzQyxFQUFYLENBQWMsT0FBZCxFQUF1QixZQUFNO0FBQzVCLFVBQUtsRixRQUFMLENBQWMsaUJBQWQ7O0FBRUEsUUFBRyxNQUFLK0MsT0FBTCxDQUFhaEMsSUFBaEIsRUFBc0I7QUFDckIsV0FBSytCLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxXQUFLRixLQUFMLENBQVdpRCxJQUFYO0FBQ0EsS0FIRCxNQUdPLElBQUksQ0FBQyxNQUFLakQsS0FBTCxDQUFXa0QsTUFBaEIsRUFBd0I7QUFDOUIsV0FBS2xELEtBQUwsQ0FBV21ELEtBQVg7QUFDQTs7QUFFRDs7Ozs7QUFLQSxVQUFLbkIsT0FBTCxDQUFhLE9BQWI7QUFDQSxJQWhCRDs7QUFrQkEsU0FBS2hDLEtBQUwsQ0FBV3NDLEVBQVgsQ0FBYyxnQkFBZCxFQUFnQyxZQUFNO0FBQ3JDLFVBQUtRLFlBQUw7QUFDQTs7Ozs7QUFLQSxVQUFLZCxPQUFMLENBQWEsZ0JBQWI7QUFDQSxJQVJEOztBQVVBLFNBQUtoQyxLQUFMLENBQVdzQyxFQUFYLENBQWMsU0FBZCxFQUF5QixZQUFNO0FBQzlCLFVBQUtPLGFBQUw7O0FBRUEsVUFBSzdDLEtBQUwsQ0FBV3dDLEdBQVgsQ0FBZSxZQUFmLEVBQTZCO0FBQUEsWUFBTSxNQUFLTSxZQUFMLEVBQU47QUFBQSxLQUE3Qjs7QUFFQTs7Ozs7QUFLQSxVQUFLZCxPQUFMLENBQWEsU0FBYjtBQUNBLElBWEQ7O0FBYUEsU0FBS2hDLEtBQUwsQ0FBV3NDLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFVBQUNTLENBQUQsRUFBSWpCLElBQUosRUFBYTtBQUNuQyxVQUFLYyxLQUFMLEdBQWEseUJBQWVkLEtBQUtzQixJQUFwQixDQUFiO0FBQ0EsSUFGRDs7QUFJQSxTQUFLcEQsS0FBTCxDQUFXcUQsSUFBWCxHQUFrQnhCLElBQWxCLENBQXVCLFlBQU07QUFDNUI7Ozs7O0FBS0EsVUFBS0csT0FBTCxDQUFhLFFBQWI7O0FBRUEsUUFBRyxNQUFLN0IsT0FBTCxDQUFhdUMsSUFBaEIsRUFBc0I7QUFDckIsV0FBS3hDLFdBQUwsR0FBbUIsTUFBS0MsT0FBTCxDQUFhdUMsSUFBaEM7QUFDQTs7QUFFRCxRQUFHLE1BQUsxQyxLQUFMLENBQVdzRCxHQUFYLElBQWtCLElBQWxCLElBQTBCLE1BQUtuRCxPQUFMLENBQWFsQyxRQUExQyxFQUFvRDtBQUNuRCxXQUFLZ0YsSUFBTDtBQUNBO0FBQ0QsSUFmRDs7QUFrQkEsU0FBS1gsRUFBTCxDQUFRLGtCQUFSLEVBQTRCLE1BQUtpQixtQkFBTCxDQUF5QkMsSUFBekIsT0FBNUI7QUFDQSxTQUFLbEIsRUFBTCxDQUFRLE9BQVIsRUFBaUIsTUFBS21CLFFBQUwsQ0FBY0QsSUFBZCxPQUFqQjtBQUNBLFNBQUtsQixFQUFMLENBQVEsVUFBUixFQUFvQixNQUFLb0IsVUFBTCxDQUFnQkYsSUFBaEIsT0FBcEI7QUFDQSxTQUFLbEIsRUFBTCxDQUFRLFFBQVIsRUFBa0IsTUFBS3FCLFNBQUwsQ0FBZUgsSUFBZixPQUFsQjtBQUNBLFNBQUtsQixFQUFMLENBQVEsTUFBUixFQUFnQixNQUFLc0IsT0FBTCxDQUFhSixJQUFiLE9BQWhCO0FBQ0EsU0FBS2xCLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLE1BQUt1QixRQUFMLENBQWNMLElBQWQsT0FBakI7O0FBRUEseUJBQUVNLFFBQUYsRUFBWXhCLEVBQVosQ0FBZSx3QkFBY3lCLGdCQUE3QixFQUErQyxNQUFLQyx3QkFBTCxDQUE4QlIsSUFBOUIsT0FBL0M7QUFsVTZCO0FBbVU3Qjs7Ozs4QkFNVVMsSSxFQUFNOUQsTyxFQUFTO0FBQ3pCLFFBQU0rRCxTQUFTbkQsT0FBT29ELFlBQVAsQ0FBb0JGLElBQXBCLENBQWY7QUFDQSxTQUFLRyxPQUFMLEdBQWUsSUFBSUYsTUFBSixDQUFXLElBQVgsRUFBaUIvRCxPQUFqQixDQUFmO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7OzswQkFTTztBQUNOLFdBQU8sS0FBS0gsS0FBTCxDQUFXaUQsSUFBWCxFQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7OzJCQUtRO0FBQ1AsV0FBTyxLQUFLakQsS0FBTCxDQUFXbUQsS0FBWCxFQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O2dDQUthO0FBQ1osV0FBTyxLQUFLbkQsS0FBTCxDQUFXQyxVQUFYLEVBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7MEJBS087QUFDTixXQUFPLEtBQUtELEtBQUwsQ0FBV3FFLElBQVgsRUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7NkJBWVVDLEksRUFBZTtBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFNBQU07QUFBQTs7QUFDeEIsU0FBS2pDLEVBQUwsMkJBQW1CZ0MsSUFBbkIsU0FBOEJDLElBQTlCOztBQUVBLFdBQU8sSUFBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7OzZCQVVVRCxJLEVBQWU7QUFBQSx1Q0FBTkMsSUFBTTtBQUFOQSxTQUFNO0FBQUE7O0FBQ3hCLFNBQUtqQyxFQUFMLDJCQUFtQmdDLElBQW5CLFNBQThCQyxJQUE5Qjs7QUFFQSxXQUFPLElBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7OzZCQU1VO0FBQ1QsUUFBTUMsTUFBTSxJQUFJLGlCQUFFQyxRQUFOLEVBQVo7O0FBRUEsUUFBSSxLQUFLQyxLQUFMLEtBQWVDLFNBQW5CLEVBQThCO0FBQzdCSCxTQUFJSSxPQUFKLENBQVksS0FBS0YsS0FBakI7QUFDQSxZQUFPRixJQUFJSyxPQUFKLEVBQVA7QUFDQTs7QUFFRCxRQUFJLE9BQU8sS0FBSzFFLE9BQUwsQ0FBYTJCLElBQXBCLEtBQTZCLFFBQWpDLEVBQTJDO0FBQzFDLFlBQU8saUJBQUVnRCxJQUFGLENBQU87QUFDYjlCLFdBQU0sS0FBSzdDLE9BQUwsQ0FBYTJCLElBRE47QUFFYmlELGNBQVMsS0FGSTtBQUdiQyxnQkFBVztBQUhFLE1BQVAsRUFJSkgsT0FKSSxFQUFQO0FBTUEsS0FQRCxNQU9PLElBQUksUUFBTyxLQUFLMUUsT0FBTCxDQUFhMkIsSUFBcEIsTUFBNkIsUUFBakMsRUFBMkM7QUFDakQwQyxTQUFJSSxPQUFKLENBQVksS0FBS3pFLE9BQUwsQ0FBYTJCLElBQXpCO0FBQ0EsWUFBTzBDLElBQUlLLE9BQUosRUFBUDtBQUNBO0FBQ0Q7OztvQ0FFZ0I7QUFDaEIsV0FBTyxLQUFLSSxPQUFMLEdBQ0xwRCxJQURLLENBQ0EsZ0JBQVE7QUFDYixZQUFPQyxLQUFLdkIsUUFBWjtBQUNBLEtBSEssQ0FBUDtBQUlBOztBQUVEOzs7Ozs7Ozs7dUNBTW9CO0FBQ25CLFFBQU0yRSwrQkFBTjs7QUFFQSxRQUFHQSxNQUFNQyxpQkFBVCxFQUE0QjtBQUMzQjtBQUNBLFVBQUtoSSxPQUFMLENBQWEsQ0FBYixFQUFnQitILE1BQU1DLGlCQUF0Qjs7QUFFQTs7Ozs7QUFLQSxVQUFLbkQsT0FBTCxDQUFhLGtCQUFiLEVBQWlDLElBQWpDO0FBQ0EsS0FWRCxNQVVPLElBQUksS0FBS2hDLEtBQUwsQ0FBV29GLGtCQUFYLEVBQUosRUFBcUM7QUFDM0MsVUFBS3BGLEtBQUwsQ0FBV3FGLGVBQVg7QUFDQTtBQUNEOztBQUVEOzs7Ozs7Ozs7b0NBTWlCO0FBQ2hCLFFBQU1ILCtCQUFOOztBQUVBLFFBQUdBLE1BQU1JLGNBQVQsRUFBeUI7QUFDeEJ4QixjQUFTb0IsTUFBTUksY0FBZjtBQUNBLEtBRkQsTUFFTyxJQUFJLEtBQUt0RixLQUFMLENBQVdvRixrQkFBWCxFQUFKLEVBQXFDO0FBQzNDLFVBQUtwRixLQUFMLENBQVdzRixjQUFYO0FBQ0E7O0FBRUQsU0FBS3RELE9BQUwsQ0FBYSxrQkFBYixFQUFpQyxLQUFqQztBQUVBOztBQUVEOzs7Ozs7Ozs7c0NBTW1CO0FBQ2xCLFFBQUcsS0FBS3NDLElBQUwsS0FBYyxZQUFqQixFQUErQjtBQUM5QixVQUFLZ0IsY0FBTDtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtILGlCQUFMO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7Ozs7OzsrQkFPWWxCLEksRUFBTTtBQUNqQixXQUFPLEtBQUsvRSxRQUFMLENBQWMrRSxJQUFkLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7OzhCQU1XO0FBQ1YsV0FBTyxLQUFLOUcsT0FBTCxDQUFhb0ksS0FBYixFQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7cUNBT2tCaEYsUSxFQUFVO0FBQzNCLFFBQUlBLFlBQVksSUFBWixJQUFvQkEsU0FBU2lGLE1BQVQsS0FBb0IsQ0FBNUMsRUFBK0M7QUFDOUM7QUFDQTtBQUNELFFBQUlDLGNBQWMsR0FBR2hJLE1BQUgsQ0FBVThDLFFBQVYsQ0FBbEI7QUFDQSxTQUFLLElBQUltRixJQUFJLENBQWIsRUFBZ0JBLElBQUlELFlBQVlELE1BQWhDLEVBQXdDRSxHQUF4QyxFQUE2QztBQUM1QyxTQUFJQyxtQkFBSjtBQUNBLFNBQUlELElBQUtELFlBQVlELE1BQVosR0FBcUIsQ0FBOUIsRUFBa0M7QUFDakNHLG1CQUFhRixZQUFZQyxJQUFFLENBQWQsRUFBaUJFLEtBQTlCO0FBQ0EsTUFGRCxNQUVPO0FBQ05ELG1CQUFhLEtBQUszRixLQUFMLENBQVcyQyxRQUF4QjtBQUNBO0FBQ0Q4QyxpQkFBWUMsQ0FBWixFQUFlRyxHQUFmLEdBQXFCRixVQUFyQjtBQUNBO0FBQ0QsV0FBT0YsV0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7O0FBb0pBOzs7OzttQ0FLZ0I7QUFDZixRQUFNdEYsVUFBVSxLQUFLQSxPQUFyQjtBQUNBLFFBQU1oRCxVQUFVLEtBQUs4RCxRQUFyQjs7QUFFQSxTQUFLOUQsT0FBTCxHQUFlLHFCQUFTLEtBQVQsQ0FBZjs7QUFHQSxTQUFLQSxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUNiQyxRQURhLENBQ0osVUFESSxFQUViMEksSUFGYSxDQUVSLFVBRlEsRUFFSSxDQUZKLEVBR2JDLEdBSGEsQ0FHVCxPQUhTLEVBR0E1RixRQUFRb0YsS0FBUixJQUFpQixNQUhqQixFQUliUSxHQUphLENBSVQsV0FKUyxFQUlJNUYsUUFBUW9GLEtBSlosQ0FBZjs7QUFNQTs7Ozs7O0FBTUEsU0FBS1MsWUFBTCxHQUFvQiwyQkFBaUIsSUFBakIsQ0FBcEI7O0FBR0E7Ozs7OztBQU1BLFNBQUtDLFVBQUwsR0FBa0IseUJBQWUsSUFBZixDQUFsQjs7QUFFQTtBQUNBLFNBQUtDLE1BQUwsR0FBYyxzQkFBRSxTQUFGLEVBQ1o5SSxRQURZLENBQ0gsMkJBREcsRUFFWitJLE1BRlksQ0FFTCxtQkFBUyxJQUFULEVBQWU7QUFDdEJDLGVBQVcsU0FEVztBQUV0QkMsZ0JBQVk7QUFGVSxLQUFmLEVBR0xsSixPQUxVLENBQWQ7O0FBUUE7Ozs7OztBQU1BLFNBQUtpRCxVQUFMLEdBQWtCLHlCQUFlLElBQWYsQ0FBbEI7O0FBRUEsU0FBS2tHLGNBQUwsR0FBc0IscUJBQVMsS0FBVCxFQUFnQjtBQUNyQ0QsZ0JBQVk7QUFEeUIsS0FBaEIsRUFHckJGLE1BSHFCLENBR2QsS0FBS0gsWUFBTCxDQUFrQjdJLE9BSEosRUFJckJnSixNQUpxQixDQUlkLEtBQUtGLFVBQUwsQ0FBZ0I5SSxPQUpGLEVBS3JCZ0osTUFMcUIsQ0FLZCxLQUFLRCxNQUxTLEVBTXJCQyxNQU5xQixDQU1kLEtBQUsvRixVQUFMLENBQWdCakQsT0FORixDQUF0Qjs7QUFRQSxTQUFLbUIsTUFBTCxHQUFjLHFCQUFXLElBQVgsQ0FBZDtBQUNBLFNBQUtnSSxjQUFMLENBQW9CSCxNQUFwQixDQUEyQixLQUFLN0gsTUFBTCxDQUFZbkIsT0FBdkM7O0FBR0EsUUFBTW9KLFlBQVksbUJBQVMsSUFBVCxFQUFlO0FBQ2hDekcsU0FBSyxZQUFDQyxNQUFELEVBQVk7QUFDaEIsVUFBTUMsUUFBUUQsT0FBT0MsS0FBckI7QUFDQSxhQUFPLDBCQUFjQSxNQUFNMkMsUUFBTixHQUFpQjNDLE1BQU1FLFdBQXJDLENBQVA7QUFDQTtBQUorQixLQUFmLENBQWxCOztBQU9BLFFBQUcsS0FBS0MsT0FBTCxDQUFhcUcsU0FBaEIsRUFBMkI7QUFDMUJDLGFBQVFDLElBQVIsQ0FBYSx3RUFBYjtBQUNBOztBQUVELFNBQUtDLFdBQUwsR0FBbUIscUJBQVMsS0FBVCxFQUFnQjtBQUNsQ04sZ0JBQVk7QUFEc0IsS0FBaEIsRUFHbEJGLE1BSGtCLENBR1gscUJBQVMsS0FBVCxFQUFnQjtBQUN2QkUsZ0JBQVksaUJBRFc7QUFFdkJPLFdBQU8sS0FBS3pHLE9BQUwsQ0FBYTBHLEtBQWIsSUFBc0I7QUFGTixLQUFoQixDQUhXLEVBT2xCVixNQVBrQixDQU9YLHFCQUFTLEtBQVQsRUFBZ0I7QUFDdkJFLGdCQUFZLHNCQURXO0FBRXZCTyxXQUFPLEtBQUt6RyxPQUFMLENBQWFOLFdBQWIsSUFBNEIsS0FBS00sT0FBTCxDQUFhcUcsU0FBekMsSUFBc0Q7QUFGdEMsS0FBaEIsQ0FQVyxFQVdsQkwsTUFYa0IsQ0FXWCxxQkFBUyxLQUFULEVBQWdCO0FBQ3ZCRSxnQkFBWSxnQkFEVztBQUV2Qk87QUFGdUIsS0FBaEIsRUFHTFQsTUFISyxDQUdFSSxVQUFVcEosT0FIWixDQVhXLENBQW5COztBQWdCQSxTQUFLK0QsWUFBTCxHQUFvQixzQkFBRSxTQUFGLEVBQ2xCOUQsUUFEa0IsQ0FDVCxpQkFEUyxFQUVsQitJLE1BRmtCLENBRVgsS0FBS0csY0FGTSxFQUdsQkgsTUFIa0IsQ0FHWCxLQUFLUSxXQUhNLENBQXBCOztBQUtBLFNBQUt4SixPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUNiZ0osTUFEYSxDQUNOLEtBQUtqRixZQURDLENBQWY7O0FBR0EsU0FBSzlELFFBQUwsQ0FBYyxrQkFBZDtBQUNBLFNBQUtBLFFBQUwsQ0FBYyxrQkFBZDs7QUFHQSxRQUFHK0MsUUFBUTJHLGdCQUFYLEVBQTZCO0FBQzVCLFVBQUtDLGlCQUFMLEdBQXlCLHNCQUFFNUcsUUFBUTJHLGdCQUFWLENBQXpCO0FBQ0E7O0FBRUQzSixZQUFRNkosTUFBUixDQUFlLEtBQUs3SixPQUFwQjtBQUNBLFNBQUttSixjQUFMLENBQW9CSCxNQUFwQixDQUEyQmhKLE9BQTNCOztBQUVBLFdBQU8sS0FBS0EsT0FBWjtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozt5Q0FRc0I7QUFDckI7QUFDQSxRQUFPQSxVQUFVLEtBQUs4RCxRQUF0QjtBQUNBLFFBQUk5RCxXQUFXLElBQVgsSUFBbUJBLFFBQVFxSSxNQUFSLEtBQW1CLENBQTFDLEVBQTZDO0FBQzVDLFlBQU8sRUFBUDtBQUNBOztBQUVELFFBQUl5QixjQUFjLENBQ2pCLFFBRGlCLEVBRWpCLE9BRmlCLEVBR2pCLFFBSGlCLEVBSWpCLFVBSmlCLEVBS2pCLE1BTGlCLEVBTWpCLE9BTmlCLEVBT2pCLFNBUGlCLEVBU2pCQyxNQVRpQixDQVNWLFVBQUNDLEdBQUQsRUFBTXRKLElBQU4sRUFBZTtBQUN0QixTQUFNdUosTUFBTWpLLFFBQVEySSxJQUFSLENBQWFqSSxJQUFiLENBQVo7QUFDQSxTQUFHdUosT0FBTyxJQUFWLEVBQWdCO0FBQ2ZELFVBQUl0SixJQUFKLElBQVlWLFFBQVEySSxJQUFSLENBQWFqSSxJQUFiLENBQVo7QUFDQTtBQUNELFlBQU9zSixHQUFQO0FBQ0EsS0FmaUIsRUFlZixFQWZlLENBQWxCOztBQWlCQUYsZ0JBQVlJLE9BQVosR0FBc0IsRUFBdEI7O0FBRUE7QUFDQSxRQUFHbEssUUFBUTJJLElBQVIsQ0FBYSxLQUFiLENBQUgsRUFBd0I7QUFDdkJtQixpQkFBWTNELEdBQVosR0FBa0I7QUFDakJOLFdBQU03RixRQUFRMkksSUFBUixDQUFhLEtBQWIsQ0FEVztBQUVqQmUsYUFBUTFKLFFBQVEySSxJQUFSLENBQWEsY0FBYixLQUFnQzNJLFFBQVEySSxJQUFSLENBQWEsT0FBYixDQUFoQyxJQUF5RDtBQUZoRCxNQUFsQjtBQUlBOztBQUVEO0FBQ0E7QUFDQTNJLFlBQVFtSyxJQUFSLENBQWEsUUFBYixFQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQzdCLENBQUQsRUFBSTdILElBQUosRUFBYTtBQUN4Q0EsWUFBTyxzQkFBRUEsSUFBRixDQUFQO0FBQ0EsU0FBRyxDQUFDQSxLQUFLaUksSUFBTCxDQUFVLGNBQVYsQ0FBSixFQUErQjtBQUM5QjtBQUNBO0FBQ0RtQixpQkFBWUksT0FBWixHQUFzQkosWUFBWUksT0FBWixDQUFvQjVKLE1BQXBCLENBQTJCO0FBQ2hEdUYsV0FBTW5GLEtBQUtpSSxJQUFMLENBQVUsS0FBVixDQUQwQztBQUVoRGUsYUFBUWhKLEtBQUtpSSxJQUFMLENBQVUsY0FBVixLQUE2QmpJLEtBQUtpSSxJQUFMLENBQVUsT0FBVixDQUE3QixJQUFtRDtBQUZYLE1BQTNCLENBQXRCO0FBS0EsS0FWRDs7QUFZQSxXQUFPbUIsV0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7OztrQ0FRZU8sSyxFQUFPO0FBQ3JCLFFBQUdBLFNBQVMsSUFBWixFQUFrQjtBQUNqQkEsYUFBUSxLQUFLeEgsS0FBTCxDQUFXUixNQUFuQjtBQUNBO0FBQ0QsUUFBTUEsU0FBU2dJLEtBQWY7O0FBRUEsUUFBSWhJLFNBQVMsS0FBS1csT0FBTCxDQUFhWCxNQUFiLENBQW9CQyxTQUFqQyxFQUE0QztBQUMzQyxZQUFPLFlBQVA7QUFDQSxLQUZELE1BRU8sSUFBSStILFFBQVEsR0FBWixFQUFpQjtBQUN2QixZQUFPLGFBQVA7QUFDQSxLQUZNLE1BRUE7QUFDTixZQUFPLFdBQVA7QUFDQTtBQUNEOztBQUlEOzs7Ozs7Ozs7O2tDQU9lO0FBQUE7O0FBQ2QsUUFBTVAsY0FBYyxLQUFLUSxtQkFBTCxFQUFwQjtBQUNBLFFBQUlDLGdCQUFnQixFQUFwQjs7QUFFQSxRQUFJLEtBQUt2RyxZQUFMLENBQWtCd0csTUFBbEIsSUFBNEI1RyxPQUFPNkcsU0FBUCxDQUFpQixLQUFLekcsWUFBTCxDQUFrQndHLE1BQW5DLENBQWhDLEVBQTRFO0FBQzNFRCxxQkFBZ0IzRyxPQUFPNkcsU0FBUCxDQUFpQixLQUFLekcsWUFBTCxDQUFrQndHLE1BQW5DLEVBQTJDeEgsT0FBM0Q7QUFDQTs7QUFHRDtBQUNBLFNBQUtBLE9BQUwsR0FBZSxpQkFBRTBILE1BQUYsQ0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQjlKLGNBQW5CLEVBQW1DMkosYUFBbkMsRUFBa0RULFdBQWxELEVBQStELEtBQUs5RixZQUFwRSxDQUFmOztBQUVBLFFBQUcsS0FBS2hCLE9BQUwsQ0FBYWtILE9BQWIsSUFBd0IsQ0FBQ1MsTUFBTUMsT0FBTixDQUFjLEtBQUs1SCxPQUFMLENBQWFrSCxPQUEzQixDQUE1QixFQUFpRTtBQUNoRSxVQUFLbEgsT0FBTCxDQUFha0gsT0FBYixHQUF1QixDQUFDLEtBQUtsSCxPQUFMLENBQWFrSCxPQUFkLENBQXZCO0FBQ0E7O0FBRUQsUUFBRyxPQUFPLEtBQUtsSCxPQUFMLENBQWFtRCxHQUFwQixLQUE0QixRQUEvQixFQUF5QztBQUN4QyxVQUFLbkQsT0FBTCxDQUFhbUQsR0FBYixHQUFtQixFQUFFTixLQUFNLEtBQUs3QyxPQUFMLENBQWFtRCxHQUFyQixFQUFuQjtBQUNBOztBQUVELFFBQUcsS0FBS25ELE9BQUwsQ0FBYW1ELEdBQWIsSUFBb0IsSUFBcEIsSUFBNEIsS0FBS25ELE9BQUwsQ0FBYWtILE9BQWIsQ0FBcUI3QixNQUFyQixHQUE4QixDQUE3RCxFQUFnRTtBQUMvRCxVQUFLckYsT0FBTCxDQUFhbUQsR0FBYixHQUFtQixLQUFLbkQsT0FBTCxDQUFha0gsT0FBYixDQUFxQixDQUFyQixDQUFuQjtBQUNBOztBQUVEO0FBQ0EsU0FBS2xILE9BQUwsQ0FBYWpCLFFBQWIsR0FBd0IsaUJBQUUySSxNQUFGLENBQVMsRUFBVCxFQUFhOUosZUFBZW1CLFFBQTVCLEVBQXNDd0ksY0FBY3hJLFFBQXBELEVBQThELEtBQUtpQyxZQUFMLENBQWtCakMsUUFBaEYsQ0FBeEI7O0FBRUE7QUFDQTtBQUNBOztBQTdCYywrQkE4QkgrRSxJQTlCRztBQStCYixTQUFJLENBQUMsT0FBSzlELE9BQUwsQ0FBYTZILGVBQWIsQ0FBNkJDLGNBQTdCLENBQTRDaEUsSUFBNUMsQ0FBTCxFQUF3RDtBQUFBO0FBQUE7QUFDeEQsU0FBTWlFLG9CQUFvQixPQUFLL0gsT0FBTCxDQUFhNkgsZUFBYixDQUE2Qi9ELElBQTdCLENBQTFCO0FBQ0FpRSx1QkFBa0J4SyxPQUFsQixDQUEwQixVQUFDeUssR0FBRCxFQUFNeEssS0FBTixFQUFnQjtBQUN6QyxVQUFJLE9BQUt3QyxPQUFMLENBQWFqQixRQUFiLENBQXNCK0UsSUFBdEIsS0FBK0IsT0FBSzlELE9BQUwsQ0FBYWpCLFFBQWIsQ0FBc0IrRSxJQUF0QixFQUE0QnRHLEtBQTVCLENBQW5DLEVBQXVFO0FBQ3RFLGNBQUt3QyxPQUFMLENBQWFqQixRQUFiLENBQXNCK0UsSUFBdEIsRUFBNEJ0RyxLQUE1QixJQUFxQ04sYUFBYSxPQUFLOEMsT0FBTCxDQUFhakIsUUFBYixDQUFzQitFLElBQXRCLEVBQTRCdEcsS0FBNUIsQ0FBYixFQUFpRHdLLEdBQWpELENBQXJDO0FBQ0E7QUFDRCxNQUpEO0FBakNhOztBQThCZCxTQUFLLElBQU1sRSxJQUFYLElBQW1CLEtBQUs5RCxPQUFMLENBQWE2SCxlQUFoQyxFQUFpRDtBQUFBLHNCQUF0Qy9ELElBQXNDOztBQUFBO0FBUWhEOztBQUVELFFBQUksS0FBSzlELE9BQUwsQ0FBYXdILE1BQWIsSUFBdUI1RyxPQUFPNkcsU0FBUCxDQUFpQixLQUFLekgsT0FBTCxDQUFhd0gsTUFBOUIsQ0FBM0IsRUFBa0U7QUFDakU1RyxZQUFPNkcsU0FBUCxDQUFpQixLQUFLekgsT0FBTCxDQUFhd0gsTUFBOUIsRUFBc0NTLFdBQXRDO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7Ozs7bUNBS2dCO0FBQUEsZUFDSSxDQUFDLFFBQUQsRUFBVyxZQUFYLENBREo7O0FBQ2YsNkNBQTZDO0FBQXhDLFNBQU1uRSxlQUFOO0FBQ0osU0FBSSxDQUFDLEtBQUs5RCxPQUFMLENBQWFqQixRQUFiLENBQXNCK0ksY0FBdEIsQ0FBcUNoRSxJQUFyQyxDQUFMLEVBQWlEO0FBQ2pELFNBQU1pRSxvQkFBb0IsZ0NBQXNCLElBQXRCLEVBQTRCLEVBQUVqRSxVQUFGLEVBQTVCLENBQTFCO0FBQ0EsVUFBSzlHLE9BQUwsQ0FBYWdKLE1BQWIsQ0FBb0IrQixrQkFBa0IvSyxPQUF0QztBQUNBOztBQUVELFFBQUksS0FBSytCLFFBQUwsQ0FBY0MsTUFBZCxJQUF3QixJQUE1QixFQUFrQztBQUNqQyxVQUFLRCxRQUFMLENBQWNDLE1BQWQsQ0FBcUJrSixNQUFyQixHQUE4QixJQUE5QjtBQUNBO0FBQ0Q7OztvQ0FHZ0I7QUFBQTs7QUFFaEIsUUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQUN2RixDQUFELEVBQUl3RixPQUFKLEVBQWdCO0FBQ3BDLFlBQU8sQ0FBRXhGLEVBQUV5RixLQUFGLEtBQVlELFFBQVE1SSxHQUFyQixJQUE4Qm9ELEVBQUVwRCxHQUFGLEtBQVU0SSxRQUFRNUksR0FBakQsS0FDSixDQUFDLENBQUM0SSxRQUFRakksUUFBVixLQUF1QnlDLEVBQUV6QyxRQURyQixJQUVKLENBQUMsQ0FBQ2lJLFFBQVFFLE9BQVYsS0FBc0IxRixFQUFFMEYsT0FGM0I7QUFHQSxLQUpEOztBQU1BLFNBQUt0TCxPQUFMLENBQWFtRixFQUFiLENBQWdCLHlCQUFoQixFQUEyQyxVQUFDUyxDQUFELEVBQU87QUFDakQsWUFBSzVDLE9BQUwsQ0FBYVQsVUFBYixDQUF3QmhDLE9BQXhCLENBQWdDLG1CQUFXOztBQUUxQyxVQUFHNEssYUFBYXZGLENBQWIsRUFBZ0J3RixPQUFoQixDQUFILEVBQTZCO0FBQzVCeEYsU0FBRTJGLGNBQUY7QUFDQUgsZUFBUXpJLEVBQVI7QUFDQSxjQUFPLEtBQVA7QUFDQTtBQUVELE1BUkQ7QUFTQSxLQVZEO0FBV0E7O0FBRUQ7Ozs7Ozs7OzttQ0FNZ0I7QUFBQTs7QUFDZixRQUFNMEUsTUFBTSxpQkFBRUMsUUFBRixFQUFaO0FBQ0EsUUFBSSxLQUFLdEUsT0FBTCxDQUFhMkIsSUFBYixJQUFxQixJQUF6QixFQUErQjtBQUM5QjBDLFNBQUltRSxNQUFKLENBQVcsSUFBWDtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtDLGNBQUwsR0FBc0JDLElBQXRCLENBQTJCLG9CQUFZO0FBQ3RDdEksOENBQWVBLFFBQWY7O0FBRUEsVUFBTXVJLG1CQUFvQixPQUFLL0IsaUJBQUwsSUFBMEIsT0FBS0EsaUJBQUwsQ0FBdUJ2QixNQUF2QixHQUFnQyxDQUFwRjs7QUFFQSxVQUFJakYsWUFBWSxJQUFaLElBQW9CQSxTQUFTaUYsTUFBVCxLQUFvQixDQUE1QyxFQUErQztBQUM5Q2hCLFdBQUltRSxNQUFKLENBQVcsSUFBWDtBQUNBO0FBQ0E7O0FBRURwSSxpQkFBVyxPQUFLd0ksaUJBQUwsQ0FBdUJ4SSxRQUF2QixDQUFYOztBQUVBLFVBQU13QixvQkFBb0IsK0JBQW1CO0FBQzVDaUgsY0FBUXpJLFFBRG9DO0FBRTVDMEksdUJBQWlCSCxnQkFGMkI7QUFHNUNJLG1CQUFhO0FBSCtCLE9BQW5CLENBQTFCOztBQU1BLGFBQUtoSSxZQUFMLENBQWtCaUYsTUFBbEIsQ0FBeUJwRSxrQkFBa0I1RSxPQUEzQzs7QUFFQSxVQUFJMkwsZ0JBQUosRUFBc0I7QUFDckIsV0FBTUssa0JBQWtCLCtCQUFtQjtBQUMxQ0gsZUFBUXpJO0FBRGtDLFFBQW5CLENBQXhCO0FBR0EsY0FBS3dHLGlCQUFMLENBQXVCWixNQUF2QixDQUE4QmdELGdCQUFnQmhNLE9BQTlDO0FBQ0E7QUFDRHFILFVBQUlJLE9BQUosQ0FBWSxFQUFFN0Msb0NBQUYsRUFBcUJpSCxPQUFRekksUUFBN0IsRUFBWjtBQUNBLE1BM0JEO0FBNEJBOztBQUVELFdBQU9pRSxJQUFJSyxPQUFKLEVBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7OztrQ0FPZTtBQUNkLFFBQUksS0FBSzFFLE9BQUwsQ0FBYVMsT0FBakIsRUFBMEI7QUFDekIsVUFBSyxJQUFNcUQsSUFBWCxJQUFtQixLQUFLOUQsT0FBTCxDQUFhUyxPQUFoQyxFQUF5QztBQUN4QyxVQUFHLENBQUMsS0FBS1QsT0FBTCxDQUFhUyxPQUFiLENBQXFCcUgsY0FBckIsQ0FBb0NoRSxJQUFwQyxDQUFKLEVBQStDO0FBQy9DLFVBQU1tRixnQkFBZ0IsS0FBS2pKLE9BQUwsQ0FBYVMsT0FBYixDQUFxQnFELElBQXJCLENBQXRCO0FBQ0EsVUFBRyxLQUFLQSxJQUFMLENBQUgsRUFBZTtBQUNkLFdBQUdtRixhQUFILEVBQWtCO0FBQ2pCLGFBQUtuRixJQUFMLEVBQVdtRixhQUFYO0FBQ0E7QUFDRCxPQUpELE1BSU87QUFDTjNDLGVBQVE3RCxLQUFSLGVBQXlCcUIsSUFBekI7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0E7O0FBR0Q7Ozs7Ozt5Q0FHc0I7QUFBQTs7QUFDckIsUUFBSW9GLHdCQUFKO0FBQ0EsUUFBSUMsa0JBQUo7QUFDQSxRQUFJQyxrQkFBSjs7QUFFQSxRQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ3pHLENBQUQsRUFBTztBQUMxQixTQUFHQSxFQUFFMEcsT0FBRixLQUFjSCxTQUFkLElBQTJCdkcsRUFBRTJHLE9BQUYsS0FBY0gsU0FBNUMsRUFBdUQ7QUFDdERELGtCQUFZdkcsRUFBRTBHLE9BQWQ7QUFDQUYsa0JBQVl4RyxFQUFFMkcsT0FBZDtBQUNBLGFBQUt2SCxhQUFMLEdBQXFCLElBQXJCO0FBQ0E7QUFDRCxLQU5EOztBQVFBLFFBQU13SCxjQUFjLFNBQWRBLFdBQWMsQ0FBQzVHLENBQUQsRUFBTztBQUMxQixZQUFLWixhQUFMLEdBQXFCLElBQXJCOztBQUVBO0FBQ0F5SCxtQkFBY1AsZUFBZDs7QUFFQUEsdUJBQWtCUSxZQUFZLFlBQU07QUFDbkMsYUFBSzFILGFBQUwsR0FBcUIsSUFBckI7QUFDQSxNQUZpQixFQUVmLEdBRmUsQ0FBbEI7QUFHQSxLQVREOztBQVdBLFFBQU0ySCxZQUFZLFNBQVpBLFNBQVksQ0FBQy9HLENBQUQsRUFBTztBQUN4QixZQUFLWixhQUFMLEdBQXFCLElBQXJCO0FBQ0F5SCxtQkFBY1AsZUFBZDtBQUNBLEtBSEQ7O0FBS0EsU0FBS2xNLE9BQUwsQ0FBYW1GLEVBQWIsQ0FBZ0IsV0FBaEIsRUFBNkJrSCxXQUE3Qjs7QUFFQSxTQUFLck0sT0FBTCxDQUFhbUYsRUFBYixDQUFnQixXQUFoQixFQUE2QnFILFdBQTdCOztBQUVBLFNBQUt4TSxPQUFMLENBQWFtRixFQUFiLENBQWdCLFNBQWhCLEVBQTJCd0gsU0FBM0I7O0FBRUEsU0FBSzNNLE9BQUwsQ0FBYW1GLEVBQWIsQ0FBZ0IsU0FBaEIsRUFBMkIsVUFBQ1MsQ0FBRDtBQUFBLFlBQU8sT0FBS1osYUFBTCxHQUFxQixJQUE1QjtBQUFBLEtBQTNCO0FBQ0EsU0FBS2hGLE9BQUwsQ0FBYW1GLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsVUFBQ1MsQ0FBRDtBQUFBLFlBQU8sT0FBS1osYUFBTCxHQUFxQixJQUE1QjtBQUFBLEtBQXpCOztBQUVBO0FBQ0EsUUFBSTRILDBCQUFKO0FBQ0EsUUFBTUMsUUFBUSxLQUFLN0osT0FBTCxDQUFhM0Isa0JBQTNCO0FBQ0FxTCxnQkFBWSxZQUFNO0FBQ2pCLFNBQUksT0FBSzFILGFBQVQsRUFBd0I7O0FBRXZCO0FBQ0EsYUFBS0EsYUFBTCxHQUFxQixLQUFyQjs7QUFFQSxhQUFLOEgsVUFBTCxHQUFrQixJQUFsQjs7QUFFQUMsbUJBQWFILGlCQUFiOztBQUVBLFVBQUlDLFFBQVEsQ0FBWixFQUFlOztBQUVkRCwyQkFBb0JJLFdBQVcsWUFBTTtBQUNwQyxZQUFJLENBQUMsT0FBS2hJLGFBQVYsRUFBeUI7QUFDeEIsZ0JBQUs4SCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0E7QUFDRCxRQUptQixFQUlqQkQsS0FKaUIsQ0FBcEI7QUFLQTtBQUNEO0FBQ0QsS0FuQkQsRUFtQkcsR0FuQkg7QUFvQkE7O0FBRUQ7Ozs7Ozs7O2tDQUtlO0FBQ2QsU0FBSzNILGdCQUFMLENBQXNCM0UsT0FBdEIsQ0FBOEI7QUFBQSxZQUFRd00sYUFBYXJNLElBQWIsQ0FBUjtBQUFBLEtBQTlCO0FBQ0EsU0FBS3dFLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0EsU0FBS0ksV0FBTCxDQUFpQixtQkFBakI7QUFDQTs7QUFFRDs7Ozs7Ozs7bUNBS2dCO0FBQUE7O0FBQ2YsU0FBS0osZ0JBQUwsQ0FBc0IrSCxJQUF0QixDQUEyQkQsV0FBVyxZQUFNO0FBQzNDLFlBQUsvTSxRQUFMLENBQWMsbUJBQWQ7QUFDQSxLQUYwQixFQUV4QixHQUZ3QixDQUEzQjtBQUdBOztBQUdEOzs7Ozs7Ozs7NkJBTVUyRixDLEVBQUc7QUFDWixTQUFLM0YsUUFBTCxDQUFjLGtCQUFkOztBQUVBLFNBQUsrQyxPQUFMLENBQWFXLGNBQWIsQ0FBNEJ1SixJQUE1QixDQUFpQyxJQUFqQyxFQUF1Q3RILENBQXZDO0FBQ0E7O0FBR0Q7Ozs7Ozs7Ozs0QkFNU0EsQyxFQUFHO0FBQUE7O0FBQ1htSCxpQkFBYSxLQUFLdkksZ0JBQWxCO0FBQ0EsU0FBS0EsZ0JBQUwsR0FBd0J3SSxXQUFXLFlBQU07QUFDeEMsWUFBS25LLEtBQUwsQ0FBVzdDLE9BQVgsQ0FBbUJtTixLQUFuQjtBQUNBLFlBQUtySyxVQUFMO0FBQ0EsS0FIdUIsRUFHckIsR0FIcUIsQ0FBeEI7QUFJQTs7QUFFRDs7Ozs7Ozs7OzhCQU1XOEMsQyxFQUFHO0FBQ2JtSCxpQkFBYSxLQUFLdkksZ0JBQWxCO0FBQ0EsU0FBS2hCLGdCQUFMO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozt1Q0FNb0JvQyxDLEVBQUd3SCxJLEVBQU07QUFDNUIsUUFBR0EsSUFBSCxFQUFTO0FBQ1IsVUFBS2pHLElBQUwsR0FBWSxZQUFaO0FBQ0EsVUFBS2dHLEtBQUw7QUFDQSxLQUhELE1BR087QUFDTixVQUFLaEcsSUFBTCxHQUFZLFFBQVo7O0FBRUEsU0FBRyxtRUFBSCxFQUE2QztBQUM1QyxXQUFLbkIsS0FBTDtBQUNBO0FBQ0Q7QUFDRDs7QUFHRDs7Ozs7Ozs7OzZCQU1VO0FBQ1QsU0FBSy9DLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLE1BQXJCO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs4QkFNVztBQUNWLFNBQUtELFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLE9BQXJCO0FBQ0E7Ozs4Q0FFMEI7QUFDMUIsUUFBTTZFLCtCQUFOO0FBQ0EsUUFBTXFGLE9BQU8sQ0FBQyxDQUFDekcsU0FBU29CLE1BQU1zRixpQkFBZixDQUFmO0FBQ0EsU0FBS3hJLE9BQUwsQ0FBYSxrQkFBYixFQUFpQ3VJLElBQWpDO0FBQ0E7Ozt1QkFoNEJZO0FBQ1osV0FBTyxLQUFLbkcsT0FBWjtBQUNBOzs7dUJBaU9pQjtBQUNqQixXQUFPLEtBQUtwRSxLQUFMLENBQVdFLFdBQWxCO0FBQ0EsSTtxQkFFZXNILEssRUFBTztBQUN0QixTQUFLeEgsS0FBTCxDQUFXRSxXQUFYLEdBQXlCc0gsS0FBekI7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7dUJBUWU7QUFDZCxXQUFPLEtBQUt4SCxLQUFMLENBQVcyQyxRQUFsQjtBQUNBOztBQUVEOzs7Ozs7Ozs7O3VCQU9ZO0FBQ1gsV0FBTyxLQUFLM0MsS0FBTCxDQUFXeUssS0FBbEI7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7O3VCQVNZO0FBQ1gsV0FBTyxLQUFLQyxNQUFMLElBQWUsSUFBdEI7QUFDQSxJO3FCQUVTbEQsSyxFQUFPO0FBQ2hCLFFBQUlBLFVBQVUsSUFBZCxFQUFvQjtBQUNuQixVQUFLa0QsTUFBTCxHQUFjLElBQWQ7QUFDQSxVQUFLakksV0FBTCxDQUFpQixpQkFBakI7QUFDQSxTQUFHLEtBQUt1RCxZQUFSLEVBQXNCO0FBQ3JCLFdBQUtBLFlBQUwsQ0FBa0I3SSxPQUFsQixDQUEwQndOLElBQTFCO0FBQ0E7QUFDRCxZQUFPLElBQVA7QUFDQTtBQUNELFNBQUtELE1BQUwsR0FBYyx5QkFBZWxELEtBQWYsQ0FBZDs7QUFFQSxTQUFLcEssUUFBTCxDQUFjLGlCQUFkOztBQUVBOzs7Ozs7Ozs7QUFTQSxTQUFLNEUsT0FBTCxDQUFhLE9BQWIsRUFBc0IsRUFBRVksT0FBUSxLQUFLOEgsTUFBZixFQUF0Qjs7QUFFQSxXQUFPLElBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozt1QkFPYTtBQUNaLFdBQU8sS0FBS3ZOLE9BQUwsQ0FBYWUsTUFBYixFQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozt1QkFNa0I7QUFDakIsV0FBTyxLQUFLOEIsS0FBTCxDQUFXOUIsTUFBbEI7QUFDQTs7QUFHRDs7Ozs7Ozs7dUJBS2lCO0FBQ2hCLFdBQU8sS0FBSzBNLFdBQUwsSUFBb0IsS0FBM0I7QUFDQSxJO3FCQUVjcEQsSyxFQUFPO0FBQ3JCLFFBQUdBLFVBQVUsS0FBS3FELGFBQWxCLEVBQWlDO0FBQ2hDLFVBQUtELFdBQUwsR0FBbUJwRCxLQUFuQjtBQUNBLFVBQUtzRCxXQUFMLENBQWlCLHVCQUFqQixFQUEwQ3RELEtBQTFDO0FBQ0E7Ozs7O0FBS0EsVUFBS3hGLE9BQUwsQ0FBYSxZQUFiO0FBQ0E7QUFDRDs7QUFHRDs7Ozs7Ozs7Ozt1QkFPVztBQUNWLFdBQU8sS0FBS1QsS0FBWjtBQUNBLEk7cUJBRVErQyxJLEVBQU07QUFDZCxRQUFHLEtBQUtBLElBQUwsSUFBYSxJQUFoQixFQUFzQjtBQUNyQixVQUFLN0IsV0FBTCxnQkFBOEIsS0FBSzZCLElBQW5DO0FBQ0EsVUFBS3RDLE9BQUwsY0FBd0IsS0FBS3NDLElBQTdCO0FBQ0E7O0FBRUQsU0FBSy9DLEtBQUwsR0FBYStDLElBQWI7QUFDQSxTQUFLbkgsT0FBTCxDQUFhQyxRQUFiLGdCQUFtQ2tILElBQW5DO0FBQ0EsU0FBS3RDLE9BQUwsY0FBd0JzQyxJQUF4Qjs7QUFFQSxXQUFPLElBQVA7QUFDQTs7Ozs7O0FBdWhCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQXZELFFBQU9nSyxNQUFQLEdBQWdCLFVBQVM5RyxJQUFULEVBQWVuRSxFQUFmLEVBQW1CO0FBQ2xDaUIsU0FBT2lLLFNBQVAsQ0FBaUIvRyxJQUFqQixJQUF5Qm5FLEVBQXpCO0FBQ0EsRUFGRDs7QUFJQTs7Ozs7O0FBTUFpQixRQUFPb0QsWUFBUCxHQUFzQixvQkFBVUEsWUFBaEM7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0FwRCxRQUFPa0ssaUJBQVAsR0FBMkIsb0JBQVVBLGlCQUFyQzs7QUFFQTs7Ozs7Ozs7QUFRQWxLLFFBQU9tSyxVQUFQLEdBQW9CLGtCQUFRQSxVQUE1Qjs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQW5LLFFBQU83RCxlQUFQLEdBQXlCLGtCQUFRQSxlQUFqQzs7QUFHQTs7Ozs7Ozs7QUFRQTZELFFBQU9vSyxhQUFQOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBcEssUUFBTzRHLE1BQVAsR0FBZ0IsVUFBUzFELElBQVQsRUFBZWtELEdBQWYsRUFBb0I7QUFDbkMsTUFBRyxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBbEIsRUFBNEI7QUFDM0JwRyxVQUFPcUssUUFBUCxDQUFnQm5ILElBQWhCLElBQXdCLGlCQUFFNEQsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUNwQzFILGFBQVUsRUFEMEI7QUFFcENpSTtBQUZvQyxJQUFiLEVBR3JCakIsR0FIcUIsQ0FBeEI7QUFJQSxHQUxELE1BS08sSUFBSSxPQUFPQSxHQUFQLEtBQWUsVUFBbkIsRUFBK0I7QUFDckNwRyxVQUFPcUssUUFBUCxDQUFnQm5ILElBQWhCLElBQXdCa0QsS0FBeEI7QUFDQTtBQUNELEVBVEQ7O0FBWUFwRyxRQUFPNkcsU0FBUCxHQUFtQixVQUFTM0QsSUFBVCxFQUFlO0FBQ2pDLE1BQUdsRCxPQUFPcUssUUFBUCxDQUFnQm5ILElBQWhCLENBQUgsRUFBMEI7QUFDekIsVUFBT2xELE9BQU9xSyxRQUFQLENBQWdCbkgsSUFBaEIsQ0FBUDtBQUNBLEdBRkQsTUFFTztBQUNOd0MsV0FBUTdELEtBQVIsYUFBd0JxQixJQUF4QjtBQUNBLFVBQU8sSUFBUDtBQUNBO0FBQ0QsRUFQRDs7QUFVQWxELFFBQU9xSyxRQUFQLEdBQWtCLEVBQWxCOztBQUVBckssUUFBT3NLLE1BQVA7O0FBRUF0SyxRQUFPTSxjQUFQLEdBQXdCLFVBQVNpSyxHQUFULEVBQWM7QUFDckMsTUFBTUMsZ0JBQWdCLHNCQUFFLFFBQUYsRUFBWVosSUFBWixFQUF0QjtBQUNBLHdCQUFFLE1BQUYsRUFBVWEsT0FBVixDQUFrQkQsY0FBY3BGLE1BQWQsQ0FBcUJtRixHQUFyQixDQUFsQjtBQUNBLFNBQU9DLGFBQVA7QUFDQSxFQUpEOztBQU1BeEssUUFBT08sYUFBUCxHQUF1QixtQkFBQW1LLENBQVEsRUFBUixDQUF2Qjs7QUFFQTtBQUNBMUssUUFBTzJLLE9BQVAsR0FBaUIsU0FBakI7O0FBRUFDLFFBQU9DLENBQVAsQ0FBUzlMLEVBQVQsQ0FBWStMLFFBQVosR0FBdUIsVUFBVTFMLE9BQVYsRUFBbUI7QUFDekMsU0FBTyxLQUFLb0gsSUFBTCxDQUFVLFlBQVk7QUFDNUIsVUFBTyxJQUFJeEcsTUFBSixDQUFXLHNCQUFFLElBQUYsQ0FBWCxFQUFvQlosT0FBcEIsQ0FBUDtBQUNBLEdBRk0sQ0FBUDtBQUdBLEVBSkQ7O0FBTUF3TCxRQUFPQyxDQUFQLENBQVNDLFFBQVQsR0FBb0I5SyxNQUFwQjs7QUFFQTRLLFFBQU9FLFFBQVAsR0FBa0I5SyxNQUFsQjs7QUFHQTs7Ozs7QUFLQUEsUUFBT2dLLE1BQVAsQ0FBYyxZQUFkLEVBQTRCLFVBQVMzQixhQUFULEVBQXdCO0FBQUE7O0FBQ25ELE1BQU1ySixTQUFTLElBQWY7O0FBRUE7QUFDQTtBQUNBLE1BQU1JLFVBQVUsaUJBQUUwSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQzVCdEMsVUFBUSxNQURvQjtBQUU1QnVHLGVBQWEsb0JBQUMvTCxNQUFELEVBQVk7QUFDeEIsUUFBTWdNLFNBQVNoTSxPQUFPNUMsT0FBUCxDQUFlNE8sTUFBZixHQUF3QkMsR0FBeEIsR0FDWmpNLE9BQU81QyxPQUFQLENBQWU4TyxXQUFmLEVBRFksR0FFWmxNLE9BQU9tTSxXQUFQLENBQW1CLFFBQW5CLEVBQTZCL08sT0FBN0IsQ0FBcUNlLE1BQXJDLEVBRkg7O0FBSUEsV0FBTzZOLE1BQVA7QUFDQTtBQVIyQixHQUFiLEVBU2IsS0FBSzVMLE9BQUwsQ0FBYVUsVUFUQSxFQVNZdUksYUFUWixDQUFoQjs7QUFXQSxNQUFNbEssV0FBVyxnQ0FBc0IsSUFBdEIsRUFBNEI7QUFDNUMrRSxTQUFPLE1BRHFDO0FBRTVDL0UsYUFBV2lCLFFBQVFqQixRQUZ5QjtBQUc1Q2lOLG1CQUFpQjtBQUNoQkMsYUFBVTtBQUNUQyxjQUFVO0FBREQ7QUFETTtBQUgyQixHQUE1QixDQUFqQjs7QUFVQTtBQUNBLE9BQUsxRixXQUFMLENBQWlCUixNQUFqQixDQUF3QmpILFNBQVMvQixPQUFqQzs7QUFFQTs7Ozs7QUFLQSxNQUFNMk8sYUFBYSxTQUFiQSxVQUFhLEdBQU07QUFDeEIsT0FBSSxpQkFBRVEsVUFBRixDQUFhbk0sUUFBUTJMLFVBQXJCLENBQUosRUFBc0M7QUFDckMsV0FBTzNMLFFBQVEyTCxVQUFSLENBQW1CL0wsTUFBbkIsQ0FBUDtBQUNBOztBQUVELFVBQU9JLFFBQVEyTCxVQUFmO0FBQ0EsR0FORDs7QUFRQSxNQUFNUyxXQUFXLFNBQVhBLFFBQVcsR0FBTTtBQUN0QixVQUFPcE0sUUFBUW9GLEtBQVIsSUFBaUIsT0FBS3BJLE9BQUwsQ0FBYW9JLEtBQWIsRUFBeEI7QUFDQSxHQUZEOztBQUtBLE9BQUtpSCxpQkFBTCxHQUF5QixVQUFDekosQ0FBRCxFQUFJMEosS0FBSixFQUFjO0FBQ3RDLE9BQU1DLFlBQVksc0JBQUVmLE1BQUYsRUFBVWUsU0FBVixFQUFsQjs7QUFFQTtBQUNBO0FBQ0EsT0FBR0QsS0FBSCxFQUFVO0FBQ1QsV0FBS0UsY0FBTCxDQUFvQkYsS0FBcEI7QUFDQTs7QUFFRCxPQUFHQyxZQUFZWixZQUFmLEVBQTZCO0FBQzVCLFdBQUtjLGNBQUwsQ0FBb0JILEtBQXBCO0FBQ0EsSUFGRCxNQUVPO0FBQ04sV0FBS0UsY0FBTDtBQUNBO0FBQ0QsR0FkRDs7QUFnQkEsT0FBS0MsY0FBTCxHQUFzQixVQUFDSCxLQUFELEVBQVc7QUFDaEMsT0FBSSxDQUFDQSxLQUFELElBQVUsT0FBS25JLElBQUwsS0FBYyxNQUE1QixFQUFvQztBQUNuQztBQUNBOztBQUVEO0FBQ0EsVUFBS25ILE9BQUwsQ0FBYTRJLEdBQWIsQ0FBaUIsYUFBakIsRUFBZ0MsT0FBS08sY0FBTCxDQUFvQnBJLE1BQXBCLEVBQWhDOztBQUVBLFVBQUtvRyxJQUFMLEdBQVcsTUFBWDtBQUNBLEdBVEQ7O0FBV0EsT0FBS3FJLGNBQUwsR0FBc0IsVUFBQ0YsS0FBRCxFQUFXO0FBQ2hDLE9BQUcsQ0FBQ0EsS0FBRCxJQUFVLE9BQUtuSSxJQUFMLEtBQWMsTUFBM0IsRUFBbUM7QUFDbEM7QUFDQTtBQUNELFVBQUtBLElBQUwsR0FBWSxRQUFaO0FBQ0EsR0FMRDs7QUFPQSx3QkFBRXFILE1BQUYsRUFBVXJKLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLEtBQUtrSyxpQkFBTCxDQUF1QmhKLElBQXZCLENBQTRCLElBQTVCLENBQXZCO0FBQ0Esd0JBQUVtSSxNQUFGLEVBQVVySixFQUFWLENBQWEsUUFBYixFQUF1QixLQUFLa0ssaUJBQUwsQ0FBdUJoSixJQUF2QixDQUE0QixJQUE1QixDQUF2QjtBQUNBLE9BQUtsQixFQUFMLENBQVEsUUFBUixFQUFrQixVQUFDUyxDQUFEO0FBQUEsVUFBTyxPQUFLeUosaUJBQUwsQ0FBdUJ6SixDQUF2QixFQUEwQixJQUExQixDQUFQO0FBQUEsR0FBbEI7O0FBRUEsT0FBSzhKLFNBQUwsQ0FBZSxNQUFmLEVBQXVCLFlBQU07QUFDNUIsVUFBSzNMLFlBQUwsQ0FBa0I2RSxHQUFsQixDQUFzQixXQUF0QixFQUFtQ3dHLFVBQW5DO0FBQ0EsVUFBS3JMLFlBQUwsQ0FBa0I2RSxHQUFsQixDQUFzQixRQUF0QixFQUFnQyxPQUFLL0YsS0FBTCxDQUFXOUIsTUFBM0M7QUFDQSxHQUhEOztBQUtBLE9BQUs0TyxTQUFMLENBQWUsTUFBZixFQUF1QixZQUFNO0FBQzVCLFVBQUs1TCxZQUFMLENBQWtCNkUsR0FBbEIsQ0FBc0IsV0FBdEIsRUFBbUMsRUFBbkM7QUFDQSxVQUFLN0UsWUFBTCxDQUFrQjZFLEdBQWxCLENBQXNCLFFBQXRCLEVBQWdDLEVBQWhDOztBQUVBLFVBQUs1SSxPQUFMLENBQWE0SSxHQUFiLENBQWlCLGFBQWpCLEVBQWdDLEVBQWhDO0FBQ0EsR0FMRDs7QUFRQSxPQUFLeUcsaUJBQUw7QUFDQSxFQW5HRDs7QUFxR0F6TCxRQUFPNEcsTUFBUCxDQUFjLEtBQWQsRUFBcUIsbUJBQUE4RCxDQUFRLEVBQVIsRUFBNEI5RCxNQUFqRDtBQUNBNUcsUUFBTzRHLE1BQVAsQ0FBYyxRQUFkLEVBQXdCLG1CQUFBOEQsQ0FBUSxFQUFSLEVBQStCOUQsTUFBdkQ7QUFDQTVHLFFBQU80RyxNQUFQLENBQWMsS0FBZCxFQUFxQixtQkFBQThELENBQVEsRUFBUixFQUE0QjlELE1BQWpEO0FBQ0E1RyxRQUFPNEcsTUFBUCxDQUFjLFlBQWQsRUFBNEIsbUJBQUE4RCxDQUFRLEVBQVIsRUFBbUM5RCxNQUEvRDs7QUFFQW9GLFFBQU9DLE9BQVAsR0FBaUJqTSxNQUFqQixDOzs7Ozs7QUMxc0RBLG9COzs7Ozs7QUNBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztLQWNNa00sTzs7O0FBRUwsbUJBQVlsTixNQUFaLEVBQW9CSSxPQUFwQixFQUE2QjtBQUFBOztBQUFBLGlIQUN0QkosTUFEc0IsRUFDZEksT0FEYzs7QUFFNUIsU0FBS2tNLE9BQUwsR0FBZSxNQUFLbE0sT0FBTCxDQUFha00sT0FBYixJQUF3QixJQUF4QixHQUE4QixNQUFLbE0sT0FBTCxDQUFha00sT0FBM0MsR0FBcUQsSUFBcEU7O0FBRUEsU0FBS3RNLE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFVBQUNTLENBQUQsRUFBTztBQUMvQixVQUFLc0osT0FBTCxHQUFlLE1BQUtsTSxPQUFMLENBQWFrTSxPQUFiLElBQXdCLElBQXhCLEdBQThCLE1BQUtsTSxPQUFMLENBQWFrTSxPQUEzQyxHQUFxRCxLQUFwRTtBQUNBLElBRkQ7O0FBSUEsU0FBS2xQLE9BQUwsQ0FBYW1GLEVBQWIsQ0FBZ0I7QUFDZjRLLFdBQVEsTUFBS3pKLFFBQUwsQ0FBY0QsSUFBZCxPQURPO0FBRWYySiw0QkFBeUIsTUFBS0MsT0FBTCxDQUFhNUosSUFBYjtBQUZWLElBQWhCOztBQUtBLFNBQUt6RCxNQUFMLENBQVl1QyxFQUFaLENBQWUsUUFBZixFQUF5QixNQUFLeEIsY0FBTCxDQUFvQjBDLElBQXBCLE9BQXpCO0FBYjRCO0FBYzVCOztBQUVEOzs7Ozs7O21DQUdnQjtBQUNmLFFBQUksS0FBS3JELE9BQUwsQ0FBYWlHLFFBQWpCLEVBQTJCO0FBQzFCLFVBQUtpSCxJQUFMLEdBQVksbUJBQVMsS0FBS3ROLE1BQWQsRUFBc0I7QUFDakNxRyxnQkFBVyxLQUFLakcsT0FBTCxDQUFhaUc7QUFEUyxNQUF0QixDQUFaO0FBR0E7QUFDRCxRQUFJa0gsUUFBUTtBQUNYQyxXQUFPLFFBREk7QUFFWDFHLFlBQVEsS0FBSzFHLE9BQUwsQ0FBYTBHO0FBRlYsS0FBWjtBQUlBLFNBQUsxSixPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNiQyxRQURhLENBQ0osS0FBS29RLGFBQUwsRUFESSxFQUVickgsTUFGYSxDQUVOLEtBQUtrSCxJQUFMLElBQWEsS0FBS0EsSUFBTCxDQUFVbFEsT0FGakIsRUFHYjJJLElBSGEsQ0FHUndILEtBSFEsQ0FBZjs7QUFLQSxXQUFPLEtBQUtuUSxPQUFaO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZix3QkFBa0IsS0FBS2dELE9BQUwsQ0FBYWtHLFNBQS9CO0FBQ0E7Ozs0QkFXU3RELEMsRUFBRztBQUNaLFFBQUksS0FBS3NKLE9BQVQsRUFBa0I7QUFDakIsWUFBTyxLQUFQO0FBQ0E7QUFDRCxTQUFLbFAsT0FBTCxDQUFhNkUsT0FBYixDQUFxQix3QkFBckI7QUFDQSxTQUFLakMsTUFBTCxDQUFZaUMsT0FBWixDQUFvQixjQUFwQixFQUFvQyxFQUFFb0ssU0FBVSxJQUFaLEVBQXBDO0FBQ0E7O0FBRUQ7Ozs7Ozs7OzJCQUtTckosQyxFQUFHO0FBQ1hBLE1BQUUyRixjQUFGO0FBQ0EsUUFBSSxPQUFPLEtBQUt2SSxPQUFMLENBQWFpTixPQUFwQixLQUFnQyxVQUFwQyxFQUFnRDtBQUMvQyxVQUFLak4sT0FBTCxDQUFhaU4sT0FBYixDQUFxQi9DLElBQXJCLENBQTBCLElBQTFCLEVBQWdDb0QsU0FBaEM7QUFDQTtBQUNEOzs7a0NBR2UxSyxDLEVBQUdqQixJLEVBQU0sQ0FFeEI7OztxQkFoQ1cwRixLLEVBQU87QUFDbEIsU0FBS2tHLFFBQUwsR0FBZ0JsRyxLQUFoQjtBQUNBLFNBQUtySyxPQUFMLENBQWEyTixXQUFiLENBQXlCLFVBQXpCLEVBQXFDdEQsS0FBckM7QUFDQSxJO3VCQUVhO0FBQ2IsV0FBTyxLQUFLa0csUUFBWjtBQUNBOzs7bUNBMkJzQnpKLEksRUFBTW1JLE8sRUFBUztBQUNyQyxRQUFHbkksUUFBUSxJQUFYLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBRUQsUUFBR2dKLFFBQVFVLFNBQVIsSUFBcUIsSUFBeEIsRUFBOEI7QUFDN0JWLGFBQVFVLFNBQVIsR0FBb0IsRUFBcEI7QUFDQTs7QUFFRFYsWUFBUVUsU0FBUixDQUFrQjFKLElBQWxCLElBQTBCbUksT0FBMUI7O0FBRUEsV0FBT0EsT0FBUDtBQUNBOzs7OEJBRWlCbkksSSxFQUFNO0FBQ3ZCLFFBQUdBLFFBQVEsSUFBWCxFQUFpQjtBQUNoQjtBQUNBOztBQUVELFFBQUdnSixRQUFRVSxTQUFSLElBQXFCVixRQUFRVSxTQUFSLENBQWtCMUosSUFBbEIsQ0FBeEIsRUFBaUQ7QUFDaEQsWUFBT2dKLFFBQVFVLFNBQVIsQ0FBa0IxSixJQUFsQixDQUFQO0FBQ0E7QUFDRDs7OzBCQUVhbEUsTSxFQUFRa0UsSSxFQUFNOUQsTyxFQUFTO0FBQ3BDLFFBQUl5TixlQUFlLEtBQUsxQyxVQUFMLENBQWdCakgsSUFBaEIsQ0FBbkI7QUFDQSxRQUFHMkosZ0JBQWdCLElBQW5CLEVBQXlCO0FBQ3hCbkgsYUFBUTdELEtBQVIsY0FBeUJxQixJQUF6QjtBQUNBLFlBQU8sSUFBUDtBQUNBOztBQUVELFdBQU8sSUFBSTJKLFlBQUosQ0FBaUI3TixNQUFqQixFQUF5QkksT0FBekIsQ0FBUDtBQUNBOzs7Ozs7QUFJRixxQkFBVThLLGlCQUFWLENBQTRCLFNBQTVCLEVBQXVDZ0MsT0FBdkM7QUFDQUEsU0FBUS9QLGVBQVIsQ0FBd0IsU0FBeEIsRUFBbUMrUCxPQUFuQzttQkFDZUEsTzs7Ozs7O0FDN0lmO0FBQ0E7Ozs7Ozs7Ozs7QUFJQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztLQVVNWSxTO0FBRUwscUJBQVk5TixNQUFaLEVBQW9CSSxPQUFwQixFQUE2QjtBQUFBOztBQUM1QkEsYUFBVSxLQUFLQSxPQUFMLEdBQWUsaUJBQUUwSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3JDN0csbUJBQWdCO0FBRHFCLElBQWIsRUFFdEIsS0FBS2IsT0FGaUIsRUFFUkEsT0FGUSxDQUF6Qjs7QUFJQSxPQUFHLENBQUNKLE1BQUQsSUFBVyxLQUFLa0QsSUFBTCxJQUFhLElBQTNCLEVBQWlDO0FBQ2hDLFNBQUtsRCxNQUFMLEdBQWNBLFNBQVMsSUFBdkI7QUFDQSxJQUZELE1BRU87QUFDTixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQTs7QUFFRCxPQUFHSSxRQUFRYSxhQUFYLEVBQTBCOztBQUV6QixRQUFJYixRQUFRaEQsT0FBWixFQUFxQjtBQUNwQixVQUFLQSxPQUFMLEdBQWVnRCxRQUFRaEQsT0FBdkI7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLNkQsYUFBTDtBQUNBOztBQUVELFFBQUksS0FBSzdELE9BQUwsQ0FBYXFJLE1BQWIsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDOUJpQixhQUFRN0QsS0FBUiwyREFBc0UsS0FBS3pGLE9BQUwsQ0FBYXFJLE1BQW5GLFNBQStGLEtBQUtySSxPQUFwRztBQUNBOztBQUVELFNBQUtBLE9BQUwsQ0FBYSxDQUFiLEVBQWdCMlEsTUFBaEIsR0FBeUIsSUFBekI7QUFDQTtBQUNEOztBQUVEOzs7Ozs7O21DQUdnQjs7QUFFZixXQUFPLEVBQVA7QUFDQTs7QUFFRDs7Ozs7O21DQUdnQjtBQUNmLFdBQU8sRUFBUDtBQUNBOztBQUdEOzs7Ozs7MkJBR1E7QUFDUCxTQUFLM1EsT0FBTCxDQUFhbU4sS0FBYjtBQUNBOztBQUdEOzs7Ozs7MEJBR087QUFDTixTQUFLbk4sT0FBTCxDQUFhNFEsSUFBYjtBQUNBOztBQUdEOzs7Ozs7Ozs7OzsyQkFRUXhMLFMsRUFBb0I7QUFBQTs7QUFDM0IsUUFBTXlMLFFBQVEsaUJBQUVDLEtBQUYsZUFBb0IxTCxTQUFwQixFQUFpQyxFQUFFeEMsUUFBUyxLQUFLQSxNQUFoQixFQUFqQyxDQUFkOztBQUQyQixzQ0FBTndFLElBQU07QUFBTkEsU0FBTTtBQUFBOztBQUUzQixxQkFBS3BILE9BQUwsRUFBYStRLGNBQWIsa0JBQTRCRixLQUE1QixTQUFzQ3pKLElBQXRDO0FBQ0EsV0FBTyxJQUFQO0FBQ0E7O0FBR0Q7Ozs7Ozs7Ozs7O3NCQVFHaEMsUyxFQUFvQjtBQUFBOztBQUFBLHVDQUFOZ0MsSUFBTTtBQUFOQSxTQUFNO0FBQUE7O0FBQ3RCLHNCQUFLcEgsT0FBTCxFQUFhbUYsRUFBYixpQ0FBNEJDLFNBQTVCLFNBQTRDZ0MsSUFBNUM7QUFDQSxXQUFPLElBQVA7QUFDQTs7O3VCQUdHaEMsUyxFQUFvQjtBQUFBOztBQUFBLHVDQUFOZ0MsSUFBTTtBQUFOQSxTQUFNO0FBQUE7O0FBQ3ZCLHNCQUFLcEgsT0FBTCxFQUFhcUYsR0FBYixpQ0FBNkJELFNBQTdCLFNBQTZDZ0MsSUFBN0M7QUFDQTs7QUFHRDs7Ozs7Ozs7Ozs0QkFPUzhCLFMsRUFBVztBQUNuQixTQUFLbEosT0FBTCxDQUFhQyxRQUFiLENBQXNCaUosU0FBdEI7QUFDQSxXQUFPLElBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7OzsrQkFPWUEsUyxFQUFXO0FBQ3RCLFNBQUtsSixPQUFMLENBQWFzRixXQUFiLENBQXlCNEQsU0FBekI7QUFDQSxXQUFPLElBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7K0JBUVlBLFMsRUFBVzhILEksRUFBTTtBQUM1QixTQUFLaFIsT0FBTCxDQUFhMk4sV0FBYixDQUF5QnpFLFNBQXpCLEVBQW9DOEgsSUFBcEM7QUFDQSxXQUFPLElBQVA7QUFDQTs7OzRCQUVROUgsUyxFQUFXO0FBQ25CLFdBQU8sS0FBS2xKLE9BQUwsQ0FBYWlSLFFBQWIsQ0FBc0IvSCxTQUF0QixDQUFQO0FBQ0E7OztxQ0FHd0JwQyxJLEVBQU1vSyxTLEVBQVc7QUFDekMsUUFBR3BLLFFBQVEsSUFBWCxFQUFpQjtBQUNoQjtBQUNBOztBQUVELFFBQUc0SixVQUFVUyxXQUFWLElBQXlCLElBQTVCLEVBQWtDO0FBQ2pDVCxlQUFVUyxXQUFWLEdBQXdCLEVBQXhCO0FBQ0E7O0FBRURULGNBQVVTLFdBQVYsQ0FBc0JySyxJQUF0QixJQUE4Qm9LLFNBQTlCOztBQUVBLFdBQU9BLFNBQVA7QUFDQTs7O2dDQUVtQnBLLEksRUFBTTtBQUN6QixRQUFHQSxRQUFRLElBQVgsRUFBaUI7QUFDaEI7QUFDQTs7QUFFRCxRQUFHNEosVUFBVVMsV0FBVixJQUF5QlQsVUFBVVMsV0FBVixDQUFzQnJLLElBQXRCLENBQTVCLEVBQXlEO0FBQ3hELFlBQU80SixVQUFVUyxXQUFWLENBQXNCckssSUFBdEIsQ0FBUDtBQUNBO0FBRUQ7Ozs7OztBQUtGNEosV0FBVTVDLGlCQUFWLENBQTRCLFdBQTVCLEVBQXlDNEMsU0FBekM7bUJBQ2VBLFM7Ozs7OztBQ3ZMZjtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztLQU9NVSxJOzs7QUFFTCxnQkFBYXhPLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFMEgsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QnhCLGVBQVksRUFEVTtBQUV0QkQsY0FBVztBQUZXLElBQWIsRUFHUGpHLE9BSE8sQ0FBVjtBQURnQyxzR0FLMUJKLE1BTDBCLEVBS2xCSSxPQUxrQjtBQU9oQzs7QUFHRDs7Ozs7OzttQ0FHZ0I7QUFDZixTQUFLcU8sT0FBTCxHQUFlMUssU0FBUzJLLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXVELEtBQXZELENBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWU1SyxTQUFTMkssZUFBVCxDQUF5Qiw0QkFBekIsRUFBdUQsS0FBdkQsQ0FBZjs7QUFFQSxTQUFLckksUUFBTCxHQUFnQixLQUFLdUksU0FBTCxHQUFpQixLQUFLeE8sT0FBTCxDQUFhaUcsUUFBOUM7QUFDQSxTQUFLc0ksT0FBTCxDQUFhRSxXQUFiLENBQXlCLEtBQUtKLE9BQTlCO0FBQ0EsU0FBS3JSLE9BQUwsR0FBZSxzQkFBRSxTQUFGLEVBQ2JDLFFBRGEsQ0FDSixLQUFLb1EsYUFBTCxFQURJLEVBRWIxSCxJQUZhLENBRVIsT0FGUSxFQUVDLEtBQUszRixPQUFMLENBQWEwRyxLQUZkLEVBR2JWLE1BSGEsQ0FHTixzQkFBRSxLQUFLdUksT0FBUCxDQUhNLENBQWY7QUFJQSxXQUFPLEtBQUt2UixPQUFaO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZiwySUFBaUQsS0FBS2dELE9BQUwsQ0FBYWtHLFNBQTlEO0FBQ0E7O0FBRUQ7Ozs7Ozs7cUJBSWFELFEsRUFBVTtBQUFBOztBQUN0QixRQUFJeUksU0FBUyxDQUFDLDhCQUFELEVBQWlDLE1BQWpDLENBQWI7QUFDQSxvQkFBS0wsT0FBTCxFQUFhTSxpQkFBYixnQkFBa0NELE1BQWxDLFNBQTZDLEtBQUs5TyxNQUFMLENBQVlJLE9BQVosQ0FBb0I1QixPQUFqRSx1QkFBMEYsS0FBSzZILFFBQS9GO0FBQ0EscUJBQUtvSSxPQUFMLEVBQWFPLGNBQWIsaUJBQStCRixNQUEvQixTQUEwQyxLQUFLOU8sTUFBTCxDQUFZSSxPQUFaLENBQW9CNUIsT0FBOUQsdUJBQXVGNkgsUUFBdkY7QUFDQSxTQUFLdUksU0FBTCxHQUFpQnZJLFFBQWpCO0FBQ0E7O0FBRUQ7Ozs7O3VCQUlnQjtBQUNmLFdBQU8sS0FBS3VJLFNBQVo7QUFDQTs7Ozs7O0FBSUYscUJBQVUxRCxpQkFBVixDQUE0QixNQUE1QixFQUFvQ3NELElBQXBDO21CQUNlQSxJOzs7Ozs7QUN4RWY7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7O0tBR01TLFU7OztBQUVMLHNCQUFZalAsTUFBWixFQUFvQkksT0FBcEIsRUFBNkI7QUFBQTs7QUFBQSx1SEFDdEJKLE1BRHNCLEVBQ2RJLE9BRGM7O0FBRzVCLFNBQUtoRCxPQUFMLENBQWFtRixFQUFiLENBQWdCLFVBQWhCLEVBQTRCLE1BQUtvQixVQUFMLENBQWdCRixJQUFoQixPQUE1QjtBQUg0QjtBQUk1Qjs7OzttQ0FFZTtBQUNmLFFBQU15TCxRQUFRLHFCQUFTLEtBQVQsRUFBZ0I7QUFDN0I1SSxnQkFBWTtBQURpQixLQUFoQixFQUdiRixNQUhhLENBR04sbUJBQVMsS0FBS3BHLE1BQWQsRUFBc0IsRUFBRXFHLFVBQVcsTUFBYixFQUF0QixFQUE2Q2pKLE9BSHZDLENBQWQ7O0FBS0EsU0FBS0EsT0FBTCxHQUFlLHFCQUFTLEtBQVQsRUFBZ0I7QUFDOUJrSixnQkFBWSxLQUFLbUg7QUFEYSxLQUFoQixFQUdkckgsTUFIYyxDQUdQOEksS0FITyxDQUFmOztBQUtBLFdBQU8sS0FBSzlSLE9BQVo7QUFDQTs7OzJCQUVPNEYsQyxFQUFHO0FBQ1Ysb0hBQWNBLENBQWQ7QUFDQSxTQUFLaEQsTUFBTCxDQUFZaUMsT0FBWixDQUFvQixPQUFwQjtBQUNBOzs7Z0NBRVk7QUFDWixTQUFLakMsTUFBTCxDQUFZaUMsT0FBWixDQUFvQixVQUFwQjtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQTs7Ozs7O0FBSUYscUJBQVVpSixpQkFBVixDQUE0QixZQUE1QixFQUEwQytELFVBQTFDO0FBQ0EsbUJBQVE5UixlQUFSLENBQXdCLGFBQXhCLEVBQXVDOFIsVUFBdkM7bUJBQ2VBLFU7Ozs7OztBQ3ZEZjtBQUNBOzs7Ozs7Ozs7O1NBZWdCN0QsYSxHQUFBQSxhO1NBMkJBK0QsVSxHQUFBQSxVO1NBT0FDLFEsR0FBQUEsUTtTQVNBQyxJLEdBQUFBLEk7O0FBckRoQjs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUU8sVUFBU2pFLGFBQVQsQ0FBd0JrRSxPQUF4QixFQUFpQ0MsU0FBakMsRUFBNEM7QUFDbEQsTUFBSUMsSUFBSUMsS0FBS0MsS0FBTCxDQUFXSixVQUFVLElBQXJCLENBQVI7QUFDQSxNQUFJSyxJQUFJRixLQUFLQyxLQUFMLENBQVdKLFVBQVUsSUFBVixHQUFpQixFQUE1QixDQUFSO0FBQ0EsTUFBSU0sSUFBSUgsS0FBS0MsS0FBTCxDQUFXSixVQUFVLElBQVYsR0FBaUIsRUFBNUIsQ0FBUjtBQUNBLE1BQUlPLE1BQU0sRUFBVjtBQUNBLE1BQUlGLElBQUksRUFBUixFQUFZO0FBQ1hBLE9BQUksTUFBTUEsQ0FBVjtBQUNBO0FBQ0QsTUFBSUMsSUFBSSxFQUFSLEVBQVk7QUFDWEEsT0FBSSxNQUFNQSxDQUFWO0FBQ0E7QUFDREMsUUFBU0YsQ0FBVCxTQUFjQyxDQUFkOztBQUVBLE1BQUdKLElBQUksQ0FBSixJQUFTRCxTQUFaLEVBQXVCO0FBQ3RCTSxTQUFTTCxDQUFILFNBQVVLLEdBQWhCO0FBQ0E7QUFDRCxTQUFPQSxHQUFQO0FBQ0E7O0FBR0Q7Ozs7Ozs7QUFPTyxVQUFTVixVQUFULENBQXFCMUosTUFBckIsRUFBNkJLLEdBQTdCLEVBQWtDO0FBQ3hDO0FBQ0EsTUFBTWdLLFVBQVdySyxTQUFTSyxHQUFWLElBQWtCLENBQWxDO0FBQ0EsU0FBUWdLLFdBQVcsQ0FBWixHQUFpQixDQUFqQixHQUFxQkEsT0FBNUI7QUFDQTs7QUFHTSxVQUFTVixRQUFULEdBQW9DO0FBQUEsTUFBbEJXLEdBQWtCLHVFQUFkLEtBQWM7QUFBQSxNQUFQQyxLQUFPOztBQUMxQyxNQUFHQSxTQUFTQSxNQUFNMUosU0FBbEIsRUFBNkI7QUFDNUIwSixTQUFNLE9BQU4sSUFBaUJBLE1BQU0xSixTQUF2QjtBQUNBLFVBQU8wSixNQUFNMUosU0FBYjtBQUNBO0FBQ0QsU0FBTyw0QkFBTXlKLEdBQU4sU0FBZUMsS0FBZixDQUFQO0FBQ0E7O0FBR00sVUFBU1gsSUFBVCxHQUFnQixDQUFFOztBQUVsQixLQUFNWSxnREFBcUIsWUFBVztBQUM1QyxNQUFJeFMsZUFBSjs7QUFFQSxTQUFPLFlBQVc7O0FBRWpCLE9BQUdBLFVBQVUsSUFBYixFQUFtQjtBQUNsQixXQUFPQSxNQUFQO0FBQ0E7O0FBRUQsT0FBTXlTLFFBQVEsc0JBQUUsU0FBRixFQUFhbEssR0FBYixDQUFpQjtBQUM5Qm1LLGdCQUFhLFFBRGlCO0FBRTlCM0ssV0FBUSxHQUZzQjtBQUc5QjRLLGNBQVc7QUFIbUIsSUFBakIsRUFJWEMsUUFKVyxDQUlGLE1BSkUsQ0FBZDs7QUFNQSxPQUFNQyxrQkFBa0Isc0JBQUUsU0FBRixFQUFhdEssR0FBYixDQUFpQjtBQUN4Q1IsV0FBUTtBQURnQyxJQUFqQixFQUVyQjZLLFFBRnFCLENBRVpILEtBRlksRUFFTEssVUFGSyxFQUF4Qjs7QUFJQUwsU0FBTU0sTUFBTjtBQUNBLFVBQU8vUyxTQUFTLE1BQU02UyxlQUF0QjtBQUNBLEdBbEJEO0FBb0JBLEVBdkJpQyxFQUEzQixDOzs7Ozs7QUM3RFA7QUFDQTs7Ozs7Ozs7OztBQUtBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztLQU1NRyxVOzs7Ozs7Ozs7Ozt3QkFFQXZNLEksRUFBTTtBQUFBOztBQUNWLFNBQUtvSixJQUFMLENBQVVqSCxRQUFWLEdBQXFCbkMsSUFBckI7QUFDQSxTQUFLOUcsT0FBTCxDQUFhQyxRQUFiLENBQXNCLDZCQUF0QjtBQUNBK00sZUFBVztBQUFBLFlBQU0sT0FBS2hOLE9BQUwsQ0FBYXNGLFdBQWIsQ0FBeUIsNkJBQXpCLENBQU47QUFBQSxLQUFYLEVBQTBFLEdBQTFFO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZixTQUFLNEssSUFBTCxHQUFZLG1CQUFTLEtBQUt0TixNQUFkLENBQVo7QUFDQSxXQUFPLEtBQUs1QyxPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNwQkMsUUFEb0IsQ0FDWCxxQkFEVyxFQUVwQitJLE1BRm9CLENBRWIsS0FBS2tILElBQUwsQ0FBVWxRLE9BRkcsQ0FBdEI7QUFHQTs7Ozs7O21CQUlhcVQsVTs7Ozs7O0FDcENmO0FBQ0E7Ozs7Ozs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7Ozs7S0FNTUMsSTs7O0FBRUwsZ0JBQWExUSxNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRTBILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEIvSCxRQUFLLFlBQUNDLE1BQUQsRUFBWTtBQUNoQixTQUFNQyxRQUFRRCxPQUFPQyxLQUFyQjtBQUNBLFlBQU8sMEJBQWNBLE1BQU1FLFdBQXBCLENBQVA7QUFDQTtBQUpxQixJQUFiLEVBS1BDLE9BTE8sQ0FBVjs7QUFEZ0MsMkdBUTFCSixNQVIwQixFQVFsQkksT0FSa0I7O0FBVWhDLFNBQUtKLE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxZQUFmLEVBQTZCLE1BQUtvTyxVQUFMLENBQWdCbE4sSUFBaEIsT0FBN0I7QUFDQSxTQUFLekQsTUFBTCxDQUFZdUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsTUFBS29PLFVBQUwsQ0FBZ0JsTixJQUFoQixPQUF6QjtBQVhnQztBQVloQzs7Ozs4QkFFVVQsQyxFQUFHakIsSSxFQUFNO0FBQ25CLFNBQUszRSxPQUFMLENBQWF3VCxJQUFiLENBQWtCLEtBQUt4USxPQUFMLENBQWFMLEVBQWIsQ0FBZ0IsS0FBS0MsTUFBckIsQ0FBbEI7QUFDQTs7O21DQUVlO0FBQ2YsU0FBSzVDLE9BQUwsR0FBZSxxQkFBUyxLQUFULEVBQWdCLEVBQUVrSixXQUFZLGVBQWQsRUFBaEIsQ0FBZjtBQUNBLFdBQU8sS0FBS2xKLE9BQVo7QUFDQTs7Ozs7O0FBSUYscUJBQVU4TixpQkFBVixDQUE0QixNQUE1QixFQUFvQ3dGLElBQXBDO21CQUNlQSxJOzs7Ozs7QUMzQ2Y7QUFDQTs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7O0tBU01HLGlCOzs7QUFDTCw2QkFBYTdRLE1BQWIsRUFBcUJJLE9BQXJCLEVBQThCO0FBQUE7O0FBQzdCLE9BQU04RCxPQUFPOUQsUUFBUThELElBQXJCOztBQUVBLE9BQUk0TSxnQkFBZ0I7QUFDbkIzUixjQUFXYSxPQUFPSSxPQUFQLENBQWVqQixRQUFmLENBQXdCK0UsSUFBeEI7QUFEUSxJQUFwQjs7QUFJQSxPQUFHbEUsT0FBT0ksT0FBUCxDQUFlYixlQUFmLENBQStCMkUsSUFBL0IsQ0FBSCxFQUF5QztBQUN4QzRNLGtCQUFjLE9BQWQsSUFBeUI5USxPQUFPSSxPQUFQLENBQWViLGVBQWYsQ0FBK0IyRSxJQUEvQixFQUFxQzFFLEtBQTlEO0FBQ0FzUixrQkFBYyxpQkFBZCxJQUFtQzlRLE9BQU9JLE9BQVAsQ0FBZWIsZUFBZixDQUErQjJFLElBQS9CLEVBQXFDL0UsUUFBeEU7QUFDQTs7QUFFRGlCLGFBQVUsaUJBQUUwSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCM0ksY0FBVyxFQURXO0FBRXRCSSxxQkFBa0IsRUFGSTtBQUd0QkMsV0FBUTtBQUhjLElBQWIsRUFJUHNSLGFBSk8sRUFJUTFRLE9BSlIsQ0FBVjs7QUFaNkIscUlBa0J2QkosTUFsQnVCLEVBa0JmSSxPQWxCZTs7QUFvQjdCLFNBQUtrSSxNQUFMLEdBQWNsSSxRQUFRa0ksTUFBUixJQUFrQixLQUFoQztBQUNBLFNBQUtwRSxJQUFMLEdBQVk5RCxRQUFROEQsSUFBcEI7O0FBRUEsU0FBS2xFLE1BQUwsQ0FBWWIsUUFBWixDQUFxQixNQUFLK0UsSUFBMUI7QUF2QjZCO0FBd0I3Qjs7OztzQ0FHa0JBLEksRUFBTTtBQUFBLFFBQ2hCM0UsZUFEZ0IsR0FDSSxLQUFLYSxPQURULENBQ2hCYixlQURnQjs7QUFFeEIsUUFBSTlCLFNBQVM4QixnQkFBZ0I4TSxPQUFoQixJQUEyQixFQUF4Qzs7QUFFQSxRQUFHOU0sZ0JBQWdCMkUsSUFBaEIsQ0FBSCxFQUEwQjtBQUN6QnpHLGNBQVMsaUJBQUVxSyxNQUFGLENBQVMsSUFBVCxFQUFlLEVBQWYsRUFBbUJySyxNQUFuQixFQUEyQjhCLGdCQUFnQjJFLElBQWhCLENBQTNCLENBQVQ7QUFDQTs7QUFFRCxXQUFPekcsTUFBUDtBQUNBOzs7OEJBRVVzVCxRLEVBQVU3TSxJLEVBQU05RCxPLEVBQVM7QUFDbkMsUUFBTWlNLFVBQVUsa0JBQVEyRSxNQUFSLENBQWUsS0FBS2hSLE1BQXBCLEVBQTRCa0UsSUFBNUI7QUFDZitNLGlCQUFhLEtBQUs3USxPQUFMLENBQWE4RDtBQURYLE9BRVo5RCxPQUZZLEVBQWhCOztBQUtBLFFBQUdpTSxXQUFXLElBQWQsRUFBb0I7QUFDbkI7QUFDQTs7QUFFRCxXQUFNMEUsV0FBVyxLQUFLRyxLQUFMLENBQVd6TCxNQUE1QixFQUFvQztBQUNuQyxVQUFLMEwsTUFBTDtBQUNBOztBQUVELFFBQU1DLFVBQVUsS0FBS0YsS0FBTCxDQUFXSCxRQUFYLENBQWhCO0FBQ0FLLFlBQVFoTCxNQUFSLENBQWVpRyxRQUFRalAsT0FBdkI7O0FBRUEsUUFBSSxLQUFLK0IsUUFBTCxJQUFpQixJQUFyQixFQUEyQjtBQUMxQixVQUFLQSxRQUFMLEdBQWdCLEVBQWhCO0FBQ0E7QUFDRCxRQUFJLEtBQUtBLFFBQUwsQ0FBYzRSLFFBQWQsS0FBMkIsSUFBL0IsRUFBcUM7QUFDcEMsVUFBSzVSLFFBQUwsQ0FBYzRSLFFBQWQsSUFBMEIsRUFBMUI7QUFDQTs7QUFFRCxTQUFLNVIsUUFBTCxDQUFjNFIsUUFBZCxFQUF3QjdNLElBQXhCLElBQWdDbUksT0FBaEM7QUFDQTs7OzhCQUVVZ0YsSyxFQUFPQyxNLEVBQVE7QUFDekIsUUFBR0EsVUFBVSxJQUFiLEVBQW1CO0FBQ2xCLFNBQU1wTixPQUFPbU4sS0FBYjtBQUNBLFVBQUksSUFBSTFMLElBQUksQ0FBWixFQUFlQSxJQUFJLEtBQUt4RyxRQUFMLENBQWNzRyxNQUFqQyxFQUF5Q0UsR0FBekMsRUFBOEM7QUFDN0MsVUFBRyxLQUFLeEcsUUFBTCxDQUFjd0csQ0FBZCxFQUFpQnpCLElBQWpCLEtBQTBCLElBQTdCLEVBQW1DO0FBQ2xDLGNBQU8sS0FBSy9FLFFBQUwsQ0FBY3dHLENBQWQsRUFBaUJ6QixJQUFqQixDQUFQO0FBQ0E7QUFDRDtBQUNELEtBUEQsTUFPTztBQUNOLFNBQU1BLFFBQU9tTixLQUFiO0FBQ0EsU0FBTU4sV0FBV08sTUFBakI7QUFDQSxZQUFPLEtBQUtuUyxRQUFMLENBQWM0UixRQUFkLEVBQXdCN00sS0FBeEIsQ0FBUDtBQUNBOztBQUVELFdBQU8sSUFBUDtBQUNBOzs7NEJBRVE7QUFDUixRQUFNa04sVUFBVSxxQkFBUyxLQUFULEVBQWdCO0FBQy9COUssZ0RBQTBDLEtBQUtsRyxPQUFMLENBQWE4RDtBQUR4QixLQUFoQixDQUFoQjs7QUFJQSxRQUFJLEtBQUtnTixLQUFMLElBQWMsSUFBbEIsRUFBd0I7QUFDdkIsVUFBS0EsS0FBTCxHQUFhLEVBQWI7QUFDQTtBQUNELFNBQUtBLEtBQUwsQ0FBVzdHLElBQVgsQ0FBZ0IrRyxPQUFoQjtBQUNBLFNBQUtoVSxPQUFMLENBQWFnSixNQUFiLENBQW9CZ0wsT0FBcEI7O0FBRUEsV0FBT0EsT0FBUDtBQUNBOzs7MEJBRU1MLFEsRUFBVTtBQUNoQixXQUFPLEtBQUtHLEtBQUwsQ0FBV0gsWUFBWSxDQUF2QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFBQTs7QUFBQSxtQkFDbUIsS0FBSzNRLE9BRHhCO0FBQUEsUUFDUDhELElBRE8sWUFDUEEsSUFETztBQUFBLFFBQ0QvRSxRQURDLFlBQ0RBLFFBREM7QUFBQSxRQUNTSyxLQURULFlBQ1NBLEtBRFQ7O0FBRWYsUUFBSStSLGNBQWMsSUFBbEI7O0FBRUEsU0FBS25VLE9BQUwsR0FBZSxxQkFBUyxLQUFULEVBQWdCO0FBQzlCa0osOEVBQXdFcEM7QUFEMUMsS0FBaEIsQ0FBZjs7QUFJQSxRQUFHLE9BQU8xRSxLQUFQLEtBQWlCLFFBQXBCLEVBQThCO0FBQzdCK1IsbUJBQWMvUixLQUFkO0FBQ0E7O0FBRURMLGFBQVN4QixPQUFULENBQWlCLFVBQUN5SyxHQUFELEVBQU0ySSxRQUFOLEVBQW1CO0FBQ25DLFNBQU1LLFVBQVUsT0FBS0QsTUFBTCxFQUFoQjtBQUNBLFNBQUlLLFdBQVdELFdBQWY7O0FBRUEsU0FBR3hKLE1BQU1DLE9BQU4sQ0FBY3hJLEtBQWQsS0FBd0JBLE1BQU11UixRQUFOLENBQTNCLEVBQTRDO0FBQzNDUyxpQkFBV2hTLE1BQU11UixRQUFOLENBQVg7QUFDQTs7QUFFRDNJLFNBQUl6SyxPQUFKLENBQVksdUJBQWU7O0FBRTFCLFVBQUc4VCxnQkFBZ0IsVUFBaEIsSUFBOEJELGFBQWEsU0FBOUMsRUFBeUQ7QUFDeEQ5SyxlQUFRQyxJQUFSLENBQWEsbUVBQWI7QUFDQTs7QUFFRCxhQUFLK0ssVUFBTCxDQUFnQlgsUUFBaEIsRUFBMEJVLFdBQTFCLEVBQXVDLE9BQUtFLGtCQUFMLENBQXdCek4sSUFBeEIsQ0FBdkM7QUFDQSxNQVBEOztBQVNBa04sYUFBUS9ULFFBQVIseUJBQXVDbVUsUUFBdkMsRUFDRXpMLElBREYsQ0FDTyxVQURQLEVBQ21CLENBRG5COztBQUdBcUwsYUFBUTdKLElBQVIsQ0FBYSxxQkFBYixFQUFvQ2lKLE1BQXBDO0FBQ0EsS0FyQkQ7O0FBdUJBLFdBQU8sS0FBS3BULE9BQVo7QUFDQTs7OzBCQUVPO0FBQ1AsU0FBS0EsT0FBTCxDQUFhd04sSUFBYjtBQUNBLFNBQUt4TixPQUFMLENBQWFtSyxJQUFiLENBQWtCLG9CQUFsQixFQUF3Q3FELElBQXhDO0FBQ0E7OzswQkFFTztBQUNQLFNBQUt4TixPQUFMLENBQWFrRCxJQUFiO0FBQ0EsU0FBS2xELE9BQUwsQ0FBYW1LLElBQWIsQ0FBa0Isb0JBQWxCLEVBQXdDakgsSUFBeEM7QUFDQTs7Ozs7O0FBR0YscUJBQVU0SyxpQkFBVixDQUE0QixtQkFBNUIsRUFBaUQyRixpQkFBakQ7bUJBQ2VBLGlCOzs7Ozs7QUMvS2Y7QUFDQTs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztBQUNBOzs7Ozs7OztLQVFNZSxROzs7QUFDTCxvQkFBWTVSLE1BQVosRUFBb0JJLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQUEsd0JBQ1BBLE9BRE8sQ0FDdEI2SSxLQURzQjtBQUFBLE9BQ3RCQSxLQURzQixrQ0FDZCxFQURjOztBQUU1QkEsV0FBUSxHQUFHdkwsTUFBSCxDQUFVdUwsS0FBVixDQUFSOztBQUVBOztBQUo0QixtSEFNdEJqSixNQU5zQixFQU1kSSxPQU5jOztBQVE1QixTQUFLeVIsYUFBTCxHQUFxQixNQUFLQyxhQUExQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsTUFBS0MsaUJBQUwsQ0FBdUIsQ0FBdkIsQ0FBckI7O0FBRUEsU0FBSy9JLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUt4RCxNQUFMLEdBQWMsTUFBS3dELEtBQUwsQ0FBV3hELE1BQXpCOztBQUVBLFNBQUt3TSxnQkFBTCxDQUFzQixDQUF0Qjs7QUFFQSxTQUFLN1UsT0FBTCxDQUNFbUssSUFERixDQUNPLG1CQURQLEVBRUVoRixFQUZGLENBRUssT0FGTCxFQUVjLE1BQUsyUCxjQUFMLENBQW9Cek8sSUFBcEIsT0FGZDs7QUFJQSxTQUFLekQsTUFBTCxDQUFZdUMsRUFBWixDQUFlLGdCQUFmLEVBQWlDLE1BQUs0UCxpQkFBTCxDQUF1QjFPLElBQXZCLE9BQWpDOztBQUVBLFNBQUt6RCxNQUFMLENBQVl1QyxFQUFaLENBQWUsWUFBZixFQUE2QixNQUFLNlAsWUFBTCxDQUFrQjNPLElBQWxCLE9BQTdCOztBQUVBLFNBQUt6RCxNQUFMLENBQVl1QyxFQUFaLENBQWUsUUFBZixFQUF5QixNQUFLOFAscUJBQUwsQ0FBMkI1TyxJQUEzQixPQUF6Qjs7QUFFQSxTQUFLekQsTUFBTCxDQUFZdUMsRUFBWixDQUFlLGdCQUFmLEVBQWlDLE1BQUs4UCxxQkFBTCxDQUEyQjVPLElBQTNCLE9BQWpDOztBQUVBLFNBQUt6RCxNQUFMLENBQVl1QyxFQUFaLENBQWUsT0FBZixFQUF3QjtBQUFBLFdBQU0sTUFBS3ZDLE1BQUwsQ0FBWXVLLEtBQVosRUFBTjtBQUFBLElBQXhCOztBQUVBO0FBQ0E7Ozs7MEJBRU07QUFDTixRQUFNK0gsZUFBZUMsU0FBUyxLQUFLUixhQUFMLENBQW1CaE0sSUFBbkIsQ0FBd0IsWUFBeEIsQ0FBVCxDQUFyQjtBQUNBLFFBQU15TSxXQUFXRixnQkFBZ0IsS0FBSzdNLE1BQXJCLEdBQThCLEtBQUtBLE1BQW5DLEdBQTRDNk0sZUFBZSxDQUE1RTs7QUFFQSxTQUFLTCxnQkFBTCxDQUFzQk8sUUFBdEI7O0FBRUEsU0FBS3hTLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkUsV0FBbEIsR0FBZ0MsS0FBSzhJLEtBQUwsQ0FBV3FKLFlBQVgsRUFBeUJ4TSxHQUF6RDtBQUNBOzs7MEJBRU07QUFDTixRQUFNd00sZUFBZUMsU0FBUyxLQUFLUixhQUFMLENBQW1CaE0sSUFBbkIsQ0FBd0IsWUFBeEIsQ0FBVCxDQUFyQjtBQUNBLFFBQU15TSxXQUFXRixnQkFBZ0IsQ0FBaEIsR0FBb0IsQ0FBcEIsR0FBd0JBLGVBQWUsQ0FBeEQ7O0FBRUEsU0FBS0wsZ0JBQUwsQ0FBc0JPLFFBQXRCO0FBQ0EsU0FBS3hTLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkUsV0FBbEIsR0FBZ0MsS0FBSzhJLEtBQUwsQ0FBV3VKLFFBQVgsRUFBcUIzTSxLQUFyRDtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQUEsbUJBQ3dCLEtBQUt6RixPQUQ3QjtBQUFBLFFBQ1A4SSxjQURPLFlBQ1BBLGNBRE87QUFBQSxRQUNTQyxVQURULFlBQ1NBLFVBRFQ7OztBQUlmLFNBQUsvTCxPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNiQyxRQURhLENBQ0osbUJBREksRUFFYjBJLElBRmEsQ0FFUixVQUZRLEVBRUksR0FGSixDQUFmOztBQUlBLFNBQUsrTCxhQUFMLEdBQXFCLHNCQUFFLFNBQUYsRUFBYXpVLFFBQWIsQ0FBc0IsMEJBQXRCLENBQXJCOztBQUVBLFFBQUc2TCxjQUFILEVBQW1CO0FBQ2xCLFVBQUs5TCxPQUFMLENBQWFDLFFBQWIsQ0FBc0IsMkJBQXRCO0FBQ0E7O0FBRUQsUUFBRzhMLFVBQUgsRUFBZTtBQUNkLFVBQUsvTCxPQUFMLENBQWFDLFFBQWIsQ0FBc0IsZ0NBQXRCO0FBQ0EsVUFBS3lVLGFBQUwsQ0FBbUI5TCxHQUFuQixDQUF1QjtBQUN0QnlNLGFBQVEsQ0FBQyxDQUFELEdBQUs7QUFEUyxNQUF2QjtBQUdBOztBQUVELFNBQUtyVixPQUFMLENBQWFnSixNQUFiLENBQ0MsS0FBSzBMLGFBQUwsQ0FBbUIxTCxNQUFuQixDQUEwQixLQUFLc00sZUFBTCxDQUFxQixLQUFLdFMsT0FBTCxDQUFhNkksS0FBbEMsQ0FBMUIsQ0FERDs7QUFLQSxXQUFPLEtBQUs3TCxPQUFaO0FBQ0E7O0FBRUQ7Ozs7OzsyQ0FHd0I7QUFDdkIsUUFBRyxLQUFLNkwsS0FBTCxJQUFjLElBQWQsSUFBc0IsS0FBS0EsS0FBTCxDQUFXeEQsTUFBWCxHQUFvQixDQUE3QyxFQUFnRDtBQUMvQyxTQUFNQSxTQUFTLEtBQUt3RCxLQUFMLENBQVd4RCxNQUExQjtBQUNBLFVBQUt3RCxLQUFMLENBQVd4RCxTQUFTLENBQXBCLEVBQXVCSyxHQUF2QixHQUE2QixLQUFLOUYsTUFBTCxDQUFZQyxLQUFaLENBQWtCMkMsUUFBL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0Q7OztrQ0FHY0ksQyxFQUFHO0FBQ2pCLFFBQU0vQyxRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQSxRQUFNMFMsVUFBVSxzQkFBRTNQLEVBQUU0UCxNQUFKLEVBQVlDLE9BQVosQ0FBb0IsbUJBQXBCLENBQWhCO0FBQ0E1UyxVQUFNRSxXQUFOLEdBQW9Cd1MsUUFBUTVNLElBQVIsQ0FBYSxZQUFiLENBQXBCO0FBQ0EsU0FBSy9GLE1BQUwsQ0FBWWlDLE9BQVosQ0FBb0IsZUFBcEIsRUFBcUMsRUFBRTBRLFNBQVUsS0FBSzFKLEtBQUwsQ0FBVzBKLFFBQVE1TSxJQUFSLENBQWEsWUFBYixDQUFYLENBQVosRUFBckM7QUFDQTs7O29DQUVnQm5JLEssRUFBTztBQUN2QixRQUNDLEtBQUttVSxhQUFMLENBQW1CdE0sTUFBbkIsS0FBOEIsQ0FBOUIsSUFDQThNLFNBQVMsS0FBS1IsYUFBTCxDQUFtQmhNLElBQW5CLENBQXdCLFlBQXhCLENBQVQsTUFBb0RuSSxLQURwRCxJQUVBLEtBQUtvVSxpQkFBTCxDQUF1QnBVLEtBQXZCLEVBQThCNkgsTUFBOUIsS0FBeUMsQ0FIMUMsRUFJRTtBQUNELFlBQU8sSUFBUDtBQUNBOztBQUVELFNBQUtzTSxhQUFMLENBQW1CclAsV0FBbkIsQ0FBK0IsMEJBQS9CO0FBQ0EsU0FBS3FQLGFBQUwsR0FBcUIsS0FBS0MsaUJBQUwsQ0FBdUJwVSxLQUF2QixDQUFyQjtBQUNBLFNBQUttVSxhQUFMLENBQW1CMVUsUUFBbkIsQ0FBNEIsMEJBQTVCOztBQUVBLFFBQU15VixjQUFjLEtBQUtmLGFBQUwsQ0FBbUJnQixRQUFuQixHQUE4QjlHLEdBQWxEOztBQUVBLFNBQUs0RixhQUFMLENBQ0VtQixPQURGLENBQ1U7QUFDUnJHLGdCQUFZLEtBQUtrRixhQUFMLENBQW1CbEYsU0FBbkIsS0FBaUNtRztBQURyQyxLQURWLEVBR0ksR0FISjs7QUFLQSxTQUFLOVMsTUFBTCxDQUFZaUMsT0FBWixDQUFvQixnQkFBcEIsRUFBc0MsRUFBRTBRLFNBQVUsS0FBSzFKLEtBQUwsQ0FBV3JMLEtBQVgsQ0FBWixFQUF0Qzs7QUFFQSxXQUFPLElBQVA7QUFDQTs7O3FDQUVpQkEsSyxFQUFPO0FBQ3hCLFdBQU8sS0FBS1IsT0FBTCxDQUFhbUssSUFBYixvQ0FBbUQzSixLQUFuRCxRQUFQO0FBQ0E7OztnQ0FHWW9GLEMsRUFBR2pCLEksRUFBTTtBQUNyQixRQUFJLEtBQUtnUSxhQUFMLENBQW1CdE0sTUFBbkIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDcEM7QUFDQTs7QUFFRCxRQUFNdEYsY0FBYyxLQUFLSCxNQUFMLENBQVlHLFdBQWhDOztBQUVBO0FBQ0E7QUFDQSxRQUFHLEtBQUtILE1BQUwsQ0FBWXVFLElBQVosS0FBcUIsTUFBeEIsRUFBZ0M7QUFDL0IsU0FBTTBPLGlCQUFpQixLQUFLbEIsYUFBTCxDQUFtQmhNLElBQW5CLENBQXdCLFVBQXhCLENBQXZCO0FBQ0EsVUFBS2dNLGFBQUwsQ0FDRXJSLElBREYsR0FFRTZHLElBRkYsQ0FFTyxPQUZQLEVBR0VxSixJQUhGLENBR08sMEJBQWNxQyxpQkFBaUI5UyxXQUEvQixDQUhQO0FBSUE7O0FBRUQsU0FBSyxJQUFJd0YsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtzRCxLQUFMLENBQVd4RCxNQUEvQixFQUF1Q0UsR0FBdkMsRUFBNEM7QUFDM0MsU0FBTWdOLFVBQVUsS0FBSzFKLEtBQUwsQ0FBV3RELENBQVgsQ0FBaEI7QUFDQSxTQUFJeEYsY0FBY3dTLFFBQVE3TSxHQUExQixFQUErQjtBQUM5QixXQUFLbU0sZ0JBQUwsQ0FBc0J0TSxDQUF0QjtBQUNBO0FBQ0E7QUFDRDtBQUNEOzs7cUNBRWlCM0MsQyxFQUFHakIsSSxFQUFNO0FBQzFCLFFBQUksS0FBSzNFLE9BQUwsQ0FBYWlSLFFBQWIsQ0FBc0IsMkJBQXRCLEtBQXNEdE0sS0FBS21SLE9BQS9ELEVBQXdFO0FBQ3ZFLFVBQUs5VixPQUFMLENBQWFzRixXQUFiLENBQXlCLDJCQUF6QjtBQUNBLEtBRkQsTUFFTyxJQUFJLENBQUNYLEtBQUttUixPQUFWLEVBQW1CO0FBQ3pCLFVBQUs5VixPQUFMLENBQWFDLFFBQWIsQ0FBc0IsMkJBQXRCO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7Ozs7aUNBS2NzVixPLEVBQVMvVSxLLEVBQU87QUFDN0IsUUFBTXFMLFFBQVEsS0FBS0EsS0FBTCxJQUFjLEtBQUs3SSxPQUFMLENBQWE2SSxLQUF6QztBQUNBLFFBQU1uTCxPQUFPLDRDQUNtQixDQUFDRixLQUFELEdBQVMsMEJBQVQsR0FBc0MsRUFEekQsZ0NBRUcrVSxRQUFROU0sS0FGWCwrQkFHR2pJLE1BQU11VixRQUFOLEVBSEgsNkJBSUNSLFFBQVE3TSxHQUpULHVEQUswQiwwQkFBYzZNLFFBQVE5TSxLQUF0QixDQUwxQiw4SEFRUDhNLFFBQVFTLFFBQVIsSUFBb0IsaUNBUmIsMENBU1ksMEJBQWNuSyxNQUFNLENBQU4sRUFBU25ELEdBQXZCLENBVFosOENBWVQ2TSxRQUFRN0wsS0FBUixJQUFpQixJQUFqQiw0Q0FDd0M2TCxRQUFRN0wsS0FEaEQsY0FFRSxFQWRPLHNCQWlCVDZMLFFBQVE3UyxXQUFSLElBQXVCLElBQXZCLGtEQUM4QzZTLFFBQVE3UyxXQUR0RCxjQUVFLEVBbkJPLDRDQXVCWHVULElBdkJXLEVBQWI7QUF3QkEsV0FBT3ZWLElBQVA7QUFDQTs7QUFFRDtBQUNBOzs7Ozs7Ozs7aUNBTWNpRSxJLEVBQU1uRSxLLEVBQU87QUFDMUIsU0FBS29VLGlCQUFMLENBQXVCcFUsS0FBdkIsRUFDRTBWLFdBREYsQ0FDYyxLQUFLQyxhQUFMLENBQW1CeFIsSUFBbkIsRUFBeUJuRSxLQUF6QixDQURkLEVBRUUyRSxFQUZGLENBRUssT0FGTCxFQUVjLEtBQUsyUCxjQUFMLENBQW9Cek8sSUFBcEIsQ0FBeUIsSUFBekIsQ0FGZDtBQUdBOzs7bUNBRWV3RixLLEVBQU87QUFBQTs7QUFDdEIsUUFBSXhMLFNBQVMsRUFBYjtBQUNBd0wsVUFBTXRMLE9BQU4sQ0FBYyxVQUFDZ1YsT0FBRCxFQUFVL1UsS0FBVixFQUFvQjtBQUNqQ0gsZUFBVSxPQUFLOFYsYUFBTCxDQUFtQlosT0FBbkIsRUFBNEIvVSxLQUE1QixDQUFWO0FBQ0EsS0FGRDtBQUdBLFdBQU9ILE1BQVA7QUFDQTs7Ozs7O0FBR0YscUJBQVV5TixpQkFBVixDQUE0QixVQUE1QixFQUF3QzBHLFFBQXhDO21CQUNlQSxROzs7Ozs7QUNsUGY7QUFDQTs7Ozs7Ozs7OztBQUtBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7S0FNTTRCLFk7OztBQUVMLHdCQUFZeFQsTUFBWixFQUFnQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFBQSwySEFDekJKLE1BRHlCLEVBQ2pCSSxPQURpQjs7QUFFL0IsT0FBRyxNQUFLSixNQUFMLENBQVkySyxNQUFaLElBQXNCLElBQXpCLEVBQStCO0FBQzlCLFVBQUs4SSxPQUFMLEdBQWUsTUFBS3pULE1BQUwsQ0FBWTJLLE1BQVosQ0FBbUI4SSxPQUFsQztBQUNBLFVBQUtyVyxPQUFMLENBQWFrRCxJQUFiO0FBQ0E7QUFDRCxTQUFLTixNQUFMLENBQVl1QyxFQUFaLENBQWUsT0FBZixFQUF3QixNQUFLbVIsYUFBTCxDQUFtQmpRLElBQW5CLE9BQXhCO0FBTitCO0FBTy9COztBQUVEOzs7Ozs7O21DQUdnQjtBQUNmLFNBQUtyRyxPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNiQyxRQURhLENBQ0osd0JBREksQ0FBZjtBQUVBOzs7aUNBTWEyRixDLEVBQUdqQixJLEVBQU07QUFDdEIsUUFBTWMsUUFBUWQsS0FBS2MsS0FBbkI7QUFDQSxTQUFLNFEsT0FBTCxHQUFlNVEsTUFBTTRRLE9BQXJCO0FBQ0EsU0FBS3JXLE9BQUwsQ0FBYWtELElBQWI7QUFDQTs7O3FCQVJXbUgsSyxFQUFPO0FBQ2xCLFNBQUtySyxPQUFMLENBQWF5SixJQUFiLENBQWtCWSxLQUFsQjtBQUNBOzs7Ozs7QUFTRixxQkFBVXlELGlCQUFWLENBQTRCLGNBQTVCLEVBQTRDc0ksWUFBNUM7bUJBQ2VBLFk7Ozs7OztBQzlDZjtBQUNBOzs7Ozs7Ozs7O0FBS0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7S0FPTUcsTTs7O0FBRUwsa0JBQVkzVCxNQUFaLEVBQWdDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUMvQkEsYUFBVSxpQkFBRTBILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEI3RSxTQUFNN0MsUUFBUTZDO0FBRFEsSUFBYixFQUVQN0MsT0FGTyxDQUFWOztBQUQrQiwrR0FLekJKLE1BTHlCLEVBS2pCSSxPQUxpQjs7QUFPL0IsU0FBSzZDLEdBQUwsR0FBVyxNQUFLN0MsT0FBTCxDQUFhNkMsR0FBeEI7QUFQK0I7QUFRL0I7Ozs7OztBQWNEOzs7bUNBR2dCO0FBQ2YsU0FBSzdGLE9BQUwsR0FBZSxzQkFBRSxTQUFGLEVBQ2JDLFFBRGEsQ0FDSixpQkFESSxDQUFmOztBQUdBLFdBQU8sS0FBS0QsT0FBWjtBQUNBOzs7cUJBcEJPcUssSyxFQUFPO0FBQ2QsUUFBR0EsU0FBUyxJQUFaLEVBQWtCO0FBQ2pCO0FBQ0E7QUFDRCxTQUFLbU0sSUFBTCxHQUFZbk0sS0FBWjtBQUNBLFNBQUtySyxPQUFMLENBQWE0SSxHQUFiLENBQWlCLGtCQUFqQixZQUE2Q3lCLEtBQTdDO0FBQ0EsSTt1QkFFUztBQUNULFdBQU8sS0FBS21NLElBQVo7QUFDQTs7Ozs7O0FBY0YscUJBQVUxSSxpQkFBVixDQUE0QixRQUE1QixFQUFzQ3lJLE1BQXRDO21CQUNlQSxNOzs7Ozs7Ozs7OztBQ3JEZjs7OztBQUtBOzs7OztBQUtBLEtBQUlFLGdCQUFnQixFQUFwQjs7QUFFQTtBQUNBO0FBQ0EsS0FBTUMsU0FBUztBQUNkO0FBQ0EsRUFDQyxtQkFERCxFQUVDLGdCQUZELEVBR0MsbUJBSEQsRUFJQyxtQkFKRCxFQUtDLGtCQUxELEVBTUMsaUJBTkQsQ0FGYztBQVVkO0FBQ0EsRUFDQyx5QkFERCxFQUVDLHNCQUZELEVBR0MseUJBSEQsRUFJQyx5QkFKRCxFQUtDLHdCQUxELEVBTUMsdUJBTkQsQ0FYYztBQW1CZDtBQUNBLEVBQ0MseUJBREQsRUFFQyx3QkFGRCxFQUdDLGdDQUhELEVBSUMsd0JBSkQsRUFLQyx3QkFMRCxFQU1DLHVCQU5ELENBcEJjO0FBNEJkO0FBQ0EsRUFDQyxzQkFERCxFQUVDLHFCQUZELEVBR0Msc0JBSEQsRUFJQyxzQkFKRCxFQUtDLHFCQUxELEVBTUMsb0JBTkQsQ0E3QmM7QUFxQ2Q7QUFDQSxFQUNDLHFCQURELEVBRUMsa0JBRkQsRUFHQyxxQkFIRCxFQUlDLHFCQUpELEVBS0Msb0JBTEQsRUFNQyxtQkFORCxDQXRDYyxDQUFmOztBQWlEQSxLQUFJQyxVQUFVRCxPQUFPLENBQVAsQ0FBZDs7QUFFQSxLQUFJRSxtQkFBSjs7QUFFQTtBQUNBLE1BQUssSUFBSXJPLElBQUksQ0FBYixFQUFnQkEsSUFBSW1PLE9BQU9yTyxNQUEzQixFQUFtQ0UsR0FBbkMsRUFBd0M7QUFDdkM7QUFDQSxNQUFJbU8sT0FBT25PLENBQVAsRUFBVSxDQUFWLEtBQWdCNUIsUUFBcEIsRUFBOEI7QUFDN0JpUSxnQkFBYUYsT0FBT25PLENBQVAsQ0FBYjtBQUNBO0FBQ0E7QUFDRDs7QUFFRDtBQUNBLEtBQUlxTyxVQUFKLEVBQWdCO0FBQ2YsT0FBSyxJQUFJck8sS0FBRSxDQUFYLEVBQWNBLEtBQUVxTyxXQUFXdk8sTUFBM0IsRUFBbUNFLElBQW5DLEVBQXdDO0FBQ3ZDa08saUJBQWNFLFFBQVFwTyxFQUFSLENBQWQsSUFBNEJxTyxXQUFXck8sRUFBWCxDQUE1QjtBQUNBO0FBQ0Q7O21CQUVja08sYTs7Ozs7O0FDbkZmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBS012SSxNOzs7Ozs7OztBQUNMOzs7Ozs7O3VCQU9ZcEgsSSxFQUFNK1AsSSxFQUFNO0FBQ3ZCLFFBQUlDLFVBQVVuUSxTQUFTb1EsTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBZDtBQUNBLFNBQUssSUFBSXpPLENBQVQsSUFBY3VPLE9BQWQsRUFBdUI7QUFDdEIsU0FBSUcsSUFBSUgsUUFBU3ZPLENBQVQsRUFBYTBOLElBQWIsR0FBb0JlLEtBQXBCLENBQTBCLEdBQTFCLENBQVI7QUFDQSxTQUFJQyxFQUFHLENBQUgsTUFBVyxjQUFjblEsSUFBN0IsRUFDQyxPQUFPbVEsRUFBRyxDQUFILENBQVA7QUFDRDtBQUNELFdBQU9KLElBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O3VCQU1ZL1AsSSxFQUFNdUQsSyxFQUFPO0FBQ3hCLFFBQUk0TSxJQUFJLElBQUlDLElBQUosRUFBUjtBQUNBRCxNQUFFRSxPQUFGLENBQVVGLEVBQUVHLElBQUYsR0FBUyxDQUFuQjtBQUNBelEsYUFBU29RLE1BQVQsR0FBa0IsY0FBY2pRLElBQWQsR0FBcUIsR0FBckIsR0FBMkJ1RCxLQUEzQixHQUFtQyxXQUFuQyxHQUFpRDRNLEVBQUVsQixRQUFGLEVBQW5FO0FBQ0E7Ozs7OzttQkFHYTdILE07Ozs7Ozs7Ozs7O0FDckNmOzs7O0FBS0EsS0FBTW1KLGFBQWE3SSxPQUFPOEksU0FBUCxJQUFvQjlJLE9BQU84SSxTQUFQLENBQWlCQyxTQUFyQyxJQUFrRCxFQUFyRTs7QUFFTyxLQUFNQyxnQ0FBYSxTQUFELENBQVlDLElBQVosQ0FBaUJKLFVBQWpCLENBQWxCOztBQUVBLEtBQU1LLGdDQUFZTCxXQUFXNVcsT0FBWCxDQUFtQixRQUFuQixJQUErQixDQUFDLENBQWxEOztBQUVBLEtBQU1rWCxrQ0FBYyxVQUFELENBQWFGLElBQWIsQ0FBa0JKLFVBQWxCLENBQW5COztBQUVBLEtBQU1PLDhDQUFtQkQsY0FBY0gsU0FBdkM7O0FBRUEsS0FBTUssNEJBQVcsT0FBRCxDQUFVSixJQUFWLENBQWVKLFVBQWYsQ0FBaEI7QUFDUDtBQUNBO0FBQ0E7QUFDTyxLQUFNUyxnQ0FBYSxTQUFELENBQVlMLElBQVosQ0FBaUJKLFVBQWpCLEtBQWdDLENBQUNRLE9BQW5EO0FBQ0EsS0FBTUUsNEJBQVcsT0FBRCxDQUFVTixJQUFWLENBQWVKLFVBQWYsQ0FBaEI7QUFDQSxLQUFNVywwQkFBU0YsYUFBYUQsT0FBYixJQUF3QkUsT0FBdkM7O0FBRUEsS0FBTUUsZ0NBQVlaLFdBQVc1VyxPQUFYLENBQW1CLFFBQW5CLElBQStCLENBQUMsQ0FBaEMsSUFBcUMsQ0FBQ2lYLFNBQXhELEM7Ozs7Ozs7Ozs7Ozs7O0FDdkJQOzs7Ozs7OztLQUVNUSxVLEdBQ0wsb0JBQVk3TixLQUFaLEVBQW1CO0FBQUE7O0FBQ2xCLE1BQUdBLGlCQUFpQjZOLFVBQXBCLEVBQWdDO0FBQy9CLFVBQU83TixLQUFQO0FBQ0E7QUFDRCxNQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDOUIsUUFBS3BFLElBQUwsR0FBWW9FLEtBQVo7QUFDQSxHQUZELE1BRU8sSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQ3RDO0FBQ0MsUUFBS2dNLE9BQUwsR0FBZWhNLEtBQWY7QUFDQSxHQUhNLE1BR0EsSUFBSSxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQXJCLEVBQStCOztBQUVyQztBQUNBO0FBQ0EsT0FBSSxPQUFPQSxNQUFNcEUsSUFBYixLQUFzQixRQUExQixFQUFvQztBQUNuQyxTQUFLQSxJQUFMLEdBQVlvRSxNQUFNcEUsSUFBbEI7QUFDQTs7QUFFRCxvQkFBRXlFLE1BQUYsQ0FBUyxJQUFULEVBQWVMLEtBQWY7QUFDQTs7QUFFRCxNQUFJLENBQUMsS0FBS2dNLE9BQVYsRUFBbUI7QUFDbEIsUUFBS0EsT0FBTCxHQUFlNkIsV0FBV0MsZUFBWCxDQUEyQixLQUFLbFMsSUFBaEMsS0FBeUMsRUFBeEQ7QUFDQTtBQUNELEU7O0FBR0ZpUyxZQUFXckssU0FBWCxDQUFxQjVILElBQXJCLEdBQTRCLENBQTVCOztBQUVBaVMsWUFBV3JLLFNBQVgsQ0FBcUJ3SSxPQUFyQixHQUErQixFQUEvQjs7QUFFQTZCLFlBQVdFLFVBQVgsR0FBd0IsQ0FDdkIsa0JBRHVCLEVBRXZCLG1CQUZ1QixFQUd2QixtQkFIdUIsRUFJdkIsa0JBSnVCLEVBS3ZCLDZCQUx1QixFQU12QixxQkFOdUIsQ0FBeEI7O0FBVUFGLFlBQVdDLGVBQVgsR0FBNkI7QUFDNUIsS0FBSSw2QkFEd0I7QUFFNUIsS0FBSSxrREFGd0I7QUFHNUIsS0FBSSx1SUFId0I7QUFJNUIsS0FBSSxnSkFKd0I7QUFLNUIsS0FBSTtBQUx3QixFQUE3Qjs7QUFRQTtBQUNBO0FBQ0EsTUFBSyxJQUFJRSxTQUFTLENBQWxCLEVBQXFCQSxTQUFTSCxXQUFXRSxVQUFYLENBQXNCL1AsTUFBcEQsRUFBNERnUSxRQUE1RCxFQUFzRTtBQUNyRUgsYUFBV0EsV0FBV0UsVUFBWCxDQUFzQkMsTUFBdEIsQ0FBWCxJQUE0Q0EsTUFBNUM7QUFDQTtBQUNBSCxhQUFXckssU0FBWCxDQUFxQnFLLFdBQVdFLFVBQVgsQ0FBc0JDLE1BQXRCLENBQXJCLElBQXNEQSxNQUF0RDtBQUNBOzttQkFFY0gsVTs7Ozs7O0FDM0RmO0FBQ0E7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7OztLQUtNSSxXOzs7QUFDTCx1QkFBYTFWLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFMEgsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QnpCLGNBQVcsTUFEVztBQUV0QlMsV0FBUSxxQkFGYztBQUd0QlIsZUFBWSxNQUhVO0FBSXRCcEMsVUFBTztBQUplLElBQWIsRUFLUDlELE9BTE8sQ0FBVjs7QUFEZ0MseUhBTzFCSixNQVAwQixFQU9sQkksT0FQa0I7O0FBU2hDLFNBQUtKLE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxNQUFmLEVBQXVCLE1BQUtvVCxTQUFMLENBQWVsUyxJQUFmLE9BQXZCO0FBQ0EsU0FBS3pELE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxTQUFmLEVBQTBCLE1BQUtvVCxTQUFMLENBQWVsUyxJQUFmLE9BQTFCO0FBQ0EsU0FBS3pELE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLE1BQUtxVCxRQUFMLENBQWNuUyxJQUFkLE9BQXhCO0FBQ0EsU0FBS3pELE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLE1BQUtzVCxVQUFMLENBQWdCcFMsSUFBaEIsT0FBeEI7O0FBRUEsU0FBS3pELE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxNQUFmLEVBQXVCLE1BQUt1VCxZQUFMLENBQWtCclMsSUFBbEIsT0FBdkI7QUFDQSxTQUFLekQsTUFBTCxDQUFZdUMsRUFBWixDQUFlLFNBQWYsRUFBMEIsTUFBS3VULFlBQUwsQ0FBa0JyUyxJQUFsQixPQUExQjtBQUNBLFNBQUt6RCxNQUFMLENBQVl1QyxFQUFaLENBQWUsV0FBZixFQUE0QixNQUFLdVQsWUFBTCxDQUFrQnJTLElBQWxCLE9BQTVCO0FBaEJnQztBQWlCaEM7O0FBR0Q7Ozs7Ozs7OEJBR1k7QUFDWCxRQUFHLEtBQUs2SixJQUFMLENBQVVqSCxRQUFWLEtBQXVCLE1BQTFCLEVBQWtDO0FBQ2xDLFNBQUtpSCxJQUFMLENBQVVqSCxRQUFWLEdBQXFCLE1BQXJCO0FBQ0EsU0FBS2pKLE9BQUwsQ0FBYTJJLElBQWIsQ0FBa0IsT0FBbEIsRUFBMkIsS0FBSzNGLE9BQUwsQ0FBYTBHLEtBQXhDO0FBQ0E7O0FBRUQ7Ozs7OzsrQkFHYTtBQUNaLFFBQUcsS0FBS3dHLElBQUwsQ0FBVWpILFFBQVYsS0FBdUIsT0FBMUIsRUFBbUM7QUFDbkMsU0FBS2lILElBQUwsQ0FBVWpILFFBQVYsR0FBcUIsT0FBckI7QUFDQSxTQUFLakosT0FBTCxDQUFhMkksSUFBYixDQUFrQixPQUFsQixFQUEyQixvQkFBM0I7QUFDQTs7O2dDQUVZO0FBQ1osUUFBRyxLQUFLdUgsSUFBTCxDQUFVakgsUUFBVixLQUF1QixTQUExQixFQUFxQztBQUNyQyxRQUFHLEtBQUtyRyxNQUFMLENBQVk0QyxRQUFaLEtBQXlCbVQsUUFBNUIsRUFBc0M7QUFDckMsVUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLMUksSUFBTCxDQUFVakgsUUFBVixHQUFxQixTQUFyQjtBQUNBLFVBQUtqSixPQUFMLENBQWEySSxJQUFiLENBQWtCLE9BQWxCLEVBQTJCLGtCQUEzQjtBQUNBO0FBQ0Q7OztrQ0FFYztBQUNkLFFBQUcsQ0FBQyxLQUFLaVEsT0FBVCxFQUFrQjtBQUNqQjtBQUNBO0FBQ0QsU0FBS0EsT0FBTCxHQUFlLEtBQWY7O0FBRUEsUUFBRyxLQUFLaFcsTUFBTCxDQUFZQyxLQUFaLENBQWtCa0QsTUFBckIsRUFBNkI7QUFDNUIsVUFBS3lTLFFBQUw7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLRCxTQUFMO0FBQ0E7QUFDRDs7QUFFRDs7Ozs7OzJCQUdRM1MsQyxFQUFHO0FBQ1Y7QUFDQSxTQUFLaEQsTUFBTCxDQUFZQyxLQUFaLENBQWtCQyxVQUFsQjtBQUNBOzs7Ozs7QUFHRixxQkFBVWdMLGlCQUFWLENBQTRCLGFBQTVCLEVBQTJDd0ssV0FBM0M7QUFDQSxtQkFBUXZZLGVBQVIsQ0FBd0IsTUFBeEIsRUFBZ0N1WSxXQUFoQzttQkFDZUEsVzs7Ozs7O0FDdEZmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7S0FLTU8sYTs7O0FBRUwseUJBQWFqVyxNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRTBILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEJ6QixjQUFXLGFBRFc7QUFFdEJDLGVBQVksZ0JBRlU7QUFHdEJwQyxVQUFPO0FBSGUsSUFBYixFQUlQOUQsT0FKTyxDQUFWOztBQURnQyw2SEFNMUJKLE1BTjBCLEVBTWxCSSxPQU5rQjs7QUFRaEMsU0FBS0osTUFBTCxDQUFZdUMsRUFBWixDQUFlLGNBQWYsRUFBK0IsVUFBQ1MsQ0FBRCxFQUFJakIsSUFBSixFQUFhO0FBQzNDLFFBQU05QixRQUFRLE1BQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQSxVQUFLd0gsS0FBTCxHQUFheEgsTUFBTTVCLEtBQU4sR0FBYyxDQUFkLEdBQWtCNEIsTUFBTVIsTUFBckM7QUFDQSxJQUhEO0FBUmdDO0FBWWhDOzs7O21DQUVlO0FBQUE7O0FBQ2Y7QUFDQSxRQUFJeVcsT0FBTyxLQUFYO0FBQ0EsUUFBTWpXLFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUExQjs7QUFFQSxTQUFLa1csTUFBTCxHQUFjLHNCQUFFLFFBQUYsRUFBWTlZLFFBQVosQ0FBcUIsZUFBckIsQ0FBZDs7QUFFQSxTQUFLaUwsTUFBTCxHQUFjLHNCQUFFLFFBQUYsRUFBWWpMLFFBQVosQ0FBcUIsZUFBckIsQ0FBZDs7QUFFQSxTQUFLK1ksSUFBTCxHQUFZLHNCQUFFLFFBQUYsRUFDVi9ZLFFBRFUsQ0FDRCxhQURDLEVBRVYrSSxNQUZVLENBRUgsS0FBS2tDLE1BRkYsRUFHVmxDLE1BSFUsQ0FHSCxLQUFLK1AsTUFIRixFQUlWNVQsRUFKVSxDQUlQLE9BSk8sRUFJRSxVQUFDUyxDQUFELEVBQU87QUFDbkIsU0FBSWtULElBQUosRUFBVTtBQUNWLFNBQUlHLElBQUksT0FBS0MsV0FBTCxDQUFpQnRULEVBQUV1VCxLQUFuQixDQUFSO0FBQ0EsU0FBSUYsS0FBSyxDQUFMLElBQVVBLEtBQUssQ0FBbkIsRUFBc0I7QUFDckIsVUFBR3BXLE1BQU01QixLQUFULEVBQWdCO0FBQ2Y0QixhQUFNNUIsS0FBTixHQUFjLEtBQWQ7QUFDQTtBQUNENEIsWUFBTVIsTUFBTixHQUFlLElBQUk0VyxDQUFuQjtBQUNBO0FBQ0QsS0FiVSxDQUFaOztBQWVBLFNBQUtHLGVBQUwsQ0FDRW5aLFFBREYsQ0FDVyxlQURYLEVBRUUrSSxNQUZGLENBRVMsS0FBS2dRLElBRmQ7O0FBSUEsU0FBSzlJLElBQUwsQ0FBVWxRLE9BQVYsQ0FBa0IySSxJQUFsQixDQUF1QixPQUF2QixFQUFnQyxnQkFBaEM7O0FBRUEsU0FBS29RLE1BQUwsQ0FBWTVULEVBQVosQ0FBZSxXQUFmLEVBQTRCLFVBQUNTLENBQUQsRUFBTztBQUNsQyxTQUFJQSxFQUFFeUYsS0FBRixLQUFZLENBQWhCLEVBQW1CO0FBQ25CeU4sWUFBTyxJQUFQO0FBQ0EsS0FIRDs7QUFLQSwwQkFBRW5TLFFBQUYsRUFBWXhCLEVBQVosQ0FBZTtBQUNka1UsZ0JBQVksbUJBQUN6VCxDQUFELEVBQU87QUFDbEIsVUFBSSxDQUFDa1QsSUFBTCxFQUFXO0FBQ1gsVUFBSUcsSUFBSSxPQUFLQyxXQUFMLENBQWlCdFQsRUFBRXVULEtBQW5CLENBQVI7QUFDQSxVQUFJRixLQUFLLENBQUwsSUFBVUEsS0FBSyxDQUFuQixFQUFzQjtBQUNyQixXQUFHcFcsTUFBTTVCLEtBQVQsRUFBZ0I7QUFDZjRCLGNBQU01QixLQUFOLEdBQWMsS0FBZDtBQUNBO0FBQ0Q0QixhQUFNUixNQUFOLEdBQWUsSUFBSTRXLENBQW5CO0FBQ0E7QUFDRCxNQVZhOztBQVlkSyxjQUFVLGlCQUFDMVQsQ0FBRCxFQUFPO0FBQ2hCa1QsYUFBTyxLQUFQO0FBQ0E7QUFkYSxLQUFmO0FBZ0JBLFdBQU8sS0FBSzlZLE9BQVo7QUFDQTs7O2lDQVdjO0FBQUEsUUFDTjZDLEtBRE0sR0FDSSxLQUFLRCxNQURULENBQ05DLEtBRE07OztBQUdkQSxVQUFNNUIsS0FBTixHQUFjLENBQUM0QixNQUFNNUIsS0FBckI7QUFDQTs7OytCQUVZc1ksQyxFQUFHO0FBQ2YsV0FBTyxDQUFDQSxJQUFJLEtBQUtQLElBQUwsQ0FBVXBLLE1BQVYsR0FBbUJDLEdBQXhCLElBQStCLEtBQUttSyxJQUFMLENBQVVqWSxNQUFWLEVBQXRDO0FBQ0E7OzsyQkFFUTZFLEMsRUFBRztBQUNYLDBIQUFjQSxDQUFkO0FBQ0EsU0FBSzRULFdBQUw7QUFDQTs7O29DQUVnQjtBQUNoQixTQUFLblAsS0FBTCxHQUFhLEtBQUt6SCxNQUFMLENBQVlDLEtBQVosQ0FBa0I0VyxhQUEvQjtBQUNBOzs7cUJBekJVcFAsSyxFQUFPO0FBQ2pCLFNBQUs2RixJQUFMLENBQVVqSCxRQUFWLEdBQXFCLEtBQUtyRyxNQUFMLENBQVlXLGNBQVosQ0FBMkI4RyxLQUEzQixDQUFyQjs7QUFFQSxRQUFJNE8sSUFBSTVHLEtBQUtxSCxLQUFMLENBQVdyUCxRQUFRLEdBQW5CLEVBQXdCMEwsUUFBeEIsS0FBcUMsR0FBN0M7QUFDQSxTQUFLN0ssTUFBTCxDQUFZdEMsR0FBWixDQUFnQixRQUFoQixFQUEwQnFRLENBQTFCO0FBQ0EsU0FBS0YsTUFBTCxDQUFZblEsR0FBWixDQUFnQixRQUFoQixFQUEwQnFRLENBQTFCO0FBQ0E7Ozs7OztBQXVCRixxQkFBVW5MLGlCQUFWLENBQTRCLGVBQTVCLEVBQTZDK0ssYUFBN0M7QUFDQSxtQkFBUTlZLGVBQVIsQ0FBd0IsUUFBeEIsRUFBa0M4WSxhQUFsQzttQkFDZUEsYTs7Ozs7O0FDckhmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUtBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7S0FPTWMsZTs7O0FBRUwsMkJBQVkvVyxNQUFaLEVBQWdDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUFBLGlJQUN6QkosTUFEeUIsRUFDakJJLE9BRGlCOztBQUUvQixTQUFLaEQsT0FBTCxDQUFhbUYsRUFBYixDQUFnQixZQUFoQixFQUE4QjtBQUFBLFdBQU0sQ0FBQyxNQUFLK0osT0FBTixJQUFpQixNQUFLa0ssZUFBTCxDQUFxQmxXLElBQXJCLEVBQXZCO0FBQUEsSUFBOUI7QUFDQSxTQUFLbEQsT0FBTCxDQUFhbUYsRUFBYixDQUFnQixZQUFoQixFQUE4QjtBQUFBLFdBQU0sTUFBS2lVLGVBQUwsQ0FBcUI1TCxJQUFyQixFQUFOO0FBQUEsSUFBOUI7QUFIK0I7QUFJL0I7O0FBR0Q7Ozs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQSxTQUFLNEwsZUFBTCxHQUF1QixzQkFBRSxTQUFGLEVBQWFuWixRQUFiLENBQXNCLDJCQUF0QixDQUF2QjtBQUNBLFNBQUtELE9BQUwsQ0FBYWdKLE1BQWIsQ0FBb0IsS0FBS29RLGVBQXpCO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZjtBQUNBOzs7NEJBRVF4VCxDLEVBQUc7QUFDWCxRQUFHLHNCQUFFQSxFQUFFNFAsTUFBSixFQUFZQyxPQUFaLENBQW9CLEtBQUsyRCxlQUF6QixFQUEwQy9RLE1BQTFDLEdBQW1ELENBQXRELEVBQXlEO0FBQ3hEO0FBQ0E7O0FBRUQsK0hBQWV6QyxDQUFmO0FBQ0E7Ozs7OztBQUlGLHFCQUFVa0ksaUJBQVYsQ0FBNEIsaUJBQTVCLEVBQStDNkwsZUFBL0M7QUFDQSxtQkFBUTVaLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0M0WixlQUFwQzttQkFDZUEsZTs7Ozs7O0FDdERmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0tBUU1DLGU7OztBQUVMLDJCQUFhaFgsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUwSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCNUQsVUFBTyxVQURlO0FBRXRCb0MsZUFBWTtBQUZVLElBQWIsRUFHUGxHLE9BSE8sQ0FBVjs7QUFEZ0MsaUlBSzFCSixNQUwwQixFQUtsQkksT0FMa0I7O0FBUWhDLFNBQUsrVixNQUFMLENBQVkvWSxPQUFaLENBQW9CbUYsRUFBcEIsQ0FBdUIsb0JBQXZCLEVBQTZDLE1BQUswVSxrQkFBTCxDQUF3QnhULElBQXhCLE9BQTdDOztBQUVBLFNBQUswUyxNQUFMLENBQVkvWSxPQUFaLENBQW9CbUYsRUFBcEIsQ0FBdUIsb0JBQXZCLEVBQTZDLE1BQUsyVSxrQkFBTCxDQUF3QnpULElBQXhCLE9BQTdDOztBQUVBLFNBQUt6RCxNQUFMLENBQVl1QyxFQUFaLENBQWUsY0FBZixFQUErQixNQUFLNFUsY0FBTCxDQUFvQjFULElBQXBCLE9BQS9COztBQUVBLFNBQUt6RCxNQUFMLENBQVl1QyxFQUFaLENBQWUsWUFBZixFQUE2QixNQUFLNlUsYUFBTCxDQUFtQjNULElBQW5CLE9BQTdCOztBQUVBLFNBQUt6RCxNQUFMLENBQVl1QyxFQUFaLENBQWUsZ0JBQWYsRUFBaUMsTUFBSzZVLGFBQUwsQ0FBbUIzVCxJQUFuQixPQUFqQzs7QUFFQSxTQUFLekQsTUFBTCxDQUFZdUMsRUFBWixDQUFlLGdCQUFmLEVBQWlDLE1BQUs4VSxpQkFBTCxDQUF1QjVULElBQXZCLE9BQWpDO0FBbEJnQztBQW1CaEM7Ozs7c0NBRWtCVCxDLEVBQUc7QUFDckIsU0FBS3NVLFlBQUwsQ0FBa0JsYSxPQUFsQixDQUEwQndOLElBQTFCO0FBQ0E7OztzQ0FFa0I1SCxDLEVBQUdqQixJLEVBQU07QUFDM0IsUUFBTXdWLElBQUl4VixLQUFLd1YsQ0FBZjtBQUNBLFFBQU1sQixJQUFJLEtBQUtDLFdBQUwsQ0FBaUJpQixDQUFqQixDQUFWO0FBQ0EsUUFBTXRYLFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUExQjtBQUNBLFFBQUlvVyxJQUFJLENBQUosSUFBU0EsSUFBSSxDQUFqQixFQUFvQjtBQUNuQixVQUFLRixNQUFMLENBQVlxQixVQUFaLENBQ0VsWCxJQURGLEdBRUV1RyxJQUZGLENBRU8sMEJBQWM1RyxNQUFNMkMsUUFBTixHQUFpQnlULENBQS9CLENBRlA7QUFHQXBXLFdBQU1FLFdBQU4sR0FBb0JGLE1BQU0yQyxRQUFOLEdBQWlCeVQsQ0FBckM7QUFDQTtBQUNEOzs7aUNBRWFyVCxDLEVBQUdqQixJLEVBQU07QUFDdEIsUUFBTWEsV0FBVyxLQUFLNUMsTUFBTCxDQUFZQyxLQUFaLENBQWtCMkMsUUFBbkM7QUFDQSxRQUFJekMsY0FBYyxLQUFLSCxNQUFMLENBQVlHLFdBQTlCO0FBQ0EsUUFBRzRCLFFBQVFBLEtBQUs1QixXQUFMLEtBQXFCeUUsU0FBaEMsRUFBMkM7QUFDMUN6RSxtQkFBYzRCLEtBQUs1QixXQUFuQjtBQUNBO0FBQ0QsUUFBSTJQLFVBQVUzUCxjQUFjeUMsUUFBNUI7O0FBRUEsUUFBRzZVLE1BQU03VSxRQUFOLEtBQW1CekMsZ0JBQWdCLENBQXRDLEVBQXlDMlAsVUFBVSxDQUFWOztBQUV6QyxTQUFLNEgsSUFBTCxDQUFVLEVBQUU1SCxnQkFBRixFQUFXM1Asd0JBQVgsRUFBVjtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQUE7O0FBQ2Y7QUFDQSxRQUFJRixRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBeEI7O0FBRUEsU0FBS2lXLElBQUwsR0FBWSxLQUFaOztBQUVBO0FBQ0EsU0FBSy9WLFdBQUwsR0FBbUIsMEJBQWdCLEtBQUtILE1BQXJCLEVBQTZCLEVBQUVzRyxXQUFZLGNBQWQsRUFBN0IsQ0FBbkI7QUFDQSxTQUFLbkcsV0FBTCxDQUFpQnlRLElBQWpCLEdBQXdCLE9BQXhCO0FBQ0EsU0FBSytHLFNBQUwsR0FBaUIsMEJBQWdCLEtBQUszWCxNQUFyQixFQUE2QixFQUFDc0csV0FBWSxZQUFiLEVBQTdCLENBQWpCOztBQUVBOztBQUVBLFNBQUs2UCxNQUFMLEdBQWMscUJBQVcsS0FBS25XLE1BQWhCLEVBQXdCO0FBQ3JDa1csV0FBTztBQUQ4QixLQUF4QixDQUFkOztBQUlBLFNBQUtvQixZQUFMLEdBQW9CLHFCQUFXLEtBQUt0WCxNQUFoQixFQUF3QjtBQUMzQ3NHLGdCQUFZO0FBRCtCLEtBQXhCLENBQXBCO0FBR0EsU0FBS2dSLFlBQUwsQ0FBa0JsYSxPQUFsQixDQUEwQndOLElBQTFCOztBQUdBO0FBQ0EsU0FBS2dOLFlBQUwsR0FBb0Isc0JBQUUsU0FBRixFQUFhdmEsUUFBYixDQUFzQixhQUF0QixDQUFwQjs7QUFHQTtBQUNBLFNBQUt3YSxjQUFMLEdBQXNCLDZCQUFtQixLQUFLN1gsTUFBeEIsRUFBZ0M1QyxPQUF0RDs7QUFFQSxTQUFLZ1osSUFBTCxHQUFZLHNCQUFFLFNBQUYsRUFDVi9ZLFFBRFUsQ0FDRCxVQURDLEVBRVYrSSxNQUZVLENBRUgsS0FBSytQLE1BQUwsQ0FBWS9ZLE9BRlQsRUFHVmdKLE1BSFUsQ0FHSCxLQUFLa1IsWUFBTCxDQUFrQmxhLE9BSGYsRUFJVmdKLE1BSlUsQ0FJSCxLQUFLd1IsWUFKRixFQUtWeFIsTUFMVSxDQUtILEtBQUt5UixjQUxGLEVBTVZ0VixFQU5VLENBTVA7QUFDSGtVLGdCQUFZLG1CQUFDelQsQ0FBRCxFQUFPO0FBQ2xCLFVBQUksT0FBS21ULE1BQUwsQ0FBWUQsSUFBaEIsRUFBc0I7O0FBRXRCLFVBQUlHLElBQUksT0FBS0MsV0FBTCxDQUFpQnRULEVBQUU4VSxLQUFuQixDQUFSO0FBQ0EsVUFBSXpCLElBQUksQ0FBSixJQUFTQSxJQUFJLENBQWpCLEVBQW9CO0FBQ25CLGNBQUtpQixZQUFMLENBQWtCbGEsT0FBbEIsQ0FDRWtELElBREYsR0FFRTBGLEdBRkYsQ0FFTSxNQUZOLEVBRWNxUSxJQUFJLEdBQUosR0FBVSxHQUZ4QjtBQUdBLGNBQUtpQixZQUFMLENBQ0VFLFVBREYsQ0FFRWxYLElBRkYsR0FHRXVHLElBSEYsQ0FHTywwQkFBYzVHLE1BQU0yQyxRQUFOLEdBQWlCeVQsQ0FBL0IsQ0FIUDtBQUlBLE9BUkQsTUFRTztBQUNOLGNBQUtpQixZQUFMLENBQWtCbGEsT0FBbEIsQ0FBMEJ3TixJQUExQjtBQUNBO0FBQ0QsTUFoQkU7O0FBa0JIbU4saUJBQWEsb0JBQUMvVSxDQUFELEVBQU87QUFDbkIsVUFBSSxPQUFLa1QsSUFBVCxFQUFlO0FBQ2YsYUFBS29CLFlBQUwsQ0FBa0JsYSxPQUFsQixDQUEwQndOLElBQTFCO0FBQ0EsTUFyQkU7O0FBdUJIb04sZ0JBQVksbUJBQUNoVixDQUFELEVBQU8sQ0FDbEIsQ0F4QkU7O0FBMEJIbUssWUFBUSxLQUFLOEssWUFBTCxDQUFrQnhVLElBQWxCLENBQXVCLElBQXZCLENBMUJMOztBQTRCSHlVLGdCQUFZLG1CQUFDbFYsQ0FBRCxFQUFPLENBQ2xCO0FBN0JFLEtBTk8sQ0FBWjs7QUFzQ0EsU0FBSzVGLE9BQUwsQ0FBYUMsUUFBYixDQUFzQixvQkFBdEIsRUFDRStJLE1BREYsQ0FDUyxzQkFBRSxTQUFGLEVBQ04vSSxRQURNLENBQ0csdUJBREgsRUFFTitJLE1BRk0sQ0FFQyxLQUFLakcsV0FBTCxDQUFpQi9DLE9BRmxCLEVBR05nSixNQUhNLENBR0MsS0FBS2dRLElBSE4sRUFJTmhRLE1BSk0sQ0FJQyxLQUFLdVIsU0FBTCxDQUFldmEsT0FKaEIsQ0FEVDtBQU1BOztBQUVEOzs7Ozs7NEJBR1M0RixDLEVBQUc7QUFDWEEsTUFBRTJGLGNBQUY7QUFDQTs7O2dDQUVZM0YsQyxFQUFHO0FBQ2YsUUFBSUEsRUFBRXlGLEtBQUYsS0FBWSxDQUFoQixFQUFtQjtBQUNuQixRQUFJLEtBQUt5TixJQUFULEVBQWU7QUFDZixRQUFNalcsUUFBUSxLQUFLRCxNQUFMLENBQVlDLEtBQTFCO0FBQ0EsU0FBS3lYLElBQUwsQ0FBVSxFQUFFNUgsU0FBVSxLQUFLd0csV0FBTCxDQUFpQnRULEVBQUU4VSxLQUFuQixDQUFaLEVBQVY7QUFDQTdYLFVBQU1FLFdBQU4sR0FBcUJGLE1BQU0yQyxRQUFOLEdBQWlCLEtBQUswVCxXQUFMLENBQWlCdFQsRUFBRThVLEtBQW5CLENBQXRDO0FBQ0E7OztrQ0FFYzlVLEMsRUFBRztBQUNqQixRQUFNSixXQUFXLEtBQUs1QyxNQUFMLENBQVlDLEtBQVosQ0FBa0IyQyxRQUFuQztBQUNBLFFBQUc2VSxNQUFNN1UsUUFBTixDQUFILEVBQW9CO0FBQ25CO0FBQ0E7QUFDRCxRQUFJLEtBQUs1QyxNQUFMLENBQVlRLFFBQWhCLEVBQTBCO0FBQ3pCLFVBQUsyWCxtQkFBTCxDQUF5QixLQUFLblksTUFBTCxDQUFZUSxRQUFaLENBQXFCeUksS0FBOUM7QUFDQTtBQUNEOzs7dUNBRW1CQSxLLEVBQU87QUFDMUIsUUFBRyxLQUFLekksUUFBTCxJQUFpQixJQUFqQixJQUF5QixLQUFLQSxRQUFMLENBQWNpRixNQUFkLEtBQXlCLENBQXJELEVBQXdEO0FBQ3ZELFVBQUtqRixRQUFMLEdBQWdCLEtBQUs0WCxtQkFBTCxDQUF5Qm5QLEtBQXpCLENBQWhCO0FBQ0EsVUFBS21OLElBQUwsQ0FBVWhRLE1BQVYsQ0FBaUIsS0FBSzVGLFFBQXRCO0FBQ0EsS0FIRCxNQUdPO0FBQ04sVUFBS0EsUUFBTCxDQUFjcUcsSUFBZCxDQUFtQixLQUFLdVIsbUJBQUwsQ0FBeUJuUCxLQUF6QixDQUFuQjtBQUNBO0FBQ0Q7Ozt1Q0FFbUJBLEssRUFBTztBQUMxQixRQUFNckcsV0FBVyxLQUFLNUMsTUFBTCxDQUFZQyxLQUFaLENBQWtCMkMsUUFBbkM7QUFDQSxRQUFJbkYsU0FBUyxzQkFBRSxTQUFGLEVBQWFKLFFBQWIsQ0FBc0IsNEJBQXRCLENBQWI7QUFDQTRMLFVBQU10TCxPQUFOLENBQWMsVUFBQ2dWLE9BQUQsRUFBYTtBQUMxQixTQUFNbE4sU0FBVWtOLFFBQVE3TSxHQUFSLEdBQWM2TSxRQUFROU0sS0FBdEM7QUFDQSxTQUFNL0gsT0FBTyxzQkFBRSxTQUFGLEVBQ1hULFFBRFcsQ0FDRiwyQkFERSxFQUVYMkksR0FGVyxDQUVQO0FBQ0pSLGFBQVFDLFNBQVM3QyxRQUFULEdBQW9CLEdBQXBCLEdBQTBCLEdBRDlCO0FBRUp5VixZQUFPMUYsUUFBUTlNLEtBQVIsR0FBZ0JqRCxRQUFoQixHQUEyQixHQUEzQixHQUFpQztBQUZwQyxNQUZPLENBQWI7QUFNQW5GLFlBQU8ySSxNQUFQLENBQWN0SSxJQUFkO0FBQ0EsS0FURDtBQVVBLFdBQU9MLE1BQVA7QUFDQTs7OytCQUVZOFosQyxFQUFHO0FBQ2YsV0FBTyxDQUFDQSxJQUFJLEtBQUtuQixJQUFMLENBQVVwSyxNQUFWLEdBQW1CcU0sSUFBeEIsSUFBZ0MsS0FBS2pDLElBQUwsQ0FBVTVRLEtBQVYsRUFBdkM7QUFDQTs7QUFFRDs7Ozs7Ozs4QkFJZ0M7QUFBQSxRQUF4QnNLLE9BQXdCLFFBQXhCQSxPQUF3QjtBQUFBLFFBQWYzUCxXQUFlLFFBQWZBLFdBQWU7O0FBQy9CLFFBQUdBLGdCQUFnQnlFLFNBQW5CLEVBQThCO0FBQzdCekUsbUJBQWMsS0FBS0gsTUFBTCxDQUFZQyxLQUFaLENBQWtCMkMsUUFBbEIsR0FBNkJrTixPQUEzQztBQUNBOztBQUVELFFBQUcySCxNQUFNdFgsV0FBTixDQUFILEVBQXVCO0FBQ3ZCMlAsY0FBVUEsVUFBVSxHQUFwQjtBQUNBLFNBQUtxRyxNQUFMLENBQVkvWSxPQUFaLENBQW9CNEksR0FBcEIsQ0FBd0IsTUFBeEIsRUFBZ0M4SixVQUFVLEdBQTFDO0FBQ0EsU0FBSzhILFlBQUwsQ0FBa0I1UixHQUFsQixDQUFzQixPQUF0QixFQUErQjhKLFVBQVUsR0FBekM7QUFDQSxTQUFLM1AsV0FBTCxDQUFpQnlRLElBQWpCLEdBQXdCLDBCQUFjelEsV0FBZCxDQUF4QjtBQUNBOzs7a0NBRWM7QUFDZCxRQUFNRixRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQSxTQUFLMFgsU0FBTCxDQUFlL0csSUFBZixHQUFzQiwwQkFBYyxDQUFkLEVBQWlCbkIsS0FBS0MsS0FBTCxDQUFXelAsTUFBTTJDLFFBQU4sR0FBaUIsSUFBNUIsSUFBb0MsQ0FBckQsQ0FBdEI7QUFDQSxRQUFNNEMsUUFBUSxLQUFLbVMsU0FBTCxDQUFldmEsT0FBZixDQUF1Qm9JLEtBQXZCLEVBQWQ7O0FBRUEsU0FBS21TLFNBQUwsQ0FBZS9HLElBQWYsR0FBc0IsMEJBQWMzUSxNQUFNMkMsUUFBcEIsQ0FBdEI7QUFDQSxTQUFLekMsV0FBTCxDQUFpQnlRLElBQWpCLEdBQXdCLDBCQUFjM1EsTUFBTUUsV0FBTixJQUFxQixDQUFuQyxDQUF4QjtBQUNBLFNBQUtBLFdBQUwsQ0FBaUIvQyxPQUFqQixDQUF5QjRJLEdBQXpCLENBQTZCO0FBQzVCUjtBQUQ0QixLQUE3QjtBQUdBOztBQUVEOzs7Ozs7a0NBR2V4QyxDLEVBQUc7QUFDakIsU0FBS3NWLFlBQUw7QUFDQSxRQUFJLEtBQUt0WSxNQUFMLENBQVlRLFFBQWhCLEVBQTBCO0FBQ3pCLFVBQUsyWCxtQkFBTCxDQUF5QixLQUFLblksTUFBTCxDQUFZUSxRQUFaLENBQXFCeUksS0FBOUM7QUFDQTtBQUNEOzs7c0NBRW1CO0FBQUE7O0FBQ25CWSxrQkFBYyxLQUFLME8sbUJBQW5CO0FBQ0EsUUFBSXRZLFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUF4QjtBQUNBLFFBQUl1WSxvQkFBb0IsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzdCLFNBQU1DLE1BQU0sQ0FBWjtBQUNBLFNBQU1DLFFBQVEsQ0FBZDtBQUNBLFNBQUlqYixTQUFTLHNCQUFFLEVBQUYsQ0FBYjtBQUNBd0MsV0FBTTBZLE1BQU4sQ0FBYWhiLE9BQWIsQ0FBcUIsZ0JBQVE7QUFDNUIsVUFBSWliLFVBQVUsc0JBQUUsU0FBRixFQUFhdmIsUUFBYixDQUFzQixlQUF0QixDQUFkO0FBQ0F1YixjQUFRNVMsR0FBUixDQUFZO0FBQ1hxUyxhQUFPdmEsS0FBSzRhLEtBQUwsSUFBYyxHQUFkLEdBQW9CLEdBRGhCO0FBRVhsVCxjQUFRLENBQUMxSCxLQUFLMmEsR0FBTCxJQUFZM2EsS0FBSzRhLEtBQUwsQ0FBYixJQUE0QixHQUE1QixHQUFrQztBQUYvQixPQUFaO0FBSUFqYixlQUFTQSxPQUFPb2IsR0FBUCxDQUFXRCxPQUFYLENBQVQ7QUFDQSxNQVBEO0FBUUEsWUFBS0UsUUFBTCxDQUFjalMsSUFBZCxDQUFtQnBKLE1BQW5CO0FBQ0EsU0FBSXdDLE1BQU0wWSxNQUFOLENBQWFsVCxNQUFiLElBQXdCLElBQUl4RixNQUFNOFksVUFBWCxJQUEwQixJQUFyRCxFQUEyRDtBQUMxRGxQLG9CQUFjLE9BQUswTyxtQkFBbkI7QUFDQTtBQUNELEtBaEJEO0FBaUJBLFNBQUtBLG1CQUFMLEdBQTJCek8sWUFBWTBPLGlCQUFaLEVBQStCLEdBQS9CLENBQTNCO0FBQ0E7O0FBRUQ7Ozs7Ozt1Q0FHcUI7QUFDcEIsU0FBS0YsWUFBTDtBQUNBLFFBQUksS0FBS3RZLE1BQUwsQ0FBWVEsUUFBaEIsRUFBMEI7QUFDekIsVUFBSzJYLG1CQUFMLENBQXlCLEtBQUtuWSxNQUFMLENBQVlRLFFBQVosQ0FBcUJ5SSxLQUE5QztBQUNBO0FBQ0Q7Ozs7OztBQUlGLHFCQUFVaUMsaUJBQVYsQ0FBNEIsaUJBQTVCLEVBQStDOEwsZUFBL0M7QUFDQSxtQkFBUTdaLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0M2WixlQUFwQzttQkFDZUEsZTs7Ozs7O0FDelJmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0tBS01nQyxXOzs7QUFDTCx1QkFBYWhaLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFMEgsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QnhCLGVBQVk7QUFEVSxJQUFiLEVBRVBsRyxPQUZPLENBQVY7QUFEZ0Msb0hBSTFCSixNQUowQixFQUlsQkksT0FKa0I7QUFLaEM7O0FBRUQ7Ozs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQTs7QUFFRDs7Ozs7O21DQUdnQjtBQUNmLDZCQUF1QixLQUFLQSxPQUFMLENBQWFrRyxTQUFwQztBQUNBOztBQUdEOzs7Ozs7OztxQkFNVW1CLEssRUFBTztBQUNoQixTQUFLd1IsS0FBTCxHQUFheFIsS0FBYjtBQUNBLFNBQUtySyxPQUFMLENBQWF5SixJQUFiLENBQWtCWSxLQUFsQjtBQUNBLEk7dUJBRVc7QUFDWCxXQUFPLEtBQUt3UixLQUFaO0FBQ0E7Ozs7OztBQUdGLHFCQUFVL04saUJBQVYsQ0FBNEIsYUFBNUIsRUFBMkM4TixXQUEzQztBQUNBLG1CQUFRN2IsZUFBUixDQUF3QixNQUF4QixFQUFnQzZiLFdBQWhDO21CQUNlQSxXOzs7Ozs7QUN2RGY7QUFDQTs7Ozs7Ozs7OztBQUlBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0tBTU1FLGM7OztBQUVMLDBCQUFZbFosTUFBWixFQUFvQkksT0FBcEIsRUFBNkI7QUFBQTs7QUFBQSwrSEFDdEJKLE1BRHNCLEVBQ2RJLE9BRGM7O0FBRzVCLFNBQUtKLE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxVQUFmLEVBQTJCLE1BQUs0VyxNQUFMLENBQVkxVixJQUFaLE9BQTNCO0FBQ0EsU0FBS3pELE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLE1BQUs0VyxNQUFMLENBQVkxVixJQUFaLE9BQXpCO0FBQ0EsU0FBS3pELE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxXQUFmLEVBQTRCLE1BQUs0VyxNQUFMLENBQVkxVixJQUFaLE9BQTVCO0FBTDRCO0FBTTVCOztBQUVEOzs7Ozs7O21DQUdnQjtBQUNmLFNBQUsyVixLQUFMLEdBQWEscUJBQVMsS0FBVCxFQUFnQjtBQUM1QjlTLGdCQUFZO0FBRGdCLEtBQWhCLENBQWI7O0FBSUEsV0FBTyxLQUFLbEosT0FBTCxHQUFlLHFCQUFTLEtBQVQsRUFBZ0I7QUFDckNrSixnQkFBWTtBQUR5QixLQUFoQixFQUVuQkYsTUFGbUIsQ0FFWixLQUFLZ1QsS0FGTyxDQUF0QjtBQUdBOzs7NEJBR1E7QUFDUixRQUFNTixXQUFXLEtBQUs5WSxNQUFMLENBQVlDLEtBQVosQ0FBa0I2WSxRQUFuQztBQUNBLFFBQU1sVyxXQUFXLEtBQUs1QyxNQUFMLENBQVlDLEtBQVosQ0FBa0IyQyxRQUFuQztBQUNBLFFBQUdrVyxZQUFZLElBQWYsRUFBcUI7O0FBRXJCLFFBQUloVCxNQUFNLENBQVY7QUFDQSxRQUFJZ1QsU0FBU3JULE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDeEJLLFdBQU1nVCxTQUFTaFQsR0FBVCxDQUFhZ1QsU0FBU3JULE1BQVQsR0FBa0IsQ0FBL0IsQ0FBTjtBQUNBOztBQUVELFFBQUlELFFBQVEsQ0FBWjtBQUNBLFFBQUk1QyxXQUFXLENBQWYsRUFBa0I7QUFDakI0QyxhQUFRLHVCQUFXTSxHQUFYLEVBQWdCbEQsUUFBaEIsSUFBNEIsR0FBNUIsR0FBa0MsR0FBMUM7QUFDQTtBQUNELFNBQUt3VyxLQUFMLENBQVdwVCxHQUFYLENBQWUsRUFBRVIsWUFBRixFQUFmO0FBQ0E7Ozs7OztBQUVGLHFCQUFVMEYsaUJBQVYsQ0FBNEIsZ0JBQTVCLEVBQThDZ08sY0FBOUM7bUJBQ2VBLGM7Ozs7Ozs7Ozs7Ozs7O0FDeERmOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNRyxNOzs7QUFDTCxrQkFBWXJaLE1BQVosRUFBb0JJLE9BQXBCLEVBQTZCO0FBQUE7O0FBRTVCQSxhQUFVLGlCQUFFMEgsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0Qm9PLFVBQU8sS0FEZTtBQUV0QjVQLGVBQVk7QUFGVSxJQUFiLEVBR1BsRyxPQUhPLENBQVY7O0FBRjRCLCtHQU90QkosTUFQc0IsRUFPZEksT0FQYzs7QUFRNUIsU0FBS2hELE9BQUwsQ0FBYW1GLEVBQWIsQ0FBZ0IsV0FBaEIsRUFBNkIsTUFBSytXLFlBQUwsQ0FBa0I3VixJQUFsQixPQUE3Qjs7QUFFQSx5QkFBRU0sUUFBRixFQUFZeEIsRUFBWixDQUFlOztBQUVka1UsZUFBWSxtQkFBQ3pULENBQUQsRUFBTztBQUNsQixTQUFJLENBQUMsTUFBS2tULElBQVYsRUFBZ0I7QUFDaEIsV0FBSzlZLE9BQUwsQ0FBYTZFLE9BQWIsQ0FBcUIsb0JBQXJCLEVBQTJDLEVBQUVzVixHQUFJdlUsRUFBRThVLEtBQVIsRUFBM0M7QUFDQSxLQUxhOztBQU9kcEIsYUFBVSxpQkFBQzFULENBQUQsRUFBTztBQUNoQixTQUFJLENBQUMsTUFBS2tULElBQVYsRUFBZ0I7QUFDaEIsV0FBS0EsSUFBTCxHQUFZLEtBQVo7QUFDQSxXQUFLc0IsVUFBTCxDQUFnQjVNLElBQWhCO0FBQ0EsV0FBS3hOLE9BQUwsQ0FBYTZFLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDLEVBQUVzVixHQUFJdlUsRUFBRThVLEtBQVIsRUFBekM7QUFDQTtBQVphLElBQWY7QUFWNEI7QUF3QjVCOzs7O2dDQVdZOVUsQyxFQUFHO0FBQ2YsUUFBSUEsRUFBRXlGLEtBQUYsS0FBWSxDQUFoQixFQUFtQjtBQUNuQnpGLE1BQUUyRixjQUFGO0FBQ0EsUUFBRyxLQUFLdkksT0FBTCxDQUFhOFYsSUFBaEIsRUFBc0I7QUFDckIsVUFBS0EsSUFBTCxHQUFZLElBQVo7QUFDQTtBQUNELFNBQUs5WSxPQUFMLENBQWE2RSxPQUFiLENBQXFCLG9CQUFyQjtBQUNBOzs7bUNBRWU7QUFDZjtBQUNBLFNBQUt1VixVQUFMLEdBQWtCLHNCQUFFLFNBQUYsRUFDaEJuYSxRQURnQixDQUNQLE1BRE8sRUFFaEJ1TixJQUZnQixFQUFsQjs7QUFJQSxXQUFPLEtBQUt4TixPQUFMLEdBQWUsc0JBQUUsU0FBRixFQUNwQkMsUUFEb0Isa0JBQ0ksS0FBSytDLE9BQUwsQ0FBYWtHLFNBRGpCLEVBRXBCRixNQUZvQixDQUViLEtBQUtvUixVQUZRLENBQXRCO0FBSUE7OztxQkE1QlEvUCxLLEVBQU87QUFDZixTQUFLOFIsS0FBTCxHQUFhOVIsS0FBYjtBQUNBLFNBQUtySyxPQUFMLENBQWEyTixXQUFiLENBQXlCLG1CQUF6QixFQUE4Q3RELEtBQTlDO0FBQ0EsSTt1QkFFVTtBQUNWLFdBQU8sS0FBSzhSLEtBQVo7QUFDQTs7Ozs7O0FBd0JGLHFCQUFVck8saUJBQVYsQ0FBNEIsUUFBNUIsRUFBc0NtTyxNQUF0QzttQkFDZUEsTTs7Ozs7O0FDOURmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztLQU9NRyxjOzs7QUFDTCwwQkFBYXhaLE1BQWIsRUFBaUM7QUFBQSxPQUFaSSxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2hDQSxhQUFVLGlCQUFFMEgsTUFBRixDQUFTLEVBQVQsRUFBYTtBQUN0QnpCLGNBQVcsU0FEVztBQUV0QkMsZUFBWSxTQUZVO0FBR3RCcEMsVUFBTyxTQUhlO0FBSXRCNEMsV0FBUSx3QkFKYztBQUt0QndGLGFBQVU7QUFMWSxJQUFiLEVBTVBsTSxPQU5PLENBQVY7O0FBRGdDLCtIQVExQkosTUFSMEIsRUFRbEJJLE9BUmtCOztBQVVoQyxTQUFLSixNQUFMLENBQVl1QyxFQUFaLENBQWUsY0FBZixFQUErQixNQUFLa1gsZUFBTCxDQUFxQmhXLElBQXJCLE9BQS9CO0FBVmdDO0FBV2hDOzs7OzZCQUVTVCxDLEVBQUdqQixJLEVBQU07QUFDbEIsOEhBQWdCaUIsQ0FBaEI7QUFDQSxTQUFLaEQsTUFBTCxDQUFZaUMsT0FBWixDQUFvQixnQkFBcEIsRUFBc0M7QUFDckNpUixjQUFVblIsS0FBS21SLE9BRHNCO0FBRXJDM08sV0FBTyxLQUFLdkUsTUFBTCxDQUFZdUU7QUFGa0IsS0FBdEM7QUFJQTs7O21DQUVldkIsQyxFQUFHO0FBQ2xCLFNBQUs1QyxPQUFMLENBQWFrTSxPQUFiLEdBQXVCLEtBQUtBLE9BQUwsR0FBZSxLQUF0QztBQUNBLFNBQUs0RyxPQUFMLEdBQWUsSUFBZjtBQUNBOzs7Ozs7QUFHRixxQkFBVWhJLGlCQUFWLENBQTRCLGdCQUE1QixFQUE4Q3NPLGNBQTlDO0FBQ0EsbUJBQVFyYyxlQUFSLENBQXdCLFNBQXhCLEVBQW1DcWMsY0FBbkM7bUJBQ2VBLGM7Ozs7OztBQy9DZjtBQUNBOzs7Ozs7Ozs7Ozs7QUFLQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0tBTU1FLGU7OztBQUVMLDJCQUFZMVosTUFBWixFQUFnQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxpSUFDekJKLE1BRHlCLEVBQ2pCSSxPQURpQjs7QUFFL0IsU0FBSzhTLE9BQUwsR0FBZSxNQUFLOVMsT0FBTCxDQUFhOFMsT0FBYixJQUF3QixLQUF2QztBQUNBLFNBQUs5VixPQUFMLENBQWFtRixFQUFiLENBQWdCLGtCQUFoQixFQUFvQyxNQUFLb1gsU0FBTCxDQUFlbFcsSUFBZixPQUFwQztBQUgrQjtBQUkvQjs7QUFHRDs7Ozs7Ozs7Ozs7QUF3QkE7OzsyQkFHU1QsQyxFQUFHO0FBQ1gsOEhBQWNBLENBQWQ7QUFDQSxTQUFLa1EsT0FBTCxHQUFlLENBQUMsS0FBS0EsT0FBckI7QUFDQTs7QUFFRDs7Ozs7Ozs7OzZCQU1VbFEsQyxFQUFHakIsSSxFQUFNLENBRWxCOztBQUdEOzs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQTs7O3FCQTNDWXNGLEcsRUFBSztBQUNqQixRQUFJLEtBQUtpRixPQUFULEVBQWtCO0FBQ2pCO0FBQ0E7QUFDRGpGLFVBQU0sQ0FBQyxDQUFDQSxHQUFSO0FBQ0EsU0FBS3VTLFFBQUwsR0FBZ0J2UyxHQUFoQjtBQUNBLFNBQUtqSyxPQUFMLENBQWEyTixXQUFiLENBQXlCLDJCQUF6QixFQUFzRDFELEdBQXREO0FBQ0EsU0FBS2pLLE9BQUwsQ0FBYTZFLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDLEVBQUVpUixTQUFVN0wsR0FBWixFQUF6QztBQUNBOztBQUVEOzs7Ozs7dUJBS2U7QUFDZCxXQUFPLEtBQUt1UyxRQUFaO0FBQ0E7Ozs7OztBQThCRixxQkFBVTFPLGlCQUFWLENBQTRCLGlCQUE1QixFQUErQ3dPLGVBQS9DO0FBQ0EsbUJBQVF2YyxlQUFSLENBQXdCLFVBQXhCLEVBQW9DdWMsZUFBcEM7bUJBQ2VBLGU7Ozs7OztBQzlFZjtBQUNBOzs7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7OztLQUtNRyxpQjs7O0FBQ0wsNkJBQWE3WixNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRTBILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEJ6QixjQUFXLFlBRFc7QUFFdEJDLGVBQVksWUFGVTtBQUd0QlEsV0FBUSxxQ0FIYztBQUl0QjVDLFVBQU87QUFKZSxJQUFiLEVBS1A5RCxPQUxPLENBQVY7QUFEZ0MsZ0lBTzFCSixNQVAwQixFQU9sQkksT0FQa0I7QUFRaEM7O0FBRUQ7Ozs7Ozs7MkJBR1E0QyxDLEVBQUc7QUFDVixrSUFBY0EsQ0FBZDtBQUNBLFNBQUtoRCxNQUFMLENBQVlZLGdCQUFaO0FBQ0E7Ozs7OztBQUdGLHFCQUFVc0ssaUJBQVYsQ0FBNEIsbUJBQTVCLEVBQWlEMk8saUJBQWpEO0FBQ0EsbUJBQVExYyxlQUFSLENBQXdCLFlBQXhCLEVBQXNDMGMsaUJBQXRDO21CQUNlQSxpQjs7Ozs7O0FDcENmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7S0FTTUMsVzs7O0FBQ0wsdUJBQWE5WixNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRTBILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEJ4QixlQUFZO0FBRFUsSUFBYixFQUVQbEcsT0FGTyxDQUFWOztBQURnQyx5SEFJMUJKLE1BSjBCLEVBSWxCSSxPQUprQjs7QUFNaEMsU0FBS0osTUFBTCxDQUFZdUMsRUFBWixDQUFlLFlBQWYsRUFBNkIsWUFBTTtBQUNsQyxVQUFLNFcsTUFBTDtBQUNBLElBRkQ7QUFOZ0M7QUFTaEM7O0FBRUQ7Ozs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQSxRQUFNbFosUUFBUSxLQUFLRCxNQUFMLENBQVlDLEtBQTFCOztBQUVBLFNBQUs4WixXQUFMLEdBQW1CLHNCQUFZLEtBQUsvWixNQUFqQixFQUF5QjtBQUMzQ3NHLGdCQUFZLFdBRCtCO0FBRTNDcEMsV0FBTyxXQUZvQztBQUczQ21DLGVBQVcsVUFIZ0M7QUFJM0M0SyxpQkFBYSxLQUFLN1EsT0FBTCxDQUFhNlEsVUFKaUI7QUFLM0NuSyxZQUFRLGlDQUxtQztBQU0zQ3VHLGNBQVUsaUJBQVNySyxDQUFULEVBQVk7QUFDckIvQyxZQUFNK1osWUFBTjtBQUNBO0FBUjBDLEtBQXpCLENBQW5COztBQVdBLFNBQUtDLFNBQUwsR0FBaUIsc0JBQVksS0FBS2phLE1BQWpCLEVBQXlCO0FBQ3pDc0csZ0JBQVksU0FENkI7QUFFekNwQyxXQUFPLFNBRmtDO0FBR3pDbUMsZUFBVyxTQUg4QjtBQUl6QzRLLGlCQUFhLEtBQUs3USxPQUFMLENBQWE2USxVQUplO0FBS3pDbkssWUFBUSxpQ0FMaUM7QUFNekN1RyxjQUFVLGlCQUFTckssQ0FBVCxFQUFZO0FBQ3JCL0MsWUFBTWlhLFlBQU47QUFDQTtBQVJ3QyxLQUF6QixDQUFqQjs7QUFXQSxTQUFLQyxXQUFMLEdBQW1CLDBCQUFnQixLQUFLbmEsTUFBckIsRUFBNkI7QUFDL0NzRyxnQkFBWSxjQURtQztBQUUvQytHLGNBQVUsaUJBQVNySyxDQUFULEVBQVk7QUFDckIvQyxZQUFNdkIsSUFBTixHQUFhLEtBQUtzQixNQUFMLENBQVlJLE9BQVosQ0FBb0IxQixJQUFwQixDQUF5QkksT0FBdEM7QUFDQTtBQUo4QyxLQUE3QixDQUFuQjs7QUFPQSxTQUFLMUIsT0FBTCxDQUNFZ0osTUFERixDQUNTLEtBQUsyVCxXQUFMLENBQWlCM2MsT0FEMUIsRUFFRWdKLE1BRkYsQ0FFUyxLQUFLK1QsV0FBTCxDQUFpQi9jLE9BRjFCLEVBR0VnSixNQUhGLENBR1MsS0FBSzZULFNBQUwsQ0FBZTdjLE9BSHhCO0FBSUE7O0FBRUQ7Ozs7OzttQ0FHZ0I7QUFDZixXQUFPLEtBQUtnRCxPQUFMLENBQWFrRyxTQUFwQjtBQUNBOztBQUVEOzs7Ozs7b0NBR2lCO0FBQ2hCLFNBQUs2UyxNQUFMO0FBQ0E7O0FBRUQ7Ozs7Ozs0QkFHU25XLEMsRUFBRztBQUNYQSxNQUFFMkYsY0FBRjtBQUNBOzs7MEJBRU1sQixLLEVBQU87QUFDYixRQUFNeEgsUUFBUSxLQUFLRCxNQUFMLENBQVlDLEtBQTFCOztBQUVBd0gsWUFBUUEsU0FBU3hILE1BQU12QixJQUF2QjtBQUNBK0ksWUFBUTJTLFdBQVczUyxLQUFYLEVBQ040UyxPQURNLENBQ0UsQ0FERixFQUVObEgsUUFGTSxHQUdObUgsT0FITSxDQUdFLElBSEYsRUFHUSxHQUhSLENBQVI7QUFJQSxTQUFLSCxXQUFMLENBQWlCdkosSUFBakIsR0FBd0IsTUFBTW5KLEtBQTlCOztBQUVBLFFBQUcsS0FBSzZFLE9BQVIsRUFBaUI7O0FBRWpCLFFBQUdyTSxNQUFNdkIsSUFBTixJQUFjdUIsTUFBTXNhLE9BQXZCLEVBQWdDO0FBQy9CLFVBQUtSLFdBQUwsQ0FBaUJ6TixPQUFqQixHQUEyQixJQUEzQjtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUt5TixXQUFMLENBQWlCek4sT0FBakIsR0FBMkIsS0FBM0I7QUFDQTs7QUFFRCxRQUFHck0sTUFBTXZCLElBQU4sSUFBY3VCLE1BQU11YSxPQUF2QixFQUFnQztBQUMvQixVQUFLUCxTQUFMLENBQWUzTixPQUFmLEdBQXlCLElBQXpCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBSzJOLFNBQUwsQ0FBZTNOLE9BQWYsR0FBeUIsS0FBekI7QUFDQTtBQUNEOzs7MEJBUU87QUFDUCxRQUFJNU4sT0FBTyxpQkFBTytiLEdBQVAsQ0FBVyxNQUFYLEVBQW1CLEtBQUt6YSxNQUFMLENBQVlJLE9BQVosQ0FBb0IxQixJQUFwQixDQUF5QkksT0FBNUMsQ0FBWDtBQUNBLFNBQUt3QixJQUFMLENBQVU1QixJQUFWO0FBQ0E7OztxQkFUVytJLEssRUFBTztBQUNsQixTQUFLa0csUUFBTCxHQUFnQmxHLEtBQWhCO0FBQ0EsU0FBS3NTLFdBQUwsQ0FBaUJ6TixPQUFqQixHQUEyQjdFLEtBQTNCO0FBQ0EsU0FBS3dTLFNBQUwsQ0FBZTNOLE9BQWYsR0FBeUI3RSxLQUF6QjtBQUNBOzs7Ozs7QUFTRixxQkFBVXlELGlCQUFWLENBQTRCLGFBQTVCLEVBQTJDNE8sV0FBM0M7QUFDQSxtQkFBUTNjLGVBQVIsQ0FBd0IsTUFBeEIsRUFBZ0MyYyxXQUFoQzttQkFDZUEsVzs7Ozs7O0FDdklmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0tBTU1ZLGU7OztBQUNMLDJCQUFhMWEsTUFBYixFQUFpQztBQUFBLE9BQVpJLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDaENBLGFBQVUsaUJBQUUwSCxNQUFGLENBQVMsRUFBVCxFQUFhO0FBQ3RCekIsY0FBVyxNQURXO0FBRXRCQyxlQUFZLFVBRlU7QUFHdEJwQyxVQUFPLFVBSGU7QUFJdEI0Qyw2R0FBNkI5RyxPQUFPSSxPQUFQLENBQWVyQixRQUFmLENBQXdCSixJQUF4QixDQUE2Qk0sTUFBMUQsMENBSnNCO0FBS3RCcU4sYUFBVTtBQUxZLElBQWIsRUFNUGxNLE9BTk8sQ0FBVjs7QUFEZ0MsaUlBUTFCSixNQVIwQixFQVFsQkksT0FSa0I7O0FBVWhDLFNBQUtKLE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxXQUFmLEVBQTRCO0FBQUEsV0FBTSxNQUFLK0osT0FBTCxHQUFlLEtBQXJCO0FBQUEsSUFBNUI7QUFWZ0M7QUFXaEM7O0FBRUQ7Ozs7Ozs7MkJBR1F0SixDLEVBQUc7QUFDViw4SEFBY0EsQ0FBZDtBQUNBLFNBQUtoRCxNQUFMLENBQVlDLEtBQVosQ0FBa0JFLFdBQWxCLElBQWlDLEtBQUtILE1BQUwsQ0FBWUksT0FBWixDQUFvQnJCLFFBQXBCLENBQTZCSixJQUE3QixDQUFrQ00sTUFBbkU7QUFDQSxTQUFLZSxNQUFMLENBQVlLLFVBQVosQ0FBdUJDLElBQXZCLENBQTRCLE1BQTVCO0FBQ0E7Ozs7OztBQUdGLHFCQUFVNEssaUJBQVYsQ0FBNEIsaUJBQTVCLEVBQStDd1AsZUFBL0M7QUFDQSxtQkFBUXZkLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0N1ZCxlQUFwQzttQkFDZUEsZTs7Ozs7O0FDM0NmO0FBQ0E7Ozs7Ozs7Ozs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7O0tBS01DLGE7OztBQUNMO0FBQ0EseUJBQWEzYSxNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRTBILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEI1RCxVQUFPLFFBRGU7QUFFdEJtQyxjQUFXLFVBRlc7QUFHdEJTLFdBQVEsVUFIYztBQUl0QlIsZUFBWSxnQkFKVTtBQUt0QmdHLGFBQVU7QUFMWSxJQUFiLEVBTVBsTSxPQU5PLENBQVY7O0FBRGdDLDZIQVExQkosTUFSMEIsRUFRbEJJLE9BUmtCOztBQVVoQyxTQUFLSixNQUFMLENBQVl1QyxFQUFaLENBQWUsU0FBZixFQUEwQixNQUFLNFcsTUFBTCxDQUFZMVYsSUFBWixPQUExQjtBQUNBLFNBQUt6RCxNQUFMLENBQVl1QyxFQUFaLENBQWUsZUFBZixFQUFnQyxNQUFLNFcsTUFBTCxDQUFZMVYsSUFBWixPQUFoQztBQVhnQztBQVloQzs7OzsrQkFFV1QsQyxFQUFHO0FBQ2RBLE1BQUUyRixjQUFGOztBQUVBLFFBQU03SyxPQUFPLHNCQUFFa0YsRUFBRTRQLE1BQUosQ0FBYjtBQUNBLFFBQU0zUyxRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBMUI7QUFDQUEsVUFBTTJhLGVBQU4sR0FBd0I5YyxLQUFLaUUsSUFBTCxDQUFVLE1BQVYsQ0FBeEI7O0FBRUEsU0FBS3lVLGVBQUwsQ0FBcUI1TCxJQUFyQjtBQUVBOzs7a0NBRWM1SCxDLEVBQUdqQixJLEVBQU07QUFDdkIsU0FBS29YLE1BQUw7QUFDQTs7OzZCQUVTO0FBQ1QsV0FBTyxLQUFLblosTUFBTCxDQUFZQyxLQUFaLENBQWtCNGEseUJBQWxCLEVBQVA7QUFDQTs7O3FDQUVpQjtBQUNqQixXQUFPLEtBQUs3YSxNQUFMLENBQVlDLEtBQVosQ0FBa0IyYSxlQUF6QjtBQUNBOzs7Ozs7QUFHRixxQkFBVTFQLGlCQUFWLENBQTRCLGVBQTVCLEVBQTZDeVAsYUFBN0M7QUFDQSxtQkFBUXhkLGVBQVIsQ0FBd0IsUUFBeEIsRUFBa0N3ZCxhQUFsQzttQkFDZUEsYTs7Ozs7O0FDMURmO0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7S0FLTUcsZ0I7OztBQUVMLDRCQUFZOWEsTUFBWixFQUFvQkksT0FBcEIsRUFBNkI7QUFBQTs7QUFBQSxtSUFDdEJKLE1BRHNCLEVBQ2RJLE9BRGM7O0FBRTVCLFNBQUsyYSxPQUFMLEdBQWUsSUFBZjtBQUNBOzs7Ozs7QUFNQSxTQUFLQyxJQUFMLEdBQVksRUFBWjtBQVQ0QjtBQVU1Qjs7QUFFRDs7Ozs7Ozs7Ozs4QkFNV3BkLEssRUFBTztBQUNqQixXQUFPLEtBQUtvZCxJQUFMLENBQVVwZCxLQUFWLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O29DQU1pQkEsSyxFQUFPO0FBQ3ZCLFFBQUksS0FBSzBLLE1BQVQsRUFBaUI7QUFDaEIsVUFBS0EsTUFBTCxDQUFZNUYsV0FBWixDQUF3QixpQ0FBeEI7QUFDQTtBQUNELFNBQUtxWSxPQUFMLEdBQWUsS0FBS0MsSUFBTCxDQUFVcGQsS0FBVixFQUFpQlAsUUFBakIsQ0FBMEIsaUNBQTFCLENBQWY7QUFDQSxXQUFPLEtBQUswZCxPQUFaO0FBQ0E7O0FBR0Q7Ozs7Ozs7Ozs7O0FBb0NBOzs7OzsyQkFLU0UsTyxFQUFTbFosSSxFQUFNO0FBQ3ZCLFFBQU1qRSxPQUFPLHNCQUFFLFNBQUYsRUFDWFQsUUFEVyxDQUNGLHlCQURFLEVBRVgwRSxJQUZXLENBRU5BLElBRk0sRUFHWGdFLElBSFcsQ0FHTixPQUhNLEVBR0doRSxLQUFLbVosT0FIUixFQUlYM1ksRUFKVyxDQUlSLE9BSlEsRUFJQyxLQUFLNFksV0FBTCxDQUFpQjFYLElBQWpCLENBQXNCLElBQXRCLENBSkQsRUFLWDJDLE1BTFcsQ0FLSjZVLE9BTEksQ0FBYjs7QUFPQSxTQUFLRCxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVdGQsTUFBVixDQUFpQkksSUFBakIsQ0FBWjs7QUFFQSxTQUFLMFksZUFBTCxDQUFxQnBRLE1BQXJCLENBQTRCdEksSUFBNUI7O0FBRUEsV0FBT0EsSUFBUDtBQUNBOztBQUVEOzs7Ozs7OzsrQkFLYWtGLEMsRUFBRztBQUNmLFNBQUtzRixNQUFMLEdBQWN0RixFQUFFb1ksYUFBaEI7QUFDQTs7QUFFRDs7Ozs7O21DQUdnQjtBQUNmO0FBQ0E7Ozs0QkFFUTtBQUFBOztBQUNSLFFBQU1yWixPQUFPLEtBQUttRCxPQUFMLEVBQWI7QUFDQSxRQUFNbVcsZUFBZSxLQUFLQyxlQUFMLEVBQXJCOztBQUVBLFFBQUd2WixRQUFRLElBQVIsSUFBZ0JBLEtBQUswRCxNQUFMLEtBQWdCLENBQW5DLEVBQXNDO0FBQ3JDLFVBQUs2RyxPQUFMLEdBQWUsSUFBZjtBQUNBO0FBQ0E7O0FBRUQsU0FBSzBPLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS3hFLGVBQUwsQ0FBcUIrRSxLQUFyQjs7QUFFQXhaLFNBQUtwRSxPQUFMLENBQWEsZ0JBQVE7QUFDcEIsU0FBTTZkLE9BQU8sT0FBS0MsT0FBTCxDQUFhM2QsS0FBS2dKLEtBQWxCLEVBQXlCaEosSUFBekIsQ0FBYjtBQUNBLFNBQUd1ZCxnQkFBZ0JBLGFBQWFuWCxJQUFiLEtBQXNCcEcsS0FBS29HLElBQTlDLEVBQW9EOztBQUVuRCxhQUFLb0UsTUFBTCxHQUFja1QsSUFBZDtBQUNBO0FBQ0QsS0FORDtBQU9BLFNBQUtsUCxPQUFMLEdBQWUsS0FBZjtBQUNBOzs7dUJBdEZhO0FBQUE7O0FBQ2IsUUFBSSxLQUFLeU8sT0FBTCxJQUFnQixLQUFLQSxPQUFMLENBQWF0VixNQUFiLEdBQXNCLENBQTFDLEVBQTZDO0FBQzVDLFlBQU8sS0FBS3NWLE9BQVo7QUFDQTtBQUNELFNBQUtDLElBQUwsQ0FBVXJkLE9BQVYsQ0FBa0IsZ0JBQVE7QUFDekIsU0FBSUcsS0FBS3VRLFFBQUwsQ0FBYyxpQ0FBZCxDQUFKLEVBQXNEO0FBQ3JELGFBQUswTSxPQUFMLEdBQWVqZCxJQUFmO0FBQ0E7QUFDRCxLQUpEO0FBS0EsV0FBTyxLQUFLaWQsT0FBWjtBQUNBOztBQUVEOzs7Ozs7O3FCQU1ZM2QsTyxFQUFTO0FBQ3BCLFFBQUksS0FBS2tMLE1BQVQsRUFBaUI7QUFDaEIsVUFBS0EsTUFBTCxDQUFZNUYsV0FBWixDQUF3QixpQ0FBeEI7QUFDQTtBQUNELFFBQUl0RixPQUFKLEVBQWE7QUFDWiwyQkFBRUEsT0FBRixFQUFXQyxRQUFYLENBQW9CLGlDQUFwQjtBQUNBO0FBQ0QsU0FBSzBkLE9BQUwsR0FBZTNkLE9BQWY7QUFDQSxXQUFPLEtBQUsyZCxPQUFaO0FBQ0E7Ozs7OztBQThERixxQkFBVTdQLGlCQUFWLENBQTRCLGtCQUE1QixFQUFnRDRQLGdCQUFoRDtBQUNBLG1CQUFRM2QsZUFBUixDQUF3QixXQUF4QixFQUFxQzJkLGdCQUFyQzttQkFDZUEsZ0I7Ozs7OztBQ3ZKZjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQU1BOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7S0FLTVksZTs7O0FBQ0wsMkJBQWExYixNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRTBILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEJ6QixjQUFXLGNBRFc7QUFFdEJTLFdBQVEsVUFGYztBQUd0QjVDLFVBQU8sVUFIZTtBQUl0Qm9DLGVBQVksa0JBSlU7QUFLdEJnRyxhQUFVO0FBTFksSUFBYixFQU1QbE0sT0FOTyxDQUFWOztBQURnQyxpSUFRMUJKLE1BUjBCLEVBUWxCSSxPQVJrQjs7QUFVaEMsU0FBS0osTUFBTCxDQUFZdUMsRUFBWixDQUFlLFNBQWYsRUFBMEIsTUFBSzRXLE1BQUwsQ0FBWTFWLElBQVosT0FBMUI7QUFDQSxTQUFLekQsTUFBTCxDQUFZdUMsRUFBWixDQUFlLGNBQWYsRUFBK0IsTUFBSzRXLE1BQUwsQ0FBWTFWLElBQVosT0FBL0I7QUFYZ0M7QUFZaEM7Ozs7MkJBRVFULEMsRUFBRztBQUNYLDhIQUFjQSxDQUFkO0FBQ0EsUUFBTS9DLFFBQVEsS0FBS0QsTUFBTCxDQUFZQyxLQUExQjtBQUNBQSxVQUFNMGIsS0FBTixHQUFjLElBQWQ7QUFDQTs7OytCQUVZM1ksQyxFQUFHO0FBQ2ZBLE1BQUUyRixjQUFGO0FBQ0EzRixNQUFFNFksZUFBRjs7QUFFQSxRQUFNOWQsT0FBTyxzQkFBRWtGLEVBQUU0UCxNQUFKLENBQWI7QUFDQSxRQUFNM1MsUUFBUSxLQUFLRCxNQUFMLENBQVlDLEtBQTFCO0FBQ0EsUUFBSW5DLEtBQUtpRSxJQUFMLEVBQUosRUFBaUI7QUFDaEI5QixXQUFNMGIsS0FBTixHQUFjN2QsS0FBS2lFLElBQUwsRUFBZDtBQUNBOztBQUVELFNBQUt5VSxlQUFMLENBQXFCNUwsSUFBckI7QUFDQTs7O2tDQUVjNUgsQyxFQUFHakIsSSxFQUFNO0FBQ3ZCLFNBQUtvWCxNQUFMO0FBQ0E7Ozs0QkFFUTtBQUNSO0FBQ0EsUUFBTTBDLFdBQVcsQ0FBQyxFQUFFLEtBQUtQLGVBQUwsTUFBMEIsS0FBS0EsZUFBTCxHQUF1QnBYLElBQXZCLElBQStCLElBQTNELENBQWxCO0FBQ0EsU0FBSzlHLE9BQUwsQ0FBYTJOLFdBQWIsQ0FDQywyQkFERCxFQUVDOFEsUUFGRDtBQUlBOzs7NkJBRVM7QUFDVCxXQUFPLEtBQUs3YixNQUFMLENBQVlDLEtBQVosQ0FBa0I2YixTQUF6QjtBQUNBOzs7cUNBRWlCO0FBQ2pCLFdBQU8sS0FBSzliLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjBiLEtBQXpCO0FBQ0E7Ozs7OztBQUlGLHFCQUFVelEsaUJBQVYsQ0FBNEIsaUJBQTVCLEVBQStDd1EsZUFBL0M7QUFDQSxtQkFBUXZlLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0N1ZSxlQUFwQzttQkFDZUEsZTs7Ozs7O0FDNUVmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7S0FNTUssZTs7O0FBQ0wsMkJBQWEvYixNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRTBILE1BQUYsQ0FBUztBQUNsQmhCLFdBQVEsZUFEVTtBQUVsQlIsZUFBWSxVQUZNO0FBR2xCcEMsVUFBTztBQUhXLElBQVQsRUFJUDlELE9BSk8sQ0FBVjs7QUFEZ0MsaUlBTTFCSixNQU4wQixFQU1sQkksT0FOa0I7O0FBT2hDLFNBQUtKLE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxXQUFmLEVBQTRCLE1BQUt5WixXQUFMLENBQWlCdlksSUFBakIsT0FBNUI7QUFQZ0M7QUFRaEM7O0FBR0Q7Ozs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQSxTQUFLckcsT0FBTCxHQUFlLHNCQUFFLE9BQUYsRUFDYjJJLElBRGEsQ0FDUjtBQUNMa1csV0FBTyxFQURGO0FBRUxySixhQUFTLFFBRko7QUFHTHNKLGVBQVcsSUFITjtBQUlMcFYsWUFBUSxLQUFLMUcsT0FBTCxDQUFhMEc7QUFKaEIsS0FEUSxFQU9iekosUUFQYSxDQU9KLEtBQUtvUSxhQUFMLEVBUEksRUFRYnJILE1BUmEsQ0FRTixtQkFBUyxLQUFLcEcsTUFBZCxFQUFzQixFQUFFcUcsVUFBVyxVQUFiLEVBQXRCLEVBQWlEakosT0FSM0MsQ0FBZjtBQVNBOztBQUVEOzs7Ozs7bUNBR2dCO0FBQ2Y7QUFDQTs7QUFHRDs7Ozs7Ozs7K0JBaUJZNEYsQyxFQUFHakIsSSxFQUFNO0FBQ3BCLFNBQUtvYSxJQUFMLEdBQVksS0FBS25jLE1BQUwsQ0FBWUMsS0FBWixDQUFrQnNELEdBQWxCLENBQXNCTixHQUFsQztBQUNBOzs7cUJBZFN3RSxLLEVBQU87QUFDaEIsUUFBTTJVLFNBQVNyWSxTQUFTOUMsYUFBVCxDQUF1QixHQUF2QixDQUFmO0FBQ0FtYixXQUFPSCxJQUFQLEdBQWN4VSxLQUFkO0FBQ0EsUUFBSTRVLFdBQVdELE9BQU9FLFFBQVAsQ0FBZ0JsSSxLQUFoQixDQUFzQixHQUF0QixDQUFmO0FBQ0FpSSxlQUFXQSxTQUFTQSxTQUFTNVcsTUFBVCxHQUFrQixDQUEzQixDQUFYO0FBQ0EsU0FBS3JJLE9BQUwsQ0FBYTJJLElBQWIsQ0FBa0I7QUFDakJrVyxXQUFPeFUsS0FEVTtBQUVqQnlVLGVBQVdHO0FBRk0sS0FBbEI7QUFJQTs7Ozs7O0FBU0YscUJBQVVuUixpQkFBVixDQUE0QixpQkFBNUIsRUFBK0M2USxlQUEvQztBQUNBLG1CQUFRNWUsZUFBUixDQUF3QixVQUF4QixFQUFvQzRlLGVBQXBDO21CQUNlQSxlOzs7Ozs7O0FDOUVmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7OztLQUtNUSxxQjs7O0FBRUwsaUNBQVl2YyxNQUFaLEVBQW9CSSxPQUFwQixFQUE2QjtBQUFBOztBQUM1QkEsYUFBVSxpQkFBRTBILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEJ6QixjQUFXLE1BRFc7QUFFdEJTLFdBQVEsTUFGYztBQUd0QlIsZUFBWSxjQUhVO0FBSXRCcEMsVUFBTztBQUplLElBQWIsRUFLUDlELE9BTE8sQ0FBVjtBQUQ0Qix3SUFPdEJKLE1BUHNCLEVBT2RJLE9BUGM7QUFRNUI7Ozs7bUNBRWU7QUFDZjtBQUNBLFFBQUlULGFBQWEsS0FBS0ssTUFBTCxDQUFZSSxPQUFaLENBQW9CVCxVQUFyQztBQUNBLFFBQUk2YyxnQkFBSjtBQUNBLFNBQUssSUFBSUMsSUFBVCxJQUFpQjljLFVBQWpCLEVBQTZCO0FBQzVCLFNBQUksQ0FBQ0EsV0FBV3VJLGNBQVgsQ0FBMEJ1VSxJQUExQixDQUFMLEVBQXNDOztBQUV0QyxTQUFJQyxTQUFTL2MsV0FBVzhjLElBQVgsQ0FBYjtBQUNBLFNBQUkzZSxPQUFPLEVBQVg7QUFDQSxTQUFJNmUsWUFBWSxFQUFoQjs7QUFFQUQsWUFBTzdjLElBQVAsQ0FBWWxDLE9BQVosQ0FBb0IsVUFBQ2lDLEdBQUQsRUFBTWhDLEtBQU4sRUFBZ0I7QUFDbkMsVUFBSUEsVUFBVSxDQUFkLEVBQWlCO0FBQ2hCK2U7QUFDQTtBQUNEQSxrREFBMEMvYyxHQUExQztBQUNBLE1BTEQ7O0FBT0E5Qix1RUFFSTZlLFNBRkosV0FFbUJELE9BQU81YyxXQUYxQjs7QUFNQTBjLG9CQUFlMWUsSUFBZjtBQUVBO0FBQ0QsU0FBSzBZLGVBQUwsQ0FDRW5aLFFBREYsQ0FDVyx1QkFEWCxFQUVFK0ksTUFGRixDQUVTb1csV0FGVDtBQUdBOzs7Ozs7QUFHRixxQkFBVXRSLGlCQUFWLENBQTRCLHVCQUE1QixFQUFxRHFSLHFCQUFyRDtBQUNBLG1CQUFRcGYsZUFBUixDQUF3QixpQkFBeEIsRUFBMkNvZixxQkFBM0M7bUJBQ2VBLHFCOzs7Ozs7QUNqRWY7QUFDQTs7Ozs7Ozs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7S0FRTUssZTs7O0FBRUwsMkJBQWE1YyxNQUFiLEVBQWlDO0FBQUEsT0FBWkksT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNoQ0EsYUFBVSxpQkFBRTBILE1BQUYsQ0FBUyxFQUFULEVBQWE7QUFDdEJ4QixlQUFZLDZCQURVO0FBRXRCcEMsVUFBTztBQUZlLElBQWIsRUFHUDlELE9BSE8sQ0FBVjs7QUFEZ0MsaUlBSzFCSixNQUwwQixFQUtsQkksT0FMa0I7O0FBT2hDLFNBQUtKLE1BQUwsQ0FBWXVDLEVBQVosQ0FBZSxZQUFmLEVBQTZCLFVBQUNTLENBQUQsRUFBSWpCLElBQUosRUFBYTtBQUN6QyxRQUFNWSxPQUFPLE1BQUszQyxNQUFMLENBQVlHLFdBQXpCO0FBQ0EsVUFBSzBjLG1CQUFMLENBQXlCak0sSUFBekIsR0FBZ0MsMEJBQWNqTyxJQUFkLENBQWhDO0FBQ0EsSUFIRDs7QUFLQSxTQUFLM0MsTUFBTCxDQUFZdUMsRUFBWixDQUFlLGdCQUFmLEVBQWlDLFVBQUNTLENBQUQsRUFBTztBQUN2QyxVQUFLOFosaUJBQUwsQ0FBdUJsTSxJQUF2QixHQUE4QiwwQkFBYyxNQUFLNVEsTUFBTCxDQUFZQyxLQUFaLENBQWtCMkMsUUFBaEMsQ0FBOUI7QUFDQSxJQUZEO0FBWmdDO0FBZWhDOztBQUdEOzs7Ozs7O21DQUdnQjtBQUNmLFFBQU1BLFdBQVcsS0FBSzVDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjJDLFFBQW5DO0FBQ0EsUUFBTXpDLGNBQWMsS0FBS0gsTUFBTCxDQUFZQyxLQUFaLENBQWtCRSxXQUF0QztBQUNBLFNBQUswYyxtQkFBTCxHQUEyQiwwQkFBZ0IsS0FBSzdjLE1BQXJCLEVBQTZCLEVBQUVzRyxXQUFZLHVCQUFkLEVBQTdCLENBQTNCO0FBQ0EsU0FBS3dXLGlCQUFMLEdBQXlCLDBCQUFnQixLQUFLOWMsTUFBckIsRUFBNkIsRUFBRXNHLFdBQVkscUJBQWQsRUFBN0IsQ0FBekI7O0FBRUEsUUFBR21SLE1BQU03VSxRQUFOLEtBQW1CQSxZQUFZLElBQWxDLEVBQXdDO0FBQ3ZDLFVBQUtrYSxpQkFBTCxDQUF1QmxNLElBQXZCLEdBQThCLEVBQTlCO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBS2tNLGlCQUFMLENBQXVCbE0sSUFBdkIsR0FBOEIsMEJBQWNoTyxRQUFkLENBQTlCO0FBQ0E7O0FBRUQsUUFBR3pDLGVBQWUsSUFBbEIsRUFBd0I7QUFDdkIsVUFBSzBjLG1CQUFMLENBQXlCak0sSUFBekIsR0FBZ0MsMEJBQWMsQ0FBZCxDQUFoQztBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUtpTSxtQkFBTCxDQUF5QmpNLElBQXpCLEdBQWdDLDBCQUFjelEsV0FBZCxDQUFoQztBQUNBOztBQUVELFNBQUsvQyxPQUFMLEdBQWUsc0JBQUUsUUFBRixFQUFZQyxRQUFaLENBQXFCLGNBQXJCLENBQWY7QUFDQSxTQUFLRCxPQUFMLENBQ0VnSixNQURGLENBQ1MsS0FBS3lXLG1CQUFMLENBQXlCemYsT0FEbEMsRUFFRWdKLE1BRkYsQ0FFUyxLQUFLMFcsaUJBQUwsQ0FBdUIxZixPQUZoQzs7QUFJQSxXQUFPLEtBQUtBLE9BQVo7QUFDQTs7QUFHRDs7Ozs7O2tDQUdlNEYsQyxFQUFHO0FBQ2pCLFFBQUkvQyxRQUFRLEtBQUtELE1BQUwsQ0FBWUMsS0FBeEI7QUFDQSxTQUFLNGMsbUJBQUwsQ0FBeUJqTSxJQUF6QixHQUFnQywwQkFBYzNRLE1BQU1FLFdBQXBCLENBQWhDO0FBQ0EsU0FBSzJjLGlCQUFMLENBQXVCbE0sSUFBdkIsR0FBOEIsMEJBQWMzUSxNQUFNMkMsUUFBcEIsQ0FBOUI7QUFDQTs7OzRCQUVRSSxDLEVBQUc7QUFDWEEsTUFBRTJGLGNBQUY7QUFDQTs7Ozs7O0FBR0YscUJBQVV1QyxpQkFBVixDQUE0QixpQkFBNUIsRUFBK0MwUixlQUEvQztBQUNBLG1CQUFRemYsZUFBUixDQUF3QixVQUF4QixFQUFvQ3lmLGVBQXBDO21CQUNlQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7S0FHTUcsSzs7O0FBQ0wsaUJBQWEvYyxNQUFiLEVBQXFCSSxPQUFyQixFQUE4QjtBQUFBOztBQUFBLDZHQUN2QkosTUFEdUIsRUFDZkksT0FEZTs7QUFFN0IsU0FBSzRjLEtBQUwsR0FBYSxNQUFLNWYsT0FBTCxDQUFhLENBQWIsQ0FBYjs7QUFFQSxTQUFLMGUsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUttQixZQUFMLEdBQW9CLEVBQXBCOztBQUVBLFNBQUsxWixHQUFMLEdBQVcsTUFBS3ZELE1BQUwsQ0FBWUksT0FBWixDQUFvQm1ELEdBQS9COztBQUVBLE9BQUcsTUFBS3ZELE1BQUwsQ0FBWUksT0FBWixDQUFvQjdCLE1BQXBCLElBQThCLElBQWpDLEVBQXVDO0FBQ3RDLFVBQUtBLE1BQUwsR0FBYyxNQUFLeUIsTUFBTCxDQUFZSSxPQUFaLENBQW9CN0IsTUFBbEM7QUFDQTs7QUFFRCxPQUFHLE1BQUtzYyx5QkFBTCxHQUFpQ3BWLE1BQWpDLEdBQTBDLENBQTdDLEVBQWdEO0FBQy9DLFVBQUt5WCxnQkFBTCxHQUF3QixNQUFLckMseUJBQUwsR0FBaUMsQ0FBakMsQ0FBeEI7QUFDQTs7QUFFRCxTQUFLemQsT0FBTCxDQUFhbUYsRUFBYixDQUFnQixXQUFoQixFQUE2QixNQUFLeVosV0FBTCxDQUFpQnZZLElBQWpCLE9BQTdCO0FBQ0EsU0FBS3JHLE9BQUwsQ0FBYW1GLEVBQWIsQ0FBZ0IsWUFBaEIsRUFBOEIsTUFBSzZQLFlBQUwsQ0FBa0IzTyxJQUFsQixPQUE5QjtBQUNBLFNBQUtyRyxPQUFMLENBQWFtRixFQUFiLENBQWdCLGdCQUFoQixFQUFrQyxNQUFLNGEsZ0JBQUwsQ0FBc0IxWixJQUF0QixPQUFsQztBQUNBLFNBQUtyRyxPQUFMLENBQWFtRixFQUFiLENBQWdCLFVBQWhCLEVBQTRCLE1BQUs2YSxVQUFMLENBQWdCM1osSUFBaEIsT0FBNUI7QUFDQSxTQUFLckcsT0FBTCxDQUFhbUYsRUFBYixDQUFnQixTQUFoQixFQUEyQixNQUFLOGEsU0FBTCxDQUFlNVosSUFBZixPQUEzQjtBQUNBLFNBQUtyRyxPQUFMLENBQWFtRixFQUFiLENBQWdCLFFBQWhCLEVBQTBCLE1BQUsrYSxRQUFMLENBQWM3WixJQUFkLE9BQTFCO0FBQ0EsU0FBS3JHLE9BQUwsQ0FBYW1GLEVBQWIsQ0FBZ0IsY0FBaEIsRUFBZ0MsTUFBS2diLGNBQUwsQ0FBb0I5WixJQUFwQixPQUFoQztBQUNBLFNBQUtyRyxPQUFMLENBQWFtRixFQUFiLENBQWdCLE9BQWhCLEVBQXlCLE1BQUs4SyxPQUFMLENBQWE1SixJQUFiLE9BQXpCO0FBQ0EsU0FBS3JHLE9BQUwsQ0FBYW1GLEVBQWIsQ0FBZ0IsVUFBaEIsRUFBNEIsTUFBS2liLFVBQUwsQ0FBZ0IvWixJQUFoQixPQUE1QjtBQUNBLFNBQUtyRyxPQUFMLENBQWFtRixFQUFiLENBQWdCLE1BQWhCLEVBQXdCLE1BQUtrYixNQUFMLENBQVloYSxJQUFaLE9BQXhCO0FBQ0EsU0FBS3JHLE9BQUwsQ0FBYW1GLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsTUFBS21iLE9BQUwsQ0FBYWphLElBQWIsT0FBekI7QUFDQSxTQUFLckcsT0FBTCxDQUFhbUYsRUFBYixDQUFnQixZQUFoQixFQUE4QixNQUFLb2IsWUFBTCxDQUFrQmxhLElBQWxCLE9BQTlCO0FBQ0EsU0FBS3JHLE9BQUwsQ0FBYW1GLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsTUFBS3FiLE9BQUwsQ0FBYW5hLElBQWIsT0FBekI7QUFDQSxTQUFLckcsT0FBTCxDQUFhbUYsRUFBYixDQUFnQixnQkFBaEIsRUFBa0MsTUFBS3NiLGdCQUFMLENBQXNCcGEsSUFBdEIsT0FBbEM7QUFDQSxTQUFLckcsT0FBTCxDQUFhbUYsRUFBYixDQUFnQixTQUFoQixFQUEyQixNQUFLdWIsU0FBTCxDQUFlcmEsSUFBZixPQUEzQjtBQUNBLFNBQUtyRyxPQUFMLENBQWFtRixFQUFiLENBQWdCLE9BQWhCLEVBQXlCLE1BQUt3YixPQUFMLENBQWF0YSxJQUFiLE9BQXpCO0FBaEM2QjtBQWlDN0I7Ozs7K0JBRVdULEMsRUFBRztBQUNkLFNBQUtmLE9BQUwsQ0FBYSxXQUFiO0FBQ0E7OztnQ0FFWWUsQyxFQUFHO0FBQ2YsU0FBS2YsT0FBTCxDQUFhLFlBQWI7QUFDQTs7O29DQUVnQmUsQyxFQUFHO0FBQ25CLFNBQUtmLE9BQUwsQ0FBYSxnQkFBYjtBQUNBOzs7OEJBRVVlLEMsRUFBRztBQUNiLFNBQUtmLE9BQUwsQ0FBYSxVQUFiO0FBQ0E7Ozs2QkFFU2UsQyxFQUFHO0FBQ1osU0FBS2YsT0FBTCxDQUFhLFNBQWI7QUFDQTs7OzRCQUVRZSxDLEVBQUc7QUFDWCxTQUFLZixPQUFMLENBQWEsUUFBYjtBQUNBOzs7a0NBRWNlLEMsRUFBRztBQUNqQixTQUFLZixPQUFMLENBQWEsY0FBYjtBQUNBOzs7NkJBRVM7QUFDVCxTQUFLQSxPQUFMLENBQWEsT0FBYjtBQUNBOzs7Z0NBRVk7QUFDWixTQUFLQSxPQUFMLENBQWEsVUFBYjtBQUNBOzs7NEJBRVE7QUFDUixTQUFLQSxPQUFMLENBQWEsTUFBYjtBQUNBOzs7NkJBRVM7QUFDVCxTQUFLQSxPQUFMLENBQWEsT0FBYjtBQUNBOzs7K0JBRVc7QUFDWCxTQUFLQSxPQUFMLENBQWEsU0FBYjtBQUNBOzs7a0NBRWM7QUFDZCxTQUFLQSxPQUFMLENBQWEsWUFBYjtBQUNBOzs7NkJBRVM7QUFDVCxTQUFLQSxPQUFMLENBQWEsT0FBYjtBQUNBOzs7c0NBRWtCO0FBQ2xCLFNBQUtBLE9BQUwsQ0FBYSxnQkFBYjtBQUNBOzs7K0JBRVc7QUFDWCxTQUFLQSxPQUFMLENBQWEsU0FBYjtBQUNBOzs7MkJBRU9lLEMsRUFBRztBQUNWLFNBQUtmLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLEVBQUVvQixNQUFPTCxFQUFFNFAsTUFBRixDQUFTL1AsS0FBVCxDQUFlUSxJQUF4QixFQUF0QjtBQUNBOztBQUVEOzs7O21DQUNnQjtBQUFBOztBQUNmLFNBQUtqRyxPQUFMLEdBQWUsS0FBS2dELE9BQUwsQ0FBYXNCLEdBQTVCO0FBQ0E7O0FBRUM7QUFDQSxjQUhELEVBSUMsUUFKRDs7QUFNQztBQUNBLFlBUEQsRUFRQyxPQVJELEVBVUUvRCxPQVZGLENBVVUsZ0JBQVE7QUFDakIsWUFBS1AsT0FBTCxDQUFhNGdCLFVBQWIsQ0FBd0JsZ0IsSUFBeEI7QUFDQSxLQVpEOztBQWNBO0FBQ0EsS0FDQyxTQURELEVBRUMsVUFGRCxFQUdDLE1BSEQsRUFJQyxPQUpELEVBS0VILE9BTEYsQ0FLVSxnQkFBUTtBQUNqQixTQUFHLE9BQUtxQyxNQUFMLENBQVlJLE9BQVosQ0FBb0J0QyxJQUFwQixDQUFILEVBQThCO0FBQzdCLGFBQUtWLE9BQUwsQ0FBYTJJLElBQWIsQ0FBa0JqSSxJQUFsQixFQUF3QixPQUFLa0MsTUFBTCxDQUFZSSxPQUFaLENBQW9CdEMsSUFBcEIsQ0FBeEI7QUFDQSxhQUFLVixPQUFMLENBQWE2Z0IsSUFBYixDQUFrQm5nQixJQUFsQixFQUF3QixPQUFLa0MsTUFBTCxDQUFZSSxPQUFaLENBQW9CdEMsSUFBcEIsQ0FBeEI7QUFDQTtBQUNELEtBVkQ7O0FBYUEsU0FBS1YsT0FBTCxDQUFhbUssSUFBYixDQUFrQixzQkFBbEIsRUFBMENDLElBQTFDLENBQStDLFVBQUM3QixDQUFELEVBQUk3SCxJQUFKLEVBQWE7QUFDM0QsMkJBQUVBLElBQUYsRUFBUTBTLE1BQVI7QUFDQSxLQUZEOztBQUlBLFdBQU8sS0FBS3BULE9BQVo7QUFDQTs7OytDQTRFMkI7QUFDM0IsV0FBTyxLQUFLNEMsTUFBTCxDQUFZSSxPQUFaLENBQW9Ca0gsT0FBcEIsQ0FBNEI0VyxHQUE1QixDQUFnQztBQUFBO0FBQ3RDaGEsWUFBT3BHLEtBQUtnSjtBQUQwQixRQUVuQ2hKLElBRm1DO0FBQUEsS0FBaEMsQ0FBUDtBQUlBOzs7MEJBOEdPO0FBQUE7O0FBQ1A7QUFDQSxRQUFJMkcsTUFBTSxpQkFBRUMsUUFBRixFQUFWO0FBQ0EsU0FBS3laLGNBQUw7QUFDQSxTQUFLQyxVQUFMLEdBQ0V0VixJQURGLENBQ08sWUFBTTtBQUNYLFlBQUt1VixTQUFMO0FBQ0EsWUFBS0MsV0FBTDtBQUNBN1osU0FBSUksT0FBSjtBQUNBLEtBTEY7QUFNQSxXQUFPSixJQUFJSyxPQUFKLEVBQVA7QUFDQTs7O3dDQUVvQjtBQUNwQixRQUFJLE9BQU8sS0FBS2tZLEtBQUwsQ0FBV3VCLHFCQUFsQixLQUE0QyxVQUFoRCxFQUE0RDtBQUMzRCxTQUFNNUosWUFBWS9JLE9BQU84SSxTQUFQLElBQW9COUksT0FBTzhJLFNBQVAsQ0FBaUJDLFNBQXJDLElBQWtELEVBQXBFOztBQUVBO0FBQ0EsU0FBSyxTQUFELENBQVlFLElBQVosQ0FBaUJGLFNBQWpCLEtBQStCLENBQUUsc0JBQUQsQ0FBeUJFLElBQXpCLENBQThCRixTQUE5QixDQUFwQyxFQUE4RTtBQUM3RSxhQUFPLElBQVA7QUFDQTtBQUNEO0FBQ0QsV0FBTyxLQUFQO0FBQ0E7OztxQ0FFaUI7QUFBQTs7QUFDakIsUUFBTTFVLFFBQVEsS0FBSytjLEtBQW5CO0FBQ0EsUUFBSS9jLE1BQU1rRCxNQUFOLElBQWdCbEQsTUFBTXVlLFlBQU4sSUFBc0J2ZSxNQUFNd2UsYUFBaEQsRUFBK0Q7QUFDOUQ7QUFDQTtBQUNBLFVBQUt2YixJQUFMOztBQUVBO0FBQ0E7QUFDQWtILGdCQUFXLFlBQU07QUFDaEIsYUFBS2hILEtBQUw7QUFDQW5ELFlBQU1zZSxxQkFBTjtBQUNBLE1BSEQsRUFHRyxDQUhIO0FBSUEsS0FYRCxNQVdPO0FBQ050ZSxXQUFNc2UscUJBQU47QUFDQTtBQUNEOzs7b0NBRWdCO0FBQ2hCLFNBQUt2QixLQUFMLENBQVcwQixvQkFBWDtBQUNBOzs7Z0NBRWE7QUFDYixRQUFJLENBQUMsS0FBSzFCLEtBQUwsQ0FBVzJCLE1BQVosSUFBc0IsS0FBSzNCLEtBQUwsQ0FBVzdaLE1BQXJDLEVBQTZDO0FBQzVDLFVBQUtELElBQUw7QUFDQSxLQUZELE1BRU87QUFDTixVQUFLRSxLQUFMO0FBQ0E7QUFDRDs7OzBCQUVPO0FBQ1AsUUFBSXFCLE1BQU0saUJBQUVDLFFBQUYsRUFBVjtBQUNBLFFBQU1rYSxjQUFjLEtBQUs1QixLQUFMLENBQVc5WixJQUFYLEVBQXBCOztBQUVBLFFBQUcwYixlQUFlLElBQWxCLEVBQXdCO0FBQ3ZCQSxpQkFBWTljLElBQVosQ0FBaUIsWUFBVztBQUMzQjJDLFVBQUlJLE9BQUo7QUFDQSxNQUZEO0FBR0EsS0FKRCxNQUlPO0FBQ05KLFNBQUlJLE9BQUo7QUFDQTtBQUNELFdBQU9KLElBQUlLLE9BQUosRUFBUDtBQUNBOzs7MkJBRVE7QUFDUixRQUFJTCxNQUFNLGlCQUFFQyxRQUFGLEVBQVY7QUFDQSxRQUFNbWEsZUFBZSxLQUFLN0IsS0FBTCxDQUFXNVosS0FBWCxFQUFyQjs7QUFFQSxRQUFHeWIsZ0JBQWdCLElBQW5CLEVBQXlCO0FBQ3hCQSxrQkFBYS9jLElBQWIsQ0FBa0IsWUFBVztBQUM1QjJDLFVBQUlJLE9BQUo7QUFDQSxNQUZEO0FBR0EsS0FKRCxNQUlPO0FBQ05KLFNBQUlJLE9BQUo7QUFDQTtBQUNELFdBQU9KLElBQUlLLE9BQUosRUFBUDtBQUNBOzs7MEJBRU07QUFDTixXQUFPLEtBQUtrWSxLQUFMLENBQVcxWSxJQUFYLEVBQVA7QUFDQTs7O29DQUVpQjtBQUNqQixRQUFJd2EsUUFBUSxJQUFaO0FBQ0EsU0FBSzFoQixPQUFMLENBQWEyaEIsUUFBYixDQUFzQix5QkFBdEIsRUFBaUR2WCxJQUFqRCxDQUFzRCxZQUFZO0FBQ2pFLFNBQU13WCxXQUFXLHNCQUFFLElBQUYsRUFBUWpaLElBQVIsQ0FBYSxTQUFiLENBQWpCO0FBQ0EsU0FBTWUsUUFBUSxzQkFBRSxJQUFGLEVBQVFmLElBQVIsQ0FBYSxPQUFiLENBQWQ7QUFDQSxTQUFNeEMsTUFBTSxzQkFBRSxJQUFGLEVBQVF3QyxJQUFSLENBQWEsS0FBYixDQUFaO0FBQ0EsU0FBSWUsTUFBTXJCLE1BQU4sR0FBZSxDQUFmLElBQW9CbEMsSUFBSWtDLE1BQUosR0FBYSxDQUFyQyxFQUF3QztBQUN2Q3FaLFlBQU1oRCxTQUFOLENBQWdCelIsSUFBaEIsQ0FBcUI7QUFDcEJ2RCxjQUFRQSxLQURZO0FBRXBCNUMsYUFBTzhhLFFBRmE7QUFHcEJBLGlCQUFXQTtBQUhTLE9BQXJCO0FBS0E7QUFDRCxLQVhEO0FBWUE7OztnQ0FFYTtBQUFBOztBQUNiLFFBQUl2YSxNQUFNLGlCQUFFQyxRQUFGLEVBQVY7QUFDQSxRQUFJLEtBQUtzWSxLQUFMLENBQVdpQyxVQUFYLEdBQXdCQyxpQkFBaUJDLFlBQTdDLEVBQTJEO0FBQzFEMWEsU0FBSUksT0FBSjtBQUNBLFVBQUt1YSxlQUFMO0FBQ0EsS0FIRCxNQUdPO0FBQ04sMkJBQUUsS0FBS3BDLEtBQVAsRUFBY3ZhLEdBQWQsQ0FBa0IsZ0JBQWxCLEVBQW9DLFVBQUNPLENBQUQsRUFBTztBQUMxQ3lCLFVBQUlJLE9BQUo7QUFDQSxhQUFLdWEsZUFBTDtBQUNBLE1BSEQ7QUFJQTtBQUNEM2EsUUFBSTRhLE1BQUo7QUFDQSxXQUFPNWEsSUFBSUssT0FBSixFQUFQO0FBQ0E7OztxQ0FFa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQSxRQUFJLEtBQUtrWSxLQUFMLENBQVdzQyxVQUFYLENBQXNCN1osTUFBdEIsS0FBaUMsQ0FBakMsSUFBc0MsS0FBS3FXLFNBQUwsQ0FBZXJXLE1BQWYsR0FBd0IsQ0FBbEUsRUFBcUU7QUFDcEUsVUFBS3JJLE9BQUwsQ0FBYTJoQixRQUFiLENBQXNCLHlCQUF0QixFQUFpRHZPLE1BQWpEO0FBQ0EsVUFBSyxJQUFJN0ssQ0FBVCxJQUFjLEtBQUttVyxTQUFuQixFQUE4QjtBQUM3QixVQUFJLEtBQUtBLFNBQUwsQ0FBZTVULGNBQWYsQ0FBOEJ2QyxDQUE5QixDQUFKLEVBQXNDO0FBQ3JDLFlBQUt2SSxPQUFMLENBQ0VnSixNQURGLENBQ1Msc0JBQUUsVUFBRixFQUNOTCxJQURNLENBQ0QsT0FEQyxFQUNRLEtBQUsrVixTQUFMLENBQWdCblcsQ0FBaEIsRUFBb0JtQixLQUQ1QixFQUVOZixJQUZNLENBRUQsS0FGQyxFQUVNLEtBQUsrVixTQUFMLENBQWdCblcsQ0FBaEIsRUFBb0JwQyxHQUYxQixFQUdOd0MsSUFITSxDQUdELFNBSEMsRUFHVSxLQUFLK1YsU0FBTCxDQUFnQm5XLENBQWhCLEVBQW9CcVosUUFIOUIsRUFJTmpaLElBSk0sQ0FJRCxJQUpDLEVBSUssS0FBSytWLFNBQUwsQ0FBZ0JuVyxDQUFoQixFQUFvQnFaLFFBSnpCLEVBS05qWixJQUxNLENBS0QsTUFMQyxFQUtPLFdBTFAsQ0FEVDtBQU9BO0FBQ0Q7QUFDRDtBQUNEOzs7dUJBdlVrQjtBQUNsQixXQUFPLEtBQUtpWCxLQUFMLENBQVc3YyxXQUFsQjtBQUNBLEk7cUJBRWdCc0gsSyxFQUFPO0FBQ3ZCLFFBQUk5RSxhQUFKO0FBQ0EsUUFBSThFLFFBQVEsS0FBSzdFLFFBQWpCLEVBQTJCO0FBQzFCRCxZQUFPLEtBQUtDLFFBQVo7QUFDQSxLQUZELE1BRU8sSUFBSTZFLFFBQVEsQ0FBWixFQUFlO0FBQ3JCOUUsWUFBTyxDQUFQO0FBQ0EsS0FGTSxNQUVBO0FBQ05BLFlBQU84RSxLQUFQO0FBQ0E7O0FBRUQsU0FBS3pILE1BQUwsQ0FBWWlDLE9BQVosQ0FBb0IsZ0JBQXBCLEVBQXNDLEVBQUU5QixhQUFjd0MsSUFBaEIsRUFBdEM7O0FBRUEsU0FBS3FhLEtBQUwsQ0FBVzdjLFdBQVgsR0FBeUJ3QyxJQUF6QjtBQUNBOzs7dUJBRWU7QUFDZixXQUFPLEtBQUtxYSxLQUFMLENBQVdwYSxRQUFsQjtBQUNBOzs7dUJBRWE7QUFDYixXQUFPLEtBQUtvYSxLQUFMLENBQVd1QyxZQUFsQjtBQUNBOzs7dUJBRVk7QUFDWixXQUFPLEtBQUt2QyxLQUFMLENBQVd3QyxXQUFsQjtBQUNBOzs7dUJBRVc7QUFDWCxXQUFPLEtBQUt4QyxLQUFMLENBQVd5QyxZQUFsQjtBQUNBLEk7cUJBb0NTaFksSyxFQUFPO0FBQ2hCLHNGQUFhQSxLQUFiO0FBQ0EsU0FBS3VWLEtBQUwsQ0FBV3lDLFlBQVgsR0FBMEJoWSxLQUExQjtBQUNBOzs7cUJBckNTQSxLLEVBQU87QUFDaEIsU0FBS3VWLEtBQUwsQ0FBVzNlLEtBQVgsR0FBbUJvSixLQUFuQjtBQUNBLEk7dUJBRVc7QUFDWCxXQUFPLEtBQUt1VixLQUFMLENBQVczZSxLQUFsQjtBQUNBOzs7dUJBRWE7QUFDYixRQUFJUSxNQUFNLEtBQUttQixNQUFMLENBQVlJLE9BQVosQ0FBb0IxQixJQUFwQixDQUF5QkcsR0FBbkM7QUFDQSxRQUFHLHNDQUFILEVBQXlCO0FBQ3hCQSxXQUFNa2UsTUFBTTJDLGVBQVo7QUFDQTtBQUNELDRCQUFjO0FBQ2I3Z0IsV0FBTWtlLE1BQU00QyxlQUFaO0FBQ0E7O0FBRUQsV0FBTzlnQixHQUFQO0FBQ0E7Ozt1QkFFYTtBQUNiLFFBQUlELE1BQU0sS0FBS29CLE1BQUwsQ0FBWUksT0FBWixDQUFvQjFCLElBQXBCLENBQXlCRSxHQUFuQzs7QUFFQSxRQUFJLHNDQUFKLEVBQTBCO0FBQ3pCQSxXQUFNbWUsTUFBTTZDLGVBQVo7QUFDQTs7QUFFRCw0QkFBZTtBQUNkaGhCLFdBQU1tZSxNQUFNOEMsZUFBWjtBQUNBOztBQUVELFdBQU9qaEIsR0FBUDtBQUNBOzs7cUJBY21Cc0YsSSxFQUFNO0FBQ3pCLGlHQUF3QkEsSUFBeEI7QUFDQSxRQUFNdkIsT0FBTyxLQUFLeEMsV0FBbEI7QUFDQSxRQUFNekIsT0FBTyxLQUFLQSxJQUFsQjtBQUNBLFFBQU1vaEIsT0FBTyxLQUFLM2MsTUFBbEI7O0FBRUEsU0FBSytaLGdCQUFMLEdBQXdCLEtBQUtyQyx5QkFBTCxHQUFpQ3RULElBQWpDLENBQXNDO0FBQUEsWUFBUXpKLEtBQUtvRyxJQUFMLEtBQWNBLElBQXRCO0FBQUEsS0FBdEMsQ0FBeEI7O0FBRUEsU0FBS1gsR0FBTCxHQUFXLEtBQUsyWixnQkFBaEI7QUFDQSxTQUFLdUMsWUFBTCxHQUFvQi9nQixJQUFwQjtBQUNBLFNBQUt5QixXQUFMLEdBQW1Cd0MsSUFBbkI7O0FBRUEsUUFBSW1kLElBQUosRUFBVTtBQUNULFVBQUsxYyxLQUFMO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBS0YsSUFBTDtBQUNBOztBQUVELFNBQUtqQixPQUFMLENBQWEsZUFBYixFQUE4QixLQUFLaWIsZ0JBQW5DO0FBRUEsSTt1QkFFcUI7QUFDckIsV0FBTyxLQUFLQSxnQkFBWjtBQUNBOzs7cUJBRVEzWixHLEVBQUs7QUFDYixRQUFHQSxPQUFPLElBQVYsRUFBZ0I7QUFDaEIsUUFBRyxLQUFLQSxHQUFMLElBQVksS0FBS0EsR0FBTCxDQUFTTixHQUFULEtBQWlCTSxJQUFJTixHQUFwQyxFQUF5Qzs7QUFFekMsU0FBSytaLEtBQUwsQ0FBV3paLEdBQVgsR0FBaUJBLElBQUlOLEdBQXJCOztBQUVBLFNBQUs4YyxPQUFMLEdBQWV4YyxHQUFmO0FBQ0EsSTt1QkFFVTtBQUNWLFdBQU8sS0FBS3djLE9BQVo7QUFDQTs7O3VCQUVZO0FBQ1osV0FBTyxLQUFLQyxNQUFaO0FBQ0EsSTtxQkFFVXZZLEssRUFBTztBQUNqQixpQ0FBSSxLQUFLdVYsS0FBTCxDQUFXc0MsVUFBZixHQUEyQjNoQixPQUEzQixDQUFtQyxnQkFBUTtBQUMxQyxTQUFHOEosU0FBUyxJQUFULElBQWlCM0osS0FBS2toQixRQUFMLEtBQWtCdlgsTUFBTXVYLFFBQTVDLEVBQXNEO0FBQ3JEbGhCLFdBQUttaUIsSUFBTCxHQUFZLFNBQVo7QUFDQSxNQUZELE1BRU87QUFDTm5pQixXQUFLbWlCLElBQUwsR0FBWSxRQUFaO0FBQ0E7QUFDRCxLQU5EO0FBT0EsU0FBS0QsTUFBTCxHQUFjdlksS0FBZDtBQUNBLFNBQUt4RixPQUFMLENBQWEsY0FBYjtBQUNBOzs7dUJBRVk7QUFDWixXQUFPLEtBQUsrYSxLQUFMLENBQVc3WixNQUFsQjtBQUNBOzs7dUJBRWE7QUFDYixXQUFPLEtBQUs2WixLQUFMLENBQVd2ZCxNQUFsQjtBQUNBLEk7cUJBRVdnSSxLLEVBQU87QUFDbEIsd0ZBQWVBLEtBQWY7QUFDQSxRQUFNekgsU0FBUyxLQUFLQSxNQUFwQjtBQUNBLFFBQUl5SCxRQUFRLENBQVosRUFBZTtBQUNkLFVBQUt1VixLQUFMLENBQVd2ZCxNQUFYLEdBQW9CLENBQXBCO0FBQ0EsS0FGRCxNQUVPLElBQUlnSSxRQUFRekgsT0FBT0ksT0FBUCxDQUFlWCxNQUFmLENBQXNCQyxTQUFsQyxFQUE2QztBQUNuRCxVQUFLc2QsS0FBTCxDQUFXdmQsTUFBWCxHQUFvQixDQUFwQjtBQUNBLEtBRk0sTUFFQTtBQUNOLFVBQUt1ZCxLQUFMLENBQVd2ZCxNQUFYLEdBQW9CZ0ksS0FBcEI7QUFDQTtBQUNELFNBQUt1VixLQUFMLENBQVdrRCxJQUFYLEdBQW1CelksUUFBUXpILE9BQU9JLE9BQVAsQ0FBZVgsTUFBZixDQUFzQkMsU0FBakQ7QUFDQTs7O3VCQUdlO0FBQ2YsV0FBTyxLQUFLc2QsS0FBTCxDQUFXbEUsUUFBbEI7QUFDQTs7QUFFRDs7Ozs7O3VCQUdnQjtBQUNmLFdBQU8sS0FBS2tFLEtBQUwsQ0FBV21ELFFBQWxCO0FBQ0E7O0FBRUQ7Ozs7Ozt1QkFHYTtBQUNaLFdBQU8sS0FBS25ELEtBQUwsQ0FBVzJCLE1BQWxCO0FBQ0E7Ozt1QkFFc0I7QUFDdEIsUUFBSWxoQixTQUFTLENBQWI7QUFDQSxTQUFLLElBQUlrSSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2daLE1BQUwsQ0FBWWxaLE1BQWhDLEVBQXdDRSxHQUF4QyxFQUE2QztBQUM1Q2xJLGVBQVcsS0FBS2toQixNQUFMLENBQVk3WSxHQUFaLENBQWdCSCxDQUFoQixJQUFxQixLQUFLZ1osTUFBTCxDQUFZeUIsS0FBWixDQUFrQnphLENBQWxCLENBQWhDO0FBQ0E7O0FBRUQsV0FBT2xJLFNBQVMsS0FBS21GLFFBQWQsR0FBeUIsR0FBaEM7QUFDQTs7O3VCQUVnQjtBQUNoQixXQUFPLEtBQUtvYSxLQUFMLENBQVdxRCxVQUFsQjtBQUNBOzs7Ozs7QUFpSkY7Ozs7O0FBR0F0RCxPQUFNNkMsZUFBTixHQUF3QixHQUF4Qjs7QUFFQTs7O0FBR0E3QyxPQUFNMkMsZUFBTixHQUF3QixDQUF4Qjs7QUFHQTNDLE9BQU04QyxlQUFOLEdBQXdCLEdBQXhCOztBQUVBOUMsT0FBTTRDLGVBQU4sR0FBd0IsQ0FBeEI7O0FBRUEscUJBQVV6VSxpQkFBVixDQUE0QixPQUE1QixFQUFxQzZSLEtBQXJDO21CQUNlQSxLOzs7Ozs7Ozs7Ozs7Ozs7O0FDamZmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztLQUVNNVksTTs7O0FBQ0wsa0JBQVluRSxNQUFaLEVBQW9CSSxPQUFwQixFQUE2QjtBQUFBOztBQUFBLCtHQUN0QkosTUFEc0IsRUFDZEksT0FEYzs7QUFFNUIsU0FBS2tnQixhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixLQUFuQjs7QUFFQSxPQUFJLE1BQUt2Z0IsTUFBTCxDQUFZSSxPQUFaLENBQW9CbUQsR0FBcEIsSUFBMkIsSUFBL0IsRUFBcUM7QUFDcEMsVUFBS3ZELE1BQUwsQ0FBWTZDLEtBQVosR0FBb0IseUJBQWUsc0JBQWYsQ0FBcEI7QUFDQTs7QUFQMkI7QUFTNUI7O0FBRUQ7Ozs7Ozs7NkJBR2lCO0FBQUE7O0FBQUEsc0NBQU4yQixJQUFNO0FBQU5BLFNBQU07QUFBQTs7QUFDaEIsUUFBRyxDQUFDLEtBQUsrYixXQUFULEVBQXNCO0FBQ3JCLFVBQUtELGFBQUwsQ0FBbUJqVyxJQUFuQixDQUF3QjdGLElBQXhCO0FBQ0E7QUFDRCwySUFBaUJBLElBQWpCO0FBQ0E7OzswQkFFTTtBQUFBOztBQUNOLFNBQUsrYixXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS0QsYUFBTCxDQUFtQjNpQixPQUFuQixDQUEyQixnQkFBUTtBQUNsQyxZQUFLc0UsT0FBTCxrQ0FBZ0J1QyxJQUFoQjtBQUNBLEtBRkQ7QUFHQTs7O21DQUVlO0FBQ2YsV0FBTyxLQUFLcEgsT0FBTCxHQUFlLHNCQUFFLFNBQUYsQ0FBdEI7QUFDQTs7O2tDQWlFYztBQUNkLFNBQUtzQixJQUFMLElBQWEsS0FBS3NCLE1BQUwsQ0FBWUksT0FBWixDQUFvQjFCLElBQXBCLENBQXlCQyxJQUF0QztBQUNBOzs7a0NBRWM7QUFDZCxTQUFLRCxJQUFMLElBQWEsS0FBS3NCLE1BQUwsQ0FBWUksT0FBWixDQUFvQjFCLElBQXBCLENBQXlCQyxJQUF0QztBQUNBOzs7d0NBNENvQixDQUVwQjs7OzBCQUVNLENBRU47OzsyQkFFUSxDQUVSOzs7MEJBRU0sQ0FDTjs7O2dDQUVhO0FBQ2IsUUFBSSxLQUFLd0UsTUFBVCxFQUFpQjtBQUNoQixVQUFLRCxJQUFMO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBS0UsS0FBTDtBQUNBO0FBQ0Q7OzsrQkFFWTtBQUNaLFNBQUsxRSxJQUFMLEdBQVksS0FBSzhoQixXQUFqQjtBQUNBOzs7aUNBRWM7QUFDZCxTQUFLL2dCLE1BQUwsR0FBYyxLQUFLb1gsYUFBbkI7QUFDQTs7O3FCQTlJVTVULEcsRUFBSztBQUNmLFNBQUt3ZCxPQUFMLEdBQWV4ZCxHQUFmO0FBQ0EsU0FBS2hCLE9BQUwsQ0FBYSxjQUFiLEVBQTZCLEVBQUVnQixRQUFGLEVBQTdCO0FBQ0EsSTt1QkFHWTtBQUNaLFdBQU8sS0FBS3dkLE9BQVo7QUFDQTs7O3VCQUVpQjtBQUNqQjtBQUNBLEk7cUJBRWVoWixLLEVBQU8sQ0FFdEI7Ozt1QkFFYztBQUNkO0FBQ0E7OztxQkFFU0EsSyxFQUFPLENBRWhCLEM7dUJBRVcsQ0FFWDs7O3VCQUVZO0FBQ1osV0FBTyxLQUFLckssT0FBTCxDQUFhc2pCLFdBQWIsRUFBUDtBQUNBOzs7dUJBRVc7QUFDWCxXQUFPLEtBQUt0akIsT0FBTCxDQUFhb0ksS0FBYixFQUFQO0FBQ0E7OztxQkFFV2lDLEssRUFBTztBQUNsQixTQUFLa1osUUFBTCxHQUFnQmxaLEtBQWhCO0FBQ0EsSTt1QkFNYTtBQUNiLFdBQU8sS0FBS2taLFFBQUwsSUFBaUIsS0FBSzNnQixNQUFMLENBQVlJLE9BQVosQ0FBb0IxQixJQUFwQixDQUF5QkcsR0FBakQ7QUFFQTs7O3FCQVBXNEksSyxFQUFPO0FBQ2xCLFNBQUttWixRQUFMLEdBQWdCblosS0FBaEI7QUFDQSxJO3VCQU9hO0FBQ2IsV0FBTyxLQUFLbVosUUFBTCxJQUFpQixLQUFLNWdCLE1BQUwsQ0FBWUksT0FBWixDQUFvQjFCLElBQXBCLENBQXlCRSxHQUFqRDtBQUNBOzs7dUJBRVUsQ0FDVixDO3FCQUVRNkksSyxFQUFPO0FBQ2YsUUFBR0EsUUFBUSxLQUFLK1MsT0FBYixJQUF3Qi9TLFFBQVEsS0FBSzhTLE9BQXhDLEVBQWlEO0FBQ2pELHFCQUFPc0csR0FBUCxDQUFXLE1BQVgsRUFBbUJwWixLQUFuQjtBQUNBOzs7cUJBVW1CdkQsSSxFQUFNO0FBQ3pCLFFBQU00YyxTQUFTLEtBQUtqRyx5QkFBTCxFQUFmO0FBQ0EsUUFBRyxDQUFDaUcsT0FBT0MsSUFBUCxDQUFZO0FBQUEsWUFBTzdjLFFBQVFrRCxHQUFmO0FBQUEsS0FBWixDQUFKLEVBQXFDO0FBQ3BDO0FBQ0E7QUFDRCxJO3VCQUVxQixDQUVyQjs7O3VCQUVZLENBRVo7Ozt1QkFFWSxDQUVaOzs7dUJBRWlCO0FBQ2pCLFdBQU8saUJBQU9xVCxHQUFQLENBQVcsTUFBWCxLQUFzQixLQUFLemEsTUFBTCxDQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsQ0FBeUJJLE9BQXREO0FBQ0E7Ozt1QkFFb0I7QUFDcEIsV0FBTyxpQkFBTzJiLEdBQVAsQ0FBVyxRQUFYLEtBQXdCLEtBQUt6YSxNQUFMLENBQVlJLE9BQVosQ0FBb0JYLE1BQXBCLENBQTJCWCxPQUExRDtBQUNBOzs7cUJBRVUySSxLLEVBQU87QUFDakIsUUFBTXpILFNBQVMsS0FBS0EsTUFBcEI7QUFDQSxRQUFHeUgsUUFBUSxDQUFSLElBQWFBLFFBQVF6SCxPQUFPSSxPQUFQLENBQWVYLE1BQWYsQ0FBc0JDLFNBQTlDLEVBQXlEO0FBQ3hELHNCQUFPbWhCLEdBQVAsQ0FBVyxRQUFYLEVBQXFCcFosS0FBckI7QUFDQTtBQUNEOzs7cUJBRVFBLEssRUFBTyxDQUVmLEM7dUJBRVMsQ0FFVDs7Ozs7O0FBa0NGLHFCQUFVeUQsaUJBQVYsQ0FBNEIsUUFBNUIsRUFBc0MvRyxNQUF0QzttQkFDZUEsTTs7Ozs7O0FDeExmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHNEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7QUN6QkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0EsNkJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBLEdBQUUsWUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTs7QUFFQTs7Ozs7OztBQ3ZEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBeUMsaUJBQWlCO0FBQzFELHVEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSw4REFBNkQsVUFBVTtBQUN2RTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0MsVUFBVTtBQUNoRCx3QkFBdUIsYUFBYTtBQUNwQztBQUNBLDBCQUF5QixjQUFjO0FBQ3ZDLDBCQUF5QixVQUFVO0FBQ25DLHFCQUFvQixjQUFjO0FBQ2xDO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLFVBQVUsRUFBRTtBQUM3QixnQ0FBK0IseUJBQXlCO0FBQ3hEO0FBQ0EsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTBCLFdBQVc7QUFDckM7QUFDQSxvREFBbUQsVUFBVTtBQUM3RDtBQUNBLEdBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlFQUFnRTtBQUNoRSxHQUFFOztBQUVGO0FBQ0E7QUFDQSxtQ0FBa0MsYUFBYTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsaUNBQWdDOztBQUVoQzs7Ozs7OztBQzNVQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQSw0Q0FBMkMsZ0JBQWdCOztBQUUzRCxtREFBa0QsaUZBQWlGOzs7Ozs7O0FDRm5JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FB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LDBCQUFTO0FBQ3JCeEgsV0FBVTtBQUNUb0YsVUFBUSxNQURDO0FBRVRyRyxhQUFXO0FBQ1ZDLFlBQVMsQ0FDUixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFFBQXZDLEVBQWlELFNBQWpELEVBQTRELFlBQTVELENBRFEsRUFFUixFQUZRLENBREM7QUFLVkMsZ0JBQWEsQ0FDWixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFVBQW5CLEVBQStCLE1BQS9CLEVBQXVDLFFBQXZDLEVBQWlELFNBQWpELEVBQTRELFlBQTVELENBRFk7QUFMSDtBQUZGO0FBRFcsRUFBZixDIiwiZmlsZSI6ImxlLXBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg4ZjFjNWUwMTVmZGJlZGI4ZTIxIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vY29tcG9uZW50cy9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XG5pbXBvcnQgUGxheUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUGxheUJ1dHRvbic7XG5pbXBvcnQgU3BsYXNoSWNvbiBmcm9tICcuL2NvbXBvbmVudHMvU3BsYXNoSWNvbic7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vY29tcG9uZW50cy9JY29uJztcbmltcG9ydCBUaW1lIGZyb20gJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lJztcbmltcG9ydCBDb250cm9sQ29sbGVjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29udHJvbENvbGxlY3Rpb24nO1xuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9ucyc7XG5pbXBvcnQgRXJyb3JEaXNwbGF5IGZyb20gJy4vY29tcG9uZW50cy9FcnJvckRpc3BsYXknO1xuaW1wb3J0IFBvc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUG9zdGVyJztcbmltcG9ydCBGdWxsc2NyZWVuQXBpIGZyb20gJy4vRnVsbHNjcmVlbkFwaSc7XG5cbmltcG9ydCB7IGNyZWF0ZUVsLCBzZWNvbmRzVG9UaW1lLCBub29wIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4vdXRpbHMvY29va2llJztcbmltcG9ydCB7IElTX0lQSE9ORSwgSVNfSVBPRCwgSVNfQU5EUk9JRF9QSE9ORSB9IGZyb20gJy4vdXRpbHMvYnJvd3Nlcic7XG5cbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4vTWVkaWFFcnJvcic7XG5cbi8vIFJlZ2lzdGVyIGNvbW1vbiBjb250cm9sc1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUGxheUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9UaW1lbGluZS9UaW1lbGluZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvRnVsbHNjcmVlbkNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvUmF0ZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvQmFja3dhcmRDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL1NvdXJjZUNvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvU3VidGl0bGVDb250cm9sJztcbmltcG9ydCAnLi9jb21wb25lbnRzL0Rvd25sb2FkQ29udHJvbCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9LZXliaW5kaW5nSW5mb0NvbnRyb2wnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvVGltZUluZm9Db250cm9sJztcblxuaW1wb3J0ICcuL2VudGl0eS9IdG1sNSc7XG5cbmltcG9ydCAnYXJyYXkucHJvdG90eXBlLmZpbmQnO1xuXG5cbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkaXZpZGVyJywgZnVuY3Rpb24oKSB7XG5cdHJldHVybiB7XG5cdFx0ZWxlbWVudCA6ICQoJzxkaXYvPicpLmFkZENsYXNzKCdkaXZpZGVyJylcblx0fTtcbn0pO1xuXG5cblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgd2l0aCBleGNsdWRlZCBkaXN0J3MgaXRlbXMgZnJvbSBzb3VyY2UgYXJyYXlcbiAqXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZVxuICogQHBhcmFtIHtBcnJheX0gZGlzdFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGV4Y2x1ZGVBcnJheShzb3VyY2UsIGRpc3QpIHtcblx0Y29uc3QgcmVzdWx0ID0gW10uY29uY2F0KHNvdXJjZSk7XG5cdGRpc3QuZm9yRWFjaChpdGVtID0+IHtcblx0XHRjb25zdCBpbmRleCA9IHJlc3VsdC5pbmRleE9mKGl0ZW0pO1xuXHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRyZXN1bHQuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0ZW50aXR5IDogJ0h0bWw1Jyxcblx0YXV0b3BsYXkgOiBmYWxzZSxcblx0aGVpZ2h0IDogJ2F1dG8nLFxuXHRsb29wIDogZmFsc2UsXG5cdG11dGVkIDogZmFsc2UsXG5cdHByZWxvYWQgOiAnbWV0YWRhdGEnLFxuXHRwb3N0ZXIgOiBudWxsLFxuXHRzdmdQYXRoIDogJycsXG5cdGlubmFjdGl2aXR5VGltZW91dCA6IDUwMDAsXG5cdHJhdGUgOiB7XG5cdFx0c3RlcCA6IDAuMjUsXG5cdFx0bWluIDogMC41LFxuXHRcdG1heCA6IDQuMCxcblx0XHRkZWZhdWx0IDogMVxuXHR9LFxuXHRwbGF5YmFjayA6IHtcblx0XHRzdGVwIDoge1xuXHRcdFx0c2hvcnQgOiA1LFxuXHRcdFx0bWVkaXVtIDogMTAsXG5cdFx0XHRsb25nIDogMzBcblx0XHR9XG5cdH0sXG5cdGNvbnRyb2xzIDoge1xuXHRcdGNvbW1vbiA6IFtcblx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICAnZGl2aWRlcicsICdzZWN0aW9uJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0WydyYXRlJywgJ2RpdmlkZXInLCAnYmFja3dhcmQnLCAnZGl2aWRlcicsICdzb3VyY2UnLCAnZGl2aWRlcicsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAna2V5YmluZGluZyBpbmZvJ11cblx0XHRdLFxuXHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2RpdmlkZXInLCAna2V5YmluZGluZyBpbmZvJywgICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnc3VidGl0bGUnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ11cblx0XHRdLFxuXHRcdG1pbmkgOiBbXG5cdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbicsICdkaXZpZGVyJywgJ3RpbWVpbmZvJ11cblx0XHRdXG5cdH0sXG5cdGNvbnRyb2xzT3B0aW9ucyA6IHtcblxuXHRcdGNvbW1vbiA6IHtcblx0XHRcdGFsaWduIDogWydqdXN0aWZ5JywgJ2xlZnQnXVxuXHRcdH0sXG5cblx0XHRmdWxsc2NyZWVuIDoge1xuXHRcdFx0YWxpZ24gOiAnanVzdGlmeSdcblx0XHR9XG5cdH0sXG5cdHZvbHVtZSA6IHtcblx0XHRkZWZhdWx0IDogMC40LFxuXHRcdG11dGVsaW1pdCA6IDAuMDUsXG5cdFx0c3RlcCA6IDAuMVxuXHR9LFxuXHRrZXlCaW5kaW5nIDogW1xuXHRcdHtcblx0XHRcdGtleSA6IDMyLFxuXHRcdFx0aW5mbyA6IFsnU3BhY2UnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cd0LDRh9Cw0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40LUgLyDQv9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udG9nZ2xlUGxheSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzcsXG5cdFx0XHRpbmZvIDogWyfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INC90LDQt9Cw0LRgLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci52aWRlby5jdXJyZW50VGltZSAtPSBwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHRcdFx0cGxheWVyLnNwbGFzaEljb24uc2hvdygndW5kbycpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5IDogMzksXG5cdFx0XHRpbmZvIDogWyfihpInXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogYNCf0LXRgNC10LzQvtGC0LDRgtGMINC90LAgMTAg0YHQtdC60YPQvdC0INCy0L/QtdGA0ZHQtGAsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lICs9IHBsYXllci5vcHRpb25zLnBsYXliYWNrLnN0ZXAubWVkaXVtO1xuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KCdyZWRvJyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaGlmdEtleSA6IHRydWUsXG5cdFx0XHRpbmZvIDogWydTaGlmdCcsICfihpAnXSxcblx0XHRcdGRlc2NyaXB0aW9uIDogJ9Cf0LXRgNC10LnRgtC4INC90LAg0L/RgNC10LTRi9C00YPRidGD0Y4g0YHQtdC60YbQuNGOJyxcblx0XHRcdGtleSA6IDM3LFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5wcmV2KCk7XG5cblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHNoaWZ0S2V5IDogdHJ1ZSxcblx0XHRcdGtleSA6IDM5LFxuXHRcdFx0aW5mbyA6IFsnU2hpZnQnLCAn4oaSJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQn9C10YDQtdC50YLQuCDQvdCwINGB0LvQtdC00YPRjtGJ0YPRjiDRgdC10LrRhtC40Y4nLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGlmKHBsYXllci5zZWN0aW9ucyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBsYXllci5zZWN0aW9ucy5uZXh0KClcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleSA6IDM4LFxuXHRcdFx0aW5mbyA6IFsn4oaRJ10sXG5cdFx0XHRkZXNjcmlwdGlvbiA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0LPRgNC+0LzQutC+0YHRgtGMJyxcblx0XHRcdGZuIDogKHBsYXllcikgPT4ge1xuXHRcdFx0XHRwbGF5ZXIudmlkZW8udm9sdW1lICs9IHBsYXllci5vcHRpb25zLnZvbHVtZS5zdGVwO1xuXG5cdFx0XHRcdHBsYXllci5zcGxhc2hJY29uLnNob3cocGxheWVyLmNhbGNWb2x1bWVJY29uKHBsYXllci52aWRlby52b2x1bWUpKTtcblxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHRrZXkgOiA0MCxcblx0XHRcdGluZm8gOiBbJ+KGkyddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0KPQvNC10L3RjNGI0LjRgtGMINCz0YDQvtC80LrQvtGB0YLRjCcsXG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0cGxheWVyLnZpZGVvLnZvbHVtZSAtPSBwbGF5ZXIub3B0aW9ucy52b2x1bWUuc3RlcDtcblxuXHRcdFx0XHRwbGF5ZXIuc3BsYXNoSWNvbi5zaG93KHBsYXllci5jYWxjVm9sdW1lSWNvbihwbGF5ZXIudmlkZW8udm9sdW1lKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdGtleSA6IDcwLFxuXHRcdFx0aW5mbyA6IFsnZiddLFxuXHRcdFx0ZGVzY3JpcHRpb24gOiAn0J7RgtC60YDRi9GC0Ywv0LfQsNC60YDRi9GC0Ywg0L/QvtC70L3QvtGN0LrRgNCw0L3Ri9C5INGA0LXQttC40LwnLFxuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdHBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRdLFxuXHRwbHVnaW5zIDoge1xuXHRcdG1pbmlwbGF5ZXIgOiB7fVxuXHR9LFxuXHRvblBsYXllckluaXRlZCA6IG5vb3Bcbn07XG5cbi8qKlxuICogQGNsYXNzIFBsYXllclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gZWxlbWVudCBFbGVtZW50IHdoZW4gcGxheWVyIHdpbGwgaW5pdFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hdXRvcGxheT1mYWxzZV1cbiAqIFdoZW4gcHJlc2VudCwgdGhlIHZpZGVvIHdpbGwgYXV0b21hdGljYWxseSBzdGFydCBwbGF5aW5nIGFzIHNvb24gYXMgaXQgY2FuIGRvIHNvIHdpdGhvdXQgc3RvcHBpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IFtvcHRpb25zLmhlaWdodD0nYXV0byddIEhlaWdodCBvZiB2aWRlbyBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy53aWR0aF0gV2lkdGggb2YgdmlkZW8gY29udGFpbmVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmxvb3A9ZmFsc2VdXG4gKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSB2aWRlbyB3aWxsIHN0YXJ0IG92ZXIgYWdhaW4sIGV2ZXJ5IHRpbWUgaXQgaXMgZmluaXNoZWQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm11dGVkPWZhbHNlXVxuICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgYXVkaW8gb3V0cHV0IG9mIHRoZSB2aWRlbyBzaG91bGQgYmUgbXV0ZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucHJlbG9hZD0nbWV0YWRhdGEnXSBDYW4gYmUgKCdhdXRvJ3wnbWV0YWRhdGEnfCdub25lJylcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5wb3N0ZXJdIFBhdGggdG8gcG9zdGVyIG9mIHZpZGVvXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc3ZnUGF0aF0gUGF0aCB0byBzdmcgc3ByaXRlIGZvciBpY29uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnJhdGVdIFJhdGUgb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUuc3RlcD0wLjI1XSBTdGVwIG9mIGluY3JlYXNlL2RlY3JlYXNlIGJ5IHJhdGUgY29udHJvbFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnJhdGUubWluPTAuNV0gTWluIG9mIHJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5yYXRlLm1heD00LjBdIE1heCBvZiByYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucmF0ZS5kZWZhdWx0PTFdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMucGxheWJhY2tdIFBsYXliYWNrIG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwXVxuICogQHBhcmFtIHtOdWJtZXJ9IFtvcHRpb25zLnBsYXliYWNrLnN0ZXAuc2hvcnQ9NV1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bT0zMF1cbiAqIEBwYXJhbSB7TnVibWVyfSBbb3B0aW9ucy5wbGF5YmFjay5zdGVwLmxvbmc9NjBdXG4gKiBAcGFyYW0ge09iZWpjdH0gW29wdGlvbnMuY29udHJvbHNdIE9iamVjdCBvZiBjb250cm9sc1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMuY29tbW9uXSBBcnJheSBvZiBjb250cm9scyBmb3IgZGVmYXVsdCB2aWV3XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBbb3B0aW9ucy5jb250cm9scy5mdWxsc2NyZWVuXSBBcnJheSBvZiBjb250cm9sIGZvciBmdWxsc3JlZW4gdmlld1xuICogQHBhcmFtIHtTdHJpbmdbXX0gW29wdGlvbnMuY29udHJvbHMubWluaV0gQXJyYXkgb2YgY29udHJvbCBmb3IgbWluaXBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmV4Y2x1ZGVDb250cm9sc10gT2JqZWN0IG9mIGV4Y2x1ZGUgY29udHJvbHMuIFN0cnVjdHVyZSBpcyB0aGUgc2FtZSBhcyB0aGF0IG9mIG9wdGlvbnMuY29udHJvbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy52b2x1bWVdIFZvbHVtZSdzIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy52b2x1bWUuZGVmYXVsdD0wLjRdIERlZmF1bHQgdm9sdW1lXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudm9sdW1lLm11dGVsaW1pdD0wLjA1XSBEZWx0YSB3aGVuIHZvbHVtZSBpcyBtdXRlZFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnZvbHVtZS5zdGVwPTAuMDVdXG4gKiBAcGFyYW0ge09iamVjdFtdfSBbb3B0aW9ucy5rZXliaW5kaW5nXVxuICogT2JqZWN0IHdpdGgga2V5YmluZGluZyBvcHRpb25zLCB3aGVuIGtleSBpdCdzIG5hbWUgb2Yga2V5IGJpbmRpbmcsIGFuZCB2YWx1ZSBpdCdzIGtleSBiaW5kaW5nIHNldHRpbmdzXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMua2V5YmluZGluZ1tdLmtleV0gQ29kZSBvZiBrZXkgYmluZGluZyAoZm9yIGV4YW1wbGUgMzIgaXQncyBzcGFjZSlcbiAqIEBwYXJhbSB7U3RyaW5nW119IFtvcHRpb25zLmtleWJpbmRpbmdbXS5pbmZvXSBBcnJheSBvZiBrZXlzdHJva2VzIG9yZGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5rZXliaW5kaW5nW10uZGVzY3JpcHRpb25dIERlc2NyaXB0aW9uIG9mIGtleSBiaW5kaW5nXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmtleWJpbmRpbmdbXS5mbl0gQ2FsbGJhY2tcbiAqIEBwYXJhbSB7T2JqZWN0fEJvb2xlYW59IFtvcHRpb25zLm1pbmlwbGF5ZXI9ZmFsc2VdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubWluaXBsYXllci53aWR0aF0gV2lkdGggb2YgbWluaXBsYXllciBjb250YWluZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5taW5pcGxheWVyLndpZHRoXSBNaW5pUGxheWVyJ3Mgd2lkdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zZWN0aW9uQ29udGFpbmVyXSBTZWxlY3RvciBmb3Igc2VjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wbHVnaW5zXSBLZXlzIG9mIG9iamVjdHMgYXJlIG5hbWUgb2YgcGx1Z2luLCB2YWx1ZSAtIHBsdWdpbiBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IFtvcHRpb25zLmRhdGFdIFVybCBvciBKU09OIHdpdGggZGF0YSBmb3IgcGxheWVyXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5kYXRhLnNlY3Rpb25zXSBTZWN0aW9ucyBhcnJheVxuICovXG5cbmNsYXNzIFBsYXllciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMuY3JlYXRlRWxlbWVudCA9IGZhbHNlO1xuXG5cdFx0c3VwZXIobnVsbCwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIERPTSBjb250YWluZXIgdG8gaG9sZCBpbm5lciBvZiBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jyk7XG5cblx0XHQvLyBVc2VycyBvcHRpb25zXG5cdFx0dGhpcy5fdXNlck9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuX2luaXRPcHRpb25zKCk7XG5cblx0XHRpZih0aGlzLm9wdGlvbnMuc3ZnUGF0aCA9PT0gJycpIHtcblx0XHRcdFBsYXllci5fbG9hZFNWR1Nwcml0ZShQbGF5ZXIuZGVmYXVsdFNwcml0ZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlldyA9ICdjb21tb24nO1xuXG5cdFx0LyoqXG5cdFx0ICogRE9NIGNvbnRhaW5lciB0byBob2xkIGFsbCBwbGF5ZXJcblx0XHQgKlxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCk7XG5cblx0XHR0aGlzLmxvYWRFbnRpdHkodGhpcy5vcHRpb25zLmVudGl0eSwgeyBjdHggOiBlbGVtZW50IH0pO1xuXHRcdC8qKlxuXHRcdCAqIFZpZGVvIGh0bWw1IGNvbXBvbmVudFxuXHRcdCAqXG5cdFx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdFx0ICogQHR5cGUge0VudGl0eX1cblx0XHQgKi9cblx0XHR0aGlzLnZpZGVvID0gdGhpcy5lbnRpdHk7XG5cblx0XHQvLyBDcmVhdGUgY29udHJvbHNcblx0XHQvLyBUT0RPOiBtb3ZlIHRoaXMgYWN0aW9uIHRvIHRoZSBjcmVhdGVFbGVtZW50XG5cdFx0dGhpcy5jb250cm9scyA9IHt9O1xuXHRcdHRoaXMuX2luaXRDb250cm9scygpO1xuXG5cdFx0LyoqXG5cdFx0ICogQGFjY2VzcyBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fZGJsY2xpY2tUaW1lb3V0ID0gbnVsbDtcblxuXHRcdHRoaXMuX2luaXRTZWN0aW9ucygpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zQ29tcG9uZW50O1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIFNlY3Rpb25zIGluaXQgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3NlY3Rpb25zaW5pdFxuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHRcdFx0ICogcGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCAoZSwgZGF0YSkgPT4gY29zbm9sZS5sb2coZGF0YSkpO1xuXHRcdFx0ICpcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWN0aW9uc2luaXQnLCBkYXRhKTtcblx0XHR9KTtcblx0XHR0aGlzLl9pbml0UGx1Z2lucygpO1xuXG5cdFx0dGhpcy5fbGlzdGVuSG90S2V5cygpO1xuXG5cdFx0dGhpcy5fdXNlckFjdGl2aXR5ID0gZmFsc2U7XG5cdFx0dGhpcy5fbGlzdGVuVXNlckFjdGl2aXR5KCk7XG5cblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMgPSBbXTtcblxuXHRcdC8qIFJldHJpZ2dlciB7QGxpbmsgRW50aXR5fSBFdmVudHMgKi9cblx0XHRbXG5cdFx0XHQvKipcblx0XHRcdCAqIGR1cmF0aW9uY2hhbmdlIHBsYXllciBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZHVyYXRpb25jaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J2R1cmF0aW9uY2hhbmdlJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBwcm9ncmVzcyBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjcHJvZ3Jlc3Ncblx0XHRcdCAqL1xuXHRcdFx0J3Byb2dyZXNzJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBkYmxjbGlja1xuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZGJjbGlja1xuXHRcdFx0ICovXG5cdFx0XHQnZGJsY2xpY2snLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIGRibGNsaWNrXG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNkYmNsaWNrXG5cdFx0XHQgKi9cblx0XHRcdCdjbGljaycsXG5cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBjYW5wbGF5IGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNjYW5wbGF5XG5cdFx0XHQgKi9cblx0XHRcdCdjYW5wbGF5JyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBxdWFsaXR5Y2hhbmdlIGh0bWw1XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNxdWFsaXR5Y2hhbmdlXG5cdFx0XHQgKi9cblx0XHRcdCdxdWFsaXR5Y2hhbmdlJyxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBxdWFsaXR5Y2hhbmdlIGh0bWw1XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN0cmFja3NjaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0J3RyYWNrc2NoYW5nZScsXG5cblxuXG5cdFx0XS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG5cdFx0XHR0aGlzLnZpZGVvLm9uKGV2ZW50TmFtZSwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoZXZlbnROYW1lKTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uZSgncGxheScsICgpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmlyc3QgcGxheSBldmVudFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBldmVudCBQbGF5ZXIjZmlyc3RwbGF5XG4gICAgICAgICAgICAgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignZmlyc3RwbGF5Jyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tdmlyZ2luJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMudmlkZW8uY3VycmVudFRpbWUgPiAwKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS12aXJnaW4nKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiB0aW1ldXBkYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN0aW1ldXBkYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScsIHsgdGltZSA6IHRoaXMudmlkZW8uY3VycmVudFRpbWUsIGR1cmF0aW9uIDogdGhpcy52aWRlby5kdXJhdGlvbiB9KTtcblxuXHRcdH0pXG5cblx0XHR0aGlzLnZpZGVvLm9uKCdsb2Fkc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZW5kZWQnKTtcblxuXHRcdFx0dGhpcy5lcnJvciA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIGxvYWRzdGFydCBwbGF5ZXIgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2xvYWRzdGFydFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2luZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBzZWVraW5nIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVraW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignc2Vla2VkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc3RvcFdheXRpbmcoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogc2Vla2VkIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNzZWVrZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdzZWVrZWQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3ZvbHVtZWNoYW5nZScsICgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogdm9sdW1lY2hhbmdlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN2b2x1bWVjaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnLCB7IHZvbHVtZSA6IHRoaXMudmlkZW8udm9sdW1lIH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbigncG9zdGVyY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHVybCA9IGRhdGEudXJsO1xuXHRcdFx0dGhpcy5wb3N0ZXIudXJsID0gdXJsO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwb3N0ZXJjaGFuZ2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGxheWluZycpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXkgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdwYXVzZScsICgpID0+IHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLS1wbGF5aW5nJyk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcGF1c2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BhdXNlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ3BsYXlpbmcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHBsYXlpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3BsYXlpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdyYXRlY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiByYXRlIGh0bWw1IG1lZGlhIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciNyYXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScsIHsgcmF0ZSA6IHRoaXMudmlkZW8ucmF0ZSB9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8ub24oJ2VuZGVkJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWVuZGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy5sb29wKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSAwO1xuXHRcdFx0XHR0aGlzLnZpZGVvLnBsYXkoKTtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMudmlkZW8ucGF1c2VkKSB7XG5cdFx0XHRcdHRoaXMudmlkZW8ucGF1c2UoKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBlbmRlZCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjZW5kZWRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zdG9wV2F5dGluZygpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBjYW5wbGF5dGhyb3VnaCBodG1sNSBtZWRpYSBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjY2FucGxheXRocm91Z2hcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy52aWRlby5vbignd2FpdGluZycsICgpID0+IHtcblx0XHRcdHRoaXMuX3N0YXJ0V2FpdGluZygpO1xuXG5cdFx0XHR0aGlzLnZpZGVvLm9uZSgndGltZXVwZGF0ZScsICgpID0+IHRoaXMuX3N0b3BXYXl0aW5nKCkpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIHdhaXRpbmcgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI3dhaXRpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnZpZGVvLm9uKCdlcnJvcicsIChlLCBkYXRhKSA9PiB7XG5cdFx0XHR0aGlzLmVycm9yID0gbmV3IE1lZGlhRXJyb3IoZGF0YS5jb2RlKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudmlkZW8uaW5pdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBQbGF5ZXIgaW5pdCBldmVudFxuXHRcdFx0ICpcblx0XHRcdCAqIEBldmVudCBQbGF5ZXIjaW5pdGVkXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcignaW5pdGVkJyk7XG5cblx0XHRcdGlmKHRoaXMub3B0aW9ucy50aW1lKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLm9wdGlvbnMudGltZTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy52aWRlby5zcmMgIT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuYXV0b3BsYXkpIHtcblx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0aGlzLl9vbkZ1bGxzY3JlZW5DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbignY2xpY2snLCB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2RibGNsaWNrJywgdGhpcy5fb25EYmNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ2luaXRlZCcsIHRoaXMuX29uSW5pdGVkLmJpbmQodGhpcykpO1xuXHRcdHRoaXMub24oJ3BsYXknLCB0aGlzLl9vblBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5vbigncGF1c2UnLCB0aGlzLl9vblBhdXNlLmJpbmQodGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub24oRnVsbHNjcmVlbkFwaS5mdWxsc2NyZWVuY2hhbmdlLCB0aGlzLl9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGdldCBlbnRpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VudGl0eTtcblx0fVxuXG5cdGxvYWRFbnRpdHkobmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IEVudGl0eSA9IFBsYXllci5nZXRDb21wb25lbnQobmFtZSk7XG5cdFx0dGhpcy5fZW50aXR5ID0gbmV3IEVudGl0eSh0aGlzLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgcGxheWluZyB0aGUgdmlkZW9cblx0ICpcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGV4YW1wbGVcblx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKFwiI3ZpZGVvXCIpLG9wdGlvbnMpO1xuXHQgKiAkKCcuc29tZS1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiBwbGF5ZXIucGxheSgpKTtcblx0ICovXG5cdHBsYXkoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ucGxheSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBhdXNlcyB0aGUgY3VycmVudGx5IHBsYXlpbmcgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdHBhdXNlKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLnBhdXNlKCk7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBjdXJyZW50bHkgcGxheWluZyB2aWRlb1xuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKi9cblx0dG9nZ2xlUGxheSgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby50b2dnbGVQbGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICogQmVnaW4gbG9hZGluZyB0aGUgc3JjIGRhdGFcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICovXG5cdGxvYWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlkZW8ubG9hZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIHNldCB2aWV3IGNhbGxiYWNrXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3IFZpZXcgbmFtZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHQgKiBwbGF5ZXIub25TZXRWaWV3KCdtaW5pJywgKCkgPT4gY29uc29sZS5sb2coJ01pbmlwbGF5ZXIgeWVhaCEnKVxuXHQgKiAgICAgLm9uU2V0VmlldygnZnVsbHNjcmVlbicsICgpID0+IGNvbnNvbGUubG9nKCdGdWxsc2NyZWVuIGJvb20hJylcblx0ICogICAgIC5vblNldFZpZXcoJ2NvbW1vbicsICgpID0+IGNvbnNvbGUubG9nKCdDb21tb24gdmlldyAtIGxvbCcpO1xuXHQgKi9cblx0b25TZXRWaWV3KHZpZXcsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLm9uKGBzZXR2aWV3LiR7dmlld31gLCAuLi5hcmdzKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9uIGRlbCB2aWV3IGNhbGxiYWNrXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3IFZpZXcgbmFtZVxuXHQgKiBAcmV0dXJucyB7UGxheWVyfSB0aGlzXG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoJCgnI3ZpZGVvJyksIG9wdGlvbnMpO1xuXHQgKiBwbGF5ZXIub25EZWxWaWV3KCdtaW5pJywgKCkgPT4gY29uc29sZS5sb2coJ0V4aXQgbWluaXBsYXllcicpXG5cdCAqL1xuXHRvbkRlbFZpZXcodmlldywgLi4uYXJncykge1xuXHRcdHRoaXMub24oYGRlbHZpZXcuJHt2aWV3fWAsIC4uLmFyZ3MpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHNvbWUgZGF0YSBmb3IgcGxheWVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEByZXR1cm5zIHtqUXVlcnkucHJvbWlzZX0gUHJvbWlzZVxuXHQgKi9cblx0Z2V0RGF0YSgpIHtcblx0XHRjb25zdCBkZmQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXG5cdFx0aWYgKHRoaXMuX2RhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGZkLnJlc29sdmUodGhpcy5fZGF0YSk7XG5cdFx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJC5hamF4KHtcblx0XHRcdFx0dXJsIDogdGhpcy5vcHRpb25zLmRhdGEsXG5cdFx0XHRcdG1ldGhvZCA6ICdHRVQnLFxuXHRcdFx0XHRkYXRhVHlwZSA6ICdqc29uJ1xuXHRcdFx0fSkucHJvbWlzZSgpO1xuXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmRhdGEgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRkZmQucmVzb2x2ZSh0aGlzLm9wdGlvbnMuZGF0YSk7XG5cdFx0XHRyZXR1cm4gZGZkLnByb21pc2UoKVxuXHRcdH1cblx0fVxuXG5cdGdldFNlY3Rpb25EYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLmdldERhdGEoKVxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnNlY3Rpb25zXG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlcXVlc3QgZnVsbHNjcmVlblxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAZmlyZXMgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0ICovXG5cdHJlcXVlc3RGdWxsc2NyZWVuKCkge1xuXHRcdGNvbnN0IGZzQXBpID0gRnVsbHNjcmVlbkFwaTtcblxuXHRcdGlmKGZzQXBpLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG5cdFx0XHQvLyBDYWxsIEhUTUw1IFZpZGVvIGFwaSByZXF1ZXN0RnVsbHNjcmVlblxuXHRcdFx0dGhpcy5lbGVtZW50WzBdW2ZzQXBpLnJlcXVlc3RGdWxsc2NyZWVuXSgpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIGZ1bGxzY3JlZW5jaGFuZ2UgaHRtbDUgbWVkaWEgZXZlbnRcblx0XHRcdCAqXG5cdFx0XHQgKiBAZXZlbnQgUGxheWVyI2Z1bGxzY3JlZW5jaGFuZ2Vcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJ1ZSk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnZpZGVvLnN1cHBvcnRzRnVsbFNjcmVlbigpKSB7XG5cdFx0XHR0aGlzLnZpZGVvLmVudGVyRnVsbHNjcmVlbigpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGl0IGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHRleGl0RnVsbHNjcmVlbigpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cblx0XHRpZihmc0FwaS5leGl0RnVsbHNjcmVlbikge1xuXHRcdFx0ZG9jdW1lbnRbZnNBcGkuZXhpdEZ1bGxzY3JlZW5dKCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnZpZGVvLnN1cHBvcnRzRnVsbFNjcmVlbigpKSB7XG5cdFx0XHR0aGlzLnZpZGVvLmV4aXRGdWxsc2NyZWVuKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdmdWxsc2NyZWVuY2hhbmdlJywgZmFsc2UpO1xuXG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIGZ1bGxzY3JlZW5cblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQGZpcmVzIFBsYXllciNmdWxsc2NyZWVuY2hhbmdlXG5cdCAqL1xuXHR0b2dnbGVGdWxsc2NyZWVuKCkge1xuXHRcdGlmKHRoaXMudmlldyA9PT0gJ2Z1bGxzY3JlZW4nKSB7XG5cdFx0XHR0aGlzLmV4aXRGdWxsc2NyZWVuKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZXF1ZXN0RnVsbHNjcmVlbigpXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBDb250cm9sQ29sbGVjdGlvbiBvZiBQbGF5ZXIgYnkgbmFtZSAoZS54ICdjb21tb24nLCAnZnVsbHNjcmVlbicpXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gTmFtZSBvZiBDb250cm9sQ29sbGVjdGlvblxuXHQgKiBAcmV0dXJucyB7Q29udHJvbENvbGxlY3Rpb259XG5cdCAqL1xuXHRnZXRDb250cm9scyhuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbbmFtZV07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB3aWR0aCBvZiBwbGF5ZXIuXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFdpZHRoIGluIHB4XG5cdCAqL1xuXHRnZXRXaWR0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50LndpZHRoKClcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21wbGV0ZSB0aGUgc2VjdGlvbnMsIGJ5IHRoZSBhZGRpdGlvbmFsIGZpZWxkICdlbmQnIGluIGVhY2ggc2VjdGlvblxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtPYmplY3R9IHNlY3Rpb25zIC0gU2VjdGlvbnNcblx0ICogQHJldHVybnMge09iamVjdH0gTmV3IHNlY3Rpb25zXG5cdCAqL1xuXHRfY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucykge1xuXHRcdGlmIChzZWN0aW9ucyA9PSBudWxsIHx8IHNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBuZXdTZWN0aW9ucyA9IFtdLmNvbmNhdChzZWN0aW9ucylcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgZW5kU2VjdGlvbjtcblx0XHRcdGlmIChpIDwgKG5ld1NlY3Rpb25zLmxlbmd0aCAtIDEpKSB7XG5cdFx0XHRcdGVuZFNlY3Rpb24gPSBuZXdTZWN0aW9uc1tpKzFdLmJlZ2luXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbmRTZWN0aW9uID0gdGhpcy52aWRlby5kdXJhdGlvbjtcblx0XHRcdH1cblx0XHRcdG5ld1NlY3Rpb25zW2ldLmVuZCA9IGVuZFNlY3Rpb247XG5cdFx0fVxuXHRcdHJldHVybiBuZXdTZWN0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYW5kIHNldCB0aGUgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvbiBpbiB0aGUgYXVkaW8vdmlkZW8gKGluIHNlY29uZHMpXG5cdCAqIEdldHRlciBhbmQgc2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TnVibWVyfVxuXHQgKi9cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0dGhpcy52aWRlby5jdXJyZW50VGltZSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgY3VycmVudCBhdWRpby92aWRlbyAoaW4gc2Vjb25kcylcblx0ICogR2V0dGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7TnVibWVyfVxuXHQgKi9cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmR1cmF0aW9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgd2hldGhlciB0aGUgcGxheWJhY2sgb2YgdGhlIGF1ZGlvL3ZpZGVvIGhhcyBlbmRlZCBvciBub3Rcblx0ICogR2V0dGVyXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBlbmRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWRlby5lbmRlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuZCBzZXQgd2hldGhlciB0aGUgcGxheWJhY2sgb2YgdGhlIGF1ZGlvL3ZpZGVvIGhhcyBlbmRlZCBvciBub3Rcblx0ICogR2V0dGVyIGFuZCBzZXR0ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqIEB0eXBlIHtNZWRpYUVycm9yfFN0cmluZ31cblx0ICogQGZpcmVzIFBsYXllciNlcnJvclxuXHQgKi9cblx0Z2V0IGVycm9yKCkge1xuXHRcdHJldHVybiB0aGlzLl9lcnJvciB8fCBudWxsO1xuXHR9XG5cblx0c2V0IGVycm9yKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9lcnJvciA9IG51bGw7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0tZXJyb3InKTtcblx0XHRcdGlmKHRoaXMuZXJyb3JEaXNwbGF5KSB7XG5cdFx0XHRcdHRoaXMuZXJyb3JEaXNwbGF5LmVsZW1lbnQuaGlkZSgpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0dGhpcy5fZXJyb3IgPSBuZXcgTWVkaWFFcnJvcih2YWx1ZSk7XG5cblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tZXJyb3InKTtcblxuXHRcdC8qKlxuXHRcdCAqIGVycm9yIGV2ZW50XG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgUGxheWVyI2Vycm9yXG5cdFx0ICogQHByb3BlcnR5IHtNZWRpYUVycm9yfSBlcnJvclxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigkKCcjdmlkZW8nKSwgb3B0aW9ucyk7XG5cdFx0ICogcGxheWVyLm9uKCdlcnJvcicsIChlLCBkYXRhKSA9PiBjb25zb2xlLmVycm9yKGRhdGEuZXJyb3IpKTtcblx0XHQgKi9cblx0XHR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgeyBlcnJvciA6IHRoaXMuX2Vycm9yfSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIGhlaWdodCBvZiBwbGF5ZXIuIElmIHlvdSB3YW50IGdldCBoZWlnaHQgb25seSBvZiB2aWRlbyBlbGVtZW50LCB1c2UgdGhpcy52aWRlby5oZWlnaHQgb3Igd2hhdGV2ZXJcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHR5cGUge051bWJlcn1cblx0ICogQG1lbWJlcm9mISBQbGF5ZXIjXG5cdCAqL1xuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaGVpZ2h0KClcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdW5uZWNlc3NhcnkgdmlkZW8gaGVpZ3RoXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZGVvSGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLnZpZGVvLmhlaWdodDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKiBAbWVibWVyb2YhIFBsYXllciNcblx0ICovXG5cdGdldCB1c2VyQWN0aXZlKCkge1xuXHRcdHJldHVybiB0aGlzLl91c2VyQWN0aXZlIHx8IGZhbHNlO1xuXHR9XG5cblx0c2V0IHVzZXJBY3RpdmUodmFsdWUpIHtcblx0XHRpZih2YWx1ZSAhPT0gdGhpcy5nZXRVc2VyQWN0aXZlKSB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZlID0gdmFsdWU7XG5cdFx0XHR0aGlzLnRvZ2dsZUNsYXNzKCdsZXBsYXllci0tdXNlci1hY3RpdmUnLCB2YWx1ZSk7XG5cdFx0XHQvKipcblx0XHRcdCAqIFVzZXIgYWN0aXZlIGV2ZW50XG5cdFx0XHQgKlxuXHRcdFx0ICogQGV2ZW50IFBsYXllciN1c2VyYWN0aXZlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudHJpZ2dlcigndXNlcmFjdGl2ZScpO1xuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldCBhbmQgZ2V0IHBsYXllciB2aWV3LiBWaWV3IENhbiBiZSAnY29tbW9uJywgJ2Z1bGxzY3JlZW4nLCAnbWluaSd3XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEB0eXBlIHtTdHJpbmd9XG5cdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHQgKi9cblx0Z2V0IHZpZXcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZpZXc7XG5cdH1cblxuXHRzZXQgdmlldyh2aWV3KSB7XG5cdFx0aWYodGhpcy52aWV3ICE9IG51bGwpIHtcblx0XHRcdHRoaXMucmVtb3ZlQ2xhc3MoYGxlcGxheWVyLS0ke3RoaXMudmlld31gKTtcblx0XHRcdHRoaXMudHJpZ2dlcihgZGVsdmlldy4ke3RoaXMudmlld31gKTtcblx0XHR9XG5cblx0XHR0aGlzLl92aWV3ID0gdmlldztcblx0XHR0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoYGxlcGxheWVyLS0ke3ZpZXd9YClcblx0XHR0aGlzLnRyaWdnZXIoYHNldHZpZXcuJHt2aWV3fWApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXMsIGFuZCBzZXQgc29tZSBhdHRycyBmcm9tIG9wdGlvbnMgKGxvb3AsIHBvc3RlciBldGMuLi4pLiBDcmVhdGUgbWFpbiBET00gb2JqZWN0c1xuXHQgKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcblxuXHRcdHRoaXMuZWxlbWVudCA9IGNyZWF0ZUVsKCdkaXYnKTtcblxuXG5cdFx0dGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsIDApXG5cdFx0XHQuY3NzKCd3aWR0aCcsIG9wdGlvbnMud2lkdGggJiYgJzEwMCUnKVxuXHRcdFx0LmNzcygnbWF4LXdpZHRoJywgb3B0aW9ucy53aWR0aClcblxuXHRcdC8qKlxuXHRcdCAqIEVycm9yIGRpc3BsYXkgY29tcG9uZW50LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge0Vycm9yRGlzcGxheX1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLmVycm9yRGlzcGxheSA9IG5ldyBFcnJvckRpc3BsYXkodGhpcyk7XG5cblxuXHRcdC8qKlxuXHRcdCAqIFBsYXkgYnV0dG9uIGNvbXBvbmVudC5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtQbGF5QnV0dG9ufVxuXHRcdCAqIEBtZW1iZXJvZiEgUGxheWVyI1xuXHRcdCAqL1xuXHRcdHRoaXMucGxheUJ1dHRvbiA9IG5ldyBQbGF5QnV0dG9uKHRoaXMpO1xuXG5cdFx0Ly8gVE9ETzog0JLRi9C90LXRgdGC0Lgg0Y3RgtC+INCyINC+0YLQtNC10LvRjNC90LXRi9C5INC60L7QvNC/0L7QvdC10L3RglxuXHRcdHRoaXMubG9hZGVyID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLWxvYWRlci1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLCB7XG5cdFx0XHRcdGljb25OYW1lIDogJ3JlZnJlc2gnLFxuXHRcdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItbG9hZGVyLWNvbnRhaW5lcl9faWNvbidcblx0XHRcdH0pLmVsZW1lbnQpO1xuXG5cblx0XHQvKipcblx0XHQgKiBTcGxhc2ggaWNvbiBjb21wb25lbnQuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7U3BsYXNoSWNvbn1cblx0XHQgKiBAbWVtYmVyb2YhIFBsYXllciNcblx0XHQgKi9cblx0XHR0aGlzLnNwbGFzaEljb24gPSBuZXcgU3BsYXNoSWNvbih0aGlzKTtcblxuXHRcdHRoaXMudmlkZW9Db250YWluZXIgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXZpZGVvJ1xuXHRcdH0pXG5cdFx0LmFwcGVuZCh0aGlzLmVycm9yRGlzcGxheS5lbGVtZW50KVxuXHRcdC5hcHBlbmQodGhpcy5wbGF5QnV0dG9uLmVsZW1lbnQpXG5cdFx0LmFwcGVuZCh0aGlzLmxvYWRlcilcblx0XHQuYXBwZW5kKHRoaXMuc3BsYXNoSWNvbi5lbGVtZW50KVxuXG5cdFx0dGhpcy5wb3N0ZXIgPSBuZXcgUG9zdGVyKHRoaXMpO1xuXHRcdHRoaXMudmlkZW9Db250YWluZXIuYXBwZW5kKHRoaXMucG9zdGVyLmVsZW1lbnQpO1xuXG5cblx0XHRjb25zdCBsYXN0VGltZXIgPSBuZXcgVGltZSh0aGlzLCB7XG5cdFx0XHRmbiA6IChwbGF5ZXIpID0+IHtcblx0XHRcdFx0Y29uc3QgdmlkZW8gPSBwbGF5ZXIudmlkZW87XG5cdFx0XHRcdHJldHVybiBzZWNvbmRzVG9UaW1lKHZpZGVvLmR1cmF0aW9uIC0gdmlkZW8uY3VycmVudFRpbWUpO1xuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRpZih0aGlzLm9wdGlvbnMudmlkZW9JbmZvKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ29wdGlvbnMudmlkZW9JbmZvIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgaXN0ZWFkIG9wdGlvbnMuZGVzY3JpcHRpb24nKTtcblx0XHR9XG5cblx0XHR0aGlzLmluZm9FbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9faW5mbydcblx0XHR9KVxuXHRcdC5hcHBlbmQoY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdsZXBsYXllcl9fdGl0bGUnLFxuXHRcdFx0aHRtbCA6IHRoaXMub3B0aW9ucy50aXRsZSB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX192aWRlby1pbmZvJyxcblx0XHRcdGh0bWwgOiB0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb24gfHwgdGhpcy5vcHRpb25zLnZpZGVvSW5mbyB8fCBcIlwiXG5cdFx0fSkpXG5cdFx0LmFwcGVuZChjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyX19sYXN0Jyxcblx0XHRcdGh0bWwgOiBg0JLQuNC00LXQviDQt9Cw0LrQvtC90YfQuNGC0YHRjyDRh9C10YDQtdC3IGAsXG5cdFx0fSkuYXBwZW5kKGxhc3RUaW1lci5lbGVtZW50KSlcblxuXHRcdHRoaXMuaW5uZXJFbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyX19pbm5lcicpXG5cdFx0XHQuYXBwZW5kKHRoaXMudmlkZW9Db250YWluZXIpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaW5mb0VsZW1lbnQpXG5cblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5pbm5lckVsZW1lbnQpXG5cblx0XHR0aGlzLmFkZENsYXNzKCdsZXBsYXllci0tcGF1c2VkJyk7XG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLXZpcmdpbicpO1xuXG5cblx0XHRpZihvcHRpb25zLnNlY3Rpb25Db250YWluZXIpIHtcblx0XHRcdHRoaXMuc2VjdGlvbnNDb250YWluZXIgPSAkKG9wdGlvbnMuc2VjdGlvbkNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5iZWZvcmUodGhpcy5lbGVtZW50KTtcblx0XHR0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IG9wdGlvbnMgZnJvbSB2aWRlbydzIGF0dHJpYnV0ZSAoIGhlaWdodCwgd2lkdGgsIHBvc3RlciwgcHJlbG9hZCBldGMuLi4pXG5cdCAqIEdldCBzb3VyY2UgdmlkZW8gZnJvbSBzcmMgYXR0ciBvciA8c291cmNlPiBlbGVtZW50IHdpdGggZGF0YSBhdHRyICdkYXRhLXF1YWxpdHknXG5cdCAqIEFsc28gZ2V0IHNvdXJjZXMgZm9yIGRpZmZlcmVudCBxdWFsaXR5IGZyb20gPHNvdXJjZT4gZWxlbWVudCB3aXRoIGRhdGEgYXR0ciAnZGF0YS1xdWFsaXR5J1xuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge09iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0X29wdGlvbnNGcm9tRWxlbWVudCgpIHtcblx0XHQvLyBDb3B5IHZpZGVvIGF0dHJzIHRvIHRoZSBvcGl0b25zXG5cdFx0Y29uc3QgIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXHRcdGlmIChlbGVtZW50ID09IG51bGwgfHwgZWxlbWVudC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB7fVxuXHRcdH1cblxuXHRcdGxldCBhdHRyT3B0aW9ucyA9IFtcblx0XHRcdCdoZWlnaHQnLFxuXHRcdFx0J3dpZHRoJyxcblx0XHRcdCdwb3N0ZXInLFxuXHRcdFx0J2F1dG9wbGF5Jyxcblx0XHRcdCdsb29wJyxcblx0XHRcdCdtdXRlZCcsXG5cdFx0XHQncHJlbG9hZCcsXG5cdFx0XVxuXHRcdC5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xuXHRcdFx0Y29uc3QgdmFsID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0aWYodmFsICE9IG51bGwpIHtcblx0XHRcdFx0b2JqW2l0ZW1dID0gZWxlbWVudC5hdHRyKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9LCB7fSk7XG5cblx0XHRhdHRyT3B0aW9ucy5zb3VyY2VzID0gW107XG5cblx0XHQvLyBTcmMgaXQgaXMgbWFpbiBzb3VyY2UsIHRoYXQgd2lsbCBiZSBsb2FkXG5cdFx0aWYoZWxlbWVudC5hdHRyKCdzcmMnKSkge1xuXHRcdFx0YXR0ck9wdGlvbnMuc3JjID0ge1xuXHRcdFx0XHR1cmwgOiBlbGVtZW50LmF0dHIoJ3NyYycpLFxuXHRcdFx0XHR0aXRsZSA6IGVsZW1lbnQuYXR0cignZGF0YS1xdWFsaXR5JykgfHwgZWxlbWVudC5hdHRyKCd0aXRsZScpIHx8ICdkZWZhdWx0J1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgc291cmNlcyBmcm9tIEhUTUw1IHNvdXJjZSBlbGVtZW50IHdpdGggZGF0YS1xdWFsaXR5IGF0dHJcblx0XHQvLyBJZiBkYXRhLXF1YWxpdHkgYXR0ciBkb2VzIG5vdCBleGlzdCAtIG5vXG5cdFx0ZWxlbWVudC5maW5kKCdzb3VyY2UnKS5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHRpdGVtID0gJChpdGVtKTtcblx0XHRcdGlmKCFpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpKSB7XG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0YXR0ck9wdGlvbnMuc291cmNlcyA9IGF0dHJPcHRpb25zLnNvdXJjZXMuY29uY2F0KHtcblx0XHRcdFx0dXJsIDogaXRlbS5hdHRyKCdzcmMnKSxcblx0XHRcdFx0dGl0bGUgOiBpdGVtLmF0dHIoJ2RhdGEtcXVhbGl0eScpIHx8IGl0ZW0uYXR0cigndGl0bGUnKSB8fCAnZGVmYXVsdCdcblx0XHRcdH0pXG5cblx0XHR9KTtcblxuXHRcdHJldHVybiBhdHRyT3B0aW9ucztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBuYW1lIG9mIGljb24uIElmIGxlc3MgdGhlbiAwLjEgcmV0dXJuIHZvbHVtZS1vZmYsXG5cdCAqIGlmIGxlc3MgdGhlbiAwLjUgcmV0dXJuIHZvbHVtZSBkb3duLCBlbHNlIHJldHVybiB2b2x1bWUtdXBcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBWb2x1bWUgdmFsdWVcblx0ICogQHJldHVybnMge1N0cmluZ30gSWNvbiBuYW1lXG5cdCAqL1xuXHRjYWxjVm9sdW1lSWNvbih2YWx1ZSkge1xuXHRcdGlmKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHZhbHVlID0gdGhpcy52aWRlby52b2x1bWU7XG5cdFx0fVxuXHRcdGNvbnN0IHZvbHVtZSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZvbHVtZSA8IHRoaXMub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS1vZmYnO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwLjUpIHtcblx0XHRcdHJldHVybiAndm9sdW1lLWRvd24nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ3ZvbHVtZS11cCc7XG5cdFx0fVxuXHR9XG5cblxuXG5cdC8qKlxuXHQgKiBNZXJnZSBkZWZhdWx0T3B0aW9ucywgcHJlc2V0T3B0aW9ucyB3aXRoIGF0dHJPcHRpb25zIGFuZCB1c2VyJ3Mgb3B0aW9ucztcblx0ICpcblx0ICogQW5kIGNvbXBsZW1lbnQgdHdvIG9iamVjdHM6IGNvbnRyb2xzIGFuZCBleGNsdWRlQ29udHJvbHNcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfaW5pdE9wdGlvbnMoKSB7XG5cdFx0Y29uc3QgYXR0ck9wdGlvbnMgPSB0aGlzLl9vcHRpb25zRnJvbUVsZW1lbnQoKTtcblx0XHRsZXQgcHJlc2V0T3B0aW9ucyA9IHt9O1xuXG5cdFx0aWYgKHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCAmJiBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkpIHtcblx0XHRcdHByZXNldE9wdGlvbnMgPSBQbGF5ZXIuZ2V0UHJlc2V0KHRoaXMuX3VzZXJPcHRpb25zLnByZXNldCkub3B0aW9ucztcblx0XHR9XG5cblxuXHRcdC8vIE1lcmdlIGRlZmF1bHQgb3B0aW9ucyArIHByZXNldCBvcHRpb25zICsgdmlkZW8gYXR0cmlidXR0cysgdXNlciBvcHRpb25zXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIGRlZmF1bHRPcHRpb25zLCBwcmVzZXRPcHRpb25zLCBhdHRyT3B0aW9ucywgdGhpcy5fdXNlck9wdGlvbnMpO1xuXG5cdFx0aWYodGhpcy5vcHRpb25zLnNvdXJjZXMgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLnNvdXJjZXMpKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc291cmNlcyA9IFt0aGlzLm9wdGlvbnMuc291cmNlc11cblx0XHR9XG5cblx0XHRpZih0eXBlb2YgdGhpcy5vcHRpb25zLnNyYyA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zcmMgPSB7IHVybCA6IHRoaXMub3B0aW9ucy5zcmMgfVxuXHRcdH1cblxuXHRcdGlmKHRoaXMub3B0aW9ucy5zcmMgPT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMuc291cmNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3JjID0gdGhpcy5vcHRpb25zLnNvdXJjZXNbMF1cblx0XHR9XG5cblx0XHQvLyBNZXJnZSBjb3JyZWN0bHkgY29udHJvbHMsIHdpdGhvdXQgZGVlcCBtZXJnZVxuXHRcdHRoaXMub3B0aW9ucy5jb250cm9scyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucy5jb250cm9scywgcHJlc2V0T3B0aW9ucy5jb250cm9scywgdGhpcy5fdXNlck9wdGlvbnMuY29udHJvbHMpO1xuXG5cdFx0Ly8gZXhjbHVkZSBjb250cm9scyBvcHRpb25cblx0XHQvLyBUT0RPKGFkaW52YWRpbSk6XG5cdFx0Ly8gU2V0IGRlcHJlY2V0ZWQgZmxhZyBmb3IgdGhpcyBvcHRpb247XG5cdFx0Zm9yIChjb25zdCBuYW1lIGluIHRoaXMub3B0aW9ucy5leGNsdWRlQ29udHJvbHMpIHtcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLmV4Y2x1ZGVDb250cm9scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY29udHJvbENvbGxlY3Rpb24gPSB0aGlzLm9wdGlvbnMuZXhjbHVkZUNvbnRyb2xzW25hbWVdO1xuXHRcdFx0Y29udHJvbENvbGxlY3Rpb24uZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmNvbnRyb2xzW25hbWVdICYmIHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0pIHtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHNbbmFtZV1baW5kZXhdID0gZXhjbHVkZUFycmF5KHRoaXMub3B0aW9ucy5jb250cm9sc1tuYW1lXVtpbmRleF0sIHJvdyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5wcmVzZXQgJiYgUGxheWVyLmdldFByZXNldCh0aGlzLm9wdGlvbnMucHJlc2V0KSkge1xuXHRcdFx0UGxheWVyLmdldFByZXNldCh0aGlzLm9wdGlvbnMucHJlc2V0KS5pbml0T3B0aW9ucygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW5kIGluaXQgYWxsIGNvbnRyb2xzXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X2luaXRDb250cm9scygpIHtcblx0XHRmb3IgKGNvbnN0IG5hbWUgb2YgWydjb21tb24nLCAnZnVsbHNjcmVlbiddKSB7XG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgY29udHJvbENvbGxlY3Rpb24gPSBuZXcgQ29udHJvbENvbGxlY3Rpb24odGhpcywgeyBuYW1lIH0pO1xuXHRcdFx0dGhpcy5lbGVtZW50LmFwcGVuZChjb250cm9sQ29sbGVjdGlvbi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jb250cm9scy5jb21tb24gIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5jb250cm9scy5jb21tb24uYWN0aXZlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXG5cdF9saXN0ZW5Ib3RLZXlzKCkge1xuXG5cdFx0Y29uc3QgaXNLZXlCaW5kaW5nID0gKGUsIGJpbmRpbmcpID0+IHtcblx0XHRcdHJldHVybiAoKGUud2hpY2ggPT09IGJpbmRpbmcua2V5KSB8fCAoZS5rZXkgPT09IGJpbmRpbmcua2V5KSkgJiZcblx0XHRcdFx0XHQoISFiaW5kaW5nLnNoaWZ0S2V5ID09PSBlLnNoaWZ0S2V5KSAmJlxuXHRcdFx0XHRcdCghIWJpbmRpbmcuY3RybEtleSA9PT0gZS5jdHJsS2V5KVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC5vbigna2V5ZG93bi5sZXBsYXllci5ob3RrZXknLCAoZSkgPT4ge1xuXHRcdFx0dGhpcy5vcHRpb25zLmtleUJpbmRpbmcuZm9yRWFjaChiaW5kaW5nID0+IHtcblxuXHRcdFx0XHRpZihpc0tleUJpbmRpbmcoZSwgYmluZGluZykpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0YmluZGluZy5mbih0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXQgc2VjdGlvbnMsIGdldCBhamF4IG9yIGpzb24gd2l0aCBzZWN0aW9ucyBkYXRhIGFuZCBjcmVhdGUgU2VjdGlvbnMgb2JqZWN0IGFuZCBhZGRlZCB0aGVtIHRvIHRoZSBET01cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHtqcVByb21pc2V9IGpRdWVyeSBwcm9taXNlXG5cdCAqL1xuXHRfaW5pdFNlY3Rpb25zKCkge1xuXHRcdGNvbnN0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5vcHRpb25zLmRhdGEgPT0gbnVsbCkge1xuXHRcdFx0ZGZkLnJlamVjdChudWxsKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmdldFNlY3Rpb25EYXRhKCkuZG9uZShzZWN0aW9ucyA9PiB7XG5cdFx0XHRcdHNlY3Rpb25zID0gWy4uLnNlY3Rpb25zXTtcblxuXHRcdFx0XHRjb25zdCBpc1NlY3Rpb25PdXRzaWRlID0gKHRoaXMuc2VjdGlvbnNDb250YWluZXIgJiYgdGhpcy5zZWN0aW9uc0NvbnRhaW5lci5sZW5ndGggPiAwKTtcblxuXHRcdFx0XHRpZiAoc2VjdGlvbnMgPT0gbnVsbCB8fCBzZWN0aW9ucy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRkZmQucmVqZWN0KG51bGwpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNlY3Rpb25zID0gdGhpcy5fY29tcGxldGVTZWN0aW9ucyhzZWN0aW9ucyk7XG5cblx0XHRcdFx0Y29uc3Qgc2VjdGlvbnNDb21wb25lbnQgPSBuZXcgU2VjdGlvbnModGhpcywge1xuXHRcdFx0XHRcdGl0ZW1zIDogc2VjdGlvbnMsXG5cdFx0XHRcdFx0ZnVsbHNjcmVlbk9ubHkgOiBpc1NlY3Rpb25PdXRzaWRlLFxuXHRcdFx0XHRcdGhpZGVTY3JvbGwgOiB0cnVlXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuaW5uZXJFbGVtZW50LmFwcGVuZChzZWN0aW9uc0NvbXBvbmVudC5lbGVtZW50KTtcblxuXHRcdFx0XHRpZiAoaXNTZWN0aW9uT3V0c2lkZSkge1xuXHRcdFx0XHRcdGNvbnN0IG91dHNpZGVTZWN0aW9ucyA9IG5ldyBTZWN0aW9ucyh0aGlzLCB7XG5cdFx0XHRcdFx0XHRpdGVtcyA6IHNlY3Rpb25zXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5zZWN0aW9uc0NvbnRhaW5lci5hcHBlbmQob3V0c2lkZVNlY3Rpb25zLmVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRmZC5yZXNvbHZlKHsgc2VjdGlvbnNDb21wb25lbnQsIGl0ZW1zIDogc2VjdGlvbnMgfSk7XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpXG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb24sIHRoYW4gaW5pdCBhbGwgcGx1Z2lucyBmcm9tIHBsYXllciBvcHRpb25zLlxuXHQgKiBJZiBwbHVnaW4gZG9lc24ndCBleGlzdCB0aHJvdyBhbiBlcnJvclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0X2luaXRQbHVnaW5zKCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMucGx1Z2lucykge1xuXHRcdFx0Zm9yIChjb25zdCBuYW1lIGluIHRoaXMub3B0aW9ucy5wbHVnaW5zKSB7XG5cdFx0XHRcdGlmKCF0aGlzLm9wdGlvbnMucGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuO1xuXHRcdFx0XHRjb25zdCBwbHVnaW5PcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XG5cdFx0XHRcdGlmKHRoaXNbbmFtZV0pIHtcblx0XHRcdFx0XHRpZihwbHVnaW5PcHRpb25zKSB7XG5cdFx0XHRcdFx0XHR0aGlzW25hbWVdKHBsdWdpbk9wdGlvbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBQbHVnaW4gJyR7bmFtZX0nIGRvZXNuJ3QgZXhpc3RgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblxuXHQvKipcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfbGlzdGVuVXNlckFjdGl2aXR5KCkge1xuXHRcdGxldCBtb3VzZUluUHJvZ3Jlc3M7XG5cdFx0bGV0IGxhc3RNb3ZlWDtcblx0XHRsZXQgbGFzdE1vdmVZO1xuXG5cdFx0Y29uc3Qgb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuXHRcdFx0aWYoZS5zY3JlZW5YICE9PSBsYXN0TW92ZVggfHwgZS5zY3JlZW5ZICE9PSBsYXN0TW92ZVkpIHtcblx0XHRcdFx0bGFzdE1vdmVYID0gZS5zY3JlZW5YO1xuXHRcdFx0XHRsYXN0TW92ZVkgPSBlLnNjcmVlblk7XG5cdFx0XHRcdHRoaXMuX3VzZXJBY3Rpdml0eSA9IHRydWVcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBvbk1vdXNlRG93biA9IChlKSA9PiB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cblx0XHRcdC8vIFdoaWxlIHVzZXIgaXMgcHJlc3NpbmcgbW91c2Ugb3IgdG91Y2gsIGRpc3BhdGNoIHVzZXIgYWN0aXZpdHlcblx0XHRcdGNsZWFySW50ZXJ2YWwobW91c2VJblByb2dyZXNzKTtcblxuXHRcdFx0bW91c2VJblByb2dyZXNzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHR9LCAyNTApO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uTW91c2VVcCA9IChlKSA9PiB7XG5cdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlXG5cdFx0XHRjbGVhckludGVydmFsKG1vdXNlSW5Qcm9ncmVzcyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcblxuXHRcdHRoaXMuZWxlbWVudC5vbignbW91c2V1cCcsIG9uTW91c2VVcCk7XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5fdXNlckFjdGl2aXR5ID0gdHJ1ZSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdrZXl1cCcsIChlKSA9PiB0aGlzLl91c2VyQWN0aXZpdHkgPSB0cnVlKTtcblxuXHRcdC8vIFNlZSBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvbGVhcm5pbmctZnJvbS10d2l0dGVyL1xuXHRcdGxldCBpbmFjdGl2aXR5VGltZW91dDtcblx0XHRjb25zdCBkZWxheSA9IHRoaXMub3B0aW9ucy5pbm5hY3Rpdml0eVRpbWVvdXQ7XG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuX3VzZXJBY3Rpdml0eSkge1xuXG5cdFx0XHRcdC8vIFJlc2V0IHVzZXIgYWN0aXZ1dHkgdHJhY2tlclxuXHRcdFx0XHR0aGlzLl91c2VyQWN0aXZpdHkgPSBmYWxzZTtcblxuXHRcdFx0XHR0aGlzLnVzZXJBY3RpdmUgPSB0cnVlO1xuXG5cdFx0XHRcdGNsZWFyVGltZW91dChpbmFjdGl2aXR5VGltZW91dCk7XG5cblx0XHRcdFx0aWYgKGRlbGF5ID4gMCkge1xuXG5cdFx0XHRcdFx0aW5hY3Rpdml0eVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmICghdGhpcy5fdXNlckFjdGl2aXR5KSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudXNlckFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sIDI1MClcblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9wIHNob3dpbmcgc3Bpbm5lciBhbmQgY2xlYXIgZGVsYXkgb2Ygc2hvd2luZyBzcGlubmVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0b3BXYXl0aW5nKCkge1xuXHRcdHRoaXMuX3dhaXRpbmdUaW1lb3V0cy5mb3JFYWNoKGl0ZW0gPT4gY2xlYXJUaW1lb3V0KGl0ZW0pKTtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMgPSBbXTtcblx0XHR0aGlzLnJlbW92ZUNsYXNzKCdsZXBsYXllci0td2FpdGluZycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cgc3Bpbm5lciB3aXRoIGRlbGF5IGluIDMwMG1zXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKi9cblx0X3N0YXJ0V2FpdGluZygpIHtcblx0XHR0aGlzLl93YWl0aW5nVGltZW91dHMucHVzaChzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoJ2xlcGxheWVyLS13YWl0aW5nJyk7XG5cdFx0fSwgMzAwKSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBPbiBpbml0ZWQgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqIEBwYXJhbSB7UGxheWVyRXZlbnR9IGVcblx0ICovXG5cdF9vbkluaXRlZChlKSB7XG5cdFx0dGhpcy5hZGRDbGFzcygnbGVwbGF5ZXItLWluaXRlZCcpO1xuXG5cdFx0dGhpcy5vcHRpb25zLm9uUGxheWVySW5pdGVkLmNhbGwodGhpcywgZSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBPbiBjbGljayB2aWRlbyBldmVudCBoYW5kbGVyLiBGb2N1cyBvbiB2aWRlbyBhbmQgdG9nZ2xlUGxheVxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uQ2xpY2soZSkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLl9kYmxjbGlja1RpbWVvdXQpO1xuXHRcdHRoaXMuX2RibGNsaWNrVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy52aWRlby5lbGVtZW50LmZvY3VzKClcblx0XHRcdHRoaXMudG9nZ2xlUGxheSgpO1xuXHRcdH0sIDMwMCk7XG5cdH1cblxuXHQvKipcblx0ICogT24gZGJsY2xpY2sgb24gdGhlIHZpZGVvIHBsYXllciBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25EYmNsaWNrKGUpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy5fZGJsY2xpY2tUaW1lb3V0KTtcblx0XHR0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBmdWxsc2NyZWVuIGNoYW5nZSBwbGF5ZXIgZXZlbnQgaGFuZGxlclxuXHQgKlxuXHQgKiBAYWNjZXNzIHByaXZhdGVcblx0ICogQHBhcmFtIHtQbGF5ZXJFdmVudH0gZVxuXHQgKi9cblx0X29uRnVsbHNjcmVlbkNoYW5nZShlLCBpc0ZzKSB7XG5cdFx0aWYoaXNGcykge1xuXHRcdFx0dGhpcy52aWV3ID0gJ2Z1bGxzY3JlZW4nO1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZpZXcgPSAnY29tbW9uJztcblxuXHRcdFx0aWYoSVNfQU5EUk9JRF9QSE9ORSB8fCBJU19JUEhPTkUgfHwgSVNfSVBPRCkge1xuXHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHQvKipcblx0ICogT24gcGxheSBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1BsYXllckV2ZW50fSBlXG5cdCAqL1xuXHRfb25QbGF5KCkge1xuXHRcdHRoaXMuc3BsYXNoSWNvbi5zaG93KCdwbGF5Jyk7XG5cdH1cblxuXHQvKipcblx0ICogT24gcGF1c2UgcGxheWVyIGV2ZW50IGhhbmRsZXJcblx0ICogU2hvdyBwYXVzZSBpY29uIGluIHRoZSBjZW50ZXIgb2YgdmlkZW9cblx0ICpcblx0ICogQGFjY2VzcyBwcml2YXRlXG5cdCAqL1xuXHRfb25QYXVzZSgpIHtcblx0XHR0aGlzLnNwbGFzaEljb24uc2hvdygncGF1c2UnKTtcblx0fVxuXG5cdF9vbkVudGl0eUZ1bGxzY3JlbkNoYW5nZSgpIHtcblx0XHRjb25zdCBmc0FwaSA9IEZ1bGxzY3JlZW5BcGk7XG5cdFx0Y29uc3QgaXNGcyA9ICEhZG9jdW1lbnRbZnNBcGkuZnVsbHNjcmVlbkVsZW1lbnRdO1xuXHRcdHRoaXMudHJpZ2dlcignZnVsbHNjcmVlbmNoYW5nZScsIGlzRnMpO1xuXHR9XG5cbn1cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGx1Z2luIGluaXQgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnBsdWdpbignaGVsbG9Xb3JsZCcsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcbiAqICAgIGNvbnN0IHBsYXllciA9IHRoaXM7XG4gKiAgICBwbGF5ZXIub24oJ2NsaWNrJywgKCkgPT4gY29uc29sZS5sb2coJ0hlbGxvIHdvcmxkJykpO1xuICogfSlcbiAqXG4gKi9cblBsYXllci5wbHVnaW4gPSBmdW5jdGlvbihuYW1lLCBmbikge1xuXHRQbGF5ZXIucHJvdG90eXBlW25hbWVdID0gZm47XG59XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIE5hbWUgb2YgY29tcG9uZW50XG4gKiBAcmV0dXJuIHtDb21wb25lbnR9XG4gKi9cblBsYXllci5nZXRDb21wb25lbnQgPSBDb21wb25lbnQuZ2V0Q29tcG9uZW50O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGNvbXBvbmVudFxuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxuICpcbiAqIEBleGFtcGxlXG4gKiBQbGF5ZXIucmVnaXN0ZXJDb21wb25lbnQoJ0Vycm9yRGlzcGxheScsIEVycm9yRGlzcGxheSk7XG4gKi9cblBsYXllci5yZWdpc3RlckNvbXBvbmVudCA9IENvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudDtcblxuLyoqXG4gKiBSZWdpc3RlciBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbnRyb2x9IGNvbnRyb2xcbiAqL1xuUGxheWVyLmdldENvbnRyb2wgPSBDb250cm9sLmdldENvbnRyb2w7XG5cbi8qKlxuICogR2V0IGJ5IG5hbWUgcmVnaXN0ZXJlZCBjb250cm9sXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Q29udHJvbH1cbiAqXG4gKiBAZXhhbXBsZVxuICogUGxheWVyLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuICovXG5QbGF5ZXIucmVnaXN0ZXJDb250cm9sID0gQ29udHJvbC5yZWdpc3RlckNvbnRyb2w7XG5cblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5QbGF5ZXIuc2Vjb25kc1RvVGltZSA9IHNlY29uZHNUb1RpbWU7XG5cblxuLyoqXG4gKiBTdGF0aWMgaGVscGVyIGZvciBjcmVhdGluZyBhIHBsdWdpbnMgZm9yIGxlcGxheWVyXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHBsdWdpblxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGZuIFBsdWdpbiBpbml0IGZ1bmN0aW9uXG4gKlxuICogQGV4YW1wbGVcbiAqIFBsYXllci5wcmVzZXQoJ2NvbW1vbicsIHtcbiAqICAgICB3aWR0aCA6ICcxMDAlJyxcbiAqICAgICBwbHVnaW5zIDoge1xuICogICAgICAgICBtaW5pcGxheWVyIDogdHJ1ZVxuICogICAgIH1cbiAqIH0pO1xuICovXG5QbGF5ZXIucHJlc2V0ID0gZnVuY3Rpb24obmFtZSwgb2JqKSB7XG5cdGlmKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG5cdFx0UGxheWVyLl9wcmVzZXRzW25hbWVdID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG9wdGlvbnMgOiB7fSxcblx0XHRcdGluaXRPcHRpb25zIDogbm9vcFxuXHRcdH0sIG9iaik7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFBsYXllci5fcHJlc2V0c1tuYW1lXSA9IG9iaigpO1xuXHR9XG59O1xuXG5cblBsYXllci5nZXRQcmVzZXQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdGlmKFBsYXllci5fcHJlc2V0c1tuYW1lXSkge1xuXHRcdHJldHVybiBQbGF5ZXIuX3ByZXNldHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcihgcHJlc2V0ICR7bmFtZX0gZG9lc24ndCBleGlzdGApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cblxuUGxheWVyLl9wcmVzZXRzID0ge307XG5cblBsYXllci5Db29raWUgPSBDb29raWU7XG5cblBsYXllci5fbG9hZFNWR1Nwcml0ZSA9IGZ1bmN0aW9uKHN2Zykge1xuXHRjb25zdCBoaWRkZW5FbGVtZW50ID0gJCgnPGRpdi8+JykuaGlkZSgpO1xuXHQkKCdib2R5JykucHJlcGVuZChoaWRkZW5FbGVtZW50LmFwcGVuZChzdmcpKTtcblx0cmV0dXJuIGhpZGRlbkVsZW1lbnQ7XG59XG5cblBsYXllci5kZWZhdWx0U3ByaXRlID0gcmVxdWlyZSgnLi4vLi4vZGlzdC9zdmcvc3ZnLWRlZnMuc3ZnJyk7XG5cbi8qIGdsb2JhbCBWRVJTSU9OICovXG5QbGF5ZXIudmVyc2lvbiA9IFZFUlNJT047XG5cbndpbmRvdy4kLmZuLmxlUGxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQbGF5ZXIoJCh0aGlzKSwgb3B0aW9ucyk7XG5cdH0pO1xufTtcblxud2luZG93LiQubGVQbGF5ZXIgPSBQbGF5ZXI7XG5cbndpbmRvdy5sZVBsYXllciA9IFBsYXllcjtcblxuXG4vKipcbiAqIE1pbmkgUGxheWVyIHBsdWdpblxuICpcbiAqIEBwbHVnaW5cbiAqL1xuUGxheWVyLnBsdWdpbignbWluaXBsYXllcicsIGZ1bmN0aW9uKHBsdWdpbk9wdGlvbnMpIHtcblx0Y29uc3QgcGxheWVyID0gdGhpcztcblxuXHQvLyDQnNC10YDQttC40Lwg0YEgdGhpcy5vcHRpb25zLm1pbmlwbGF5ZXIsINGH0YLQvtCx0Ysg0L3QtSDRgdC70L7QvNCw0YLRjCDQvtCx0YDQsNGC0L3Rg9GOINGB0L7QstC80LXRgdGC0LjQvNC+0YHRjCwg0YLQsNC6INC60LDQuiDRgNCw0L3RjNGI0LVcblx0Ly8g0LzQuNC90LjQv9C70LXQtdGAINC90LUg0LHRi9C7INC/0LvQsNCz0LjQvdC+0Lwg0L/Qu9C10LXRgNCwLlxuXHRjb25zdCBvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRvZmZzZXRTaG93IDogKHBsYXllcikgPT4ge1xuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gcGxheWVyLmVsZW1lbnQub2Zmc2V0KCkudG9wXG5cdFx0XHRcdCsgcGxheWVyLmVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuXHRcdFx0XHQtIHBsYXllci5nZXRDb250cm9scygnY29tbW9uJykuZWxlbWVudC5oZWlnaHQoKTtcblxuXHRcdFx0cmV0dXJuIG9mZnNldDtcblx0XHR9XG5cdH0sIHRoaXMub3B0aW9ucy5taW5pcGxheWVyLCBwbHVnaW5PcHRpb25zKTtcblxuXHRjb25zdCBjb250cm9scyA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzLCB7XG5cdFx0bmFtZSA6ICdtaW5pJyxcblx0XHRjb250cm9scyA6IG9wdGlvbnMuY29udHJvbHMsXG5cdFx0Y29udHJvbE9wdGlvbnMgOiB7XG5cdFx0XHRjb250cm9sIDoge1xuXHRcdFx0XHRkaXNhYmxlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vINCS0YHRgtCw0LLQu9GP0LXQvCDQsiBpbmZvRWxlbWVudCDQv9C+0LQgdGl0bGUg0LggZGVzY3JpcHRpb25cblx0dGhpcy5pbmZvRWxlbWVudC5hcHBlbmQoY29udHJvbHMuZWxlbWVudCk7XG5cblx0LyoqXG5cdCAqIFJldHVybiBvZmZzZXQgb24gb1kgLCB3aGVuIG1pbmlwbGF5ZXIgc2hvdWxkIHNob3dpbmcgb3IgaGlkaW5nXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRjb25zdCBvZmZzZXRTaG93ID0gKCkgPT4ge1xuXHRcdGlmICgkLmlzRnVuY3Rpb24ob3B0aW9ucy5vZmZzZXRTaG93KSkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMub2Zmc2V0U2hvdyhwbGF5ZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zLm9mZnNldFNob3dcblx0fVxuXG5cdGNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuXHRcdHJldHVybiBvcHRpb25zLndpZHRoIHx8IHRoaXMuZWxlbWVudC53aWR0aCgpO1xuXHR9XG5cblxuXHR0aGlzLl91cGRhdGVNaW5pUGxheWVyID0gKGUsIGZvcmNlKSA9PiB7XG5cdFx0Y29uc3Qgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0Ly8gQmVjYXVzZSBpbiBmb3JjZSB1cGRhdGUsIGZvciBub3JtYWxseSBjb3VudCBoZWlnaHQgYW5kIHBhZGRpbmdcblx0XHQvLyBtaW5pcGxheWVyIGJlZm9yZSB0aGUgc2hvdyBtdXN0IGZpcnN0IGJlIGhpZGRlblxuXHRcdGlmKGZvcmNlKSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKGZvcmNlKTtcblx0XHR9XG5cblx0XHRpZihzY3JvbGxUb3AgPiBvZmZzZXRTaG93KCkpIHtcblx0XHRcdHRoaXMuc2hvd01pbmlQbGF5ZXIoZm9yY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmhpZGVNaW5pUGxheWVyKCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zaG93TWluaVBsYXllciA9IChmb3JjZSkgPT4ge1xuXHRcdGlmICghZm9yY2UgJiYgdGhpcy52aWV3ID09PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBBZGRlZCBlbXB0eSBzcGFjZVxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgdGhpcy52aWRlb0NvbnRhaW5lci5oZWlnaHQoKSk7XG5cblx0XHR0aGlzLnZpZXcgPSdtaW5pJztcblx0fVxuXG5cdHRoaXMuaGlkZU1pbmlQbGF5ZXIgPSAoZm9yY2UpID0+IHtcblx0XHRpZighZm9yY2UgJiYgdGhpcy52aWV3ICE9PSAnbWluaScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy52aWV3ID0gJ2NvbW1vbic7XG5cdH1cblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIuYmluZCh0aGlzKSk7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgdGhpcy5fdXBkYXRlTWluaVBsYXllci5iaW5kKHRoaXMpKTtcblx0dGhpcy5vbignaW5pdGVkJywgKGUpID0+IHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoZSwgdHJ1ZSkpO1xuXG5cdHRoaXMub25TZXRWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgZ2V0V2lkdGgoKSk7XG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCB0aGlzLnZpZGVvLmhlaWdodCk7XG5cdH0pO1xuXG5cdHRoaXMub25EZWxWaWV3KCdtaW5pJywgKCkgPT4ge1xuXHRcdHRoaXMuaW5uZXJFbGVtZW50LmNzcygnbWF4LXdpZHRoJywgJycpXG5cdFx0dGhpcy5pbm5lckVsZW1lbnQuY3NzKCdoZWlnaHQnLCAnJylcblxuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ3BhZGRpbmctdG9wJywgJycpO1xuXHR9KTtcblxuXG5cdHRoaXMuX3VwZGF0ZU1pbmlQbGF5ZXIoKTtcbn0pO1xuXG5QbGF5ZXIucHJlc2V0KCd2cHMnLCByZXF1aXJlKCcuL3ByZXNldHMvdnBzLmpzJykucHJlc2V0KTtcblBsYXllci5wcmVzZXQoJ3NpbXBsZScsIHJlcXVpcmUoJy4vcHJlc2V0cy9zaW1wbGUuanMnKS5wcmVzZXQpO1xuUGxheWVyLnByZXNldCgnc21zJywgcmVxdWlyZSgnLi9wcmVzZXRzL3Ntcy5qcycpLnByZXNldCk7XG5QbGF5ZXIucHJlc2V0KCdjb21wcmVzc2VkJywgcmVxdWlyZSgnLi9wcmVzZXRzL2NvbXByZXNzZWQuanMnKS5wcmVzZXQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9sZS1wbGF5ZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIkXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBDb250cm9sJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmljb25OYW1lXSBOYW1lIG9mIGNvbnRyb2wncyBpY29uLiBJZiBlbXB0eSwgY29udHJvbCB3aWxsIG5vdCBoYXZlIGEgaWNvblxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNsYXNzTmFtZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5uYW1lXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNvbGxlY3Rpb25dXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudGl0bGVdIENvbnRvcmwncyB0b29sdGlwLCB0aXRsZSBhdHRyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5vbkNsaWNrXSBPbiBjbGljayBldmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRpc2FibGU9ZmFsc2VdXG4gKiBAcHJvcGVydHkge0ljb259IGljb24gSWNvbiBpbiBjb250cm9sLCBpZiBpdCBpcyBleGlzdFxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIENvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5kaXNhYmxlID0gdGhpcy5vcHRpb25zLmRpc2FibGUgIT0gbnVsbD8gdGhpcy5vcHRpb25zLmRpc2FibGUgOiB0cnVlO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIChlKSA9PiB7XG5cdFx0XHR0aGlzLmRpc2FibGUgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZSAhPSBudWxsPyB0aGlzLm9wdGlvbnMuZGlzYWJsZSA6IGZhbHNlO1xuXHRcdH0pXG5cblx0XHR0aGlzLmVsZW1lbnQub24oe1xuXHRcdFx0Y2xpY2sgOiB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHRsZXBsYXllcl9jb250cm9sX2NsaWNrIDogdGhpcy5vbkNsaWNrLmJpbmQodGhpcylcblx0XHR9KTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLm9uUGxheWVySW5pdGVkLmJpbmQodGhpcykpXG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuaWNvbk5hbWUpIHtcblx0XHRcdHRoaXMuaWNvbiA9IG5ldyBJY29uKHRoaXMucGxheWVyLCB7XG5cdFx0XHRcdGljb25OYW1lIDogdGhpcy5vcHRpb25zLmljb25OYW1lXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0bGV0IGF0dHJzID0ge1xuXHRcdFx0cm9sZSA6ICdidXR0b24nLFxuXHRcdFx0dGl0bGUgOiB0aGlzLm9wdGlvbnMudGl0bGVcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5idWlsZENTU0NsYXNzKCkpXG5cdFx0XHQuYXBwZW5kKHRoaXMuaWNvbiAmJiB0aGlzLmljb24uZWxlbWVudClcblx0XHRcdC5hdHRyKGF0dHJzKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgY29udHJvbCAke3RoaXMub3B0aW9ucy5jbGFzc05hbWV9ICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG5cdHNldCBkaXNhYmxlKHZhbHVlKSB7XG5cdFx0dGhpcy5fZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZGlzYWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZGlzYWJsZVxuXHR9XG5cblx0X29uQ2xpY2sgKGUpIHtcblx0XHRpZiAodGhpcy5kaXNhYmxlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9jb250cm9sX2NsaWNrJyk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignY29udHJvbGNsaWNrJywgeyBjb250cm9sIDogdGhpcyB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKlxuXHQgKiBPbiBjbGljayBldmVudCBoYW5kbGVyXG5cdCAqIEBhYnN0YWN0XG5cdCAqL1xuXHRvbkNsaWNrIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMub3B0aW9ucy5vbkNsaWNrLmNhbGwodGhpcywgYXJndW1lbnRzKTtcblx0XHR9XG5cdH1cblxuXG5cdG9uUGxheWVySW5pdGVkIChlLCBkYXRhKSB7XG5cblx0fVxuXG5cdHN0YXRpYyByZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCkge1xuXHRcdGlmKG5hbWUgPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKENvbnRyb2wuX2NvbnRyb2xzID09IG51bGwpIHtcblx0XHRcdENvbnRyb2wuX2NvbnRyb2xzID0ge307XG5cdFx0fVxuXG5cdFx0Q29udHJvbC5fY29udHJvbHNbbmFtZV0gPSBjb250cm9sO1xuXG5cdFx0cmV0dXJuIGNvbnRyb2w7XG5cdH1cblxuXHRzdGF0aWMgZ2V0Q29udHJvbChuYW1lKSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29udHJvbC5fY29udHJvbHMgJiYgQ29udHJvbC5fY29udHJvbHNbbmFtZV0pIHtcblx0XHRcdHJldHVybiBDb250cm9sLl9jb250cm9sc1tuYW1lXTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHBsYXllciwgbmFtZSwgb3B0aW9ucykge1xuXHRcdHZhciBjb250cm9sQ2xhc3MgPSB0aGlzLmdldENvbnRyb2wobmFtZSk7XG5cdFx0aWYoY29udHJvbENsYXNzID09IG51bGwpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYENvbnRyb2wgJHtuYW1lfSBkb2Vzbid0IGV4aXN0YCk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IGNvbnRyb2xDbGFzcyhwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sJywgQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY29udHJvbCcsIENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbXBvbmVudC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbi8qKlxuICogUGxheWVyIGNvbXBvbmVudCAtIEJhc2UgY2xhc3MgZm9yIGFsbCBVSVxuICpcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9ucyBvZiBjb21wb25lbnRcbiAqIEBwYXJhbSB7alF1ZXJ5fSBbb3B0aW9ucy5lbGVtZW50XSDQrdC70LXQvNC10L3RgiDQvdCwINC60L7RgtC+0YDQvtC8INC80L7QttC90L4g0LjQvdC40YbQuNC70LjQt9C+0LLQsNGC0Ywg0LrQu9Cw0YHRgS5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZWxlbWVudFxuICogQGNsYXNzIENvbXBvbmVudFxuICovXG5jbGFzcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y3JlYXRlRWxlbWVudCA6IHRydWVcblx0XHR9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG5cdFx0aWYoIXBsYXllciAmJiB0aGlzLnBsYXkgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIgPSBwbGF5ZXIgPSB0aGlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcblx0XHR9XG5cblx0XHRpZihvcHRpb25zLmNyZWF0ZUVsZW1lbnQpIHtcblxuXHRcdFx0aWYgKG9wdGlvbnMuZWxlbWVudCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuZWxlbWVudC5sZW5ndGggIT09IDEpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgQ29tcG9uZW50LnByb3RvdHlwZS5lbGVtZW50Lmxlbmd0aCBtdXN0IGVxdWFsIDEsIG5vdCAke3RoaXMuZWxlbWVudC5sZW5ndGh9XFxuYCwgdGhpcy5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbGVtZW50WzBdLl9fbm9kZSA9IHRoaXM7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBhYnN0cmFjdFxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdC8qKlxuXHQgKiBAYWJzdHJhY3Rcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuICcnXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIGZvY3VzIHRvIHRoaXMgY29tcG9uZW50XG5cdCAqL1xuXHRmb2N1cygpIHtcblx0XHR0aGlzLmVsZW1lbnQuZm9jdXMoKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgZm9jdXMgZnJvbSB0aGlzIGNvbXBvbmVudFxuXHQgKi9cblx0Ymx1cigpIHtcblx0XHR0aGlzLmVsZW1lbnQuYmx1cigpO1xuXHR9XG5cblxuXHQvKipcblx0ICogRW1pdCBhIHBsYXllciBldmVudCAodGhlIG5hbWUgb2YgZXZlbnQgd291bGQgYmUgYSBsZXBsYXllcl9zbXRoKVxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG5cdCAqIEBwYXJhbSB7QXJndW1lbnRzfSAuLi5hcmdzIGpRdWVyeS5mbi5vbiBvdGhlciBhcmd1bWVudHNcblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0dHJpZ2dlcihldmVudE5hbWUsIC4uLmFyZ3MpIHtcblx0XHRjb25zdCBldmVudCA9ICQuRXZlbnQoYGxlcGxheWVyXyR7ZXZlbnROYW1lfWAsIHsgcGxheWVyIDogdGhpcy5wbGF5ZXIgfSk7XG5cdFx0dGhpcy5lbGVtZW50LnRyaWdnZXJIYW5kbGVyKGV2ZW50LCAuLi5hcmdzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cblx0LyoqXG5cdCAqIExpc3RlbiBhIHBsYXllciBldmVudCB3aXRoIGxlcGxheWVyXyBzdWZmaXhcblx0ICpcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuXHQgKiBAcGFyYW0ge0FyZ3VtZW50c30gLi4uYXJncyBqUXVlcnkuZm4ub24gb3RoZXIgYXJndW1lbnRzXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdG9uKGV2ZW50TmFtZSwgLi4uYXJncykge1xuXHRcdHRoaXMuZWxlbWVudC5vbihgbGVwbGF5ZXJfJHtldmVudE5hbWV9YCwgLi4uYXJncyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXG5cdG9uZShldmVudE5hbWUsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLmVsZW1lbnQub25lKGBsZXBsYXllcl8ke2V2ZW50TmFtZX1gLCAuLi5hcmdzKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEFkZCB0aGUgQ1NTIGNsYXNzIGZvciBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgTmFtZSBvZiBjbGFzcyAobm90IGEgc2VsZWN0b3IsIGl0J3MgbWVhbiwgdGhhdCBzdHJpbmcgc291bGQgYmUgd2l0aG91dCBwb2ludCBhdCB0aGUgc3RhcnQpXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdGFkZENsYXNzKGNsYXNzTmFtZSkge1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSB0aGUgQ1NTIGNsYXNzIGZyb20gZ2VuZXJhbCBsZXBsYXllciBET00gZWxlbWVudFxuXHQgKlxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIE5hbWUgb2YgY2xhc3Ncblx0ICogQHJldHVybnMge1BsYXllcn0gdGhpc1xuXHQgKi9cblx0cmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBDU1MgY2xhc3MgZnJvbSBnZW5lcmFsIGxlcGxheWVyIERPTSBlbGVtZW50XG5cdCAqXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcblx0ICogQHBhcmFtIHtCb29sZWFufSBmbGFnXG5cdCAqIEByZXR1cm5zIHtQbGF5ZXJ9IHRoaXNcblx0ICovXG5cdHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSwgZmxhZykge1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhjbGFzc05hbWUsIGZsYWcpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpO1xuXHR9XG5cblxuXHRzdGF0aWMgcmVnaXN0ZXJDb21wb25lbnQobmFtZSwgY29tcG9uZW50KSB7XG5cdFx0aWYobmFtZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoQ29tcG9uZW50Ll9jb21wb25lbnRzID09IG51bGwpIHtcblx0XHRcdENvbXBvbmVudC5fY29tcG9uZW50cyA9IHt9O1xuXHRcdH1cblxuXHRcdENvbXBvbmVudC5fY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcblxuXHRcdHJldHVybiBjb21wb25lbnQ7XG5cdH1cblxuXHRzdGF0aWMgZ2V0Q29tcG9uZW50KG5hbWUpIHtcblx0XHRpZihuYW1lID09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZihDb21wb25lbnQuX2NvbXBvbmVudHMgJiYgQ29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdKSB7XG5cdFx0XHRyZXR1cm4gQ29tcG9uZW50Ll9jb21wb25lbnRzW25hbWVdO1xuXHRcdH1cblxuXHR9XG5cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbXBvbmVudCcsIENvbXBvbmVudCk7XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEljb24uanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBJY29uJ3Mgb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmljb25OYW1lPScnXSBJY29uJ3MgbmFtZS4gSWYgdXNlIHN2Z3Nwcml0ZSBpY29ucywgaWNvbk5hbWUgaXQncyBpZCBpbiBzcHJpdGVcbiAqIEBjbGFzcyBJY29uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJycsXG5cdFx0XHRpY29uTmFtZSA6ICcnXG5cdFx0fSwgb3B0aW9ucylcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0dGhpcy5fdXNlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd1c2UnKTtcblx0XHR0aGlzLl9zdmdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuXG5cdFx0dGhpcy5pY29uTmFtZSA9IHRoaXMuX2ljb25OYW1lID0gdGhpcy5vcHRpb25zLmljb25OYW1lO1xuXHRcdHRoaXMuX3N2Z1RhZy5hcHBlbmRDaGlsZCh0aGlzLl91c2VUYWcpO1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKVxuXHRcdFx0LmFwcGVuZCgkKHRoaXMuX3N2Z1RhZykpO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9IGxlcGxheWVyLWljb24gJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWBcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgaWNvbk5hbWUgZmllbGRcblx0ICogQHBhcmFtIHtTdHJpbmd9IGljb25OYW1lXG5cdCAqL1xuXHRzZXQgaWNvbk5hbWUoaWNvbk5hbWUpIHtcblx0XHRsZXQgYXR0ck5TID0gWydodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnXVxuXHRcdHRoaXMuX3VzZVRhZy5yZW1vdmVBdHRyaWJ1dGVOUyguLi5hdHRyTlMsIGAke3RoaXMucGxheWVyLm9wdGlvbnMuc3ZnUGF0aH0jbGVwbGF5ZXItaWNvbi0ke3RoaXMuaWNvbk5hbWV9YClcblx0XHR0aGlzLl91c2VUYWcuc2V0QXR0cmlidXRlTlMoLi4uYXR0ck5TLCBgJHt0aGlzLnBsYXllci5vcHRpb25zLnN2Z1BhdGh9I2xlcGxheWVyLWljb24tJHtpY29uTmFtZX1gKVxuXHRcdHRoaXMuX2ljb25OYW1lID0gaWNvbk5hbWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0dGVyIG9mIGljb25OYW1lIGZpZWxkXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gSWNvbidzIG5hbWVcblx0ICovXG5cdGdldCBpY29uTmFtZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2ljb25OYW1lO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdJY29uJywgSWNvbik7XG5leHBvcnQgZGVmYXVsdCBJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvSWNvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUGxheUJ1dHRvbi5qc1xuICovXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKi9cbmNsYXNzIFBsYXlCdXR0b24gZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpXG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5fb25EYmNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRjb25zdCBpbm5lciA9IGNyZWF0ZUVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnbGVwbGF5ZXItcGxheS1idXR0b25fX2J1dHRvbidcblx0XHR9KVxuXHRcdC5hcHBlbmQobmV3IEljb24odGhpcy5wbGF5ZXIsIHsgaWNvbk5hbWUgOiAncGxheScgfSkuZWxlbWVudCk7XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogdGhpcy5idWlsZENTU0NsYXNzXG5cdFx0fSlcblx0XHQuYXBwZW5kKGlubmVyKTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRvbkNsaWNrKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRfb25EYmNsaWNrKCkge1xuXHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgbGVwbGF5ZXItcGxheS1idXR0b25gXG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlCdXR0b24nLCBQbGF5QnV0dG9uKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdwbGF5IGJ1dHRvbicsIFBsYXlCdXR0b24pO1xuZXhwb3J0IGRlZmF1bHQgUGxheUJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlCdXR0b24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIHRpbWUuanNcbiAqXG4gKiBAbW9kdWxlIHRpbWVcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLyoqXG4gKiBDb252ZXJ0IHNlY29uZHMgdG8gZm9ybWF0IHN0cmluZyAnaGg/Om1tOnNzJ1xuICpcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyBTZWNvbmRzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNob3dIb3VycyBjb252ZXJ0IHRvIGZvcm1hdCAnaGg6bW06c3MnXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kc1RvVGltZSAoc2Vjb25kcywgc2hvd0hvdXJzKSB7XG5cdHZhciBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG5cdHZhciBtID0gTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKTtcblx0dmFyIHMgPSBNYXRoLmZsb29yKHNlY29uZHMgJSAzNjAwICUgNjApO1xuXHR2YXIgb3V0ID0gJyc7XG5cdGlmIChtIDwgMTApIHtcblx0XHRtID0gJzAnICsgbTtcblx0fVxuXHRpZiAocyA8IDEwKSB7XG5cdFx0cyA9ICcwJyArIHM7XG5cdH1cblx0b3V0ID0gYCR7bX06JHtzfWA7XG5cblx0aWYoaCA+IDAgfHwgc2hvd0hvdXJzKSB7XG5cdFx0b3V0ID0gYCR7aH06YCArIG91dFxuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cblxuLyoqXG4gKiBSZXR1cm4gbGVuZ3RoIC8gZW5kXG4gKlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVibWVyfSBlbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnRpZnkgKGxlbmd0aCwgZW5kKSB7XG5cdC8vIG9yIHplcm8gYmVhY2FzZSBOYU5cblx0Y29uc3QgcGVyY2VudCA9IChsZW5ndGggLyBlbmQpIHx8IDA7XG5cdHJldHVybiAocGVyY2VudCA+PSAxKSA/IDEgOiBwZXJjZW50O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbCh0YWc9J2RpdicsIHByb3BzKSB7XG5cdGlmKHByb3BzICYmIHByb3BzLmNsYXNzTmFtZSkge1xuXHRcdHByb3BzW1wiY2xhc3NcIl0gPSBwcm9wcy5jbGFzc05hbWU7XG5cdFx0ZGVsZXRlIHByb3BzLmNsYXNzTmFtZTtcblx0fVxuXHRyZXR1cm4gJChgPCR7dGFnfS8+YCwgcHJvcHMpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGNvbnN0IGdldFNjcm9sbEJhcldpZHRoID0gKGZ1bmN0aW9uKCkge1xuXHRsZXQgcmVzdWx0O1xuXG5cdHJldHVybiBmdW5jdGlvbigpIHtcblxuXHRcdGlmKHJlc3VsdCAhPSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdGNvbnN0IG91dGVyID0gJCgnPGRpdiAvPicpLmNzcyh7XG5cdFx0XHR2aXNpYmlsaXR5IDogJ2hpZGRlbicsXG5cdFx0XHR3aWR0aCA6IDEwMCxcblx0XHRcdG92ZXJmbG93IDogJ3Njcm9sbCdcblx0XHR9KS5hcHBlbmRUbygnYm9keScpO1xuXG5cdFx0Y29uc3Qgd2lkdGhXaXRoU2Nyb2xsID0gJCgnPGRpdiAvPicpLmNzcyh7XG5cdFx0XHR3aWR0aCA6ICcxMDAlJ1xuXHRcdH0pLmFwcGVuZFRvKG91dGVyKS5vdXRlcldpZHRoKCk7XG5cblx0XHRvdXRlci5yZW1vdmUoKTtcblx0XHRyZXR1cm4gcmVzdWx0ID0gMTAwIC0gd2lkdGhXaXRoU2Nyb2xsO1xuXHR9XG5cbn0oKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvdXRpbHMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNwbGFzaEljb24uanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFNwbGFzaEljb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBTcGxhc2hJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRzaG93KG5hbWUpIHtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc3BsYXNoaWNvbi0tYWN0aXZlJyk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNwbGFzaGljb24tLWFjdGl2ZScpLCAzMDApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmljb24gPSBuZXcgSWNvbih0aGlzLnBsYXllcik7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci1zcGxhc2hpY29uJylcblx0XHRcdC5hcHBlbmQodGhpcy5pY29uLmVsZW1lbnQpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsYXNoSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1NwbGFzaEljb24uanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFRpbWUuanNcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlY29uZHNUb1RpbWUsIGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vLyBUT0RPOiDQmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0Y3RgtC+0YIg0LHQu9C+0Log0LIgVGltZUNvbnRyb2xcbi8qKlxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQGNsYXNzIFRpbWVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Zm4gOiAocGxheWVyKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZGVvID0gcGxheWVyLnZpZGVvO1xuXHRcdFx0XHRyZXR1cm4gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0XHR9XG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVRleHQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2luaXRlZCcsIHRoaXMudXBkYXRlVGV4dC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHVwZGF0ZVRleHQoZSwgZGF0YSkge1xuXHRcdHRoaXMuZWxlbWVudC50ZXh0KHRoaXMub3B0aW9ucy5mbih0aGlzLnBsYXllcikpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2JywgeyBjbGFzc05hbWUgOiAnbGVwbGF5ZXItdGltZScgfSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVGltZScsIFRpbWUpO1xuZXhwb3J0IGRlZmF1bHQgVGltZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWUuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xDb2xsZWN0aW9uLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi91dGlscyc7XG5cblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMgb2YgY29tcG9uZW50XG4gKiBAcGFyYW0ge2pRdWVyeX0gW29wdGlvbnMuY29udHJvbHNdIEFycmF5IG9mIHJvd3Mgb2YgY29udHJvbCdzIG5hbWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5jb250cm9sc09wdGlvbnNdIENvbnRyb2wgb3B0aW9uc1xuICogQHByb3BlcnR5IHtBcnJheX0gQXJyYXkgb2Ygcm93cyBvZiBjb250cm9sJ3MgbmFtZVxuICogQHByXG4gKlxuICovXG5jbGFzcyBDb250cm9sQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRjb25zdCBuYW1lID0gb3B0aW9ucy5uYW1lO1xuXG5cdFx0bGV0IHBsYXllck9wdGlvbnMgPSB7XG5cdFx0XHRjb250cm9scyA6IHBsYXllci5vcHRpb25zLmNvbnRyb2xzW25hbWVdLFxuXHRcdH1cblxuXHRcdGlmKHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0cGxheWVyT3B0aW9uc1snYWxpZ24nXSA9IHBsYXllci5vcHRpb25zLmNvbnRyb2xzT3B0aW9uc1tuYW1lXS5hbGlnbjtcblx0XHRcdHBsYXllck9wdGlvbnNbJ2NvbnRyb2xzT3B0aW9ucyddID0gcGxheWVyLm9wdGlvbnMuY29udHJvbHNPcHRpb25zW25hbWVdLmNvbnRyb2xzO1xuXHRcdH1cblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y29udHJvbHMgOiBbXSxcblx0XHRcdGNvbnRyb2xzT3B0aW9ucyA6IHt9LFxuXHRcdFx0YWxpZ24gOiAnbGVmdCcsXG5cdFx0fSwgcGxheWVyT3B0aW9ucywgb3B0aW9ucyk7XG5cblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5hY3RpdmUgPSBvcHRpb25zLmFjdGl2ZSB8fCBmYWxzZTtcblx0XHR0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XG5cblx0XHR0aGlzLnBsYXllci5jb250cm9sc1t0aGlzLm5hbWVdID0gdGhpcztcblx0fVxuXG5cblx0X2dldENvbnRyb2xPcHRpb25zKG5hbWUpIHtcblx0XHRjb25zdCB7IGNvbnRyb2xzT3B0aW9ucyB9ID0gdGhpcy5vcHRpb25zO1xuXHRcdGxldCByZXN1bHQgPSBjb250cm9sc09wdGlvbnMuY29udHJvbCB8fCB7fTtcblxuXHRcdGlmKGNvbnRyb2xzT3B0aW9uc1tuYW1lXSkge1xuXHRcdFx0cmVzdWx0ID0gJC5leHRlbmQodHJ1ZSwge30sIHJlc3VsdCwgY29udHJvbHNPcHRpb25zW25hbWVdKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0YWRkQ29udHJvbChpbmRleFJvdywgbmFtZSwgb3B0aW9ucykge1xuXHRcdGNvbnN0IGNvbnRyb2wgPSBDb250cm9sLmNyZWF0ZSh0aGlzLnBsYXllciwgbmFtZSwge1xuXHRcdFx0Y29sbGVjdGlvbiA6IHRoaXMub3B0aW9ucy5uYW1lLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0aWYoY29udHJvbCA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2hpbGUoaW5kZXhSb3cgPiB0aGlzLl9yb3dzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hZGRSb3coKTtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtUm93ID0gdGhpcy5fcm93c1tpbmRleFJvd107XG5cdFx0ZWxlbVJvdy5hcHBlbmQoY29udHJvbC5lbGVtZW50KTtcblxuXHRcdGlmICh0aGlzLmNvbnRyb2xzID09IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHMgPSBbXTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY29udHJvbHNbaW5kZXhSb3ddID09IG51bGwpIHtcblx0XHRcdHRoaXMuY29udHJvbHNbaW5kZXhSb3ddID0ge307XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250cm9sc1tpbmRleFJvd11bbmFtZV0gPSBjb250cm9sO1xuXHR9XG5cblx0Z2V0Q29udHJvbChmaXJzdCwgc2Vjb25kKSB7XG5cdFx0aWYoc2Vjb25kID09IG51bGwpIHtcblx0XHRcdGNvbnN0IG5hbWUgPSBmaXJzdDtcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmKHRoaXMuY29udHJvbHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmNvbnRyb2xzW2ldW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG5hbWUgPSBmaXJzdDtcblx0XHRcdGNvbnN0IGluZGV4Um93ID0gc2Vjb25kO1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udHJvbHNbaW5kZXhSb3ddW25hbWVdO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0YWRkUm93KCkge1xuXHRcdGNvbnN0IGVsZW1Sb3cgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogYGxlcGxheWVyLWNvbnRyb2xzIGNvbnRyb2xzLSR7dGhpcy5vcHRpb25zLm5hbWV9YFxuXHRcdH0pO1xuXG5cdFx0aWYgKHRoaXMuX3Jvd3MgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fcm93cyA9IFtdXG5cdFx0fVxuXHRcdHRoaXMuX3Jvd3MucHVzaChlbGVtUm93KTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKGVsZW1Sb3cpO1xuXG5cdFx0cmV0dXJuIGVsZW1Sb3c7XG5cdH1cblxuXHRnZXRSb3coaW5kZXhSb3cpIHtcblx0XHRyZXR1cm4gdGhpcy5fcm93c1tpbmRleFJvdyB8fCAwXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Y29uc3QgeyBuYW1lLCBjb250cm9scywgYWxpZ24gfSA9IHRoaXMub3B0aW9ucztcblx0XHRsZXQgZ2xvYmFsQWxpZ24gPSBudWxsO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gY3JlYXRlRWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZSA6IGBsZXBsYXllci1jb250cm9sLWNvbGxlY3Rpb24gbGVwbGF5ZXItY29udHJvbC1jb2xsZWN0aW9uLS0ke25hbWV9YCxcblx0XHR9KVxuXG5cdFx0aWYodHlwZW9mIGFsaWduID09PSAnc3RyaW5nJykge1xuXHRcdFx0Z2xvYmFsQWxpZ24gPSBhbGlnbjtcblx0XHR9XG5cblx0XHRjb250cm9scy5mb3JFYWNoKChyb3csIGluZGV4Um93KSA9PiB7XG5cdFx0XHRjb25zdCBlbGVtUm93ID0gdGhpcy5hZGRSb3coKTtcblx0XHRcdGxldCByb3dBbGlnbiA9IGdsb2JhbEFsaWduO1xuXG5cdFx0XHRpZihBcnJheS5pc0FycmF5KGFsaWduKSAmJiBhbGlnbltpbmRleFJvd10pIHtcblx0XHRcdFx0cm93QWxpZ24gPSBhbGlnbltpbmRleFJvd11cblx0XHRcdH1cblxuXHRcdFx0cm93LmZvckVhY2goY29udHJvbE5hbWUgPT4ge1xuXG5cdFx0XHRcdGlmKGNvbnRyb2xOYW1lID09PSAndGltZWxpbmUnICYmIHJvd0FsaWduICE9PSAnanVzdGlmeScpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ0NvbnJvbHMgc2hvdWxkIGhhdmUganVzdGlmeSBhbGlnbiwgaWYgdGhlcmUgaXMgdGhlIHRpbWVsaW5lIGluIGl0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmFkZENvbnRyb2woaW5kZXhSb3csIGNvbnRyb2xOYW1lLCB0aGlzLl9nZXRDb250cm9sT3B0aW9ucyhuYW1lKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0ZWxlbVJvdy5hZGRDbGFzcyhgbGVwbGF5ZXItY29udHJvbHMtLSR7cm93QWxpZ259YClcblx0XHRcdFx0LmF0dHIoJ3RhYmluZGV4JywgMCk7XG5cblx0XHRcdGVsZW1Sb3cuZmluZCgnLmRpdmlkZXIgKyAuZGl2aWRlcicpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cdGhpZGUgKCkge1xuXHRcdHRoaXMuZWxlbWVudC5oaWRlKCk7XG5cdFx0dGhpcy5lbGVtZW50LmZpbmQoJy5sZXBsYXllci1jb250cm9scycpLmhpZGUoKVxuXHR9XG5cblx0c2hvdyAoKSB7XG5cdFx0dGhpcy5lbGVtZW50LnNob3coKVxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCcubGVwbGF5ZXItY29udHJvbHMnKS5zaG93KClcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xDb2xsZWN0aW9uJywgQ29udHJvbENvbGxlY3Rpb24pO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbENvbGxlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sQ29sbGVjdGlvbi5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU2VjdGlvbnMuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmltcG9ydCB7IHNlY29uZHNUb1RpbWUsIGdldFNjcm9sbEJhcldpZHRoIH0gZnJvbSAnLi4vdXRpbHMnO1xuLyoqXG4gKiBAY2xhc3MgU2VjdGlvbnNcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7QXJyYXl9IFtvcHRpb25zLml0ZW1zPVtdfSBEYXRhIGZvciBzZWN0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy52aWV3c10gU2hvdyBzZWN0aW9uIG9ubHkgaW4gZnVsbHNjcmVlblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFNlY3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0bGV0IHsgaXRlbXMgPSBbXSB9ID0gb3B0aW9ucztcblx0XHRpdGVtcyA9IFtdLmNvbmNhdChpdGVtcyk7XG5cblx0XHQvL29wdGlvbnMuaXRlbXMgPSBpdGVtcztcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSB0aGlzLl9pbm5lckVsZW1lbnQ7XG5cdFx0dGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uQnlJbmRleCgwKTtcblxuXHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcblx0XHR0aGlzLmxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuXG5cdFx0dGhpcy5zZXRBY3RpdmVCeUluZGV4KDApO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuZmluZCgnLmxlcGxheWVyLXNlY3Rpb24nKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbignc2VjdGlvbnN0b2dnbGUnLCB0aGlzLl9vblNlY3Rpb25zVG9nZ2xlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLm9uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdpbml0ZWQnLCB0aGlzLnVwZGF0ZVNlY3Rpb25EdXJhdGlvbi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMudXBkYXRlU2VjdGlvbkR1cmF0aW9uLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5wbGF5ZXIuZm9jdXMoKSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkluZGV4ID0gcGFyc2VJbnQodGhpcy5hY3RpdmVTZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKSk7XG5cdFx0Y29uc3QgbmV3SW5kZXggPSBzZWN0aW9uSW5kZXggPj0gdGhpcy5sZW5ndGggPyB0aGlzLmxlbmd0aCA6IHNlY3Rpb25JbmRleCArIDE7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgobmV3SW5kZXgpO1xuXG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgPSB0aGlzLml0ZW1zW3NlY3Rpb25JbmRleF0uZW5kO1xuXHR9XG5cblx0cHJldigpIHtcblx0XHRjb25zdCBzZWN0aW9uSW5kZXggPSBwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKTtcblx0XHRjb25zdCBuZXdJbmRleCA9IHNlY3Rpb25JbmRleCA8PSAwID8gMCA6IHNlY3Rpb25JbmRleCAtIDE7XG5cblx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgobmV3SW5kZXgpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lID0gdGhpcy5pdGVtc1tuZXdJbmRleF0uYmVnaW47XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IHsgZnVsbHNjcmVlbk9ubHksIGhpZGVTY3JvbGwgfSA9IHRoaXMub3B0aW9ucztcblxuXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cblx0XHR0aGlzLl9pbm5lckVsZW1lbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zX19pbm5lcicpO1xuXG5cdFx0aWYoZnVsbHNjcmVlbk9ubHkpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWZzb25seScpO1xuXHRcdH1cblxuXHRcdGlmKGhpZGVTY3JvbGwpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGUtc2Nyb2xsJyk7XG5cdFx0XHR0aGlzLl9pbm5lckVsZW1lbnQuY3NzKHtcblx0XHRcdFx0cmlnaHQgOiAtMSAqIGdldFNjcm9sbEJhcldpZHRoKClcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50LmFwcGVuZChcblx0XHRcdHRoaXMuX2lubmVyRWxlbWVudC5hcHBlbmQodGhpcy5fY3JlYXRlU2VjdGlvbnModGhpcy5vcHRpb25zLml0ZW1zKSlcblx0XHQpXG5cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHR1cGRhdGVTZWN0aW9uRHVyYXRpb24oKSB7XG5cdFx0aWYodGhpcy5pdGVtcyAhPSBudWxsICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGhcblx0XHRcdHRoaXMuaXRlbXNbbGVuZ3RoIC0gMV0uZW5kID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cblx0XHRcdC8vIFRPRE86INCf0YDQvtC00YPQvNCw0YLRjCDRhNGD0L3QutGG0LjRj9GOIHVwZGF0ZVNlY3Rpb25cblx0XHRcdC8vdGhpcy51cGRhdGVTZWN0aW9uKHRoaXMuaXRlbXNbbGVuZ3RoIC0gMV0sIGxlbmd0aCAtIDEpO1xuXHRcdH1cblx0fVxuXG5cblx0b25TZWN0aW9uQ2xpY2soZSkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0Y29uc3Qgc2VjdGlvbiA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5sZXBsYXllci1zZWN0aW9uJyk7XG5cdFx0dmlkZW8uY3VycmVudFRpbWUgPSBzZWN0aW9uLmF0dHIoJ2RhdGEtYmVnaW4nKTtcblx0XHR0aGlzLnBsYXllci50cmlnZ2VyKCdzZWN0aW9uc2NsaWNrJywgeyBzZWN0aW9uIDogdGhpcy5pdGVtc1tzZWN0aW9uLmF0dHIoJ2RhdGEtaW5kZXgnKV19KTtcblx0fVxuXG5cdHNldEFjdGl2ZUJ5SW5kZXgoaW5kZXgpIHtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24ubGVuZ3RoID09PSAwIHx8XG5cdFx0XHRwYXJzZUludCh0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1pbmRleCcpKSA9PT0gaW5kZXggfHxcblx0XHRcdHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpLmxlbmd0aCA9PT0gMFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZVNlY3Rpb24ucmVtb3ZlQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb24tLWFjdGl2ZScpO1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbkJ5SW5kZXgoaW5kZXgpO1xuXHRcdHRoaXMuYWN0aXZlU2VjdGlvbi5hZGRDbGFzcygnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyk7XG5cblx0XHRjb25zdCB0b3BQb3NpdGlvbiA9IHRoaXMuYWN0aXZlU2VjdGlvbi5wb3NpdGlvbigpLnRvcDtcblxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudFxuXHRcdFx0LmFuaW1hdGUoe1xuXHRcdFx0XHRzY3JvbGxUb3AgOiB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkgKyB0b3BQb3NpdGlvblxuXHRcdFx0fSwgODAwKVxuXG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnNjaGFuZ2UnLCB7IHNlY3Rpb24gOiB0aGlzLml0ZW1zW2luZGV4XX0pO1xuXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdGdldFNlY3Rpb25CeUluZGV4KGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudC5maW5kKGAubGVwbGF5ZXItc2VjdGlvbltkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcblx0fVxuXG5cblx0b25UaW1lVXBkYXRlKGUsIGRhdGEpIHtcblx0XHRpZiAodGhpcy5hY3RpdmVTZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXG5cdFx0Y29uc3QgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblxuXHRcdC8vIFVwZGF0ZSBzcGFuIHdpdGggZW5kIHNlY3Rpb24gdGltZVxuXHRcdC8vIFRPRE86INCS0YvQvdC10YHRgtC4INGN0YLQviDQsiDQvtGC0LTQtdC70YzQvdGL0Lkg0LrQvtC80L/QvtC90LXQvdGCIFNob3dUaW1lINC40LvQuCDRgtC40L/QviDRgtC+0LPQvlxuXHRcdGlmKHRoaXMucGxheWVyLnZpZXcgPT09ICdtaW5pJykge1xuXHRcdFx0Y29uc3QgZW5kU2VjdGlvblRpbWUgPSB0aGlzLmFjdGl2ZVNlY3Rpb24uYXR0cignZGF0YS1lbmQnKTtcblx0XHRcdHRoaXMuYWN0aXZlU2VjdGlvblxuXHRcdFx0XHQubmV4dCgpXG5cdFx0XHRcdC5maW5kKCcudGltZScpXG5cdFx0XHRcdC50ZXh0KHNlY29uZHNUb1RpbWUoZW5kU2VjdGlvblRpbWUgLSBjdXJyZW50VGltZSkpO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgc2VjdGlvbiA9IHRoaXMuaXRlbXNbaV07XG5cdFx0XHRpZiAoY3VycmVudFRpbWUgPCBzZWN0aW9uLmVuZCkge1xuXHRcdFx0XHR0aGlzLnNldEFjdGl2ZUJ5SW5kZXgoaSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0X29uU2VjdGlvbnNUb2dnbGUoZSwgZGF0YSkge1xuXHRcdGlmICh0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ2xlcGxheWVyLXNlY3Rpb25zLS1oaWRkZW4nKSAmJiBkYXRhLmNoZWNrZWQpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnbGVwbGF5ZXItc2VjdGlvbnMtLWhpZGRlbicpO1xuXHRcdH0gZWxzZSBpZiAoIWRhdGEuY2hlY2tlZCkge1xuXHRcdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCdsZXBsYXllci1zZWN0aW9ucy0taGlkZGVuJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBIVE1MIG9mIHNlY3Rpb24gYnkgZGF0YSBhbmQgaW5kZXggc2VjdGlvblxuXHQgKlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBIVE1MXG5cdCAqL1xuXHRjcmVhdGVTZWN0aW9uKHNlY3Rpb24sIGluZGV4KSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zIHx8IHRoaXMub3B0aW9ucy5pdGVtcztcblx0XHRjb25zdCBpdGVtID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24gJHshaW5kZXggPyAnbGVwbGF5ZXItc2VjdGlvbi0tYWN0aXZlJyA6ICcnfVwiXG5cdFx0XHRcdGRhdGEtYmVnaW49XCIke3NlY3Rpb24uYmVnaW59XCJcblx0XHRcdFx0ZGF0YS1pbmRleD1cIiR7aW5kZXgudG9TdHJpbmcoKX1cIlxuXHRcdFx0XHRkYXRhLWVuZD1cIiR7c2VjdGlvbi5lbmR9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLXRpbWVcIj4ke3NlY29uZHNUb1RpbWUoc2VjdGlvbi5iZWdpbil9PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWluZm9cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGVwbGF5ZXItc2VjdGlvbi1uZXh0LWluZm9cIj5cblx0XHRcdFx0XHRcdCR7c2VjdGlvbi5uZXh0SW5mbyB8fCAn0KHQu9C10LTRg9GO0YnQsNGPINGB0LXQutGG0LjRjyDQvdCw0YfQvdC10YLRgdGPINGH0LXRgNC10LcnfVxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aW1lXCI+JHtzZWNvbmRzVG9UaW1lKGl0ZW1zWzBdLmVuZCl9PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCR7XG5cdFx0XHRcdFx0XHRzZWN0aW9uLnRpdGxlICE9IG51bGwgP1xuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cImxlcGxheWVyLXNlY3Rpb24tdGl0bGVcIj4ke3NlY3Rpb24udGl0bGV9PC9kaXY+YFxuXHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQke1xuXHRcdFx0XHRcdFx0c2VjdGlvbi5kZXNjcmlwdGlvbiAhPSBudWxsID9cblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJsZXBsYXllci1zZWN0aW9uLWRlc2NyaXB0aW9uXCI+JHtzZWN0aW9uLmRlc2NyaXB0aW9ufTwvZGl2PmBcblx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YC50cmltKClcblx0XHRyZXR1cm4gaXRlbVxuXHR9XG5cblx0Ly8gVE9ETzog0J/RgNC40LTRg9C80LDRgtGMINGH0YLQviDRgdC00LXQu9Cw0YLRjCDRgSDRgdC+0LHRi9GC0LjRj9C80Lgg0L/QvtGB0LvQtSDQvtCx0L3QvtCy0LvQtdC90LjRjyDQv9C+0LvQvdC+0YHRjNGOINGB0LXQutGG0LjQuFxuXHQvKipcblx0ICogRmluZCBzZWN0aW9uIGJ5IGluZGV4IGFuZCB1cGRhdGUgaGltIHVzaW5nIGRhdGFcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGFcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG5cdCAqL1xuXHR1cGRhdGVTZWN0aW9uKGRhdGEsIGluZGV4KSB7XG5cdFx0dGhpcy5nZXRTZWN0aW9uQnlJbmRleChpbmRleClcblx0XHRcdC5yZXBsYWNlV2l0aCh0aGlzLmNyZWF0ZVNlY3Rpb24oZGF0YSwgaW5kZXgpKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25TZWN0aW9uQ2xpY2suYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfY3JlYXRlU2VjdGlvbnMoaXRlbXMpIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0aXRlbXMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcblx0XHRcdHJlc3VsdCArPSB0aGlzLmNyZWF0ZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpO1xuXHRcdH0pO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTZWN0aW9ucycsIFNlY3Rpb25zKTtcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbnMuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIEVycm9yRGlzcGxheS5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBFcnJvckRpc3BsYXlcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5jbGFzcyBFcnJvckRpc3BsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0aWYodGhpcy5wbGF5ZXIuX2Vycm9yICE9IG51bGwpIHtcblx0XHRcdHRoaXMubWVzc2FnZSA9IHRoaXMucGxheWVyLl9lcnJvci5tZXNzYWdlO1xuXHRcdFx0dGhpcy5lbGVtZW50LnNob3coKTtcblx0XHR9XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2Vycm9yJywgdGhpcy5vblBsYXllckVycm9yLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItZXJyb3ItZGlzcGxheScpXG5cdH1cblxuXHRzZXQgbWVzc2FnZSh2YWx1ZSkge1xuXHRcdHRoaXMuZWxlbWVudC5odG1sKHZhbHVlKTtcblx0fVxuXG5cdG9uUGxheWVyRXJyb3IoZSwgZGF0YSkge1xuXHRcdGNvbnN0IGVycm9yID0gZGF0YS5lcnJvcjtcblx0XHR0aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXHRcdHRoaXMuZWxlbWVudC5zaG93KCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdFcnJvckRpc3BsYXknLCBFcnJvckRpc3BsYXkpO1xuZXhwb3J0IGRlZmF1bHQgRXJyb3JEaXNwbGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvRXJyb3JEaXNwbGF5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBFcnJvckRpc3BsYXkuanNcbiAqL1xuXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudXJsXSBwYXRoIHRvIHBvc3RlciBpbWFnZVxuICogQGNsYXNzIFBvc3RlclxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmNsYXNzIFBvc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHR1cmwgOiBvcHRpb25zLnVybFxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMudXJsID0gdGhpcy5vcHRpb25zLnVybDtcblx0fVxuXG5cdHNldCB1cmwodmFsdWUpIHtcblx0XHRpZih2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX3VybCA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKFwiJHt2YWx1ZX1cIilgKVxuXHR9XG5cblx0Z2V0IHVybCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdXJsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8ZGl2IC8+Jylcblx0XHRcdC5hZGRDbGFzcygnbGVwbGF5ZXItcG9zdGVyJyk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdQb3N0ZXInLCBQb3N0ZXIpO1xuZXhwb3J0IGRlZmF1bHQgUG9zdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvUG9zdGVyLmpzIiwiLyoqXG4gKiBAZmlsZSBmdWxsc2NyZWVuLWFwaS5qc1xuICovXG5cblxuLypcbiAqIFN0b3JlIHRoZSBicm93c2VyLXNwZWNpZmljIG1ldGhvZHMgZm9yIHRoZSBmdWxsc2NyZWVuIEFQSVxuICogQHR5cGUge09iamVjdHx1bmRlZmluZWR9XG4gKiBAcHJpdmF0ZVxuICovXG5sZXQgRnVsbHNjcmVlbkFwaSA9IHt9O1xuXG4vLyBicm93c2VyIEFQSSBtZXRob2RzXG4vLyBtYXAgYXBwcm9hY2ggZnJvbSBTY3JlZW5mdWwuanMgLSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3NjcmVlbmZ1bGwuanNcbmNvbnN0IGFwaU1hcCA9IFtcblx0Ly8gU3BlYzogaHR0cHM6Ly9kdmNzLnczLm9yZy9oZy9mdWxsc2NyZWVuL3Jhdy1maWxlL3RpcC9PdmVydmlldy5odG1sXG5cdFtcblx0XHQncmVxdWVzdEZ1bGxzY3JlZW4nLFxuXHRcdCdleGl0RnVsbHNjcmVlbicsXG5cdFx0J2Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnZnVsbHNjcmVlbkVuYWJsZWQnLFxuXHRcdCdmdWxsc2NyZWVuY2hhbmdlJyxcblx0XHQnZnVsbHNjcmVlbmVycm9yJ1xuXHRdLFxuXHQvLyBXZWJLaXRcblx0W1xuXHRcdCd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcblx0XHQnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuXHRcdCd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE9sZCBXZWJLaXQgKFNhZmFyaSA1LjEpXG5cdFtcblx0XHQnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuXHRcdCd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcblx0XHQnd2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50Jyxcblx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXG5cdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuXHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG5cdF0sXG5cdC8vIE1vemlsbGFcblx0W1xuXHRcdCdtb3pSZXF1ZXN0RnVsbFNjcmVlbicsXG5cdFx0J21vekNhbmNlbEZ1bGxTY3JlZW4nLFxuXHRcdCdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG5cdFx0J21vekZ1bGxTY3JlZW5FbmFibGVkJyxcblx0XHQnbW96ZnVsbHNjcmVlbmNoYW5nZScsXG5cdFx0J21vemZ1bGxzY3JlZW5lcnJvcidcblx0XSxcblx0Ly8gTWljcm9zb2Z0XG5cdFtcblx0XHQnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG5cdFx0J21zRXhpdEZ1bGxzY3JlZW4nLFxuXHRcdCdtc0Z1bGxzY3JlZW5FbGVtZW50Jyxcblx0XHQnbXNGdWxsc2NyZWVuRW5hYmxlZCcsXG5cdFx0J01TRnVsbHNjcmVlbkNoYW5nZScsXG5cdFx0J01TRnVsbHNjcmVlbkVycm9yJ1xuXHRdXG5dO1xuXG5cbmxldCBzcGVjQXBpID0gYXBpTWFwWzBdO1xuXG5sZXQgYnJvd3NlckFwaTtcblxuLy8gZGV0ZXJtaW5lIHRoZSBzdXBwb3J0ZWQgc2V0IG9mIGZ1bmN0aW9uc1xuZm9yIChsZXQgaSA9IDA7IGkgPCBhcGlNYXAubGVuZ3RoOyBpKyspIHtcblx0Ly8gY2hlY2sgZm9yIGV4aXRGdWxsc2NyZWVuIGZ1bmN0aW9uXG5cdGlmIChhcGlNYXBbaV1bMV0gaW4gZG9jdW1lbnQpIHtcblx0XHRicm93c2VyQXBpID0gYXBpTWFwW2ldO1xuXHRcdGJyZWFrO1xuXHR9XG59XG5cbi8vIG1hcCB0aGUgYnJvd3NlciBBUEkgbmFtZXMgdG8gdGhlIHNwZWMgQVBJIG5hbWVzXG5pZiAoYnJvd3NlckFwaSkge1xuXHRmb3IgKGxldCBpPTA7IGk8YnJvd3NlckFwaS5sZW5ndGg7IGkrKykge1xuXHRcdEZ1bGxzY3JlZW5BcGlbc3BlY0FwaVtpXV0gPSBicm93c2VyQXBpW2ldO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5BcGk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvRnVsbHNjcmVlbkFwaS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgY29va2llLWNvbnRyb2wuanNcbiAqXG4gKiBAY2xhcyBDb29raWVcbiAqL1xuY2xhc3MgQ29va2llIHtcblx0LyoqXG5cdCAqIEBwdWJsaWNcblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgTmFtZSBvZiBjb29raWVcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtkZmx0XSBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiB0aGlzIGZpZWxkIGlzIGVtcHR5XG5cdCAqXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IChuYW1lLCBkZmx0KSB7XG5cdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblx0XHRmb3IgKGxldCBpIGluIGNvb2tpZXMpIHtcblx0XHRcdHZhciBkID0gY29va2llc1sgaSBdLnRyaW0oKS5zcGxpdCgnPScpO1xuXHRcdFx0aWYgKGRbIDAgXSA9PT0gJ2xlcGxheWVyXycgKyBuYW1lKVxuXHRcdFx0XHRyZXR1cm4gZFsgMSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcHVibGljXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIEtleVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVmFsdWVcblx0ICovXG5cdHN0YXRpYyBzZXQgKG5hbWUsIHZhbHVlKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdGQuc2V0RGF0ZShkLnllYXIgKyAxKTtcblx0XHRkb2N1bWVudC5jb29raWUgPSAnbGVwbGF5ZXJfJyArIG5hbWUgKyAnPScgKyB2YWx1ZSArICc7ZXhwaXJlcz0nICsgZC50b1N0cmluZygpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tpZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy91dGlscy9jb29raWUuanMiLCIvKipcbiAqIEBmaWxlIGJyb3dzZXIuanNcbiAqL1xuXG5cbmNvbnN0IFVTRVJfQUdFTlQgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuXG5leHBvcnQgY29uc3QgSVNfTU9CSUxFID0gKC9Nb2JpbGUvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuZXhwb3J0IGNvbnN0IElTX0NIUk9NRSA9IFVTRVJfQUdFTlQuaW5kZXhPZignQ2hyb21lJykgPiAtMTtcblxuZXhwb3J0IGNvbnN0IElTX0FORFJPSUQgPSAoL0FuZHJvaWQvaSkudGVzdChVU0VSX0FHRU5UKTtcblxuZXhwb3J0IGNvbnN0IElTX0FORFJPSURfUEhPTkUgPSBJU19BTkRST0lEICYmIElTX01PQklMRTtcblxuZXhwb3J0IGNvbnN0IElTX0lQQUQgPSAoL2lQYWQvaSkudGVzdChVU0VSX0FHRU5UKTtcbi8vIFRoZSBGYWNlYm9vayBhcHAncyBVSVdlYlZpZXcgaWRlbnRpZmllcyBhcyBib3RoIGFuIGlQaG9uZSBhbmQgaVBhZCwgc29cbi8vIHRvIGlkZW50aWZ5IGlQaG9uZXMsIHdlIG5lZWQgdG8gZXhjbHVkZSBpUGFkcy5cbi8vIGh0dHA6Ly9hcnRzeS5naXRodWIuaW8vYmxvZy8yMDEyLzEwLzE4L3RoZS1wZXJpbHMtb2YtaW9zLXVzZXItYWdlbnQtc25pZmZpbmcvXG5leHBvcnQgY29uc3QgSVNfSVBIT05FID0gKC9pUGhvbmUvaSkudGVzdChVU0VSX0FHRU5UKSAmJiAhSVNfSVBBRDtcbmV4cG9ydCBjb25zdCBJU19JUE9EID0gKC9pUG9kL2kpLnRlc3QoVVNFUl9BR0VOVCk7XG5leHBvcnQgY29uc3QgSVNfSU9TID0gSVNfSVBIT05FIHx8IElTX0lQQUQgfHwgSVNfSVBPRDtcblxuZXhwb3J0IGNvbnN0IElTX1NBRkFSSSA9IFVTRVJfQUdFTlQuaW5kZXhPZignU2FmYXJpJykgPiAtMSAmJiAhSVNfQ0hST01FO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3V0aWxzL2Jyb3dzZXIuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBNZWRpYUVycm9yIHtcblx0Y29uc3RydWN0b3IodmFsdWUpIHtcblx0XHRpZih2YWx1ZSBpbnN0YW5jZW9mIE1lZGlhRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdHRoaXMuY29kZSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdC8vIGRlZmF1bHQgY29kZSBpcyB6ZXJvLCBzbyB0aGlzIGlzIGEgY3VzdG9tIGVycm9yXG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblxuXHRcdFx0Ly8gV2UgYXNzaWduIHRoZSBgY29kZWAgcHJvcGVydHkgbWFudWFsbHkgYmVjYXVzZSBuYXRpdmUgTWVkaWFFcnJvciBvYmplY3RzXG5cdFx0XHQvLyBkbyBub3QgZXhwb3NlIGl0IGFzIGFuIG93bi9lbnVtZXJhYmxlIHByb3BlcnR5IG9mIHRoZSBvYmplY3QuXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlLmNvZGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHRoaXMuY29kZSA9IHZhbHVlLmNvZGU7XG5cdFx0XHR9XG5cblx0XHRcdCQuZXh0ZW5kKHRoaXMsIHZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMubWVzc2FnZSkge1xuXHRcdFx0dGhpcy5tZXNzYWdlID0gTWVkaWFFcnJvci5kZWZhdWx0TWVzc2FnZXNbdGhpcy5jb2RlXSB8fCAnJztcblx0XHR9XG5cdH1cbn1cblxuTWVkaWFFcnJvci5wcm90b3R5cGUuY29kZSA9IDA7XG5cbk1lZGlhRXJyb3IucHJvdG90eXBlLm1lc3NhZ2UgPSAnJztcblxuTWVkaWFFcnJvci5lcnJvclR5cGVzID0gW1xuXHQnTUVESUFfRVJSX0NVU1RPTScsXG5cdCdNRURJQV9FUlJfQUJPUlRFRCcsXG5cdCdNRURJQV9FUlJfTkVUV09SSycsXG5cdCdNRURJQV9FUlJfREVDT0RFJyxcblx0J01FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCcsXG5cdCdNRURJQV9FUlJfRU5DUllQVEVEJ1xuXTtcblxuXG5NZWRpYUVycm9yLmRlZmF1bHRNZXNzYWdlcyA9IHtcblx0MSA6ICfQktGLINC/0YDQtdGA0LLQsNC70Lgg0LfQsNCz0YDRg9C30LrRgyDQstC40LTQtdC+LicsXG5cdDIgOiAn0JfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+INC/0YDQtdGA0LLQsNC90LAg0LjQty3Qt9CwINC/0L7RgtC10YDQuCDRgdC+0LXQtNC40L3QtdC90LjRjy4nLFxuXHQzIDogJ9CX0LDQs9GA0YPQt9C60LAg0LLQuNC00LXQviDQvtGB0YLQsNC90L7QstC70LXQvdCwINC40Lct0LfQsCDQv9GA0L7QsdC70LXQvCDRgSDQstC40LTQtdC+0YTQsNC50LvQvtC8INC40LvQuCDQuNC3LdC30LAg0YLQvtCz0L4sINGH0YLQviDQstCw0Ygg0LHRgNCw0YPQt9C10YAg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNC10YIg0LLQvtGB0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNC1INC00LDQvdC90L7Qs9C+INGE0LDQudC70LAuJyxcblx0NCA6ICfQktC40LTQtdC+INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQt9Cw0LPRgNGD0LbQtdC90L4g0LjQty3Qt9CwINC/0YDQvtCx0LvQtdC8INGBINC40L3RgtC10YDQvdC10YIt0YHQvtC10LTQuNC90LXQvdC40LXQvCDQuNC70Lgg0L/RgNC+0LHQu9C10Lwg0L3QsCDRgdC10YDQstC10YDQtS4g0JjQu9C4INGE0L7RgNC80LDRgiDRhNCw0LnQu9CwINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGC0YHRjyDQstCw0YjQuNC8INCx0YDQsNGD0LfQtdGA0L7QvC4nLFxuXHQ1IDogJ9CS0LjQtNC10L4g0LfQsNGI0LjRhNGA0L7QstCw0L3Qviwg0Lgg0LzRiyDQvdC1INC80L7QttC10Lwg0LXQs9C+INGA0LDRgdGI0LjRhNGA0L7QstCw0YLRjC4nXG59O1xuXG4vLyBBZGQgdHlwZXMgYXMgcHJvcGVydGllcyBvbiBNZWRpYUVycm9yXG4vLyBlLmcuIE1lZGlhRXJyb3IuTUVESUFfRVJSX1NSQ19OT1RfU1VQUE9SVEVEID0gNDtcbmZvciAobGV0IGVyck51bSA9IDA7IGVyck51bSA8IE1lZGlhRXJyb3IuZXJyb3JUeXBlcy5sZW5ndGg7IGVyck51bSsrKSB7XG5cdE1lZGlhRXJyb3JbTWVkaWFFcnJvci5lcnJvclR5cGVzW2Vyck51bV1dID0gZXJyTnVtO1xuXHQvLyB2YWx1ZXMgc2hvdWxkIGJlIGFjY2Vzc2libGUgb24gYm90aCB0aGUgY2xhc3MgYW5kIGluc3RhbmNlXG5cdE1lZGlhRXJyb3IucHJvdG90eXBlW01lZGlhRXJyb3IuZXJyb3JUeXBlc1tlcnJOdW1dXSA9IGVyck51bTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFFcnJvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9NZWRpYUVycm9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBQbGF5Q29udHJvbC5qc1xuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5cbi8qKlxuICogQGNsYXNzIFBsYXlDb250cm9sXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFBsYXlDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3BsYXknLFxuXHRcdFx0dGl0bGUgOiAn0JLQvtGB0L/RgNC+0LjQt9Cy0LXRgdGC0Lgg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAncGxheScsXG5cdFx0XHRuYW1lIDogJ3BsYXknXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5JywgdGhpcy5zaG93UGF1c2UuYmluZCh0aGlzKSlcblx0XHR0aGlzLnBsYXllci5vbigncGxheWluZycsIHRoaXMuc2hvd1BhdXNlLmJpbmQodGhpcykpXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BhdXNlJywgdGhpcy5zaG93UGxheS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignZW5kZWQnLCB0aGlzLnNob3dSZXBsYXkuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigncGxheScsIHRoaXMucmVtb3ZlUmVwbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWVraW5nJywgdGhpcy5yZW1vdmVSZXBsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ2xvYWRzdGFydCcsIHRoaXMucmVtb3ZlUmVwbGF5LmJpbmQodGhpcykpO1xuXHR9XG5cblxuXHQvKipcblx0ICogUGF1c2UgdGhlIHZpZGVvXG5cdCAqL1xuXHRzaG93UGxheSAoKSB7XG5cdFx0aWYodGhpcy5pY29uLmljb25OYW1lID09PSAncGxheScpIHJldHVybjtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGxheSc7XG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbGF5IHRoZSB2aWRlb1xuXHQgKi9cblx0c2hvd1BhdXNlICgpIHtcblx0XHRpZih0aGlzLmljb24uaWNvbk5hbWUgPT09ICdwYXVzZScpIHJldHVybjtcblx0XHR0aGlzLmljb24uaWNvbk5hbWUgPSAncGF1c2UnO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKCd0aXRsZScsICfQn9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9Cw0YPQt9GDJyk7XG5cdH1cblxuXHRzaG93UmVwbGF5KCkge1xuXHRcdGlmKHRoaXMuaWNvbi5pY29uTmFtZSA9PT0gJ3JlZnJlc2gnKSByZXR1cm47XG5cdFx0aWYodGhpcy5wbGF5ZXIuZHVyYXRpb24gIT09IEluZmluaXR5KSB7XG5cdFx0XHR0aGlzLl9yZXBsYXkgPSB0cnVlO1xuXHRcdFx0dGhpcy5pY29uLmljb25OYW1lID0gJ3JlZnJlc2gnO1xuXHRcdFx0dGhpcy5lbGVtZW50LmF0dHIoJ3RpdGxlJywgJ9CX0LDQv9GD0YHRgtC40YLRjCDQt9Cw0L3QvtCy0L4nKVxuXHRcdH1cblx0fVxuXG5cdHJlbW92ZVJlcGxheSgpIHtcblx0XHRpZighdGhpcy5fcmVwbGF5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX3JlcGxheSA9IGZhbHNlO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIudmlkZW8ucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnNob3dQbGF5KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd1BhdXNlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25DbGljayhlKSB7XG5cdFx0Ly9zdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMucGxheWVyLnZpZGVvLnRvZ2dsZVBsYXkoKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1BsYXlDb250cm9sJywgUGxheUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3BsYXknLCBQbGF5Q29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBQbGF5Q29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1BsYXlDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBWb2x1bWVDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBWb2x1bWVDb250cm9sXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgVm9sdW1lQ29udHJvbCBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAndm9sdW1lLWRvd24nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3ZvbHVtZS1jb250cm9sJyxcblx0XHRcdG5hbWUgOiAndm9sdW1lJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndm9sdW1lY2hhbmdlJywgKGUsIGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0XHR0aGlzLnZhbHVlID0gdmlkZW8ubXV0ZWQgPyAwIDogdmlkZW8udm9sdW1lO1xuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgZHJhZyA9IGZhbHNlO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cblx0XHR0aGlzLm1hcmtlciA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtbWFya2VyJyk7XG5cblx0XHR0aGlzLmFjdGl2ZSA9ICQoJzxkaXYvPicpLmFkZENsYXNzKCd2b2x1bWUtYWN0aXZlJyk7XG5cblx0XHR0aGlzLmxpbmUgPSAkKCc8ZGl2Lz4nKVxuXHRcdFx0LmFkZENsYXNzKCd2b2x1bWUtbGluZScpXG5cdFx0XHQuYXBwZW5kKHRoaXMuYWN0aXZlKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlcilcblx0XHRcdC5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50XG5cdFx0XHQuYWRkQ2xhc3MoJ3ZvbHVtZS1zbGlkZXInKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpO1xuXG5cdFx0dGhpcy5pY29uLmVsZW1lbnQuYXR0cigndGl0bGUnLCAn0J7RgtC60LvRjtGH0LjRgtGMINC30LLRg9C6Jyk7XG5cblx0XHR0aGlzLm1hcmtlci5vbignbW91c2Vkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLndoaWNoICE9PSAxKSByZXR1cm47XG5cdFx0XHRkcmFnID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblx0XHRcdG1vdXNlbW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdGlmICghZHJhZykgcmV0dXJuO1xuXHRcdFx0XHRsZXQgcCA9IHRoaXMuZ2V0UG9zaXRpb24oZS5wYWdlWSk7XG5cdFx0XHRcdGlmIChwID49IDAgJiYgcCA8PSAxKSB7XG5cdFx0XHRcdFx0aWYodmlkZW8ubXV0ZWQpIHtcblx0XHRcdFx0XHRcdHZpZGVvLm11dGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZpZGVvLnZvbHVtZSA9IDEgLSBwXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG1vdXNldXAgOiAoZSkgPT4ge1xuXHRcdFx0XHRkcmFnID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cblx0c2V0IHZhbHVlICh2YWx1ZSkge1xuXHRcdHRoaXMuaWNvbi5pY29uTmFtZSA9IHRoaXMucGxheWVyLmNhbGNWb2x1bWVJY29uKHZhbHVlKTtcblxuXHRcdGxldCBwID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcblx0XHR0aGlzLmFjdGl2ZS5jc3MoJ2hlaWdodCcsIHApO1xuXHRcdHRoaXMubWFya2VyLmNzcygnYm90dG9tJywgcCk7XG5cdH1cblxuXHR0b2dnbGVNdXRlZCAoKSB7XG5cdFx0Y29uc3QgeyB2aWRlbyB9ID0gdGhpcy5wbGF5ZXI7XG5cblx0XHR2aWRlby5tdXRlZCA9ICF2aWRlby5tdXRlZDtcblx0fVxuXG5cdGdldFBvc2l0aW9uICh5KSB7XG5cdFx0cmV0dXJuICh5IC0gdGhpcy5saW5lLm9mZnNldCgpLnRvcCkgLyB0aGlzLmxpbmUuaGVpZ2h0KCk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHR0aGlzLnRvZ2dsZU11dGVkKCk7XG5cdH1cblxuXHRvblBsYXllckluaXRlZCgpIHtcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5wbGF5ZXIudmlkZW8uZGVmYXVsdFZvbHVtZTtcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnVm9sdW1lQ29udHJvbCcsIFZvbHVtZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3ZvbHVtZScsIFZvbHVtZUNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgVm9sdW1lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIENvbnRyb2xEcm9wZG93bi5qc1xuICovXG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAY2xhc3MgQ29udHJvbERyb3Bkb3duXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gZHJvcGRvd25Db250ZW50IENvbnRlbnQgb2YgcG9wdXBcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbERyb3Bkb3duIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ21vdXNlZW50ZXInLCAoKSA9PiAhdGhpcy5kaXNhYmxlICYmIHRoaXMuZHJvcGRvd25Db250ZW50LnNob3coKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQgPSAkKCc8ZGl2IC8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtZHJvcGRvd25fX2NvbnRlbnQnKTtcblx0XHR0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuZHJvcGRvd25Db250ZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLWRyb3Bkb3duICR7c3VwZXIuYnVpbGRDU1NDbGFzcygpfWBcblx0fVxuXG5cdF9vbkNsaWNrKGUpIHtcblx0XHRpZigkKGUudGFyZ2V0KS5jbG9zZXN0KHRoaXMuZHJvcGRvd25Db250ZW50KS5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3VwZXIuX29uQ2xpY2soZSk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0NvbnRyb2xEcm9wZG93bicsIENvbnRyb2xEcm9wZG93bik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnZHJvcGRvd24nLCBDb250cm9sRHJvcGRvd24pO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbERyb3Bkb3duO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbERyb3Bkb3duLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lbGluZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbFRleHQgZnJvbSAnLi4vQ29udHJvbFRleHQnO1xuaW1wb3J0IEJ1ZmZlcmVkUmFuZ2VzIGZyb20gJy4vQnVmZmVyZWRSYW5nZXMnO1xuaW1wb3J0IE1hcmtlciBmcm9tICcuL01hcmtlcic7XG5pbXBvcnQgeyBzZWNvbmRzVG9UaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBUaW1lbGluZUNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSdzIHRleHRcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IHRvdGFsVGltZSBUb3RhbCB0aW1lXG4gKiBAcHJvcGVydHkge2pRdWVyeX0gbGluZVxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBUaW1lbGluZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcblxuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRuYW1lIDogJ3RpbWVsaW5lJyxcblx0XHRcdGNsYXNzTmFtZSA6ICd0aW1lbGluZSB0aW1lbGluZS1jb250YWluZXInXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXG5cdFx0dGhpcy5tYXJrZXIuZWxlbWVudC5vbignbGVwbGF5ZXJfbW91c2Vtb3ZlJywgdGhpcy5fb25NYXJrZXJNb3VzZW1vdmUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLm1hcmtlci5lbGVtZW50Lm9uKCdsZXBsYXllcl9tb3VzZWRvd24nLCB0aGlzLl9vbk1hcmtlck1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdzZWN0aW9uc2luaXQnLCB0aGlzLm9uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLnBsYXllci5vbigndGltZXVwZGF0ZWxvYWQnLCB0aGlzLl9vblRpbWVVcGRhdGUuYmluZCh0aGlzKSlcblxuXHRcdHRoaXMucGxheWVyLm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMuX29uRHVyYXRpb25DaGFuZ2UuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRfb25NYXJrZXJNb3VzZWRvd24oZSkge1xuXHRcdHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQuaGlkZSgpO1xuXHR9XG5cblx0X29uTWFya2VyTW91c2Vtb3ZlKGUsIGRhdGEpIHtcblx0XHRjb25zdCB4ID0gZGF0YS54O1xuXHRcdGNvbnN0IHAgPSB0aGlzLmdldFBvc2l0aW9uKHgpO1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0aWYgKHAgPiAwICYmIHAgPCAxKSB7XG5cdFx0XHR0aGlzLm1hcmtlci5tYXJrZXJUaW1lXG5cdFx0XHRcdC5zaG93KClcblx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gdmlkZW8uZHVyYXRpb24gKiBwXG5cdFx0fVxuXHR9XG5cblx0X29uVGltZVVwZGF0ZShlLCBkYXRhKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRsZXQgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcblx0XHRpZihkYXRhICYmIGRhdGEuY3VycmVudFRpbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y3VycmVudFRpbWUgPSBkYXRhLmN1cnJlbnRUaW1lO1xuXHRcdH1cblx0XHRsZXQgcGVyY2VudCA9IGN1cnJlbnRUaW1lIC8gZHVyYXRpb247XG5cblx0XHRpZihpc05hTihkdXJhdGlvbikgJiYgY3VycmVudFRpbWUgPT09IDApIHBlcmNlbnQgPSAwO1xuXG5cdFx0dGhpcy5tb3ZlKHsgcGVyY2VudCwgY3VycmVudFRpbWUgfSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0XHRsZXQgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZHJhZyA9IGZhbHNlO1xuXG5cdFx0Ly8gQ3JlYXRlIGxhYmVsc1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ3RpbWUtY3VycmVudCcgfSk7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gJzAwOjAwJztcblx0XHR0aGlzLnRvdGFsVGltZSA9IG5ldyBDb250cm9sVGV4dCh0aGlzLnBsYXllciwge2NsYXNzTmFtZSA6ICd0aW1lLXRvdGFsJyB9KTtcblxuXHRcdC8vIENyZWF0ZSBsaW5lIHdpdGggbWFya2VycyBhbmQgcGxheWVkIHJhbmdlXG5cblx0XHR0aGlzLm1hcmtlciA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGRyYWcgOiB0cnVlXG5cdFx0fSk7XG5cblx0XHR0aGlzLm1hcmtlclNoYWRvdyA9IG5ldyBNYXJrZXIodGhpcy5wbGF5ZXIsIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdzaGFkb3cnXG5cdFx0fSk7XG5cdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cblxuXHRcdC8vIFBsYXllZCByYW5nZXNcblx0XHR0aGlzLnBsYXllZFJhbmdlcyA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1wbGF5ZWQnKTtcblxuXG5cdFx0Ly8gQnVmZmVyZWQgcmFuZ2VzXG5cdFx0dGhpcy5idWZmZXJlZFJhbmdlcyA9IG5ldyBCdWZmZXJlZFJhbmdlcyh0aGlzLnBsYXllcikuZWxlbWVudDtcblxuXHRcdHRoaXMubGluZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZScpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyLmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMubWFya2VyU2hhZG93LmVsZW1lbnQpXG5cdFx0XHQuYXBwZW5kKHRoaXMucGxheWVkUmFuZ2VzKVxuXHRcdFx0LmFwcGVuZCh0aGlzLmJ1ZmZlcmVkUmFuZ2VzKVxuXHRcdFx0Lm9uKHtcblx0XHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5tYXJrZXIuZHJhZykgcmV0dXJuO1xuXG5cdFx0XHRcdFx0bGV0IHAgPSB0aGlzLmdldFBvc2l0aW9uKGUucGFnZVgpO1xuXHRcdFx0XHRcdGlmIChwID4gMCAmJiBwIDwgMSkge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudFxuXHRcdFx0XHRcdFx0XHQuc2hvdygpXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ2xlZnQnLCBwICogMTAwICsgJyUnKTtcblx0XHRcdFx0XHRcdHRoaXMubWFya2VyU2hhZG93XG5cdFx0XHRcdFx0XHRcdC5tYXJrZXJUaW1lXG5cdFx0XHRcdFx0XHRcdC5zaG93KClcblx0XHRcdFx0XHRcdFx0Lmh0bWwoc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbiAqIHApKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJTaGFkb3cuZWxlbWVudC5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdG1vdXNlbGVhdmUgOiAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0XHR0aGlzLm1hcmtlclNoYWRvdy5lbGVtZW50LmhpZGUoKVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdG1vdXNlZG93biA6IChlKSA9PiB7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Y2xpY2sgOiB0aGlzLl9vbkxpbmVDbGljay5iaW5kKHRoaXMpLFxuXG5cdFx0XHRcdHRvdWNobW92ZSA6IChlKSA9PiB7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50LmFkZENsYXNzKCd0aW1lbGluZS1jb250YWluZXInKVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCd0aW1lbGluZS1zdWJjb250YWluZXInKVxuXHRcdFx0XHQuYXBwZW5kKHRoaXMuY3VycmVudFRpbWUuZWxlbWVudClcblx0XHRcdFx0LmFwcGVuZCh0aGlzLmxpbmUpXG5cdFx0XHRcdC5hcHBlbmQodGhpcy50b3RhbFRpbWUuZWxlbWVudCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X29uQ2xpY2soZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdF9vbkxpbmVDbGljayhlKSB7XG5cdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRpZiAodGhpcy5kcmFnKSByZXR1cm47XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR0aGlzLm1vdmUoeyBwZXJjZW50IDogdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKX0pO1xuXHRcdHZpZGVvLmN1cnJlbnRUaW1lID0gKHZpZGVvLmR1cmF0aW9uICogdGhpcy5nZXRQb3NpdGlvbihlLnBhZ2VYKSk7XG5cdH1cblxuXHRvblNlY3Rpb25zSW5pdChlKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihpc05hTihkdXJhdGlvbikpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlU2VjdGlvblJhbmdlcyhpdGVtcykge1xuXHRcdGlmKHRoaXMuc2VjdGlvbnMgPT0gbnVsbCB8fCB0aGlzLnNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dGhpcy5zZWN0aW9ucyA9IHRoaXMuY3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcyk7XG5cdFx0XHR0aGlzLmxpbmUuYXBwZW5kKHRoaXMuc2VjdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zLmh0bWwodGhpcy5jcmVhdGVTZWN0aW9uUmFuZ2VzKGl0ZW1zKSk7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlU2VjdGlvblJhbmdlcyhpdGVtcykge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0bGV0IHJlc3VsdCA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygnbGVwbGF5ZXItdGltZWxpbmUtc2VjdGlvbnMnKTtcblx0XHRpdGVtcy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG5cdFx0XHRjb25zdCBsZW5ndGggPSAoc2VjdGlvbi5lbmQgLSBzZWN0aW9uLmJlZ2luKTtcblx0XHRcdGNvbnN0IGl0ZW0gPSAkKCc8ZGl2IC8+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdsZXBsYXllci10aW1lbGluZS1zZWN0aW9uJylcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0d2lkdGggOiBsZW5ndGggLyBkdXJhdGlvbiAqIDEwMCArICclJyxcblx0XHRcdFx0XHRsZWZ0IDogc2VjdGlvbi5iZWdpbiAvIGR1cmF0aW9uICogMTAwICsgJyUnXG5cdFx0XHRcdH0pO1xuXHRcdFx0cmVzdWx0LmFwcGVuZChpdGVtKTtcblx0XHR9KVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRnZXRQb3NpdGlvbiAoeCkge1xuXHRcdHJldHVybiAoeCAtIHRoaXMubGluZS5vZmZzZXQoKS5sZWZ0KSAvIHRoaXMubGluZS53aWR0aCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vdmUgbWFya2VyIG9uIHRpbWVsaW5lIG9uIHBlcmNlbnQgZnJvbSBhcmd1bWVudCwgbm90IGZyb20gdmlkZW8uY3VycmVudFRpbWVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBlcmNlbnQgVGhlIHBlcmNlbnQgd2hpY2ggeW91IHdhbnQgdG8gbW92ZSBtYXJrZXIgb24gdGltZWxpbmVcblx0ICovXG5cdG1vdmUgKHsgcGVyY2VudCwgY3VycmVudFRpbWUgfSkge1xuXHRcdGlmKGN1cnJlbnRUaW1lID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGN1cnJlbnRUaW1lID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb24gKiBwZXJjZW50O1xuXHRcdH1cblxuXHRcdGlmKGlzTmFOKGN1cnJlbnRUaW1lKSkgcmV0dXJuO1xuXHRcdHBlcmNlbnQgPSBwZXJjZW50ICogMTAwO1xuXHRcdHRoaXMubWFya2VyLmVsZW1lbnQuY3NzKCdsZWZ0JywgcGVyY2VudCArICclJyk7XG5cdFx0dGhpcy5wbGF5ZWRSYW5nZXMuY3NzKCd3aWR0aCcsIHBlcmNlbnQgKyAnJScpO1xuXHRcdHRoaXMuY3VycmVudFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoY3VycmVudFRpbWUpO1xuXHR9XG5cblx0dXBkYXRlTGFiZWxzKCkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0dGhpcy50b3RhbFRpbWUudGV4dCA9IHNlY29uZHNUb1RpbWUoMCwgTWF0aC5mbG9vcih2aWRlby5kdXJhdGlvbiAvIDM2MDApID4gMCk7XG5cdFx0Y29uc3Qgd2lkdGggPSB0aGlzLnRvdGFsVGltZS5lbGVtZW50LndpZHRoKCk7XG5cblx0XHR0aGlzLnRvdGFsVGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdFx0dGhpcy5jdXJyZW50VGltZS50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSB8fCAwKTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lLmVsZW1lbnQuY3NzKHtcblx0XHRcdHdpZHRoXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uUGxheWVySW5pdGVkKGUpIHtcblx0XHR0aGlzLnVwZGF0ZUxhYmVscygpO1xuXHRcdGlmICh0aGlzLnBsYXllci5zZWN0aW9ucykge1xuXHRcdFx0dGhpcy51cGRhdGVTZWN0aW9uUmFuZ2VzKHRoaXMucGxheWVyLnNlY3Rpb25zLml0ZW1zKTtcblx0XHR9XG5cdH1cblxuXHRfaW5pdFdhdGNoQnVmZmVyICgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMud2F0Y2hCdWZmZXJJbnRlcnZhbCk7XG5cdFx0bGV0IHZpZGVvID0gdGhpcy5wbGF5ZXIudmlkZW87XG5cdFx0bGV0IHVwZGF0ZVByb2dyZXNzQmFyID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgRU5EID0gMTtcblx0XHRcdGNvbnN0IFNUQVJUID0gMDtcblx0XHRcdGxldCByZXN1bHQgPSAkKCcnKTtcblx0XHRcdHZpZGVvLmxvYWRlZC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRsZXQgZG9tSXRlbSA9ICQoJzxkaXYgLz4nKS5hZGRDbGFzcygndGltZS1idWZmZXJlZCcpO1xuXHRcdFx0XHRkb21JdGVtLmNzcyh7XG5cdFx0XHRcdFx0bGVmdCA6IGl0ZW1bU1RBUlRdICogMTAwICsgJyUnLFxuXHRcdFx0XHRcdHdpZHRoIDogKGl0ZW1bRU5EXSAtIGl0ZW1bU1RBUlRdKSAqIDEwMCArICclJ1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmFkZChkb21JdGVtKTtcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5idWZmZXJlZC5odG1sKHJlc3VsdCk7XG5cdFx0XHRpZiAodmlkZW8ubG9hZGVkLmxlbmd0aCAmJiAoMSAtIHZpZGVvLmxvYWRlZFNpemUpIDw9IDAuMDUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLndhdGNoQnVmZmVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVQcm9ncmVzc0JhciwgNTAwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPbiBkdXJhdGlvbmNoYW5nZSBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRfb25EdXJhdGlvbkNoYW5nZSAoKSB7XG5cdFx0dGhpcy51cGRhdGVMYWJlbHMoKTtcblx0XHRpZiAodGhpcy5wbGF5ZXIuc2VjdGlvbnMpIHtcblx0XHRcdHRoaXMudXBkYXRlU2VjdGlvblJhbmdlcyh0aGlzLnBsYXllci5zZWN0aW9ucy5pdGVtcyk7XG5cdFx0fVxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lbGluZUNvbnRyb2wnLCBUaW1lbGluZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVsaW5lJywgVGltZWxpbmVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQ29udHJvbFRleHQuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBDb250cm9sVGV4dFxuICogQGV4bnRlZHMgQ29udHJvbFxuICovXG5jbGFzcyBDb250cm9sVGV4dCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRjbGFzc05hbWUgOiAnJ1xuXHRcdH0sIG9wdGlvbnMpO1xuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHN1cGVyLmNyZWF0ZUVsZW1lbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBjb250cm9sLXRleHQgJHt0aGlzLm9wdGlvbnMuY2xhc3NOYW1lfWA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTZXR0ZXIgb2YgdGV4dCBmaWVsZFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuXHQgKi9cblxuXHRzZXQgdGV4dCAodmFsdWUpIHtcblx0XHR0aGlzLl90ZXh0ID0gdmFsdWU7XG5cdFx0dGhpcy5lbGVtZW50Lmh0bWwodmFsdWUpO1xuXHR9XG5cblx0Z2V0IHRleHQgKCkge1xuXHRcdHJldHVybiB0aGlzLl90ZXh0XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sVGV4dCcsIENvbnRyb2xUZXh0KTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCd0ZXh0JywgQ29udHJvbFRleHQpO1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Db250cm9sVGV4dC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgQnVmZmVyZWRSYW5nZXMuanNcbiAqL1xuXG5pbXBvcnQgeyBwZXJjZW50aWZ5LCBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgQnVmZmVyZWRSYW5nZXNcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuXG5jbGFzcyBCdWZmZXJlZFJhbmdlcyBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwcm9ncmVzcycsIHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdzZWVrZWQnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbignbG9hZHN0YXJ0JywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMucmFuZ2UgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkX19yYW5nZSdcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQgPSBjcmVhdGVFbCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ2xlcGxheWVyLXRpbWVsaW5lLWJ1ZmZlcmVkJ1xuXHRcdH0pLmFwcGVuZCh0aGlzLnJhbmdlKTtcblx0fVxuXG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IGJ1ZmZlcmVkID0gdGhpcy5wbGF5ZXIudmlkZW8uYnVmZmVyZWQ7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRpZihidWZmZXJlZCA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgZW5kID0gMDtcblx0XHRpZiAoYnVmZmVyZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0ZW5kID0gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xuXHRcdH1cblxuXHRcdGxldCB3aWR0aCA9IDA7XG5cdFx0aWYgKGR1cmF0aW9uID4gMCkge1xuXHRcdFx0d2lkdGggPSBwZXJjZW50aWZ5KGVuZCwgZHVyYXRpb24pICogMTAwICsgJyUnXG5cdFx0fVxuXHRcdHRoaXMucmFuZ2UuY3NzKHsgd2lkdGggfSlcblx0fVxufVxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdCdWZmZXJlZFJhbmdlcycsIEJ1ZmZlcmVkUmFuZ2VzKTtcbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlcmVkUmFuZ2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvVGltZWxpbmUvQnVmZmVyZWRSYW5nZXMuanMiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9Db21wb25lbnQnO1xuXG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0ZHJhZyA6IGZhbHNlLFxuXHRcdFx0Y2xhc3NOYW1lIDogJydcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdtb3VzZWRvd24nLCB0aGlzLl9vbk1vdXNlZG93bi5iaW5kKHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKHtcblxuXHRcdFx0bW91c2Vtb3ZlIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xlcGxheWVyX21vdXNlbW92ZScsIHsgeCA6IGUucGFnZVggfSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRtb3VzZXVwIDogKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWcpIHJldHVybjtcblx0XHRcdFx0dGhpcy5kcmFnID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubWFya2VyVGltZS5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZXVwJywgeyB4IDogZS5wYWdlWCB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNldCBkcmFnKHZhbHVlKSB7XG5cdFx0dGhpcy5fZHJhZyA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcygndGltZS1tYXJrZXItLWRyYWcnLCB2YWx1ZSk7XG5cdH1cblxuXHRnZXQgZHJhZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fZHJhZztcblx0fVxuXG5cdF9vbk1vdXNlZG93bihlKSB7XG5cdFx0aWYgKGUud2hpY2ggIT09IDEpIHJldHVybjtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYodGhpcy5vcHRpb25zLmRyYWcpIHtcblx0XHRcdHRoaXMuZHJhZyA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9tb3VzZWRvd24nKTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0Ly8gTWFya2VyIG9mIGN1cnJlbnQgdGltZSBvbiB0aW1lbGluZVxuXHRcdHRoaXMubWFya2VyVGltZSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCd0aW1lJylcblx0XHRcdC5oaWRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50ID0gJCgnPGRpdiAvPicpXG5cdFx0XHQuYWRkQ2xhc3MoYHRpbWUtbWFya2VyICR7dGhpcy5vcHRpb25zLmNsYXNzTmFtZX1gKVxuXHRcdFx0LmFwcGVuZCh0aGlzLm1hcmtlclRpbWUpXG5cblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ01hcmtlcicsIE1hcmtlcik7XG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9UaW1lbGluZS9NYXJrZXIuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIFNlY3Rpb25Db250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ2hlY2tib3ggZnJvbSAnLi9Db250cm9sQ2hlY2tib3gnO1xuXG4vKipcbiAqIEBjbGFzcyBTZWN0aW9uQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jaGVja2VkPXRydWVdXG4gKiBAZXh0ZW5kcyBDb250cm9sQ2hlY2tib3hcbiAqL1xuY2xhc3MgU2VjdGlvbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ2hlY2tib3gge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdsaXN0LXVsJyxcblx0XHRcdGNsYXNzTmFtZSA6ICdzZWN0aW9uJyxcblx0XHRcdG5hbWUgOiAnc2VjdGlvbicsXG5cdFx0XHR0aXRsZSA6ICfQn9C+0LrQsNC30LDRgtGML9GB0LrRgNGL0YLRjCDRgdC10LrRhtC40LgnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3NlY3Rpb25zaW5pdCcsIHRoaXMuX29uU2VjdGlvbnNJbml0LmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25DaGVja2VkKGUsIGRhdGEpIHtcblx0XHRzdXBlci5vbkNoZWNrZWQoZSk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcignc2VjdGlvbnN0b2dnbGUnLCB7XG5cdFx0XHRjaGVja2VkIDogZGF0YS5jaGVja2VkLFxuXHRcdFx0dmlldyA6IHRoaXMucGxheWVyLnZpZXdcblx0XHR9KTtcblx0fVxuXG5cdF9vblNlY3Rpb25zSW5pdChlKSB7XG5cdFx0dGhpcy5vcHRpb25zLmRpc2FibGUgPSB0aGlzLmRpc2FibGUgPSBmYWxzZTtcblx0XHR0aGlzLmNoZWNrZWQgPSB0cnVlO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnU2VjdGlvbkNvbnRyb2wnLCBTZWN0aW9uQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnc2VjdGlvbicsIFNlY3Rpb25Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvU2VjdGlvbkNvbnRyb2wuanMiLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBmaWxlIGNvbnRyb2wtY2hlY2tib3guanNcbiAqL1xuXG5cbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNoZWNrZWQ9ZmFsc2VdXG4gKiBAY2xhc3MgQ29udHJvbENoZWNrYm94IFRvZ2dhYmxlIGNvbnRyb2xcbiAqL1xuY2xhc3MgQ29udHJvbENoZWNrYm94IGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLmNoZWNrZWQgPSB0aGlzLm9wdGlvbnMuY2hlY2tlZCB8fCBmYWxzZTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2xlcGxheWVyX2NoZWNrZWQnLCB0aGlzLm9uQ2hlY2tlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblxuXHQvKipcblx0ICogU2V0dGVyIGZvciBjaGVja2VkIHByb3BlcnR5XG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtib29sZWFufSB2YWxcblx0ICovXG5cdHNldCBjaGVja2VkICh2YWwpIHtcblx0XHRpZiAodGhpcy5kaXNhYmxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhbCA9ICEhdmFsO1xuXHRcdHRoaXMuX2NoZWNrZWQgPSB2YWxcblx0XHR0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2NvbnRyb2wtY2hlY2tib3gtLWNoZWNrZWQnLCB2YWwpO1xuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsZXBsYXllcl9jaGVja2VkJywgeyBjaGVja2VkIDogdmFsIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHRlciBmb3IgY2hlY2tlZCBwcm9wZXJ5XG5cdCAqIEBwdWJsaWNcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdGdldCBjaGVja2VkICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fY2hlY2tlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2sgKGUpIHtcblx0XHRzdXBlci5vbkNsaWNrKGUpO1xuXHRcdHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG5cdH1cblxuXHQvKipcblx0ICogT24gY2hlY2tlZCBldmVudCBoYW5kbGVyXG5cdCAqXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGFcblx0ICovXG5cdG9uQ2hlY2tlZChlLCBkYXRhKSB7XG5cblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0YnVpbGRDU1NDbGFzcygpIHtcblx0XHRyZXR1cm4gYGNvbnRyb2wtY2hlY2tib3ggJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YFxuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ2hlY2tib3gnLCBDb250cm9sQ2hlY2tib3gpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ2NoZWNrYm94JywgQ29udHJvbENoZWNrYm94KTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDaGVja2JveDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL0NvbnRyb2xDaGVja2JveC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRnVsbHNjcmVlbkNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBGdWxsc2NyZWVuQ29udHJvbFxuICogQGV4dGVuZHMgQ29udHJvbFxuICovXG5jbGFzcyBGdWxsc2NyZWVuQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xuXHRjb25zdHJ1Y3RvciAocGxheWVyLCBvcHRpb25zPXt9KSB7XG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB7XG5cdFx0XHRpY29uTmFtZSA6ICdhcnJvd3MtYWx0Jyxcblx0XHRcdGNsYXNzTmFtZSA6ICdmdWxsc2NyZWVuJyxcblx0XHRcdHRpdGxlIDogJ9Cg0LDQt9Cy0LXRgNC90YPRgtGML9GB0LLQtdGA0L3Rg9GC0Ywg0L3QsCDQv9C+0LvQvdGL0Lkg0Y3QutGA0LDQvScsXG5cdFx0XHRuYW1lIDogJ2Z1bGxzY3JlZW4nXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSlcblx0XHR0aGlzLnBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdGdWxsc2NyZWVuQ29udHJvbCcsIEZ1bGxzY3JlZW5Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdmdWxsc2NyZWVuJywgRnVsbHNjcmVlbkNvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgRnVsbHNjcmVlbkNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9GdWxsc2NyZWVuQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgUmF0ZUNvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4vQ29udHJvbFRleHQnO1xuaW1wb3J0IENvb2tpZSBmcm9tICcuLi91dGlscy9jb29raWUnO1xuXG4vKipcbiAqIEBjbGFzcyBSYXRlQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHByb3BlcnR5IHtDb250cm9sfSBkb3duQ29udHJvbCAgRG93biByYXRlIGNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbH0gdXBDb250cm9sICBVcCByYXRlIGNvbnRyb2xcbiAqIEBwcm9wZXJ0eSB7Q29udHJvbFRleHR9IGN1cnJlbnRSYXRlIENvbnRyb2wgb2YgY3V1cmVudCByYXRlXG4gKiBAZXh0ZW5kcyBDb250cm9sXG4gKi9cbmNsYXNzIFJhdGVDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGNsYXNzTmFtZSA6ICdjb250cm9sLWNvbnRhaW5lcidcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3JhdGVjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblxuXHRcdHRoaXMuZG93bkNvbnRyb2wgPSBuZXcgQ29udHJvbCh0aGlzLnBsYXllciwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRuYW1lIDogJ3JhdGUtZG93bicsXG5cdFx0XHRpY29uTmFtZSA6ICdiYWNrd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9C80LXQvdGM0YjQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uZGVjcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLnVwQ29udHJvbCA9IG5ldyBDb250cm9sKHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS11cCcsXG5cdFx0XHRuYW1lIDogJ3JhdGUtdXAnLFxuXHRcdFx0aWNvbk5hbWUgOiAnZm9yd2FyZCcsXG5cdFx0XHRjb2xsZWN0aW9uIDogdGhpcy5vcHRpb25zLmNvbGxlY3Rpb24sXG5cdFx0XHR0aXRsZSA6ICfQo9Cy0LXQu9C40YfQuNGC0Ywg0YHQutC+0YDQvtGB0YLRjCDQv9GA0L7QuNCz0YDRi9Cy0LDQvdC40Y8nLFxuXHRcdFx0b25DbGljayA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dmlkZW8uaW5jcmVhc2VSYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmN1cnJlbnRSYXRlID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7XG5cdFx0XHRjbGFzc05hbWUgOiAncmF0ZS1jdXJyZW50Jyxcblx0XHRcdG9uQ2xpY2sgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHZpZGVvLnJhdGUgPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuZGVmYXVsdFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQuYXBwZW5kKHRoaXMuZG93bkNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5jdXJyZW50UmF0ZS5lbGVtZW50KVxuXHRcdFx0LmFwcGVuZCh0aGlzLnVwQ29udHJvbC5lbGVtZW50KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRvblBsYXllckluaXRlZCgpIHtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqL1xuXHRfb25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cblxuXHR1cGRhdGUodmFsdWUpIHtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXG5cdFx0dmFsdWUgPSB2YWx1ZSB8fCB2aWRlby5yYXRlO1xuXHRcdHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSlcblx0XHRcdC50b0ZpeGVkKDIpXG5cdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0LnJlcGxhY2UoLywvZywgJy4nKTtcblx0XHR0aGlzLmN1cnJlbnRSYXRlLnRleHQgPSAnw5cnICsgdmFsdWU7XG5cblx0XHRpZih0aGlzLmRpc2FibGUpIHJldHVybjtcblxuXHRcdGlmKHZpZGVvLnJhdGUgPD0gdmlkZW8ucmF0ZU1pbikge1xuXHRcdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kb3duQ29udHJvbC5kaXNhYmxlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYodmlkZW8ucmF0ZSA+PSB2aWRlby5yYXRlTWF4KSB7XG5cdFx0XHR0aGlzLnVwQ29udHJvbC5kaXNhYmxlID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy51cENvbnRyb2wuZGlzYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHNldCBkaXNhYmxlKHZhbHVlKSB7XG5cdFx0dGhpcy5fZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMuZG93bkNvbnRyb2wuZGlzYWJsZSA9IHZhbHVlO1xuXHRcdHRoaXMudXBDb250cm9sLmRpc2FibGUgPSB2YWx1ZTtcblx0fVxuXG5cdGluaXQgKCkge1xuXHRcdGxldCByYXRlID0gQ29va2llLmdldCgncmF0ZScsIHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0KTtcblx0XHR0aGlzLnNob3cocmF0ZSk7XG5cdH1cblxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1JhdGVDb250cm9sJywgUmF0ZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3JhdGUnLCBSYXRlQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBSYXRlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1JhdGVDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBCYWNrd2FyZENvbnRyb2wuanNcbiAqXG4gKiBCYWNrd2FyZCBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbnNcbiAqIEBjbGFzcyBCYWNrd2FyZENvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgQmFja3dhcmRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ3VuZG8nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ2JhY2t3YXJkJyxcblx0XHRcdG5hbWUgOiAnYmFja3dhcmQnLFxuXHRcdFx0dGl0bGUgOiBg0J7RgtC80L7RgtCw0YLRjCDQvdCw0LfQsNC0INC90LAgJHtwbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bX0g0YHQtdC60YPQvdC0YCxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdmaXJzdHBsYXknLCAoKSA9PiB0aGlzLmRpc2FibGUgPSBmYWxzZSlcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdG9uQ2xpY2soZSkge1xuXHRcdHN1cGVyLm9uQ2xpY2soZSk7XG5cdFx0dGhpcy5wbGF5ZXIudmlkZW8uY3VycmVudFRpbWUgLT0gdGhpcy5wbGF5ZXIub3B0aW9ucy5wbGF5YmFjay5zdGVwLm1lZGl1bTtcblx0XHR0aGlzLnBsYXllci5zcGxhc2hJY29uLnNob3coJ3VuZG8nKTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0JhY2t3YXJkQ29udHJvbCcsIEJhY2t3YXJkQ29udHJvbCk7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnYmFja3dhcmQnLCBCYWNrd2FyZENvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgQmFja3dhcmRDb250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQmFja3dhcmRDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBTb3VyY2VDb250cm9sLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sQ29udGFpbmVyIGZyb20gJy4vQ29udHJvbENvbnRhaW5lcic7XG5cblxuLyoqXG4gKiBAY2xhc3MgU291cmNlQ29udHJvbFxuICogQHBhcmFtIHtQbGF5ZXJ9IHBsYXllciBNYWluIHBsYXllclxuICogQGV4dGVuZHMgQ29udHJvbENvbmFpbmVyXG4gKi9cbmNsYXNzIFNvdXJjZUNvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcblx0Ly8gVE9ETzog0JTQtdC70LDRgtGMIGRpc2FibGUvZW5hYmxlINC/0L7RgdC70LUgb3B0aW9ucyBpbml0XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdG5hbWUgOiAnc291cmNlJyxcblx0XHRcdGljb25OYW1lIDogJ2J1bGxzZXllJyxcblx0XHRcdHRpdGxlIDogJ9Ca0LDRh9C10YHRgtCy0L4nLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3NvdXJjZS1jb250cm9sJyxcblx0XHRcdGRpc2FibGUgOiB0cnVlXG5cdFx0fSwgb3B0aW9ucyk7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblxuXHRcdHRoaXMucGxheWVyLm9uKCdwbGF5aW5nJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5wbGF5ZXIub24oJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uSXRlbUNsaWNrKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBpdGVtID0gJChlLnRhcmdldCk7XG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHR2aWRlby5wbGF5YmFja1F1YWxpdHkgPSBpdGVtLmRhdGEoJ25hbWUnKTtcblxuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmhpZGUoKTtcblxuXHR9XG5cblx0b25QbGF5ZXJJbml0ZWQoZSwgZGF0YSkge1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxuXHRnZXREYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XG5cdH1cblxuXHRnZXRDdXJyZW50VmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLnBsYXliYWNrUXVhbGl0eTtcblx0fVxufVxuXG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ1NvdXJjZUNvbnRyb2wnLCBTb3VyY2VDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdzb3VyY2UnLCBTb3VyY2VDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFNvdXJjZUNvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Tb3VyY2VDb250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBDb250cm9sQ29udGFpbmVyLmpzXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBDb250cm9sQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBDb250cm9sRHJvcGRvd25cbiAqL1xuY2xhc3MgQ29udHJvbENvbnRhaW5lciBleHRlbmRzIENvbnRyb2xEcm9wZG93biB7XG5cblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl9hY3RpdmUgPSBudWxsO1xuXHRcdC8qKlxuXHRcdCAqIExpc3Qgb2YgaXRlbXNcblx0XHQgKlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKiBAdHlwZSB7QXJyYXl9XG5cdFx0ICovXG5cdFx0dGhpcy5saXN0ID0gW107XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGl0ZW0gb2YgY29udGFpbmVyIGJ5IGluZGV4XG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqL1xuXHRnZXRCeUluZGV4KGluZGV4KSB7XG5cdFx0cmV0dXJuIHRoaXMubGlzdFtpbmRleF07XG5cdH1cblxuXHQvKipcblx0ICogU2V0IGl0ZW0gYWN0aXZlIGJ5IGluZGV4XG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqL1xuXHRzZXRBY3RpdmVCeUluZGV4KGluZGV4KSB7XG5cdFx0aWYgKHRoaXMuYWN0aXZlKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZS5yZW1vdmVDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpO1xuXHRcdH1cblx0XHR0aGlzLl9hY3RpdmUgPSB0aGlzLmxpc3RbaW5kZXhdLmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEdldHRlciBvZiBhY3RpdmUgZmllbGRcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHQgKi9cblx0Z2V0IGFjdGl2ZSAoKSB7XG5cdFx0aWYgKHRoaXMuX2FjdGl2ZSAmJiB0aGlzLl9hY3RpdmUubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZTtcblx0XHR9XG5cdFx0dGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZiAoaXRlbS5oYXNDbGFzcygnY29udHJvbC1jb250YWluZXJfX2l0ZW0tLWFjdGl2ZScpKSB7XG5cdFx0XHRcdHRoaXMuX2FjdGl2ZSA9IGl0ZW07XG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBhY3RpdmUgZmllbGRcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge2pRdWVyeX0gSXRlbSBvZiBjb250YWluZXJcblx0ICovXG5cdHNldCBhY3RpdmUgKGVsZW1lbnQpIHtcblx0XHRpZiAodGhpcy5hY3RpdmUpIHtcblx0XHRcdHRoaXMuYWN0aXZlLnJlbW92ZUNsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHQkKGVsZW1lbnQpLmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbS0tYWN0aXZlJyk7XG5cdFx0fVxuXHRcdHRoaXMuX2FjdGl2ZSA9IGVsZW1lbnQ7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZVxuXHR9XG5cblxuXHQvKipcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge1N0cmluZ3xqUXVlcnl9IENvbnRlbnQgb2YgaXRlbVxuXHQgKiBAcGFyYW0ge09iamVjdH0gRGF0YSBvZiBpdGVtXG5cdCAqL1xuXHRhZGRJdGVtIChjb250ZW50LCBkYXRhKSB7XG5cdFx0Y29uc3QgaXRlbSA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdjb250cm9sLWNvbnRhaW5lcl9faXRlbScpXG5cdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgZGF0YS50b29sdGlwKVxuXHRcdFx0Lm9uKCdjbGljaycsIHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKSlcblx0XHRcdC5hcHBlbmQoY29udGVudCk7XG5cblx0XHR0aGlzLmxpc3QgPSB0aGlzLmxpc3QuY29uY2F0KGl0ZW0pO1xuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuYXBwZW5kKGl0ZW0pO1xuXG5cdFx0cmV0dXJuIGl0ZW07XG5cdH1cblxuXHQvKipcblx0ICogT24gaXRlbSBjbGljayBldmVudCBoYW5kbGVyXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHQgKi9cblx0b25JdGVtQ2xpY2sgKGUpIHtcblx0XHR0aGlzLmFjdGl2ZSA9IGUuY3VycmVudFRhcmdldDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdGJ1aWxkQ1NTQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGAke3N1cGVyLmJ1aWxkQ1NTQ2xhc3MoKX0gY29udHJvbC1jb250YWluZXJgXG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0Y29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpXG5cdFx0Y29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsdWUoKVxuXG5cdFx0aWYoZGF0YSA9PSBudWxsIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLmRpc2FibGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGlzdCA9IFtdO1xuXHRcdHRoaXMuZHJvcGRvd25Db250ZW50LmVtcHR5KCk7XG5cblx0XHRkYXRhLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRjb25zdCBlbGVtID0gdGhpcy5hZGRJdGVtKGl0ZW0udGl0bGUsIGl0ZW0pO1xuXHRcdFx0aWYoY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5uYW1lID09PSBpdGVtLm5hbWUpIHtcblxuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IGVsZW07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5kaXNhYmxlID0gZmFsc2U7XG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdDb250cm9sQ29udGFpbmVyJywgQ29udHJvbENvbnRhaW5lcik7XG5Db250cm9sLnJlZ2lzdGVyQ29udHJvbCgnY29udGFpbmVyJywgQ29udHJvbENvbnRhaW5lcik7XG5leHBvcnQgZGVmYXVsdCBDb250cm9sQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvQ29udHJvbENvbnRhaW5lci5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgU3VidGl0bGVDb250cm9sLmpzXG4gKlxuICogU3VidGl0bGUgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgQ29udHJvbENvbnRhaW5lciBmcm9tICcuL0NvbnRyb2xDb250YWluZXInO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBTdWJ0aXRsZUNvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xDb250YWluZXJcbiAqL1xuY2xhc3MgU3VidGl0bGVDb250cm9sIGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe30sIHtcblx0XHRcdGljb25OYW1lIDogJ2NvbW1lbnRpbmctbycsXG5cdFx0XHR0aXRsZSA6ICfQodGD0LHRgtC40YLRgNGLJyxcblx0XHRcdG5hbWUgOiAnc3VidGl0bGUnLFxuXHRcdFx0Y2xhc3NOYW1lIDogJ3N1YnRpdGxlLWNvbnRyb2wnLFxuXHRcdFx0ZGlzYWJsZSA6IHRydWVcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3BsYXlpbmcnLCB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnBsYXllci5vbigndHJhY2tzY2hhbmdlJywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkNsaWNrIChlKSB7XG5cdFx0c3VwZXIub25DbGljayhlKTtcblx0XHRjb25zdCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHZpZGVvLnRyYWNrID0gbnVsbFxuXHR9XG5cblx0b25JdGVtQ2xpY2sgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXG5cdFx0Y29uc3QgaXRlbSA9ICQoZS50YXJnZXQpXG5cdFx0Y29uc3QgdmlkZW8gPSB0aGlzLnBsYXllci52aWRlbztcblx0XHRpZiAoaXRlbS5kYXRhKCkpIHtcblx0XHRcdHZpZGVvLnRyYWNrID0gaXRlbS5kYXRhKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnQuaGlkZSgpXG5cdH1cblxuXHRvblBsYXllckluaXRlZChlLCBkYXRhKSB7XG5cdFx0dGhpcy51cGRhdGUoKVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdHN1cGVyLnVwZGF0ZSgpO1xuXHRcdGNvbnN0IGhhc1ZhbHVlID0gISEodGhpcy5nZXRDdXJyZW50VmFsdWUoKSAmJiB0aGlzLmdldEN1cnJlbnRWYWx1ZSgpLm5hbWUgIT0gbnVsbCk7XG5cdFx0dGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKFxuXHRcdFx0J2NvbnRyb2wtY2hlY2tib3gtLWNoZWNrZWQnLFxuXHRcdFx0aGFzVmFsdWVcblx0XHQpXG5cdH1cblxuXHRnZXREYXRhKCkge1xuXHRcdHJldHVybiB0aGlzLnBsYXllci52aWRlby5zdWJ0aXRsZXM7XG5cdH1cblxuXHRnZXRDdXJyZW50VmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLnZpZGVvLnRyYWNrO1xuXHR9XG5cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdTdWJ0aXRsZUNvbnRyb2wnLCBTdWJ0aXRsZUNvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3N1YnRpdGxlJywgU3VidGl0bGVDb250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFN1YnRpdGxlQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1N1YnRpdGxlQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgRG93bmxvYWRDb250cm9sLmpzXG4gKlxuICogRG93bmxvYWQgY29udHJvbFxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBjbGFzcyBEb3dubG9hZENvbnRyb2xcbiAqIEBleG50ZWRzIENvbnRyb2xcbiAqL1xuY2xhc3MgRG93bmxvYWRDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnM9e30pIHtcblx0XHRvcHRpb25zID0gJC5leHRlbmQoe1xuXHRcdFx0dGl0bGUgOiAn0KHQutCw0YfQsNGC0Ywg0LLQuNC00LXQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnZG93bmxvYWQnLFxuXHRcdFx0bmFtZSA6ICdkb3dubG9hZCdcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMucGxheWVyLm9uKCdsb2Fkc3RhcnQnLCB0aGlzLm9uTG9hZFN0YXJ0LmJpbmQodGhpcykpO1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdC8vIFRPRE86INCU0L7QvtC/0YDQtdC00LXQu9C40YLRjCDRjdGC0L7RgiDQvNC10YLQvtC0LCDQsCDQvdC1INC/0LXRgNC10L7Qv9GA0LXQtNC70LXQuNGC0Yxcblx0XHR0aGlzLmVsZW1lbnQgPSAkKCc8YSAvPicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGhyZWYgOiAnJyxcblx0XHRcdFx0dGFyZ2V0IDogJ19ibGFuaycsXG5cdFx0XHRcdGRvd25sb2FkIDogdHJ1ZSxcblx0XHRcdFx0dGl0bGUgOiB0aGlzLm9wdGlvbnMudGl0bGUsXG5cdFx0XHR9KVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuYnVpbGRDU1NDbGFzcygpKVxuXHRcdFx0LmFwcGVuZChuZXcgSWNvbih0aGlzLnBsYXllciwgeyBpY29uTmFtZSA6ICdkb3dubG9hZCcgfSkuZWxlbWVudCk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRidWlsZENTU0NsYXNzKCkge1xuXHRcdHJldHVybiBgJHtzdXBlci5idWlsZENTU0NsYXNzKCl9YDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFNldHRlciBvZiBsaW5rIGZpZWxkXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFBhdGggZm9yIHZpZGVvXG5cdCAqL1xuXHRzZXQgbGluayAodmFsdWUpIHtcblx0XHRjb25zdCBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0cGFyc2VyLmhyZWYgPSB2YWx1ZTtcblx0XHRsZXQgZmlsZU5hbWUgPSBwYXJzZXIucGF0aG5hbWUuc3BsaXQoJy8nKTtcblx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lW2ZpbGVOYW1lLmxlbmd0aCAtIDFdO1xuXHRcdHRoaXMuZWxlbWVudC5hdHRyKHtcblx0XHRcdGhyZWYgOiB2YWx1ZSxcblx0XHRcdGRvd25sb2FkIDogZmlsZU5hbWVcblx0XHR9KTtcblx0fVxuXG5cblx0b25Mb2FkU3RhcnQoZSwgZGF0YSkge1xuXHRcdHRoaXMubGluayA9IHRoaXMucGxheWVyLnZpZGVvLnNyYy51cmxcblx0fVxuXG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnRG93bmxvYWRDb250cm9sJywgRG93bmxvYWRDb250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdkb3dubG9hZCcsIERvd25sb2FkQ29udHJvbCk7XG5leHBvcnQgZGVmYXVsdCBEb3dubG9hZENvbnRyb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvY29tcG9uZW50cy9Eb3dubG9hZENvbnRyb2wuanMiLCJcbid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGZpbGUgS2V5YmluZGluZ0luZm9Db250cm9sLmpzXG4gKlxuICogSW5mbyBjb250cm9sXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBDb250cm9sRHJvcGRvd24gZnJvbSAnLi9Db250cm9sRHJvcGRvd24nO1xuXG4vKipcbiAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXIgTWFpbiBwbGF5ZXJcbiAqIEBjbGFzcyBLZXlCaW5kaW5nSW5mb0NvbnRyb2xcbiAqIEBleHRlbmRzIENvbnRyb2xEcm9wZG93blxuICovXG5jbGFzcyBLZXlCaW5kaW5nSW5mb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sRHJvcGRvd24ge1xuXG5cdGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0aWNvbk5hbWUgOiAnaW5mbycsXG5cdFx0XHR0aXRsZSA6ICfQmNC90YTQvicsXG5cdFx0XHRjbGFzc05hbWUgOiAnaW5mby1jb250cm9sJyxcblx0XHRcdG5hbWUgOiAnaW5mbydcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHRzdXBlci5jcmVhdGVFbGVtZW50KCk7XG5cdFx0bGV0IGtleUJpbmRpbmcgPSB0aGlzLnBsYXllci5vcHRpb25zLmtleUJpbmRpbmc7XG5cdFx0bGV0IGluZm9Db250ZW50ID0gYGA7XG5cdFx0Zm9yIChsZXQgX2tleSBpbiBrZXlCaW5kaW5nKSB7XG5cdFx0XHRpZiAoIWtleUJpbmRpbmcuaGFzT3duUHJvcGVydHkoX2tleSkpIGNvbnRpbnVlO1xuXG5cdFx0XHRsZXQgaG90a2V5ID0ga2V5QmluZGluZ1tfa2V5XTtcblx0XHRcdGxldCBpdGVtID0gJyc7XG5cdFx0XHRsZXQga2V5U3RyaW5nID0gJyc7XG5cblx0XHRcdGhvdGtleS5pbmZvLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcblx0XHRcdFx0aWYgKGluZGV4ICE9PSAwKSB7XG5cdFx0XHRcdFx0a2V5U3RyaW5nICs9IGAgKyBgXG5cdFx0XHRcdH1cblx0XHRcdFx0a2V5U3RyaW5nICs9IGA8a2JkIGNsYXNzPVwibGVwbGF5ZXIta2V5XCI+JHtrZXl9PC9rYmQ+YFxuXHRcdFx0fSk7XG5cblx0XHRcdGl0ZW0gPSBgXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJpbmZvLWNvbnRyb2xfX2l0ZW1cIj5cblx0XHRcdFx0XHQke2tleVN0cmluZ30gLSAke2hvdGtleS5kZXNjcmlwdGlvbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRgXG5cblx0XHRcdGluZm9Db250ZW50ICs9IGl0ZW07XG5cblx0XHR9XG5cdFx0dGhpcy5kcm9wZG93bkNvbnRlbnRcblx0XHRcdC5hZGRDbGFzcygnaW5mby1jb250cm9sX19jb250ZW50Jylcblx0XHRcdC5hcHBlbmQoaW5mb0NvbnRlbnQpO1xuXHR9XG59XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnS2V5QmluZGluZ0luZm9Db250cm9sJywgS2V5QmluZGluZ0luZm9Db250cm9sKTtcbkNvbnRyb2wucmVnaXN0ZXJDb250cm9sKCdrZXliaW5kaW5nIGluZm8nLCBLZXlCaW5kaW5nSW5mb0NvbnRyb2wpO1xuZXhwb3J0IGRlZmF1bHQgS2V5QmluZGluZ0luZm9Db250cm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2NvbXBvbmVudHMvS2V5YmluZGluZ0luZm9Db250cm9sLmpzIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAZmlsZSBUaW1lSW5mb0NvbnRyb2wuanNcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgQ29udHJvbCBmcm9tICcuL0NvbnRyb2wnO1xuaW1wb3J0IENvbnRyb2xUZXh0IGZyb20gJy4vQ29udHJvbFRleHQnO1xuaW1wb3J0IHsgc2Vjb25kc1RvVGltZSB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyIE1haW4gcGxheWVyXG4gKiBAY2xhc3MgVGltZUluZm9Db250cm9sXG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUncyB0ZXh0XG4gKiBAcHJvcGVydHkge0NvbnRyb2xUZXh0fSB0b3RhbFRpbWUgVG90YWwgdGltZVxuICogQHByb3BlcnR5IHtqUXVlcnl9IGxpbmVcbiAqIEBleHRlbmRzIENvbnRyb2xcbiAqL1xuY2xhc3MgVGltZUluZm9Db250cm9sIGV4dGVuZHMgQ29udHJvbCB7XG5cblx0Y29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucz17fSkge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0Y2xhc3NOYW1lIDogJ3RpbWVsaW5lIHRpbWVsaW5lLWNvbnRhaW5lcicsXG5cdFx0XHRuYW1lIDogJ3RpbWUtaW5mbydcblx0XHR9LCBvcHRpb25zKTtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3QgdGltZSA9IHRoaXMucGxheWVyLmN1cnJlbnRUaW1lO1xuXHRcdFx0dGhpcy5fY3VycmVudFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKHRpbWUpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5wbGF5ZXIub24oJ2R1cmF0aW9uY2hhbmdlJywgKGUpID0+IHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUodGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb24pO1xuXHRcdH0pO1xuXHR9XG5cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIudmlkZW8uZHVyYXRpb247XG5cdFx0Y29uc3QgY3VycmVudFRpbWUgPSB0aGlzLnBsYXllci52aWRlby5jdXJyZW50VGltZTtcblx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wgPSBuZXcgQ29udHJvbFRleHQodGhpcy5wbGF5ZXIsIHsgY2xhc3NOYW1lIDogJ2NvbnRyb2wtdGltZV9fY3VycmVudCd9KTtcblx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sID0gbmV3IENvbnRyb2xUZXh0KHRoaXMucGxheWVyLCB7IGNsYXNzTmFtZSA6ICdjb250cm9sLXRpbWVfX3RvdGFsJ30pO1xuXG5cdFx0aWYoaXNOYU4oZHVyYXRpb24pIHx8IGR1cmF0aW9uID09IG51bGwpIHtcblx0XHRcdHRoaXMuX3RvdGFsVGltZUNvbnRyb2wudGV4dCA9ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl90b3RhbFRpbWVDb250cm9sLnRleHQgPSBzZWNvbmRzVG9UaW1lKGR1cmF0aW9uKTtcblx0XHR9XG5cblx0XHRpZihjdXJyZW50VGltZSA9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wudGV4dCA9IHNlY29uZHNUb1RpbWUoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZShjdXJyZW50VGltZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50ID0gJCgnPGRpdi8+JykuYWRkQ2xhc3MoJ2NvbnRyb2wtdGltZScpO1xuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0LmFwcGVuZCh0aGlzLl9jdXJyZW50VGltZUNvbnRyb2wuZWxlbWVudClcblx0XHRcdC5hcHBlbmQodGhpcy5fdG90YWxUaW1lQ29udHJvbC5lbGVtZW50KVxuXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0b25QbGF5ZXJJbml0ZWQoZSkge1xuXHRcdGxldCB2aWRlbyA9IHRoaXMucGxheWVyLnZpZGVvO1xuXHRcdHRoaXMuX2N1cnJlbnRUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5jdXJyZW50VGltZSk7XG5cdFx0dGhpcy5fdG90YWxUaW1lQ29udHJvbC50ZXh0ID0gc2Vjb25kc1RvVGltZSh2aWRlby5kdXJhdGlvbik7XG5cdH1cblxuXHRfb25DbGljayhlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cbn1cblxuQ29tcG9uZW50LnJlZ2lzdGVyQ29tcG9uZW50KCdUaW1lSW5mb0NvbnRyb2wnLCBUaW1lSW5mb0NvbnRyb2wpO1xuQ29udHJvbC5yZWdpc3RlckNvbnRyb2woJ3RpbWVpbmZvJywgVGltZUluZm9Db250cm9sKTtcbmV4cG9ydCBkZWZhdWx0IFRpbWVJbmZvQ29udHJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9jb21wb25lbnRzL1RpbWVJbmZvQ29udHJvbC5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ29va2llIGZyb20gJy4uL3V0aWxzL2Nvb2tpZSc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCB7IElTX1NBRkFSSSwgSVNfSU9TLCBJU19BTkRST0lEIH0gZnJvbSAnLi4vdXRpbHMvYnJvd3Nlcic7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcblxuXG5jbGFzcyBIdG1sNSBleHRlbmRzIEVudGl0eSB7XG5cdGNvbnN0cnVjdG9yIChwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMubWVkaWEgPSB0aGlzLmVsZW1lbnRbMF07XG5cblx0XHR0aGlzLnN1YnRpdGxlcyA9IFtdO1xuXHRcdHRoaXMuYnVmZmVyUmFuZ2VzID0gW107XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMucGxheWVyLm9wdGlvbnMuc3JjO1xuXG5cdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9ucy5wb3N0ZXIgIT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSB0aGlzLnBsYXllci5vcHRpb25zLnBvc3Rlcjtcblx0XHR9XG5cblx0XHRpZih0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKS5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLl9wbGF5YmFja1F1YWxpdHkgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKVswXTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQub24oJ2xvYWRzdGFydCcsIHRoaXMub25Mb2FkU3RhcnQuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCd0aW1ldXBkYXRlJywgdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdkdXJhdGlvbmNoYW5nZScsIHRoaXMub25EdXJhdGlvbkNoYW5nZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3Byb2dyZXNzJywgdGhpcy5vblByb2dyZXNzLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignc2Vla2luZycsIHRoaXMub25TZWVraW5nLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignc2Vla2VkJywgdGhpcy5vblNlZWtlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ3ZvbHVtZWNoYW5nZScsIHRoaXMub25Wb2x1bWVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5vbkRibGNsaWNrLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncGxheScsIHRoaXMub25QbGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbigncGF1c2UnLCB0aGlzLm9uUGF1c2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdyYXRlY2hhbmdlJywgdGhpcy5vblJhdGVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdlbmRlZCcsIHRoaXMub25FbmRlZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2NhbnBsYXl0aHJvdWdoJywgdGhpcy5vbkNhbnBsYXlUaHJvdWdoLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignd2FpdGluZycsIHRoaXMub25XYWl0aW5nLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWxlbWVudC5vbignZXJyb3InLCB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkxvYWRTdGFydChlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdsb2Fkc3RhcnQnKTtcblx0fVxuXG5cdG9uVGltZVVwZGF0ZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd0aW1ldXBkYXRlJyk7XG5cdH1cblxuXHRvbkR1cmF0aW9uQ2hhbmdlKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2R1cmF0aW9uY2hhbmdlJyk7XG5cdH1cblxuXHRvblByb2dyZXNzKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3Byb2dyZXNzJyk7XG5cdH1cblxuXHRvblNlZWtpbmcoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXHR9XG5cblx0b25TZWVrZWQoZSkge1xuXHRcdHRoaXMudHJpZ2dlcignc2Vla2VkJyk7XG5cdH1cblxuXHRvblZvbHVtZUNoYW5nZShlKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd2b2x1bWVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uQ2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0b25EYmxjbGljaygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2RibGNsaWNrJyk7XG5cdH1cblxuXHRvblBsYXkoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdH1cblxuXHRvblBhdXNlKCkge1xuXHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0fVxuXG5cdG9uUGxheWluZygpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXlpbmcnKTtcblx0fVxuXG5cdG9uUmF0ZUNoYW5nZSgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ3JhdGVjaGFuZ2UnKTtcblx0fVxuXG5cdG9uRW5kZWQoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdlbmRlZCcpO1xuXHR9XG5cblx0b25DYW5wbGF5VGhyb3VnaCgpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXl0aHJvdWdoJyk7XG5cdH1cblxuXHRvbldhaXRpbmcoKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCd3YWl0aW5nJyk7XG5cdH1cblxuXHRvbkVycm9yKGUpIHtcblx0XHR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgeyBjb2RlIDogZS50YXJnZXQuZXJyb3IuY29kZSB9KTtcblx0fVxuXG5cdC8qIFRPRE8gKi9cblx0Y3JlYXRlRWxlbWVudCgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuY3R4O1xuXHRcdFtcblxuXHRcdFx0Ly8gUmVtb3ZlIGNvbnRyb2xzIGJlY2F1c2Ugd2UgZG9udCBub3Qgc3VwcG9ydCBuYXRpdmUgY29udHJvbHMgeWV0XG5cdFx0XHQnY29udHJvbHMnLFxuXHRcdFx0J3Bvc3RlcicsXG5cblx0XHRcdC8vIEl0IGlzIHVubmVjZXNzYXJ5IGF0dHJzLCB0aGlzIGZ1bmN0aW9uYWxpdHkgc29sdmUgQ1NTXG5cdFx0XHQnaGVpZ2h0Jyxcblx0XHRcdCd3aWR0aCdcblxuXHRcdF0uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyKGl0ZW0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gU2V0IGF0dHJzIGZyb20gb3B0aW9uc1xuXHRcdFtcblx0XHRcdCdwcmVsb2FkJyxcblx0XHRcdCdhdXRvcGxheScsXG5cdFx0XHQnbG9vcCcsXG5cdFx0XHQnbXV0ZWQnXG5cdFx0XS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQuYXR0cihpdGVtLCB0aGlzLnBsYXllci5vcHRpb25zW2l0ZW1dKTtcblx0XHRcdFx0dGhpcy5lbGVtZW50LnByb3AoaXRlbSwgdGhpcy5wbGF5ZXIub3B0aW9uc1tpdGVtXSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblxuXHRcdHRoaXMuZWxlbWVudC5maW5kKCdzb3VyY2VbZGF0YS1xdWFsaXR5XScpLmVhY2goKGksIGl0ZW0pID0+IHtcblx0XHRcdCQoaXRlbSkucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5jdXJyZW50VGltZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSAodmFsdWUpIHtcblx0XHRsZXQgdGltZTtcblx0XHRpZiAodmFsdWUgPiB0aGlzLmR1cmF0aW9uKSB7XG5cdFx0XHR0aW1lID0gdGhpcy5kdXJhdGlvblxuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG5cdFx0XHR0aW1lID0gMFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZWxvYWQnLCB7IGN1cnJlbnRUaW1lIDogdGltZSB9KTtcblxuXHRcdHRoaXMubWVkaWEuY3VycmVudFRpbWUgPSB0aW1lO1xuXHR9XG5cblx0Z2V0IGR1cmF0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5kdXJhdGlvbjtcblx0fVxuXG5cdGdldCBoZWlnaHQgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmNsaWVudEhlaWdodDtcblx0fVxuXG5cdGdldCB3aWR0aCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEuY2xpZW50V2lkdGg7XG5cdH1cblxuXHRnZXQgcmF0ZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWVkaWEucGxheWJhY2tSYXRlO1xuXHR9XG5cblx0c2V0IG11dGVkKHZhbHVlKSB7XG5cdFx0dGhpcy5tZWRpYS5tdXRlZCA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLm11dGVkXG5cdH1cblxuXHRnZXQgcmF0ZU1heCgpIHtcblx0XHRsZXQgbWF4ID0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLm1heDtcblx0XHRpZihJU19JT1MgfHwgSVNfQU5EUk9JRCkge1xuXHRcdFx0bWF4ID0gSHRtbDUuTU9CSUxFX01BWF9SQVRFO1xuXHRcdH1cblx0XHRpZihJU19TQUZBUkkpIHtcblx0XHRcdG1heCA9IEh0bWw1LlNBRkFSSV9NQVhfUkFURTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWF4O1xuXHR9XG5cblx0Z2V0IHJhdGVNaW4oKSB7XG5cdFx0bGV0IG1pbiA9IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cblx0XHRpZiAoSVNfSU9TIHx8IElTX0FORFJPSUQpIHtcblx0XHRcdG1pbiA9IEh0bWw1Lk1PQklMRV9NSU5fUkFURTtcblx0XHR9XG5cblx0XHRpZiAoSVNfU0FGQVJJKSB7XG5cdFx0XHRtaW4gPSBIdG1sNS5TQUZBUklfTUlOX1JBVEU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdHNldCByYXRlICh2YWx1ZSkge1xuXHRcdHN1cGVyLnJhdGUgPSB2YWx1ZTtcblx0XHR0aGlzLm1lZGlhLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpIHtcblx0XHRyZXR1cm4gdGhpcy5wbGF5ZXIub3B0aW9ucy5zb3VyY2VzLm1hcChpdGVtID0+ICh7XG5cdFx0XHRuYW1lIDogaXRlbS50aXRsZSxcblx0XHRcdC4uLml0ZW1cblx0XHR9KSk7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRzdXBlci5wbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdGNvbnN0IHRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHJhdGUgPSB0aGlzLnJhdGU7XG5cdFx0Y29uc3Qgc3RvcCA9IHRoaXMucGF1c2VkO1xuXG5cdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMuX3BsYXliYWNrUXVhbGl0eTtcblx0XHR0aGlzLnBsYXliYWNrUmF0ZSA9IHJhdGU7XG5cdFx0dGhpcy5jdXJyZW50VGltZSA9IHRpbWU7XG5cblx0XHRpZiAoc3RvcCkge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3F1YWxpdHljaGFuZ2UnLCB0aGlzLl9wbGF5YmFja1F1YWxpdHkpO1xuXG5cdH1cblxuXHRnZXQgcGxheWJhY2tRdWFsaXR5KCkge1xuXHRcdHJldHVybiB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdH1cblxuXHRzZXQgc3JjIChzcmMpIHtcblx0XHRpZihzcmMgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmKHRoaXMuc3JjICYmIHRoaXMuc3JjLnVybCA9PT0gc3JjLnVybCkgcmV0dXJuO1xuXG5cdFx0dGhpcy5tZWRpYS5zcmMgPSBzcmMudXJsO1xuXG5cdFx0dGhpcy5fc291cmNlID0gc3JjO1xuXHR9XG5cblx0Z2V0IHNyYyAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3NvdXJjZVxuXHR9XG5cblx0Z2V0IHRyYWNrICgpIHtcblx0XHRyZXR1cm4gdGhpcy5fdHJhY2s7XG5cdH1cblxuXHRzZXQgdHJhY2sgKHZhbHVlKSB7XG5cdFx0Wy4uLnRoaXMubWVkaWEudGV4dFRyYWNrc10uZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGlmKHZhbHVlICE9IG51bGwgJiYgaXRlbS5sYW5ndWFnZSA9PT0gdmFsdWUubGFuZ3VhZ2UpIHtcblx0XHRcdFx0aXRlbS5tb2RlID0gJ3Nob3dpbmcnXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpdGVtLm1vZGUgPSAnaGlkZGVuJztcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLl90cmFjayA9IHZhbHVlO1xuXHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBhdXNlZDtcblx0fVxuXG5cdGdldCB2b2x1bWUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnZvbHVtZTtcblx0fVxuXG5cdHNldCB2b2x1bWUgKHZhbHVlKSB7XG5cdFx0c3VwZXIudm9sdW1lID0gdmFsdWU7XG5cdFx0Y29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cdFx0aWYgKHZhbHVlID4gMSkge1xuXHRcdFx0dGhpcy5tZWRpYS52b2x1bWUgPSAxO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCBwbGF5ZXIub3B0aW9ucy52b2x1bWUubXV0ZWxpbWl0KSB7XG5cdFx0XHR0aGlzLm1lZGlhLnZvbHVtZSA9IDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubWVkaWEudm9sdW1lID0gdmFsdWU7XG5cdFx0fVxuXHRcdHRoaXMubWVkaWEubXV0ZSA9ICh2YWx1ZSA8IHBsYXllci5vcHRpb25zLnZvbHVtZS5tdXRlbGltaXQpO1xuXHR9XG5cblxuXHRnZXQgYnVmZmVyZWQgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmJ1ZmZlcmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1RpbWVSYW5nZXN9XG5cdCAqL1xuXHRnZXQgc2Vla2FibGUgKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnNlZWthYmxlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1RpbWVSYW5nZXN9XG5cdCAqL1xuXHRnZXQgcGxheWVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLnBsYXllZDtcblx0fVxuXG5cdGdldCBwbGF5ZWRQZXJjZW50YWdlKCkge1xuXHRcdGxldCByZXN1bHQgPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCArPSAodGhpcy5wbGF5ZWQuZW5kKGkpIC0gdGhpcy5wbGF5ZWQuc3RhcnQoaSkpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdCAvIHRoaXMuZHVyYXRpb24gKiAxMDBcblx0fVxuXG5cdGdldCBjdXJyZW50U3JjKCkge1xuXHRcdHJldHVybiB0aGlzLm1lZGlhLmN1cnJlbnRTcmM7XG5cdH1cblxuXHRpbml0ICgpIHtcblx0XHRzdXBlci5pbml0KCk7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHR0aGlzLl9pbml0U3VidGl0bGVzKCk7XG5cdFx0dGhpcy5faW5pdFZpZGVvKClcblx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHRcdFx0dGhpcy5faW5pdFZvbHVtZSgpO1xuXHRcdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRzdXBwb3J0c0Z1bGxTY3JlZW4oKSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLm1lZGlhLndlYmtpdEVudGVyRnVsbFNjcmVlbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc3QgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJztcblxuXHRcdFx0Ly8gU2VlbXMgdG8gYmUgYnJva2VuIGluIENocm9taXVtL0Nocm9tZSAmJiBTYWZhcmkgaW4gTGVvcGFyZFxuXHRcdFx0aWYgKCgvQW5kcm9pZC8pLnRlc3QodXNlckFnZW50KSB8fCAhKC9DaHJvbWV8TWFjIE9TIFggMTAuNS8pLnRlc3QodXNlckFnZW50KSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZW50ZXJGdWxsc2NyZWVuKCkge1xuXHRcdGNvbnN0IHZpZGVvID0gdGhpcy5tZWRpYTtcblx0XHRpZiAodmlkZW8ucGF1c2VkICYmIHZpZGVvLm5ldHdvcmtTdGF0ZSA8PSB2aWRlby5IQVZFX01FVEFEQVRBKSB7XG5cdFx0XHQvLyBhdHRlbXB0IHRvIHByaW1lIHRoZSB2aWRlbyBlbGVtZW50IGZvciBwcm9ncmFtbWF0aWMgYWNjZXNzXG5cdFx0XHQvLyB0aGlzIGlzbid0IG5lY2Vzc2FyeSBvbiB0aGUgZGVza3RvcCBidXQgc2hvdWxkbid0IGh1cnRcblx0XHRcdHRoaXMucGxheSgpO1xuXG5cdFx0XHQvLyBwbGF5aW5nIGFuZCBwYXVzaW5nIHN5bmNocm9ub3VzbHkgZHVyaW5nIHRoZSB0cmFuc2l0aW9uIHRvIGZ1bGxzY3JlZW5cblx0XHRcdC8vIGNhbiBnZXQgaU9TIH42LjEgZGV2aWNlcyBpbnRvIGEgcGxheS9wYXVzZSBsb29wXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0XHR2aWRlby53ZWJraXRFbnRlckZ1bGxTY3JlZW4oKTtcblx0XHRcdH0sIDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2aWRlby53ZWJraXRFbnRlckZ1bGxTY3JlZW4oKTtcblx0XHR9XG5cdH1cblxuXHRleGl0RnVsbHNjcmVlbigpIHtcblx0XHR0aGlzLm1lZGlhLndlYmtpdEV4aXRGdWxsU2NyZWVuKCk7XG5cdH1cblxuXHR0b2dnbGVQbGF5ICgpIHtcblx0XHRpZiAoIXRoaXMubWVkaWEucGxheWVkIHx8IHRoaXMubWVkaWEucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdHBsYXkgKCkge1xuXHRcdGxldCBkZmQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgcGxheVByb21pc2UgPSB0aGlzLm1lZGlhLnBsYXkoKTtcblxuXHRcdGlmKHBsYXlQcm9taXNlICE9IG51bGwpIHtcblx0XHRcdHBsYXlQcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZmQucmVzb2x2ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGZkLnByb21pc2UoKTtcblx0fVxuXG5cdHBhdXNlICgpIHtcblx0XHRsZXQgZGZkID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHBhdXNlUHJvbWlzZSA9IHRoaXMubWVkaWEucGF1c2UoKTtcblxuXHRcdGlmKHBhdXNlUHJvbWlzZSAhPSBudWxsKSB7XG5cdFx0XHRwYXVzZVByb21pc2UudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRmZC5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdHJldHVybiBkZmQucHJvbWlzZSgpO1xuXHR9XG5cblx0bG9hZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5tZWRpYS5sb2FkKClcblx0fVxuXG5cdF9pbml0U3VidGl0bGVzICgpIHtcblx0XHRsZXQgX3NlbGYgPSB0aGlzO1xuXHRcdHRoaXMuZWxlbWVudC5jaGlsZHJlbigndHJhY2tba2luZD1cInN1YnRpdGxlc1wiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSAkKHRoaXMpLmF0dHIoJ3NyY2xhbmcnKTtcblx0XHRcdGNvbnN0IHRpdGxlID0gJCh0aGlzKS5hdHRyKCdsYWJlbCcpO1xuXHRcdFx0Y29uc3Qgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcblx0XHRcdGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHNyYy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdF9zZWxmLnN1YnRpdGxlcy5wdXNoKHtcblx0XHRcdFx0XHR0aXRsZSA6IHRpdGxlLFxuXHRcdFx0XHRcdG5hbWUgOiBsYW5ndWFnZSxcblx0XHRcdFx0XHRsYW5ndWFnZSA6IGxhbmd1YWdlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0X2luaXRWaWRlbyAoKSB7XG5cdFx0bGV0IGRmZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRpZiAodGhpcy5tZWRpYS5yZWFkeVN0YXRlID4gSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcpIHtcblx0XHRcdGRmZC5yZXNvbHZlKClcblx0XHRcdHRoaXMuX3RleHRUcmFja3NIYWNrKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQodGhpcy5tZWRpYSkub25lKCdsb2FkZWRtZXRhZGF0YScsIChlKSA9PiB7XG5cdFx0XHRcdGRmZC5yZXNvbHZlKClcblx0XHRcdFx0dGhpcy5fdGV4dFRyYWNrc0hhY2soKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRkZmQubm90aWZ5KCk7XG5cdFx0cmV0dXJuIGRmZC5wcm9taXNlKCk7XG5cdH1cblxuXHRfdGV4dFRyYWNrc0hhY2sgKCkge1xuXG5cdFx0Ly8gVGhpcyBpcyBnZW5lcmFsbHkgZm9yIEZpcmVmb3ggb25seVxuXHRcdC8vIGJlY2F1c2UgaXQgc29tZWhvdyByZXNldHMgdHJhY2sgbGlzdFxuXHRcdC8vIGZvciB2aWRlbyBlbGVtZW50IGFmdGVyIERPTSBtYW5pcHVsYXRpb24uXG5cblx0XHRpZiAodGhpcy5tZWRpYS50ZXh0VHJhY2tzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2hpbGRyZW4oJ3RyYWNrW2tpbmQ9XCJzdWJ0aXRsZXNcIl0nKS5yZW1vdmUoKTtcblx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy5zdWJ0aXRsZXMpIHtcblx0XHRcdFx0aWYgKHRoaXMuc3VidGl0bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50XG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzx0cmFjay8+Jylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2xhYmVsJywgdGhpcy5zdWJ0aXRsZXNbIGkgXS50aXRsZSlcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3NyYycsIHRoaXMuc3VidGl0bGVzWyBpIF0uc3JjKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignc3JjbGFuZycsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHRoaXMuc3VidGl0bGVzWyBpIF0ubGFuZ3VhZ2UpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdraW5kJywgJ3N1YnRpdGxlcycpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG5cblxuLyoqXG4gKiBNaW4gcmF0ZSBmb3IgYW5kcm9pZCBhbmQgaW9zXG4gKi9cbkh0bWw1Lk1PQklMRV9NSU5fUkFURSA9IDAuNTtcblxuLyoqXG4gKiBNYXggcmF0ZSBmb3IgYW5kcm9pZCBhbmQgaW9zXG4gKi9cbkh0bWw1Lk1PQklMRV9NQVhfUkFURSA9IDJcblxuXG5IdG1sNS5TQUZBUklfTUlOX1JBVEUgPSAwLjU7XG5cbkh0bWw1LlNBRkFSSV9NQVhfUkFURSA9IDI7XG5cbkNvbXBvbmVudC5yZWdpc3RlckNvbXBvbmVudCgnSHRtbDUnLCBIdG1sNSk7XG5leHBvcnQgZGVmYXVsdCBIdG1sNTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9lbnRpdHkvSHRtbDUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcG9uZW50JztcbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbHMvY29va2llJztcbmltcG9ydCBNZWRpYUVycm9yIGZyb20gJy4uL01lZGlhRXJyb3InO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgRW50aXR5IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIocGxheWVyLCBvcHRpb25zKTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2sgPSBbXTtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy5wbGF5ZXIub3B0aW9ucy5zcmMgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5wbGF5ZXIuZXJyb3IgPSBuZXcgTWVkaWFFcnJvcign0JLQuNC00LXQvtGE0LDQudC7INC90LUg0L3QsNC50LTQtdC9LicpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0dHJpZ2dlciguLi5hcmdzKSB7XG5cdFx0aWYoIXRoaXMuX3N0b3BMaXN0ZW4pIHtcblx0XHRcdHRoaXMuX3RyaWdnZXJTdGFjay5wdXNoKGFyZ3MpO1xuXHRcdH1cblx0XHRzdXBlci50cmlnZ2VyKC4uLmFyZ3MpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLl9zdG9wTGlzdGVuID0gdHJ1ZTtcblx0XHR0aGlzLl90cmlnZ2VyU3RhY2suZm9yRWFjaChhcmdzID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlciguLi5hcmdzKTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZUVsZW1lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKTtcblx0fVxuXG5cdHNldCBwb3N0ZXIodXJsKSB7XG5cdFx0dGhpcy5fcG9zdGVyID0gdXJsO1xuXHRcdHRoaXMudHJpZ2dlcigncG9zdGVyY2hhbmdlJywgeyB1cmwgfSk7XG5cdH1cblxuXG5cdGdldCBwb3N0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Bvc3Rlcjtcblx0fVxuXG5cdGdldCBjdXJyZW50VGltZSgpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdHNldCBjdXJyZW50VGltZSh2YWx1ZSkge1xuXG5cdH1cblxuXHRnZXQgZHVyYXRpb24oKSB7XG5cdFx0cmV0dXJuXG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblxuXHR9XG5cblx0Z2V0IG11dGVkKCkge1xuXG5cdH1cblxuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuaW5uZXJIZWlnaHQoKVxuXHR9XG5cblx0Z2V0IHdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQud2lkdGgoKVxuXHR9XG5cblx0c2V0IHJhdGVNYXgodmFsdWUpIHtcblx0XHR0aGlzLl9yYXRlTWF4ID0gdmFsdWU7XG5cdH1cblxuXHRzZXQgcmF0ZU1pbih2YWx1ZSkge1xuXHRcdHRoaXMuX3JhdGVNaW4gPSB2YWx1ZTtcblx0fVxuXG5cdGdldCByYXRlTWF4KCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWF4IHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5tYXg7XG5cblx0fVxuXG5cdGdldCByYXRlTWluKCkge1xuXHRcdHJldHVybiB0aGlzLl9yYXRlTWluIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5taW47XG5cdH1cblxuXHRnZXQgcmF0ZSgpIHtcblx0fVxuXG5cdHNldCByYXRlKHZhbHVlKSB7XG5cdFx0aWYodmFsdWUgPiB0aGlzLnJhdGVNYXggfHwgdmFsdWUgPCB0aGlzLnJhdGVNaW4pIHJldHVybjtcblx0XHRDb29raWUuc2V0KCdyYXRlJywgdmFsdWUpO1xuXHR9XG5cblx0aW5jcmVhc2VSYXRlKCkge1xuXHRcdHRoaXMucmF0ZSArPSB0aGlzLnBsYXllci5vcHRpb25zLnJhdGUuc3RlcDtcblx0fVxuXG5cdGRlY3JlYXNlUmF0ZSgpIHtcblx0XHR0aGlzLnJhdGUgLT0gdGhpcy5wbGF5ZXIub3B0aW9ucy5yYXRlLnN0ZXA7XG5cdH1cblxuXHRzZXQgcGxheWJhY2tRdWFsaXR5KG5hbWUpIHtcblx0XHRjb25zdCBsZXZlbHMgPSB0aGlzLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcblx0XHRpZighbGV2ZWxzLnNvbWUob2JqID0+IG5hbWUgaW4gb2JqKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGdldCBwbGF5YmFja1F1YWxpdHkoKSB7XG5cblx0fVxuXG5cdGdldCBwYXVzZWQoKSB7XG5cblx0fVxuXG5cdGdldCBwbGF5ZWQoKSB7XG5cblx0fVxuXG5cdGdldCBkZWZhdWx0UmF0ZSgpIHtcblx0XHRyZXR1cm4gQ29va2llLmdldCgncmF0ZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMucmF0ZS5kZWZhdWx0XG5cdH1cblxuXHRnZXQgZGVmYXVsdFZvbHVtZSAoKSB7XG5cdFx0cmV0dXJuIENvb2tpZS5nZXQoJ3ZvbHVtZScpIHx8IHRoaXMucGxheWVyLm9wdGlvbnMudm9sdW1lLmRlZmF1bHQ7XG5cdH1cblxuXHRzZXQgdm9sdW1lKHZhbHVlKSB7XG5cdFx0Y29uc3QgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cdFx0aWYodmFsdWUgPCAxICYmIHZhbHVlID4gcGxheWVyLm9wdGlvbnMudm9sdW1lLm11dGVsaW1pdCkge1xuXHRcdFx0Q29va2llLnNldCgndm9sdW1lJywgdmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdHNldCBzcmMgKHZhbHVlKSB7XG5cblx0fVxuXG5cdGdldCBzcmMoKSB7XG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblxuXHR9XG5cblx0cGxheSgpIHtcblxuXHR9XG5cblx0cGF1c2UgKCkge1xuXG5cdH1cblxuXHRsb2FkKCkge1xuXHR9XG5cblx0dG9nZ2xlUGxheSAoKSB7XG5cdFx0aWYgKHRoaXMucGF1c2VkKSB7XG5cdFx0XHR0aGlzLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdH1cblx0fVxuXG5cdF9pbml0UmF0ZSAoKSB7XG5cdFx0dGhpcy5yYXRlID0gdGhpcy5kZWZhdWx0UmF0ZTtcblx0fVxuXG5cdF9pbml0Vm9sdW1lICgpIHtcblx0XHR0aGlzLnZvbHVtZSA9IHRoaXMuZGVmYXVsdFZvbHVtZTtcblx0fVxuXG59XG5Db21wb25lbnQucmVnaXN0ZXJDb21wb25lbnQoJ0VudGl0eScsIEVudGl0eSk7XG5leHBvcnQgZGVmYXVsdCBFbnRpdHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvZW50aXR5L0VudGl0eS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxudmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXG52YXIgYm91bmRGaW5kU2hpbSA9IGZ1bmN0aW9uIGZpbmQoYXJyYXksIHByZWRpY2F0ZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cdEVTLlJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJyYXkpO1xuXHR2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0cmV0dXJuIHBvbHlmaWxsLmFwcGx5KGFycmF5LCBhcmdzKTtcbn07XG5cbmRlZmluZShib3VuZEZpbmRTaGltLCB7XG5cdGdldFBvbHlmaWxsOiBnZXRQb2x5ZmlsbCxcblx0aW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uLFxuXHRzaGltOiBzaGltXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBib3VuZEZpbmRTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGtleXMgPSByZXF1aXJlKCdvYmplY3Qta2V5cycpO1xudmFyIGZvcmVhY2ggPSByZXF1aXJlKCdmb3JlYWNoJyk7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgpID09PSAnc3ltYm9sJztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0ci5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG5cbnZhciBhcmVQcm9wZXJ0eURlc2NyaXB0b3JzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgb2JqID0ge307XG5cdHRyeSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ3gnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogb2JqIH0pO1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycywgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbiAgICAgICAgZm9yICh2YXIgXyBpbiBvYmopIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMsIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5cdFx0cmV0dXJuIG9iai54ID09PSBvYmo7XG5cdH0gY2F0Y2ggKGUpIHsgLyogdGhpcyBpcyBJRSA4LiAqL1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIGFyZVByb3BlcnR5RGVzY3JpcHRvcnNTdXBwb3J0ZWQoKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgdmFsdWUsIHByZWRpY2F0ZSkge1xuXHRpZiAobmFtZSBpbiBvYmplY3QgJiYgKCFpc0Z1bmN0aW9uKHByZWRpY2F0ZSkgfHwgIXByZWRpY2F0ZSgpKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IHRydWVcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRvYmplY3RbbmFtZV0gPSB2YWx1ZTtcblx0fVxufTtcblxudmFyIGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqZWN0LCBtYXApIHtcblx0dmFyIHByZWRpY2F0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXHR2YXIgcHJvcHMgPSBrZXlzKG1hcCk7XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0cHJvcHMgPSBwcm9wcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtYXApKTtcblx0fVxuXHRmb3JlYWNoKHByb3BzLCBmdW5jdGlvbiAobmFtZSkge1xuXHRcdGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgbWFwW25hbWVdLCBwcmVkaWNhdGVzW25hbWVdKTtcblx0fSk7XG59O1xuXG5kZWZpbmVQcm9wZXJ0aWVzLnN1cHBvcnRzRGVzY3JpcHRvcnMgPSAhIXN1cHBvcnRzRGVzY3JpcHRvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydGllcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kZWZpbmUtcHJvcGVydGllcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCIndXNlIHN0cmljdCc7XG5cbi8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgaXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpO1xudmFyIGlzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtZXJhYmxlLmNhbGwoeyB0b1N0cmluZzogbnVsbCB9LCAndG9TdHJpbmcnKTtcbnZhciBoYXNQcm90b0VudW1CdWcgPSBpc0VudW1lcmFibGUuY2FsbChmdW5jdGlvbiAoKSB7fSwgJ3Byb3RvdHlwZScpO1xudmFyIGRvbnRFbnVtcyA9IFtcblx0J3RvU3RyaW5nJyxcblx0J3RvTG9jYWxlU3RyaW5nJyxcblx0J3ZhbHVlT2YnLFxuXHQnaGFzT3duUHJvcGVydHknLFxuXHQnaXNQcm90b3R5cGVPZicsXG5cdCdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG5cdCdjb25zdHJ1Y3Rvcidcbl07XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAobykge1xuXHR2YXIgY3RvciA9IG8uY29uc3RydWN0b3I7XG5cdHJldHVybiBjdG9yICYmIGN0b3IucHJvdG90eXBlID09PSBvO1xufTtcbnZhciBleGNsdWRlZEtleXMgPSB7XG5cdCRjb25zb2xlOiB0cnVlLFxuXHQkZXh0ZXJuYWw6IHRydWUsXG5cdCRmcmFtZTogdHJ1ZSxcblx0JGZyYW1lRWxlbWVudDogdHJ1ZSxcblx0JGZyYW1lczogdHJ1ZSxcblx0JGlubmVySGVpZ2h0OiB0cnVlLFxuXHQkaW5uZXJXaWR0aDogdHJ1ZSxcblx0JG91dGVySGVpZ2h0OiB0cnVlLFxuXHQkb3V0ZXJXaWR0aDogdHJ1ZSxcblx0JHBhZ2VYT2Zmc2V0OiB0cnVlLFxuXHQkcGFnZVlPZmZzZXQ6IHRydWUsXG5cdCRwYXJlbnQ6IHRydWUsXG5cdCRzY3JvbGxMZWZ0OiB0cnVlLFxuXHQkc2Nyb2xsVG9wOiB0cnVlLFxuXHQkc2Nyb2xsWDogdHJ1ZSxcblx0JHNjcm9sbFk6IHRydWUsXG5cdCRzZWxmOiB0cnVlLFxuXHQkd2Via2l0SW5kZXhlZERCOiB0cnVlLFxuXHQkd2Via2l0U3RvcmFnZUluZm86IHRydWUsXG5cdCR3aW5kb3c6IHRydWVcbn07XG52YXIgaGFzQXV0b21hdGlvbkVxdWFsaXR5QnVnID0gKGZ1bmN0aW9uICgpIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGZvciAodmFyIGsgaW4gd2luZG93KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIGhhcy5jYWxsKHdpbmRvdywgaykgJiYgd2luZG93W2tdICE9PSBudWxsICYmIHR5cGVvZiB3aW5kb3dba10gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0ZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn0oKSk7XG52YXIgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5ID0gZnVuY3Rpb24gKG8pIHtcblx0LyogZ2xvYmFsIHdpbmRvdyAqL1xuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIWhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1Zykge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fVxuXHR0cnkge1xuXHRcdHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0dmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuXHR2YXIgaXNGdW5jdGlvbiA9IHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0dmFyIGlzQXJndW1lbnRzID0gaXNBcmdzKG9iamVjdCk7XG5cdHZhciBpc1N0cmluZyA9IGlzT2JqZWN0ICYmIHRvU3RyLmNhbGwob2JqZWN0KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdHZhciB0aGVLZXlzID0gW107XG5cblx0aWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbiAmJiAhaXNBcmd1bWVudHMpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3Qua2V5cyBjYWxsZWQgb24gYSBub24tb2JqZWN0Jyk7XG5cdH1cblxuXHR2YXIgc2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cdGlmIChpc1N0cmluZyAmJiBvYmplY3QubGVuZ3RoID4gMCAmJiAhaGFzLmNhbGwob2JqZWN0LCAwKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHR0aGVLZXlzLnB1c2goU3RyaW5nKGkpKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoaXNBcmd1bWVudHMgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG9iamVjdC5sZW5ndGg7ICsraikge1xuXHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhqKSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG5cdFx0XHRpZiAoIShza2lwUHJvdG8gJiYgbmFtZSA9PT0gJ3Byb3RvdHlwZScpICYmIGhhcy5jYWxsKG9iamVjdCwgbmFtZSkpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKFN0cmluZyhuYW1lKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0dmFyIHNraXBDb25zdHJ1Y3RvciA9IGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneShvYmplY3QpO1xuXG5cdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBkb250RW51bXMubGVuZ3RoOyArK2spIHtcblx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bXNba10gPT09ICdjb25zdHJ1Y3RvcicpICYmIGhhcy5jYWxsKG9iamVjdCwgZG9udEVudW1zW2tdKSkge1xuXHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW1zW2tdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRoZUtleXM7XG59O1xuXG5rZXlzU2hpbS5zaGltID0gZnVuY3Rpb24gc2hpbU9iamVjdEtleXMoKSB7XG5cdGlmIChPYmplY3Qua2V5cykge1xuXHRcdHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gKGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIFNhZmFyaSA1LjAgYnVnXG5cdFx0XHRyZXR1cm4gKE9iamVjdC5rZXlzKGFyZ3VtZW50cykgfHwgJycpLmxlbmd0aCA9PT0gMjtcblx0XHR9KDEsIDIpKTtcblx0XHRpZiAoIWtleXNXb3Jrc1dpdGhBcmd1bWVudHMpIHtcblx0XHRcdHZhciBvcmlnaW5hbEtleXMgPSBPYmplY3Qua2V5cztcblx0XHRcdE9iamVjdC5rZXlzID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHRcdFx0aWYgKGlzQXJncyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9yaWdpbmFsS2V5cyhzbGljZS5jYWxsKG9iamVjdCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0T2JqZWN0LmtleXMgPSBrZXlzU2hpbTtcblx0fVxuXHRyZXR1cm4gT2JqZWN0LmtleXMgfHwga2V5c1NoaW07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNTaGltO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHR2YXIgc3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBpc0FyZ3MgPSBzdHIgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXHRpZiAoIWlzQXJncykge1xuXHRcdGlzQXJncyA9IHN0ciAhPT0gJ1tvYmplY3QgQXJyYXldJyAmJlxuXHRcdFx0dmFsdWUgIT09IG51bGwgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0XHR2YWx1ZS5sZW5ndGggPj0gMCAmJlxuXHRcdFx0dG9TdHIuY2FsbCh2YWx1ZS5jYWxsZWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBpc0FyZ3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1rZXlzL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIlxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvckVhY2ggKG9iaiwgZm4sIGN0eCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKGZuKSAhPT0gJ1tvYmplY3QgRnVuY3Rpb25dJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdmFyIGwgPSBvYmoubGVuZ3RoO1xuICAgIGlmIChsID09PSArbCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZm4uY2FsbChjdHgsIG9ialtpXSwgaSwgb2JqKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwob2JqLCBrKSkge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY3R4LCBvYmpba10sIGssIG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZm9yZWFjaC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG52YXIgc3ltYm9sVG9TdHIgPSBoYXNTeW1ib2xzID8gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZyA6IHRvU3RyO1xuXG52YXIgJGlzTmFOID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzTmFOJyk7XG52YXIgJGlzRmluaXRlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzRmluaXRlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXNzaWduJyk7XG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xudmFyIGlzUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzUHJpbWl0aXZlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM2Jyk7XG52YXIgcGFyc2VJbnRlZ2VyID0gcGFyc2VJbnQ7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBzdHJTbGljZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnNsaWNlKTtcbnZhciBpc0JpbmFyeSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMGJbMDFdKyQvaSk7XG52YXIgaXNPY3RhbCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eMG9bMC03XSskL2kpO1xudmFyIG5vbldTID0gWydcXHUwMDg1JywgJ1xcdTIwMGInLCAnXFx1ZmZmZSddLmpvaW4oJycpO1xudmFyIG5vbldTcmVnZXggPSBuZXcgUmVnRXhwKCdbJyArIG5vbldTICsgJ10nLCAnZycpO1xudmFyIGhhc05vbldTID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgbm9uV1NyZWdleCk7XG52YXIgaW52YWxpZEhleExpdGVyYWwgPSAvXlstK10weFswLTlhLWZdKyQvaTtcbnZhciBpc0ludmFsaWRIZXhMaXRlcmFsID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgaW52YWxpZEhleExpdGVyYWwpO1xuXG4vLyB3aGl0ZXNwYWNlIGZyb206IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuNS40LjIwXG4vLyBpbXBsZW1lbnRhdGlvbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL3YzLjQuMC9lczUtc2hpbS5qcyNMMTMwNC1MMTMyNFxudmFyIHdzID0gW1xuXHQnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnLFxuXHQnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjgnLFxuXHQnXFx1MjAyOVxcdUZFRkYnXG5dLmpvaW4oJycpO1xudmFyIHRyaW1SZWdleCA9IG5ldyBSZWdFeHAoJyheWycgKyB3cyArICddKyl8KFsnICsgd3MgKyAnXSskKScsICdnJyk7XG52YXIgcmVwbGFjZSA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xudmFyIHRyaW0gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIHRyaW1SZWdleCwgJycpO1xufTtcblxudmFyIEVTNSA9IHJlcXVpcmUoJy4vZXM1Jyk7XG5cbnZhciBoYXNSZWdFeHBNYXRjaGVyID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxuLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFic3RyYWN0LW9wZXJhdGlvbnNcbnZhciBFUzYgPSBhc3NpZ24oYXNzaWduKHt9LCBFUzUpLCB7XG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWNhbGwtZi12LWFyZ3Ncblx0Q2FsbDogZnVuY3Rpb24gQ2FsbChGLCBWKSB7XG5cdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKEYpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKEYgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdHJldHVybiBGLmFwcGx5KFYsIGFyZ3MpO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3ByaW1pdGl2ZVxuXHRUb1ByaW1pdGl2ZTogdG9QcmltaXRpdmUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvYm9vbGVhblxuXHQvLyBUb0Jvb2xlYW46IEVTNS5Ub0Jvb2xlYW4sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbnVtYmVyXG5cdFRvTnVtYmVyOiBmdW5jdGlvbiBUb051bWJlcihhcmd1bWVudCkge1xuXHRcdHZhciB2YWx1ZSA9IGlzUHJpbWl0aXZlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdG9QcmltaXRpdmUoYXJndW1lbnQsICdudW1iZXInKTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBudW1iZXInKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGlmIChpc0JpbmFyeSh2YWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIocGFyc2VJbnRlZ2VyKHN0clNsaWNlKHZhbHVlLCAyKSwgMikpO1xuXHRcdFx0fSBlbHNlIGlmIChpc09jdGFsKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcihwYXJzZUludGVnZXIoc3RyU2xpY2UodmFsdWUsIDIpLCA4KSk7XG5cdFx0XHR9IGVsc2UgaWYgKGhhc05vbldTKHZhbHVlKSB8fCBpc0ludmFsaWRIZXhMaXRlcmFsKHZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gTmFOO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHRyaW1tZWQgPSB0cmltKHZhbHVlKTtcblx0XHRcdFx0aWYgKHRyaW1tZWQgIT09IHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIodHJpbW1lZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvaW50ZWdlclxuXHQvLyBUb0ludGVnZXI6IEVTNS5Ub051bWJlcixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQzMlxuXHQvLyBUb0ludDMyOiBFUzUuVG9JbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG91aW50MzJcblx0Ly8gVG9VaW50MzI6IEVTNS5Ub1VpbnQzMixcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9pbnQxNlxuXHRUb0ludDE2OiBmdW5jdGlvbiBUb0ludDE2KGFyZ3VtZW50KSB7XG5cdFx0dmFyIGludDE2Yml0ID0gdGhpcy5Ub1VpbnQxNihhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDE2Yml0ID49IDB4ODAwMCA/IGludDE2Yml0IC0gMHgxMDAwMCA6IGludDE2Yml0O1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3VpbnQxNlxuXHQvLyBUb1VpbnQxNjogRVM1LlRvVWludDE2LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2ludDhcblx0VG9JbnQ4OiBmdW5jdGlvbiBUb0ludDgoYXJndW1lbnQpIHtcblx0XHR2YXIgaW50OGJpdCA9IHRoaXMuVG9VaW50OChhcmd1bWVudCk7XG5cdFx0cmV0dXJuIGludDhiaXQgPj0gMHg4MCA/IGludDhiaXQgLSAweDEwMCA6IGludDhiaXQ7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhcblx0VG9VaW50ODogZnVuY3Rpb24gVG9VaW50OChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09PSAwIHx8ICEkaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdHZhciBwb3NJbnQgPSBzaWduKG51bWJlcikgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xuXHRcdHJldHVybiBtb2QocG9zSW50LCAweDEwMCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvdWludDhjbGFtcFxuXHRUb1VpbnQ4Q2xhbXA6IGZ1bmN0aW9uIFRvVWludDhDbGFtcChhcmd1bWVudCkge1xuXHRcdHZhciBudW1iZXIgPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAoJGlzTmFOKG51bWJlcikgfHwgbnVtYmVyIDw9IDApIHsgcmV0dXJuIDA7IH1cblx0XHRpZiAobnVtYmVyID49IDB4RkYpIHsgcmV0dXJuIDB4RkY7IH1cblx0XHR2YXIgZiA9IE1hdGguZmxvb3IoYXJndW1lbnQpO1xuXHRcdGlmIChmICsgMC41IDwgbnVtYmVyKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdGlmIChudW1iZXIgPCBmICsgMC41KSB7IHJldHVybiBmOyB9XG5cdFx0aWYgKGYgJSAyICE9PSAwKSB7IHJldHVybiBmICsgMTsgfVxuXHRcdHJldHVybiBmO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b3N0cmluZ1xuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnc3ltYm9sJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0cmV0dXJuIFN0cmluZyhhcmd1bWVudCk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvb2JqZWN0XG5cdFRvT2JqZWN0OiBmdW5jdGlvbiBUb09iamVjdCh2YWx1ZSkge1xuXHRcdHRoaXMuUmVxdWlyZU9iamVjdENvZXJjaWJsZSh2YWx1ZSk7XG5cdFx0cmV0dXJuIE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvcHJvcGVydHlrZXlcblx0VG9Qcm9wZXJ0eUtleTogZnVuY3Rpb24gVG9Qcm9wZXJ0eUtleShhcmd1bWVudCkge1xuXHRcdHZhciBrZXkgPSB0aGlzLlRvUHJpbWl0aXZlKGFyZ3VtZW50LCBTdHJpbmcpO1xuXHRcdHJldHVybiB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IHN5bWJvbFRvU3RyLmNhbGwoa2V5KSA6IHRoaXMuVG9TdHJpbmcoa2V5KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGhcblx0VG9MZW5ndGg6IGZ1bmN0aW9uIFRvTGVuZ3RoKGFyZ3VtZW50KSB7XG5cdFx0dmFyIGxlbiA9IHRoaXMuVG9JbnRlZ2VyKGFyZ3VtZW50KTtcblx0XHRpZiAobGVuIDw9IDApIHsgcmV0dXJuIDA7IH0gLy8gaW5jbHVkZXMgY29udmVydGluZyAtMCB0byArMFxuXHRcdGlmIChsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB7IHJldHVybiBNQVhfU0FGRV9JTlRFR0VSOyB9XG5cdFx0cmV0dXJuIGxlbjtcblx0fSxcblxuXHQvLyBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtY2Fub25pY2FsbnVtZXJpY2luZGV4c3RyaW5nXG5cdENhbm9uaWNhbE51bWVyaWNJbmRleFN0cmluZzogZnVuY3Rpb24gQ2Fub25pY2FsTnVtZXJpY0luZGV4U3RyaW5nKGFyZ3VtZW50KSB7XG5cdFx0aWYgKHRvU3RyLmNhbGwoYXJndW1lbnQpICE9PSAnW29iamVjdCBTdHJpbmddJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBiZSBhIHN0cmluZycpO1xuXHRcdH1cblx0XHRpZiAoYXJndW1lbnQgPT09ICctMCcpIHsgcmV0dXJuIC0wOyB9XG5cdFx0dmFyIG4gPSB0aGlzLlRvTnVtYmVyKGFyZ3VtZW50KTtcblx0XHRpZiAodGhpcy5TYW1lVmFsdWUodGhpcy5Ub1N0cmluZyhuKSwgYXJndW1lbnQpKSB7IHJldHVybiBuOyB9XG5cdFx0cmV0dXJuIHZvaWQgMDtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxuXHRSZXF1aXJlT2JqZWN0Q29lcmNpYmxlOiBFUzUuQ2hlY2tPYmplY3RDb2VyY2libGUsXG5cblx0Ly8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWlzYXJyYXlcblx0SXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG5cdFx0cmV0dXJuIHRvU3RyLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBBcnJheV0nO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NhbGxhYmxlXG5cdC8vIElzQ2FsbGFibGU6IEVTNS5Jc0NhbGxhYmxlLFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2NvbnN0cnVjdG9yXG5cdElzQ29uc3RydWN0b3I6IGZ1bmN0aW9uIElzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnZnVuY3Rpb24nICYmICEhYXJndW1lbnQucHJvdG90eXBlOyAvLyB1bmZvcnR1bmF0ZWx5IHRoZXJlJ3Mgbm8gd2F5IHRvIHRydWx5IGNoZWNrIHRoaXMgd2l0aG91dCB0cnkvY2F0Y2ggYG5ldyBhcmd1bWVudGBcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtaXNleHRlbnNpYmxlLW9cblx0SXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBJc0V4dGVuc2libGUob2JqKSB7XG5cdFx0aWYgKCFPYmplY3QucHJldmVudEV4dGVuc2lvbnMpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAoaXNQcmltaXRpdmUob2JqKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gT2JqZWN0LmlzRXh0ZW5zaWJsZShvYmopO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc2ludGVnZXJcblx0SXNJbnRlZ2VyOiBmdW5jdGlvbiBJc0ludGVnZXIoYXJndW1lbnQpIHtcblx0XHRpZiAodHlwZW9mIGFyZ3VtZW50ICE9PSAnbnVtYmVyJyB8fCAkaXNOYU4oYXJndW1lbnQpIHx8ICEkaXNGaW5pdGUoYXJndW1lbnQpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHZhciBhYnMgPSBNYXRoLmFicyhhcmd1bWVudCk7XG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoYWJzKSA9PT0gYWJzO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1pc3Byb3BlcnR5a2V5XG5cdElzUHJvcGVydHlLZXk6IGZ1bmN0aW9uIElzUHJvcGVydHlLZXkoYXJndW1lbnQpIHtcblx0XHRyZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdzeW1ib2wnO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1pc3JlZ2V4cFxuXHRJc1JlZ0V4cDogZnVuY3Rpb24gSXNSZWdFeHAoYXJndW1lbnQpIHtcblx0XHRpZiAoIWFyZ3VtZW50IHx8IHR5cGVvZiBhcmd1bWVudCAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGhhc1N5bWJvbHMpIHtcblx0XHRcdHZhciBpc1JlZ0V4cCA9IGFyZ3VtZW50W1N5bWJvbC5tYXRjaF07XG5cdFx0XHRpZiAodHlwZW9mIGlzUmVnRXhwICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gRVM1LlRvQm9vbGVhbihpc1JlZ0V4cCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBoYXNSZWdFeHBNYXRjaGVyKGFyZ3VtZW50KTtcblx0fSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlXG5cdC8vIFNhbWVWYWx1ZTogRVM1LlNhbWVWYWx1ZSxcblxuXHQvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtc2FtZXZhbHVlemVyb1xuXHRTYW1lVmFsdWVaZXJvOiBmdW5jdGlvbiBTYW1lVmFsdWVaZXJvKHgsIHkpIHtcblx0XHRyZXR1cm4gKHggPT09IHkpIHx8ICgkaXNOYU4oeCkgJiYgJGlzTmFOKHkpKTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjIgR2V0ViAoViwgUClcblx0ICogMS4gQXNzZXJ0OiBJc1Byb3BlcnR5S2V5KFApIGlzIHRydWUuXG5cdCAqIDIuIExldCBPIGJlIFRvT2JqZWN0KFYpLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChPKS5cblx0ICogNC4gUmV0dXJuIE8uW1tHZXRdXShQLCBWKS5cblx0ICovXG5cdEdldFY6IGZ1bmN0aW9uIEdldFYoViwgUCkge1xuXHRcdC8vIDcuMy4yLjFcblx0XHRpZiAoIXRoaXMuSXNQcm9wZXJ0eUtleShQKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXNzZXJ0aW9uIGZhaWxlZDogSXNQcm9wZXJ0eUtleShQKSBpcyBub3QgdHJ1ZScpO1xuXHRcdH1cblxuXHRcdC8vIDcuMy4yLjItM1xuXHRcdHZhciBPID0gdGhpcy5Ub09iamVjdChWKTtcblxuXHRcdC8vIDcuMy4yLjRcblx0XHRyZXR1cm4gT1tQXTtcblx0fSxcblxuXHQvKipcblx0ICogNy4zLjkgLSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0bWV0aG9kXG5cdCAqIDEuIEFzc2VydDogSXNQcm9wZXJ0eUtleShQKSBpcyB0cnVlLlxuXHQgKiAyLiBMZXQgZnVuYyBiZSBHZXRWKE8sIFApLlxuXHQgKiAzLiBSZXR1cm5JZkFicnVwdChmdW5jKS5cblx0ICogNC4gSWYgZnVuYyBpcyBlaXRoZXIgdW5kZWZpbmVkIG9yIG51bGwsIHJldHVybiB1bmRlZmluZWQuXG5cdCAqIDUuIElmIElzQ2FsbGFibGUoZnVuYykgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cblx0ICogNi4gUmV0dXJuIGZ1bmMuXG5cdCAqL1xuXHRHZXRNZXRob2Q6IGZ1bmN0aW9uIEdldE1ldGhvZChPLCBQKSB7XG5cdFx0Ly8gNy4zLjkuMVxuXHRcdGlmICghdGhpcy5Jc1Byb3BlcnR5S2V5KFApKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBc3NlcnRpb24gZmFpbGVkOiBJc1Byb3BlcnR5S2V5KFApIGlzIG5vdCB0cnVlJyk7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuMlxuXHRcdHZhciBmdW5jID0gdGhpcy5HZXRWKE8sIFApO1xuXG5cdFx0Ly8gNy4zLjkuNFxuXHRcdGlmIChmdW5jID09IG51bGwpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gNy4zLjkuNVxuXHRcdGlmICghdGhpcy5Jc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFAgKyAnaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cblx0XHQvLyA3LjMuOS42XG5cdFx0cmV0dXJuIGZ1bmM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIDcuMy4xIEdldCAoTywgUCkgLSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZ2V0LW8tcFxuXHQgKiAxLiBBc3NlcnQ6IFR5cGUoTykgaXMgT2JqZWN0LlxuXHQgKiAyLiBBc3NlcnQ6IElzUHJvcGVydHlLZXkoUCkgaXMgdHJ1ZS5cblx0ICogMy4gUmV0dXJuIE8uW1tHZXRdXShQLCBPKS5cblx0ICovXG5cdEdldDogZnVuY3Rpb24gR2V0KE8sIFApIHtcblx0XHQvLyA3LjMuMS4xXG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHQvLyA3LjMuMS4yXG5cdFx0aWYgKCF0aGlzLklzUHJvcGVydHlLZXkoUCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IElzUHJvcGVydHlLZXkoUCkgaXMgbm90IHRydWUnKTtcblx0XHR9XG5cdFx0Ly8gNy4zLjEuM1xuXHRcdHJldHVybiBPW1BdO1xuXHR9LFxuXG5cdFR5cGU6IGZ1bmN0aW9uIFR5cGUoeCkge1xuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3N5bWJvbCcpIHtcblx0XHRcdHJldHVybiAnU3ltYm9sJztcblx0XHR9XG5cdFx0cmV0dXJuIEVTNS5UeXBlKHgpO1xuXHR9LFxuXG5cdC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcblx0U3BlY2llc0NvbnN0cnVjdG9yOiBmdW5jdGlvbiBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG5cdFx0aWYgKHRoaXMuVHlwZShPKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Fzc2VydGlvbiBmYWlsZWQ6IFR5cGUoTykgaXMgbm90IE9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgQyA9IE8uY29uc3RydWN0b3I7XG5cdFx0aWYgKHR5cGVvZiBDID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRDb25zdHJ1Y3Rvcjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuVHlwZShDKSAhPT0gJ09iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ08uY29uc3RydWN0b3IgaXMgbm90IGFuIE9iamVjdCcpO1xuXHRcdH1cblx0XHR2YXIgUyA9IGhhc1N5bWJvbHMgJiYgU3ltYm9sLnNwZWNpZXMgPyBDW1N5bWJvbC5zcGVjaWVzXSA6IHVuZGVmaW5lZDtcblx0XHRpZiAoUyA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdENvbnN0cnVjdG9yO1xuXHRcdH1cblx0XHRpZiAodGhpcy5Jc0NvbnN0cnVjdG9yKFMpKSB7XG5cdFx0XHRyZXR1cm4gUztcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm8gY29uc3RydWN0b3IgZm91bmQnKTtcblx0fVxufSk7XG5cbmRlbGV0ZSBFUzYuQ2hlY2tPYmplY3RDb2VyY2libGU7IC8vIHJlbmFtZWQgaW4gRVM2IHRvIFJlcXVpcmVPYmplY3RDb2VyY2libGVcblxubW9kdWxlLmV4cG9ydHMgPSBFUzY7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIGlzTmFOKGEpIHtcblx0cmV0dXJuIGEgIT09IGE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNOYU4uanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwidmFyICRpc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSAhPT0gYTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiAhJGlzTmFOKHgpICYmIHggIT09IEluZmluaXR5ICYmIHggIT09IC1JbmZpbml0eTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9oZWxwZXJzL2lzRmluaXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsInZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuXHRmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG5cdFx0aWYgKGhhcy5jYWxsKHNvdXJjZSwga2V5KSkge1xuXHRcdFx0dGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXMtYWJzdHJhY3QvaGVscGVycy9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaWduKG51bWJlcikge1xuXHRyZXR1cm4gbnVtYmVyID49IDAgPyAxIDogLTE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1vZChudW1iZXIsIG1vZHVsbykge1xuXHR2YXIgcmVtYWluID0gbnVtYmVyICUgbW9kdWxvO1xuXHRyZXR1cm4gTWF0aC5mbG9vcihyZW1haW4gPj0gMCA/IHJlbWFpbiA6IHJlbWFpbiArIG1vZHVsbyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvbW9kLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLWFic3RyYWN0L2hlbHBlcnMvaXNQcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCc7XG5cbnZhciBpc1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc1ByaW1pdGl2ZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIGlzRGF0ZSA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdpcy1zeW1ib2wnKTtcblxudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSBmdW5jdGlvbiBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpIHtcblx0aWYgKHR5cGVvZiBPID09PSAndW5kZWZpbmVkJyB8fCBPID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgbWV0aG9kIG9uICcgKyBPKTtcblx0fVxuXHRpZiAodHlwZW9mIGhpbnQgIT09ICdzdHJpbmcnIHx8IChoaW50ICE9PSAnbnVtYmVyJyAmJiBoaW50ICE9PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdoaW50IG11c3QgYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiJyk7XG5cdH1cblx0dmFyIG1ldGhvZE5hbWVzID0gaGludCA9PT0gJ3N0cmluZycgPyBbJ3RvU3RyaW5nJywgJ3ZhbHVlT2YnXSA6IFsndmFsdWVPZicsICd0b1N0cmluZyddO1xuXHR2YXIgbWV0aG9kLCByZXN1bHQsIGk7XG5cdGZvciAoaSA9IDA7IGkgPCBtZXRob2ROYW1lcy5sZW5ndGg7ICsraSkge1xuXHRcdG1ldGhvZCA9IE9bbWV0aG9kTmFtZXNbaV1dO1xuXHRcdGlmIChpc0NhbGxhYmxlKG1ldGhvZCkpIHtcblx0XHRcdHJlc3VsdCA9IG1ldGhvZC5jYWxsKE8pO1xuXHRcdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gZGVmYXVsdCB2YWx1ZScpO1xufTtcblxudmFyIEdldE1ldGhvZCA9IGZ1bmN0aW9uIEdldE1ldGhvZChPLCBQKSB7XG5cdHZhciBmdW5jID0gT1tQXTtcblx0aWYgKGZ1bmMgIT09IG51bGwgJiYgdHlwZW9mIGZ1bmMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYgKCFpc0NhbGxhYmxlKGZ1bmMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGZ1bmMgKyAnIHJldHVybmVkIGZvciBwcm9wZXJ0eSAnICsgUCArICcgb2Ygb2JqZWN0ICcgKyBPICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRyZXR1cm4gZnVuYztcblx0fVxufTtcblxuLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0LCBQcmVmZXJyZWRUeXBlKSB7XG5cdGlmIChpc1ByaW1pdGl2ZShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblx0dmFyIGhpbnQgPSAnZGVmYXVsdCc7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdGlmIChQcmVmZXJyZWRUeXBlID09PSBTdHJpbmcpIHtcblx0XHRcdGhpbnQgPSAnc3RyaW5nJztcblx0XHR9IGVsc2UgaWYgKFByZWZlcnJlZFR5cGUgPT09IE51bWJlcikge1xuXHRcdFx0aGludCA9ICdudW1iZXInO1xuXHRcdH1cblx0fVxuXG5cdHZhciBleG90aWNUb1ByaW07XG5cdGlmIChoYXNTeW1ib2xzKSB7XG5cdFx0aWYgKFN5bWJvbC50b1ByaW1pdGl2ZSkge1xuXHRcdFx0ZXhvdGljVG9QcmltID0gR2V0TWV0aG9kKGlucHV0LCBTeW1ib2wudG9QcmltaXRpdmUpO1xuXHRcdH0gZWxzZSBpZiAoaXNTeW1ib2woaW5wdXQpKSB7XG5cdFx0XHRleG90aWNUb1ByaW0gPSBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2Y7XG5cdFx0fVxuXHR9XG5cdGlmICh0eXBlb2YgZXhvdGljVG9QcmltICE9PSAndW5kZWZpbmVkJykge1xuXHRcdHZhciByZXN1bHQgPSBleG90aWNUb1ByaW0uY2FsbChpbnB1dCwgaGludCk7XG5cdFx0aWYgKGlzUHJpbWl0aXZlKHJlc3VsdCkpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYWJsZSB0byBjb252ZXJ0IGV4b3RpYyBvYmplY3QgdG8gcHJpbWl0aXZlJyk7XG5cdH1cblx0aWYgKGhpbnQgPT09ICdkZWZhdWx0JyAmJiAoaXNEYXRlKGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpKSB7XG5cdFx0aGludCA9ICdzdHJpbmcnO1xuXHR9XG5cdHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBoaW50ID09PSAnZGVmYXVsdCcgPyAnbnVtYmVyJyA6IGhpbnQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM2LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQcmltaXRpdmUodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VzLXRvLXByaW1pdGl2ZS9oZWxwZXJzL2lzUHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBjb25zdHJ1Y3RvclJlZ2V4ID0gL15cXHMqY2xhc3MgLztcbnZhciBpc0VTNkNsYXNzRm4gPSBmdW5jdGlvbiBpc0VTNkNsYXNzRm4odmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgZm5TdHIgPSBmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHZhciBzaW5nbGVTdHJpcHBlZCA9IGZuU3RyLnJlcGxhY2UoL1xcL1xcLy4qXFxuL2csICcnKTtcblx0XHR2YXIgbXVsdGlTdHJpcHBlZCA9IHNpbmdsZVN0cmlwcGVkLnJlcGxhY2UoL1xcL1xcKlsuXFxzXFxTXSpcXCpcXC8vZywgJycpO1xuXHRcdHZhciBzcGFjZVN0cmlwcGVkID0gbXVsdGlTdHJpcHBlZC5yZXBsYWNlKC9cXG4vbWcsICcgJykucmVwbGFjZSgvIHsyfS9nLCAnICcpO1xuXHRcdHJldHVybiBjb25zdHJ1Y3RvclJlZ2V4LnRlc3Qoc3BhY2VTdHJpcHBlZCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7IC8vIG5vdCBhIGZ1bmN0aW9uXG5cdH1cbn07XG5cbnZhciB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZm5DbGFzcyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG52YXIgZ2VuQ2xhc3MgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbGxhYmxlKHZhbHVlKSB7XG5cdGlmICghdmFsdWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRyZXR1cm4gc3RyQ2xhc3MgPT09IGZuQ2xhc3MgfHwgc3RyQ2xhc3MgPT09IGdlbkNsYXNzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1jYWxsYWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRnZXREYXkuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGVPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtZGF0ZS1vYmplY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woKSA9PT0gJ3N5bWJvbCc7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNTeW1ib2xPYmplY3QodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlLnZhbHVlT2YoKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0cmV0dXJuIHN5bVN0cmluZ1JlZ2V4LnRlc3Qoc3ltVG9TdHIuY2FsbCh2YWx1ZSkpO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0Ly8gdGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IFN5bWJvbHMuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLXN5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJ2YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZnVuY3Rpb24tYmluZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJ2YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKHRhcmdldCkgIT09IGZ1bmNUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJST1JfTUVTU0FHRSArIHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBNYXRoLm1heCgwLCB0YXJnZXQubGVuZ3RoIC0gYXJncy5sZW5ndGgpO1xuICAgIHZhciBib3VuZEFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvdW5kTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm91bmRBcmdzLnB1c2goJyQnICsgaSk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGJvdW5kQXJncy5qb2luKCcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mdW5jdGlvbi1iaW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyICRpc05hTiA9IHJlcXVpcmUoJy4vaGVscGVycy9pc05hTicpO1xudmFyICRpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0Zpbml0ZScpO1xuXG52YXIgc2lnbiA9IHJlcXVpcmUoJy4vaGVscGVycy9zaWduJyk7XG52YXIgbW9kID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZCcpO1xuXG52YXIgSXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCdlcy10by1wcmltaXRpdmUvZXM1Jyk7XG5cbi8vIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDlcbnZhciBFUzUgPSB7XG5cdFRvUHJpbWl0aXZlOiB0b1ByaW1pdGl2ZSxcblxuXHRUb0Jvb2xlYW46IGZ1bmN0aW9uIFRvQm9vbGVhbih2YWx1ZSkge1xuXHRcdHJldHVybiBCb29sZWFuKHZhbHVlKTtcblx0fSxcblx0VG9OdW1iZXI6IGZ1bmN0aW9uIFRvTnVtYmVyKHZhbHVlKSB7XG5cdFx0cmV0dXJuIE51bWJlcih2YWx1ZSk7XG5cdH0sXG5cdFRvSW50ZWdlcjogZnVuY3Rpb24gVG9JbnRlZ2VyKHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuXHRcdGlmIChudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cblx0XHRyZXR1cm4gc2lnbihudW1iZXIpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcblx0fSxcblx0VG9JbnQzMjogZnVuY3Rpb24gVG9JbnQzMih4KSB7XG5cdFx0cmV0dXJuIHRoaXMuVG9OdW1iZXIoeCkgPj4gMDtcblx0fSxcblx0VG9VaW50MzI6IGZ1bmN0aW9uIFRvVWludDMyKHgpIHtcblx0XHRyZXR1cm4gdGhpcy5Ub051bWJlcih4KSA+Pj4gMDtcblx0fSxcblx0VG9VaW50MTY6IGZ1bmN0aW9uIFRvVWludDE2KHZhbHVlKSB7XG5cdFx0dmFyIG51bWJlciA9IHRoaXMuVG9OdW1iZXIodmFsdWUpO1xuXHRcdGlmICgkaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT09IDAgfHwgISRpc0Zpbml0ZShudW1iZXIpKSB7IHJldHVybiAwOyB9XG5cdFx0dmFyIHBvc0ludCA9IHNpZ24obnVtYmVyKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobnVtYmVyKSk7XG5cdFx0cmV0dXJuIG1vZChwb3NJbnQsIDB4MTAwMDApO1xuXHR9LFxuXHRUb1N0cmluZzogZnVuY3Rpb24gVG9TdHJpbmcodmFsdWUpIHtcblx0XHRyZXR1cm4gU3RyaW5nKHZhbHVlKTtcblx0fSxcblx0VG9PYmplY3Q6IGZ1bmN0aW9uIFRvT2JqZWN0KHZhbHVlKSB7XG5cdFx0dGhpcy5DaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSk7XG5cdFx0cmV0dXJuIE9iamVjdCh2YWx1ZSk7XG5cdH0sXG5cdENoZWNrT2JqZWN0Q29lcmNpYmxlOiBmdW5jdGlvbiBDaGVja09iamVjdENvZXJjaWJsZSh2YWx1ZSwgb3B0TWVzc2FnZSkge1xuXHRcdC8qIGpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKG9wdE1lc3NhZ2UgfHwgJ0Nhbm5vdCBjYWxsIG1ldGhvZCBvbiAnICsgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sXG5cdElzQ2FsbGFibGU6IElzQ2FsbGFibGUsXG5cdFNhbWVWYWx1ZTogZnVuY3Rpb24gU2FtZVZhbHVlKHgsIHkpIHtcblx0XHRpZiAoeCA9PT0geSkgeyAvLyAwID09PSAtMCwgYnV0IHRoZXkgYXJlIG5vdCBpZGVudGljYWwuXG5cdFx0XHRpZiAoeCA9PT0gMCkgeyByZXR1cm4gMSAvIHggPT09IDEgLyB5OyB9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuICRpc05hTih4KSAmJiAkaXNOYU4oeSk7XG5cdH0sXG5cblx0Ly8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLThcblx0VHlwZTogZnVuY3Rpb24gVHlwZSh4KSB7XG5cdFx0aWYgKHggPT09IG51bGwpIHtcblx0XHRcdHJldHVybiAnTnVsbCc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiAnVW5kZWZpbmVkJztcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuICdPYmplY3QnO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG5cdFx0XHRyZXR1cm4gJ051bWJlcic7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgeCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRyZXR1cm4gJ0Jvb2xlYW4nO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJ1N0cmluZyc7XG5cdFx0fVxuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVTNTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy1hYnN0cmFjdC9lczUuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNQcmltaXRpdmUgPSByZXF1aXJlKCcuL2hlbHBlcnMvaXNQcmltaXRpdmUnKTtcblxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xuXG4vLyBodHRwczovL2VzNS5naXRodWIuaW8vI3g4LjEyXG52YXIgRVM1aW50ZXJuYWxTbG90cyA9IHtcblx0J1tbRGVmYXVsdFZhbHVlXV0nOiBmdW5jdGlvbiAoTywgaGludCkge1xuXHRcdHZhciBhY3R1YWxIaW50ID0gaGludCB8fCAodG9TdHIuY2FsbChPKSA9PT0gJ1tvYmplY3QgRGF0ZV0nID8gU3RyaW5nIDogTnVtYmVyKTtcblxuXHRcdGlmIChhY3R1YWxIaW50ID09PSBTdHJpbmcgfHwgYWN0dWFsSGludCA9PT0gTnVtYmVyKSB7XG5cdFx0XHR2YXIgbWV0aG9kcyA9IGFjdHVhbEhpbnQgPT09IFN0cmluZyA/IFsndG9TdHJpbmcnLCAndmFsdWVPZiddIDogWyd2YWx1ZU9mJywgJ3RvU3RyaW5nJ107XG5cdFx0XHR2YXIgdmFsdWUsIGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoaXNDYWxsYWJsZShPW21ldGhvZHNbaV1dKSkge1xuXHRcdFx0XHRcdHZhbHVlID0gT1ttZXRob2RzW2ldXSgpO1xuXHRcdFx0XHRcdGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIGRlZmF1bHQgdmFsdWUnKTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBbW0RlZmF1bHRWYWx1ZV1dIGhpbnQgc3VwcGxpZWQnKTtcblx0fVxufTtcblxuLy8gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBUb1ByaW1pdGl2ZShpbnB1dCwgUHJlZmVycmVkVHlwZSkge1xuXHRpZiAoaXNQcmltaXRpdmUoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cdHJldHVybiBFUzVpbnRlcm5hbFNsb3RzWydbW0RlZmF1bHRWYWx1ZV1dJ10oaW5wdXQsIFByZWZlcnJlZFR5cGUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9lcy10by1wcmltaXRpdmUvZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIHJlZ2V4RXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIHRyeVJlZ2V4RXhlY0NhbGwgPSBmdW5jdGlvbiB0cnlSZWdleEV4ZWModmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgbGFzdEluZGV4ID0gdmFsdWUubGFzdEluZGV4O1xuXHRcdHZhbHVlLmxhc3RJbmRleCA9IDA7XG5cblx0XHRyZWdleEV4ZWMuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0dmFsdWUubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWdleENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdGlmICghaGFzVG9TdHJpbmdUYWcpIHtcblx0XHRyZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09IHJlZ2V4Q2xhc3M7XG5cdH1cblxuXHR2YXIgZGVzY3JpcHRvciA9IGdPUEQodmFsdWUsICdsYXN0SW5kZXgnKTtcblx0dmFyIGhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgaGFzKGRlc2NyaXB0b3IsICd2YWx1ZScpO1xuXHRpZiAoIWhhc0xhc3RJbmRleERhdGFQcm9wZXJ0eSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnlSZWdleEV4ZWNDYWxsKHZhbHVlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtcmVnZXgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwidmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2hhcy9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVMgPSByZXF1aXJlKCdlcy1hYnN0cmFjdC9lczYnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuXHR2YXIgbGlzdCA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuXHR2YXIgbGVuZ3RoID0gRVMuVG9JbnRlZ2VyKEVTLlRvTGVuZ3RoKGxpc3QubGVuZ3RoKSk7XG5cdGlmICghRVMuSXNDYWxsYWJsZShwcmVkaWNhdGUpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkjZmluZDogcHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHR9XG5cdGlmIChsZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cdHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuXHRmb3IgKHZhciBpID0gMCwgdmFsdWU7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdHZhbHVlID0gbGlzdFtpXTtcblx0XHRpZiAoRVMuQ2FsbChwcmVkaWNhdGUsIHRoaXNBcmcsIFt2YWx1ZSwgaSwgbGlzdF0pKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FycmF5LnByb3RvdHlwZS5maW5kL2ltcGxlbWVudGF0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRQb2x5ZmlsbCgpIHtcblx0Ly8gRGV0ZWN0IGlmIGFuIGltcGxlbWVudGF0aW9uIGV4aXN0c1xuXHQvLyBEZXRlY3QgZWFybHkgaW1wbGVtZW50YXRpb25zIHdoaWNoIHNraXBwZWQgaG9sZXMgaW4gc3BhcnNlIGFycmF5c1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc3BhcnNlLWFycmF5c1xuXHR2YXIgaW1wbGVtZW50ZWQgPSBBcnJheS5wcm90b3R5cGUuZmluZCAmJiBbLCAxXS5maW5kKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSkgIT09IDE7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdsb2JhbC1yZXF1aXJlXG5cdHJldHVybiBpbXBsZW1lbnRlZCA/IEFycmF5LnByb3RvdHlwZS5maW5kIDogcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hcnJheS5wcm90b3R5cGUuZmluZC9wb2x5ZmlsbC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGdldFBvbHlmaWxsID0gcmVxdWlyZSgnLi9wb2x5ZmlsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoaW1BcnJheVByb3RvdHlwZUZpbmQoKSB7XG5cdHZhciBwb2x5ZmlsbCA9IGdldFBvbHlmaWxsKCk7XG5cblx0ZGVmaW5lKEFycmF5LnByb3RvdHlwZSwgeyBmaW5kOiBwb2x5ZmlsbCB9LCB7XG5cdFx0ZmluZDogZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maW5kICE9PSBwb2x5ZmlsbDtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBwb2x5ZmlsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXJyYXkucHJvdG90eXBlLmZpbmQvc2hpbS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1hcnJvd3MtYWx0XFxcIj48dGl0bGU+YXJyb3dzLWFsdDwvdGl0bGU+PHBhdGggZD1cXFwiTTE0MTEgNTQxbC0zNTUgMzU1IDM1NSAzNTUgMTQ0LTE0NHEyOS0zMSA3MC0xNCAzOSAxNyAzOSA1OXY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxNDQtMTQ0LTM1NS0zNTUtMzU1IDM1NSAxNDQgMTQ0cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxNDQgMTQ0IDM1NS0zNTUtMzU1LTM1NS0xNDQgMTQ0cS0xOSAxOS00NSAxOS0xMiAwLTI0LTUtNDAtMTctNDAtNTl2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHE0MiAwIDU5IDQwIDE3IDM5LTE0IDY5bC0xNDQgMTQ0IDM1NSAzNTUgMzU1LTM1NS0xNDQtMTQ0cS0zMS0zMC0xNC02OSAxNy00MCA1OS00MGg0NDhxMjYgMCA0NSAxOXQxOSA0NXY0NDhxMCA0Mi0zOSA1OS0xMyA1LTI1IDUtMjYgMC00NS0xOXpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tYmFja3dhcmRcXFwiPjx0aXRsZT5iYWNrd2FyZDwvdGl0bGU+PHBhdGggZD1cXFwiTTE2ODMgMTQxcTE5LTE5IDMyLTEzdDEzIDMydjE0NzJxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTgtOS0xMy0xOXY3MTBxMCAyNi0xMyAzMnQtMzItMTNsLTcxMC03MTBxLTE5LTE5LTE5LTQ1dDE5LTQ1bDcxMC03MTBxMTktMTkgMzItMTN0MTMgMzJ2NzEwcTUtMTEgMTMtMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWJ1bGxzZXllXFxcIj48dGl0bGU+YnVsbHNleWU8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMTUyIDg5NnEwIDEwNi03NSAxODF0LTE4MSA3NS0xODEtNzUtNzUtMTgxIDc1LTE4MSAxODEtNzUgMTgxIDc1IDc1IDE4MXptMTI4IDBxMC0xNTktMTEyLjUtMjcxLjV0LTI3MS41LTExMi41LTI3MS41IDExMi41LTExMi41IDI3MS41IDExMi41IDI3MS41IDI3MS41IDExMi41IDI3MS41LTExMi41IDExMi41LTI3MS41em0xMjggMHEwIDIxMi0xNTAgMzYydC0zNjIgMTUwLTM2Mi0xNTAtMTUwLTM2MiAxNTAtMzYyIDM2Mi0xNTAgMzYyIDE1MCAxNTAgMzYyem0xMjggMHEwLTEzMC01MS0yNDguNXQtMTM2LjUtMjA0LTIwNC0xMzYuNS0yNDguNS01MS0yNDguNSA1MS0yMDQgMTM2LjUtMTM2LjUgMjA0LTUxIDI0OC41IDUxIDI0OC41IDEzNi41IDIwNCAyMDQgMTM2LjUgMjQ4LjUgNTEgMjQ4LjUtNTEgMjA0LTEzNi41IDEzNi41LTIwNCA1MS0yNDguNXptMTI4IDBxMCAyMDktMTAzIDM4NS41dC0yNzkuNSAyNzkuNS0zODUuNSAxMDMtMzg1LjUtMTAzLTI3OS41LTI3OS41LTEwMy0zODUuNSAxMDMtMzg1LjUgMjc5LjUtMjc5LjUgMzg1LjUtMTAzIDM4NS41IDEwMyAyNzkuNSAyNzkuNSAxMDMgMzg1LjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgMzgwXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1jYXRcXFwiPjx0aXRsZT5jYXQ8L3RpdGxlPiA8cGF0aCBkPVxcXCJNIDE1MS4zNDkwNCwzMDcuMjA0NTUgTCAyNjQuMzQ5MDQsMzA3LjIwNDU1IEMgMjY0LjM0OTA0LDI5MS4xNDA5NiAyNjMuMjAyMSwyODcuOTU0NTUgMjM2LjU5OTA0LDI4Ny45NTQ1NSBDIDI0MC44NDkwNCwyNzUuMjA0NTUgMjU4LjEyNDI0LDI0NC4zNTgwOCAyNjcuNzI0MDQsMjQ0LjM1ODA4IEMgMjc2LjIxNzA3LDI0NC4zNTgwOCAyODYuMzQ5MDQsMjQ0LjgyNTkyIDI4Ni4zNDkwNCwyNjQuMjA0NTUgQyAyODYuMzQ5MDQsMjg2LjIwNDU1IDMyMy4zNzE3MSwzMjEuNjc1NDcgMzMyLjM0OTA0LDMwNy4yMDQ1NSBDIDM0NS43Mjc2OSwyODUuNjM4OTcgMzA5LjM0OTA0LDI5Mi4yMTUxNCAzMDkuMzQ5MDQsMjQwLjIwNDU1IEMgMzA5LjM0OTA0LDE2OS4wNTEzNSAzNTAuODc0MTcsMTc5LjE4MDcxIDM1MC44NzQxNywxMzkuMjA0NTUgQyAzNTAuODc0MTcsMTE5LjIwNDU1IDM0NS4zNDkwNCwxMTYuNTAzNzQgMzQ1LjM0OTA0LDEwMi4yMDQ1NSBDIDM0NS4zNDkwNCw4My4zMDY5NSAzNjEuOTk3MTcsODQuNDAzNTc3IDM1OC43NTgwNSw2OC43MzQ4NzkgQyAzNTYuNTIwNjEsNTcuOTExNjU2IDM1NC43Njk2Miw0OS4yMzE5OSAzNTMuNDY1MTYsMzYuMTQzODg5IEMgMzUyLjUzOTU5LDI2Ljg1NzMwNSAzNTIuMjQ0NTIsMTYuOTU5Mzk4IDM0Mi41OTg1NSwxNy4zNTczODIgQyAzMzEuMjY1MDUsMTcuODI0OTkyIDMyNi45NjU0OSwzNy43NzQxOSAzMDkuMzQ5MDQsMzkuMjA0NTQ5IEMgMjkxLjc2ODUxLDQwLjYzMTk5MSAyNzYuNzc4MzQsMjQuMjM4MDI4IDI2OS45NzQwNCwyNi41Nzk1NDkgQyAyNjMuMjI3MDksMjguOTAxMzM0IDI2NS4zNDkwNCw0Ny4yMDQ1NDkgMjY5LjM0OTA0LDYwLjIwNDU0OSBDIDI3NS42MzU4OCw4MC42MzY3NzEgMjg5LjM0OTA0LDEwNy4yMDQ1NSAyNjQuMzQ5MDQsMTExLjIwNDU1IEMgMjM5LjM0OTA0LDExNS4yMDQ1NSAxOTYuMzQ5MDQsMTE5LjIwNDU1IDE2NS4zNDkwNCwxNjAuMjA0NTUgQyAxMzQuMzQ5MDQsMjAxLjIwNDU1IDEzNS40OTM0MiwyNDkuMzIxMiAxMjMuMzQ5MDQsMjY0LjIwNDU1IEMgODIuNTkwNjk2LDMxNC4xNTUyOSA0MC44MjM5MTksMjkzLjY0NjI1IDQwLjgyMzkxOSwzMzUuMjA0NTUgQyA0MC44MjM5MTksMzUzLjgxMDE5IDcyLjM0OTA0NSwzNjcuMjA0NTUgNzcuMzQ5MDQ1LDM2MS4yMDQ1NSBDIDgyLjM0OTA0NSwzNTUuMjA0NTUgMzQuODYzNzY0LDMzNy4zMjU4NyA4Ny45OTU0OTIsMzE2LjIwNDU1IEMgMTMzLjM4NzExLDI5OC4xNjAxNCAxMzcuNDM5MTQsMjk0LjQ3NjYzIDE1MS4zNDkwNCwzMDcuMjA0NTUgeiBcXFwiIHN0eWxlPVxcXCJmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjFcXFwiLz4gPC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWNvbW1lbnRpbmctb1xcXCI+PHRpdGxlPmNvbW1lbnRpbmctbzwvdGl0bGU+PHBhdGggZD1cXFwiTTY0MCA4OTZxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptMzg0IDBxMCA1My0zNy41IDkwLjV0LTkwLjUgMzcuNS05MC41LTM3LjUtMzcuNS05MC41IDM3LjUtOTAuNSA5MC41LTM3LjUgOTAuNSAzNy41IDM3LjUgOTAuNXptLTUxMi01MTJxLTIwNCAwLTM4MS41IDY5LjV0LTI4MiAxODcuNS0xMDQuNSAyNTVxMCAxMTIgNzEuNSAyMTMuNXQyMDEuNSAxNzUuNWw4NyA1MC0yNyA5NnEtMjQgOTEtNzAgMTcyIDE1Mi02MyAyNzUtMTcxbDQzLTM4IDU3IDZxNjkgOCAxMzAgOCAyMDQgMCAzODEuNS02OS41dDI4Mi0xODcuNSAxMDQuNS0yNTUtMTA0LjUtMjU1LTI4Mi0xODcuNS0zODEuNS02OS41em04OTYgNTEycTAgMTc0LTEyMCAzMjEuNXQtMzI2IDIzMy00NTAgODUuNXEtNzAgMC0xNDUtOC0xOTggMTc1LTQ2MCAyNDItNDkgMTQtMTE0IDIyaC01cS0xNSAwLTI3LTEwLjV0LTE2LTI3LjV2LTFxLTMtNC0uNS0xMnQyLTEwIDQuNS05LjVsNi05IDctOC41IDgtOXE3LTggMzEtMzQuNXQzNC41LTM4IDMxLTM5LjUgMzIuNS01MSAyNy01OSAyNi03NnEtMTU3LTg5LTI0Ny41LTIyMHQtOTAuNS0yODFxMC0xMzAgNzEtMjQ4LjV0MTkxLTIwNC41IDI4Ni0xMzYuNSAzNDgtNTAuNSAzNDggNTAuNSAyODYgMTM2LjUgMTkxIDIwNC41IDcxIDI0OC41elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1kb3dubG9hZFxcXCI+PHRpdGxlPmRvd25sb2FkPC90aXRsZT48cGF0aCBkPVxcXCJNMTM0NCAxMzQ0cTAtMjYtMTktNDV0LTQ1LTE5LTQ1IDE5LTE5IDQ1IDE5IDQ1IDQ1IDE5IDQ1LTE5IDE5LTQ1em0yNTYgMHEwLTI2LTE5LTQ1dC00NS0xOS00NSAxOS0xOSA0NSAxOSA0NSA0NSAxOSA0NS0xOSAxOS00NXptMTI4LTIyNHYzMjBxMCA0MC0yOCA2OHQtNjggMjhoLTE0NzJxLTQwIDAtNjgtMjh0LTI4LTY4di0zMjBxMC00MCAyOC02OHQ2OC0yOGg0NjVsMTM1IDEzNnE1OCA1NiAxMzYgNTZ0MTM2LTU2bDEzNi0xMzZoNDY0cTQwIDAgNjggMjh0MjggNjh6bS0zMjUtNTY5cTE3IDQxLTE0IDcwbC00NDggNDQ4cS0xOCAxOS00NSAxOXQtNDUtMTlsLTQ0OC00NDhxLTMxLTI5LTE0LTcwIDE3LTM5IDU5LTM5aDI1NnYtNDQ4cTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV2NDQ4aDI1NnE0MiAwIDU5IDM5elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1lZGl0XFxcIj48dGl0bGU+ZWRpdDwvdGl0bGU+PHBhdGggZD1cXFwiTTg4OCAxMTg0bDExNi0xMTYtMTUyLTE1Mi0xMTYgMTE2djU2aDk2djk2aDU2em00NDAtNzIwcS0xNi0xNi0zMyAxbC0zNTAgMzUwcS0xNyAxNy0xIDMzdDMzLTFsMzUwLTM1MHExNy0xNyAxLTMzem04MCA1OTR2MTkwcTAgMTE5LTg0LjUgMjAzLjV0LTIwMy41IDg0LjVoLTgzMnEtMTE5IDAtMjAzLjUtODQuNXQtODQuNS0yMDMuNXYtODMycTAtMTE5IDg0LjUtMjAzLjV0MjAzLjUtODQuNWg4MzJxNjMgMCAxMTcgMjUgMTUgNyAxOCAyMyAzIDE3LTkgMjlsLTQ5IDQ5cS0xNCAxNC0zMiA4LTIzLTYtNDUtNmgtODMycS02NiAwLTExMyA0N3QtNDcgMTEzdjgzMnEwIDY2IDQ3IDExM3QxMTMgNDdoODMycTY2IDAgMTEzLTQ3dDQ3LTExM3YtMTI2cTAtMTMgOS0yMmw2NC02NHExNS0xNSAzNS03dDIwIDI5em0tOTYtNzM4bDI4OCAyODgtNjcyIDY3MmgtMjg4di0yODh6bTQ0NCAxMzJsLTkyIDkyLTI4OC0yODggOTItOTJxMjgtMjggNjgtMjh0NjggMjhsMTUyIDE1MnEyOCAyOCAyOCA2OHQtMjggNjh6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWZvcndhcmRcXFwiPjx0aXRsZT5mb3J3YXJkPC90aXRsZT48cGF0aCBkPVxcXCJNMTA5IDE2NTFxLTE5IDE5LTMyIDEzdC0xMy0zMnYtMTQ3MnEwLTI2IDEzLTMydDMyIDEzbDcxMCA3MTBxOCA4IDEzIDE5di03MTBxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTE5IDE5IDE5IDQ1dC0xOSA0NWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWluZm9cXFwiPjx0aXRsZT5pbmZvPC90aXRsZT48cGF0aCBkPVxcXCJNMTIxNiAxMzQ0djEyOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTI4cTAtMjYgMTktNDV0NDUtMTloNjR2LTM4NGgtNjRxLTI2IDAtNDUtMTl0LTE5LTQ1di0xMjhxMC0yNiAxOS00NXQ0NS0xOWgzODRxMjYgMCA0NSAxOXQxOSA0NXY1NzZoNjRxMjYgMCA0NSAxOXQxOSA0NXptLTEyOC0xMTUydjE5MnEwIDI2LTE5IDQ1dC00NSAxOWgtMjU2cS0yNiAwLTQ1LTE5dC0xOS00NXYtMTkycTAtMjYgMTktNDV0NDUtMTloMjU2cTI2IDAgNDUgMTl0MTkgNDV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLWxpc3QtdWxcXFwiPjx0aXRsZT5saXN0LXVsPC90aXRsZT48cGF0aCBkPVxcXCJNMzg0IDE0MDhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMC01MTJxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0tMTQwOC05MjhxMCA4MC01NiAxMzZ0LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTYgMTM2IDU2IDU2IDEzNnptMTQwOCA0MTZ2MTkycTAgMTMtOS41IDIyLjV0LTIyLjUgOS41aC0xMjE2cS0xMyAwLTIyLjUtOS41dC05LjUtMjIuNXYtMTkycTAtMTMgOS41LTIyLjV0MjIuNS05LjVoMTIxNnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0wLTUxMnYxOTJxMCAxMy05LjUgMjIuNXQtMjIuNSA5LjVoLTEyMTZxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di0xOTJxMC0xMyA5LjUtMjIuNXQyMi41LTkuNWgxMjE2cTEzIDAgMjIuNSA5LjV0OS41IDIyLjV6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLW1hZ2ljXFxcIj48dGl0bGU+bWFnaWM8L3RpdGxlPjxwYXRoIGQ9XFxcIk0xMjU0IDU4MWwyOTMtMjkzLTEwNy0xMDctMjkzIDI5M3ptNDQ3LTI5M3EwIDI3LTE4IDQ1bC0xMjg2IDEyODZxLTE4IDE4LTQ1IDE4dC00NS0xOGwtMTk4LTE5OHEtMTgtMTgtMTgtNDV0MTgtNDVsMTI4Ni0xMjg2cTE4LTE4IDQ1LTE4dDQ1IDE4bDE5OCAxOThxMTggMTggMTggNDV6bS0xMzUxLTE5MGw5OCAzMC05OCAzMC0zMCA5OC0zMC05OC05OC0zMCA5OC0zMCAzMC05OHptMzUwIDE2MmwxOTYgNjAtMTk2IDYwLTYwIDE5Ni02MC0xOTYtMTk2LTYwIDE5Ni02MCA2MC0xOTZ6bTkzMCA0NzhsOTggMzAtOTggMzAtMzAgOTgtMzAtOTgtOTgtMzAgOTgtMzAgMzAtOTh6bS02NDAtNjQwbDk4IDMwLTk4IDMwLTMwIDk4LTMwLTk4LTk4LTMwIDk4LTMwIDMwLTk4elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wYXVzZVxcXCI+PHRpdGxlPnBhdXNlPC90aXRsZT48cGF0aCBkPVxcXCJNMTY2NCAxOTJ2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1em0tODk2IDB2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NXYtMTQwOHEwLTI2IDE5LTQ1dDQ1LTE5aDUxMnEyNiAwIDQ1IDE5dDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGFuZVxcXCI+PHRpdGxlPnBsYW5lPC90aXRsZT48cGF0aCBkPVxcXCJNMTU2OCAxNjBxNDQgNTIgMTIgMTQ4dC0xMDggMTcybC0xNjEgMTYxIDE2MCA2OTZxNSAxOS0xMiAzM2wtMTI4IDk2cS03IDYtMTkgNi00IDAtNy0xLTE1LTMtMjEtMTZsLTI3OS01MDgtMjU5IDI1OSA1MyAxOTRxNSAxNy04IDMxbC05NiA5NnEtOSA5LTIzIDloLTJxLTE1LTItMjQtMTNsLTE4OS0yNTItMjUyLTE4OXEtMTEtNy0xMy0yMy0xLTEzIDktMjVsOTYtOTdxOS05IDIzLTkgNiAwIDggMWwxOTQgNTMgMjU5LTI1OS01MDgtMjc5cS0xNC04LTE3LTI0LTItMTYgOS0yN2wxMjgtMTI4cTE0LTEzIDMwLThsNjY1IDE1OSAxNjAtMTYwcTc2LTc2IDE3Mi0xMDh0MTQ4IDEyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbGF5XFxcIj48dGl0bGU+cGxheTwvdGl0bGU+PHBhdGggZD1cXFwiTTE1NzYgOTI3bC0xMzI4IDczOHEtMjMgMTMtMzkuNSAzdC0xNi41LTM2di0xNDcycTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi1wbHVzXFxcIj48dGl0bGU+cGx1czwvdGl0bGU+PHBhdGggZD1cXFwiTTE2MDAgNzM2djE5MnEwIDQwLTI4IDY4dC02OCAyOGgtNDE2djQxNnEwIDQwLTI4IDY4dC02OCAyOGgtMTkycS00MCAwLTY4LTI4dC0yOC02OHYtNDE2aC00MTZxLTQwIDAtNjgtMjh0LTI4LTY4di0xOTJxMC00MCAyOC02OHQ2OC0yOGg0MTZ2LTQxNnEwLTQwIDI4LTY4dDY4LTI4aDE5MnE0MCAwIDY4IDI4dDI4IDY4djQxNmg0MTZxNDAgMCA2OCAyOHQyOCA2OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tcmVkb1xcXCI+PHRpdGxlPnJlZG88L3RpdGxlPjxwYXRoIGQ9XFxcIk0xNjY0IDI1NnY0NDhxMCAyNi0xOSA0NXQtNDUgMTloLTQ0OHEtNDIgMC01OS00MC0xNy0zOSAxNC02OWwxMzgtMTM4cS0xNDgtMTM3LTM0OS0xMzctMTA0IDAtMTk4LjUgNDAuNXQtMTYzLjUgMTA5LjUtMTA5LjUgMTYzLjUtNDAuNSAxOTguNSA0MC41IDE5OC41IDEwOS41IDE2My41IDE2My41IDEwOS41IDE5OC41IDQwLjVxMTE5IDAgMjI1LTUydDE3OS0xNDdxNy0xMCAyMy0xMiAxNCAwIDI1IDlsMTM3IDEzOHE5IDggOS41IDIwLjV0LTcuNSAyMi41cS0xMDkgMTMyLTI2NCAyMDQuNXQtMzI3IDcyLjVxLTE1NiAwLTI5OC02MXQtMjQ1LTE2NC0xNjQtMjQ1LTYxLTI5OCA2MS0yOTggMTY0LTI0NSAyNDUtMTY0IDI5OC02MXExNDcgMCAyODQuNSA1NS41dDI0NC41IDE1Ni41bDEzMC0xMjlxMjktMzEgNzAtMTQgMzkgMTcgMzkgNTl6XFxcIi8+PC9zeW1ib2w+PHN5bWJvbCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNzkyIDE3OTJcXFwiIGlkPVxcXCJsZXBsYXllci1pY29uLXJlZnJlc2hcXFwiPjx0aXRsZT5yZWZyZXNoPC90aXRsZT48cGF0aCBkPVxcXCJNMTYzOSAxMDU2cTAgNS0xIDctNjQgMjY4LTI2OCA0MzQuNXQtNDc4IDE2Ni41cS0xNDYgMC0yODIuNS01NXQtMjQzLjUtMTU3bC0xMjkgMTI5cS0xOSAxOS00NSAxOXQtNDUtMTktMTktNDV2LTQ0OHEwLTI2IDE5LTQ1dDQ1LTE5aDQ0OHEyNiAwIDQ1IDE5dDE5IDQ1LTE5IDQ1bC0xMzcgMTM3cTcxIDY2IDE2MSAxMDJ0MTg3IDM2cTEzNCAwIDI1MC02NXQxODYtMTc5cTExLTE3IDUzLTExNyA4LTIzIDMwLTIzaDE5MnExMyAwIDIyLjUgOS41dDkuNSAyMi41em0yNS04MDB2NDQ4cTAgMjYtMTkgNDV0LTQ1IDE5aC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1IDE5LTQ1bDEzOC0xMzhxLTE0OC0xMzctMzQ5LTEzNy0xMzQgMC0yNTAgNjV0LTE4NiAxNzlxLTExIDE3LTUzIDExNy04IDIzLTMwIDIzaC0xOTlxLTEzIDAtMjIuNS05LjV0LTkuNS0yMi41di03cTY1LTI2OCAyNzAtNDM0LjV0NDgwLTE2Ni41cTE0NiAwIDI4NCA1NS41dDI0NSAxNTYuNWwxMzAtMTI5cTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi10cmFzaFxcXCI+PHRpdGxlPnRyYXNoPC90aXRsZT48cGF0aCBkPVxcXCJNNzA0IDEzNzZ2LTcwNHEwLTE0LTktMjN0LTIzLTloLTY0cS0xNCAwLTIzIDl0LTkgMjN2NzA0cTAgMTQgOSAyM3QyMyA5aDY0cTE0IDAgMjMtOXQ5LTIzem0yNTYgMHYtNzA0cTAtMTQtOS0yM3QtMjMtOWgtNjRxLTE0IDAtMjMgOXQtOSAyM3Y3MDRxMCAxNCA5IDIzdDIzIDloNjRxMTQgMCAyMy05dDktMjN6bTI1NiAwdi03MDRxMC0xNC05LTIzdC0yMy05aC02NHEtMTQgMC0yMyA5dC05IDIzdjcwNHEwIDE0IDkgMjN0MjMgOWg2NHExNCAwIDIzLTl0OS0yM3ptLTU0NC05OTJoNDQ4bC00OC0xMTdxLTctOS0xNy0xMWgtMzE3cS0xMCAyLTE3IDExem05MjggMzJ2NjRxMCAxNC05IDIzdC0yMyA5aC05NnY5NDhxMCA4My00NyAxNDMuNXQtMTEzIDYwLjVoLTgzMnEtNjYgMC0xMTMtNTguNXQtNDctMTQxLjV2LTk1MmgtOTZxLTE0IDAtMjMtOXQtOS0yM3YtNjRxMC0xNCA5LTIzdDIzLTloMzA5bDcwLTE2N3ExNS0zNyA1NC02M3Q3OS0yNmgzMjBxNDAgMCA3OSAyNnQ1NCA2M2w3MCAxNjdoMzA5cTE0IDAgMjMgOXQ5IDIzelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi11bmRvXFxcIj48dGl0bGU+dW5kbzwvdGl0bGU+PHBhdGggZD1cXFwiTTE2NjQgODk2cTAgMTU2LTYxIDI5OHQtMTY0IDI0NS0yNDUgMTY0LTI5OCA2MXEtMTcyIDAtMzI3LTcyLjV0LTI2NC0yMDQuNXEtNy0xMC02LjUtMjIuNXQ4LjUtMjAuNWwxMzctMTM4cTEwLTkgMjUtOSAxNiAyIDIzIDEyIDczIDk1IDE3OSAxNDd0MjI1IDUycTEwNCAwIDE5OC41LTQwLjV0MTYzLjUtMTA5LjUgMTA5LjUtMTYzLjUgNDAuNS0xOTguNS00MC41LTE5OC41LTEwOS41LTE2My41LTE2My41LTEwOS41LTE5OC41LTQwLjVxLTk4IDAtMTg4IDM1LjV0LTE2MCAxMDEuNWwxMzcgMTM4cTMxIDMwIDE0IDY5LTE3IDQwLTU5IDQwaC00NDhxLTI2IDAtNDUtMTl0LTE5LTQ1di00NDhxMC00MiA0MC01OSAzOS0xNyA2OSAxNGwxMzAgMTI5cTEwNy0xMDEgMjQ0LjUtMTU2LjV0Mjg0LjUtNTUuNXExNTYgMCAyOTggNjF0MjQ1IDE2NCAxNjQgMjQ1IDYxIDI5OHpcXFwiLz48L3N5bWJvbD48c3ltYm9sIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgdmlld0JveD1cXFwiMCAwIDE3OTIgMTc5MlxcXCIgaWQ9XFxcImxlcGxheWVyLWljb24tdm9sdW1lLWRvd25cXFwiPjx0aXRsZT52b2x1bWUtZG93bjwvdGl0bGU+PHBhdGggZD1cXFwiTTEwODggMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyelxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtb2ZmXFxcIj48dGl0bGU+dm9sdW1lLW9mZjwvdGl0bGU+PHBhdGggZD1cXFwiTTEyODAgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1elxcXCIvPjwvc3ltYm9sPjxzeW1ib2wgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTc5MiAxNzkyXFxcIiBpZD1cXFwibGVwbGF5ZXItaWNvbi12b2x1bWUtdXBcXFwiPjx0aXRsZT52b2x1bWUtdXA8L3RpdGxlPjxwYXRoIGQ9XFxcIk04MzIgMzUydjEwODhxMCAyNi0xOSA0NXQtNDUgMTktNDUtMTlsLTMzMy0zMzNoLTI2MnEtMjYgMC00NS0xOXQtMTktNDV2LTM4NHEwLTI2IDE5LTQ1dDQ1LTE5aDI2MmwzMzMtMzMzcTE5LTE5IDQ1LTE5dDQ1IDE5IDE5IDQ1em0zODQgNTQ0cTAgNzYtNDIuNSAxNDEuNXQtMTEyLjUgOTMuNXEtMTAgNS0yNSA1LTI2IDAtNDUtMTguNXQtMTktNDUuNXEwLTIxIDEyLTM1LjV0MjktMjUgMzQtMjMgMjktMzUuNSAxMi01Ny0xMi01Ny0yOS0zNS41LTM0LTIzLTI5LTI1LTEyLTM1LjVxMC0yNyAxOS00NS41dDQ1LTE4LjVxMTUgMCAyNSA1IDcwIDI3IDExMi41IDkzdDQyLjUgMTQyem0yNTYgMHEwIDE1My04NSAyODIuNXQtMjI1IDE4OC41cS0xMyA1LTI1IDUtMjcgMC00Ni0xOXQtMTktNDVxMC0zOSAzOS01OSA1Ni0yOSA3Ni00NCA3NC01NCAxMTUuNS0xMzUuNXQ0MS41LTE3My41LTQxLjUtMTczLjUtMTE1LjUtMTM1LjVxLTIwLTE1LTc2LTQ0LTM5LTIwLTM5LTU5IDAtMjYgMTktNDV0NDUtMTlxMTMgMCAyNiA1IDE0MCA1OSAyMjUgMTg4LjV0ODUgMjgyLjV6bTI1NiAwcTAgMjMwLTEyNyA0MjIuNXQtMzM4IDI4My41cS0xMyA1LTI2IDUtMjYgMC00NS0xOXQtMTktNDVxMC0zNiAzOS01OSA3LTQgMjIuNS0xMC41dDIyLjUtMTAuNXE0Ni0yNSA4Mi01MSAxMjMtOTEgMTkyLTIyN3Q2OS0yODktNjktMjg5LTE5Mi0yMjdxLTM2LTI2LTgyLTUxLTctNC0yMi41LTEwLjV0LTIyLjUtMTAuNXEtMzktMjMtMzktNTkgMC0yNiAxOS00NXQ0NS0xOXExMyAwIDI2IDUgMjExIDkxIDMzOCAyODMuNXQxMjcgNDIyLjV6XFxcIi8+PC9zeW1ib2w+PC9zdmc+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3ZnL3N2Zy1kZWZzLnN2Z1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFsncmF0ZScsICdkaXZpZGVyJywgJ2JhY2t3YXJkJywgJ2RpdmlkZXInLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAnZGl2aWRlcicsICd0aW1lbGluZScsICdkaXZpZGVyJywgJ3JhdGUnLCAnZGl2aWRlcicsICdiYWNrd2FyZCcsICdkaXZpZGVyJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Rvd25sb2FkJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvdnBzLmpzIiwiY29uc3QgY29udHJvbHMgPSBbJ3BsYXknLCAndm9sdW1lJywgJ2RpdmlkZXInLCAndGltZWxpbmUnLCAnZGl2aWRlcicsICdyYXRlJywgJ2Rvd25sb2FkJywgJ2Z1bGxzY3JlZW4nXTtcblxuZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0Y29udHJvbHMsXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0Y29udHJvbHNcblx0XHRcdF1cblx0XHR9XG5cdH0sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvcHJlc2V0cy9zaW1wbGUuanMiLCJleHBvcnQgY29uc3QgcHJlc2V0ID0ge1xuXHRvcHRpb25zIDoge1xuXHRcdHdpZHRoIDogJzEwMCUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZG93bmxvYWQnLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XHRbXVxuXHRcdFx0XSxcblx0XHRcdGZ1bGxzY3JlZW4gOiBbXG5cdFx0XHRcdFsncGxheScsICd2b2x1bWUnLCAndGltZWxpbmUnLCAncmF0ZScsICdzb3VyY2UnLCAnZGl2aWRlcicsICdkb3dubG9hZCcsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRdXG5cdFx0fVxuXHR9LFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3ByZXNldHMvc21zLmpzIiwiZXhwb3J0IGNvbnN0IHByZXNldCA9IHtcblx0b3B0aW9ucyA6IHtcblx0XHR3aWR0aCA6ICcxMDAlJyxcblx0XHRjb250cm9scyA6IHtcblx0XHRcdGNvbW1vbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ3NvdXJjZScsICdkaXZpZGVyJywgJ2Z1bGxzY3JlZW4nXSxcblx0XHRcdFx0W11cblx0XHRcdF0sXG5cdFx0XHRmdWxsc2NyZWVuIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnc291cmNlJywgJ2RpdmlkZXInLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9wcmVzZXRzL2NvbXByZXNzZWQuanMiXSwic291cmNlUm9vdCI6IiJ9
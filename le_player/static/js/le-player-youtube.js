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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(70);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),

/***/ 70:
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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODhmMWM1ZTAxNWZkYmVkYjhlMjE/MTFiMioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiPzU3YWEqIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9wbHVnaW5zL2xlLXBsYXllci15b3V0dWJlLmpzIl0sIm5hbWVzIjpbIlBsYXllciIsIndpbmRvdyIsImxlUGxheWVyIiwiJCIsIkVudGl0eSIsImdldENvbXBvbmVudCIsInRyYWNrUHJvdmlkZSIsInRyYWNrIiwibGFuZ3VhZ2VDb2RlIiwibGFuZ3VhZ2UiLCJ0aXRsZSIsInRvb2x0aXAiLCJsYW5ndWFnZU5hbWUiLCJuYW1lIiwiWW91dHViZSIsInBsYXllciIsIm9wdGlvbnMiLCJfcGF1c2VkIiwic3JjIiwiYWRkQ2xhc3MiLCJlbGVtZW50Iiwib24iLCJvbkNsaWNrIiwiYmluZCIsIm9uRGJsY2xpY2siLCJldmVudCIsInRyaWdnZXIiLCJpbmRleCIsImF2YWlsYWJsZVJhdGVzIiwiaW5kZXhPZiIsInJhdGUiLCJsZW5ndGgiLCJhcnIiLCJ5dFBsYXllciIsImdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMiLCJzcGxpY2UiLCJtYXAiLCJRVUFMSVRZX05BTUVTIiwiaXRlbSIsInBsYXlWaWRlbyIsInBhdXNlVmlkZW8iLCJhcGlMb2FkZWQiLCJ0aGVuIiwiaW5pdFlUUGxheWVyIiwiYXR0ciIsInlvdXR1YmVFbGVtZW50IiwiYmxvY2tlciIsImFwcGVuZCIsIl9pbml0UHJvbWlzZSIsIkRlZmVycmVkIiwiZ2xvYmFsT3B0aW9ucyIsInl0T3B0aW9ucyIsImF1dG9wbGF5IiwibG9vcCIsIml2X2xvYWRfcG9saWN5IiwiY29udHJvbHMiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiY2NfbG9hZF9wb2xpY3kiLCJkaXNhYmxla2IiLCJmcyIsInN0YXJ0IiwidGltZSIsIllUIiwicmVhZHkiLCJjdHgiLCJyZXBsYWNlV2l0aCIsInZpZGVvSWQiLCJ3aWR0aCIsInBsYXllclZhcnMiLCJldmVudHMiLCJvblJlYWR5Iiwib25ZVFBSZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJvbllUUFN0YXRlQ2hhbmdlIiwib25QbGF5YmFja1JhdGVDaGFuZ2UiLCJvbllUUFJhdGVDaGFuZ2UiLCJvblBsYXliYWNrUXVhbGl0eUNoYW5nZSIsIm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlIiwicHJvbWlzZSIsImdldEF2YWlsYWJsZVBsYXliYWNrUmF0ZXMiLCJyYXRlTWluIiwicmF0ZU1heCIsImUiLCJyZXNvbHZlIiwiX2luaXRSYXRlIiwiX2luaXRWb2x1bWUiLCJzZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzIiwiZGF0YSIsIl9wbGF5YmFja1F1YWxpdHkiLCJmaW5kIiwic3RhdGUiLCJsYXN0U3RhdGUiLCJQbGF5ZXJTdGF0ZSIsIlVOU1RBUlRFRCIsIkVOREVEIiwiUExBWUlORyIsInNldFBsYXliYWNrUXVhbGl0eSIsIl9uZXh0UGxheWJhY2tRdWFsaXR5IiwiaXNTZWVraW5nIiwib25TZWVrZWQiLCJsb2FkQ2FwdGlvbnMiLCJlbWl0VGltZXVwZGF0ZSIsIlBBVVNFRCIsIkJVRkZFUklORyIsImNsZWFySW50ZXJ2YWwiLCJzZWVraW5nSW50ZXJ2YWwiLCJ3YXNQYXVzZWRCZWZvcmVTZWVrIiwicGF1c2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRUaW1lIiwidGltZUJlZm9yZVNlZWsiLCJlbXB0eVRyYWNrbGlzdCIsInN1YnRpdGxlcyIsIl9sb2FkQ2FwdGlvbnNXYXRjaGVyIiwiX3RyYWNrc0Rpc2FibGUiLCJjaGVja0NhcHRpb25zRXhpc3QiLCJsb2FkTW9kdWxlIiwiZ2V0T3B0aW9ucyIsImVycm9yIiwidXJsIiwiaWQiLCJwYXJzZVVybCIsInBvc3RlciIsImdldEN1cnJlbnRUaW1lIiwidmFsdWUiLCJwYXVzZWQiLCJkdXJhdGlvbiIsInNlZWtUbyIsImdldER1cmF0aW9uIiwiTmFOIiwiZ2V0UGxheWJhY2tSYXRlIiwic2V0UGxheWJhY2tSYXRlIiwibXV0ZSIsInVuTXV0ZSIsInNldFRpbWVvdXQiLCJpc011dGVkIiwiZ2V0T3B0aW9uIiwiX3RyYWNrIiwidW5kZWZpbmVkIiwidW5sb2FkTW9kdWxlIiwic2V0T3B0aW9uIiwic3RhdHVzIiwiZ2V0UGxheWVyU3RhdGUiLCJDVUVEIiwiZ2V0UGxheWJhY2tRdWFsaXR5IiwiZ2V0Vm9sdW1lIiwic2V0Vm9sdW1lIiwicmVzdWx0IiwicmVnZXgiLCJVUkxfUkVHRVgiLCJtYXRjaCIsInRpbnkiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwiaGQ3MjAiLCJoZDEwODAiLCJoaWdocmVzIiwiYXV0byIsIl9sb2FkZWQiLCJnZXRTY3JpcHQiLCJyZWdpc3RlckNvbXBvbmVudCIsInByZXNldCIsImVudGl0eSIsImNvbW1vbiIsImZ1bGxzY3JlZW4iLCJwbHVnaW4iLCJwbHVnaW5PcHRpb25zIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxvQjs7Ozs7OztBQ0FBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxLQUFNQSxTQUFTQyxPQUFPQyxRQUFQLElBQW1CRCxPQUFPRSxDQUFQLENBQVNELFFBQTNDO0FBQ0EsS0FBTUUsU0FBU0osT0FBT0ssWUFBUCxDQUFvQixRQUFwQixDQUFmOztBQUVBLEtBQU1DLGVBQWUsU0FBZkEsWUFBZSxRQUFTO0FBQzdCLE1BQUdDLFNBQVMsSUFBVCxJQUFpQkEsTUFBTUMsWUFBTixJQUFzQixJQUExQyxFQUFnRDtBQUMvQyxVQUFPRCxLQUFQO0FBQ0E7QUFDRCxTQUFPO0FBQ05FLGFBQVdGLE1BQU1DLFlBRFg7QUFFTkUsVUFBUUgsTUFBTUMsWUFGUjtBQUdO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WUFBL0YsQ0FEWTtBQUxIO0FBRkY7QUFEYyxFQUF6Qjs7QUFlQXZLLFFBQU93SyxNQUFQLENBQWMsU0FBZCxFQUF5QixVQUFTQyxhQUFULEVBQXdCOztBQUVoRDtBQUNBM0osVUFBUTJCLFNBQVI7QUFDQSxFQUpELEUiLCJmaWxlIjoibGUtcGxheWVyLXlvdXR1YmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4OGYxYzVlMDE1ZmRiZWRiOGUyMSIsIm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIiRcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IFBsYXllciA9IHdpbmRvdy5sZVBsYXllciB8fCB3aW5kb3cuJC5sZVBsYXllcjtcbmNvbnN0IEVudGl0eSA9IFBsYXllci5nZXRDb21wb25lbnQoJ0VudGl0eScpO1xuXG5jb25zdCB0cmFja1Byb3ZpZGUgPSB0cmFjayA9PiB7XG5cdGlmKHRyYWNrID09IG51bGwgfHwgdHJhY2subGFuZ3VhZ2VDb2RlID09IG51bGwpIHtcblx0XHRyZXR1cm4gdHJhY2tcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGxhbmd1YWdlIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHRcdHRpdGxlIDogdHJhY2subGFuZ3VhZ2VDb2RlLFxuXHRcdHRvb2x0aXAgOiB0cmFjay5sYW5ndWFnZU5hbWUsXG5cdFx0bmFtZSA6IHRyYWNrLmxhbmd1YWdlQ29kZSxcblx0fVxufVxuXG5cbmNsYXNzIFlvdXR1YmUgZXh0ZW5kcyBFbnRpdHkge1xuXHRjb25zdHJ1Y3RvcihwbGF5ZXIsIG9wdGlvbnMpIHtcblx0XHRzdXBlcihwbGF5ZXIsIG9wdGlvbnMpO1xuXHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cblx0XHR0aGlzLnNyYyA9IHRoaXMucGxheWVyLm9wdGlvbnMuc3JjO1xuXG5cdFx0dGhpcy5wbGF5ZXIuYWRkQ2xhc3MoJ2xlcGxheWVyLS15b3V0dWJlJyk7XG5cdFx0dGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5vbkRibGNsaWNrLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0c2V0IHNyYyhzcmMpIHtcblx0XHRpZihzcmMgPT0gbnVsbCkgcmV0dXJuO1xuXHRcdGlmKHRoaXMuc3JjICYmIHRoaXMuc3JjLnVybCA9PT0gc3JjLnVybCkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgdXJsID0gc3JjLnVybCB8fCBzcmMuaWQ7XG5cblx0XHR0aGlzLnZpZGVvSWQgPSBZb3V0dWJlLnBhcnNlVXJsKHVybCk7XG5cblx0XHRpZih0aGlzLnBsYXllci5vcHRpb25zLnBvc3Rlcikge1xuXHRcdFx0dGhpcy5wb3N0ZXIgPSB0aGlzLnBsYXllci5vcHRpb25zLnBvc3RlclxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBvc3RlciA9ICdodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdGhpcy52aWRlb0lkICsgJy8wLmpwZyc7XG5cdFx0fVxuXHR9XG5cblx0b25DbGljayhldmVudCkge1xuXHRcdHRoaXMudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdG9uRGJsY2xpY2soKSB7XG5cdFx0dGhpcy50cmlnZ2VyKCdkYmxjbGljaycpO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRUaW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyPyB0aGlzLnl0UGxheWVyLmdldEN1cnJlbnRUaW1lKCkgOiAwO1xuXHR9XG5cblx0c2V0IGN1cnJlbnRUaW1lKHZhbHVlKSB7XG5cdFx0aWYodGhpcy5sYXN0U3RhdGUgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuXHRcdFx0dGhpcy50aW1lQmVmb3JlU2VlayA9IHRoaXMuY3VycmVudFRpbWU7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0dGhpcy53YXNQYXVzZWRCZWZvcmVTZWVrID0gdGhpcy5wYXVzZWQ7XG5cdFx0fVxuXG5cdFx0bGV0IHRpbWU7XG5cdFx0aWYgKHZhbHVlID49IHRoaXMuZHVyYXRpb24pIHtcblx0XHRcdHRpbWUgPSB0aGlzLmR1cmF0aW9uXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHRpbWUgPSAwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWUgPSB2YWx1ZTtcblx0XHR9XG5cblx0XHR0aGlzLmlzU2Vla2luZyA9IHRydWU7XG5cdFx0dGhpcy55dFBsYXllci5zZWVrVG8odGltZSwgdHJ1ZSk7XG5cdFx0dGhpcy5wbGF5ZXIudHJpZ2dlcigndGltZXVwZGF0ZWxvYWQnLCB7IGN1cnJlbnRUaW1lIDogdGltZSB9KTtcblxuXHRcdHRoaXMudHJpZ2dlcignc2Vla2luZycpO1xuXG5cdFx0dGhpcy5lbWl0VGltZXVwZGF0ZSgpO1xuXHR9XG5cblx0Z2V0IGR1cmF0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyICYmIHRoaXMueXRQbGF5ZXIuZ2V0RHVyYXRpb24gPyB0aGlzLnl0UGxheWVyLmdldER1cmF0aW9uKCkgOiBOYU47XG5cdH1cblxuXHRnZXQgcGF1c2VkKCkge1xuXHRcdHJldHVybiAodGhpcy55dFBsYXllcikgP1xuXHRcdFx0KHRoaXMubGFzdFN0YXRlICE9PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HICYmIHRoaXMubGFzdFN0YXRlICE9PSBZVC5QbGF5ZXJTdGF0ZS5CVUZGRVJJTkcpXG5cdFx0XHQ6IHRydWU7XG5cblx0fVxuXG5cblx0Z2V0IHJhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMueXRQbGF5ZXIuZ2V0UGxheWJhY2tSYXRlKCk7XG5cdH1cblxuXHRzZXQgcmF0ZSh2YWx1ZSkge1xuXHRcdHN1cGVyLnJhdGUgPSB2YWx1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFBsYXliYWNrUmF0ZSh2YWx1ZSk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdH1cblxuXHRzZXQgbXV0ZWQodmFsdWUpIHtcblx0XHRpZih2YWx1ZSkge1xuXHRcdFx0dGhpcy55dFBsYXllci5tdXRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIudW5NdXRlKCk7XG5cdFx0fVxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdH0sIDUwKTtcblx0fVxuXG5cdGdldCBtdXRlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy55dFBsYXllci5pc011dGVkKCk7XG5cdH1cblxuXHRnZXQgc3VidGl0bGVzKCkge1xuXHRcdHJldHVybiB0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpXG5cdFx0XHQ/ICh0aGlzLnl0UGxheWVyLmdldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2tsaXN0JykgfHwgW10pLm1hcCh0cmFja1Byb3ZpZGUpXG5cdFx0XHQ6IFtdXG5cdH1cblxuXHRnZXQgdHJhY2soKSB7XG5cdFx0aWYodGhpcy5fdHJhY2sgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpKSB7XG5cdFx0XHRyZXR1cm4gdHJhY2tQcm92aWRlKHRoaXMueXRQbGF5ZXIuZ2V0T3B0aW9uKCdjYXB0aW9ucycsICd0cmFjaycpKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdHJhY2s7XG5cdFx0fVxuXHR9XG5cblx0c2V0IHRyYWNrKHZhbHVlKSB7XG5cdFx0dGhpcy5fdHJhY2sgPSB2YWx1ZTtcblx0XHRpZih2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fdHJhY2tzRGlzYWJsZSA9IHRydWU7XG5cdFx0XHQvKiBEaXNhYmxlIGNhcHRpb25zICovXG5cdFx0XHR0aGlzLnl0UGxheWVyLnVubG9hZE1vZHVsZSgnY2FwdGlvbnMnKTtcblxuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy55dFBsYXllclxuXHRcdFx0LnNldE9wdGlvbignY2FwdGlvbnMnLCAndHJhY2snLCB7IGxhbmd1YWdlQ29kZSA6IHZhbHVlLm5hbWUgfSlcblx0XHRcdC5zZXRPcHRpb24oJ2NhcHRpb25zJywgJ3JlbG9hZCcsIHRydWUpO1xuXG5cdFx0aWYodGhpcy5fdHJhY2tzRGlzYWJsZSkge1xuXHRcdFx0LyogRW5hYmxlIGNhcHRpb25zICovXG5cdFx0XHR0aGlzLnl0UGxheWVyLmxvYWRNb2R1bGUoJ2NhcHRpb25zJyk7XG5cdFx0fVxuXHRcdHRoaXMudHJpZ2dlcigndHJhY2tzY2hhbmdlJyk7XG5cdH1cblxuXHQvKipcblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRpbmNyZWFzZVJhdGUoKSB7XG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzLmluZGV4T2YodGhpcy5yYXRlKTtcblx0XHRpZihpbmRleCArIDEgPj0gdGhpcy5hdmFpbGFibGVSYXRlcy5sZW5ndGgpIHJldHVybjtcblx0XHRyZXR1cm4gdGhpcy5yYXRlID0gdGhpcy5hdmFpbGFibGVSYXRlc1tpbmRleCArIDFdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0ZGVjcmVhc2VSYXRlKCkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5hdmFpbGFibGVSYXRlcy5pbmRleE9mKHRoaXMucmF0ZSk7XG5cdFx0aWYoaW5kZXggLSAxIDwgMCkgcmV0dXJuO1xuXHRcdHJldHVybiB0aGlzLnJhdGUgPSB0aGlzLmF2YWlsYWJsZVJhdGVzW2luZGV4IC0gMV07XG5cdH1cblxuXHRnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkge1xuXHRcdGNvbnN0IGFyciA9IHRoaXMueXRQbGF5ZXIuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xuXHRcdGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoJ2F1dG8nKTtcblxuXHRcdGlmKGluZGV4ID4gLTEpIHtcblx0XHRcdGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBhcnIubWFwKGl0ZW0gPT4gKHtcblx0XHRcdHRpdGxlIDogWW91dHViZS5RVUFMSVRZX05BTUVTW2l0ZW1dIHx8IGl0ZW0sXG5cdFx0XHRuYW1lIDogaXRlbVxuXHRcdH0pKTtcblx0fVxuXG5cblx0c2V0IHBsYXliYWNrUXVhbGl0eShuYW1lKSB7XG5cdFx0c3VwZXIucGxheWJhY2tRdWFsaXR5ID0gbmFtZTtcblx0XHRjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZTtcblx0XHRjb25zdCBzdGF0dXMgPSB0aGlzLnl0UGxheWVyLmdldFBsYXllclN0YXRlKCk7XG5cblx0XHRpZihzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLlVOU1RBUlRFRCAmJiBzdGF0dXMgIT09IFlULlBsYXllclN0YXRlLkNVRUQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdH1cblxuXHRcdHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkgPSBuYW1lO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KG5hbWUpO1xuXHRcdHRoaXMueXRQbGF5ZXIuc2Vla1RvKHRpbWUpO1xuXG5cdFx0aWYoc3RhdHVzICE9PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdHRoaXMueXRQbGF5ZXIucGxheVZpZGVvKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRnZXQgcGxheWJhY2tRdWFsaXR5KCkge1xuXHRcdGlmICh0aGlzLl9wbGF5YmFja1F1YWxpdHkgPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKClcblx0XHRcdFx0LmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHRoaXMueXRQbGF5ZXIuZ2V0UGxheWJhY2tRdWFsaXR5KCkpXG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9wbGF5YmFja1F1YWxpdHk7XG5cdH1cblxuXHRnZXQgdm9sdW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnl0UGxheWVyID8gdGhpcy55dFBsYXllci5nZXRWb2x1bWUoKSAvIDEwMC4wIDogMTtcblx0fVxuXG5cdHNldCB2b2x1bWUodmFsdWUpIHtcblx0XHRzdXBlci52b2x1bWUgPSB2YWx1ZTtcblx0XHR0aGlzLnl0UGxheWVyLnNldFZvbHVtZSh2YWx1ZSAqIDEwMCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudHJpZ2dlcigndm9sdW1lY2hhbmdlJyk7XG5cdFx0fSwgNTApXG5cblx0fVxuXG5cdHN1cHBvcnRzRnVsbFNjcmVlbigpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0dGhpcy55dFBsYXllci5wbGF5VmlkZW8oKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3BsYXknKTtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdHRoaXMueXRQbGF5ZXIucGF1c2VWaWRlbygpO1xuXHRcdHRoaXMudHJpZ2dlcigncGF1c2UnKTtcblx0fVxuXG5cblx0aW5pdCgpIHtcblx0XHRzdXBlci5pbml0KCk7XG5cdFx0cmV0dXJuIFlvdXR1YmUuYXBpTG9hZGVkKClcblx0XHRcdC50aGVuKCgpID0+IHRoaXMuaW5pdFlUUGxheWVyKCkpXG5cdH1cblxuXHRjcmVhdGVFbGVtZW50KCkge1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZS13cmFwcGVyJylcblx0XHRcdC5hdHRyKCd0YWJpbmRleCcsICcwJyk7XG5cdFx0dGhpcy55b3V0dWJlRWxlbWVudCA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZScpO1xuXHRcdHRoaXMuYmxvY2tlciA9ICQoJzxkaXYgLz4nKVxuXHRcdFx0LmFkZENsYXNzKCdsZXBsYXllcl9feW91dHViZS1ibG9ja2VyJyk7XG5cblxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRcblx0XHRcdC5hcHBlbmQodGhpcy5ibG9ja2VyKVxuXHRcdFx0LmFwcGVuZCh0aGlzLnlvdXR1YmVFbGVtZW50KTtcblx0fVxuXG5cdGluaXRZVFBsYXllcigpIHtcblx0XHR0aGlzLl9pbml0UHJvbWlzZSA9ICQuRGVmZXJyZWQoKTtcblx0XHRjb25zdCBnbG9iYWxPcHRpb25zID0gdGhpcy5wbGF5ZXIub3B0aW9ucztcblx0XHRsZXQgeXRPcHRpb25zID0ge1xuXHRcdFx0YXV0b3BsYXkgOiBnbG9iYWxPcHRpb25zLmF1dG9wbGF5ID8gMSA6IDAsXG5cdFx0XHRsb29wIDogZ2xvYmFsT3B0aW9ucy5sb29wID8gMSA6IDAsXG5cdFx0XHRpdl9sb2FkX3BvbGljeSA6IDMsXG5cdFx0XHRjb250cm9scyA6IDAsXG5cdFx0XHRtb2Rlc3RicmFuZGluZyA6IDEsXG5cdFx0XHRyZWwgOiAwLFxuXHRcdFx0c2hvd2luZm8gOiAwLFxuXHRcdFx0Y2NfbG9hZF9wb2xpY3kgOiAwLFxuXHRcdFx0ZGlzYWJsZWtiIDogMCxcblx0XHRcdGZzIDogMCxcblx0XHRcdHN0YXJ0IDogZ2xvYmFsT3B0aW9ucy50aW1lXG5cdFx0fTtcblxuXHRcdFlULnJlYWR5KCgpID0+IHtcblx0XHRcdHRoaXMub3B0aW9ucy5jdHgucmVwbGFjZVdpdGgodGhpcy5lbGVtZW50KTtcblxuXHRcdFx0dGhpcy55dFBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpcy55b3V0dWJlRWxlbWVudFswXSwge1xuXHRcdFx0XHR2aWRlb0lkIDogdGhpcy52aWRlb0lkLFxuXHRcdFx0XHR3aWR0aCA6IGdsb2JhbE9wdGlvbnMud2lkdGggfHwgJzEwMCUnLFxuXHRcdFx0XHRwbGF5ZXJWYXJzIDogeXRPcHRpb25zLFxuXHRcdFx0XHRldmVudHMgOiB7XG5cdFx0XHRcdFx0b25SZWFkeSA6IHRoaXMub25ZVFBSZWFkeS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRcdG9uU3RhdGVDaGFuZ2UgOiB0aGlzLm9uWVRQU3RhdGVDaGFuZ2UuYmluZCh0aGlzKSxcblx0XHRcdFx0XHRvblBsYXliYWNrUmF0ZUNoYW5nZSA6IHRoaXMub25ZVFBSYXRlQ2hhbmdlLmJpbmQodGhpcyksXG5cdFx0XHRcdFx0b25QbGF5YmFja1F1YWxpdHlDaGFuZ2UgOiB0aGlzLm9uWVRQUGxheWJhY2tRdWFsaXR5Q2hhbmdlLmJpbmQodGhpcylcblx0XHRcdFx0fVxuXHRcdFx0fSlcblxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuX2luaXRQcm9taXNlLnByb21pc2UoKTtcblx0fVxuXG5cblx0c2V0QXZhaWxhYmxlUGxheWJhY2tSYXRlcygpIHtcblx0XHR0aGlzLmF2YWlsYWJsZVJhdGVzID0gdGhpcy55dFBsYXllci5nZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCk7XG5cdFx0dGhpcy5yYXRlTWluID0gdGhpcy5hdmFpbGFibGVSYXRlc1swXTtcblx0XHR0aGlzLnJhdGVNYXggPSB0aGlzLmF2YWlsYWJsZVJhdGVzW3RoaXMuYXZhaWxhYmxlUmF0ZXMubGVuZ3RoIC0gMV07XG5cdH1cblxuXHRvbllUUFJlYWR5KGUpIHtcblx0XHR0aGlzLl9pbml0UHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0dGhpcy5faW5pdFJhdGUoKTtcblx0XHR0aGlzLl9pbml0Vm9sdW1lKCk7XG5cdFx0dGhpcy5zZXRBdmFpbGFibGVQbGF5YmFja1JhdGVzKCk7XG5cdH1cblxuXHRvbllUUFJhdGVDaGFuZ2UoZSkge1xuXHRcdHRoaXMudHJpZ2dlcigncmF0ZWNoYW5nZScpO1xuXHR9XG5cblx0b25ZVFBQbGF5YmFja1F1YWxpdHlDaGFuZ2UoZSkge1xuXHRcdGNvbnN0IGRhdGEgPSBlLmRhdGE7XG5cdFx0dGhpcy5fcGxheWJhY2tRdWFsaXR5ID0gdGhpcy5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCkuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZGF0YSk7XG5cdFx0dGhpcy50cmlnZ2VyKCdxdWFsaXR5Y2hhbmdlJywgdGhpcy5fcGxheWJhY2tRdWFsaXR5KTtcblx0fVxuXG5cdG9uWVRQU3RhdGVDaGFuZ2UoZSkge1xuXHRcdGNvbnN0IHN0YXRlID0gZS5kYXRhO1xuXHRcdGlmKHN0YXRlID09PSB0aGlzLmxhc3RTdGF0ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGFzdFN0YXRlID0gc3RhdGU7XG5cdFx0c3dpdGNoKHN0YXRlKSB7XG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5VTlNUQVJURUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2xvYWRzdGFydCcpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdsb2FkZWRtZXRhZGF0YScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdyYXRlY2hhbmdlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3ZvbHVtZWNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFja3NjaGFuZ2UnKTtcblx0XHRcdGlmKHRoaXMucGxheWVyLm9wdGlvbnMuYXV0b3BsYXkpIHtcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5Jyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuRU5ERUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3BhdXNlJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2VuZGVkJyk7XG5cdFx0XHRicmVhaztcblxuXHRcdGNhc2UgWVQuUGxheWVyU3RhdGUuUExBWUlORzpcblx0XHRcdHRoaXMudHJpZ2dlcigndGltZXVwZGF0ZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkdXJhdGlvbmNoYW5nZScpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdwbGF5aW5nJyk7XG5cblx0XHRcdHRoaXMueXRQbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHRoaXMuX25leHRQbGF5YmFja1F1YWxpdHkpO1xuXG5cdFx0XHRpZih0aGlzLmlzU2Vla2luZykge1xuXHRcdFx0XHR0aGlzLm9uU2Vla2VkKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubG9hZENhcHRpb25zKClcblx0XHRcdHRoaXMuZW1pdFRpbWV1cGRhdGUoKTtcblx0XHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQ6XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NhbnBsYXknKTtcblxuXHRcdFx0aWYodGhpcy5pc1NlZWtpbmcpIHtcblx0XHRcdFx0dGhpcy5vblNlZWtlZCgpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cblx0XHRjYXNlIFlULlBsYXllclN0YXRlLkJVRkZFUklORzpcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdHRoaXMucGxheWVyLnRyaWdnZXIoJ3dhaXRpbmcnKTtcblxuXHRcdFx0dGhpcy55dFBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkodGhpcy5fbmV4dFBsYXliYWNrUXVhbGl0eSk7XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHR9XG5cblx0b25TZWVrZWQoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cdFx0dGhpcy5pc1NlZWtpbmcgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLndhc1BhdXNlZEJlZm9yZVNlZWspIHtcblx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3NlZWtlZCcpO1xuXHR9XG5cblx0ZW1pdFRpbWV1cGRhdGUoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cblx0XHR0aGlzLnNlZWtpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdGlmKHRoaXMubGFzdFN0YXRlID09PSBZVC5QbGF5ZXJTdGF0ZS5QQVVTRUQpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNlZWtpbmdJbnRlcnZhbCk7XG5cdFx0XHR9IGVsc2UgaWYodGhpcy5jdXJyZW50VGltZSAhPT0gdGhpcy50aW1lQmVmb3JlU2Vlaykge1xuXHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3RpbWV1cGRhdGUnKTtcblx0XHRcdH1cblx0XHR9LCAyNTApXG5cdH1cblxuXHRsb2FkQ2FwdGlvbnMoKSB7XG5cdFx0Y29uc3QgZW1wdHlUcmFja2xpc3QgPSAoKSA9PiAodGhpcy5zdWJ0aXRsZXMgPT0gbnVsbCB8fCB0aGlzLnN1YnRpdGxlcy5sZW5ndGggPT09IDApO1xuXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9sb2FkQ2FwdGlvbnNXYXRjaGVyKTtcblx0XHRpZihcblx0XHRcdCF0aGlzLl90cmFja3NEaXNhYmxlICYmXG5cdFx0XHR0aGlzLmNoZWNrQ2FwdGlvbnNFeGlzdCgpICYmXG5cdFx0XHRlbXB0eVRyYWNrbGlzdCgpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLnl0UGxheWVyLmxvYWRNb2R1bGUoJ2NhcHRpb25zJyk7XG5cblx0XHRcdHRoaXMuX2xvYWRDYXB0aW9uc1dhdGNoZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdGlmKCFlbXB0eVRyYWNrbGlzdCgpICYmIHRoaXMuY2hlY2tDYXB0aW9uc0V4aXN0KCkpIHtcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYWNrc2NoYW5nZScpO1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fbG9hZENhcHRpb25zV2F0Y2hlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDI1MClcblx0XHR9XG5cdH1cblxuXHRjaGVja0NhcHRpb25zRXhpc3QoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLnl0UGxheWVyLmdldE9wdGlvbnMoJ2NhcHRpb25zJykgIT0gbnVsbDtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBwYXJzZVVybCh1cmwpIHtcblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHRjb25zdCByZWdleCA9IFlvdXR1YmUuVVJMX1JFR0VYO1xuXHRcdGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHJlZ2V4KTtcblx0XHRpZih1cmwubGVuZ3RoID09PSAxMSkge1xuXHRcdFx0cmVzdWx0ID0gdXJsO1xuXHRcdH0gZWxzZSBpZihtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT09IDExKSB7XG5cdFx0XHRyZXN1bHQgPSBtYXRjaFsyXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5Zb3V0dWJlLlVSTF9SRUdFWCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLztcblxuWW91dHViZS5RVUFMSVRZX05BTUVTID0ge1xuXHR0aW55IDogJzE0MHAnLFxuXHRzbWFsbCA6ICcyNDBwJyxcblx0bWVkaXVtIDogJzM2MHAnLFxuXHRsYXJnZSA6ICc0ODBwJyxcblx0aGQ3MjAgOiAnNzIwcCcsXG5cdGhkMTA4MCA6ICcxMDgwcCcsXG5cdGhpZ2hyZXMgOiAnSEQnLFxuXHRhdXRvIDogJ9CQ0LLRgtC+J1xufVxuXG5Zb3V0dWJlLmFwaUxvYWRlZCA9IGZ1bmN0aW9uKCkge1xuXHRpZih0aGlzLl9sb2FkZWQpIHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZSgpO1xuXG5cdHJldHVybiAkLmdldFNjcmlwdCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaScpXG5cdFx0LnRoZW4oKCkgPT4gdGhpcy5fbG9hZGVkID0gdHJ1ZSlcbn1cblxuUGxheWVyLnJlZ2lzdGVyQ29tcG9uZW50KCdZb3V0dWJlJywgWW91dHViZSk7XG5cblBsYXllci5wcmVzZXQoJ3lvdXR1YmUnLCB7XG5cdG9wdGlvbnMgOiB7XG5cdFx0ZW50aXR5IDogJ1lvdXR1YmUnLFxuXHRcdGNvbnRyb2xzIDoge1xuXHRcdFx0Y29tbW9uIDogW1xuXHRcdFx0XHRbJ3BsYXknLCAndm9sdW1lJywgJ3RpbWVsaW5lJywgJ3JhdGUnLCAnYmFja3dhcmQnLCAnc291cmNlJywgJ3N1YnRpdGxlJywgJ2RpdmlkZXInLCAnc2VjdGlvbicsICdmdWxsc2NyZWVuJ10sXG5cdFx0XHRcdFtdXG5cdFx0XHRdLFxuXHRcdFx0ZnVsbHNjcmVlbiA6IFtcblx0XHRcdFx0WydwbGF5JywgJ3ZvbHVtZScsICd0aW1lbGluZScsICdyYXRlJywgJ2JhY2t3YXJkJywgJ3NvdXJjZScsICdzdWJ0aXRsZScsICdkaXZpZGVyJywgJ3NlY3Rpb24nLCAnZnVsbHNjcmVlbiddLFxuXHRcdFx0XVxuXHRcdH1cblx0fSxcbn0pO1xuXG5QbGF5ZXIucGx1Z2luKCd5b3V0dWJlJywgZnVuY3Rpb24ocGx1Z2luT3B0aW9ucykge1xuXG5cdC8qIGdsb2JhbCBZVCAqL1xuXHRZb3V0dWJlLmFwaUxvYWRlZCgpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLXlvdXR1YmUuanMiXSwic291cmNlUm9vdCI6IiJ9
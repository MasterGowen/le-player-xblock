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

	module.exports = __webpack_require__(69);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = $;

/***/ }),

/***/ 69:
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODhmMWM1ZTAxNWZkYmVkYjhlMjE/MTFiMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIkXCI/NTdhYSIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvcGx1Z2lucy9sZS1wbGF5ZXItZ2EuanMiXSwibmFtZXMiOlsiUGxheWVyIiwid2luZG93IiwibGVQbGF5ZXIiLCIkIiwiZGVmYXVsdE9wdGlvbnMiLCJ2aWRlb1BsYXllZCIsInZpZGVvUGxheWVkRGVsdGEiLCJ2b2x1bWVDaGFuZ2VEZWxheSIsInJhdGVDaGFuZ2VEZWxheSIsInBsdWdpbiIsInBsdWdpbk9wdGlvbnMiLCJvcHRpb25zIiwiZXh0ZW5kIiwicGxheWVyIiwiZ2EiLCJjb25zb2xlIiwiZXJyb3IiLCJvbiIsImUiLCJkYXRhIiwiY29udHJvbCIsIm5hbWUiLCJjb2xsZWN0aW9uIiwidmlldyIsInZvbHVtZUNoYW5nZVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidmFsdWUiLCJ2b2x1bWUiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwicmF0ZUNoYW5nZVRpbWVvdXQiLCJyYXRlIiwicGxheWVkRXZlbnRzU2VudCIsInBlcmNlbnQiLCJ2aWRlbyIsInBsYXllZFBlcmNlbnRhZ2UiLCJkZWx0YSIsImZvckVhY2giLCJpdGVtIiwiTWF0aCIsImFicyIsImxvYWRRdWFsaXR5IiwicGxheWJhY2tRdWFsaXR5IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLG9COzs7Ozs7O0FDQUE7O0FBRUE7Ozs7OztBQUVBLEtBQU1BLFNB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QURELEVBRUMsT0FGRCxFQUdDLHFCQUhELEVBSUl5QixPQUFPRixLQUpYLFNBSW9CRSxJQUpwQjtBQU1BTixzQkFBaUJNLElBQWpCLElBQXlCLElBQXpCO0FBRUE7QUFDRCxJQWREO0FBZUEsR0FsQkQ7O0FBcUJBO0FBQ0EsTUFBSUcsY0FBYyxLQUFsQjtBQUNBN0IsU0FBT0ksRUFBUCxDQUFVLGVBQVYsRUFBMkIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3RDLE9BQUcsQ0FBQ3dCLFdBQUosRUFBaUI7QUFDaEJBLGtCQUFjLElBQWQ7QUFDQTtBQUNBOztBQUVELE9BQUc3QixPQUFPc0IsS0FBUCxDQUFhUSxlQUFiLElBQWdDLElBQW5DLEVBQXlDO0FBQ3hDMUMsV0FBT2EsRUFBUCxDQUNDLE1BREQsRUFFQyxPQUZELEVBR0MsdUJBSEQsRUFJQ0QsT0FBT3NCLEtBQVAsQ0FBYVEsZUFBYixDQUE2QkMsS0FKOUI7QUFNQTtBQUNELEdBZEQ7QUFnQkEsRUFwSEQsRSIsImZpbGUiOiJsZS1wbGF5ZXItZ2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4OGYxYzVlMDE1ZmRiZWRiOGUyMSIsIm1vZHVsZS5leHBvcnRzID0gJDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIiRcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IFBsYXllciA9IHdpbmRvdy5sZVBsYXllciB8fCB3aW5kb3cuJC5sZVBsYXllcjtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuXHR2aWRlb1BsYXllZCA6IFsyNSwgNTAsIDEwMF0sXG5cdHZpZGVvUGxheWVkRGVsdGEgOiA1LFxuXHR2b2x1bWVDaGFuZ2VEZWxheSA6IDEwMDAsXG5cdHJhdGVDaGFuZ2VEZWxheSA6IDIwMDBcbn1cblxuUGxheWVyLnBsdWdpbignZ2EnLCBmdW5jdGlvbihwbHVnaW5PcHRpb25zKSB7XG5cdGNvbnN0IG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIHBsdWdpbk9wdGlvbnMpO1xuXHRjb25zdCBwbGF5ZXIgPSB0aGlzO1xuXG5cdGlmICghd2luZG93LmdhKSB7XG5cdFx0Y29uc29sZS5lcnJvcignR29vZ2xlIEFuYWx5dGljcyBkb2VzIG5vdCBleGlzdCcpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBsYXllci5vbignZmlyc3RwbGF5JywgKGUpID0+IHtcblx0XHR3aW5kb3cuZ2EoXG5cdFx0XHQnc2VuZCcsXG5cdFx0XHQnZXZlbnQnLFxuXHRcdFx0J1BsYXllciBWaWRlbyBTdGFydGVkJ1xuXHRcdClcblx0fSk7XG5cblx0cGxheWVyLm9uKCdjb250cm9sY2xpY2snLCAoZSwgZGF0YSkgPT4ge1xuXHRcdGNvbnN0IGNvbnRyb2wgPSBkYXRhLmNvbnRyb2w7XG5cdFx0Y29uc3Qge25hbWUsIGNvbGxlY3Rpb259ID0gY29udHJvbC5vcHRpb25zO1xuXHRcdGlmKG5hbWUpIHtcblx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHQnUGxheWVyIENvbnRyb2wgQ2xpY2snLFxuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRjb2xsZWN0aW9uXG5cdFx0XHQpXG5cdFx0fVxuXHR9KTtcblxuXHRwbGF5ZXIub24oJ3NlY3Rpb25zY2xpY2snLCAoZSwgZGF0YSkgPT4ge1xuXHRcdHdpbmRvdy5nYShcblx0XHRcdCdzZW5kJyxcblx0XHRcdCdldmVudCcsXG5cdFx0XHQnUGxheWVyIFNlY3Rpb25zJyxcblx0XHRcdCdDbGljaycsXG5cdFx0XHRwbGF5ZXIudmlld1xuXHRcdClcblx0fSk7XG5cblxuXHRsZXQgdm9sdW1lQ2hhbmdlVGltZW91dCA9IG51bGw7XG5cblx0cGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdGNsZWFyVGltZW91dCh2b2x1bWVDaGFuZ2VUaW1lb3V0KTtcblxuXHRcdHZvbHVtZUNoYW5nZVRpbWVvdXQgPSBzZXRUaW1lb3V0KF8gPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBkYXRhLnZvbHVtZTtcblx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHQnUGxheWVyIFZvbHVtZSBDaGFuZ2UnLFxuXHRcdFx0XHROdW1iZXIodmFsdWUpLnRvRml4ZWQoMSlcblx0XHRcdClcblxuXHRcdH0sIG9wdGlvbnMudm9sdW1lQ2hhbmdlRGVsYXkpO1xuXHR9KTtcblxuXHRsZXQgcmF0ZUNoYW5nZVRpbWVvdXQgPSBudWxsO1xuXHRwbGF5ZXIub24oJ3JhdGVjaGFuZ2UnLCAoZSwgZGF0YSkgPT4ge1xuXHRcdGNsZWFyVGltZW91dChyYXRlQ2hhbmdlVGltZW91dCk7XG5cblx0XHRyYXRlQ2hhbmdlVGltZW91dCA9IHNldFRpbWVvdXQoXyA9PiB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGRhdGEucmF0ZTtcblx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0J3NlbmQnLFxuXHRcdFx0XHQnZXZlbnQnLFxuXHRcdFx0XHQnUGxheWVyIFJhdGUgQ2hhbmdlJyxcblx0XHRcdFx0dmFsdWVcblx0XHRcdClcblxuXHRcdH0sIG9wdGlvbnMucmF0ZUNoYW5nZURlbGF5KTtcblx0fSlcblxuXG5cdGxldCBwbGF5ZWRFdmVudHNTZW50ID0ge307XG5cdHBsYXllci5vbigndGltZXVwZGF0ZScsICgpID0+IHtcblx0XHRjb25zdCBwZXJjZW50ID0gcGxheWVyLnZpZGVvLnBsYXllZFBlcmNlbnRhZ2U7XG5cdFx0Y29uc3QgZGVsdGEgPSBvcHRpb25zLnZpZGVvUGxheWVkRGVsdGE7XG5cdFx0b3B0aW9ucy52aWRlb1BsYXllZC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhcGxheWVkRXZlbnRzU2VudFtpdGVtXSAmJlxuXHRcdFx0XHRNYXRoLmFicyhwZXJjZW50IC0gaXRlbSkgPCBkZWx0YVxuXHRcdFx0KSB7XG5cdFx0XHRcdHdpbmRvdy5nYShcblx0XHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdFx0J2V2ZW50Jyxcblx0XHRcdFx0XHQnUGxheWVyIFZpZGVvIFBsYXllZCcsXG5cdFx0XHRcdFx0YCR7aXRlbSAtIGRlbHRhfS0ke2l0ZW19JWBcblx0XHRcdFx0KTtcblx0XHRcdFx0cGxheWVkRXZlbnRzU2VudFtpdGVtXSA9IHRydWU7XG5cblx0XHRcdH1cblx0XHR9KVxuXHR9KTtcblxuXG5cdC8vIEZpcnN0IHF1YWxpdHljaGFuZ2UgZmlyZWQgb24gcGxheWVyIGluaXQsIGFuZCB3ZSBkb24ndCBuZWVkIHRyYWNrIHRoaXMgdG8gR0Fcblx0bGV0IGxvYWRRdWFsaXR5ID0gZmFsc2U7XG5cdHBsYXllci5vbigncXVhbGl0eWNoYW5nZScsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZighbG9hZFF1YWxpdHkpIHtcblx0XHRcdGxvYWRRdWFsaXR5ID0gdHJ1ZTtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmKHBsYXllci52aWRlby5wbGF5YmFja1F1YWxpdHkgIT0gbnVsbCkge1xuXHRcdFx0d2luZG93LmdhKFxuXHRcdFx0XHQnc2VuZCcsXG5cdFx0XHRcdCdldmVudCcsXG5cdFx0XHRcdCdQbGF5ZXIgQ2hhbmdlIFF1YWxpdHknLFxuXHRcdFx0XHRwbGF5ZXIudmlkZW8ucGxheWJhY2tRdWFsaXR5LnRpdGxlXG5cdFx0XHQpXG5cdFx0fVxuXHR9KVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL3BsdWdpbnMvbGUtcGxheWVyLWdhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
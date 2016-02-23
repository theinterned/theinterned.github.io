module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(18);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(3);

  var _coreLocation = __webpack_require__(5);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(4);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(6);
    }, '/500': function _() {
      return __webpack_require__(7);
    }, '/about': function about() {
      return __webpack_require__(8);
    }, '/blog': function blog() {
      return __webpack_require__(9);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(10);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(11);
    }, '/': function _() {
      return __webpack_require__(12);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(13);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      { className: 'Layout' },
      children
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(3);

  var _historyLibCreateBrowserHistory = __webpack_require__(15);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(16);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(17);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'About Us'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(14);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        var year = new Date().getFullYear();
        return _react2['default'].createElement(
          'div',
          { className: 'page home_page' },
          _react2['default'].createElement(
            'h1',
            { className: 'title' },
            'Hi, I’m Ned',
            _react2['default'].createElement('br', null),
            '—',
            _react2['default'].createElement('br', null),
            'I design & build',
            _react2['default'].createElement('br', null),
            'web apps.'
          ),
          _react2['default'].createElement(
            'ul',
            { className: 'links' },
            _react2['default'].createElement(
              'li',
              { className: 'link CV' },
              _react2['default'].createElement(
                'a',
                { href: 'https://www.dropbox.com/s/3jxewz8yj4mg9tz/Ned_Schwartz_CV.pdf?dl=0' },
                'CV'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'link dribbble' },
              _react2['default'].createElement(
                'a',
                { href: 'https://dribbble.com/theinterned' },
                'Dribbble'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'link github' },
              _react2['default'].createElement(
                'a',
                { href: 'https://github.com/theinterned' },
                'Github'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'link instapaper' },
              _react2['default'].createElement(
                'a',
                { href: 'https://www.instapaper.com/p/theinterned' },
                'Instapaper'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'link linkdin' },
              _react2['default'].createElement(
                'a',
                { href: 'https://ca.linkedin.com/in/neddo' },
                'Linkedin'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'blurb' },
            _react2['default'].createElement(
              'p',
              null,
              'I’m a seasoned web developer and designer with over 15 years of experience working on high profile, heavily-trafficked websites.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Most recently, I was the lead designer and front-end developer on ',
              _react2['default'].createElement(
                'a',
                { href: 'http://getcarta.com', className: 'carta' },
                'Carta'
              ),
              ', a cloud-based social inventory and order management app. I was responsible for the design and development of Carta’s beautiful and responsive interface. Carta is a rich and non-trivial business app and I learned a great deal about balancing complexity and ease of use.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'Yes this website is very bare-bones: It\'s ',
              _react2['default'].createElement(
                'a',
                { href: 'https://github.com/theinterned/theinterned.net' },
                'under construction'
              ),
              ' like all of the web! I\'m looking for work now and wanted to get something up ASAP — ',
              _react2['default'].createElement(
                'a',
                { href: 'mailto:ned@theinterned.net?subject=let%27s%20work%20together%20to%20make%20the%20internet%20great!' },
                'Hire me!'
              )
            ),
            _react2['default'].createElement(
              'p',
              { className: 'CV_dl' },
              _react2['default'].createElement(
                'a',
                { href: 'https://www.dropbox.com/s/3jxewz8yj4mg9tz/Ned_Schwartz_CV.pdf?dl=0' },
                '↬ Here\'s my CV as a PDF'
              )
            )
          ),
          _react2['default'].createElement(
            'footer',
            { className: 'foot' },
            _react2['default'].createElement(
              'p',
              null,
              '© ',
              year,
              ' Ned Schwartz • ',
              _react2['default'].createElement(
                'a',
                { href: 'https://raw.githubusercontent.com/theinterned/theinterned.net/master/LICENSE' },
                'MIT license'
              ),
              '.'
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "\n/*\n * css colour names so that I can use Sass functions on them — Sass functions\n * don't work with named colours.\n * RGB vals taken from http://www.cssportal.com/css3-color-names/\n */\n/* Fonts */\n\nhtml { font-size: 62.5%; } /* =10px */\nbody {\n  background-color: rgb(240,248,255);\n  font-size: 1.6rem; /* =16px */\n  line-height: 2rem;\n  font-family: 'Open Sans',\"Avenir Next\",Avenir,\"Helvetica Neue\",Helvetica,sans-serif;\n  color: rgb(0,0,139);\n  max-width: 84rem;\n  margin: 0 auto;\n  padding: 2rem\n}\n@media screen and (min-width:478px) {\n\n body { padding: 4rem 6rem; }\n  }\na {\n  @include c-link();\n}\n\n* {\n  margin: 0;\n}\n* + * {\n  margin-top: 2rem;\n  margin-bottom: 0rem;\n}\n.emoji { font-weight: normal; }\n", ""]);

  // exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/*\n * css colour names so that I can use Sass functions on them — Sass functions\n * don't work with named colours.\n * RGB vals taken from http://www.cssportal.com/css3-color-names/\n */\n/* Fonts */\n\n.title {\n  font-size: 4rem;\n  line-height: 1;\n  margin: -1rem -1rem 3rem;\n  padding: 8rem 2rem 10rem;\n  font-family: serif;\n  text-align: center;\n  font-style: italic;\n  font-weight: normal;\n  border-color: rgb(255,228,225) rgb(255,228,225) rgb(176, 224, 230)rgb(176, 224, 230);\n  border-style: solid;\n  border-width: 1.5rem;\n  background-color: white\n  /* transition: box-shadow .3s, transform .3s;\n   &:hover {\n     box-shadow: 1rem 1rem $c-border;\n     transform: translate(-1rem, -1rem);\n   }\n   */\n}\n\n@media screen {\n\n  .title {}\n  }\n\n@media screen and (min-width: 321px), screen and (min-height: 569px) {\n\n  .title {/* > iphone 5 screen */\n    font-size: 5rem\n  }\n}\n\n@media screen and (min-width: 376px), screen and (min-height: 628px) {\n\n  .title {/* > iphone 6 screen */\n    padding: 10rem 2rem 12rem;\n    margin: 0 0 3rem\n  }\n}\n\n@media screen and (min-width: 415px), screen and (min-height: 737px) {\n\n  .title {/* > iphone 6+ screen */\n    font-size: 6rem;\n    padding: 18rem 2rem\n  }\n}\n.links {\n  list-style: none;\n  margin: 0 0 6rem;\n  float: left;\n  width: 100%;\n  padding: .2rem 0;\n  background-color: white;\n  border-color: rgb(176, 224, 230);\n  border-style: solid;\n  border-width: .2rem 0\n}\n@media screen and (min-width:40rem) {\n\n  .links {\n    border: 0 none;\n    padding: 0\n  }\n  }\n.link {\n  display: block;\n  margin: 0;\n  font-weight: 600;\n  letter-spacing: .15rem;\n  background-color: white;\n  text-align: center;\n  padding: 0;\n\n}\n.link a {\n  color: rgb(0,0,139);/*\n  @if $visited !== undefined {\n  }\n  @if $hover !== undefined {\n  }\n   @if $focus != \"\"{\n  }\n  @if $active {\n  }\n  */\n  text-decoration: none;\n  display: block;\n  background-color: rgb(240,248,255);\n  text-decoration: none;\n  -webkit-transition: background-color .5s .15s;\n  -o-transition: background-color .5s .15s;\n  transition: background-color .5s .15s;\n  padding: 1rem 0;\n  border-color: rgb(176, 224, 230);\n  border-style: solid;\n  border-width: .1rem 0\n}\n.link a:visited {\n  color: rgb(0,0,139)\n}\n.link a:hover {\n  color: rgb(0,0,205)\n}\n.link a:focus {\n  color: rgb(0,0,255)\n}\n.link a:active {\n  color: rgb(138,43,226)\n}\n.link a:hover {\n  background-color: white\n}\n.link:first-child a {\n  border-top-width: .2rem\n}\n.link:last-child a {\n  border-bottom-width: .2rem\n}\n@media screen and (min-width:40rem) {\n\n  .link {\n    padding: .2rem 0;\n    float: left;\n    width: calc((1/5)*100%);\n    border-color: rgb(176, 224, 230);\n    border-style: solid;\n    border-width: .2rem 0;\n    -webkit-transition: padding .2s, margin .2s, background-color .3s .1s;\n    -o-transition: padding .2s, margin .2s, background-color .3s .1s;\n    transition: padding .2s, margin .2s, background-color .3s .1s\n  }\n\n  .link:hover {\n    background-color: rgb(176, 224, 230);\n    padding: .6rem 0;\n    margin: -.4rem 0\n  }\n  }\n@media screen and (min-width:40rem) {\n\n  .link a {\n    border-width: .2rem 0\n  }\n    }\n.blurb {\n  display: none;\n  clear: left;\n  margin: 0 auto;\n  padding: 5rem 0;\n  width: 80%;\n  max-width: 36em\n}\n.blurb > * {}\n.blurb > *:nth-child(1) {\n  opacity: $(1 - (i*opacity));\n  -webkit-transition: opacity .2s $((i*.75 - 1) * duration);\n  -o-transition: opacity .2s $((i*.75 - 1) * duration);\n  transition: opacity .2s $((i*.75 - 1) * duration)\n}\n.blurb > *:nth-child(2) {\n  opacity: $(1 - (i*opacity));\n  -webkit-transition: opacity .2s $((i*.75 - 1) * duration);\n  -o-transition: opacity .2s $((i*.75 - 1) * duration);\n  transition: opacity .2s $((i*.75 - 1) * duration)\n}\n.blurb > *:nth-child(3) {\n  opacity: $(1 - (i*opacity));\n  -webkit-transition: opacity .2s $((i*.75 - 1) * duration);\n  -o-transition: opacity .2s $((i*.75 - 1) * duration);\n  transition: opacity .2s $((i*.75 - 1) * duration)\n}\n.blurb > *:nth-child(4) {\n  opacity: $(1 - (i*opacity));\n  -webkit-transition: opacity .2s $((i*.75 - 1) * duration);\n  -o-transition: opacity .2s $((i*.75 - 1) * duration);\n  transition: opacity .2s $((i*.75 - 1) * duration)\n}\n.blurb:hover > * {\n  opacity: 1\n}\n.blurb p:first-child:first-line {\n  font-weight: bold\n}\n.CV_dl {\n  font-weight: bold;\n}\n.CV_dl a {\n  text-decoration: none;\n}\n.foot {\n  text-align: center;\n  clear: left;\n  opacity: .2;\n  -webkit-transition: opacity 0.15s;\n  -o-transition: opacity 0.15s;\n  transition: opacity 0.15s\n}\n.foot:hover {\n  opacity: 1\n}\n", ""]);

  // exports


/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);
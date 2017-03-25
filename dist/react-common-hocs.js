(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('recompose')) :
	typeof define === 'function' && define.amd ? define(['exports', 'recompose'], factory) :
	(factory((global.reactCommonHocs = global.reactCommonHocs || {}),global.recompose));
}(this, (function (exports,recompose) { 'use strict';

var loadable = (function (options) {
  return recompose.branch(function (_ref) {
    var status = _ref.status;
    return ['init', 'pending'].includes(status);
  }, recompose.renderComponent(function (props) {
    return options.loaderComponent ? options.loaderComponent(props) : null;
  }));
});

var errorable = (function (options) {
  return recompose.branch(function (_ref) {
    var status = _ref.status;
    return ['failure'].includes(status);
  }, recompose.renderComponent(function (props) {
    return options.errorComponent ? options.errorComponent(props) : null;
  }));
});

var index = (function (_ref) {
  var errorComponent = _ref.errorComponent,
      loaderComponent = _ref.loaderComponent;
  return recompose.compose(errorable({ errorComponent: errorComponent }), loadable({ loaderComponent: loaderComponent }));
});

var index$1 = recompose.compose(recompose.withState('toggled', 'setToggle', false), recompose.withHandlers({
  toggleOn: function toggleOn(_ref) {
    var setToggle = _ref.setToggle;
    return function () {
      return setToggle(true);
    };
  },
  toggleOff: function toggleOff(_ref2) {
    var setToggle = _ref2.setToggle;
    return function () {
      return setToggle(false);
    };
  }
}));

exports.async = index;
exports.errorable = errorable;
exports.loadable = loadable;
exports.toggleable = index$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-common-hocs.js.map

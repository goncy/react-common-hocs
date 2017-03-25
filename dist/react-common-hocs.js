(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('recompose')) :
	typeof define === 'function' && define.amd ? define(['exports', 'recompose'], factory) :
	(factory((global.reactCommonHocs = global.reactCommonHocs || {}),global.recompose));
}(this, (function (exports,recompose) { 'use strict';

var loadable = recompose.branch(function (_ref) {
  var status = _ref.status;
  return ['init', 'pending'].includes(status);
}, recompose.renderComponent(function (props) {
  return props.loaderComponent ? props.loaderComponent(props) : null;
}));

var errorable = recompose.branch(function (_ref) {
  var status = _ref.status;
  return ['failure'].includes(status);
}, recompose.renderComponent(function (props) {
  return props.errorComponent ? props.errorComponent(props) : null;
}));

var index = recompose.compose(errorable, loadable);

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

import { branch, compose, renderComponent, withHandlers, withState } from 'recompose';

var loadable = branch(function (_ref) {
  var status = _ref.status;
  return ['init', 'pending'].includes(status);
}, renderComponent(function (props) {
  return props.loaderComponent ? props.loaderComponent(props) : null;
}));

var errorable = branch(function (_ref) {
  var status = _ref.status;
  return ['failure'].includes(status);
}, renderComponent(function (props) {
  return props.errorComponent ? props.errorComponent(props) : null;
}));

var index = compose(errorable, loadable);

var index$1 = compose(withState('toggled', 'setToggle', false), withHandlers({
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

export { index as async, errorable, loadable, index$1 as toggleable };
//# sourceMappingURL=react-common-hocs.mjs.map

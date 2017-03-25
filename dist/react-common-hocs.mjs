import { branch, compose, renderComponent, withHandlers, withState } from 'recompose';

var loadable = (function (options) {
  console.log(options);
  return branch(function (_ref) {
    var status = _ref.status;
    return ['init', 'pending'].includes(status);
  }, renderComponent(function (props) {
    return options.loaderComponent ? options.loaderComponent(props) : null;
  }));
});

var errorable = branch(function (_ref) {
  var status = _ref.status;
  return ['failure'].includes(status);
}, renderComponent(function (props) {
  return props.errorComponent ? props.errorComponent(props) : null;
}));

var index = (function (_ref) {
  var errorComponent = _ref.errorComponent,
      loaderComponent = _ref.loaderComponent;
  return compose(errorable, loadable({ loaderComponent: loaderComponent }));
});

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

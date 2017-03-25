import {compose, withHandlers, withState} from 'recompose'

export default compose(
  withState(
    'toggled',
    'setToggle',
    false
  ),
  withHandlers({
    toggleOn: ({setToggle}) => () => setToggle(true),
    toggleOff: ({setToggle}) => () => setToggle(false)
  })
)

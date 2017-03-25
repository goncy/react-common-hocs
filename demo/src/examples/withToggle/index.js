import React from 'react'
import {compose} from 'recompose'

import {withToggle} from '../../../../dist/react-common-hocs'

const Dummy = compose(
  withToggle
)(({toggled, toggleOn, toggleOff}) => (
  <div>
    <p>Toggled: {toggled ? 'yes' : 'no'}</p>
    <div>
      <button onClick={toggleOn}>Toggle on</button>
      <button onClick={toggleOff}>Toggle off</button>
    </div>
  </div>
))

const WithToggleExample = () => (
  <div className='example-container'>
    <h2><code>withToggle</code> HOC</h2>
    <blockquote>Adds a <b>toggled</b> boolean prop with two handlers, <b>toggleOff</b> and <b>toggleOn</b></blockquote>
    <hr/>
    <Dummy />
  </div>
)

export default WithToggleExample

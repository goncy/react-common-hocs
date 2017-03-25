import React from 'react'
import {lifecycle, compose, withState, pure, defaultProps} from 'recompose'

import {errorable} from '../../../../dist/react-common-hocs'

const props = [
  {
    name: 'status',
    type: 'string',
    required: 'true',
    description: 'loading status'
  },
  {
    name: 'error',
    type: 'string',
    required: 'false',
    description: 'error'
  },
  {
    name: 'errorComponent',
    type: 'node',
    required: 'false',
    description: 'error component'
  }
]

const Dummy = compose(
  withState(
    'status',
    'changeState',
    'init'
  ),
  defaultProps({
    error: 'Uh oh!, something failed'
  }),
  lifecycle({
    componentDidMount () {
      setTimeout(() => {
        this.props.changeState('failure')
      }, 5000)
    }
  }),
  errorable,
  pure
)(() => (
  <div>
    <p>Im loaded correctly</p>
  </div>
))

const ErrorableExample = () => (
  <div className='example-container'>
    <h2><code>errorable</code> HOC</h2>
    <table>
      <thead>
        <tr>
          <th>prop</th>
          <th>type</th>
          <th>required</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop, key) => (
          <tr key={key}>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td>{prop.required}</td>
            <td>{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <blockquote>Takes the <b>status</b> prop, if its <code>failure</code> displays the <b>errorComponent</b></blockquote>
    <hr/>
    <Dummy errorComponent={({error}) => <div>{error}</div>}/>
  </div>
)

export default ErrorableExample

import React from 'react'
import {lifecycle, compose, withState, pure} from 'recompose'

import {async} from '../../../../dist/react-common-hocs'

const props = [
  {
    name: 'status',
    type: 'string',
    required: 'true',
    description: 'loading status'
  },
  {
    name: 'errorComponent',
    type: 'node',
    required: 'false',
    description: 'error component'
  },
  {
    name: 'loaderComponent',
    type: 'node',
    required: 'false',
    description: 'loader component'
  }
]

const Dummy = compose(
  withState(
    'status',
    'changeState',
    'init'
  ),
  lifecycle({
    componentDidMount () {
      setTimeout(() => {
        this.props.changeState('success')
      }, 5000)
    }
  }),
  async,
  pure
)(() => (
  <div>
    <p>Hello dog</p>
  </div>
))

const AsyncExample = () => (
  <div className='example-container'>
    <h2><code>async</code> HOC</h2>
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
    <blockquote>Takes the <b>status</b> prop, if its <code>init</code> or <code>pending</code>, shows the <b>loaderComponent</b>, if its <code>failure</code>, shows the <b>errorComponent</b></blockquote>
    <hr/>
    <Dummy
      errorComponent={({error}) => <div>{error}</div>}
      loaderComponent={() => <div>Loading</div>}
    />
  </div>
)

export default AsyncExample

import React from 'react';

import AsyncExample from './examples/async'
import LoadableExample from './examples/loadable'
import ErrorableExample from './examples/errorable'
import WithToggleExample from './examples/withToggle'

import './App.css';

const App = ({loaded}) => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>React HOCs</h2>
      </div>
      <WithToggleExample />
      <LoadableExample />
      <ErrorableExample />
      <AsyncExample />
    </div>
  );
}

export default App;

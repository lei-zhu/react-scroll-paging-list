import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import 'normalize.css';

const render = () => {
  ReactDOM.render(<App />, document.querySelector('#root'));
};

render();

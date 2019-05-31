import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import modules from './modules';

const store = createStore(modules);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
);
serviceWorker.unregister();

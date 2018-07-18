import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Perro from './Perro/Perro'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

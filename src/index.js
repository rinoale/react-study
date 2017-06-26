import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hello from './components/Hello';
import GroceryList from './components/GroceryList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<GroceryList />, document.getElementById('root'));
registerServiceWorker();

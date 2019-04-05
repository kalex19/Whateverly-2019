import './Styles/normalize.css';
import './Styles/index.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App/App.js';

ReactDom.render(<App />,
document.getElementById('root'));

//May have to change App to Data depending on parent component

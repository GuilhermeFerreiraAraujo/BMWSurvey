import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
<link href="https://surveyjs.azureedge.net/1.0.24/survey.css" type="text/css" rel="stylesheet"/>
      
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

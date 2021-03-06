import React from 'react';
import ReactDOM from 'react-dom';

// Put Semantic UI  above css to override css styles
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import App from './app/layout/App.js';
import reportWebVitals from './reportWebVitals';



const rootElement = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>, rootElement
  )
}

if (module.hot) {
  module.hot.accept('./app/layout/App.js', () => {
    setTimeout(render);
  })
}

render();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 주석처리하지 않으면 콘솔.log 가 2개씩나옴
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

//예제 249 페이지
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.cucers';ss';
// import App from './App';
// import {createStore} from 'redux';
// import reducers from './red

// const store = createStore(reducers);
// const listener = ()=> {
//   ReactDOM.render(
//     <App store={store}/>,
//     document.getElementById('root')
//   );
// };
// store .subscribe(listener);
// listener();
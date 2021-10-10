import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from './redux/store';
const App = React.lazy(() => import('./App')); // Lazy-loaded

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');
setTimeout(() => 
  ReactDOM.render(
    <React.StrictMode>    
      <Provider store={store}>
        <Suspense fallback={<div className="loader"></div>}>
          <App
            hideLoader={hideLoader}
            showLoader={showLoader} 
          />
        </Suspense>      
      </Provider>    
    </React.StrictMode>,
    document.getElementById('root')
  ), 1000);


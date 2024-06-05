import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import your combined reducers
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';


const store = configureStore({
  reducer: rootReducer, // Pass your combined reducers here
  // Additional store configuration options if needed
});

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

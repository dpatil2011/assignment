import React from 'react';
import logo from './../app/logo.svg';
import './../assets/css/App.css';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './../common/store';
import Router from './../common/route/router';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'



function  App() {
  return (
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  );
}

export default App;

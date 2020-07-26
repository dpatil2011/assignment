import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import "./../assets/css/App.css";
import Router from "./../common/route/router";
import { store } from "./../common/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  );
}

export default App;

import React from "react";
import Routes from './routes';
import store from "./storage/redux";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default (App);
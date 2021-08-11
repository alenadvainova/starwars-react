import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";

import Table from "./components/Table";
import BarChart from "./components/BarChart";

import RouteWithSidebar from "./components/RouteWithSidebar";
import rootReducer from "./store/reducers/reducer";

const store = createStore(rootReducer);

const Root = () => {
  return (
    <Switch>
      <RouteWithSidebar exact path="/" component={Table} />
      <RouteWithSidebar exact path="/barchart" component={BarChart} />
      <Redirect to="/" />
    </Switch>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

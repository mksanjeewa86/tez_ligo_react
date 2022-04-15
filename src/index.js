import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import persistedReducers from "./reducers";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const store = createStore(persistedReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

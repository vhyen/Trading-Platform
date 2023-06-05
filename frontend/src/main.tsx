import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "simplebar-react/dist/simplebar.min.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

// import 'dotenv/config';

// const client_id = process.env.CLIENT_ID as string

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

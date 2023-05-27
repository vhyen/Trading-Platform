import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
import 'simplebar-react/dist/simplebar.min.css'

// import 'dotenv/config';

// const client_id = process.env.CLIENT_ID as string

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
);

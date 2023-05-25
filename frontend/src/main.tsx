import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'simplebar-react/dist/simplebar.min.css'

// import 'dotenv/config';

// const client_id = process.env.CLIENT_ID as string

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId='116704910893-ru37iinf53kgkia22fpb17jjfan1545o.apps.googleusercontent.com'>
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
  </GoogleOAuthProvider>
);

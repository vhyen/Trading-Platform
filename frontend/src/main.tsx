import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
import 'simplebar-react/dist/simplebar.min.css'
import { store } from "./redux/store.ts";

// import 'dotenv/config';

// const client_id = process.env.CLIENT_ID as string

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <BrowserRouter>
        <Provider store={store}>
          <App />
          </Provider>
        </BrowserRouter>
);

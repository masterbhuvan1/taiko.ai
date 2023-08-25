import ReactDOM from "react-dom/client";
import store from "./store/store.ts";

import { Provider } from "react-redux";
import App from "./App.tsx";
// import App
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  //  document.getElementById("root")
  // </React.StrictMode>,
);

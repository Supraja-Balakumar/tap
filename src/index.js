import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <div className="container mx-auto p-5">
        {/* <h1 className="text-xl font-bold mb-4">Approver Assign</h1> */}
        {/* <ApprovalTable /> */}
        <App />
      </div>
     
    </Provider>
  </React.StrictMode>
);

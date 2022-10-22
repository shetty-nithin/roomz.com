import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { SignupContextProvider } from "./context/SignupContext";
import { SearchContextProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <SignupContextProvider>
          <App />
        </SignupContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

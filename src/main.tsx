import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator
      signUpAttributes={["email", "phone_number", "given_name", "family_name"]}
      loginMechanisms={["email", "phone_number"]}
    >
      <App />
    </Authenticator>
  </React.StrictMode>
);

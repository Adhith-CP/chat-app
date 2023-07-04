import React from "react";
import "./styles/main.scss";
import "rsuite/dist/rsuite.min.css";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Switch>
      <PublicRoute path="/sign in">
        <SignIn />
      </PublicRoute>

      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;

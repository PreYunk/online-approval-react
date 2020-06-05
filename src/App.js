import React from 'react';
import "./App.css";
import NavBar from "./components/Navbar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import DesktopApp from './components/DesktopApp/DesktopApp';

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div className="App">
      <Router history={history}>
        {/* <header>
          <NavBar />
        </header>
        <Switch>
          <PrivateRoute path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch> */}
        <DesktopApp/>
      </Router>
    </div>
  );
}

export default App;

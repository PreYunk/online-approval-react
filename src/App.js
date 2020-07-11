import React from 'react';
import "./App.css";
import NavBar from "./components/Navbar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch,HashRouter } from "react-router-dom";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import DesktopApp from './components/DesktopApp/DesktopApp';
import Main from "./components/Main/Main";

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div className="App">
      <Router basename="/main" history={history}>
        <Switch>
          {/* <PrivateRoute path="/" exact /> */}
          <Route path="/" exact component={Main}/>
          <PrivateRoute path="/main" component={DesktopApp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

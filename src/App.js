import React from 'react';
import "./App.css";
import NavBar from "./components/Navbar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch,HashRouter } from "react-router-dom";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import DesktopApp from './components/DesktopApp/DesktopApp';
import Main from "./components/Main/Main";
import FBProtectedRoute from './components/hoc/FBProtectedRoute';

function App() {

  return (
    <div className="App">
      <Router basename="/main" history={history}>
        <Switch>
          {/* <PrivateRoute path="/" exact /> */}
          <Route path="/" exact component={Main}/>
          <FBProtectedRoute path="/main" component={DesktopApp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

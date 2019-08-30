import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './page/home';
import About from './page/about';
import Search from './page/search';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gotoabout" component={About} />
          <Route path="/gotosearch" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

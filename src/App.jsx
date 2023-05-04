import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./componets/home/home";
import Footer from "./componets/footer/footer";
import About from "./componets/about/aboutUs";
import MyCode from "./componets/form/Form";
import Contact from "./componets/contact/contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/myCode" component={MyCode} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

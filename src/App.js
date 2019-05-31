import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './Layout';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import Privacy from './Privacy';
import Terms from './Terms';
import Approach from './Approach';
import About from './About';
import Services from './Services';
import NameWithheld from './content/case-studies/NameWithheld';
import QMEssentials from './QMEssentials';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/approach" exact component={Approach} />
          <Route path="/about" exact component={About} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/content/case-studies/NameWithheld" exact component={NameWithheld} />
          <Route path="/content/qmessentials" exact component={QMEssentials}/>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

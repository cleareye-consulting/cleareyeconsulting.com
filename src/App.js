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
import Home from './Home';
import Industries from './Industries';
import Capabilities from './Capabilities';
import Platforms from './Platforms';
import Why from './Why';
import Privacy from './Privacy';
import Terms from './Terms';
import Blog from './Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/industries" exact component={Industries} />
          <Route path="/capabilities" exact component={Capabilities} />
          <Route path="/platforms" exact component={Platforms} />
          <Route path="/why" exact component={Why} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/terms" exact component={Terms} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

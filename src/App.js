import './App.css';
import React from 'react'
import Header from './containers/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Footer from './containers/Footer';

const App = () => {

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;

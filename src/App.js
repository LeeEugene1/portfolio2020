import React from 'react';
//index.js덕분에 ./~/~줄여서표현가능 footer도 {}안에넣어서 코드량을 줄일수있다.
import { Navbar, Footer } from './components';
//router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//global style
import { GlobalStyle } from './globalStyles';
//Home
import Home from './pages/HomePage/Home'
//Service
import Products from './pages/Products/Products'


function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar/>
        <Switch>
          <Route path="/products" exact component={Products}/>
          <Route path="/*" exact component={Home}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

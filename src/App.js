import React from 'react';
//index.js덕분에 ./~/~줄여서표현가능 footer도 {}안에넣어서 코드량을 줄일수있다.
import { Navbar } from './components';
//router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//global style
import { GlobalStyle } from './globalStyles';
//Home
import Home from './pages/HomePage/Home'


function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

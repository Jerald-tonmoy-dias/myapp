import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Ahandler from './pages/Ahandler';
import Country from './pages/Country';
import Mytable2 from './pages/Mytable2';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom';

const myroute = (
  <Router>
    <div>
      <ul>
        <Link className="m-5" to='/about'>About</Link>
        <Link className="m-5" to='/contact'>Contact</Link>
        <Link className="m-5" to='/portfolio'>Portfolio</Link>
        <Link className="m-5" to='/ahandler'>Ahandler</Link>
        <Link className="m-5" to='/country'>Country</Link>
        <Link className="m-5" to='/mytable2'>Mytable2</Link>
      </ul>

      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/ahandler' component={Ahandler} />
      <Route path='/country' component={Country} />
      <Route path='/mytable2' component={Mytable2} />
    </div>

  </Router>
)

ReactDOM.render(myroute,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

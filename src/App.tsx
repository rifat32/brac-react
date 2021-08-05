import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import './App.css';
import MainFooter from './components/Footer/MainFooter';
import MainNav from './components/Navbar/MainNav';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ServicesPage from './pages/ServicesPage';
import TermsPAge from './pages/TermsPAge';

function App() {
  return (
   
       <Router >
         <div className="container-fluid">

         
<MainNav/>
       <Switch>
       <Route exact path="/" component={HomePage}/>
       <Route  path="/about" component={AboutPage}/>
       <Route  path="/contact" component={ContactPage}/>
       <Route  path="/products" component={ProductPage}/>
       <Route  path="/services" component={ServicesPage}/>
       <Route  path="/terms-conditions" component={TermsPAge}/>
       
      
       
       </Switch>
       <MainFooter/>
       </div>
       </Router>
    

  );
}

export default App;

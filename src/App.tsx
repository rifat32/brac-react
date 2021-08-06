import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
import {AiOutlineArrowUp} from 'react-icons/ai'
import { backToTop } from './utils/BackToTop'

function App() {
  useEffect(() => {
backToTop()
  },[])
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
      
       <a href="#" className="back-to-top d-flex align-items-center justify-content-center"> <AiOutlineArrowUp/></a>
       </div>
       </Router>
    

  );
}

export default App;

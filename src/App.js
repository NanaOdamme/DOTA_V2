import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import AllAssets from './components/AllAssets.js';
import AssetDetailsPage from './components/AssetDetailsPage'; 

function App() {
  return (
    <Router>
      <div className='bg-black'>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/allAssets" component={AllAssets} />
          <Route path="/details/:id" component={AssetDetailsPage} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

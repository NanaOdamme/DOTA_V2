import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import AllAssets from './components/AllAssets.js';

function App() {
  return (
    <Router>
      <div >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/allAssets" component={AllAssets} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

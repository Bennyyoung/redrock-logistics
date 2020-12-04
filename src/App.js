import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Contact from './components/Contact'
import './App.css';
import { Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About';
import Services from "./pages/Services"


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />

      </Switch>
      <Footer />
    </>
  );
}

export default App;

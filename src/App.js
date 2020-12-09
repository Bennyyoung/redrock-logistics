import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Contact from './components/Contact'
import './App.css';
import { Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About';
import Services from "./pages/Services"
import Tracker from "./pages/Tracker";
import Dashboard from "./components/Dashboard";
import CreateShipment from "./pages/CreateShipment";
import ViewShipments from "./pages/ViewShipments";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services} />
        <Route exact path="/track" component={Tracker} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/create" component={CreateShipment} />
        <Route exact path="/view" component={ViewShipments} />



        <Route exact path="/contact" component={Contact} />

      </Switch>
      <Footer />
    </>
  );
}

export default App;

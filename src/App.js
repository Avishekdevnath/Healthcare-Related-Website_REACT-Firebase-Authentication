import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
// import Route from './Components/PrivateRoute/PrivateRoute';
import Doctors from './Components/Doctors/Doctors';
import Services from './Components/Services/Services';

// Code for main or app section

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>
          {/* <Route exact path="/contact">
            <Contact></Contact>
          </Route> */}
          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

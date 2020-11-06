import './App.css';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import FoodDeteils from './components//FoodDetails/FoodDetails'
import NoMatch from './components/NoMatch/NoMatch'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from './components/Cart/Cart';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Iogin/Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
            <Route path="/food/:id">
              <FoodDeteils/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/placeOrder">
              <PlaceOrder/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route exact path="/">
              <Foods></Foods>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

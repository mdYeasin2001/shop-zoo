import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Campaign from './components/Campaign/Campaign';
import AppBar from './components/AppBar/AppBar';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import ProductDetails from './components/ProductDetails/ProductDetails';


function App() {
  return (
    <>
      <Campaign/>
      <AppBar/>
      <Router>
        <Switch>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/Shop/:key">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/">
            <Shop></Shop>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

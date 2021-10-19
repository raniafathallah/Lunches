import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import "./App.css";
import Lunches from "./containers/Lunch";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
   
<Router>  
<div>  

<Route path="/lunches" component={Lunches} />  
<Route path="/:active_tab?" component={Lunches}/>
<Route path="/lunch/:productId" component={ProductDetails} />
</div>  
</Router>  
  );
}

export default App;

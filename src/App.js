import React from "react";
import Profile from "./component/Profile";
import "./App.css";
import OrderSummaary from "./component/OrderSummary";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route,} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar />
    <switch>
    <Route path="/profile" component={Profile} exact={true}/>
    <Route path="/ordersummary" component={OrderSummaary} exact={true}/>
    </switch>
    
    </div>
    
      {/* <switch>
        <Route path="/profile" src={Profile} Profile user={data.user} />
        <Route
          path="/OrderSummary"
          component={OrderSummary}
          OrderSummary
          restaurant={data.restaurant}
          user={data.user}
          items={data.items}
        />
      </switch> */}
    </BrowserRouter>

    // <div className="App">

    // </div>
  );
}

export default App;

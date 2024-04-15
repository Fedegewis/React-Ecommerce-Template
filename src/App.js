import React, { useEffect } from "react";
import "./App.css";

//component
import Header from "./components/Header/Header";
//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//container
import Home from "./container/Home/Home";
import Login from "./container/Login/Login";
import Checkout from "./container/Checkout/Checkout";
import Footer from "./container/Footer/Footer";
import { auth } from "./Firebase/FirebaseConfig";
import { useStateValue } from "./StateProvider/StateProvider";
import UploadImage from "./container/UploadImage/UploadImage";


import * as braze from "@braze/web-sdk";

function App() {
  const [{ user }, dispatch] = useStateValue();

//------------------------------------BRAZE-----------------------------

braze.initialize('7b254876-29bf-49a6-a149-e78d29004a97', {
  baseUrl:"sdk.iad-06.braze.com"
});

braze.openSession();
braze.requestPushPermission(); 


//-------------------------------BRAZE-----------------------------------
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user login in .
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //user log out
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  console.log( user);
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/uploadImage" component={UploadImage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/checkout" component={Checkout}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

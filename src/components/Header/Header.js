import React from "react";
import { Menu, Icon } from "semantic-ui-react";

import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateProvider";
import { auth } from "../../Firebase/FirebaseConfig";
import * as braze from "@braze/web-sdk";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleCartViewed = () => {
    braze.logCustomEvent("Cart viewed");
  }

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Menu stackable>
        <Menu.Menu position="left">
          <Menu.Item>
            <Link to="/" className="header__leftItem">
              <img
                className="header__logo"
                src="https://img.icons8.com/ios/100/000000/online-shop-favorite.png"
                alt="secondhand store logo"
              />
              <p className="header__companyName">Second-hand Store</p>
            </Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Link to="/uploadImage">
            <Menu.Item>
              <Icon name="upload" /> Add product
            </Menu.Item>
          </Link>
          <Link to="/checkout" onClick = {handleCartViewed}>
            <Menu.Item>
              <Icon name="shop" /> {basket?.length}
            </Menu.Item>
          </Link>
          <Link to="/login">
            <Menu.Item>
              {user ? (
                <div onClick={login}>
                  <Icon name="sign-out" />
                  Logout
                </div>
              ) : (
                <>
                  <Icon name="sign-in" />
                  Sign in
                </>
              )}
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Header;

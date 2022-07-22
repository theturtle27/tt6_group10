import React from "react";
import ExchangePage from "../components/ExchangePage";

function Navbar() {
  return (
    <div className="w3-bar w3-black">
      <a className="w3-bar-item w3-button" href="/">
        Walletr
      </a>
      <a className="w3-bar-item w3-button" href="/exchange" Element = {<ExchangePage/>}>
        Exchange
      </a>
      <div style={{ float: "right" }}>
        <a className="w3-bar-item w3-button" href="/">
          Login
        </a>
        <a className="w3-bar-item w3-button" href="/">
          Register
        </a>
      </div>
    </div>
  );
}

export default Navbar;

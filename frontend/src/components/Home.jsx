import React from "react";

function Home() {
  return (
    <React.Fragment>
      <div className="w3-container w3-center" style={{ padding: "2rem" }}>
        <h1 className="w3-card w3-left w3-black" style={{ marginTop: "2rem" }}>
          {" "}
          We're live in Singapore
        </h1>
        <h1 className="w3-jumbo">Walletr - Multi-Currency Digital Wallet</h1>
      </div>

      <div
        className="w3-container w3-blue"
        style={{ padding: "2rem", marginTop: "2rem" }}
      >
        <h2>Send Money Instantly</h2>
        <p>With 34 locations and 56 countries</p>
      </div>

      <div className="w3-container w3-white" style={{ padding: "2rem" }}>
        <h2>Introducing Wallet Earn</h2>
        <p>Get interest credited to you wallet everyday</p>
      </div>

      <div className="w3-container w3-black" style={{ padding: "2rem" }}>
        <h2>Best Forex Rates</h2>
        <p>With fees as low as 0.1%</p>
      </div>
    </React.Fragment>
  );
}

export default Home;

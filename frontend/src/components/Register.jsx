import React, { Component } from "react";
import axios from "axios";
import Alert from "./Alert";

class Register extends Component {
  state = { err: "" };

  register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/register", {
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        pwd: document.getElementById("password").value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.error) {
          this.setState({ err: res.data.error });
        } else {
          this.setState({ register: true });
        }
      });
  };

  render() {
    return (
      <div className="w3-card-4" style={{ margin: "2rem" }}>
        <div className="w3-container w3-blue w3-center w3-xlarge">REGISTER</div>
        <div className="w3-container">
          {this.state.err.length > 0 && (
            <Alert
              message={`Check your form and try again! (${this.state.err})`}
            />
          )}
          <form onSubmit={this.register}>
            <p>
              <label htmlFor="name">Full Name</label>
              <input type="text" className="w3-input w3-border" id="name" />
            </p>
            <p>
              <label htmlFor="username">Username</label>
              <input type="text" className="w3-input w3-border" id="username" />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="w3-input w3-border"
                id="password"
              />
            </p>
            <p>
              <button type="submit" class="w3-button w3-blue">
                Register
              </button>
              {this.state.register && <p>You're registered!</p>}
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;

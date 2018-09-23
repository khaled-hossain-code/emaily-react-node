import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderNav() {
    switch (this.props.auth) {
      case null:
        return "Unknown status";
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/auth/logout">Log out</a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrappere">
          <a href="#" className="brand-logo">
            Emaily
          </a>
          <ul className="right">{this.renderNav()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

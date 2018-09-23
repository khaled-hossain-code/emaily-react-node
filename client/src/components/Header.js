import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

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
            <a href="/api/logout">Log out</a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrappere">
          <Link to={ this.props.auth ? '/surveys' : '/' } className="brand-logo">
            Emaily
          </Link>
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

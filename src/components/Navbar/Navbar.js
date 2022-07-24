import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import Logo from "../assets/Rotaractlogo.png";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  // change between menu items and wrong btn
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <img className="navbar-logo" src={Logo} alt="Rotaract Logo" />
        {/* condition for cross and menu navigation */}
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* <Button>Sign Up</Button> */}
      </nav>
    );
  }
}

export default Navbar;

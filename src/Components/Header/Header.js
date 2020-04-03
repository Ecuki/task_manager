import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "react-bootstrap";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="header">
      <Nav pills>
        <NavItem>
          <NavLink href="/main" active>
            Main
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/tasks">Tasks</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/burndown">Burndown</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Header;

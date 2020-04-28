import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItems.css";

const navItems = [
  { id: "clients", text: "Clients", link: "/", auth: true },
  { id: "addClient", text: "Add Client", link: "/add-client", auth: true },
  { id: "pipeline", text: "Pipeline", link: "/pipeline", auth: true },
  { id: "phoneBook", text: "Phone Book", link: "/phone-book", auth: true },
  { id: "login", text: "Login", link: "/", auth: false },
  { id: "signup", text: "Signup", link: "/signup", auth: false },
];

const navigationItems = (props) => [
  ...navItems
    .filter((item) => item.auth === props.isAuth)
    .map((item) => (
      <li
        key={item.id}
        className={["navigation-item", props.mobile ? "mobile" : ""].join(" ")}
      >
        <NavLink to={item.link} exact onClick={props.onChoose}>
          {item.text}
        </NavLink>
      </li>
    )),
  props.isAuth && (
    <li className="navigation-item" key="logout">
      <button onClick={props.onLogout}>Logout</button>
    </li>
  ),
];

export default navigationItems;

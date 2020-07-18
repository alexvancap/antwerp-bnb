import Link from "next/link";
import { withRouter } from "next/router";

import "./../../styles/components/Header/NavButton.scss";

const NavButton = props => (
  <Link href={props.path}>
    <div
      className={`NavButton ${
        props.router.pathname === props.path ? "active" : ""
      }`}
    >
      <span className="Label">{props.label}</span>
    </div>
  </Link>
);

export default withRouter(NavButton);
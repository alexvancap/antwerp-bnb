import navbuttons from '../../../config/NavButtons.config';

import "./../../styles/components/Header/NavBar.scss";
import NavButton from './NavButton';

const NavBar = () => (
  <ul id='NavBar'>
    {
      navbuttons.map(button => <NavButton key={button.label} label={button.label} path={button.path} />)
    }
  </ul>
);

export default NavBar;

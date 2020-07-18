import Logo from './Logo';
import NavBar from './NavBar';
import './../../styles/components/Header/Header.scss'

const Header = function () {
  return (
    <div id="Header">
      <Logo />
      <NavBar />
    </div>
  )
}

export default Header;
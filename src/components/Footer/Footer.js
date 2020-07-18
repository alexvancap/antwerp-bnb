// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

import "./../../styles/components/Footer/Footer.scss";

const Footer = props => (
  <div className="Footer">
    <p className='footerText'>Designed by <Link href='#'><a>Alexander Van Cappellen</a></Link></p>
  </div>
);

export default Footer;
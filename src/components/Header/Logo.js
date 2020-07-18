import "./../../styles/components/Header/Logo.scss";
import Link from 'next/link';

function HeaderLogo() { 
  return (
    <Link href="/">
      <a><img id='logo' src="/logo_transp.png" alt="my image" /></a>
    </Link>
  );
}


export default HeaderLogo;
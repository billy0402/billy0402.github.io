import Link from 'next/link';

import Logo from './Logo';

const Navigation = () => {
  return (
    <header className='navigation'>
      <Link href='/'>
        <Logo />
      </Link>
      <nav className='navigation__items'>
        <ul>
          <li>
            <Link className='link' href='/posts'>
              Posts
            </Link>
          </li>
          <li>
            <Link className='link' href='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

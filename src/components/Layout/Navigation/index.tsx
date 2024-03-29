import Link from 'next/link';

import Logo from './Logo';

const Navigation = () => {
  return (
    <header className='navigation__header'>
      <Link href='/'>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

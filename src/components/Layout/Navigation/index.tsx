import Link from 'next/link';

import { routers } from '@/fixtures/routers';

import Logo from './Logo';

const Navigation = () => {
  return (
    <header className='navigation'>
      <Link href='/'>
        <Logo />
      </Link>
      <nav className='navigation__items'>
        <ul>
          {routers.map(({ label, href }) => (
            <li key={href}>
              <Link className='link' href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

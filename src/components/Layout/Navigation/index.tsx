import Link from 'next/link';

import { routers } from '@/fixtures/routers';

import DayNight from './DayNight';
import Logo from './Logo';

const Navigation = () => {
  return (
    <header className='navigation'>
      <section className='navigation__items'>
        <Link href='/'>
          <Logo />
        </Link>
        <DayNight />
      </section>
      <nav className='navigation__links'>
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

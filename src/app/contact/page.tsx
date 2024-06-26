import { Fragment } from 'react';

import type { Metadata, NextPage } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { socialLinks } from '@/fixtures/social-links';
import imgAvatar from '@/public/images/avatar.jpg';

const ContactPage: NextPage = () => {
  return (
    <>
      <h1 className='margin-bottom' style={{ fontSize: '3rem' }}>
        Contact me
      </h1>
      <article className='contact'>
        <section>
          {socialLinks.map(({ label, href, hrefDisplay }) => (
            <Fragment key={href}>
              <h2>{label}：</h2>
              <p key={label}>
                <Link href={href}>{hrefDisplay ?? href}</Link>
              </p>
            </Fragment>
          ))}
        </section>
        <section className='image-container'>
          <Image src={imgAvatar} alt='avatar' fill />
        </section>
      </article>
    </>
  );
};

export const metadata: Metadata = {
  title: 'Contact me',
  description: 'All my contact information!',
};

export default ContactPage;

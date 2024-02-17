import Image from 'next/image';

import imgAvatar from '@/public/images/home/avatar.jpg';

const Hero = () => {
  return (
    <section className='hero'>
      <Image
        className='hero__image'
        src={imgAvatar}
        alt='A image showing Billy'
        width={300}
        height={300}
      />
      <h1>Hi, I&apos;m Billy Huang</h1>
      <p>I&apos;m a software engineer from Taiwan.</p>
    </section>
  );
};

export default Hero;

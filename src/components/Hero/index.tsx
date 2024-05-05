import Image from 'next/image';

import imgAvatar from '@/public/images/avatar.jpg';

const Hero = () => {
  return (
    <section className='hero'>
      <Image
        className='hero__image'
        src={imgAvatar}
        alt="Billy Huang's avatar"
        width={300}
        height={300}
      />
      <h1>Hi 👋, I&apos;m Billy Huang.</h1>
      <p>
        A software engineer from Taiwan. 💻
        <br />
        I&apos;m skilled in web development using TypeScript and Python. 🧑‍💻
      </p>
    </section>
  );
};

export default Hero;

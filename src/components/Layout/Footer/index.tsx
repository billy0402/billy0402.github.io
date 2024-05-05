const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <article className='footer__container'>
        Copyright © {year} Billy Huang. All rights reserved.
      </article>
    </footer>
  );
};

export default Footer;

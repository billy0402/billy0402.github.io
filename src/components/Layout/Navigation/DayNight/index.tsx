'use client';

const DayNight = () => {
  const switchTheme = () => {
    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    const currentTheme = document.body.style.colorScheme || defaultTheme;
    document.body.style.colorScheme =
      currentTheme === 'dark' ? 'light' : 'dark';
  };

  return (
    <label
      className='day-night'
      htmlFor='dayNight'
      aria-label='day night button'
    >
      <input id='dayNight' type='checkbox' onChange={switchTheme} />
      <div />
    </label>
  );
};

export default DayNight;

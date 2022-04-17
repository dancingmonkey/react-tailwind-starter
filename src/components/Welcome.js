const info = {
  welcome: 'Welcome',
  intro: 'This is a semi-blank starter configured with tailwindcss.',
  features: ['Uses react 18', 'Uses prettier-plugin-tailwindcss', 'Added some custom colors'],
};

const Welcome = () => {
  const list = info.features;

  return (
    <div className='w-full max-w-2xl rounded-sm bg-primary bg-gradient-to-r from-[#7928ca] to-[#ff0080] p-1 font-sans text-white'>
      <div className='h-full w-full rounded-sm bg-primary p-4'>
        <h1 className='mb-2 text-4xl font-bold'>{info.welcome} 💀</h1>

        <hr className='text-secondary' />
        <p className='mt-4 text-lg first-letter:text-7xl first-letter:font-bold first-letter:text-secondary'>{info.intro}</p>

        <ul className='ml-4 mt-4 list-disc text-lg'>
          {list.map(x => {
            return (
              <li key={x} className='cursor-pointer text-primaryLight hover:text-white'>
                {x}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Welcome;

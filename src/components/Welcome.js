const info = {
  welcome: "Welcome",
  intro: "This is a semi-blank starter configured with tailwindcss.",
  features: [
    "Uses react 18",
    "Uses prettier-plugin-tailwindcss",
    "Added some custom colors",
  ],
};

const Welcome = () => {
  const list = info.features;

  return (
    <div className="max-w-md rounded-lg bg-primary  p-4 font-sans text-white">
      <h1 className="mb-2 text-3xl font-bold">{info.welcome}</h1>

      <hr className="text-secondary" />

      <p className="mt-4 first-letter:text-7xl first-letter:font-bold first-letter:text-secondary">
        {info.intro}
      </p>

      <ul className="ml-4 mt-4 list-disc">
        {list.map(x => {
          return <li>{x}</li>;
        })}
      </ul>
    </div>
  );
};
export default Welcome;

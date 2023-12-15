import ButtonStandard from "./buttons/ButtonStandard";

const Contact = () => {
  return (
    <div className="mt-20 bg-blueBright md:mt-28">
      <div className="container flex max-w-[29rem] flex-col items-center gap-3 py-14 text-center text-white sm:gap-10 sm:py-16">
        <p className="text-[0.625rem] tracking-[0.5em] sm:text-xs">
          35,000+ ALREADY JOINED
        </p>
        <h2 className="pb-5 text-2xl font-medium sm:text-[2rem] sm:leading-10">
          Stay up-to-date with what we're doing
        </h2>
        <div className="flex w-full h-full flex-col justify-between gap-4 xs:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-12 w-full rounded-md px-4 text-sm text-blueDark placeholder-grealish placeholder-opacity-40"
          />
          <ButtonStandard applyStyle="red" label="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

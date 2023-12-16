import ButtonStandard from "./buttons/ButtonStandard";
import Counter from "./Counter";

const Contact = () => {
  return (
    <div className="mt-20 bg-blueBright md:mt-28">
      <div className="container flex max-w-[29rem] flex-col items-center gap-3 py-14 text-center text-white sm:gap-10 sm:py-16">
        <Counter />
        <h2 className="pb-5 text-2xl font-medium sm:text-[2rem] sm:leading-10">
          Stay up-to-date with what we're doing
        </h2>
        <div className="flex h-full w-full flex-col justify-between gap-4 xs:flex-row">
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

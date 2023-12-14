import ButtonStandard from "./ButtonStandard";

const Contact = () => {
  return (
    <div className="mt-24 bg-blueBright">
      <div className="container flex max-w-md flex-col items-center gap-7 py-20 text-center text-white">
        <p className="text-xs  tracking-[0.5em]">35,000+ ALREADY JOINED</p>
        <h2 className="text-[2rem] font-medium">
          Stay up-to-date with what we're doing
        </h2>
        <div className="flex gap-5">
          <input type="email" className="rounded-md text-blueDark" />
          <ButtonStandard applyStyle="red" label="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

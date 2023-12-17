import Counter from "./Counter";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="mt-20 bg-blueBright md:mt-28">
      <div className="container flex max-w-[29rem] max-h-[21.9375rem] flex-col justify-start items-center gap-3 py-14 text-center text-white sm:gap-10 sm:py-16">
        <Counter />
        <h2 className="pb-5 text-2xl font-medium sm:text-[2rem] sm:leading-10">
          Stay up-to-date with what we're doing
        </h2>
        <Form />
      </div>
    </div>
  );
};

export default Contact;

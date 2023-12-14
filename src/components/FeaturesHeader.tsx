type Props = {
  text: string;
};

const FeaturesHeader = ({ text }: Props) => {
  return <h4 className="w-full text-gray-500 border-b-2 p-4">{text}</h4>;
};

export default FeaturesHeader;

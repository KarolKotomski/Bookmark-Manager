type Props = {
  label: string;
  headerId: number;
  handleSwitchHeader: (id: number) => void;
};

const FeaturesHeader = ({ label, headerId, handleSwitchHeader }: Props) => {
  return (
    <h4
      onClick={() => handleSwitchHeader(headerId)}
      className="w-full border-b-2 p-4 text-gray-500"
    >
      {label}
    </h4>
  );
};

export default FeaturesHeader;

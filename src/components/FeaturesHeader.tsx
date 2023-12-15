type Props = {
  label: string;
  headerId: number;
  handleSwitchHeader: (id: number) => void;
  activeFeatureHeaderId: number;
};

const FeaturesHeader = ({
  label,
  headerId,
  handleSwitchHeader,
  activeFeatureHeaderId,
}: Props) => {
  const isActive = headerId === activeFeatureHeaderId;

  return (
    <div className="relative flex w-full flex-col items-center">
      <h4
        onClick={() => handleSwitchHeader(headerId)}
        className={`w-full cursor-pointer border-b-2 p-4 ${
          isActive ? "text-blueDark" : "text-gray-500 "
        } transition-colors duration-300 hover:text-redBright`}
      >
        {label}
      </h4>
      {isActive && (
        <div className="absolute bottom-0 w-32 border-b-4 border-redBright sm:w-full"></div>
      )}
    </div>
  );
};

export default FeaturesHeader;

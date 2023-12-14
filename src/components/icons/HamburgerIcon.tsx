const HamburgerIcon = () => {
  return (
    <button className="fill-blueDark p-2 transition-colors duration-300 hover:fill-redBright">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
        <path
          fill-rule="evenodd"
          d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
        />
      </svg>
    </button>
  );
};

export default HamburgerIcon;

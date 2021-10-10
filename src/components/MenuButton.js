function MenuButton({ handleToggle, isNavOpen }) {
  return (
    <div
      onClick={handleToggle}
      className={`sm:hidden flex w-14 h-full flex-col justify-between px-4 py-5 hover:bg-green-50 cursor-pointer ${
        isNavOpen ? 'w-12' : 'w-14'
      }`}>
      <div
        className={`origin-left w-full h-0.5  transition duration-500 ${
          isNavOpen
            ? 'transform rotate-45 bg-red-500 top-px relative'
            : 'bg-green-500'
        }`}></div>
      <div
        className={`w-full h-0.5  transition duration-500 ${
          isNavOpen ? 'opacity-0' : 'bg-green-500'
        }`}></div>
      <div
        className={`origin-left w-full h-0.5  transition duration-500 ${
          isNavOpen ? 'transform -rotate-45 bg-red-500' : 'bg-green-500'
        }`}></div>
    </div>
  );
}

export default MenuButton;

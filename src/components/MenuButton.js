function MenuButton({ handleToggle, isNavOpen, theme }) {
  return (
    <div
      onClick={handleToggle}
      className={`relative sm:hidden flex w-14 h-full flex-col justify-between px-4 py-5 hover:bg-${theme}-50 cursor-pointer `}>
      <div
        className={`origin-left w-full h-0.5  transition duration-500 ${
          isNavOpen
            ? 'transform rotate-45 bg-red-500 top-px relative'
            : `bg-${theme}-700`
        }`}></div>
      <div
        className={`w-full h-0.5  transition duration-500 ${
          isNavOpen ? 'opacity-0' : `bg-${theme}-700`
        }`}></div>
      <div
        className={`origin-left w-full h-0.5  transition duration-500 ${
          isNavOpen ? 'transform -rotate-45 bg-red-500' : `bg-${theme}-700`
        }`}></div>
    </div>
  );
}

export default MenuButton;

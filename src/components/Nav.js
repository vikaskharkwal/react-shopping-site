import { useState } from 'react';
import { ReactComponent as HomeIcon } from '../assets/home.svg';
import { ReactComponent as ShopIcon } from '../assets/shop.svg';
import { ReactComponent as AboutIcon } from '../assets/about.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import MenuButton from './MenuButton';
function Nav({ theme, isCartOpen, toggleCart }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`z-50 flex justify-center bg-white md:shadow-md sticky top-0 self-start ${
        !isNavOpen ? 'shadow-md' : ''
      }`}>
      <div className='w-full 2xl:container flex justify-between item-center sm:px-4 relative'>
        <Link className={`flex`} to='/'>
          <h2
            className={`text-blue-700 text-2xl font-bold  hover:bg-blue-50 transition duration-500 flex items-end px-4 pt-3 pb-5`}
            title='Kickz-The Online Sneaker Store'>
            <div style={{ transform: 'scaleX(-1)' }}>
              <LogoIcon className={`h-5 w-auto inline-block`} />
            </div>
            <span className='inline-block ml-px' style={{ lineHeight: '1.1' }}>
              kickz
            </span>
          </h2>
        </Link>

        <div className={`flex gap-x-8`}>
          <nav
            className={`${
              !isNavOpen ? 'scale-y-0' : 'scale-y-100'
            } uppercase transform flex sm:inline-flex flex-col absolute w-full left-0 top-full sm:w-max sm:flex-row sm:static sm:align-middle sm:justify-center shadow-md sm:shadow-none bg-white transition duration-500 origin-top delay sm:scale-y-100`}>
            <NavLink
              exact
              activeClassName={`border-blue-700 bg-blue-50 ease-in font-semibold text-blue-700`}
              className={`hover:bg-blue-50 p-4 flex item-center text-right border-b-4 border-transparent transition duration-200 sm:opacity-100  ${
                isNavOpen ? 'opacity-100' : 'opacity-0'
              }`}
              to='/'>
              <HomeIcon className={`w-auto h-6 fill-current inline-block`} />
              <span className='inline-block ml-2'>Home</span>
            </NavLink>
            <NavLink
              activeClassName={`border-b-4 border-blue-700 bg-blue-50 font-semibold text-blue-700`}
              className={`hover:bg-blue-50 flex items-center p-4 text-right border-b-4 border-transparent transition duration-200 sm:opacity-100  ${
                isNavOpen ? 'opacity-100' : 'opacity-0'
              }`}
              to='/shop'>
              <ShopIcon className={`w-auto h-5 fill-current inline-block`} />

              <span className='inline-block ml-2'>Shop</span>
            </NavLink>
            <NavLink
              exact
              activeClassName={`border-b-4 border-blue-700 bg-blue-50 font-semibold text-blue-700`}
              className={`hover:bg-blue-50 p-4 flex items-center text-right border-b-4 border-transparent transition duration-200 sm:opacity-100  ${
                isNavOpen ? 'opacity-100' : 'opacity-0'
              }`}
              to='/about'>
              <AboutIcon className={`w-auto h-5 fill-current inline-block`} />

              <span className='inline-block ml-2'>About</span>
            </NavLink>
          </nav>
          <div className={`flex gap-x-4`}>
            <button
              className={`relative inline-block h-full flex-col justify-between px-4 py-4 hover:bg-blue-50 cursor-pointer transition duration-300 ${
                isCartOpen ? `text-blue-700 bg-blue-50` : ''
              }`}
              onClick={toggleCart}>
              <CartIcon
                className={`w-auto h-7 fill-current inline-block transition duration-300`}
              />
            </button>
            <MenuButton
              handleToggle={handleToggle}
              isNavOpen={isNavOpen}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;

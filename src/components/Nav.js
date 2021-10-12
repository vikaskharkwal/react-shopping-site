import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import MenuButton from './MenuButton';
function Nav({ theme }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`z-20 flex justify-center bg-white md:shadow-md sticky top-0 ${
        !isNavOpen ? 'shadow-md' : ''
      }`}>
      <div className='w-full 2xl:container flex justify-between align-middle sm:px-4 relative'>
        <Link to='/'>
          <h2
            className={`text-${theme}-700 text-xl font-bold p-4 hover:bg-${theme}-50 transition duration-500`}>
            <FontAwesomeIcon icon={faShoePrints} />
            <span className='inline-block ml-2'>eKICKZ</span>
          </h2>
        </Link>

        <div className={`flex gap-x-8`}>
          <nav
            className={`${
              !isNavOpen ? 'scale-y-0' : 'scale-y-100'
            } uppercase transform flex sm:inline-flex flex-col absolute w-full left-0 top-full sm:w-max sm:flex-row sm:static sm:align-middle sm:justify-center shadow-md sm:shadow-none bg-white transition duration-500 origin-top delay sm:scale-y-100`}>
            <NavLink
              exact
              activeClassName={`border-${theme}-700 bg-${theme}-50 ease-in font-semibold text-${theme}-700`}
              className={`hover:bg-${theme}-50 p-4 text-right border-b-4 border-transparent transition duration-200 sm:opacity-100  ${
                isNavOpen ? 'opacity-100' : 'opacity-0'
              }`}
              to='/'>
              <FontAwesomeIcon icon={faHome} />
              <span className='inline-block ml-2'>Home</span>
            </NavLink>
            <NavLink
              exact
              activeClassName={`border-b-4 border-${theme}-700 bg-${theme}-50 font-semibold text-${theme}-700`}
              className={`hover:bg-${theme}-50 p-4 text-right border-b-4 border-transparent transition duration-200 sm:opacity-100  ${
                isNavOpen ? 'opacity-100' : 'opacity-0'
              }`}
              to='/shop'>
              <FontAwesomeIcon icon={faStore} />
              <span className='inline-block ml-2'>Shop</span>
            </NavLink>
            <NavLink
              exact
              activeClassName={`border-b-4 border-${theme}-700 bg-${theme}-50 font-semibold text-${theme}-700`}
              className={`hover:bg-${theme}-50 p-4 text-right border-b-4 border-transparent transition duration-200 sm:opacity-100  ${
                isNavOpen ? 'opacity-100' : 'opacity-0'
              }`}
              to='/about'>
              <FontAwesomeIcon icon={faInfoCircle} />
              <span className='inline-block ml-2'>About</span>
            </NavLink>
          </nav>
          <div className={`flex gap-x-4`}>
            <button
              className={`relative flex w-14 h-full flex-col justify-between px-4 py-5 hover:bg-${theme}-50 cursor-pointer`}>
              <FontAwesomeIcon icon={faShoppingCart} size='lg' />
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

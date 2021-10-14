import ImageCarousel from '../components/ImageCarousel';
import { Link } from 'react-router-dom';

function Home({ theme }) {
  document.title = 'KICKZ - One Stop Shop For All Your Sneaker Needs';

  return (
    <div className='relative z-0'>
      <ImageCarousel delay='3000' />
      <div className='absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10'>
        <div className='absolute inset-0 px-4 md:px-16 py-12 text-white flex flex-col md:gap-2 justify-end'>
          <h1 className='col-span-3 text-left text-3xl sm:text-5xl lg:6xl font-bold uppercase relative'>
            One Stop Shop For All Your Sneaker Needs
          </h1>
          <p className='text-lg md:text-2xl w-max font-light uppercase'>
            Thousands of Sneakers to choose from
          </p>
          <Link
            to='/shop'
            className={`mt-4 w-max uppercase font-medium px-2 py-1 text-xl md:text-2xl md:px-4 md:py-3 bg-blue-700 text-white transition duration-100 transform hover:bg-blue-600`}>
            Visit Shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

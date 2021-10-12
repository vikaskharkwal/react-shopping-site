import ImageCarousel from '../components/ImageCarousel';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className='relative'>
      <ImageCarousel delay='5000' />
      <div className='absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10'>
        <div className='absolute inset-0 px-4 md:px-16 py-12 text-white flex flex-col gap-1 md:gap-2 justify-end'>
          <h1 className='col-span-3 text-left text-3xl sm:text-5xl lg:6xl font-bold uppercase md:text-justify relative'>
            Hundreds of Sneakers to choose from
          </h1>
          <p className='text-xl md:text-3xl w-max font-light'>
            make 'em yours...
          </p>
          <Link
            to='/shop'
            className={`w-max uppercase font-medium px-2 py-1 text-xl md:text-2xl md:px-4 md:py-3 bg-${props.theme}-700 text-white transition duration-100 transform hover:scale-105 hover:translate-x-1 focus:scale-95 focus:translate-x-0`}>
            Visit Shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

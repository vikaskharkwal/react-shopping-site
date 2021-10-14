import { useEffect, useRef, useState } from 'react';
import { ReactComponent as ErrorIcon } from '../assets/error.svg';

function Card({ item, theme, brand }) {
  const [image, setImage] = useState('');
  const timeoutRef = useRef(null);

  const handleImageLoaded = () => {
    setImage('loaded');
    // console.log(item);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setImage((prevState) => (!prevState ? 'error' : prevState));
    }, 10000);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <div
      className={`  w-max h-full p-4 cursor-pointer shadow-md hover:shadow-lg transition duration-500 group overflow-hidden ${
        item.retailPrice ? `hover:bg-${theme}-700` : `hover:bg-red-500`
      }`}
      style={{ width: 'calc(280px + 2rem)' }}
      key={item.id}>
      <div>
        <div
          className={`animate-pulse bg-gray-300 ${image ? 'hidden' : ''}`}
          style={{ height: '208px', width: '280px' }}></div>
        <div
          className={`bg-gray-300 text-gray-400 grid ${
            image === 'error' ? '' : 'hidden'
          }`}
          style={{ height: '208px', width: '280px' }}>
          <ErrorIcon
            className={`self-center h-24 w-auto justify-self-center`}
          />
          <p className={`text-center w-60 self-start justify-self-center`}>
            Image either doesn't exist or is taking too long to load.
          </p>
        </div>
        <img
          className={`transform group-hover:scale-105 w-72 h-52 transition-transform duration-500 ${
            image === 'loaded' ? '' : 'hidden'
          }`}
          src={item.media.thumbUrl}
          alt={item.title}
          onLoad={handleImageLoaded}
        />
      </div>
      <div className={'mt-4'}>
        <h2
          className={`capitalize text-2xl font-medium  group-hover:text-white transition duration-500 ${
            brand ? '' : 'hidden'
          }`}>
          {brand}
        </h2>
        <div className={`flex justify-between items-center`}>
          <p className={`group-hover:text-white transition duration-500 `}>
            {item.title.slice(item.brand.length + 1, item.title.length)}
          </p>
          <p
            className={` py-1 px-2 pr-4 -mr-4 w-max text-white  transition duration-500 font-semibold shadow-sm group-hover:bg-white ${
              item.retailPrice
                ? `group-hover:text-${theme}-700 bg-${theme}-700 `
                : 'group-hover:text-red-500 bg-red-500'
            }`}>
            {item.retailPrice ? (
              <span>&#36;{item.retailPrice}</span>
            ) : (
              'Sold Out'
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;

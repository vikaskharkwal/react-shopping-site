import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { ReactComponent as AddCart } from '../assets/add_cart.svg';
import { ReactComponent as InCart } from '../assets/in_cart.svg';

import useAxios from '../hooks/useAxios';
import LoadingComponent from '../components/LoadingComponent';

function ItemDetail({ theme, addToCart, setIsCartOpen, cart }) {
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const [options] = useState({
    method: 'GET',
    url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`,
    headers: {
      'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
      'x-rapidapi-key': '050c345682msh117aabf24fae1e7p180b71jsn71edcb2dc4e6',
      // 'x-rapidapi-key': '98e72c26a4msh97f3561b1730818p19bc09jsn6ad9fd61e590',
      // 'x-rapidapi-key': '1f265e08c2msha8f51e5a3755973p1ecb34jsncf356ad79ab1',
    },
  });

  const [data] = useAxios(options);

  useEffect(() => {
    setIsLoading(data.length ? false : true);
    document.title = data.length
      ? `The KICKZ Shop - ${data[0].title}`
      : `The KICKZ Shop`;
  }, [data]);

  const handleButtonClick = (object) => {
    setIsCartOpen(true);
    addToCart(object);
  };

  return (
    <div
      className={`ml-auto mr-auto relative z-0 w-full 2xl:container px-4 sm:px-8 flex flex-col h-full items-center justify-center`}>
      {data.length ? (
        <div
          className={`grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-x-4 justify-between w-full items-center`}>
          <img
            className={`w-full max-w-xl max-h-96 h-full justify-self-center bg-gray-200 `}
            src={data[0].media.imageUrl}
            alt={data[0].title}
          />
          <div
            className={`flex flex-col w-full max-w-md gap-2 justify-self-center`}>
            <h2 className='text-2xl md:text-4xl uppercase font-bold'>
              {data[0].brand}
            </h2>
            <div
              className={`flex gap-1 items-center  w-full h-max self-start justify-self-center transition duration-300 self`}>
              <p className={`font-medium`}>
                {data[0].title.slice(
                  data[0].brand.length + 1,
                  data[0].title.length
                )}
              </p>
            </div>
            <div className={`font-medium text-sm`}>
              Colorway: <span className={`font-light`}>{data[0].colorway}</span>
            </div>
            <div className={`font-medium text-sm`}>
              Gender:{' '}
              <span className={`font-light capitalize`}>{data[0].gender}</span>
            </div>
            <div className={`font-medium text-sm`}>
              Year: <span className={`font-light`}>{data[0].year}</span>
            </div>
            <div
              className={`flex items-center justify-between text-base lg:text-lg `}>
              <div
                className={`font-bold text-base lg:text-3xl xl:text-4xl text-${theme}-700`}>
                {data[0].retailPrice ? (
                  <span className={`text-${theme}-700`}>
                    &#36;{data[0].retailPrice}{' '}
                  </span>
                ) : (
                  <span className={`text-red-500`}>Sold Out</span>
                )}
              </div>
              {cart.some((cartItem) => cartItem.id === id) ? (
                <div className={`flex flex-col items-center gap-1`}>
                  <p className={`text-xs`}>Already in your cart</p>
                  <button
                    className={` flex gap-1 items-center justify-between text-white py-1 px-2 transition duration-300 bg-${theme}-700 hover:bg-${theme}-600`}
                    onClick={() => setIsCartOpen(true)}>
                    <InCart
                      className={`h-6 inline-block w-auto fill-current`}
                    />
                    Go to Cart
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    handleButtonClick({ id, data: data[0], quantity: 1 });
                  }}
                  type='button'
                  className={` flex gap-1 items-center justify-between text-white py-1 px-2 transition duration-300 ${
                    !data[0].retailPrice
                      ? 'pointer-events-none bg-gray-400 cursor-not-allowed'
                      : `bg-${theme}-700 hover:bg-${theme}-600`
                  }`}>
                  <AddCart className={`h-6 inline-block w-auto fill-current`} />
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <LoadingComponent
          theme={theme}
          text={'Sneaker Details'}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default ItemDetail;

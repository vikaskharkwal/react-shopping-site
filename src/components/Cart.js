import { ReactComponent as CloseIcon } from '../assets/close.svg';
import { ReactComponent as EmptyCartIcon } from '../assets/empty_cart.svg';
import { ReactComponent as Add } from '../assets/add.svg';
import { ReactComponent as Subtract } from '../assets/subtract.svg';

import { Link } from 'react-router-dom';

function Cart({
  isCartOpen,
  toggleCart,
  theme,
  cart,
  updateQuantity,
  cartTotal,
  cartTax,
  deleteItemFromCart,
  emptyCart,
}) {
  const increaseQuantity = (id, quantity) => {
    updateQuantity(id, quantity + 1);
  };
  const decreaseQuantity = (id, quantity) => {
    updateQuantity(id, quantity - 1);
  };

  return (
    <div
      className={`absolute h-full w-full right-0 z-40 shadow-lg  ${
        isCartOpen ? '' : 'transform translate-x-full transition delay-500'
      }`}>
      <div
        className={`h-full w-full absolute bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm z-0 ${
          isCartOpen ? '' : 'hidden'
        }`}
        onClick={toggleCart}></div>
      <div
        className={`w-full max-w-md px-4 py-4 pb-12 right-0 z-10 absolute top-16 bg-white shadow-lg transition duration-500 overflow-hidden ${
          isCartOpen ? '' : 'transform translate-x-full'
        }`}
        style={{ height: 'calc(100% - 4rem)' }}>
        <div className={`flex items-center justify-between`}>
          <h2 className={`text-xl md:text-2xl uppercase font-bold `}>
            Your Cart
          </h2>
          <button
            className={`hover:bg-red-50 p-2 text-red-500 trasnition duration-200`}
            onClick={toggleCart}>
            <CloseIcon
              className={`fill-curren h-4 w-full trasnition duration-200`}
            />
          </button>
        </div>
        {cart && cart.length ? (
          <div className={`h-full w-full justify-between flex flex-col`}>
            <div
              className={`w-full h-full flex flex-col justify-start items-center  divide-y-2 overflow-y-auto`}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className={`flex gap-1 items-center w-full py-4`}>
                  <img
                    src={item.data.media.thumbUrl}
                    alt={item.data.title}
                    className={`w-auto max-h-12`}
                  />
                  <div
                    className={`flex justify-between items-center w-full gap-2`}>
                    <div>
                      <h3 className={`font-medium text-sm`}>
                        {item.data.title}
                      </h3>
                      <h4 className={`font-light text-xs`}>
                        {item.data.colorway}
                      </h4>
                    </div>
                    <div className={`font-semibold`}>
                      &#36;{item.data.retailPrice} &times; {item.quantity}
                    </div>

                    <div
                      className={`flex flex-col items-center justify-between`}>
                      <div className={`flex gap-1 items-center`}>
                        <button
                          className={`w-4 h-4 flex items-center justify-center text-white  ${
                            item.quantity <= 1
                              ? 'bg-gray-300 pointer-events-none '
                              : `bg-blue-700 hover:bg-blue-600`
                          }`}
                          onClick={() =>
                            decreaseQuantity(item.id, item.quantity)
                          }>
                          <Subtract className={`h-auto w-2 fill-current`} />
                        </button>
                        <div
                          className={`w-6 px-1 h-6 flex items-center justify-center`}>
                          {item.quantity}
                        </div>
                        <button
                          className={`w-4 h-4 flex items-center justify-center text-white  ${
                            item.quantity >= 10
                              ? 'bg-gray-300 pointer-events-none'
                              : `bg-blue-700 hover:bg-blue-600`
                          }`}
                          onClick={() =>
                            increaseQuantity(item.id, item.quantity)
                          }>
                          <Add className={`h-auto w-2 fill-current`} />
                        </button>
                      </div>
                      <button
                        className={`underline hover:text-red-500`}
                        onClick={() => deleteItemFromCart(item.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`flex justify-between items-center`}>
              <div className={`text-xl flex flex-col w-max`}>
                <span>
                  Total:{' '}
                  <span className={`font-bold text-blue-700`}>
                    &#36;
                    {(cartTotal + cartTax).toFixed(2)}
                    <span
                      className={`font-light text-sm self-end text-gray-700`}>
                      {' '}
                      (&#36;{cartTotal} + 18% Tax)
                    </span>
                  </span>
                </span>
              </div>
              <Link
                to='/checkout'
                onClick={() => {
                  toggleCart();
                  emptyCart();
                }}
                className={`items-center text-2xl px-2 py-1 justify-center text-white font-bold bg-blue-700 hover:bg-blue-600`}>
                Checkout
              </Link>
            </div>
          </div>
        ) : (
          <div
            className={`w-full h-full flex flex-col justify-center items-center text-gray-400`}>
            <EmptyCartIcon className={`fill-current  h-32 w-auto `} />
            <p className={`text-xl`}>Your Cart is Empty</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

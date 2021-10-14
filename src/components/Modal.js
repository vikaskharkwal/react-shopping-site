import { useEffect } from 'react';
import { useHistory } from 'react-router';
import ItemDetail from '../routes/ItemDetail';

function Modal({
  theme,
  openModal,
  closeModal,
  isModalOpen,
  addToCart,
  setIsCartOpen,
  cart,
}) {
  const history = useHistory();

  useEffect(() => {
    openModal();
    return () => closeModal();
  });

  const goBack = () => {
    history.goBack();
  };

  return (
    <div
      className={`absolute h-full w-full top-16 left-0  z-30 py-2 md:py-4 px-2 md:px-20`}
      style={{ height: 'calc(100% - 4rem)' }}>
      <div
        className={`absolute h-full w-full top-0 left-0 bg-black backdrop-filter backdrop-blur-sm bg-opacity-25`}
        onClick={goBack}></div>
      <div
        className={`bg-white h-full w-full shadow-lg px-4 py-4 relative overflow-y-auto flex flex-col transform duration-500  ${
          isModalOpen
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
        onClick={(event) => event.stopPropagation()}>
        <div
          className={`w-max px-1 flex items-center justify-between hover:bg-blue-100  text-blue-700 cursor-pointer underline`}
          onClick={goBack}>
          Go Back
        </div>
        <ItemDetail
          cart={cart}
          theme={theme}
          addToCart={addToCart}
          setIsCartOpen={setIsCartOpen}
        />
      </div>
    </div>
  );
}

export default Modal;

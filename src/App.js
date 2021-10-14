import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './routes/Home';
import Shop from './routes/Shop';
import ItemDetail from './routes/ItemDetail';
import Nav from './components/Nav';
import About from './routes/About';
import Checkout from './routes/Checkout';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import Cart from './components/Cart';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const [theme] = useState('blue');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);

  useEffect(() => {
    setCartTotal(
      cart.reduce((prev, current) => {
        return prev + current.quantity * current.data.retailPrice;
      }, 0)
    );
  }, [cart]);

  useEffect(() => {
    setCartTax((cartTotal * 18) / 100);
  }, [cartTotal]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const addToCart = (obj) => {
    setCart((prevState) => [...prevState, obj]);
  };

  const removeFromCart = (id) => {
    setCart((prevState) => prevState.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevState) => {
      return prevState.filter((item) => {
        if (item.id === id) {
          item.quantity = quantity;
        }
        return item;
      });
    });
  };

  const deleteItemFromCart = (id) => {
    setCart((prevState) => {
      return prevState.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div
      className={`antialiased text-gray-700 relative h-screen grid grid-flow-row-dense overflow-hidden`}>
      <Nav theme={theme} toggleCart={toggleCart} isCartOpen={isCartOpen} />
      <Cart
        emptyCart={emptyCart}
        isCartOpen={isCartOpen}
        theme={theme}
        toggleCart={toggleCart}
        cart={cart}
        updateQuantity={updateQuantity}
        cartTotal={cartTotal}
        cartTax={cartTax}
        deleteItemFromCart={deleteItemFromCart}
      />
      <div
        className={`overflow-x-hidden`}
        style={{ minHeight: 'calc(100vh - 4rem)' }}>
        <Switch location={background || location}>
          <Route
            path='/'
            exact
            children={(props) => <Home {...props} theme={theme} />}></Route>
          <Route
            path='/shop'
            children={(props) => <Shop {...props} theme={theme} />}></Route>
          <Route
            path='/about'
            exact
            children={(props) => <About {...props} theme={theme} />}></Route>
          <Route
            path='/checkout'
            exact
            children={(props) => <Checkout {...props} theme={theme} />}></Route>
          <Route
            path='/shop/:id'
            children={(props) => (
              <ItemDetail
                {...props}
                cart={cart}
                addToCart={addToCart}
                setIsCartOpen={setIsCartOpen}
                theme={theme}
              />
            )}></Route>
        </Switch>
        {background && (
          <Route
            path='/shop/:id'
            children={(props) => (
              <Modal
                {...props}
                cart={cart}
                theme={theme}
                isModalOpen={isModalOpen}
                openModal={openModal}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                setIsCartOpen={setIsCartOpen}
                closeModal={closeModal}
              />
            )}
          />
        )}
      </div>
    </div>
  );
}

export default App;

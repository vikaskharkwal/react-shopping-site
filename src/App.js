import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Shop from './routes/Shop';
import ItemDetail from './routes/ItemDetail';
import Nav from './components/Nav';
import About from './routes/About';
import { useState } from 'react';
function App() {
  const [theme] = useState('blue');
  return (
    <BrowserRouter>
      <div className='antialiased text-gray-700'>
        <Nav theme={theme} />
        <div className='ml-auto mr-auto relative z-10'>
          <Switch>
            <Route
              path='/shop'
              exact
              render={(props) => <Shop theme={theme} />}></Route>
            <Route
              path='/about'
              exact
              render={(props) => <About theme={theme} />}></Route>
            <Route
              path='/shop/:id'
              exact
              render={(props) => <ItemDetail theme={theme} />}></Route>
            <Route
              path='/'
              exact
              render={(props) => <Home theme={theme} />}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

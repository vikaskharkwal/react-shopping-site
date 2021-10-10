import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Shop from './routes/Shop';
import ItemDetail from './routes/ItemDetail';
import Nav from './components/Nav';
import About from './routes/About';
function App() {
  return (
    <BrowserRouter>
      <div className='antialiased text-gray-700'>
        <Nav />
        <Switch className=''>
          <Route path='/shop' exact component={Shop}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/shop/:id' exact component={ItemDetail}></Route>
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

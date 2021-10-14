import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';
import ShopPage from './ShopPage';

function Shop({ theme }) {
  const { path } = useRouteMatch();

  return (
    <div
      className={`ml-auto mr-auto relative z-0 2xl:container pt-4 sm:pt-8 px-4 sm:px-8 overflow-y-auto min-h-full`}>
      <div>
        <h1 className='text-4xl uppercase font-bold'>Shop</h1>
      </div>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`/shop/1`} />;
        </Route>
        <Route path={`${path}/:page`}>
          <ShopPage theme={theme} />
        </Route>
      </Switch>
    </div>
  );
}

export default Shop;

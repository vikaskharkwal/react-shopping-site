import { useEffect, useState } from 'react';
import { Link, useLocation, useParams, useHistory } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import LoadingComponent from '../components/LoadingComponent';
import Card from '../components/Card';

function ShopPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const history = useHistory();
  const { page } = useParams();
  const [options, setOptions] = useState({
    method: 'GET',
    url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
    params: { limit: '36', page: page },
    headers: {
      'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
      'x-rapidapi-key': '050c345682msh117aabf24fae1e7p180b71jsn71edcb2dc4e6',
      // 'x-rapidapi-key': '98e72c26a4msh97f3561b1730818p19bc09jsn6ad9fd61e590',
      // 'x-rapidapi-key': '1f265e08c2msha8f51e5a3755973p1ecb34jsncf356ad79ab1',
    },
  });
  const [data, shoeCount] = useAxios(options);
  const [pageCount, setPageCount] = useState();
  const [value, setValue] = useState(page);

  document.title = `KICKZ Shop`;

  const prevPage = () => {
    // setTempPage((prevState) => {
    //   const newValue = prevState <= 1 ? prevState : prevState - 1;
    //   setValue(newValue);
    //   return newValue;
    // });
    history.push(`/shop/${page - 1}`);
  };

  const nextPage = () => {
    // setTempPage((prevState) => {
    //   const newValue =
    //     prevState >= shoeCount / 36 - 1 ? prevState : prevState + 1;
    //   setValue(newValue);
    //   return newValue;
    // });
    history.push(`/shop/${parseInt(page) + 1}`);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setTempPage(parseInt(value));
    history.push(`/shop/${value}`);
  };

  useEffect(() => {
    setIsLoading(data.length ? false : true);
  }, [data]);

  useEffect(() => {
    setPageCount(parseInt(shoeCount / 36 - (shoeCount % 36 ? 0 : 1)));
  }, [shoeCount]);

  useEffect(() => {
    setValue(page);
    setOptions((prevState) => {
      return { ...prevState, params: { limit: '36', page: page } };
    });
  }, [page]);

  return (
    <div>
      <div className={`w-full flex justify-center items-center min-h-full`}>
        {isLoading ? (
          <LoadingComponent theme={props.theme} text={'Sneakers'} />
        ) : (
          <div
            className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row place-items-center gap-y-8 my-8`}>
            {data.map((item) => {
              return (
                <Link
                  className={`self-stretch`}
                  to={{
                    pathname: `/shop/${item.id}`,
                    state: { background: location },
                  }}
                  key={item.id}
                  title={item.title}
                  theme={props.theme}>
                  <Card item={item} brand={item.brand} theme={props.theme} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <div
        className={`flex gap-y-4 gap-x-8 justify-around flex-col sm:flex-row items-center mt-4 pb-8 sm:mt-8  ${
          data.length ? '' : 'hidden'
        }`}>
        <p>
          Showing {(page - 1) * 36 + 1}-{page * 36} of {shoeCount}
        </p>
        <div className={`flex gap-4`}>
          <button
            onClick={prevPage}
            className={` no-underline ${
              page <= 1
                ? 'text-gray-300 pointer-events-none'
                : 'hover:underline text-blue-700'
            }`}>
            &lt; Previous
          </button>
          <div className={`flex gap-1 items-center`}>
            Page{' '}
            {
              <form onSubmit={handleSubmit}>
                <input
                  min='1'
                  max={pageCount}
                  onChange={handleChange}
                  className={`w-12 pl-2 border-2 border-gray-400 rounded-md focus:border-${props.theme}-700 outline-none`}
                  style={{ WebkitAppearance: 'none' }}
                  type='number'
                  value={value}
                />
              </form>
            }{' '}
            of {pageCount}
          </div>
          <button
            onClick={nextPage}
            className={` no-underline ${
              page >= shoeCount / 36 - 1
                ? 'text-gray-300 pointer-events-none'
                : 'hover:underline text-blue-700'
            }`}>
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;

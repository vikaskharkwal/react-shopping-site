import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

function useAxios(options) {
  const [data, setData] = useState([]);
  const [shoeCount, setShoeCount] = useState(0);

  const fetchingData = useCallback(async () => {
    try {
      const res = await axios.request(options);
      setData(res.data.results);
      setShoeCount(res.data.count ? res.data.count : 1);
    } catch (error) {
      console.log(error.message);
    }
  }, [options]);

  useEffect(() => {
    setData([]);
    fetchingData();
  }, [fetchingData]);

  return [data, shoeCount];
}

export default useAxios;

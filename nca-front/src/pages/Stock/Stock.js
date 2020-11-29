import React, { useEffect, useState } from 'react';
import { instance } from '../../constants';

const Stock = () => {
  const [stock, setStock] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const res = await instance.get('/');

        setStock(res.data);
      } catch (error) {
        setIsError(true);
        console.log('Error loading stock', error);
      }
      setIsLoading(false);
    };
    fetchStock();
  }, []);
  return (
    <div>
      <h1>This is stock</h1>
    </div>
  );
};

export default Stock;

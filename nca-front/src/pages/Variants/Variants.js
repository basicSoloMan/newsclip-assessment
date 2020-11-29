import React, { useEffect, useState } from 'react';
import { instance } from '../../constants';

const Variants = () => {
  const [variants, setVariants] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchVariants = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const res = await instance.get('/variants');

        setVariants(res.data);
      } catch (error) {
        setIsError(true);
        console.log('error loading models', error);
      }
    };
    fetchVariants();
  }, []);
  return (
    <div>
      <h1>This is Variants</h1>
    </div>
  );
};

export default Variants;

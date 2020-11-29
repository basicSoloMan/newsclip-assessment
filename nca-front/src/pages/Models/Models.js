import React, { useEffect, useState } from 'react';
import { instance } from '../../constants';

const Models = () => {
  const [models, setModels] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const res = await instance.get('/models');
        setModels(res.data);
      } catch (error) {
        setIsError(true);
        console.log('error loading models', error);
      }
      setIsLoading(false);
    };
    fetchModels();
  }, []);
  return (
    <div>
      <h1>this is models</h1>
    </div>
  );
};

export default Models;

import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;

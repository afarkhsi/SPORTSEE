import { useState, useEffect } from 'react';

// Fetch data
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    const fetchProducts = async () => {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setData(json);
        setLoading(false);
      } else {
        setError(true);
      }
    };

    fetchProducts();
  }, [url]);
  return { isLoading, data, error };
}

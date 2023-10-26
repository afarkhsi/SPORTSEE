import { useState, useEffect } from 'react';

export const apiUrl = 'http://localhost:3000';

// Hook Fetch data
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!url) return;
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { isLoading, data, error };
}

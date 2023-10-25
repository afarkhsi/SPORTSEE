import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        console.log(json);
        // response.find((userId) => userId.id === location.state?.userId);
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

export const UserMainData = () => {
  const userId = useParams();
  const url = `${apiUrl}/user/${userId}`;
  // const url = `./mockDataUser.json`;
  const { data, isLoading } = useFetch(url);
  const keyData = data?.data?.keyData;
  return { isLoading, data, keyData };
};

export const UserActivityData = () => {
  const userId = useParams();
  const url = `${apiUrl}/user/${userId}/activity`;
  // const url = `./mockDataActivity.json`;
  const { data } = useFetch(url);
  const dataActivity = data?.data;
  return { dataActivity };
};

export const UserAverageSessionsData = () => {
  const userId = useParams();
  const url = `${apiUrl}/user/${userId}/average-sessions`;
  // const url = `./mockDataAverageSessions.json`;
  const { data } = useFetch(url);
  const dataAverageSession = data?.data;
  return { dataAverageSession };
};

// export const UserPerformanceData = () => {
//   const url = `${apiUrl}/user/${userId}/performance`;
//   // const url = `./mockDataPerformance.json`;
//   const { data } = useFetch(url);
//   const dataPerformance = data?.data;
//   return { dataPerformance };
// };

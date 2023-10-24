import { useState, useEffect } from 'react';

const apiUrl = 'http://localhost:3000';
const userId = '12';

// Hook Fetch data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      if (response.ok) {
        setData(json);
        setLoading(false);
      } else {
        setError(true);
      }
    };

    fetchData();
  }, [url]);
  return { isLoading, data, error };
}

export const UserMainData = () => {
  const url = `${apiUrl}/user/${userId}`;
  // const url = `./mockDataUser.json`;

  const { data, isLoading } = useFetch(url);
  const keyData = data?.data?.keyData;

  // console.log('Affichage des données API DATAKEY: ', keyData);
  return { isLoading, data, keyData };
};

export const UserActivityData = () => {
  const url = `${apiUrl}/user/${userId}/activity`;
  // const url = `./mockDataActivity.json`;

  const { data } = useFetch(url);
  const dataActivity = data?.data;

  // console.log(
  //   'Affichage des données API ACTIVITYDATA: ',
  //   dataActivity?.sessions
  // );
  return { dataActivity };
};

export const UserAverageSessionsData = () => {
  const url = `${apiUrl}/user/${userId}/average-sessions`;
  // const url = `./mockDataAverageSessions.json`;

  const { data } = useFetch(url);
  const dataAverageSession = data?.data;

  // console.log('Affichage des données API AVERAGESESSIONDATA: ', url);
  return { dataAverageSession };
};

export const UserPerformanceData = () => {
  const url = `${apiUrl}/user/${userId}/performance`;
  // const url = `./mockDataPerformance.json`;

  const { data } = useFetch(url);
  const dataPerformance = data?.data;

  // console.log(
  //   'Affichage des données API AVERAGESESSIONDATA: ',
  //   dataPerformance?.sessions
  // );
  return { dataPerformance };
};

import { useState, useEffect } from 'react';
import { USER_MAIN_DATA } from '../../mockData';

const apiUrl = 'http://localhost:3000';
const userId = '12';

// Fetch data
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
      // console.log('Affichage des données API: ', json);
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

  const { data, isLoading } = useFetch(url);
  const id = data?.data?.id;
  const dataKey = data?.data?.keyData;
  const userInfos = data?.data?.userInfos;

  // console.log('Affichage des données API: ', dataKey);
  return { isLoading, data, id, dataKey, userInfos };
};

export const UserActivityData = () => {
  const url = `${apiUrl}/user/${userId}/activity`;

  const { data } = useFetch(url);
  const dataActivity = data?.data;
  const id = dataActivity?.data?.userId;

  console.log(
    'Affichage des données API ACTIVITYDATA: ',
    dataActivity?.sessions
  );
  return { dataActivity, id };
};

export const UserAverageSessionsData = () => {
  const url = `${apiUrl}/user/${userId}/average-sessions`;

  const { data, isLoading } = useFetch(url);
  const dataAverageSession = data?.data;
  const id = dataAverageSession?.data?.userId;

  console.log(
    'Affichage des données API AVERAGESESSIONDATA: ',
    dataAverageSession?.sessions
  );
  return { dataAverageSession, id, isLoading };
};

export const UserPerformanceData = () => {
  const url = `${apiUrl}/user/${userId}/performance`;

  const { data, isLoading } = useFetch(url);
  const dataPerformance = data?.data;
  const id = dataPerformance?.data?.userId;

  console.log(
    'Affichage des données API AVERAGESESSIONDATA: ',
    dataPerformance?.sessions
  );
  return { dataPerformance, id, isLoading };
};

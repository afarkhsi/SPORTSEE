import { useParams } from 'react-router-dom';
import useFetch from '../utils/hooks/useFetch';
import Adapter from '../utils/adapter/adapter';

const apiUrl = 'http://localhost:3000';

const useActivityChart = () => {
  const { userId } = useParams();
  const url = `${apiUrl}/user/${userId}/activity`;
  // const mockedUrl = `../../../mockDataActivity.json`;
  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data).activity();
  return { isLoading, isError: error, dataFormated };
};

const useUserInfo = () => {
  const { userId } = useParams();
  const url = `${apiUrl}/user/${userId}`;
  // const mockedUrl = `../../../mockDataActivity.json`;
  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data).userInfo();
  return { isLoading, isError: error, dataFormated };
};

const useLineChart = () => {
  const { userId } = useParams();
  const url = `${apiUrl}/user/${userId}/average-sessions`;
  // const mockedUrl = '../../../mockDataAverageSessions.json';
  const { data, error, isLoading } = useFetch(url);
  const dataFormated = data?.data?.sessions;
  return { isLoading, isError: error, dataFormated };
};

const usePerformanceChart = () => {
  const { userId } = useParams();
  const url = `${apiUrl}/user/${userId}/performance`;
  // const mockedUrl = `../../../mockDataPerformance.json`;
  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data?.data).performance();
  return { isLoading, isError: error, dataFormated };
};

const useScoreChart = () => {
  const { userId } = useParams();
  const url = `${apiUrl}/user/${userId}`;
  // const mockedUrl = `../../../mockDataUser.json`;
  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data).score();
  return { isLoading, isError: error, dataFormated };
};

const useConsumption = () => {
  const { userId } = useParams();
  const url = `${apiUrl}/user/${userId}`;
  // const mockedUrl = `../../../mockDataUser.json`;
  const { data, isLoading, error } = useFetch(url);
  const dataFormated = new Adapter(data?.data).completaryData();
  return { isLoading, isError: error, dataFormated };
};

export {
  useUserInfo,
  useLineChart,
  usePerformanceChart,
  useScoreChart,
  useActivityChart,
  useConsumption,
};

import { useParams } from 'react-router-dom';
import useFetch, { apiUrl } from '../../../utils/hooks/useFetch';
import Adapter from '../../../utils/adapter/adapter';

const useActivityChart = () => {
  const { userId } = useParams();

  const url = `${apiUrl}/user/${userId}/activity`;
  // const mockedUrl = `../../../mockDataActivity.json`;

  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data).activity();
  return { isLoading, isError: error, dataFormated };
};

export default useActivityChart;

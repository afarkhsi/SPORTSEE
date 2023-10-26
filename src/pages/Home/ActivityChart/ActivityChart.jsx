import { useParams } from 'react-router-dom';
import Adapter from '../../../utils/adapter/adapter';
import useFetch, { apiUrl } from '../../../utils/hooks/useFetch';
import BarChartComponent from '../../../components/BarChart/BarChart';

const useActivityChart = () => {
  const { userId } = useParams();

  const url = `${apiUrl}/user/${userId}/activity`;
  const mockedUrl = `../../../mockDataActivity.json`;

  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data?.data).performance();
  // console.log('test2:', dataFormated);
  return { isLoading, isError: error, dataFormated };
};

const ActivityChart = () => {
  const { isLoading, dataFormated, isError } = useActivityChart();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <BarChartComponent data={dataFormated} />;
};
export default ActivityChart;

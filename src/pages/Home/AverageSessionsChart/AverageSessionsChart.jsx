import { useParams } from 'react-router-dom';
import useFetch, { apiUrl } from '../../../utils/hooks/useFetch';
import LineChartComponent from '../../../components/LineChart/lineChart';

// const userId = '12';

const useLineChart = () => {
  const { userId } = useParams();

  const url = `${apiUrl}/user/${userId}/average-sessions`;
  const mockedUrl = '../../../mockDataAverageSessions.json';

  const { data, error, isLoading } = useFetch(url);
  const dataFormated = data?.data?.sessions;
  // console.log('test:', dataFormated);
  return { isLoading, isError: error, dataFormated };
};

const AverageSessionsChart = () => {
  const { isLoading, dataFormated, isError } = useLineChart();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <LineChartComponent data={dataFormated} />;
};
export default AverageSessionsChart;

import { useParams } from 'react-router-dom';
import Adapter from '../../../utils/adapter/adapter';
import useFetch, { apiUrl } from '../../../utils/hooks/useFetch';
import RadialChartComponent from '../../../components/RadialBarChart/RadialBarChart';

const useScoreChart = () => {
  const { userId } = useParams();

  const url = `${apiUrl}/user/${userId}`;
  const mockedUrl = `../../../mockDataUser.json`;

  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data).score();
  //   console.log('testo:', dataFormated);
  return { isLoading, isError: error, dataFormated };
};

const ScoreChart = () => {
  const { isLoading, dataFormated, isError } = useScoreChart();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <RadialChartComponent data={dataFormated} />;
};
export default ScoreChart;

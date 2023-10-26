import { useParams } from 'react-router-dom';
import useFetch, { apiUrl } from '../../../utils/hooks/useFetch';
import LineChartComponent from '../../../components/LineChart/LineChart';
import { ErrorContainer, LoaderContainer } from '../ScoreChart/ScoreChart';
import { Loader } from '../../../utils/styles/Atoms';

const useLineChart = () => {
  const { userId } = useParams();

  const url = `${apiUrl}/user/${userId}/average-sessions`;
  // const mockedUrl = '../../../mockDataAverageSessions.json';

  const { data, error, isLoading } = useFetch(url);
  const dataFormated = data?.data?.sessions;
  return { isLoading, isError: error, dataFormated };
};

const AverageSessionsChart = () => {
  const { isLoading, dataFormated, isError } = useLineChart();
  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  if (isError) {
    return <ErrorContainer> Error! Cannot GET Sessions</ErrorContainer>;
  }

  return <LineChartComponent data={dataFormated} />;
};
export default AverageSessionsChart;

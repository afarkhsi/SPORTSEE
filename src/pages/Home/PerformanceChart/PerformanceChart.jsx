import { useParams } from 'react-router-dom';
import PerformanceRadarChart from '../../../components/PerformanceRadarChart/PerformanceRadarChart';
import Adapter from '../../../utils/adapter/adapter';
import useFetch, { apiUrl } from '../../../utils/hooks/useFetch';
import { LoaderContainer } from '../ScoreChart/ScoreChart';
import { Loader } from '../../../utils/styles/Atoms';

const usePerformanceChart = () => {
  const { userId } = useParams();

  const url = `${apiUrl}/user/${userId}/performance`;
  const mockedUrl = `../../../mockDataPerformance.json`;

  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data?.data).performance();
  return { isLoading, isError: error, dataFormated };
};

const PerformanceChart = () => {
  const { isLoading, dataFormated, isError } = usePerformanceChart();
  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <PerformanceRadarChart data={dataFormated} />;
};
export default PerformanceChart;

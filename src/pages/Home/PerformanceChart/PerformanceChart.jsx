import PerformanceRadarChart from '../../../components/PerformanceRadarChart/PerformanceRadarChart';
import { ErrorContainer, LoaderContainer } from '../ScoreChart/ScoreChart';
import { Loader } from '../../../utils/styles/Atoms';
import { usePerformanceChart } from '../../../service/useService';

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
    return <ErrorContainer> Error! Cannot GET Performance</ErrorContainer>;
  }
  return <PerformanceRadarChart data={dataFormated} />;
};
export default PerformanceChart;

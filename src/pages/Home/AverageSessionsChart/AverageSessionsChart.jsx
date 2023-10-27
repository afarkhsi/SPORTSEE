import LineChartComponent from '../../../components/LineChart/lineChart';
import { ErrorContainer, LoaderContainer } from '../ScoreChart/ScoreChart';
import { Loader } from '../../../utils/styles/Atoms';
import { useLineChart } from '../../../service/useService';

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

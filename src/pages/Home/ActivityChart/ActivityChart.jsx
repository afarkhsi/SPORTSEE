import { ErrorContainer, LoaderContainer } from '../ScoreChart/ScoreChart';
import { Loader } from '../../../utils/styles/Atoms';
import BarChartComponent from '../../../components/BarChart/barChart';
import { useActivityChart } from '../../../service/useService';

const ActivityChart = () => {
  const { isLoading, dataFormated, isError } = useActivityChart();
  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  if (isError) {
    return <ErrorContainer> Error! Cannot GET Activity</ErrorContainer>;
  }

  return <BarChartComponent data={dataFormated} />;
};
export default ActivityChart;

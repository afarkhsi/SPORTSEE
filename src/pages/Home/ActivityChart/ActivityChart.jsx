import { useParams } from 'react-router-dom';
import Adapter from '../../../utils/adapter/adapter';
import useFetch, { apiUrl } from '../../../utils/hooks/useFetch';
import { ErrorContainer, LoaderContainer } from '../ScoreChart/ScoreChart';
import { Loader } from '../../../utils/styles/Atoms';
import BarChartComponent from '../../../components/BarChart/barChart';

const useActivityChart = () => {
  const { userId } = useParams();

  const url = `${apiUrl}/user/${userId}/activity`;
  const mockedUrl = `../../../mockDataActivity.json`;

  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data).activity();
  return { isLoading, isError: error, dataFormated };
};

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

import { useParams } from 'react-router-dom';
import Adapter from '../../../utils/adapter/adapter';
import useFetch, { apiUrl } from '../../../utils/hooks/useFetch';
import RadialChartComponent from '../../../components/RadialBarChart/RadialBarChart';
import { Loader } from '../../../utils/styles/Atoms';
import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  justifify-content: center;
  align-items: center;
  margin: auto;
`;

const useScoreChart = () => {
  const { userId } = useParams();

  const url = `${apiUrl}/user/${userId}`;
  const mockedUrl = `../../../mockDataUser.json`;

  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data).score();
  return { isLoading, isError: error, dataFormated };
};

const ScoreChart = () => {
  const { isLoading, dataFormated, isError } = useScoreChart();
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

  return <RadialChartComponent data={dataFormated} />;
};
export default ScoreChart;

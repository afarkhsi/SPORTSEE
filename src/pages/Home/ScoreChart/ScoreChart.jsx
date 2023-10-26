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

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: auto;
  width: 100%;
  background-color: rgba(247, 216, 15, 0.3);
  // opacity: 0.2;
  color: #7d6c00;
  font-weight: 500;
  font-size: 20px;
  height: 20%;
  border-radius: 5px;
  border: 1px solid rgb(247, 216, 15);
`;

const useScoreChart = () => {
  const { userId } = useParams();

  const url = `${apiUrl}/user/${userId}`;
  // const mockedUrl = `../../../mockDataUser.json`;

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
    return <ErrorContainer> Error! Cannot GET Score</ErrorContainer>;
  }

  return <RadialChartComponent data={dataFormated} />;
};
export default ScoreChart;

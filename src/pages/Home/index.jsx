import './style.css';
import NavBar from '../../components/NavBar/navBar';
import styled from 'styled-components';
import CompletaryData from '../../components/ComplementaryData/complementaryData';
import cKalImg from '../../assets/calories-icon.svg';
import fatImg from '../../assets/fat-icon.svg';
import carbsImg from '../../assets/carbs-icon.svg';
import proteinImg from '../../assets/protein-icon.svg';
import { Loader } from '../../utils/styles/Atoms';
import PerformanceChart from './PerformanceChart/PerformanceChart';
import AverageSessionsChart from './AverageSessionsChart/AverageSessionsChart';
import ScoreChart, { ErrorContainer } from './ScoreChart/ScoreChart';
import ActivityChart from './ActivityChart/ActivityChart';
import { useParams } from 'react-router-dom';
import useFetch, { apiUrl } from '../../utils/hooks/useFetch';
import Adapter from '../../utils/adapter/adapter';
import CardInfo from '../../components/CardInfos/CardInfos';

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 92%;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 50%;
  top: 50%;
  color: #e60000;
`;

const BodyContainer = styled.section`
  margin: auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
`;

const ChartsWrapper = styled.div`
  display: flex;
  margin: 70px auto 0px auto;
  justify-content: space-between;
`;

const ChartsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const ChartsContainerBlock = styled.div``;

const CaloriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;

function HomePage() {
  const { userId } = useParams();
  const url = `${apiUrl}/user/${userId}`;
  // const mockedUrl = `../../../mockDataUser.json`;
  const { data, isLoading, error } = useFetch(url);
  const dataKey = new Adapter(data?.data).completaryData();
  const dataUser = new Adapter(data?.data).userInfo();

  return (
    <HomeContainer>
      <NavBar />
      {isLoading ? (
        <LoaderWrapper className="loader">
          <Loader />
          <br />
          Chargement de la page ...
        </LoaderWrapper>
      ) : (
        <BodyContainer className="body_container">
          {error ? (
            <ErrorContainer> Error! Cannot GET User</ErrorContainer>
          ) : (
            <CardInfo data={dataUser} />
          )}
          <ChartsWrapper className="body_container_charts">
            <ChartsContainer>
              <ActivityChart />
              <ChartsContainerBlock className="default_class_chart">
                <AverageSessionsChart />
                <PerformanceChart />
                <ScoreChart />
              </ChartsContainerBlock>
            </ChartsContainer>
            {error ? (
              <ErrorContainer> Error! Cannot GET Consumption</ErrorContainer>
            ) : (
              <CaloriesContainer className="complementary_container">
                <CompletaryData
                  img={cKalImg}
                  data={dataKey?.calorieCount}
                  unit="kCal"
                  subtitle="Calories"
                />
                <CompletaryData
                  img={proteinImg}
                  data={dataKey?.proteinCount}
                  unit="g"
                  subtitle="Protéines"
                />
                <CompletaryData
                  img={carbsImg}
                  data={dataKey?.carbohydrateCount}
                  unit="g"
                  subtitle="Glucides"
                />
                <CompletaryData
                  img={fatImg}
                  data={dataKey?.carbohydrateCount}
                  unit="g"
                  subtitle="Lipides"
                />
              </CaloriesContainer>
            )}
          </ChartsWrapper>
        </BodyContainer>
      )}
    </HomeContainer>
  );
}

export default HomePage;

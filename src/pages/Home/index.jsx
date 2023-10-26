import './style.css';
import NavBar from '../../components/NavBar/navBar';
import styled from 'styled-components';
import CardInfo from '../../components/CardInfos/CardInfos';
import BarChartComponent from '../../components/BarChart/BarChart';
import RadialChartComponent from '../../components/RadialBarChart/RadialBarChart';
import LineChartComponent from '../../components/LineChart/LineChart';
import CompletaryData from '../../components/ComplementaryData/complementaryData';
import cKalImg from '../../assets/calories-icon.svg';
import fatImg from '../../assets/fat-icon.svg';
import carbsImg from '../../assets/carbs-icon.svg';
import proteinImg from '../../assets/protein-icon.svg';
import { Loader } from '../../utils/styles/Atoms';
import {
  UserActivityData,
  UserAverageSessionsData,
  UserMainData,
} from '../../utils/hooks/useFetch';
import ErrorMessage from '../../components/Error/error';
import PerformanceChart from './PerformanceChart/PerformanceChart';
import { useLocation } from 'react-router-dom';
import AverageSessionsChart from './AverageSessionsChart/AverageSessionsChart';
import ScoreChart from './ScoreChart/ScoreChart';
import User from './User/User';

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 92%;
`;

const LoaderWrapper = styled.div`
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
  const { isLoading, data, keyData } = UserMainData();
  const { dataActivity } = UserActivityData();

  // if (location?.state?.userId == null) {
  //   return <div>EROOOR</div>;
  // }
  // const { dataPerformance } = UserPerformanceData();

  // if (!data || !dataAverageSession || !dataActivity) {
  //   return <ErrorMessage />;
  // }

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
          <User />
          <ChartsWrapper className="body_container_charts">
            <ChartsContainer>
              <BarChartComponent data={dataActivity} />
              <ChartsContainerBlock className="default_class_chart">
                <AverageSessionsChart />
                <PerformanceChart />
                <ScoreChart />
              </ChartsContainerBlock>
            </ChartsContainer>
            <CaloriesContainer className="complementary_container">
              <CompletaryData
                img={cKalImg}
                value={keyData?.calorieCount}
                unit="kCal"
                subtitle="Calories"
              />
              <CompletaryData
                img={proteinImg}
                value={keyData?.proteinCount}
                unit="g"
                subtitle="Protéines"
              />
              <CompletaryData
                img={carbsImg}
                value={keyData?.carbohydrateCount}
                unit="g"
                subtitle="Glucides"
              />

              <CompletaryData
                img={fatImg}
                value={keyData?.lipidCount}
                unit="g"
                subtitle="Lipides"
              />
            </CaloriesContainer>
          </ChartsWrapper>
        </BodyContainer>
      )}
    </HomeContainer>
  );
}

export default HomePage;

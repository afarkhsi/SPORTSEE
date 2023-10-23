import './style.css';
import NavBar from '../../components/NavBar/navBar';
import styled from 'styled-components';
import CardInfo from '../../components/CardInfos/cardInfos';
import BarChartComponent from '../../components/BarChart/barChart';
import RadarChartComponent from '../../components/RadarChart/radarChart';
import RadialChartComponent from '../../components/RadialBarChart/radialBarChart';
import LineChartComponent from '../../components/LineChart/lineChart';
import CompletaryData from '../../components/ComplementaryData/complementaryData';
// import { USER_MAIN_DATA } from '../../mockData';
import cKalImg from '../../assets/calories-icon.svg';
import fatImg from '../../assets/fat-icon.svg';
import carbsImg from '../../assets/carbs-icon.svg';
import proteinImg from '../../assets/protein-icon.svg';
import { Loader } from '../../utils/styles/Atoms';
import {
  UserActivityData,
  UserAverageSessionsData,
  UserPerformanceData,
} from '../../utils/hooks/Api';
import { UserMainData } from '../../utils/hooks/Api';

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 1440px;
  width: 100%;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 50%;
  top: 50%;
`;

const BodyContainer = styled.section`
  margin: auto auto auto 50px;
  max-width: 1440px;
  width: 100%;
`;

const ChartsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin: 70px auto;
`;

const ChartsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const ChartsContainerBlock = styled.div`
  gap: 1.5rem;
`;

const CaloriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;

function HomePage() {
  const { isLoading, data, keyData } = UserMainData();
  const { dataAverageSession } = UserAverageSessionsData();
  const { dataActivity } = UserActivityData();
  const { dataPerformance } = UserPerformanceData();

  // const dataTest = useFetch('http://localhost:3000/user/12/average-sessions');
  // const i = dataTest?.data;
  // const j = i?.data;
  // const voyons = test?.sessions;
  // const y = data?.data?.keyData;
  console.log('111111:', keyData);
  return (
    <HomeContainer>
      <NavBar />
      {isLoading ? (
        <LoaderWrapper className="loader">
          <Loader />
        </LoaderWrapper>
      ) : (
        <BodyContainer className="body_container">
          <CardInfo data={data} />
          <ChartsWrapper>
            <ChartsContainer>
              <BarChartComponent data={dataActivity} />
              <ChartsContainerBlock className="default_class_chart">
                <LineChartComponent data={dataAverageSession} />
                <RadarChartComponent data={dataPerformance} />
                <RadialChartComponent data={data} />
              </ChartsContainerBlock>
            </ChartsContainer>
            <CaloriesContainer>
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

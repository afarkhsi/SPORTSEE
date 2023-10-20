import './style.css';
import NavBar from '../../components/NavBar/navBar';
import styled from 'styled-components';
import CardInfo from '../../components/CardInfos/cardInfos';
import BarChartComponent from '../../components/BarChart/barChart';
import RadarChartComponent from '../../components/RadarChart/radarChart';
import RadialChartComponent from '../../components/RadialBarChart/radialBarChart';
import LineChartComponent from '../../components/LineChart/lineChart';
import CompletaryData from '../../components/ComplementaryData/complementaryData';
import { USER_MAIN_DATA } from '../../mockData';
import cKalImg from '../../assets/calories-icon.svg';
import fatImg from '../../assets/fat-icon.svg';
import carbsImg from '../../assets/carbs-icon.svg';
import proteinImg from '../../assets/protein-icon.svg';

const HomeContainer = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
`;
const BodyContainer = styled.section`
  margin: auto auto auto 50px;
  max-width: 1440px;
  width: 100%;
`;

const ChartsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const ChartsContainer = styled.div`
  width: 100%;
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
  const data = USER_MAIN_DATA[0];
  const dataKey = data.keyData;
  return (
    <HomeContainer>
      <NavBar />
      <BodyContainer className="body_container">
        <CardInfo />
        <ChartsWrapper>
          <ChartsContainer>
            <BarChartComponent />
            <ChartsContainerBlock className="default_class_chart">
              <LineChartComponent />
              <RadarChartComponent />
              <RadialChartComponent />
            </ChartsContainerBlock>
          </ChartsContainer>
          <CaloriesContainer>
            <CompletaryData
              img={cKalImg}
              data={dataKey.calorieCount}
              unit="kCal"
              subtitle="Calories"
            />
            <CompletaryData
              img={proteinImg}
              data={dataKey.proteinCount}
              unit="g"
              subtitle="Protéines"
            />
            <CompletaryData
              img={carbsImg}
              data={dataKey.carbohydrateCount}
              unit="g"
              subtitle="Glucides"
            />

            <CompletaryData
              img={fatImg}
              data={dataKey.lipidCount}
              unit="g"
              subtitle="Lipides"
            />
          </CaloriesContainer>
        </ChartsWrapper>
      </BodyContainer>
    </HomeContainer>
  );
}

export default HomePage;

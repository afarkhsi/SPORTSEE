import './style.css';
import NavBar from '../../components/NavBar/navBar';
import styled from 'styled-components';
import CardInfo from '../../components/CardInfos/cardInfos';
import BarChartComponent from '../../components/BarChart/barChart';
import RadarChartComponent from '../../components/RadarChart/radarChart';
import RadialChartComponent from '../../components/RadialBarChart/radialBarChart';
import LineChartComponent from '../../components/LineChart/lineChart';

const HomeContainer = styled.div`
  display: flex;
`;
const BodyContainer = styled.section`
  margin: auto auto auto 50px;
`;

const ChartsWrapper = styled.div`
  display: flex;
  gap: 10rem;
`;

const ChartsContainer = styled.div``;

const ChartsContainerBlock = styled.div`
  display: flex;
  gap: 1.5rem;
`;
function HomePage() {
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
          <div>CALORIES</div>
        </ChartsWrapper>
      </BodyContainer>
    </HomeContainer>
  );
}

export default HomePage;

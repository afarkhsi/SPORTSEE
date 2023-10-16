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
const BodyContainer = styled.section``;
function HomePage() {
  return (
    <HomeContainer>
      <NavBar />
      <BodyContainer>
        <CardInfo />
        <div>
          <div>
            <BarChartComponent />
            <div className="default_class_chart">
              <LineChartComponent />
              <RadarChartComponent />
              <RadialChartComponent />
            </div>
          </div>
          <div>CALORIES</div>
        </div>
      </BodyContainer>
    </HomeContainer>
  );
}

export default HomePage;

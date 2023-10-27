import './style.css';
import NavBar from '../../components/NavBar/navBar';
import styled from 'styled-components';
import PerformanceChart from './PerformanceChart/PerformanceChart';
import AverageSessionsChart from './AverageSessionsChart/AverageSessionsChart';
import ScoreChart from './ScoreChart/ScoreChart';
import ActivityChart from './ActivityChart/ActivityChart';

import Consumption from './Consumption/Consumption';
import UserInfo from './UserInfo/UserInfo';

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

const HomePage = () => (
  <HomeContainer>
    <NavBar />
    <BodyContainer className="body_container">
      <UserInfo />
      <ChartsWrapper className="body_container_charts">
        <ChartsContainer>
          <ActivityChart />
          <ChartsContainerBlock className="default_class_chart">
            <AverageSessionsChart />
            <PerformanceChart />
            <ScoreChart />
          </ChartsContainerBlock>
        </ChartsContainer>
        <Consumption />
      </ChartsWrapper>
    </BodyContainer>
  </HomeContainer>
);

export default HomePage;

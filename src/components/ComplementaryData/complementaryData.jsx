import styled from 'styled-components';
import React from 'react';
import cKalImg from '../../assets/calories-icon.svg';
import fatImg from '../../assets/fat-icon.svg';
import carbsImg from '../../assets/carbs-icon.svg';
import proteinImg from '../../assets/protein-icon.svg';

const CompletaryDataContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0px 15px 0px 15px;
  background-color: #fbfbfb;
`;
const CompletaryImg = styled.img``;

const CompletaryInfo = styled.div``;

const CompletaryInfoTitle = styled.h2`
  font-size: 20px;
  color: #282d30;
`;

const CompletaryInfoSubtitle = styled.h3`
  font-size: 14px;
  color: #74798c;
`;

const CaloriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;

// Function generating Component cards complementary (fat / ckal / carbs / protein)
const CompletaryData = ({ data }) => {
  return (
    <CaloriesContainer className="complementary_container">
      <CompletaryDataContainer>
        <CompletaryImg src={cKalImg} alt="image" />
        <CompletaryInfo>
          <CompletaryInfoTitle>{data.calorieCount} cKal</CompletaryInfoTitle>
          <CompletaryInfoSubtitle>Calories</CompletaryInfoSubtitle>
        </CompletaryInfo>
      </CompletaryDataContainer>
      <CompletaryDataContainer>
        <CompletaryImg src={fatImg} alt="image" />
        <CompletaryInfo>
          <CompletaryInfoTitle>{data.proteinCount} g</CompletaryInfoTitle>
          <CompletaryInfoSubtitle>Protéines</CompletaryInfoSubtitle>
        </CompletaryInfo>
      </CompletaryDataContainer>
      <CompletaryDataContainer>
        <CompletaryImg src={carbsImg} alt="image" />
        <CompletaryInfo>
          <CompletaryInfoTitle>{data.carbohydrateCount} g</CompletaryInfoTitle>
          <CompletaryInfoSubtitle>Glucides</CompletaryInfoSubtitle>
        </CompletaryInfo>
      </CompletaryDataContainer>
      <CompletaryDataContainer>
        <CompletaryImg src={proteinImg} alt="image" />
        <CompletaryInfo>
          <CompletaryInfoTitle>{data.lipidCount} g</CompletaryInfoTitle>
          <CompletaryInfoSubtitle>Lipides</CompletaryInfoSubtitle>
        </CompletaryInfo>
      </CompletaryDataContainer>
    </CaloriesContainer>
  );
};

export default CompletaryData;

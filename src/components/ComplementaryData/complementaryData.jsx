import styled from 'styled-components';
import React from 'react';

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

// Function generating Component cards complementary (fat / ckal / carbs / protein)
const CompletaryData = (props) => {
  const { value, unit, subtitle, img } = props;

  return (
    <CompletaryDataContainer>
      <CompletaryImg src={img} alt="image" />
      <CompletaryInfo>
        <CompletaryInfoTitle>
          {value} {unit}
        </CompletaryInfoTitle>
        <CompletaryInfoSubtitle>{subtitle}</CompletaryInfoSubtitle>
      </CompletaryInfo>
    </CompletaryDataContainer>
  );
};

export default CompletaryData;

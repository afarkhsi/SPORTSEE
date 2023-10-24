/**En tant qu’utilisateur, je veux voir mon score moyen sous forme d’un RadialBarChart. */
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import './style.css';

const PieCHartContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width="100%";
  // background-color: #FBFBFB;
  min-width: 0%;
`;

const PieChartTitle = styled.h1`
  position: absolute;
  top: 15px;
  font-size: 15px;
  left: 40px;
  z-index: 1;
`;

const PieChartScoreText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60px;
  width: 100%;
`;

// Function generating Component RadialChart Score
export default function RadialChartComponent(props) {
  const data = props.data;
  const dataScore = data?.data?.score || data?.data?.todayScore;

  const pieData = [
    { name: 'completed', value: dataScore, fillColor: `#FF0000` },
    { name: 'not-completed', value: 1 - dataScore, fillColor: '#FBFBFB' },
  ];

  return (
    <PieCHartContainer className="piedchart-container">
      <PieChartTitle className="piedchart-container_title">Score</PieChartTitle>
      <ResponsiveContainer
        className="triple-chart-responsive"
        width="100%"
        height="100%"
      >
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            startAngle={90}
            endAngle={450}
            fill="#82ca9d"
            legendType="none"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
                strokeWidth={10}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <PieChartScoreText className="piedchart-container_score">
        <span className="piedchart-container_score_value">
          {100 * dataScore} %
        </span>
        <span className="piedchart-container_score_text">
          de votre objectif
        </span>
      </PieChartScoreText>
    </PieCHartContainer>
  );
}

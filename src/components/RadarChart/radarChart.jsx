/**En tant qu’utilisateur, je veux voir mon type d’activité réalisée sous forme d’un radar chart. */
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import './style.css';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default class RadarChartComponent extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

  render() {
    return (
      <RadarChart
        className="radarchart_wrapper"
        cx="50%"
        cy="50%"
        width={260}
        height={260}
        outerRadius="80%"
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#FF0000"
          fill="#FF0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
  }
}

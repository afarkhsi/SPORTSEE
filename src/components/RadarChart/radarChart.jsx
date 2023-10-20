/**En tant qu’utilisateur, je veux voir mon type d’activité réalisée sous forme d’un radar chart. */
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import './style.css';
import { USER_PERFORMANCE } from '../../mockData';

const RadarChartComponent = () => {
  const dataTest = USER_PERFORMANCE[0].data;

  const kindData = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  };

  const formatData = dataTest
    .map((dataValue) => ({
      ...dataValue,
      kind: kindData[dataValue.kind],
    }))
    .reverse();

  console.log(formatData);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        className="radarchart_wrapper"
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={formatData}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          tick={{ fontSize: '12px', fontWeight: '500' }}
          stroke="#FFFFFF"
        />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#FF0000"
          fill="#FF0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;

/**En tant qu’utilisateur, je veux voir mon type d’activité réalisée sous forme d’un radar chart. */
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import './style.css';

// Function generating Component RadarChart
const RadarChartComponent = (props) => {
  const data = props.data;
  const dataPerformance = data?.data;

  const kindData = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  };

  const formatData =
    dataPerformance &&
    dataPerformance
      .map((dataValue) => ({
        ...dataValue,
        kind: kindData[dataValue.kind],
      }))
      .reverse();

  return (
    <ResponsiveContainer
      className="triple-chart-responsive"
      width="100%"
      height="100%"
    >
      <RadarChart
        className="radarchart_wrapper"
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={formatData}
      >
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          // tick={{ fontSize: '10px', fontWeight: '500' }}
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

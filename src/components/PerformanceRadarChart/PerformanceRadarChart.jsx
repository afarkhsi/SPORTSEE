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
const PerformanceRadarChart = ({ data }) => (
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
      data={data}
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

export default PerformanceRadarChart;

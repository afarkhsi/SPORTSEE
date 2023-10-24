/**En tant qu’utilisateur, je veux voir ma durée moyenne des sessions sous la forme d’un LineChart. L’axe des abscisses correspond à la durée moyenne des sessions. Un tooltip apparaît au survol. */
import './style.css';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Function generating Component Linechart Average Sessions
export default function LineChartComponent(props) {
  const data = props.data;
  const dataSessions = data?.sessions;
  const tabDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const renderTooltip = ({ active, payload }) => {
    if (active && payload.length) {
      return (
        <div
          className="linechart_wrapper_info"
          style={{
            background: '#FFFFFF',
            color: '#000000',
            height: '20px',
            margin: '10px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          <p>{payload[0].value} min</p>
        </div>
      );
    }
  };

  const renderLegend = () => {
    return (
      <div
        className="linechart_wrapper_title"
        style={{
          color: 'white',
          opacity: '0.7',
          height: '60px',
          margin: '10px',
          textAlign: 'start',
          fontSize: '15px',
          fontWeight: '400',
        }}
      >
        Durée moyenne <br />
        des sessions
      </div>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        className="linechart_wrapper"
        data={dataSessions}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          horizontal={false}
        />
        <defs>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          style={{ fontSize: 15, fontWeight: 500, fill: '#FFFFFF' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(day) => tabDays[day - 1]}
          tick={{ fill: '#FFFFFF', opacity: '0.5' }}
          tickSize={12}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis hide={true} />
        <Tooltip
          content={renderTooltip}
          position={{ y: 0 }}
          cursor={{
            stroke: '#000000',
            strokeOpacity: '10%',
            strokeWidth: '20%',
            height: '100%',
          }}
        />
        <Legend content={renderLegend} />
        <Line
          type="bump"
          dataKey="sessionLength"
          stroke="url(#lineGradient)"
          strokeWidth={2.5}
          opacity={0.5}
          activeDot={{ r: 4, opacity: '50%' }}
          dot={false}
          legendType="none"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

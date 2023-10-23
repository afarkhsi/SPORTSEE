// import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './style.css';

// import { USER_ACTIVITY } from '../../mockData';

const BarChartComponent = (props) => {
  const data = props.data;
  const dataActivity = data?.sessions;

  console.log('younamar: ', dataActivity);

  const dayData = () => {
    return dataActivity.map((session, index) => index + 1);
  };

  console.log(dayData);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        className="barchart_wrapper"
        barSize={10}
        barGap={10}
        data={dataActivity}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey={dayData}
          tickLine={false}
          tick={{ stroke: '#9B9EAC', fontWeight: '400', fontSize: '14px' }}
          dy={14}
          padding={{ left: -40 }}
        />
        <YAxis
          yAxisId="kilogram"
          orientation="right"
          type="number"
          domain={['dataMin - 5', 'auto']}
          tick={{ stroke: '#9B9EAC', fontWeight: '400', fontSize: '14px' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          yAxisId="calories"
          orientation="right"
          type="number"
          hide="true"
          domain={['dataMin - 5', 'auto']}
        />
        <text
          x="10%"
          y="10%"
          dy={-15}
          style={{ fontSize: 15, fontWeight: 'bold', fill: '#20253A' }}
          width={200}
          height={30}
          scaletofit="true"
          textAnchor="middle"
          verticalanchor="middle"
        >
          Activité quotidienne
        </text>
        <Tooltip background="black" />
        <Legend
          className="legend-size"
          align="right"
          verticalAlign="top"
          height={90}
          iconType="circle"
          iconSize={8}
        />
        <Bar
          yAxisId="kilogram"
          name="Poids (kg)"
          dataKey="kilogram"
          fill="#282D30"
          radius={[10, 10, 0, 0]}
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          yAxisId="calories"
          name="Calories brûlées (kCal)"
          dataKey="calories"
          fill="#E60000"
          radius={[10, 10, 0, 0]}
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

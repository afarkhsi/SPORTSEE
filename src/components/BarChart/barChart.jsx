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

// Function generating Component BarChart Activity
const BarChartComponent = ({ data }) => {
  /**Function generating tick datakey in xAxis */
  const dayData = () => {
    return data.map((session, index) => index + 1);
  };

  /**Function generating customize tooltip */
  const renderTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="barchart_wrapper_info"
          style={{
            background: '#ff0000',
            color: '#ffffff',
            height: '80px',
            width: '60px',
            margin: '10px',
            textAlign: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <p className="barchart_wrapper_info_kg">{payload[0].value}kg</p>
          <p className="barchart_wrapper_info_kcal">{payload[1].value}Kcal</p>
        </div>
      );
    }
  };

  return (
    <ResponsiveContainer
      className="barcharts-responsive-container"
      width="99%"
      height="100%"
    >
      <BarChart
        className="barchart_wrapper"
        barSize={10}
        barGap={10}
        data={data}
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
          className="barChart_title"
          x="10%"
          y="10%"
          dy={-14}
          padding={{ left: 20 }}
          style={{ fontWeight: 'bold', fill: '#20253A' }}
          width={200}
          height={30}
          scaletofit="true"
          textAnchor="middle"
          verticalanchor="middle"
        >
          Activité quotidienne
        </text>
        <Tooltip content={renderTooltip} />
        <Legend
          className="legend-size"
          align="right"
          verticalAlign="top"
          height={80}
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

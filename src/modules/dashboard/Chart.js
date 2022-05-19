import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 1300000),
  createData('06:00', 2600000),
  createData('09:00', 2800000),
  createData('12:00', 5850000),
  createData('15:00', 7200000),
  createData('18:00', 10400000),
  createData('21:00', 12400000),
  createData('24:00', undefined),
];
const DataFormater = (number) => {
  if (number > 1000000000) {
      return (number / 1000000000).toString() + 'B';
  } else if (number > 1000000) {
      return (number / 1000000).toString() + 'M';
  } else if (number > 1000) {
      return (number / 1000).toString() + 'K';
  } else {
      return number.toString();
  }
}
export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Doanh thu hôm nay</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 1,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            tickFormatter={DataFormater}
          >
            {/* <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Doanh thu
            </Label> */}
          </YAxis>
          <Tooltip formatter={DataFormater} />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
            name="Số tiền"
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

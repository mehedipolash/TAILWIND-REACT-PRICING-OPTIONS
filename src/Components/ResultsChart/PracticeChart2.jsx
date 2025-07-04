import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  Legend,
} from 'recharts';

const messiStats = [
  { stat: 'Goals', value: 820 },
  { stat: 'Assists', value: 340 },
  { stat: 'Appearances', value: 1050 },
];

const PracticeChart2 = () => {
  return (
    <div className="flex justify-center items-center h-[500px]">
      <RadarChart
        outerRadius={150}
        width={500}
        height={400}
        data={messiStats} // Use messiStats here
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="stat" />
        <PolarRadiusAxis angle={30} domain={[0, 1200]} />
        <Radar
          name="Lionel Messi"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Tooltip />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default PracticeChart2;

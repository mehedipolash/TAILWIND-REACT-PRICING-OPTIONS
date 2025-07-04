import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const players = [
  { name: 'Virat', runs: 13000, wickets: 4 },
  { name: 'Root', runs: 11000, wickets: 30 },
  { name: 'Babar', runs: 9200, wickets: 1 },
  { name: 'Shakib', runs: 7200, wickets: 320 },
  { name: 'Cummins', runs: 900, wickets: 250 },
  { name: 'Stokes', runs: 5700, wickets: 180 },
  { name: 'Bumrah', runs: 250, wickets: 150 },
  { name: 'Kane', runs: 8900, wickets: 10 },
  { name: 'Warner', runs: 8800, wickets: 5 },
  { name: 'Rashid', runs: 900, wickets: 300 },
];

const Practicerchart = () => {
  return (
    <div>
      <AreaChart width={800} height={500} data={players}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="runs"
          stroke="red"
          fill="#b2bec3"
          activeDot={{ r: 6, fill: 'white', stroke: 'red', strokeWidth: 2 }}
          isAnimationActive={true}
        />
        <Area
          type="cardinal"
          dataKey="wickets"
          stroke="blue"
          fill="red"
          activeDot={{ r: 6, fill: 'white', stroke: 'blue', strokeWidth: 2 }}
          isAnimationActive={true}
        />
      </AreaChart>
    </div>
  );
};

export default Practicerchart;

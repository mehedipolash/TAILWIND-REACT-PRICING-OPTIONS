import React from 'react';
import { Line, LineChart, XAxis } from 'recharts';

const resultData = [
  {
    id: 1,
    name: 'Ayesha Khan',
    physics: 85,
    chemistry: 78,
    math: 90,
  },
  {
    id: 2,
    name: 'Rahul Das',
    physics: 70,
    chemistry: 82,
    math: 75,
  },
  {
    id: 3,
    name: 'Sara Ahmed',
    physics: 92,
    chemistry: 88,
    math: 94,
  },
  {
    id: 4,
    name: 'Arif Chowdhury',
    physics: 66,
    chemistry: 73,
    math: 68,
  },
  {
    id: 5,
    name: 'Niloy Islam',
    physics: 77,
    chemistry: 69,
    math: 80,
  },
  {
    id: 6,
    name: 'Tanisha Roy',
    physics: 88,
    chemistry: 91,
    math: 86,
  },
  {
    id: 7,
    name: 'Mehedi Hasan',
    physics: 80,
    chemistry: 74,
    math: 79,
  },
  {
    id: 8,
    name: 'Priya Saha',
    physics: 95,
    chemistry: 90,
    math: 96,
  },
  {
    id: 9,
    name: 'Naimur Rahman',
    physics: 60,
    chemistry: 65,
    math: 58,
  },
  {
    id: 10,
    name: 'Farzana Jahan',
    physics: 84,
    chemistry: 89,
    math: 83,
  },
];

const ResultsChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={'name'}></XAxis>
        <Line dataKey="math"></Line>
        <Line dataKey={'chemistry'} stroke="gold"></Line>
      </LineChart>
    </div>
  );
};

export default ResultsChart;

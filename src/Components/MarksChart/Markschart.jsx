import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Markschart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // data processing for the chart

  const MarksChartData = marksData.map(studentData => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.Physics,
      chemistry: studentData.marks.Chemistry,
      math: studentData.marks.Math,
    };

    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;

    return student;
  });

  console.log(MarksChartData); // ✅ This includes avg

  return (
    <div>
      <BarChart width={500} height={400} data={MarksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="avg" fill="yellow"></Bar>
        <Bar dataKey="chemistry" fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default Markschart;

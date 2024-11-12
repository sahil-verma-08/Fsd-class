import React from 'react'
import Marks from './Marks'

const DisplayMarks = () => {
    const student =[{m1:54,m2:34,m3:75},
        {m1:54,m2:34,m3:75},
        {m1:54,m2:34,m3:45},
        {m1:54,m2:34,m3:55},
        {m1:54,m2:34,m3:85},
    ]
  return (
    <>
    {student.map((student,index)=>(
        <Marks key={index} m1={student.m1} m2={student.m2} m3={student.m3}/>
    ))}

</>
  );
}

export default DisplayMarks
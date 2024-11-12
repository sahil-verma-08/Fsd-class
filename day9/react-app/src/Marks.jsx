import './Marks.css'

const Marks = ({m1,m2,m3}) => {
  return (
    <div id ='dis'>
        <h1>Marksheet</h1>
     <h2>sem1:{m1}</h2>
     <h2>sem2:{m2}</h2>
     <h2>sem3:{m3}</h2>
    </div>
  );
};

export default Marks
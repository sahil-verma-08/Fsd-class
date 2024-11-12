import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// import Marks from './Marks.jsx'
import DisplayMarks from './DisplayMarks.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={"sahil"} email={"sahild@7878"} mob={"667676768778"} />
    {/* <Marks m1={45} m2={64} m3={84}/> */}
    <App name={"vinod"} email={"vinod@7878"} mob={"9676768778"} />
    {/* <Marks m1={4} m2={6} m3={8}/> */}
    <DisplayMarks />
  </StrictMode>
);
 

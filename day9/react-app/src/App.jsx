import './App.css'   // by "rafce" shortcut

const App = ({name,email,mob}) => {
  return (
    <div id="disp">
    <h1>student detail</h1>
    <h2>name: {name}</h2>
    <h2>email:{email}</h2>
    <h2>mobile:{mob}</h2></div>
  )
}

export default App
import './App.css';
import { HomePage } from './Pages/Home';
import { Dashborading } from './Pages/DashBorard';
import {useState} from "react";

function App() {
  const [start, setStart] = useState(true)
  console.log(1)
  console.log(start)

  return (
    <div className="App">
      {start ? (<Dashborading setStart={setStart}/>) : (<HomePage setStart={setStart}/>)}
    </div>
  );
}

export default App;

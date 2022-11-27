import './App.css';
import { HomePage } from './Pages/Home';
import { Dashborading } from './Pages/DashBorard';
import {HeaderDash} from './Componensts/header'
import {useState} from "react";

function App() {
  const [start, setStart] = useState(true)
  function Login (){
    if(start === true){
       setStart(false)
    }
  }
  function Logout (){
    if(start === false){
       setStart(true)
    }
  }
  return (
    <div className="App">
      {start ? (<HomePage setStart={setStart} Login={Login}/>) : (<Dashborading  setStart={setStart} Logout={Logout} />)}
    </div>
  );
}

export default App;

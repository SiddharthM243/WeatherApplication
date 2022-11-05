import './App.css';
import  {Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import GetWeather from './Components/GetWeather/GetWeather';
import TemperatureConverter from './Components/TemperatureConverter/TemperatureConverter';
import Nav from './Components/Nav/Nav';




function App() {
  return (
    <div className='bg'>
    <div className='main'>
    <Nav/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/GetWeather" element={<GetWeather/>}/>
        <Route path="/TemperatureConverter" element={<TemperatureConverter/>}/>
      </Routes>
    </div>
    </div>
    </div>
  );
}

export default App;

import './App.css';
import { accordionData } from './Asset/Data';
import Accordian from './Components/Accordian';

function App() {
  console.log(accordionData);
  return (
    <div className="App">
      <h4>Accordian Demo</h4>
      <div>
        {accordionData.map((item) => (
          <>
            <Accordian data={item} />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;

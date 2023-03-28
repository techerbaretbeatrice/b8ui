import './App.css';
import { Select } from './lib';
function App() {
  return (
    <div className="App">
      <div className="form-select-container">
        <Select
          label="Select label"
          options={{
            optionA: "valueA",
            optionB: "valueB"
          }

          } />
      </div>

    </div>
  );
}

export default App;

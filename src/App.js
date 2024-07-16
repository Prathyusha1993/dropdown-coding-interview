import './App.css';
import Checkbox from './components/Checkbox';
import SelectDropdown from './components/SelectDropdown';

function App() {
  return (
    <div className="App">
      <h2>DropDown Question</h2>
      <SelectDropdown />
      <Checkbox />
    </div>
  );
}

export default App;

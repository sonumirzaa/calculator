import './App.css';
import Calculator from './Calculator';
import { Route , Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <h1 className="Cal">Thee Calculator</h1>
      <Routes>
        <Route path="/" element={<Calculator />} />
        
      </Routes>    
      
    </div>
  );
}

export default App;

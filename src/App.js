import './App.css';
import Home from './component/Home';
import Add from './component/Add';
import Edit from './component/Edit';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

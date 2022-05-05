import './App.css';
import { Home } from './pages/home/home'
import { Form } from './pages/form/form';
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home props={navigate} />} exact />
        <Route path="/form/:id" element={<Form />} exact />
      </Routes>
    </div>
  );
}

export default App;

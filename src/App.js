import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SingleEvent from './Pages/SingleEvent';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/event/:eventId' element={<SingleEvent/>}/>
   </Routes>
    </div>
  );
}

export default App;

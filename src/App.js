
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateCita from './routes/CreateCita.jsx';
import EditCita from './routes/EditCita.jsx';
import Inicio from './routes/Inicio.jsx';
import ShowCita from './routes/ShowCita.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}>
          <Route index element={<ShowCita/>}></Route>
          <Route path='/create' element={<CreateCita/>}></Route>
          <Route path='/edit/:id' element={<EditCita/>}></Route>
        </Route >
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

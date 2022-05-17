import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/home' element={<Home></Home>}></Route>
          
          
          
          </Routes>
        </BrowserRouter>

      
    </div>
  );
}

export default App;

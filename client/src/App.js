import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import Create from './components/Create';
import Detail from './components/Detail';
import Error404 from './components/Error404';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/create'  element={<Create></Create>} ></Route>
            <Route path='/home/:id' element={<Detail></Detail>}></Route>
            <Route path='*' element={<Error404></Error404>} ></Route>
            
          
          </Routes>
        </BrowserRouter>

      
    </div>
  );
}

export default App;

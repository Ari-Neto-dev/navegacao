import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function RoutesApp(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<home/>}/>
      <Route path="/" element={<sobre/>}/>

    </Routes>

    </BrowserRouter>

  )


}
export default RoutesApp
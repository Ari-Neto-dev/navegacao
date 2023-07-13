

import{Link} from 'react-router-dom';
function Contato(){
  return(
    <div>
      <h1>Página Conatato</h1>
      <span>Conatato da Empresa (dd) XXXXX-XXXX</span><br/><br/>
      <Link to="/"> Home</Link><br/>
      <Link to="/sobre">Sobre</Link>

    </div>
  
  )
}

export default Contato;
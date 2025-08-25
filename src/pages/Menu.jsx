import {Link} from 'react-router-dom'
function Menu(){
    return(
        <div> 
            <nav>
             <Link to="/">Início</Link>  
                 <hr/>
            <Link to="/contato">Contato</Link>
            </nav>
        </div>
        
    );
}

export default Menu;
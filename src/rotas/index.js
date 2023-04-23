import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from '../paginas/login';
import Principal from '../paginas/principal';
import Cadastro from '../paginas/cadastro';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Login/>} />
                <Route exact={true} path="/cadastro" element={<Cadastro/>} />
                <Route exact={true} path="/principal" element={<Principal/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
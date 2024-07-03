import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMin from "./paginas/SobreMin";
import Menu from "./componentes/Menu";

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/sobremin" element={<SobreMin />} />
                <Route path="*" element={<h2>Página não encontrada</h2>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

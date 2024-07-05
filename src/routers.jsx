import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMin from "./paginas/SobreMin";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./paginas/Post";
import NaoEncontrada from "./paginas/NaoEncontrada";
import ScrollToTop from "./componentes/ScrollToTop";

function AppRouters() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Menu />

            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Inicio />} />
                    <Route path="sobremin" element={<SobreMin />} />
                </Route>
                <Route path="post/:id/*" element={<Post />} />
                <Route path="*" element={<NaoEncontrada />} />
            </Routes>

            <Rodape />
        </BrowserRouter>
    );
}

export default AppRouters;

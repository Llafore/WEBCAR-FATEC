import { Route, Routes } from "react-router-dom";
import { Home } from '../pages/Home';
import CarDetailsPage from "../pages/CardDetailsPage";
import LoginForm from "../components/LoginForm";
import SingupForm from "../components/SingupForm";
import Finalizacao from "../components/Finalizacao";

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/detalhes-carro" element={<CarDetailsPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/cadastro" element={<SingupForm />} />
            <Route path="/finalizacao" element={<Finalizacao />} />
        </Routes>
    )
}
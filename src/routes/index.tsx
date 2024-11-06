import { Route, Routes } from "react-router-dom";
import { Home } from '../pages/Home';
import CarDetailsPage from "../pages/CardDetailsPage";

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/detalhes-carro" element={<CarDetailsPage />} />
        </Routes>
    )
}
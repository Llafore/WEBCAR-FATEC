import { PesquisaForm } from '../components/PesquisaForm';
import { useParams } from 'react-router-dom';

export function Pesquisa(){
    const { marca } = useParams();
    const marcaStr = marca ?? ""; // eu admito Norton, aqui o GPT me salvou 
    return(
        PesquisaForm(marcaStr)
    )
}
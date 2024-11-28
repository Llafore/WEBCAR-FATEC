import { carregaVeiculos } from '../services/carregaVeiculos'; // O caminho correto
import { Vitrine } from '../components/Vitrine';

const endPoint = 'http://localhost:8080/api/veiculo/pesquisa';

type Veiculo = {
    image: string;
    modelo: string;
    versao: string;
    preco: number;
    ano: number;
    km: number;
  };
  
const veiculoPesquisa: Veiculo = {
    image: "",
    modelo: "", // colocar aqui o valor captado do edit do label
    versao: "",
    preco: 0,
    ano: 0,
    km: 0,
  };

export function Pesquisa() {
  const { cardsData, isLoading } = carregaVeiculos(endPoint, veiculoPesquisa);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Vitrine items={cardsData || []} />
    </>
  );
}

import { carregaVeiculos } from '../services/carregaVeiculos'; // O caminho correto
import { Vitrine } from '../components/Vitrine';

type Veiculo = {
    image: string;
    modelo: string;
    versao: string;
    preco: number;
    ano: number;
    km: number;
  };
  
const veiculoVazio: Veiculo = {
    image: "",
    modelo: "",
    versao: "",
    preco: 0,
    ano: 0,
    km: 0,
  };

const endPoint = 'http://localhost:8080/api/veiculo/recentes';

export function Home() {
  const { cardsData, isLoading } = carregaVeiculos(endPoint, veiculoVazio);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Vitrine items={cardsData || []} />
    </>
  );
}

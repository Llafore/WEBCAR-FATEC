import { carregaVeiculos } from '../services/carregaVeiculos';
import { Vitrine } from './Vitrine';

const endPoint = 'http://localhost:8080/api/veiculo/pesquisa';

type Veiculo = {
    image: string;
    modelo: string;
    versao: string;
    preco: number;
    ano: number;
    km: number;
  };


export function PesquisaForm(parametro : string) {
  const veiculoPesquisa: Veiculo = {
    image: "",
    modelo: parametro,
    versao: "",
    preco: 0,
    ano: 0,
    km: 0,
  };
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

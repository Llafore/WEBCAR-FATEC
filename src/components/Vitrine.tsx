import { styled } from '@mui/material/styles';
import ActionAreaCard from '../components/Card';

const StyledDiv = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '16px',
  padding: '16px',
  margin: '5vh auto 0 auto',
  maxWidth: '90%',
  boxSizing: 'border-box',
});

type Veiculo = {
  image: string;
  modelo: string;
  versao: string;
  preco: number;
  ano: number;
  km: number;
};

type VitrineProps = {
  items: Veiculo[];
};


export function Vitrine({ items }: VitrineProps) {
  if (!items || items.length === 0) {
    return <p>Nenhum veículo encontrado.</p>;
  }

  return (
    <StyledDiv>
      {items.map((item, index) => {
        const precoFormatado = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(item.preco);

        return (
          <ActionAreaCard
            key={index}
            image={item.image}
            modelo={item.modelo}
            altText="Foto"
            versao={item.versao}
            preco={precoFormatado}
            ano={item.ano.toString()}
            km={item.km.toString()}
          />
        );
      })}
    </StyledDiv>
  );
}

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

interface VitrineProps {
  items: {
    image: string;
    modelo: string;
    versao: string;
    preco: string;
    ano: string;
    km: string;
  }[];
}

export function Vitrine({ items }: VitrineProps) {
  return (
    <StyledDiv>
      {items.map((item, index) => (
        <ActionAreaCard
          key={index}
          image={item.image}
          modelo={item.modelo}
          altText="Foto"
          versao={item.versao}
          preco={item.preco}
          ano={item.ano}
          km={item.km}
        />
      ))}
    </StyledDiv>
  );
}
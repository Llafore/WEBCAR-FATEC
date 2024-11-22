import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

interface ActionAreaCardProps {
  image: string;
  modelo: string;
  versao: string;
  altText: string;
  preco: string;
  ano: string;
  km: string;
}

// Card responsivo com largura mínima e máxima
const ResponsiveCard = styled(Card)({
  maxWidth: '400px',
  minWidth: '280px',
  width: '100%',
  margin: '0 auto',
  '@media (min-width: 600px)': {
    maxWidth: '345px',
  },
});

// Estilos para o conteúdo do card, especialmente para exibir a imagem grande e destacar o modelo e preço
const CardContentStyled = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
  textAlign: 'center',
});

export default function ActionAreaCard({
  image,
  modelo,
  versao,
  altText,
  preco,
  ano,
  km,
}: ActionAreaCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Envia os dados do carro como state para a página de detalhes
    navigate('/detalhes-carro', {
      state: { image, modelo, versao, altText, preco, ano, km },
    });
  };

  return (
    <ResponsiveCard onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={altText}
          sx={{ objectFit: 'cover' }}
        />
        <CardContentStyled>
          <Typography variant="h5" component="div">
            {modelo}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
            {preco}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {versao}
          </Typography>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '8px' }}>
            <Typography variant="body2" color="text.secondary">
              Ano: {ano}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              KM: {km}
            </Typography>
          </div>
        </CardContentStyled>
      </CardActionArea>
    </ResponsiveCard>
  );
}

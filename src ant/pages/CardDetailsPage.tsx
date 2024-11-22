import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const PageContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  gap: '32px',
  position: 'relative',
  minHeight: '80vh',
  // Ajuste a direção para vertical quando a largura da tela for menor que 600px
  '@media (max-width: 950px)': {
    flexDirection: 'column', // Altere para coluna em telas pequenas
  },
});

const ImageContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
});

const SummaryCard = styled(Card)({
  flex: 1,
  maxWidth: '400px',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  justifyContent: 'space-between',
  height: '100%',
});

const BackButton = styled(IconButton)({
  position: 'absolute',
  top: '16px',
  left: '16px',
});

export default function CarDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, modelo, versao, altText, preco, ano, km } = location.state;

  const handleBackClick = () => {
    navigate(-1); // Retorna para a página anterior
  };

  const handleBuyClick = () => {
    alert("Compra realizada com sucesso!"); // Aqui poderia ir para uma página de checkout
  };

  return (
    <PageContainer>
      {/* Botão de voltar no canto superior esquerdo */}
      <BackButton onClick={handleBackClick}>
        <ArrowBackIcon fontSize="large" />
      </BackButton>

      {/* Imagem grande do carro */}
      <ImageContainer>
        <CardMedia
          component="img"
          image={image}
          alt={altText}
          sx={{
            width: '100%',
            height: '100%',
            maxHeight: '600px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </ImageContainer>

      {/* Resumo de compra à direita */}
      <SummaryCard>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>
            {modelo} - {versao}
          </Typography>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>
            {preco}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', marginBottom: '8px' }}>
            Ano: {ano}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', marginBottom: '8px' }}>
            KM: {km}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ marginTop: '16px', textAlign: 'center' }}>
            Descrição detalhada do carro aqui.
          </Typography>
        </CardContent>
        
        {/* Botão de compra no final do resumo */}
        <Stack direction="row" justifyContent="center" sx={{ marginTop: '24px' }}>
          <Button variant="contained" color="secondary" onClick={handleBuyClick} sx={{ width: '100%' }}>
            Comprar
          </Button>
        </Stack>
      </SummaryCard>
    </PageContainer>
  );
}
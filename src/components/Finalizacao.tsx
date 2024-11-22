import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Divider, Typography, useTheme, useMediaQuery, styled, alpha } from '@mui/material';

const PurchaseContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  gap: '32px',
  minHeight: '80vh',
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: '20px',
  },
}));

const PurchaseCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '600px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const PurchaseCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '24px',
  flex: 1,
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },
}));

const PurchaseSummary: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleConfirmPurchase = () => {
    const confirmationMessage = 'Pedido XXX solicitado, em breve um vendedor entrará em contato pelo número (XX) XXXXX-XXXX ou pelo email XXXX@mail.com';
    alert(confirmationMessage);
  };

  const handleCancelPurchase = () => {
    window.history.back();
  };

  return (
    <PurchaseContainer>
      <PurchaseCard>
        <CardMedia
          component="img"
          height={isMobile ? '180' : '200'}
          image="/api/placeholder/400/320"
          alt="Product Image"
        />
        <PurchaseCardContent>
          <Box>
            <Typography variant="h5">Modelo do Carro - 2023</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1">
              Descrição do produto, informações adicionais, características, etc.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" color="primary" onClick={handleConfirmPurchase}>
              Confirmar
            </Button>
            <Button variant="outlined" color="primary" onClick={handleCancelPurchase}>
              Cancelar
            </Button>
          </Box>
        </PurchaseCardContent>
      </PurchaseCard>
    </PurchaseContainer>
  );
};

export default PurchaseSummary;
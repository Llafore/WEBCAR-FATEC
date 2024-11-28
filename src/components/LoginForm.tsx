import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link, useMediaQuery, styled, alpha } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginContainer = styled(Box)(({ theme }) => ({
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

const LoginFormWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '32px',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  width: '100%',
  maxWidth: '400px',
}));

const SignupSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  padding: '16px',
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  borderRadius: '8px',
  width: '100%',
  maxWidth: '400px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '24px',
  },
}));

const LoginForm: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    email: email,
    senha: password
  }; 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/usuario/login', user)  
  
      if (response.status === 200) {
        localStorage.setItem('usuario', JSON.stringify(response.data));
        alert(`Login realizado com sucesso! Bem-vindo, ${response.data.nome}!`);
        window.location.href = '/';
      } else {
        alert(`Email ou Senhas incorretos!`);
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Erro ao logar. Tente novamente mais tarde.');
    }
  };

  const handleForgotPassword = () => {
    alert('Direcionando para página de recuperação de senha');
  };

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/cadastro'); 
  };

  return (
    <LoginContainer>
      <LoginFormWrapper>
        <Typography variant="h5" color="primary" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 2, mb: 2 }}
        >
          Entrar
        </Button>
        {isMobile ? (
          <Button
            color="primary"
            onClick={handleForgotPassword}
          >
            Esqueci minha senha
          </Button>
        ) : (
          <Link
            component="button"
            onClick={handleForgotPassword}
            sx={{ cursor: 'pointer' }}
          >
            Esqueci minha senha
          </Link>
        )}
      </LoginFormWrapper>

      <SignupSection>
        <Typography variant="body1">Ainda não possuo cadastro?</Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSignup}
        >
          Clique Aqui!
        </Button>
      </SignupSection>
    </LoginContainer>
  );
};

export default LoginForm;
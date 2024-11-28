import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link, useMediaQuery, styled, alpha } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';

const SignupContainer = styled(Box)(({ theme }) => ({
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

const SignupFormWrapper = styled(Box)(({ theme }) => ({
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

const SignupForm: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    const isNameValid = name.length >= 2;
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isCpfValid = cpf.replace(/\D/g, '').length === 11;
    const isPasswordValid = password.length >= 6 && /[a-z]/.test(password) && /\d/.test(password);
    const isPasswordConfirmed = password === confirmPassword;

    if (!isNameValid) {
      alert('Insira seu nome!');
      return;
    }

    if (!isEmailValid) {
      alert('Email inválido!');
      return;
    }

    if (!isCpfValid) {
      alert('A senha deve ter no mínimo 6 caracteres, incluindo letras e números!');
      return;
    }

    if (!isPasswordValid) {
      alert('A senha deve ter no mínimo 6 caracteres, incluindo letras e números!');
      return;
    }

    if (!isPasswordConfirmed) {
      alert('As senhas não coincidem!');
      return;
    }

    const user = {
      nome: name,
      email: email,
      telefone: phone,
      cpf: cpf,
      senha: password,
    }; 

    try {
      const response = await axios.post('http://localhost:8080/api/usuario',user)  
      if (response.status == 201) {
        alert('Cadastro realizado com sucesso, encaminhando para o login!');
        window.location.href = '/login';
      } else {
        alert(`Erro ao cadastrar: ${response.data.message || 'Erro desconhecido'}`);
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Erro ao cadastrar. Tente novamente.');
    }

    // window.location.href = '/';
  };

  return (
    <SignupContainer>
      <SignupFormWrapper>
        <Typography variant="h5" color="primary" gutterBottom>
          Cadastro
        </Typography>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Telefone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="CPF"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
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
        <TextField
          label="Confirmar Senha"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignup}
          sx={{ mt: 2, mb: 2 }}
        >
          Cadastrar
        </Button>
      </SignupFormWrapper>
    </SignupContainer>
  );
};

export default SignupForm;
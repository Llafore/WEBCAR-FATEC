import  ActionAreaCard  from '../components/Card';
import { styled } from '@mui/material/styles';

    const cardsData = [
        { image: '/assets/images/catalogo/000/001-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/002-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '200.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/003-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '130.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/004-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/005-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '140.000,00', ano: '2022/2023', km: '85.000' },        
        { image: '/assets/images/catalogo/000/001-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/002-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/003-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/004-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '140.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/005-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },        
        { image: '/assets/images/catalogo/000/001-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '400.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/002-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/003-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/004-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/005-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },        
        { image: '/assets/images/catalogo/000/001-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/002-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/003-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/004-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/005-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },        
        { image: '/assets/images/catalogo/000/001-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/002-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/002-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/003-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/004-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/005-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/005-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        { image: '/assets/images/catalogo/000/005-001.jpg', modelo: 'Modelo X', versao: '2p flex 3.5L', preco: '100.000,00', ano: '2022/2023', km: '85.000' },
        ];

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

export function Home(){
    return(
        <>
            <StyledDiv>
                {cardsData.map((card, index) => (
                    <ActionAreaCard
                        key={index}
                        image={card.image}
                        modelo={card.modelo}
                        altText='Foto'
                        versao={card.versao}
                        preco={card.preco}
                        ano={card.ano}
                        km={card.km}
                    />
                ))} 
            </StyledDiv>
        </>
    )
}
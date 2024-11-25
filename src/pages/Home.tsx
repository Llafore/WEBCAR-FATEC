import { Vitrine } from '../components/Vitrine';

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

export function Home(){
    return(
        <>
            <Vitrine items={cardsData} />
        </>
    )
}
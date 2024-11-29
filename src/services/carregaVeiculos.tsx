import { useState, useEffect } from 'react';
import axios from 'axios';

type Veiculo = {
  image: string;
  modelo: string;
  versao: string;
  preco: number;
  ano: number;
  km: number;
};

export function carregaVeiculos(api: string, entity : Veiculo) {
  const [cardsData, setCardsData] = useState<Veiculo[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVeiculos = async () => {
      setCardsData([]);
      try {
        const response = await axios.post(api, entity);
        if (response.status === 200) {
          setCardsData(response.data);
        } else {
          setCardsData(null);
          alert('Problemas ao conectar com o servidor...');
        }
      } catch (error) {
        console.error('Erro ao carregar veículos:', error);
        setCardsData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVeiculos();
  }, [api]);
  return { cardsData, isLoading };
}

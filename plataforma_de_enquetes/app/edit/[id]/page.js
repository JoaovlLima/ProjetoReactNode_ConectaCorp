"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function EditPage({ params }) {
  const router = useRouter(); 
  const { id } = params;

  const [enquete, setEnquete] = useState({
    titulo: '',
    descricao: '',
    categoria: 'Nenhuma Categoria Selecionada',
    imagem: '',
    opcoes: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categorias = [
    'Nenhuma Categoria Selecionada',
    'Tecnologia',
    'Entretenimento',
    'Esportes',
    'Viagens',
    'Comida',
    'Estilo de Vida',
    'Moda e Beleza',
    'Educação',
    'Política',
    'Saúde e Bem-Estar',
    'Finanças e Economia',
    'Curiosidades'
  ];

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/enquetes/${id}`);
        if (!response.ok) {
          throw new Error('Enquete não encontrada');
        }
        const data = await response.json();
        console.log('Dados recebidos:', data); // Log dos dados recebidos
        setEnquete({
          ...data,
          opcoes: data.opcoes || [],
        });
        setLoading(false);
      } catch (err) {
        setError(`Erro ao carregar dados: ${err.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Ou de onde o token é armazenado
      const response = await fetch(`/api/enquetes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Inclua o token JWT no cabeçalho
        },
        body: JSON.stringify(enquete),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar enquete');
      }

      router.push('/enquetes');
    } catch (error) {
      setError(`Erro ao atualizar enquete: ${error.message}`);
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input
          type="text"
          value={enquete.titulo || ''}
          onChange={(e) => setEnquete({ ...enquete, titulo: e.target.value })}
        />
      </label>
      <label>
        Descrição:
        <input
          type="text"
          value={enquete.descricao || ''}
          onChange={(e) => setEnquete({ ...enquete, descricao: e.target.value })}
        />
      </label>
      <label>
        Categoria:
        <select
          value={enquete.categoria || 'Nenhuma Categoria Selecionada'}
          onChange={(e) => setEnquete({ ...enquete, categoria: e.target.value })}
        >
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </label>
      <label>
        Imagem:
        <input
          type="text"
          value={enquete.imagem || ''}
          onChange={(e) => setEnquete({ ...enquete, imagem: e.target.value })}
        />
      </label>
      <label>
        Opções (uma por linha):
        <textarea
          value={enquete.opcoes ? enquete.opcoes.join('\n') : ''}
          onChange={(e) =>
            setEnquete({ ...enquete, opcoes: e.target.value.split('\n') })
          }
        />
      </label>
      <button type="submit">Atualizar Enquete</button>
    </form>
  );
}

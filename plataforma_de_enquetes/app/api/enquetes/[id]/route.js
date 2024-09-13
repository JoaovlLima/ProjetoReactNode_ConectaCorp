// pages/api/enquetes/[id]/route.js

import { NextResponse } from 'next/server';
import { getEnquete, updateEnquete } from '@/controllers/EnqueteController';
import { jwtMiddleware } from "@/utils/middleware";

// Função para lidar com o método GET
export async function GET(req, { params }) {
  const { id } = params; // Extraindo 'id' dos parâmetros

  console.log('Buscando enquete com ID:', id); // Log do ID

  try {
    const enquete = await getEnquete(id); // Verifica se o ID da enquete é passado para a função correta
    if (!enquete) {
      console.log('Enquete não encontrada');
      return NextResponse.json({ message: 'Enquete não encontrada' }, { status: 404 });
    }

    console.log('Enquete encontrada:', enquete);
    return NextResponse.json(enquete, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar enquete:', error);
    return NextResponse.json({ message: 'Erro ao buscar enquete', error: error.message }, { status: 500 });
  }
}

// Função para lidar com o método PUT
const updateEnqueteHandler = async (req) => {
  const id = new URL(req.url).pathname.split('/').pop(); // Extrai o ID da URL

  if (!id) {
    return new Response(JSON.stringify({ message: 'ID não fornecido' }), { status: 400 });
  }

  try {
    const body = await req.json();
    const updatedEnquete = await updateEnquete(id, body); // Usa `updateEnquete` para atualizar a enquete

    if (!updatedEnquete) {
      return new Response(JSON.stringify({ message: 'Enquete não encontrada' }), { status: 404 });
    }

    return new Response(JSON.stringify(updatedEnquete), { status: 200 });
  } catch (error) {
    console.error('Erro ao atualizar enquete:', error);
    return new Response(JSON.stringify({ message: 'Erro ao atualizar enquete', error: error.message }), { status: 500 });
  }
};

// Aplica o middleware à rota PUT
export async function PUT(req) {
  return jwtMiddleware(updateEnqueteHandler)(req);
}

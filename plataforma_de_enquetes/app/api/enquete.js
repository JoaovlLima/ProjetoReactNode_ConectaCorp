// pages/api/enquetes.js
import { connectMongo } from '@/utils/dbConnect';
import Enquete from '@/models/Enquete';
import jwt from 'jsonwebtoken';

const decodeToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId;
  } catch (error) {
    return null;
  }
};

export async function GET(req, res) {
  try {
    await connectMongo();
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Token não fornecido' });

    const userId = decodeToken(token);
    if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' });

    const enquetes = await Enquete.find({ usuarioId: userId });
    res.status(200).json({ enquetes });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar enquetes', details: error.message });
  }
}

export async function DELETE(req, res) {
  try {
    await connectMongo();
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Token não fornecido' });

    const userId = decodeToken(token);
    if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' });

    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'ID não fornecido' });

    const result = await Enquete.deleteOne({ _id: id, usuarioId: userId });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Enquete não encontrada ou não autorizada' });

    res.status(200).json({ message: 'Enquete excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir enquete', details: error.message });
  }
}

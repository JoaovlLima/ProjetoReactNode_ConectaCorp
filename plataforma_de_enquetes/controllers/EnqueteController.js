import express from "express";
import Enquete from "@/models/Enquete";
import User from "@/models/User";

const router = express.Router();

// Adicionar uma nova enquete
router.post("/enquetes", async (req, res) => {
  try {
    const { titulo, descricao, categoria, imagem, opcoes } = req.body;
    const { userId } = req; // Verifique se userId está presente

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const novaEnquete = new Enquete({
      titulo,
      descricao,
      categoria,
      imagem,
      opcoes,
      usuarioId: userId,
    });

    await novaEnquete.save();
    return res.status(201).json(novaEnquete);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao criar enquete", error: error.message });
  }
});

// Recuperar todas as enquetes
router.get("/enquetes", async (req, res) => {
  try {
    const enquetes = await Enquete.find().populate("usuarioId", "nome email");
    return res.status(200).json(enquetes);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao recuperar enquetes", error: error.message });
  }
});

// Atualizar uma enquete existente
router.put("/enquetes", async (req, res) => {
  try {
    const { id, titulo, descricao, categoria, imagem, opcoes } = req.body;
    const { userId } = req;

    const enquete = await Enquete.findById(id);
    if (!enquete) {
      return res.status(404).json({ message: "Enquete não encontrada" });
    }

    if (enquete.usuarioId.toString() !== userId) {
      return res.status(403).json({ message: "Usuário não autorizado" });
    }

    enquete.titulo = titulo || enquete.titulo;
    enquete.descricao = descricao || enquete.descricao;
    enquete.categoria = categoria || enquete.categoria;
    enquete.imagem = imagem || enquete.imagem;
    enquete.opcoes = opcoes || enquete.opcoes;

    await enquete.save();
    return res.status(200).json(enquete);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar enquete", error: error.message });
  }
});

// Deletar uma enquete existente
router.delete("/enquetes", async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req;

    const enquete = await Enquete.findById(id);
    if (!enquete) {
      return res.status(404).json({ message: "Enquete não encontrada" });
    }

    if (enquete.usuarioId.toString() !== userId) {
      return res.status(403).json({ message: "Usuário não autorizado" });
    }

    await Enquete.findByIdAndDelete(id);
    return res.status(200).json({ message: "Enquete deletada com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao deletar enquete", error: error.message });
  }
});

export default router;

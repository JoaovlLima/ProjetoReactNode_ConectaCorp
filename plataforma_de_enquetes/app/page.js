import Header from './components/hearder'; // Importando o Header

export default function Home() {
  return (
    <div>
      {/* Chamando o Header */}
      <Header /> 

      {/* Conteúdo da página principal */}
      <main>
        <h1>Bem-vindo à Página Inicial</h1>
        <p>Essa é a página principal do seu site com o Header reutilizável.</p>
      </main>
    </div>
  );
}

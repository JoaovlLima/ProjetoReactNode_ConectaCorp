import Header from '../components/hearder';

export default function Home() {
    return (
      <div>
        {/* Aqui você está "chamando" o Header, inserindo ele como um componente dentro da página */}
        <Header /> 
  
        <main>
          <h1>Bem-vindo à Página Inicial</h1>
          <p>Aqui vai o conteúdo da sua página.</p>
        </main>
      </div>
    );
  }
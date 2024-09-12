import Header from './components/hearder'; // Importando o Header
import styles from './home.module.css'; // Estilos da página


export default function Home() {
  return (
    <div>
      {/* Chamando o Header */}
      <Header /> 

      <div className={styles.container}>
        {/* Div do lado esquerdo - Perfil do Usuário */}
        <div className={styles.sidebar}>
          <div className={styles.profile}>
            {/* Contêiner para a imagem e informações */}
            <div className={styles.profileInfo}>
              {/* Imagem do Perfil */}
              <img src="/user-avatar.png" alt="Foto de Perfil" className={styles.avatar} />

              {/* Informações do Usuário */}
              <div className={styles.info}>
                <h2>Nome do Usuário</h2>
                <p>usuario@email.com</p>
                <p>Cidade Exemplo</p>
              </div>
            </div>
            <hr className={styles.hr} />
            {/* Histórico do Usuário */}
            <div className={styles.history}>
              <h3>Histórico Recentes</h3>
              <div className={styles.historySections}>
                <div className={styles.section}>
                  <h4>Enquetes Ativas</h4>
                  <ul>
                    <li className={styles.listItem}>
                      <img src="/icon-active.png" alt="Ícone Ativo" className={styles.itemIcon} />
                      Enquete Ativa 1
                    </li>
                    <li className={styles.listItem}>
                      <img src="/icon-active.png" alt="Ícone Ativo" className={styles.itemIcon} />
                      Enquete Ativa 2
                    </li>
                  </ul>
                  <hr className={styles.hr} />
                </div>
                <div className={styles.section}>
                  <h4>Enquetes Finalizadas</h4>
                  <ul>
                    <li className={styles.listItem}>
                      <img src="/icon-finished.png" alt="Ícone Finalizado" className={styles.itemIcon} />
                      Enquete Finalizada 1
                    </li>
                    <li className={styles.listItem}>
                      <img src="/icon-finished.png" alt="Ícone Finalizado" className={styles.itemIcon} />
                      Enquete Finalizada 2
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo principal - Lado direito */}
        <div className={styles.mainContent}>
          <div className={styles.mainHeader}>
            <h1>Enquetes</h1>
            <div className={styles.controls}>
              <input type="text" placeholder="Pesquisar..." />
              <button>Filtro</button>
            </div>
          </div>
        
          
          {/* Card */}
          <div className={styles.card}>
            <img src="/example-image.jpg" alt="Imagem do Card" />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Título do Card</h2>
              <p className={styles.cardDescription}>Descrição do card que fornece uma breve explicação sobre o conteúdo ou o tópico abordado.</p>
              <button className={styles.cardButton}>Ver Mais</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
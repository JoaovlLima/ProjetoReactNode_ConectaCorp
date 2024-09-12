import React from 'react';
import styles from './hearder.module.css'; // Importa o CSS Module

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className={styles.fields}>
        <a href='' title='Criar Enquete'
        <input type="text" placeholder="Campo 2" />
        <input type="text" placeholder="Campo 3" />
      </div>
      <div className={styles.logout}>
        <button>Sair</button>
      </div>
    </header>
  );
}

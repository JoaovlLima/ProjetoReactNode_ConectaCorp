"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importando Bootstrap CSS
import { useEffect } from "react"; // Para inicializar o Bootstrap JS

export default function Home() {
  // Para garantir que o JavaScript do Bootstrap seja carregado corretamente
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <div>
      <Header />
      <main className={`container ${styles.main}`}>
        {/* Carrossel */}
        <div
          id="carouselExampleCaptions"
          className="carousel slide mb-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img/carrossel/carro1.jpg"
                className={`d-block w-100 ${styles.carouselImg}`}
                alt="Imagem 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/carrossel/carro2.png"
                className={`d-block w-100 ${styles.carouselImg}`}
                alt="Imagem 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/carrossel/carro3.png"
                className={`d-block w-100 ${styles.carouselImg}`}
                alt="Imagem 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Seção de Destaques */}
        <section className="my-5">
          <h2 className={styles.sectionTitle}>Enquetes em Destaque</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Melhor série de 2023</h5>
                  <p className="card-text">Vote na sua série favorita de 2023.</p>
                  <a href="#" className="btn btn-primary">
                    Vote agora
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Melhor jogador de futebol</h5>
                  <p className="card-text">Quem será o melhor jogador deste ano?</p>
                  <a href="#" className="btn btn-primary">
                    Vote agora
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Melhor smartphone do mercado</h5>
                  <p className="card-text">Escolha o melhor smartphone de 2023.</p>
                  <a href="#" className="btn btn-primary">
                    Vote agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Últimas Enquetes */}
        <section className="my-5">
          <h2 className={styles.sectionTitle}>Últimas Enquetes</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Melhor filme do ano</h5>
                  <p className="card-text">Vote no melhor filme lançado recentemente.</p>
                  <a href="#" className="btn btn-secondary">Ver resultados</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Copa do Mundo 2026</h5>
                  <p className="card-text">Quem você acha que vencerá a próxima Copa?</p>
                  <a href="#" className="btn btn-secondary">Ver resultados</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Criar Enquete */}
        <section className="text-center my-5">
          <h2 className={styles.sectionTitle}>Crie sua própria enquete!</h2>
          <p>É simples, rápido e você pode ver os resultados em tempo real.</p>
          <a href="#" className="btn btn-lg btn-success">Criar Enquete</a>
        </section>

        {/* Depoimentos */}
        <section className="my-5">
          <h2 className={styles.sectionTitle}>Depoimentos dos Usuários</h2>
          <div className="row">
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p>"Uma plataforma incrível! Criei minha primeira enquete em minutos e já tive centenas de votos."</p>
                <footer className="blockquote-footer">João Silva</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p>"Perfeito para o meu trabalho. Uso as enquetes para obter feedback rápido dos meus clientes."</p>
                <footer className="blockquote-footer">Ana Souza</footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

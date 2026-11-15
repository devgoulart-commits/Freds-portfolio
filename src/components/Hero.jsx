import React from 'react';

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="wrap">
        <div className="hero-top-badges">
          <span className="badge">
            <i></i> Em transição de carreira para tecnologia
          </span>
          <span className="badge">
            <i style={{ background: '#00D9FF', boxShadow: '0 0 8px #00D9FF' }}></i> PCD · CID F70 — Deficiência Intelectual Leve
          </span>
        </div>

        <div className="hero-grid">
          <div>
            <p className="hero-greeting">Olá, sou</p>
            <h1>Frederico Goulart Abreu</h1>
            <div className="hero-headline-accent">Gestão, Tecnologia e Inovação.</div>
            <p className="sub">
              Profissional com mais de 7 anos de experiência administrativa e em atendimento, em formação em
              Desenvolvimento de Sistemas no Senac Minas e apaixonado por tecnologia e construção de soluções inovadoras.
            </p>

            <div className="hero-pills">
              <span className="hero-pill">
                <span className="ico">&lt;/&gt;</span> Desenvolvimento de Sistemas
              </span>
              <span className="hero-pill">
                <span className="ico">👥</span> Gestão
              </span>
              <span className="hero-pill">
                <span className="ico">🚀</span> Inovação
              </span>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#produtos">
                Conheça meu portfólio →
              </a>
              <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
                Baixar Currículo ↓
              </button>
              <a className="btn btn-ghost" href="https://wa.me/5531997661377" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img src="/frederico-perfil.jpg" alt="Frederico Goulart Abreu" />
            </div>
            <div className="hero-quote-card">
              <p>Construindo soluções para um futuro melhor.</p>
              <span className="quote-line"></span>
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="cell">
            <div className="stats-ico">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
            <div>
              <b>7+</b>
              <span>Anos de experiência</span>
            </div>
          </div>

          <div className="cell">
            <div className="stats-ico">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div>
              <b>2027</b>
              <span>Conclusão do Técnico</span>
            </div>
          </div>

          <div className="cell">
            <div className="stats-ico">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div>
              <b>FGA</b>
              <span>Projetos próprios</span>
            </div>
          </div>

          <div className="cell">
            <div className="stats-ico">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div>
              <b>3</b>
              <span>Idiomas (PT, EN, ES)</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

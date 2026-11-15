import React from 'react';

const PRODUTOS = [
  {
    id: 'fredtech-educacional',
    title: 'FREDTECH EDUCACIONAL',
    desc: (
      <>
        <span className="prod-highlight">Gestão acadêmica</span> moderna para instituições de ensino.
      </>
    ),
    cta: 'Acessar demonstração',
    color: '#00E5D1',
    glow: 'rgba(0, 229, 209, 0.35)',
    iconBg: 'rgba(0, 229, 209, 0.12)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'plena-med',
    title: 'Plena Med',
    desc: 'Gestão de saúde eficiente para clínicas e consultórios.',
    cta: 'Conhecer solução',
    color: '#14D9B8',
    glow: 'rgba(20, 217, 184, 0.35)',
    iconBg: 'rgba(20, 217, 184, 0.12)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
      </svg>
    ),
  },
  {
    id: 'fredtech-erp',
    title: 'FREDTECH ERP',
    desc: 'Controle seu estoque de forma simples e inteligente.',
    cta: 'Testar sistema',
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.35)',
    iconBg: 'rgba(245, 158, 11, 0.12)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'fredtech-suite',
    title: 'FREDTECH SUITE',
    desc: 'Ferramentas completas para seus arquivos PDF.',
    cta: 'Acessar gratuitamente',
    color: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.45)',
    iconBg: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
    isSolidBadge: true,
    icon: <span className="prod-pdf-badge">PDF</span>,
  },
  {
    id: 'bros-verse',
    title: 'Bros Verse',
    desc: 'Jogos digitais para todas as idades.',
    cta: 'Conhecer jogos',
    color: '#6366F1',
    glow: 'rgba(99, 102, 241, 0.38)',
    iconBg: 'rgba(99, 102, 241, 0.14)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <line x1="15" y1="13" x2="15.01" y2="13" />
        <line x1="18" y1="11" x2="18.01" y2="11" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
      </svg>
    ),
  },
  {
    id: 'movimente-se',
    title: 'Movimente-se',
    desc: 'Cuide da sua saúde com tecnologia e bem-estar.',
    cta: 'Saiba mais',
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.35)',
    iconBg: 'rgba(16, 185, 129, 0.12)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13" cy="4" r="2" />
        <path d="m7.5 10.5 3-2 2.5 2 3 1.5" />
        <path d="m10.5 8.5-1.5 5 3 2.5 1 4.5" />
        <path d="m9 13.5-3.5 3.5" />
      </svg>
    ),
  },
];

const FEATURED_SYSTEMS = [
  'FREDTECH PDFSUITE',
  'Nexus Escolar (SGE)',
  'Inventa ERP',
  'Cognit AI',
];

export default function Produtos() {
  return (
    <section className="produtos-section" id="produtos">
      <div className="wrap">
        <div className="produtos-header-bar">
          <div className="produtos-intro">
            <div className="fga-mini-head">
              <div className="fga-brand-cube">
                <img src="/icone-fga.png" alt="FGA Holding" />
              </div>
              <strong>FGA HOLDING</strong>
            </div>
            <h2>
              Nossos <span>Produtos</span>
            </h2>
            <p>Soluções inovadoras para transformar ideias em realidade.</p>
          </div>
          <a href="#holding" className="produtos-eco-btn">
            Conheça todo o ecossistema →
          </a>
        </div>

        <div className="produtos-grid-6">
          {PRODUTOS.map((prod) => (
            <a
              key={prod.id}
              href="#holding"
              className="prod-card-vertical"
              style={{
                '--prod-color': prod.color,
                '--prod-glow': prod.glow,
                '--prod-icon-bg': prod.iconBg,
              }}
            >
              <div className="prod-card-top">
                <div className={`prod-ico-box${prod.isSolidBadge ? ' is-solid' : ''}`}>
                  {prod.icon}
                </div>
                <h3>{prod.title}</h3>
                <p>{prod.desc}</p>
              </div>

              <div className="prod-cta-pill">
                <span>{prod.cta}</span>
                <span className="prod-cta-arrow">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Sistemas e Projetos em Destaque */}
        <div className="featured-sys-bar">
          <div className="featured-sys-title">
            <span>🚀</span>
            <span>Projetos em Destaque:</span>
          </div>
          <div className="featured-sys-list">
            {FEATURED_SYSTEMS.map((sys) => (
              <span key={sys} className="featured-sys-tag">
                {sys}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

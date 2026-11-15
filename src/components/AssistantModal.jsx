import React, { useState, useEffect, useRef } from 'react';

export default function AssistantModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatLogRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  const navigateTo = (selector) => {
    setIsOpen(false);
    const target = document.querySelector(selector);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 220);
    }
  };

  const printCV = () => {
    setIsOpen(false);
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const renderPresetContent = (type) => {
    switch (type) {
      case 'produtos':
        return (
          <>
            Conheça os produtos oficiais da <strong>FGA Holding</strong>:<br />
            • <strong>FREDTECH EDUCACIONAL:</strong> Gestão acadêmica moderna para instituições de ensino.<br />
            • <strong>Plena Med:</strong> Gestão de saúde eficiente para clínicas e consultórios.<br />
            • <strong>FREDTECH ERP:</strong> Controle seu estoque de forma simples e inteligente.<br />
            • <strong>FREDTECH SUITE:</strong> Ferramentas completas para seus arquivos PDF.<br />
            • <strong>Bros Verse:</strong> Jogos digitais para todas as idades.<br />
            • <strong>Movimente-se:</strong> Cuide da sua saúde com tecnologia e bem-estar.<br />
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#produtos')}>
              Ver Nossos Produtos →
            </button>
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#holding')}>
              Ver FGA Holdings →
            </button>
          </>
        );
      case 'projetos':
        return (
          <>
            Meus projetos e sistemas em destaque incluem: <strong>FREDTECH PDFSUITE</strong>, <strong>Nexus Escolar (SGE)</strong>, <strong>Inventa ERP</strong> e <strong>Cognit AI</strong>, além da estruturação das 4 frentes da <strong>FGA Holdings</strong>.<br />
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#produtos')}>
              Ver Produtos &amp; Sistemas →
            </button>
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#holding')}>
              Ver FGA Holdings →
            </button>
          </>
        );
      case 'curriculo':
        return (
          <>
            Você pode salvar meu currículo completo em <strong>PDF</strong> agora mesmo ou navegar pelas minhas experiências e formações:<br />
            <button type="button" className="fga-inline-link" onClick={printCV}>
              📄 Salvar / Imprimir Currículo (PDF)
            </button>
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#experiencia')}>
              Ver Experiência →
            </button>
          </>
        );
      case 'contato':
        return (
          <>
            Vamos conversar! Escolha o canal de sua preferência:<br />
            • <strong>WhatsApp:</strong> (31) 99766-1377<br />
            • <strong>E-mail:</strong> fgoulartabreu@outlook.com<br />
            <a className="fga-inline-link" href="https://wa.me/5531997661377" target="_blank" rel="noopener noreferrer">
              Chamar no WhatsApp →
            </a>
            <a className="fga-inline-link" href="mailto:fgoulartabreu@outlook.com">
              Enviar E-mail →
            </a>
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#contato')}>
              Ver seção Contato →
            </button>
          </>
        );
      case 'experiencia':
        return (
          <>
            Possuo <strong>mais de 7 anos de experiência</strong> administrativa e de atendimento: atuo desde Nov/2021 como <strong>Auxiliar de Secretaria Escolar na FIEMG</strong> e trabalhei por 2 anos e 5 meses na <strong>AeC Contact Center (TIM BKO)</strong>.<br />
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#experiencia')}>
              Ver Experiência Profissional →
            </button>
          </>
        );
      case 'formacao':
        return (
          <>
            Sou graduado em <strong>Gestão de Recursos Humanos (UNOPAR)</strong> e curso <strong>Técnico em Desenvolvimento de Sistemas no Senac Minas</strong> (conclusão em 2027), além de possuir cursos pelo IFSULDEMINAS em Assistente Financeiro, Programador Web e Operador de Computador.<br />
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#formacao')}>
              Ver Formação Acadêmica →
            </button>
          </>
        );
      case 'habilidades':
        return (
          <>
            Minhas principais competências unem <strong>Atendimento ao Público (90%)</strong>, <strong>Rotinas Administrativas (88%)</strong>, <strong>Organização de Processos (85%)</strong>, <strong>RH (80%)</strong> e <strong>Informática/Desenvolvimento de Sistemas</strong>.<br />
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#habilidades')}>
              Ver Habilidades →
            </button>
          </>
        );
      case 'pcd':
        return (
          <>
            Sou profissional <strong>PCD (CID F70 — Deficiência Intelectual Leve)</strong>, com ampla vivência corporativa, ensino superior completo e formação técnica em tecnologia em andamento.<br />
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#sobre')}>
              Ver Perfil Completo →
            </button>
          </>
        );
      default:
        return (
          <>
            Sou o Assistente Virtual de <strong>Frederico Goulart Abreu</strong> e da <strong>FGA Holding</strong>! Posso te apresentar as empresas da holding, projetos em tecnologia, experiências na FIEMG/AeC, formação acadêmica ou canais de contato.<br />
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#sobre')}>
              Conhecer Perfil →
            </button>
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#holding')}>
              Ver FGA Holdings →
            </button>
            <button type="button" className="fga-inline-link" onClick={() => navigateTo('#contato')}>
              Entrar em Contato →
            </button>
          </>
        );
    }
  };

  const handlePresetClick = (type, label) => {
    setMessages((prev) => [...prev, { userText: label, type }]);
  };

  const classifyQuery = (query) => {
    const q = query.toLowerCase();
    if (q.includes('produto') || q.includes('holding') || q.includes('nexus') || q.includes('vertex') || q.includes('empresa')) return 'produtos';
    if (q.includes('projeto') || q.includes('sistema') || q.includes('tecnologia') || q.includes('program')) return 'projetos';
    if (q.includes('curriculo') || q.includes('currículo') || q.includes('pdf') || q.includes('baixar') || q.includes('cv')) return 'curriculo';
    if (q.includes('contato') || q.includes('whats') || q.includes('email') || q.includes('e-mail') || q.includes('telefone') || q.includes('falar') || q.includes('linkedin')) return 'contato';
    if (q.includes('experi') || q.includes('fiemg') || q.includes('aec') || q.includes('trabalh')) return 'experiencia';
    if (q.includes('forma') || q.includes('faculdade') || q.includes('senac') || q.includes('unopar') || q.includes('curso') || q.includes('estudo')) return 'formacao';
    if (q.includes('habilidade') || q.includes('compet') || q.includes('idioma') || q.includes('ingl')) return 'habilidades';
    if (q.includes('pcd') || q.includes('laudo') || q.includes('cid')) return 'pcd';
    return 'default';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;
    setInputValue('');
    const type = classifyQuery(text);
    setMessages((prev) => [...prev, { userText: text, type }]);
  };

  return (
    <>
      {/* Botão Flutuante do Assistente FGA Holding */}
      <button
        className="fga-fab"
        type="button"
        aria-label="Abrir Assistente da FGA Holding"
        onClick={() => setIsOpen(true)}
      >
        <div className="fga-fab-avatar">
          <img src="/mascote-fga.jpg" alt="Mascote FGA Holding" />
        </div>
        <div className="fga-fab-info">
          <strong>Assistente FGA</strong>
          <span>Online agora</span>
        </div>
      </button>

      {/* Janela de Boas-Vindas + Chat Interativo da FGA Holding */}
      <div
        className={`fga-assistant-overlay${isOpen ? '' : ' is-hidden'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="fgaWelcomeTitle"
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
      >
        <div className="fga-assistant-modal">
          <button
            className="fga-close-btn"
            type="button"
            aria-label="Minimizar assistente"
            title="Minimizar para o canto"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          {/* Mascote 3D */}
          <div className="fga-mascot-col">
            <img src="/mascote-fga.jpg" alt="Robô Assistente da FGA Holding" />
            <span className="fga-mascot-tag">IA · FGA Holding</span>
          </div>

          {/* Área Interativa */}
          <div className="fga-interaction-col">
            <div>
              {/* Balão de Boas-Vindas */}
              <div className="fga-speech-bubble">
                <div className="fga-soundwave" aria-hidden="true">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="fga-speech-text">
                  <h3 id="fgaWelcomeTitle">
                    Olá! Eu sou o Assistente da <strong>FGA Holding!</strong>
                  </h3>
                  <p id="fgaSubtitle">Como posso te ajudar hoje?</p>
                </div>
              </div>

              {/* 4 Botões Principais idênticos à arte */}
              <div className="fga-quick-actions">
                <button
                  type="button"
                  className="fga-action-btn"
                  onClick={() => handlePresetClick('produtos', 'Conhecer meus produtos')}
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                  <span>Conhecer meus produtos</span>
                </button>

                <button
                  type="button"
                  className="fga-action-btn"
                  onClick={() => handlePresetClick('projetos', 'Ver meus projetos')}
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="2" y1="20" x2="22" y2="20" />
                  </svg>
                  <span>Ver meus projetos</span>
                </button>

                <button
                  type="button"
                  className="fga-action-btn"
                  onClick={() => handlePresetClick('curriculo', 'Baixar meu currículo')}
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="8" y1="13" x2="16" y2="13" />
                    <line x1="8" y1="17" x2="16" y2="17" />
                  </svg>
                  <span>Baixar meu currículo</span>
                </button>

                <button
                  type="button"
                  className="fga-action-btn"
                  onClick={() => handlePresetClick('contato', 'Falar comigo')}
                >
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Falar comigo</span>
                </button>
              </div>

              {/* Histórico de Respostas do Assistente */}
              <div
                ref={chatLogRef}
                className={`fga-chat-log${messages.length > 0 ? ' has-messages' : ''}`}
                aria-live="polite"
              >
                {messages.map((msg, idx) => (
                  <div key={idx} className="fga-msg">
                    <div className="fga-msg-user">Você: {msg.userText}</div>
                    <div className="fga-msg-bot">{renderPresetContent(msg.type)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campo de Pergunta Livre */}
            <form className="fga-chat-form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="fga-chat-input"
                placeholder="Faça uma pergunta sobre Frederico ou a FGA Holding..."
                autoComplete="off"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className="fga-chat-send">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

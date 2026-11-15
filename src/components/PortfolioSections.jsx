import React from 'react';

export default function PortfolioSections() {
  return (
    <>
      <section id="sobre">
        <div className="wrap">
          <p className="eyebrow">Sobre mim</p>
          <h2 className="h">Perfil profissional</h2>
          <p className="lede">
            Atuo desde novembro de 2021 como Auxiliar de secretaria escolar na FIEMG, com foco em atendimento, organização de processos administrativos e suporte em rotinas operacionais. Antes disso, atuei por mais de dois anos como Atendente de telemarketing ativo na AeC Contact Center, na operação TIM BKO. Sou graduado em Gestão de Recursos Humanos pela UNOPAR e mantenho certificações complementares em primeiros socorros, informática e finanças. Atualmente estou migrando para a área de tecnologia: curso Técnico em Desenvolvimento de Sistemas no Senac Minas (conclusão prevista em 2027), aplicando a experiência administrativa e a visão de processos que já construí a novos projetos em programação e desenvolvimento de software.
          </p>
        </div>
      </section>

      <section id="habilidades">
        <div className="wrap">
          <p className="eyebrow">Habilidades</p>
          <h2 className="h">Competências</h2>
          <div className="skill-cats">
            <div className="skill-cat">
              <h3>Rotinas administrativas</h3>
              <div className="skill">
                <div className="top"><span className="name">Atendimento ao público</span><span className="pct">90%</span></div>
                <div className="bar"><i style={{ width: '90%' }}></i></div>
              </div>
              <div className="skill">
                <div className="top"><span className="name">Organização de processos</span><span className="pct">85%</span></div>
                <div className="bar"><i style={{ width: '85%' }}></i></div>
              </div>
              <div className="skill">
                <div className="top"><span className="name">Rotinas administrativas</span><span className="pct">88%</span></div>
                <div className="bar"><i style={{ width: '88%' }}></i></div>
              </div>
            </div>
            <div className="skill-cat">
              <h3>Tecnologia · em formação</h3>
              <div className="skill">
                <div className="top"><span className="name">Lógica de programação</span><span className="pct">55%</span></div>
                <div className="bar"><i style={{ width: '55%' }}></i></div>
              </div>
              <div className="skill">
                <div className="top"><span className="name">Desenvolvimento web</span><span className="pct">45%</span></div>
                <div className="bar"><i style={{ width: '45%' }}></i></div>
              </div>
              <div className="skill">
                <div className="top"><span className="name">Informática &amp; suporte técnico</span><span className="pct">80%</span></div>
                <div className="bar"><i style={{ width: '80%' }}></i></div>
              </div>
            </div>
            <div className="skill-cat alt">
              <h3>Gestão &amp; idiomas</h3>
              <div className="skill">
                <div className="top"><span className="name">Recursos Humanos</span><span className="pct">80%</span></div>
                <div className="bar"><i style={{ width: '80%' }}></i></div>
              </div>
              <div className="skill">
                <div className="top"><span className="name">Português (nativo)</span><span className="pct">100%</span></div>
                <div className="bar"><i style={{ width: '100%' }}></i></div>
              </div>
              <div className="skill">
                <div className="top"><span className="name">Inglês (leitura)</span><span className="pct">40%</span></div>
                <div className="bar"><i style={{ width: '40%' }}></i></div>
              </div>
              <div className="skill">
                <div className="top"><span className="name">Espanhol (leitura)</span><span className="pct">40%</span></div>
                <div className="bar"><i style={{ width: '40%' }}></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia">
        <div className="wrap">
          <p className="eyebrow">Experiência</p>
          <h2 className="h">Experiência profissional</h2>
          <div className="entry">
            <div className="when">Nov 2021 — o momento<br />4 anos 9 meses</div>
            <div>
              <h3>Auxiliar de secretaria escolar</h3>
              <p className="org">FIEMG · Tempo integral</p>
              <p className="loc">Pouso Alegre, Minas Gerais, Brasil · No local</p>
              <ul>
                <li>Atendimento ao cliente com foco na resolução eficiente de demandas</li>
                <li>Organização de processos administrativos e controle de informações</li>
                <li>Suporte em rotinas operacionais, garantindo agilidade e precisão</li>
                <li>Desenvolvimento de habilidades analíticas e resolução de problemas</li>
              </ul>
            </div>
          </div>
          <div className="entry">
            <div className="when">Jul 2019 — Nov 2021<br />2 anos 5 meses</div>
            <div>
              <h3>Atendente de telemarketing ativo</h3>
              <p className="org">AeC Contact Center · Meio período</p>
              <p className="loc">Belo Horizonte e Região</p>
              <p>
                Atuação na operação TIM BKO, realizando atendimento ativo com foco em suporte operacional, tratativas administrativas e acompanhamento de processos internos. Experiência em contato com clientes, atualização de sistemas, organização de informações, apoio às demandas da operação e cumprimento de metas de qualidade e produtividade.
              </p>
              <ul>
                <li>Atendimento ativo e suporte ao cliente</li>
                <li>Atualização e conferência de dados em sistema</li>
                <li>Apoio administrativo e operacional</li>
                <li>Acompanhamento de protocolos e demandas internas</li>
                <li>Organização de processos e informações</li>
                <li>Foco em qualidade no atendimento e resolução de solicitações</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="formacao">
        <div className="wrap">
          <p className="eyebrow">Formação</p>
          <h2 className="h">Formação acadêmica</h2>
          <div className="form-grid">
            <div className="form-card">
              <span className="tag">Técnico · Em andamento</span>
              <h3>Técnico em Desenvolvimento de Sistemas</h3>
              <div className="meta">Senac Minas · Set 2025 – Jun 2027</div>
              <p>Formação prática voltada ao planejamento, desenvolvimento, teste e manutenção de softwares para web, desktop e dispositivos móveis, alinhada às demandas do mercado.</p>
            </div>
            <div className="form-card">
              <span className="tag">Graduação · Concluído</span>
              <h3>Curso Superior de Tecnologia (CST) em Gestão de Recursos Humanos</h3>
              <div className="meta">UNOPAR · Fev 2021 – Dez 2022</div>
              <p>Formação em gestão de pessoas, desenvolvimento organizacional, recrutamento e seleção, treinamento, comunicação corporativa e legislação trabalhista. Desenvolvimento de competências em organização administrativa, trabalho em equipe e apoio à gestão de pessoas.</p>
            </div>
            <div className="form-card">
              <span className="tag">Curso de qualificação · Aprovado</span>
              <h3>Assistente Financeiro</h3>
              <div className="meta">Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais · Jul 2020 – Out 2020</div>
              <p>Curso técnico com foco em rotinas e processos financeiros.</p>
            </div>
            <div className="form-card">
              <span className="tag">Ensino médio</span>
              <h3>Ensino Médio</h3>
              <div className="meta">Escola Estadual Professora Maria Coutinho · 2015</div>
            </div>
            <div className="form-card">
              <span className="tag">Curso de qualificação</span>
              <h3>Programador Web</h3>
              <div className="meta">Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais · Abr 2014 – Jul 2014</div>
            </div>
            <div className="form-card">
              <span className="tag">Curso de qualificação</span>
              <h3>Operador de Computador</h3>
              <div className="meta">Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais · Set 2013 – Nov 2013</div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificacoes">
        <div className="wrap">
          <p className="eyebrow">Certificações</p>
          <h2 className="h">Certificações complementares</h2>
          <div className="form-grid">
            <div className="form-card">
              <span className="tag">Certificação</span>
              <h3>Primeiros Socorros</h3>
              <div className="meta">Certificado</div>
              <p>Inclui certificação pela Lei Lucas de Primeiros Socorros.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="conquistas">
        <div className="wrap">
          <p className="eyebrow">Destaques</p>
          <h2 className="h">Conquistas</h2>
          <div className="highlights">
            <div className="highlight"><span className="ico">01</span><p>Formação superior concluída em Gestão de Recursos Humanos.</p></div>
            <div className="highlight"><span className="ico">02</span><p>Quatro certificações complementares em primeiros socorros, informática e finanças.</p></div>
            <div className="highlight"><span className="ico">03</span><p>Mais de sete anos de experiência em atendimento ao público e suporte administrativo.</p></div>
            <div className="highlight"><span className="ico">04</span><p>Em transição de carreira para tecnologia, cursando Técnico em Desenvolvimento de Sistemas com conclusão prevista para 2027.</p></div>
            <div className="highlight"><span className="ico">05</span><p>Objetivo de longo prazo: estruturar uma holding composta por 4 empresas.</p></div>
          </div>
        </div>
      </section>

      <section id="holding">
        <div className="wrap">
          <p className="eyebrow">Projeto pessoal</p>
          <h2 className="h">FGA Holdings — projeto em construção</h2>
          <p className="lede" style={{ marginBottom: '32px' }}>
            Estruturação planejada de uma holding própria, organizada em quatro frentes de atuação: tecnologia, talentos e criatividade, impacto social e finanças.
          </p>
          <div className="form-grid">
            <div className="form-card">
              <span className="tag">Tecnologia</span>
              <h3>Nexus Tech &amp; Entertainment</h3>
              <div className="meta">Tecnologia · Sistemas · Games · Inovação</div>
              <p>Desenvolvimento de software e aplicações, cloud computing, sistemas corporativos (ERP/CRM), inteligência artificial, jogos e e-sports.</p>
            </div>
            <div className="form-card">
              <span className="tag">Talentos &amp; Criatividade</span>
              <h3>VerteX</h3>
              <div className="meta">Talentos · Criatividade · Crescimento</div>
              <p>Recrutamento e seleção, branding e marketing digital, consultoria estratégica e transformação digital, unindo pessoas, criatividade e negócios.</p>
            </div>
            <div className="form-card">
              <span className="tag">Impacto social</span>
              <h3>Frederico Goulart Abreu Foundation</h3>
              <div className="meta">Educação · Cultura · Tecnologia social</div>
              <p>Frente social da holding, voltada a educação, cultura, tecnologia social, capacitação profissional e projetos humanitários.</p>
            </div>
            <div className="form-card">
              <span className="tag">Finanças</span>
              <h3>FGA Finances</h3>
              <div className="meta">Gestão · Planejamento · Investimentos</div>
              <p>Gestão e planejamento financeiro, controladoria, gestão patrimonial, investimentos, M&amp;A, valuation e planejamento tributário.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato">
        <div className="wrap">
          <p className="eyebrow">Contato</p>
          <h2 className="h">Entrar em contato</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="k">E-mail</span>
              <div className="v">fgoulartabreu@outlook.com</div>
              <a className="go" href="mailto:fgoulartabreu@outlook.com">Enviar mensagem →</a>
            </div>
            <div className="contact-card">
              <span className="k">WhatsApp</span>
              <div className="v">(31) 99766-1377</div>
              <a className="go" href="https://wa.me/5531997661377" target="_blank" rel="noopener noreferrer">Conversar →</a>
            </div>
            <div className="contact-card">
              <span className="k">LinkedIn</span>
              <div className="v">Frederico Goulart Abreu</div>
              <a className="go" href="https://www.linkedin.com/in/fredericogoulartabreupcd/" target="_blank" rel="noopener noreferrer">Ver perfil →</a>
            </div>
            <div className="contact-card">
              <span className="k">Região</span>
              <div className="v">Contagem, Minas Gerais</div>
              <span className="go">Disponível para viagens de trabalho</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="fga-footer">
        <div className="wrap fga-footer-inner">
          <img
            src="/logo-pessoal.png"
            alt="Frederico Goulart Abreu — Tecnologia • Inovação • Soluções"
            className="fga-footer-logo"
          />
          <p>© 2026 Frederico Goulart Abreu · FGA Holding. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

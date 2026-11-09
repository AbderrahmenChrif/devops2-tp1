import { Fragment } from "react";
import DevOpsLoop from "@/components/DevOpsLoop";

const features = [
  { title: "Ã‰diteur simple", text: "Questions Ã  choix, rÃ©ponses libres et barÃ¨mes." },
  { title: "Partage par lien", text: "Un lien ou un QR code suffit pour rÃ©pondre." },
  { title: "RÃ©sultats en direct", text: "Scores et statistiques mis Ã  jour Ã  chaque rÃ©ponse." },
  { title: "Export", text: "TÃ©lÃ©chargez les rÃ©ponses en CSV ou PDF." },
  { title: "Ã‰quipes", text: "Travaillez Ã  plusieurs sur un mÃªme questionnaire." },
];

const steps = [
  { title: "Concevoir", text: "RÃ©digez vos questions dans l'Ã©diteur." },
  { title: "Diffuser", text: "Partagez le lien avec vos participants." },
  { title: "Analyser", text: "Consultez les rÃ©sultats et exportez-les." },
];

const stack = [
  "Front-end Next.js",
  "API Strapi et base PostgreSQL",
  "Conteneurs Docker et Compose",
  "Pipeline CI/CD Ã  chaque commit",
];

const tiles = [
  { kind: "accent", title: "CÃ´tÃ© Dev", text: "Planifier, coder, construire et tester." },
  { kind: "ops", title: "CÃ´tÃ© Ops", text: "Livrer, dÃ©ployer, exploiter et surveiller." },
  { kind: "good", title: "Bonne pratique", text: "Chaque modification passe par une revue et des tests automatisÃ©s." },
  { kind: "warn", title: "Attention", text: "Ceci est un site fictif crÃ©Ã© pour un TP : aucun service rÃ©el n'est proposÃ©." },
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <a className="brand" href="#">
            <span className="brand-mark">Q</span>
            Quizzo
          </a>
          <ul className="nav-links">
            <li><a href="#fonctionnalites">FonctionnalitÃ©s</a></li>
            <li><a href="#fonctionnement">Fonctionnement</a></li>
            <li><a href="#technique">Technique</a></li>
          </ul>
          <a className="btn btn-primary" href="#commencer">Commencer</a>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <div>
            <div className="eyebrow">Plateforme de questionnaires Â· Site fictif</div>
            <h1>CrÃ©ez, partagez et analysez vos questionnaires</h1>
            <p className="lead">
              Quizzo vous aide Ã  concevoir des quiz en quelques minutes et Ã  suivre les rÃ©sultats en temps rÃ©el.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#commencer">CrÃ©er un questionnaire</a>
              <a className="btn btn-ghost" href="#fonctionnement">Voir comment Ã§a marche</a>
            </div>
            <span className="pill">DevOps 2 Â· TP1</span>
          </div>
          <DevOpsLoop className="loop" />
        </div>
      </header>

      <section id="fonctionnalites">
        <div className="container">
          <div className="section-head">
            <h2>FonctionnalitÃ©s</h2>
            <p>Tout ce qu'il faut pour mener une Ã©valuation de bout en bout.</p>
          </div>
          <div className="cards">
            {features.map((f, i) => (
              <div className="card" key={f.title}>
                <div className="num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fonctionnement" className="section-surface">
        <div className="container">
          <div className="section-head">
            <h2>Comment Ã§a marche</h2>
            <p>Trois Ã©tapes, de l'idÃ©e aux rÃ©sultats.</p>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <Fragment key={s.title}>
                {i > 0 && <div className="arrow" aria-hidden="true">â†’</div>}
                <div className="step">
                  <div className="circle">{i + 1}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="banner">Un questionnaire prÃªt Ã  diffuser en moins de 5 minutes.</div>
        </div>
      </section>

      <section id="technique">
        <div className="container">
          <div className="section-head">
            <h2>Sous le capot</h2>
            <p>Une stack moderne, livrÃ©e en continu.</p>
          </div>
          <div className="split">
            <pre className="code">
              <span className="c"># Lancer Quizzo en local</span>
              {"\ngit clone https://example.com/quizzo.git\ncd quizzo\n"}
              <span className="hl">docker compose up -d</span>
              {"\n"}
              <span className="c"># Front : http://localhost:3000</span>
              {"\n"}
              <span className="c"># API   : http://localhost:1337</span>
            </pre>
            <ul className="checks">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid-2">
            {tiles.map((t) => (
              <div className={`tile ${t.kind}`} key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="commencer" className="quote">
        <DevOpsLoop className="watermark" watermark />
        <div className="container">
          <blockquote>Â« Une bonne question vaut mieux qu'une longue rÃ©ponse. Â»</blockquote>
          <div className="actions">
            <a className="btn btn-white" href="#">CrÃ©er mon premier quiz</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <span>Quizzo Â· Site fictif rÃ©alisÃ© pour DevOps 2 â€” TP1</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </>
  );
}

const modeles = [
  {
    title: "Culture générale",
    text: "Testez les connaissances générales avec des questions variées.",
  },
  {
    title: "Évaluation scolaire",
    text: "Évaluez les acquis des étudiants avec des questions adaptées.",
  },
  {
    title: "Satisfaction",
    text: "Recueillez les avis et les retours de vos participants.",
  },
];

export default function Modeles() {
  return (
    <section id="modeles">
      <div className="container">
        <div className="section-head">
          <h2>Modèles de questionnaires</h2>
          <p>Découvrez des exemples pour commencer rapidement.</p>
        </div>

        <div className="cards">
          {modeles.map((modele, index) => (
            <div className="card" key={modele.title}>
              <div className="num">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{modele.title}</h3>
              <p>{modele.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
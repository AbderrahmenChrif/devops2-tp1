import Link from "next/link";

export default function CreerPage() {
  return (
    <main className="container">
      <section>
        <h1>Nouveau questionnaire</h1>

        <form>
          <div>
            <label htmlFor="titre">Titre</label>
            <input
              id="titre"
              name="titre"
              type="text"
              placeholder="Titre du questionnaire"
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Décrivez votre questionnaire"
              rows={5}
            />
          </div>

          <button type="button" disabled>
            Enregistrer
          </button>
        </form>

        <Link href="/">Retour à l'accueil</Link>
      </section>
    </main>
  );
}
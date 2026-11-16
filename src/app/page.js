import { getCatBreeds } from "../lib/catapi";

import CatGrid from "../components/CatGrid";

export default async function Home() {
  let breeds = [];
  let error = false;

  try {
    breeds = await getCatBreeds();

  } catch (err) {
    console.error("Erro ao carregar raças:", err);
    error = true;
  }

  return (
    <main className="container">

      <section className="page-intro">

        <span className="section-label">
          CATÁLOGO DE RAÇAS
        </span>

        <h1>
          Conheça o mundo dos gatos
        </h1>

        <p>
          Descubra diferentes raças, suas características,
          origens e temperamentos.
        </p>

        {!error && (
          <span className="total-cats">
            {breeds.length} raças encontradas
          </span>
        )}

      </section>

      {error ? (

        <div className="error-message">

          <h2>Não foi possível carregar as raças.</h2>

          <p>
            Verifique sua conexão e confira se a API Key
            está configurada corretamente no arquivo .env.local.
          </p>

        </div>

      ) : (

        <CatGrid breeds={breeds} />

      )}

    </main>
  );
}
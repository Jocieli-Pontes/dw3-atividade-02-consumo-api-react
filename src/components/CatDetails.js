import Link from "next/link";

export default function CatDetails({ breed }) {
  return (
    <div className="details-container">

      <Link href="/" className="back-button">
        ← Voltar para o catálogo
      </Link>

      <section className="details-hero">

        <div className="details-image">

          {breed.image?.url ? (
            <img
              src={breed.image.url}
              alt={breed.name}
            />
          ) : (
            <span>🐱</span>
          )}

        </div>

        <div className="details-main">

          <span className="breed-id">
            ID: {breed.id}
          </span>

          <h1>{breed.name}</h1>

          <div className="basic-info">

            <div>
              <span>Origem</span>
              <strong>
                {breed.origin || "Não informada"}
              </strong>
            </div>

            <div>
              <span>Expectativa de vida</span>
              <strong>
                {breed.life_span
                  ? `${breed.life_span} anos`
                  : "Não informada"}
              </strong>
            </div>

            <div>
              <span>Grupo</span>
              <strong>
                {breed.breed_group || "Não informado"}
              </strong>
            </div>

          </div>

          <div className="description">

            <h2>Descrição</h2>

            <p>
              {breed.description || "Descrição não disponível."}
            </p>

          </div>

          <div className="temperament">

            <h2>Temperamento</h2>

            <p>
              {breed.temperament || "Não informado"}
            </p>

          </div>

          {breed.history && (
            <div className="history">

              <h2>História</h2>

              <p>{breed.history}</p>

            </div>
          )}

        </div>

      </section>

    </div>
  );
}
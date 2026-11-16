import Link from "next/link";

export default function CatCard({ breed }) {
  return (
    <Link
      href={`/raca/${breed.id}`}
      className="cat-card"
    >

      <div className="cat-image">

        {breed.image?.url ? (
          <img
            src={breed.image.url}
            alt={breed.name}
          />
        ) : (
          <span>🐱</span>
        )}

      </div>

      <div className="cat-info">

        <span className="cat-id">
          ID: {breed.id}
        </span>

        <h2>{breed.name}</h2>

        <p>
          {breed.origin || "Origem não informada"}
        </p>

        <span className="cat-lifespan">
          Expectativa de vida: {breed.life_span || "Não informada"} anos
        </span>

      </div>

    </Link>
  );
}
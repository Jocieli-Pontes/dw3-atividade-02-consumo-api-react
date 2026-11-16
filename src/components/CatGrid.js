import CatCard from "./CatCard";

export default function CatGrid({ breeds }) {
  return (
    <div className="cat-grid">

      {breeds.map((breed) => (
        <CatCard
          key={breed.id}
          breed={breed}
        />
      ))}

    </div>
  );
}
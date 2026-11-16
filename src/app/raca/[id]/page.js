import { notFound } from "next/navigation";

import { getCatBreedById } from "../../../lib/catapi";

import CatDetails from "../../../components/CatDetails";

export default async function BreedPage({ params }) {

  const { id } = await params;

  let breed;

  try {

    breed = await getCatBreedById(id);

  } catch (error) {

    console.error("Erro ao buscar raça:", error);

    return (
      <main className="container">

        <div className="error-message">

          <h2>Erro ao carregar os detalhes.</h2>

          <p>
            Verifique sua conexão e tente novamente.
          </p>

        </div>

      </main>
    );
  }

  if (!breed) {
    notFound();
  }

  return (
    <main className="container">

      <CatDetails breed={breed} />

    </main>
  );
}
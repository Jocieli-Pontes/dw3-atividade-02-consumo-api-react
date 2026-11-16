const API_URL = "https://api.thecatapi.com/v1";

function getOptions() {
  const apiKey = process.env.THE_CAT_API_KEY;

  if (!apiKey) {
    throw new Error("API Key não configurada no arquivo .env.local");
  }

  return {
    headers: {
      "x-api-key": apiKey,
    },
    next: {
      revalidate: 3600,
    },
  };
}

export async function getCatBreeds() {
  const response = await fetch(
    `${API_URL}/breeds?limit=20`,
    getOptions()
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar as raças de gatos.");
  }

  return response.json();
}

export async function getCatBreedById(id) {
  const response = await fetch(
    `${API_URL}/breeds/${encodeURIComponent(id)}`,
    getOptions()
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Erro ao buscar os detalhes da raça.");
  }

  return response.json();
}
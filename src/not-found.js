import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container not-found">

      <h1>Raça não encontrada!</h1>

      <p>
        Não conseguimos encontrar a raça solicitada.
      </p>

      <Link href="/" className="back-button">
        Voltar para o catálogo
      </Link>

    </main>
  );
}
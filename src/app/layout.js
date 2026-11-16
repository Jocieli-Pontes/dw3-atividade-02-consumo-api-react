import "./globals.css";

import Header from "../components/Header";

export const metadata = {
  title: "Catálogo de Gatos",
  description: "Explore diferentes raças de gatos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">

      <body>

        <Header />

        {children}

      </body>

    </html>
  );
}
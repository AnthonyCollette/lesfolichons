import type { Metadata } from "next";
import { Delius_Swash_Caps, Poppins } from "next/font/google";
import './assets/scss/main.scss';
import Nav from "./components/Nav";

const delius = Delius_Swash_Caps({ subsets: ["latin"], weight: ['400'] });
const poppins = Poppins({ subsets: ["latin"], weight: ['300','400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Les Foli'chons",
  description: "Les Foli'chons website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Nav />
        {children}</body>
    </html>
  );
}

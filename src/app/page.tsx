import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon site</h1>
      <p className="text-lg text-gray-600 mb-6">
        Développeuse spécialisée en Frontend, JAMstack, accessibilité et SEO.
      </p>
      <Link
        href="/about"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        En savoir plus
      </Link>
    </section>
  );
}

export const metadata = {
  title: "Lady Raccoon - Développeuse fullstack senior",
  description: "Portfolio de Angele Henry sur le développement Frontend, JAMstack et accessibilité.",
};


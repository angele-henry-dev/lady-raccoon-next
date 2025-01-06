import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <title>Angele Henry - Développeuse Frontend</title>
        <meta name="description" content="Portfolio et blog sur Frontend, JAMstack et accessibilité." />
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="bg-gray-900 text-white py-4">
          <nav className="container mx-auto flex justify-between">
            <Link href="/" className="font-bold text-xl">
              Angele Henry
            </Link>
            <ul className="flex gap-4">
              <li><Link href="/" className="hover:underline">Accueil</Link></li>
              <li><Link href="/about" className="hover:underline">À propos</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow p-8">{children}</main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          © {new Date().getFullYear()} Angele Henry
        </footer>
      </body>
    </html>
  );
}

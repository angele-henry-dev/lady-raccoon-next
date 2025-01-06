import './globals.css';
import Link from "next/link";
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <header className="py-4">
          <nav className="container mx-auto flex justify-between">
            <Link href="/" className="font-bold text-xl flex items-center gap-2">
              <Image src="/images/logo.webp" alt="Logo" width={50} height={50} />
              <span className="truncate">Lady Raccoon</span>
            </Link>
            {/* <ul className="flex gap-4">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/about">À propos</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul> */}
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="py-4 text-center">
          © {new Date().getFullYear()} Lady Raccoon
        </footer>
      </body>
    </html>
  );
}

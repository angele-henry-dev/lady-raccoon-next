import './globals.css';
import Link from "next/link";
import Image from 'next/image';
import Github from '@/components/svg/Github';
import LinkedIn from '@/components/svg/LinkedIn';
import ScrollbarGradient from '@/components/animations/ScrollbarGradient';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ScrollbarGradient />

        <header className="p-4">
          <nav className="container flex justify-between w-full mx-auto">
            <Link href="/" className="text-xl flex items-center gap-2">
              <Image src="/images/logo.webp" alt="Logo of Lady Raccoon" width={50} height={50} />
              <span className="truncate">Lady Raccoon</span>
            </Link>
            <ul className="hidden md:flex items-center gap-4">
              <li><Link href="/#news">News</Link></li>
              <li><Link href="/#skills">Skills</Link></li>
              <li className='mr-5'><Link href="/#experience">Experience</Link></li>
              <li>
                <Link
                href="https://github.com/angele-henry-dev"
                target="_blank"
                title="Opens Github in a new tab or window"
                >
                    <Github />
                </Link>
              </li>
              <li>
                <Link
                    href="https://www.linkedin.com/in/angele-henry/"
                    target="_blank"
                    title="Opens LinkedIn in a new tab or window"
                >
                    <LinkedIn />
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="py-4 text-center">
          <p className='flex flex-row justify-center mb-2'>
            <Link
              className="mr-2"
              href="https://github.com/angele-henry-dev"
              target="_blank"
              title="Opens Github in a new tab or window"
            >
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/angele-henry/"
              target="_blank"
              title="Opens LinkedIn in a new tab or window"
            >
              <LinkedIn />
            </Link>
          </p>
          <p className='mb-2'>
            <Link href="/legal-notice">Legal notice</Link>
            <span className="mx-2">&#8226;</span>
            <Link href="/privacy-policy">Privacy policy</Link>
            <span className="mx-2">&#8226;</span>
            <Link href="/sitemap">Sitemap</Link>
          </p>
          <p className='mb-2'>Font &apos;OpenDyslexic&apos; by Abelardo Gonzalez</p>
          <p>
            Handcrafted with
            <span className="ml-2 highlight">♥</span>
            <span className="mx-2">&#8226;</span>
            © {new Date().getFullYear()} Lady Raccoon
          </p>
        </footer>

      </body>
    </html>
  );
}

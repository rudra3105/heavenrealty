import Image from 'next/image';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brandGold/30 bg-brandBlue/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png.avif" alt="Heaven Realty" width={48} height={48} priority />
          <span className="text-lg font-bold text-white sm:text-xl">Heaven Realty</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-white md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brandGold">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-brandGold px-4 py-2 text-sm font-semibold text-brandBlue transition hover:opacity-90"
        >
          Get Consultation
        </Link>
      </div>
    </header>
  );
}

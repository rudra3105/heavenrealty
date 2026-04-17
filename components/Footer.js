import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const usefulLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/properties', label: 'All Properties' },
  { href: '/contact', label: 'Contact Us' }
];

const socialLinks = [
  { href: 'https://www.instagram.com', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://www.facebook.com', icon: FaFacebookF, label: 'Facebook' },
  { href: 'https://www.linkedin.com', icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: 'https://x.com', icon: FaXTwitter, label: 'X' },
  { href: 'https://wa.me/919876543210', icon: FaWhatsapp, label: 'WhatsApp' }
];

export default function Footer() {
  return (
    <footer className="bg-brandBlueDark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-xl font-semibold text-brandGold">Heaven Realty</h3>
          <p className="mt-3 text-sm text-slate-300">
            Trusted real estate consultancy in Vadodara for premium homes, plots, and investment opportunities.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-brandGold">Useful Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {usefulLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-brandGold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-brandGold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Vadodara, Gujarat, India</li>
            <li>+91 98765 43210</li>
            <li>info@heavenrealty.in</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-brandGold">Follow Us</h4>
          <div className="mt-3 flex flex-wrap gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full bg-white/10 p-2.5 text-brandGold transition hover:bg-brandGold hover:text-brandBlue"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Heaven Realty. All rights reserved.
      </div>
    </footer>
  );
}

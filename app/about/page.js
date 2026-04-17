import { FaAward, FaBuilding, FaHome, FaUserCheck } from 'react-icons/fa';

export const metadata = {
  title: 'About Us | Heaven Realty',
  description: 'Learn about Heaven Realty, a trusted real estate consultancy in Vadodara.'
};

const highlights = [
  {
    icon: FaBuilding,
    title: 'Local Expertise',
    text: 'Deep understanding of Vadodara neighborhoods and market trends.'
  },
  {
    icon: FaUserCheck,
    title: 'Trusted Advisory',
    text: 'Transparent property guidance with customer-first service.'
  },
  {
    icon: FaHome,
    title: 'Curated Inventory',
    text: 'Villas, apartments, and plots selected for quality and value.'
  },
  {
    icon: FaAward,
    title: 'Premium Experience',
    text: 'Professional support from site visit to closing paperwork.'
  }
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-bold">About Heaven Realty</h1>
      <p className="mt-4 max-w-4xl text-slate-700">
        Heaven Realty is a Vadodara-based real estate consultancy dedicated to helping buyers find the right
        property at the right value. Our team combines local market knowledge with a transparent process to deliver a
        premium and stress-free experience.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-2xl bg-white p-6 shadow-sm">
            <Icon className="mb-4 text-3xl text-brandGold" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

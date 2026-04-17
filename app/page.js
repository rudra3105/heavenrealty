import Link from 'next/link';
import { FaCheckCircle, FaHandshake, FaMapMarkerAlt, FaRegBuilding, FaUsers } from 'react-icons/fa';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/lib/properties';

const homeFeatures = [
  {
    icon: FaRegBuilding,
    title: 'Premium Listings',
    text: 'Carefully shortlisted homes and plots in top Vadodara locations.'
  },
  {
    icon: FaHandshake,
    title: 'Transparent Dealings',
    text: 'End-to-end support with honest consultation and legal clarity.'
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Vadodara Focused',
    text: 'Local market expertise for better investment decisions.'
  },
  {
    icon: FaUsers,
    title: 'Client First Approach',
    text: 'Personalized recommendations based on your goals and budget.'
  }
];

const testimonials = [
  {
    name: 'Chirag Desai',
    text: 'Very professional team. They helped me finalize my villa in Vadodara smoothly.'
  },
  {
    name: 'Jinal Shah',
    text: 'Loved their transparency and local knowledge. I found the right property quickly.'
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-brandBlue text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(212,175,55,0.22),transparent_50%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <p className="w-fit rounded-full border border-brandGold/40 bg-white/10 px-4 py-1 text-sm text-brandGold">
            Trusted Real Estate Consultants in Vadodara
          </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Find Your Dream Property in Vadodara with Heaven Realty
          </h1>
          <p className="max-w-2xl text-slate-200">
            Discover premium villas, apartments, and plots with expert guidance from a local team that understands
            Vadodara's real estate market.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/properties" className="rounded-full bg-brandGold px-6 py-3 font-semibold text-brandBlue transition hover:opacity-90">
              View Properties
            </Link>
            <Link href="/contact" className="rounded-full border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-brandBlue">
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Featured Properties</h2>
          <p className="mt-3 text-slate-600">Premium opportunities handpicked for you in Vadodara.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeFeatures.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl bg-brandCream p-6 shadow-sm transition hover:shadow-md">
                <Icon className="mb-4 text-3xl text-brandGold" />
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Testimonials</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl bg-white p-6 shadow-md">
              <FaCheckCircle className="mb-4 text-2xl text-brandGold" />
              <p className="text-slate-700">“{item.text}”</p>
              <h3 className="mt-3 font-semibold text-brandBlue">{item.name}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

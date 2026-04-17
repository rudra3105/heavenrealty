import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/lib/properties';

export const metadata = {
  title: 'Properties | Heaven Realty',
  description: 'Browse villas, apartments, and plots available with Heaven Realty in Vadodara.'
};

export default function PropertiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Our Properties in Vadodara</h1>
        <p className="mt-3 text-slate-600">Explore premium listings and send inquiry in a single click.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </div>
    </main>
  );
}

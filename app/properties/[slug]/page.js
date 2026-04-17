import Image from 'next/image';
import { notFound } from 'next/navigation';
import PropertyInquiryButton from './property-inquiry-button';
import { findProperty, properties } from '@/lib/properties';

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export function generateMetadata({ params }) {
  const property = findProperty(params.slug);

  if (!property) {
    return {
      title: 'Property Not Found | Heaven Realty'
    };
  }

  return {
    title: `${property.title} | Heaven Realty`,
    description: `${property.type} in ${property.location} listed by Heaven Realty.`
  };
}

export default function PropertyDetailsPage({ params }) {
  const property = findProperty(params.slug);

  if (!property) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
            <Image src={property.image} alt={property.title} fill className="object-cover" priority />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {property.gallery.map((img, index) => (
              <div key={img} className="relative h-36 overflow-hidden rounded-xl sm:h-44">
                <Image src={img} alt={`${property.title} image ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-brandBlue">{property.title}</h1>
          <p className="mt-2 text-2xl font-bold text-brandGold">{property.price}</p>
          <p className="mt-2 text-slate-600">{property.location}</p>
          <p className="mt-4 text-slate-700">{property.description}</p>

          <div className="mt-6 rounded-2xl bg-white p-5 shadow-md">
            <h2 className="text-xl font-semibold">Specifications</h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {Object.entries(property.specs).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-xs uppercase text-slate-500">{key.replaceAll('_', ' ')}</dt>
                  <dd className="font-medium text-brandBlue">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6">
            <PropertyInquiryButton propertyTitle={property.title} />
          </div>
        </div>
      </div>
    </main>
  );
}

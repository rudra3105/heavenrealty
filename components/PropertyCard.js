'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import InquiryModal from './InquiryModal';

export default function PropertyCard({ property }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1.5 hover:shadow-premium">
        <div className="relative h-56">
          <Image src={property.image} alt={property.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="space-y-3 p-6">
          <h3 className="text-xl font-semibold text-brandBlue">{property.title}</h3>
          <p className="text-2xl font-bold text-brandGold">{property.price}</p>
          <p className="text-sm text-slate-600">{property.location}</p>
          <p className="text-sm text-slate-500">{property.type} • {property.area}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={`/properties/${property.slug}`}
              className="rounded-full bg-brandBlue px-5 py-2 text-sm font-semibold text-white transition hover:bg-brandBlueDark"
            >
              View Details
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-full border border-brandGold px-5 py-2 text-sm font-semibold text-brandBlue transition hover:bg-brandGold"
            >
              Inquiry
            </button>
          </div>
        </div>
      </article>

      <InquiryModal isOpen={open} onClose={() => setOpen(false)} propertyName={property.title} />
    </>
  );
}

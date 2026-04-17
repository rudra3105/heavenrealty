'use client';

import { useState } from 'react';
import InquiryModal from '@/components/InquiryModal';

export default function PropertyInquiryButton({ propertyTitle }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-brandBlue px-6 py-3 font-semibold text-white transition hover:bg-brandGold hover:text-brandBlue"
      >
        Inquiry for this Property
      </button>

      <InquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} propertyName={propertyTitle} />
    </>
  );
}

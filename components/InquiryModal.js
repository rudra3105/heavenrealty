'use client';

import { useEffect, useState } from 'react';

export default function InquiryModal({ isOpen, onClose, propertyName = '' }) {
  const [selectedProperty, setSelectedProperty] = useState(propertyName);

  useEffect(() => {
    setSelectedProperty(propertyName);
  }, [propertyName]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/50 p-4" onClick={onClose}>
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-brandBlue">Property Inquiry</h3>
          <button onClick={onClose} className="text-2xl text-slate-500 transition hover:text-brandBlue" aria-label="Close modal">
            ×
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-brandGold"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
              Contact Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter contact number"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-brandGold"
            />
          </div>

          <div>
            <label htmlFor="property" className="mb-1 block text-sm font-medium text-slate-700">
              Property
            </label>
            <input
              id="property"
              type="text"
              value={selectedProperty}
              readOnly
              className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-2.5 text-slate-700"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-brandBlue px-5 py-3 font-semibold text-white transition hover:bg-brandGold hover:text-brandBlue"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

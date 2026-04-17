import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}

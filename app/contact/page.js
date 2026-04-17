export const metadata = {
  title: 'Contact Us | Heaven Realty',
  description: 'Contact Heaven Realty for property consultation in Vadodara.'
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4 text-slate-700">Reach out for property visits, price details, and personalized consultation.</p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li><strong>Office:</strong> Vadodara, Gujarat, India</li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Email:</strong> info@heavenrealty.in</li>
          </ul>
        </div>

        <form className="space-y-4 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold">Send Inquiry</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-brandGold"
          />
          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-brandGold"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-brandGold"
          />
          <button
            type="submit"
            className="rounded-full bg-brandBlue px-6 py-3 font-semibold text-white transition hover:bg-brandGold hover:text-brandBlue"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

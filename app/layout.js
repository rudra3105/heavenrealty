import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhatsappButton from '@/components/WhatsappButton';

export const metadata = {
  title: 'Heaven Realty | Premium Properties in Vadodara',
  description: 'Heaven Realty helps you buy premium homes, apartments, and plots in Vadodara.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brandCream text-brandBlue">
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}

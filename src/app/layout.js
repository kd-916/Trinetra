import './globals.css';
import Navbar from '../components/Navbar'; // or '@/components/Navbar'

export const metadata = {
  title: 'Trinetra - AI Fake Identity Detection',
  description: 'Detect fake identities and fraud with AI precision',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
import { Analytics } from '@vercel/analytics/react';
import { Poppins } from 'next/font/google';
import ReduxProvider from '../redux/provider';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Proactiv Marketing',
  description: 'Gift claiming',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>{children}</ReduxProvider>
        <Analytics />
      </body>
    </html>
  );
}

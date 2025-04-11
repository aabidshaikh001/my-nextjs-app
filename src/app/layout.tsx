
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Notification from './components/Notification';
import Footer from './components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'One ATM - One Nation, One Payment - AEPS, Money Transfer, UPI',
  description: 'One ATM offers seamless AEPS, money transfer, UPI, and more payment solutions for a cashless India. Experience a unified, secure, and efficient payment system.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
        <Header />
        
        {children}
        <Notification/>
        <Footer /> 
      </body>
    </html>
  );
}

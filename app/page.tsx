'use client';
import '../styles/globals.css';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@components/header'));
const HomePage = dynamic(() => import('@pages/homepage'));
const Footer = dynamic(() => import('@components/footer'));

export default function Page() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

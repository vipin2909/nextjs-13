"use client"
import '../styles/globals.css';
import Link from 'next/link';
import { Box } from '@mui/material';
import Footer from '@components/footer';

export default function Page() {
  return (
    <div>
      <Link href="../contact">Contact Page</Link>
      <hr />
      <Link href="../testimonials">Testinmonials Page</Link>
      <Footer />
    </div>
  );
}

import '../styles/globals.css';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Link href="../contact">Contact Page</Link>
      <hr />
      <Link href="../testimonials">Testinmonials Page</Link>
    </>
  );
}

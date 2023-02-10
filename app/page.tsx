"use client"
import "../styles/globals.css";
import Link from "next/link";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@components/header"));


export default function Page() {
  return (
    <div>
      <Header />
      <Link href="../contact">Contact Page</Link>
      <hr />
      <Link href="../testimonials">Testimonials Page</Link>
    </div>
  );
}

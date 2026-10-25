import Image from "next/image";
import Link from "next/link";
import ProductCart from "./components/ProductCart";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Welcome to My Next.js App!</h1>
      <Link href="/users">
        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Users Page
        </button>
      </Link>
      <ProductCart />
    </main>
  );
}

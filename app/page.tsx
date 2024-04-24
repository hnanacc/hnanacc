import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hi, I am Harshal. This page is under construction. Visit later!</h1>
      <Link href="/writings" className="mr-2 mt-8 underline">
        Writings
      </Link>
      <Link href="/about" className="mx-2 mt-8 underline">
        About
      </Link>
      <Link href="/craft" className="mx-2 mt-8 underline">
        Craft
      </Link>
    </main>
  );
}

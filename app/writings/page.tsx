import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writings",
  description: "Blog posts by Harshal",
};

const articles = [
  {
    name: "The AI Stack",
    key: "the-ai-stack",
    desc: "A long passage of summary",
  },
  {
    name: "Transformers",
    key: "transformers",
    desc: "a long passage of summary",
  },
];

export default function Writings() {
  return (
    <main>
      <h1>List of articles</h1>
      <ul>
        {articles.map((item) => (
          <li key={item.key}>
            <Link className="underline" href={`/writings/${item.key}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

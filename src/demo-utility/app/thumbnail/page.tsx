import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home</h1>
        <p>Home Page</p>
        <div>
          <Link href="/">Home</Link> | thumbnail
        </div>
      </div>
    </main>
  );
}

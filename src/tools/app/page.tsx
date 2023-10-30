import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home</h1>
        <p>Home Page</p>
        <div>
          Home | <Link href="/thumbnail">thumbnail</Link>
        </div>
      </div>
    </main>
  );
}

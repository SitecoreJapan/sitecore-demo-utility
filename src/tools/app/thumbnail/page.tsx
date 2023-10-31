import Link from "next/link";
import {Button} from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Home</h1>
        <p>Home Page</p>
        <div>
        <Link href="/">Home</Link> | thumbnail
        </div>
        <div>    <Button color="primary">
      Button
    </Button></div>
      </div>
    </main>
  );
}

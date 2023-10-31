"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [text, setText] = useState("");
  const [displayedText, setDisplayedText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const toggleImage = () => {
    setShowImage(!showImage);
    setDisplayedText(text);
  };

  return (
    <main>
      <div>
        <h1>Home</h1>
        <p>Home Page</p>
        <div>
          <Link href="/">Home</Link> | thumbnail
        </div>
        <div>
          <input type="text" value={text} onChange={handleChange} />
          <Button color="primary" onClick={toggleImage}>
            Button
          </Button>
          {showImage && (
            <Image
              src="/sample.jpg"
              width="200"
              height="200"
              alt="Sample Image"
            />
          )}
          {displayedText && <p>Displayed Text: {displayedText}</p>}
        </div>
      </div>
    </main>
  );
}

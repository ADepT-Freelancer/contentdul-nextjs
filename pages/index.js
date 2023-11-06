import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      I can't explain
      <br />
      I got a feeling that I just, I can't erase
      <br />
      Just a feeling that I won't, won't leave behind
      <br />
      Because it's something that is on, it's on my mind
      <br />
      I guess it goes like
      <br />
      <br />
      Na-na-na
      <br />
      Na-na-na-na-na
      <br />
      Na-na-na-na-na
      <br />
      Na-na-na-na-na
      <br />
      let`s go to original -{" "}
      <a href="https://music.youtube.com/channel/UConl7T_sh6sQCwYe8WrQNbQ">
        Peggi Gou
      </a>{" "}
      `
    </main>
  );
}

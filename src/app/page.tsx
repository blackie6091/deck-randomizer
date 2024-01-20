"use client"
import { useState } from 'react';
import { getRandomInteger } from "@/utilities/randomizer";
import { getGeneralImage } from "@/utilities/generalMap";
import Image from 'next/image';

export default function Home() {
  const [general, setGeneral] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm flex justify-center">
            <Image
              src={`/${getGeneralImage(general)}`}
              alt="General Image"
              className="rounded-[20px] max-h-[600px] max-w-[450px] min-h-[600px] min-w-[450px]"
              width={450}
              height={600}
              priority
            />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0">
      <button
          onClick={() => setGeneral(getRandomInteger(0, 26))}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Randomize{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Click to find your general.
          </p>
        </button>
      </div>
    </main>
  );
}

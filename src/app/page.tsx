"use client"
import { useState } from 'react';
import { getRandomInteger } from "@/utilities/randomizer";
import { getGeneralImage } from "@/utilities/generalMap";
import Image from 'next/image';

export default function Home() {
  const [general, setGeneral] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-6">
      <div className="items-center justify-center h-auto w-full md:max-w-lg">
            <Image
              src={`/${getGeneralImage(general)}`}
              alt="General Image"
              className="rounded-[15px] h-auto w-full"
              width={500}
              height={500}
              priority
            />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-auto lg:mb-0">
      <button
          onClick={() => setGeneral(getRandomInteger(0, 30))}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors mt-4 border-gray-600 hover:border-gray-300 hover:bg-gray-200 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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

"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>rent&nbsp;</span>
        <span className={title({ color: "violet" })}>cats&nbsp;</span>
        <br />
        <span className={title()}>today</span>
        <div className={subtitle({ class: "mt-4" })} />
      </div>

      <div className="flex gap-3">
        <p> press to make them dance!</p>
        <div className={spinning ? "animate-spin" : ""}>
          <Button radius="full" variant="ghost" onPress={spinButton}>
            dance
          </Button>

          <Image
            alt="cat 3"
            src="https://i1.sndcdn.com/artworks-1tA07yGMAde18hj6-sqbj6w-t500x500.jpg"
            width={900}
          />
        </div>
      </div>
    </section>
  );
}

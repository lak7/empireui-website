"use client";
import React from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
import useWindowSize from "@rooks/use-window-size";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#ffffff",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};

const page = () => {
  const { innerWidth, innerHeight } = useWindowSize();
  return (
    <section className="container py-10 h-screen sm:py-14 ">
      <div className="w-full flex-col justify-center py-7 items-start ">
        <ParticleImage
          src={"/head.png"}
          scale={1}
          entropy={20}
          width={1500}
          height={200}
          maxParticles={5555}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          backgroundColor="#00000"
        />
      </div>
      <div className="grid  justify-center items-center">
        <div className="container mx-auto px-9 sm:px-6 ml-10 lg:px-8 text-left">
          <p className="text-xl text-zinc-200 mb-10 max-w-2xl text-center">
            The AI-powered component library that adapts to your design needs.
            Build beautiful, responsive interfaces in record time.
          </p>
        </div>
        <div className="flex justify-center  space-x-4">
          <Button size="lg" variant="outline">
            View Components
          </Button>
          <Button
            size="lg"
            className="bg-white text-zinc-700 font-semibold hover:text-zinc-200"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="py-24 flex w-full justify-center items-center gap-14">
        <div className="flex justify-center items-center gap-3 text-zinc-300 font-bold">
          <Image src="/icons/vercel.png" width={50} height={50} alt="vercel" />{" "}
          Vercel
        </div>
        <div className="flex justify-center items-center  gap-3 text-zinc-300 font-bold">
          <Image src="/icons/next.png" width={50} height={50} alt="vercel" />{" "}
          NextJS
        </div>
        <div className="flex justify-center items-center gap-3 text-zinc-300 font-bold">
          <Image src="/icons/radix.png" width={50} height={50} alt="vercel" />{" "}
          Radix UI
        </div>
        <div className="flex justify-center items-center gap-3 text-zinc-300 font-bold">
          <Image src="/icons/framer.png" width={50} height={50} alt="vercel" />{" "}
          Framer
        </div>
      </div>
    </section>
  );
};

export default page;

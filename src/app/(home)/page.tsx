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
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { BackgroundBeams } from "@/components/ui/background-beams";

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
    <section className="container py-10  sm:py-14 ">
      <div className="h-screen">
        <div className="w-full flex-col justify-center py-20 items-start ">
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
            <Image
              src="/icons/vercel.png"
              width={50}
              height={50}
              alt="vercel"
            />{" "}
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
            <Image
              src="/icons/framer.png"
              width={50}
              height={50}
              alt="vercel"
            />{" "}
            Framer
          </div>
        </div>
      </div>
      <LampContainer>
        <motion.h1
          // initial={{ opacity: 0.5, y: 100 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{
          //   delay: 0.3,
          //   duration: 0.8,
          //   ease: "easeInOut",
          // }}
          className="mt-8 bg-gradient-to-br from-zinc-50 to-zinc-200 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Get into the Empire
          <br /> of components
        </motion.h1>
      </LampContainer>
      <div className=" w-full flex justify-center items-center -translate-y-80">
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-5xl rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[400px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      {/* Joinlist */}
      <div className="h-[40rem] w-full -translate-y-80 rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Launching Soon
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-justify relative z-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <input
            type="text"
            placeholder="foundation@empire.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        {/* <BackgroundBeams /> */}
      </div>
    </section>
  );
};

export default page;

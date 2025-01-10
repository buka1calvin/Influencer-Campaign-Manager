"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col pt-10 gap-14 items-center text-black justify-center ">
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-green-300 to-green-200 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-green-300 to-green-200 rounded-full blur-3xl opacity-70"></div>
      <div className=" flex items-center max-w-6xl w-full h-full">
        <div className="flex md:flex-row flex-col-reverse gap-8 z-10 md:px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center md:mt-0 mt-10 text-center sm:text-left md:justify-self-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 md:hidden flex justify-center my-4 lg:mt-0"
            >
              <div className="rounded bg-green-800 shadow-inner shadow-purple-400/40 border border-neutral-900 w-[150px] h-[150px] relative flex justify-center items-center overflow-hidden">
              <Image
              alt="woman"
              src="/images/woman3.png"
              className="sm:w-[100px] sm:h-[100px]  rounded-b-[50px] md:w-[250px] md:h-[300px]"
              width={300}
              height={400}
            />
              </div>
            </motion.div>
            <h1 className=" mb-3 md:text-4xl text-2xl font-extrabold">
              <span className="text-primary">AI </span>
              for tech innovators, connecting brands with voices their customers
              trust
            </h1>
            <p className="mb-4 mt-3 text-sm lg:leading-normal text-text">
              trendAl uses AI to connect brands with the right micro-influencers
              for authentic, impactful partnerships.
            </p>
            <div className="flex items-center gap-4 mt-10 w-full md:justify-start justify-center">
              <button className="bg-secondary text-white text-sm py-2 px-6">
                Brand Signup
              </button>
              <button className="bg-secondary text-white text-sm py-2 px-6">
                Creator Signup
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 md:block relative hidden place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-md shadow-inner shadow-neutral-400/40 w-[250px] h-[250px] lg:w-[400px] lg:h-[450px] relative flex justify-center items-center overflow-hidden">
              <Image
                src="/images/bg-image.png"
                alt="hero image"
                className="w-full h-full rounde lg:w-[320px] lg:h-[400px] opacity-35"
                fill={true}
                loading="lazy"
              />
            </div>
            <Image
              alt="woman"
              src="/images/woman3.png"
              className="bg-green-700/50 absolute top-0 left-0 w-full h-[450px] object-contain"
              width={300}
              height={400}
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}

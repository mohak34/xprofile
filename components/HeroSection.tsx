"use client";

import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

const HeroSection: React.FC<{ imageUrl: string; imageAlt: string }> = ({
  imageUrl,
  imageAlt,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-start my-40"
    >
      <div className="container mx-auto mt-10 px-4 md:px-12">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-10 md:mb-0 md:w-1/2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-extrabold text-8xl text-white text-center md:text-8xl mb-4 p-8"
              >
                THE ONE LINK FOR ALL THE LINKS
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-semibold text-4xl text-white text-center mt-4"
              >
                Showcase Your All Links with X-Profile
              </motion.h3>
            </div>
            <div className="flex justify-center mt-14 md:justify-left">
              <motion.input
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                type="text"
                className="py-6 w-1/2 rounded-2xl text-black bg-neutral-50 border-2 border-black text-2xl font-semibold px-10"
                placeholder="xprofile.io/yourname"
              />
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="rounded-3xl px-6 ml-4 text-black bg-white font-bold  hover:bg-neutral-700	 hover:text-white"
              >
                Claim XProfile
              </motion.button>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-wrap justify-center rounded-3xl py-20">
            <div className="mb-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                src={imageUrl}
                alt={imageAlt}
                width={350}
                height={300}
                className="rounded-3xl p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;

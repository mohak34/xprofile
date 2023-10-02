"use client";

import React from "react";
import Image from "next/image";
import spotify from "@/public/logos_spotify.svg";
import instagram from "@/public/Instagram.svg";
import github from "@/public/github.svg";
import discord from "@/public/logos_discord.svg";

import { motion } from "framer-motion";

const Socials = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center my-36">
      <motion.div
        className="mr-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={spotify} alt="logo" width={150} height={300} />
      </motion.div>
      <motion.div
        className="mr-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={instagram} alt="logo" width={150} height={300} />
      </motion.div>
      <motion.div
        className="mr-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={github} alt="logo" width={150} height={300} />
      </motion.div>
      <motion.div
        className="mr-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={discord} alt="logo" width={150} height={300} />
      </motion.div>
    </div>
  );
};

export default Socials;

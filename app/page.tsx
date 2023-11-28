"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import moment from "moment";
import "moment/locale/de";
import { useEffect, useState } from "react";
import Link from "next/link";

moment.locale("de");

const fadeInVariants = {
  hidden: { opacity: 0, x: -999 },
  visible: { opacity: 1, x: 0 },
};

const Home = () => {
  const [currentMoment, setCurrentMoment] = useState(moment());
  const christmasDate = moment([2023, 11, 24]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMoment(moment());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.main
        className="flex min-h-screen flex-col items-center justify-between p-3.5"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 2 }}
      >
        <motion.div
          className=" flex flex-row justify-center gap-3.5 bg-white bg-opacity-40 p-3.5 rounded-md"
          variants={fadeInVariants}
        >
          <span className="font-bold text-2xl">Nicis Advents Kalender</span>
        </motion.div>
        <motion.span
          className="font-bold text-xl bg-white bg-opacity-40 p-3.5 rounded-md"
          variants={fadeInVariants}
        >
          {"Noch "}
          {moment().to(christmasDate, true)} {"bis Weihnachten"}
        </motion.span>
        {currentMoment.isAfter([2023, 10, 30]) ? (
          <Link href={`/${currentMoment.format("DD-MM-yyyy")}/`}>
            <div className="  ">
              <Image
                src={"/HRa1_transparent.gif"}
                alt="Türchen"
                width={350}
                height={350}
              ></Image>
            </div>
          </Link>
        ) : (
          <motion.div
            className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"
            variants={fadeInVariants}
            animate={{ rotate: 360 }}
            transition={{ duration: 2 }}
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/IMG_7979.png"
              alt="Next.js Logo"
              width={300}
              height={300}
            />
            <span className="absolute w-full bottom-0 right-0 text-2xl font-bold text-white bg-black bg-opacity-50 p-1.5 ">
              {"Es geht bald los!"}
            </span>
          </motion.div>
        )}
        <motion.div
          className="w-full flex flex-row justify-center gap-3.5 p-3.5 rounded-md"
          initial={{ opacity: 1, x: 999 }}
          animate={{ opacity: 1, x: -999 }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image
            src={
              "https://www.animierte-gifs.net/data/media/1084/animiertes-weihnachts-schlitten-bild-0011.gif"
            }
            width={100}
            height={100}
            alt="Weihnachtsmann"
          ></Image>
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
};

export default Home;

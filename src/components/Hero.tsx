import { LiquidButton } from "@/components/animate-ui/buttons/liquid";
import { MotionEffect } from "@/components/animate-ui/effects/motion-effect";
import { WritingText } from "@/components/animate-ui/text/writing";
import { ArrowRight, ChevronsDown, Newspaper } from "lucide-react";
//import Image from "next/image";
import Link from "next/link";
import Card from "./HeroImage";
import GitHub from "./icons/IconGithub";

export const Hero = () => {
  return (
    <section
      id="Inicio"
      className="relative w-full h-screen flex md:flex-row flex-col justify-center items-center pb-40 gap-6"
    >
      {/* <MotionEffect
        fade
        blur="10px"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        inView
      >
        <div className="w-64 h-64 rounded-full border-10 border-msdev-secondary overflow-hidden shadow-[0px_0px_22px_12px_rgba(154,_242,_135,_0.77)] shadow-msdev-progress-bar/15 ease-in-out duration-150 hover:shadow-[0px_0px_39px_15px_rgba(154,_242,_135,_0.77)]">
          <Image
            src={"/perfil.jpg"}
            alt="Perfil"
            width={1000}
            height={1000}
            className="w-full h-full object-cover sepia-75"
            priority
          />
        </div>
      </MotionEffect> */}
      <MotionEffect
        fade
        blur="10px"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        inView
      >
        <Card />
      </MotionEffect>
      <div className="flex flex-col justify-center items-center">
        <WritingText
          text="Matias"
          className="font-tanker text-8xl md:text-9xl text-center text-msdev-secondary "
        />
        <WritingText
          className="text-3xl md:text-4xl"
          text="Front End Developer"
        />
        <MotionEffect
          fade
          blur="10px"
          transition={{
            duration: 1.1,
            ease: "easeInOut",
          }}
          inView
        >
          <LiquidButton className="font-lexend text-lg mt-4 border">
            <Link
              href={"https://github.com/MatiSanchezDev"}
              target="__blank"
              className="flex items-center justify-center gap-2"
            >
              <GitHub className="w-4 h-4" />
              Github <ArrowRight />
            </Link>
          </LiquidButton>
          <LiquidButton className="font-lexend text-lg mt-4 border ml-3">
            <Link
              href="/CV-MATIAS NAHUEL SANCHEZ.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2"
            >
              <Newspaper />
              CV <ArrowRight />
            </Link>
          </LiquidButton>
        </MotionEffect>
      </div>
      <MotionEffect
        fade
        blur="10px"
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        inView
        className="absolute bottom-10 md:bottom-40 md:right-25 lg:bottom-60 lg:right-35 flex flex-col justify-center items-center md:justify-end md:items-end"
      >
        <span className="text-5xl font-tanker text-msdev-progress-bar">4+</span>
        <span className="font-lexend font-light text-xl mb-3">
          Años de Experiencia
        </span>
        <span className="text-5xl font-tanker text-msdev-progress-bar">2</span>
        <span className="font-lexend font-light text-xl">
          Experiencia laborales
        </span>
      </MotionEffect>
      <MotionEffect
        fade
        blur="10px"
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        inView
        className="hidden md:block md:absolute left-1/2 md:bottom-6 lg:bottom-20 -translate-x-1/2"
      >
        <span className="">
          <ChevronsDown className="w-20 h-20 text-msdev-secondary animate-bounce animate-infinite animate-ease-in" />
        </span>
      </MotionEffect>
    </section>
  );
};

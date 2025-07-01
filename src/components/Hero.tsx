import { LiquidButton } from "@/components/animate-ui/buttons/liquid";
import { MotionEffect } from "@/components/animate-ui/effects/motion-effect";
import { WritingText } from "@/components/animate-ui/text/writing";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id="Inicio"
      className="relative w-full h-screen flex justify-center items-center pb-40 gap-6"
    >
      <MotionEffect
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
      </MotionEffect>
      <div className="flex flex-col justify-center items-center">
        <WritingText
          text="MS.Dev"
          className="font-tanker text-9xl text-center text-msdev-secondary "
        />
        <WritingText className="text-4xl  " text="Front End Developer" />
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
              href={"https://www.linkedin.com/in/ms-dev-web/"}
              target="__blank"
              className="flex items-center justify-center gap-2"
            >
              Ver LinkedIn <ArrowRight />
            </Link>
          </LiquidButton>
          <LiquidButton className="font-lexend text-lg mt-4 border ml-3">
            <Link
              href="/CV-MATIAS NAHUEL SANCHEZ.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2"
            >
              Ver CV <ArrowRight />
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
        className="absolute bottom-70 right-30 flex flex-col justify-end items-end"
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
    </section>
  );
};

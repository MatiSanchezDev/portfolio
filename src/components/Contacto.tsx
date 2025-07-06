import { Linkedin, Github, FileText } from "lucide-react";
import Link from "next/link";
import CopyButton from "./CopyButton";
import Reveal from "./Reveal";

export const Contacto = () => {
  return (
    <section
      id="Contacto"
      className="w-full h-[80vh] flex flex-col items-center  pt-10 md:pt-36"
    >
      <h4 className="font-tanker text-5xl md:text-7xl blockk pt-5">Contacto</h4>
      <Reveal>
        <p className="text-gray-300 mb-8 text-2xl pt-20 text-center md:text-start">
          ¡Podés contactarme por cualquiera de estas vías!
        </p>
      </Reveal>

      {/* Íconos */}
      <div className="flex justify-center gap-6 mb-12 text-3xl text-gray-700">
        <Reveal>
          <Link
            href="https://www.linkedin.com/in/ms-dev-web/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-msdev-secondary transition w-10 h-10" />
          </Link>
        </Reveal>
        <Reveal>
          <Link
            href="https://github.com/MatiSanchezDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="hover:text-msdev-secondary transition w-10 h-10" />
          </Link>
        </Reveal>
        <Reveal>
          <Link
            href="/CV-MATIAS NAHUEL SANCHEZ.pdf"
            target="__black"
            rel="noopener noreferrer"
          >
            <FileText className="hover:text-msdev-secondary transition w-10 h-10" />
          </Link>
        </Reveal>
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <Reveal className="mb-8">
          <span className="text-gray-300 text-2xl">
            tambien te dejo mi email
          </span>
        </Reveal>
        <Reveal>
          <p className="text-gray-300 mb-8 text-xl font-lexend flex flex-col items-center gap-3">
            sanchezmatidev@gmail.com{" "}
            <CopyButton label="Copiar" value="sanchezmatidev@gmail.com" />
          </p>
        </Reveal>
      </div>
    </section>
  );
};

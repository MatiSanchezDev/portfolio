import CintasContratar from "@/components/CintasComponent";
import { Contacto } from "@/components/Contacto";
import { Hero } from "@/components/Hero";
import SectionIndicator from "@/components/SectionIndicator";
import { SobreMi } from "@/components/SobreMi";
import { Trabajos } from "@/components/Trabajos";

export default function HomePage() {
  return (
    <>
      <SectionIndicator />
      <Hero />
      <SobreMi />
      <CintasContratar />
      <Trabajos />
      <Contacto />
    </>
  );
}

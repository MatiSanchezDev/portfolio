"use client";
import { useEffect, useState } from "react";
import { Home, BriefcaseBusiness, MessagesSquare, User } from "lucide-react";

const sections = [
  { id: "Inicio", icon: Home },
  { id: "Sobre Mi", icon: User },
  { id: "Trabajo", icon: BriefcaseBusiness },
  { id: "Contacto", icon: MessagesSquare },
];

export default function SectionIndicator() {
  const [active, setActive] = useState<string>("Inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 ">
        {sections.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => {
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            title={`Ir a ${id}`}
            className={`p-3 rounded-full transition-colors duration-300  ${
              active === id
                ? "bg-msdev-progress-bar text-black scale-110"
                : "bg-gray-700 text-white hover:bg-msdev-progress-bar hover:text-black "
            }`}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </>
  );
}

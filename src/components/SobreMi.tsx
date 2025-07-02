import React from "./icons/IconReact";
import Reveal from "./Reveal";

const myStack = [
  {
    id: "1",
    icon: <React className="w-20 h-20" />,
    name: "React",
  },
  {
    id: "2",
    icon: <React className="w-20 h-20" />,
    name: "NextJs.",
  },
  {
    id: "3",
    icon: <React className="w-20 h-20" />,
    name: "TypeScript",
  },
];

export const SobreMi = () => {
  return (
    <section
      id="Sobre Mi"
      className="w-full h-auto flex flex-col items-center justify-center"
    >
      <h2 className="font-tanker text-7xl blockk pt-5">Mi Stack</h2>

      <div className="flex gap-8 items-center pt-6">
        {myStack.map((stack, index) => (
          <Reveal key={stack.id} delay={100 * index} className="flex">
            <div className="p-3 border border-msdev-secondary/20 rounded-lg shadow-[0px_0px_12px_2px_rgba(154,_242,_135,_0.77)] shadow-msdev-secondary/50 blockk hover:scale-105 flex flex-col justify-center items-center">
              <span>{stack.icon}</span>
              <span>{stack.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

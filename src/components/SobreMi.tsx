import { myStack } from "@/helpers/stacks";
import Reveal from "./Reveal";

export const SobreMi = () => {
  return (
    <section
      id="Sobre Mi"
      className="w-full h-auto flex flex-col items-center justify-center pb-10 md:pb-36"
    >
      <h2 className="font-tanker text-5xl md:text-7xl blockk pt-5">Mi Stack</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-8 items-center pt-10 md:pt-32">
        {myStack.map((stack, index) => (
          <Reveal key={stack.id} delay={30 * index} className="flex">
            <div className="py-4 md:py-3 px-6 md:px-8 border border-msdev-secondary/20 rounded-lg shadow-[0px_0px_12px_2px_rgba(154,_242,_135,_0.77)] shadow-msdev-secondary/50 blockk hover:scale-105 flex flex-col justify-center items-center transition ease-in-out sepia-25">
              <span>{stack.icon}</span>
              <span className="font-urbanist pt-2 hidden md:block text-xs md:text-md">
                {stack.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

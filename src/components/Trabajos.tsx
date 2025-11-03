import { Link2 } from "lucide-react";
import GitHub from "./icons/IconGithub";
import Link from "next/link";
import Reveal from "./Reveal";

export const Trabajos = () => {
  return (
    <section
      id="Trabajo"
      className="w-full h-auto flex items-center flex-col pt-2"
    >
      <h3 className="font-tanker text-5xl md:text-7xl blockk pt-5">
        Experiencias
      </h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-8 align-middle justify-items-center justify-self-center px-10 lg:px-20 pt-10 md:pt-32">
        <Reveal delay={100} className="w-full md:w-full h-auto mb-6">
          <div className="card w-full h-auto border  rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px] hover:shadow-msdev-secondary/55 font-urbanist">
            <div className="card-content p-4 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl shadow-lg mr-3 border-2 border-white/20 bg-msdev-secondary flex items-center justify-center text-black font-bold text-[0.6rem] leading-tight">
                  <div className="text-center">
                    Front
                    <br />
                    End
                  </div>
                </div>
                <div>
                  <h2
                    title="SuperApp"
                    className="text-lg font-bold text-white/90 truncate"
                  >
                    Ecommerce Entregapet
                  </h2>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block bg-green-500/20 text-green-300/90 mr-1">
                    Frontend
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block bg-green-500/20 text-green-300/90 ">
                    2024
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-white/80 mb-2">
                  Mayo 2024 - Diciembre 2024
                </h3>
                <div className="flex flex-wrap -mx-1">
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Next Js.
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Redux Toolkit
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    TailwindCSS
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Typescript
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-white/80 mb-2">
                  Trabajo realizado
                </h3>
                <ul className="text-xs text-white/60 grid grid-cols-1 gap-1">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Dark Mode" className="truncate">
                      Todo el diseño Frontend del Ecommerce
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Custom Themes" className="truncate">
                      Autenticación de usuario
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Password Protection" className="truncate">
                      Pasarela de pagos
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Password Protection" className="truncate">
                      SEO
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between items-center space-x-2">
                <Link
                  href={"https://entregapet.com.ar"}
                  target="__blank"
                  className="flex-1 bg-white/10 text-white/90 rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/20 flex items-center justify-center border border-white/20"
                >
                  <Link2 className="w-4 h-4 mr-2" />
                  Ver enlace
                </Link>
                {/*  <button className="flex-1 bg-white/20 text-white rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/30 flex items-center justify-center">
              <GitHub className="h-4 w-4 mr-2" />
              Download
            </button> */}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100} className="w-full md:w-full h-auto mb-6">
          <div className="card w-full h-auto border  rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px] hover:shadow-msdev-secondary/55 font-urbanist">
            <div className="card-content p-4 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl shadow-lg mr-3 border-2 border-white/20 bg-msdev-secondary flex items-center justify-center text-black font-bold text-[0.6rem] leading-tight">
                  <div className="text-center">
                    Full
                    <br />
                    Stack
                  </div>
                </div>
                <div>
                  <h2
                    title="SuperApp"
                    className="text-lg font-bold text-white/90 truncate"
                  >
                    Stickeria App
                  </h2>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block bg-green-500/20 text-green-300/90 mr-1">
                    FullStack
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block bg-green-500/20 text-green-300/90 ">
                    2025
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-white/80 mb-2">
                  Mayo 2025 - Octubre 2025
                </h3>
                <div className="flex flex-wrap -mx-1">
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Next Js.
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Zustand
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    TailwindCSS
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Typescript
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Node Js.
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Express
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Supabase
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-white/80 mb-2">
                  Trabajo realizado
                </h3>
                <ul className="text-xs text-white/60 grid grid-cols-1 gap-1">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Widgets" className="truncate">
                      Todo el diseño tanto front como back
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Dark Mode" className="truncate">
                      Gestor de pedidos
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Custom Themes" className="truncate">
                      Mensajes detallados para el cliente
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Password Protection" className="truncate">
                      Control de ingresos por meses / total historico
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between items-center space-x-2">
                <Link
                  href={"https://front-stickeria.vercel.app"}
                  target="__blank"
                  className="flex-1 bg-white/10 text-white/90 rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/20 flex items-center justify-center border border-white/20"
                >
                  <Link2 className="w-4 h-4 mr-2" />
                  Ver enlace
                </Link>
                <Link
                  href={"https://github.com/MatiSanchezDev/front-stickeria"}
                  target="__black"
                  className="flex-1 bg-white/20 text-white rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/30 flex items-center justify-center"
                >
                  <GitHub className="h-4 w-4 mr-2" />
                  Repositorio
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="rounded-lg shadow-sm">
      <div className="w-full hidden md:block max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span
            id="Inicio"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Link
              href={""}
              className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-msdev-secondary"
            >
              Matias N. Sanchez
            </Link>
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <Link
                href={"https://www.linkedin.com/in/ms-dev-web/"}
                target="__blank"
                rel="noopener noreferrer"
                className="hover:underline me-4 md:me-6 hover:text-msdev-secondary"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/MatiSanchezDev"}
                target="__blank"
                rel="noopener noreferrer"
                className="hover:underline me-4 md:me-6 hover:text-msdev-secondary"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href={"/CV-MATIAS NAHUEL SANCHEZ.pdf"}
                target="__blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-msdev-secondary"
              >
                Currículum Vitae
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-msdev-secondary sm:mx-auto lg:my-8" />
        <span className="block text-xs md:text-sm text-white sm:text-center font-urbanist font-normal w-full">
          © 2025{" "}
          <Link
            href="https://www.linkedin.com/in/ms-dev-web/"
            target="__blank"
            className="hover:underline"
          >
            Matias Sanchez dev{" "}
          </Link>
          - Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

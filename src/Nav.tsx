import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);
  const showMobileMenu = !isDesktop;

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="z-10 m-auto max-w-[1200px] w-full">
      {isDesktop && (
        <div className="flex justify-between py-5  text-xl items-center md:px-4  ">
          <Link to="/">
            <p className="font-specter font-bold m-2 text-2xl text-center">
              Ivan Hughes
            </p>
          </Link>

          <div className="flex font-light text-zinc-500">
            <Link to="/">
              <p className="m-2" onClick={() => handleCloseMenu()}>
                Sobre mi
              </p>
            </Link>
            <Link to="/contacto">
              <p className="m-2" onClick={() => handleCloseMenu()}>
                Contacto
              </p>
            </Link>
            <Link to="https://www.instagram.com/ivxnbelike/" target="_blank">
              <p
                className="p-2 align-baseline text-center"
                onClick={() => handleCloseMenu()}
              >
                Instagram
              </p>
            </Link>
          </div>
        </div>
      )}
      {showMobileMenu && !isMenuOpen && (
        <nav className="">
          <Link
            to="/"
            className="flex justify-between py-5 px-2 text-xl items-center m-auto "
          >
            <p className=" font-bold text-primary-100 text-2xl text-center">
              Ivan Hughes
            </p>
            <div onClick={() => handleOpenMenu()}>
              <FaBars size={30} />
            </div>
          </Link>
        </nav>
      )}

      {isMenuOpen && (
        <div className="absolute h-full w-full bg-black duration-100">
          <div
            className="absolute right-0 p-5"
            onClick={() => handleCloseMenu()}
          >
            <IconContext.Provider value={{ color: "white" }}>
              <IoCloseSharp size={30} />
            </IconContext.Provider>
          </div>
          <div className="flex justify-center text-center flex-col h-full text-2xl text-white">
            <Link to="/">
              <p className="m-2" onClick={() => handleCloseMenu()}>
                Home{" "}
              </p>
            </Link>
            <Link to="/">
              <p className="m-2" onClick={() => handleCloseMenu()}>
                Sobre mi
              </p>
            </Link>
            <Link to="/contacto">
              <p className="m-2" onClick={() => handleCloseMenu()}>
                Contacto
              </p>
            </Link>
            <Link to="/">
              <p className="m-2" onClick={() => handleCloseMenu()}>
                Instagram
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

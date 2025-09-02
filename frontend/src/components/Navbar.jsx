import { useState } from "react";
import { navIcons, navLists } from "../constants";
import { HamburgerMenu } from "./design/Header";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";

const Navbar = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdropblur-sm"
      }`}
    >
      <div className="flex items-center justify-between w-full px-10">
        <a className="block" href="#hero">
          <img src={null} alt="icon" width={32} height={32} />
        </a>
        <nav
          className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:flex-1 justify-center lg:bg-transparent ${
            openNavigation ? "flex" : "hidden"
          }`}
        >
          <div className="relative z-2 flex flex-col gap-5 md:flex-row lg:flex-row items-center justify-center w-full mx-auto">
            {navLists.map((nav) => (
              <a
                key={nav.id}
                href={nav.url}
                className={`block relative font-code text-2xl uppercase text-w-100 transition-colors hover:text-color-1 ${
                  nav.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  nav.url === pathName.hash ? "z-2 lg:text-white-100" : "lg:text-n-1/50"
                }`}
                onClick={handleClick}
              >
                {nav.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <div className="flex flex-row items-center justify-center gap-2">
          {navIcons.map((icon, i) => (
            <div key={i} className="">
              <img
                src={icon.iconUrl}
                alt={icon.iconUrl}
                width={32}
                height={32}
                className="hover:brightness-150 cursor-pointer"
              />
            </div>
          ))}
        </div>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg></MenuSvg>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

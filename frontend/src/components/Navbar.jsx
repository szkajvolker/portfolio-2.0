import { useState } from "react";
import { navLists } from "../constants";
import { HamburgerMenu } from "./design/Header";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import logoIcon from "../assets/images/logoIcon.jpg";
import DarkmodeToggle from "./DarkmodeToggle";

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
      className={`fixed top-0 left-0 z-50 w-full  shadow-xl shadow-gray-500  dark:shadow-purple-800 flex items-center justify-between p-2 ${
        openNavigation ? "dark:bg-n-8 bg-n-1" : "dark:bg-n-8/90 bg-n-1 backdrop-blur-sm"
      } lg:px-5`}
    >
      <a className="block" href="#hero">
        <img
          src={logoIcon}
          alt="icon"
          width={60}
          height={60}
          className="rounded-xl hover:brightness-150"
        />
      </a>

      <div className="hidden lg:flex items-center gap-8">
        {navLists.map((nav) => (
          <a
            key={nav.id}
            href={nav.url}
            className={`font-code text-md font-bold uppercase transition-colors hover:text-color-1 ${
              nav.url === pathName.hash ? "text-color-1" : "text-n-3 dark:text-n-2"
            }`}
            onClick={handleClick}
          >
            {nav.title}
          </a>
        ))}
      </div>

      {openNavigation && (
        <div className="fixed h-full top-0 left-0 right-0 dark:bg-n-8 bg-n-1 flex justify-center items-center backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-8 items-center">
            {navLists.map((nav) => (
              <a
                key={nav.id}
                href={nav.url}
                className="font-code text-2xl uppercase text-n-4 transition-colors hover:text-color-1"
                onClick={handleClick}
              >
                {nav.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </div>
      )}

      <div className="flex items-center gap-2">
        <DarkmodeToggle />
        <Button className="lg:hidden" onClick={toggleNavigation}>
          <MenuSvg />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

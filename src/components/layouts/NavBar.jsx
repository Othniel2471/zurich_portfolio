import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //   faChevronLeft,
  //   faChevronRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../general/Button";
import Logo from "../general/Logo";
// import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  let links = [
    { linkName: "home", link: "#about" },
    { linkName: "why us", link: "#work" },
    { linkName: "our services", link: "#contact" },
    { linkName: "our products", link: "#contact" },
  ];

  let [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const downloadCV = () => {
    console.log("download cv");
    window.open("/cv/othniel_omaidu.pdf", "_blank");
  };

  return (
    <nav className="sticky top-0 z-30 w-full border-b bg-[#000000] border-transparent max-md:border-gray-100 bg-gray/50 backdrop-blur-xl md:border-gray-100">
      <div className="mx-auto flex flex-col md:flex-row w-full max-w-7xl md:items-center justify-between p-4 md:px-8">
        <div>
          {/* <HashLink
            smooth
            to="#hero-section"
            className="text-2xl md:text-3xl text-gray-900 font-bold"
          > */}
          <span className="mb-3 bg-pink-50">
            <Logo />
          </span>
          {/* </HashLink> */}
        </div>
        <div
          onClick={toggleMenu}
          className="text-2xl text-white absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {showMenu ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <ul
          className={`md:flex md:items-center gap-6  md:pb-0 pb-12 lg:pt-[0] pt-[3rem] capitalize absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-100 ease-in ${
            showMenu
              ? "top-19 drop-shadow-xl opacity-100 bg-black"
              : "top-[-480px] md:opacity-100 opacity-0"
          }`}
        >
          {links.map((link) => {
            return (
              <li key={link.linkName} className="md:my-0 my-7 ">
                <span
                  //   smooth
                  //   to={link.link}
                  className="text-base font-medium text-white transition-all hover:bg-[#5B0202] hover:py-[19px] hover:px-[10px] active:text-gray-600 hover:cursor-pointer"
                >
                  {link.linkName}
                </span>
              </li>
            );
          })}
          <Button onClick={downloadCV}>Contact Us</Button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

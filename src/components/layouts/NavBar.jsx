import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../general/Button";
import Logo from "../general/Logo";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  let links = [
    { linkName: "home", link: "/" },
    { linkName: "why us", link: "/why-us" },
    { linkName: "our services", link: "/services" },
    { linkName: "our products", link: "/products" },
  ];

  let [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="sticky top-0 z-30 w-full border-b bg-[#000000] border-transparent max-md:border-gray-100 bg-black/50 backdrop-blur-xl md:border-gray-100">
      <div className="mx-auto flex flex-col md:flex-row w-full max-w-7xl md:items-center justify-between p-4 md:px-8">
        <div>
          <NavLink to="/">
            <span className="mb-3 bg-pink-50">
              <Logo />
            </span>
          </NavLink>
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
              <li
                key={link.linkName}
                className="md:my-0 my-7 "
                onClick={toggleMenu}
              >
                <NavLink
                  to={link.link}
                  className="text-base font-medium text-white transition-all hover:bg-[#5B0202] hover:py-[10px] hover:px-[10px] active:text-gray-600 hover:cursor-pointer"
                >
                  {link.linkName}
                </NavLink>
              </li>
            );
          })}
          <Button>
            <NavLink to="/contact">Contact Us</NavLink>
          </Button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
// import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
// import formImage from "../../assets/pngs/form-img.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6  flex flex-col ">
      <div className="flex items-center justify-center pt-2 border-gray-100 border-t-2 gap-1">
        <p className="text-normal text-sm flex items-center text-white">
          <FontAwesomeIcon
            icon={faCopyright}
            className="mr-1 inline-block h-4 w-4"
          />
          Zurich Consulting Limited {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

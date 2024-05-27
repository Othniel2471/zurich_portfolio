import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 border-t-2 border-gray-100">
      <div className="flex items-center justify-center gap-1">
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SuccessPage = () => {
  const closeSuccessPage = () => {
    window.location.reload();
  };

  return (
    <div
      onClick={closeSuccessPage}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50 p-3"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <div className="flex flex-col items-center justify-center mb-6">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-red-600 text-6xl"
          />
          <h2 className="text-red-600 text-xl font-bold">Form Submitted</h2>
        </div>
        <p className="text-gray-600 text-center">
          We have received your message and will get back to you as soon as we
          can.
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import formImage from "../assets/pngs/form-img.png";
import Button from "../components/general/Button";
import bgImg from "../assets/pngs/gradient6.jpg";
import { useForm } from "@formspree/react";
import SuccessPage from "../components/general/SuccessPage";
import { Bars } from "react-loader-spinner";

const Contact = () => {
  const [state, handleSubmit] = useForm("xrgnnplr");
  const [loading, setLoading] = useState(false);

  if (state.succeeded) {
    return <SuccessPage />;
  }

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <section
      className="w-full py-16 md:py-20 2xl:py-24 bg-black text-white"
      style={{
        backgroundColor: "#00000",
        backgroundImage: ` url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundBlendMode: "overlay",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="grid place-items-center gap-10 mb-4">
          <h2 className="capitalize font-[600] text-[30px] text-[#ffff]">
            contact us
          </h2>
          <p className="text-[0.9em] lg:text-[1em] text-base w-[21rem] md:w-[56rem] text-white text-center">
            Trying to connect with us? Reach us via one of the following
            channels..
          </p>
        </div>
        <div className="grid place-items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.774265173026!2d7.378334974859375!3d9.084317590979264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e758375323027%3A0xaa9d0dae2032981e!2sDonald%20Building!5e0!3m2!1sen!2sng!4v1717072466765!5m2!1sen!2sng"
            // width="600"
            // height="450"
            // style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[300px] h-[200px] lg:w-[1042px] lg:h-[436px] rounded-md"
          ></iframe>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-3">
          <div className="flex gap-1 items-center w-[60%] lg:w-[19%]">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <div>
              Donald building, Nonso Benson Street, Life Camp. Abuja, F.C.T.
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <a href="mailto:info@zurichng.com">info@zurichng.com</a>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <div>
              <a href="tel:+234-803-465-2883">+234-803-465-2883</a>
            </div>
          </div>
        </div>
        <div className="grid place-items-center gap-10">
          <h2 className="capitalize font-[600] text-[30px] text-[#ffff]">
            Leave Us A Message
          </h2>
        </div>
        <div className="grid place-items-center">
          <div
            className="w-[300px] h-[200px] lg:w-[1042px] lg:h-[436px] rounded-md grid place-items-center"
            style={{
              backgroundImage: `url(${formImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-black lg:w-[485px] lg:h-[320px] w-[300px] h-[200px] grid place-items-center opacity-85 rounded-md gap-3"
            >
              <div className="flex flex-col items-center gap-3 w-[300px] lg:w-[350px] text-white">
                {/* <label htmlFor="email">Email Address</label> */}
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="bg-black opacity-85 w-full h-[32px] border-b-2 border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#ff0000]"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="bg-black opacity-85 w-full h-[32px] border-b-2 border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#ff0000]"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="bg-black opacity-85 w-full h-[72px] border-b-2 border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#ff0000]"
                  required
                ></textarea>
                <Button
                  className="w-[35px] h-[35px] grid place-items-center text-white p-2 rounded-md"
                  onClick={handleClick}
                >
                  {loading ? (
                    <span className="flex ">
                      <Bars
                        height="30"
                        width="30"
                        color="#fff"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />{" "}
                    </span>
                  ) : (
                    <FontAwesomeIcon icon={faPaperPlane} />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

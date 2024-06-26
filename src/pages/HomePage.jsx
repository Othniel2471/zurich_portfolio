import Button from "../components/general/Button";
import { NavLink } from "react-router-dom";
import Hero2 from "../assets/imgs/Photo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import bgImg from "../assets/pngs/gradient6.jpg";
const HomePage = () => {
  const text = "ZURICH CONSULTING".split(" ");

  return (
    <section
      className="w-full  opacity-1 py-16 md:py-20 2xl:py-24"
      id="hero-section"
      style={{
        backgroundColor: "#00000",
        backgroundImage: ` url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl place-items-center gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex max-w-3xl flex-grow flex-col place-items-center justify-center gap-8 md:order-first  md:justify-center 2xl:gap-12">
            <div className="flex flex-col gap-2 justify-center place-items-center">
              <h1 className="flex flex-col text-[26px] font-semibold capitalize text-center md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-[40px] lg:leading-[69.74px] text-white">
                <div>
                  {text.map((el, i) => (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: i / 10,
                      }}
                      key={i}
                    >
                      {el === "ZURICH" ? (
                        <motion.span
                          className="gradient-text"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 1,
                            delay: i / 10,
                          }}
                        >
                          {el}
                        </motion.span>
                      ) : (
                        el
                      )}{" "}
                    </motion.span>
                  ))}
                </div>
              </h1>
              <p className="text-[0.9em] lg:text-[1em] text-base w-[21rem] md:w-[56rem] text-white text-center">
                Zurich Consulting Limited is a Nigerian incorporated that was
                founded in 2020. We are a vast and widely experienced
                construction and architectural company that provides services
                including General Contractor, Design & Consultant, Design &
                Build, Construction Project Management and BIM Services.
              </p>
            </div>
            <div className="grid place-items-center">
              <Button>
                <NavLink to="/contact" className="text-white">
                  Request Services{" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </NavLink>
              </Button>
            </div>
            <div className="flex flex-col lg:flex-row  justify-center items-center  gap-2">
              <motion.img
                src={Hero2}
                alt="hero2"
                className="w-[300px] h-[200px] lg:w-[1042px] lg:h-[436px]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

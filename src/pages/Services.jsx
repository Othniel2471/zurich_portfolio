import servImg from "../assets/imgs/services.jpg";
import servImg2 from "../assets/imgs/hero-img2.jpg";
import servImg3 from "../assets/imgs/hero-img.jpg";
import { motion } from "framer-motion";
import bgImg from "../assets/pngs/gradient6.jpg";

const Services = () => {
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
            our services
          </h2>
          <p className="text-[0.9em] lg:text-[1em] text-base w-[21rem] md:w-[56rem] text-white text-center">
            zurich Consulting Limited has a strong professional team with more
            than 150 standby artisans and professionals readily available to
            provide the highest quality services on schedule and within budget.
            Our people and successful backgrounds enable clients to the allure
            of working with us.
          </p>
        </div>

        <div className="grid place-items-center gap-3">
          <motion.div
            className=" grid place-items-center lg:grid-cols-2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5">
              <img
                src={servImg}
                alt=""
                className="w-[300px] h-[200px] lg:w-[510px] lg:h-[400px] rounded-md"
              />
            </div>
            <div className=" ">
              <div className="flex flex-col-reverse gap-2 lg:flex-row">
                <div className="border-t-2 border-gray-100 w-[200px] lg:w-1/2"></div>
                <span className="capitalize font-[600] text-[20px] lg:translate-y-[-1rem]">
                  building construction
                </span>
              </div>
              <div className="flex">
                <p className="w-[312px] text-[20px] font-[400]">
                  We pride ourselves of vast experience in the building industry
                  where we have constructed both high-rise and low-rise
                  residential buildings, commercial buildings and also
                  institutional buildings.
                </p>
                <span className="hidden lg:block font-[600] text-[11em] translate-y-[-5rem]">
                  01
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className=" grid place-items-center lg:grid-cols-2"
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 lg:order-2">
              <img
                src={servImg2}
                alt=""
                className="w-[300px] h-[200px] lg:w-[510px] lg:h-[350px] rounded-md"
              />
            </div>
            <div className="lg:order-1 ">
              <div className="flex flex-col-reverse gap-2 lg:flex-row">
                <div className="border-t-2 border-gray-100 w-[309px] mb-2 lg:w-1/3"></div>
                <span className="capitalize font-[600] text-[20px] lg:translate-y-[-1rem]">
                  construction project management
                </span>
              </div>
              <div className="flex">
                <p className="w-[312px] text-[20px] font-[400]">
                  We also offer a wide range of project management services
                  which include but not limited to construction project planning
                  & management, contract management, construction project
                  supervisions and site inspections.
                </p>
                <span className="hidden lg:block font-[600] text-[11em] translate-y-[-5rem]">
                  02
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className=" grid place-items-center lg:grid-cols-2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5">
              <img
                src={servImg3}
                alt=""
                className="w-[300px] h-[200px] lg:w-[510px] lg:h-[400px] rounded-md"
              />
            </div>
            <div className="ml-2">
              <div className="flex flex-col-reverse gap-2 lg:flex-row">
                <div className="border-t-2 border-gray-100 w-[275px] lg:w-1/3 mb-2"></div>
                <span className="capitalize font-[600] text-[20px] lg:translate-y-[-1rem]">
                  bridge and road construction
                </span>
              </div>
              <div className="flex">
                <p className="w-[312px] text-[20px] font-[400]">
                  Zurich consulting Ltd. also offers a wide range of civil and
                  structural engineering construction ranging from steel
                  structures erections, reinforced concrete structures and road
                  construction in gravel, paving blocks, concrete, bitumen roads
                  and associated drainage structures.
                </p>
                <span className="hidden lg:block font-[600] text-[11em] translate-y-[-5rem]">
                  03
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

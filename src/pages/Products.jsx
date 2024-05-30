import { useEffect } from "react";
import image1 from "../assets/projects/image1.png";
import image2 from "../assets/projects/photo2.png";
import image3 from "../assets/projects/Photo3.png";
import image4 from "../assets/projects/Photo4.png";
import image5 from "../assets/projects/Photo5.png";
import video from "../assets/video/video.mp4";
import Button from "../components/general/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Products = () => {
  useEffect(() => {
    const videoElement = document.getElementById("video");
    if (videoElement) {
      videoElement.play();
    }
  }, []);

  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="grid place-items-center gap-10 mb-4">
          <h2 className="capitalize font-[600] text-[30px] text-[#ffff]">
            our projects
          </h2>
          <p className="text-[0.9em] lg:text-[1em] text-base w-[21rem] md:w-[56rem] text-white text-center">
            zurich Consulting Limited has a strong professional team with more
            than 150 standby artisans and professionals readily available to
            provide the highest quality services on schedule and within budget.
            Our people and successful backgrounds enable clients to the allure
            of working with us.
          </p>
        </div>
        <div className="grid place-items-center gap-5">
          <div className="flex flex-col lg:flex-row gap-3 gap-y-[1rem]">
            <div className="order-2 lg:order-1">
              <img
                src={image1}
                alt=""
                className="w-[300px] h-[200px] lg:w-[333px] lg:h-[400px] rounded-md"
              />
            </div>
            <motion.div
              className="flex flex-col justify-center items-center order-1 lg:order-2 "
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Button className="w-[11rem] h-[64px] flex gap-1 mb-5  rounded-md">
                view full projects{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Button>
              <img
                src={image2}
                alt=""
                className="w-[300px] h-[200px] lg:w-[333px] lg:h-[400px] "
              />
            </motion.div>
            <motion.div
              className="order-3"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={image3}
                alt=""
                className="w-[300px] h-[200px] lg:w-[333px] lg:h-[400px]"
              />
            </motion.div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={image4}
                alt=""
                className="w-[300px] h-[200px] lg:w-[500px] lg:h-[400px] "
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={image5}
                alt=""
                className="w-[300px] h-[200px] lg:w-[500px] lg:h-[400px] "
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.video
              id="video"
              src={video}
              muted
              autoPlay
              loop
              controls
              className="w-[300px] h-[200px] lg:w-[1058px] lg:h-[450px] "
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;

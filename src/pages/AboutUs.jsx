import {
  faHandHoldingHeart,
  faLightbulb,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUs = () => {
  return (
    <section className="w-full h-full py-16 md:py-20 2xl:py-24 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="grid place-items-center gap-16 mb-4">
          <h2 className="capitalize font-[600] text-[30px] text-[#ffff]">
            Why Trust Us?
          </h2>
          <p className="text-[0.9em] lg:text-[1em] text-base w-[21rem] md:w-[56rem] text-white text-center">
            We have built our reputation by performing the highest quality works
            to diverse industries from small-scale to multi-million dollar
            projects. Today, we are recognized as a reliable contractor for our
            knowledge and highly responsible in the assigned duties by our
            clients.
          </p>
        </div>
        <div className="grid place-items-center lg:grid-cols-3">
          <div className="bg-[#5B0202] flex flex-col gap-3 p-5 w-[275px] rounded-md translate-y-[-35px] hover:cursor-pointer hover:drop-shadow-3xl transition-all duration-100 ease-in">
            <div className=" flex justify-between">
              <span className="h-[40px] w-[40px] bg-white grid place-items-center rounded-md">
                <FontAwesomeIcon
                  className="text-[#5B0202] text-2xl"
                  icon={faLightbulb}
                />
              </span>
              <span className="font-[500] text-[30px]">01</span>
            </div>
            <h4 className="font-[500] text-[30px] capitalize">vision</h4>
            <p>
              Our vision is to become A national market leader in the provision
              of Architectural, Project management, and building construction
              services
            </p>
          </div>
          <div className="bg-[#5B0202] flex flex-col gap-3 p-5 w-[275px] rounded-md translate-y-[-23px] hover:cursor-pointer hover:drop-shadow-3xl transition-all duration-100 ease-in">
            <div className=" flex justify-between">
              <span className="h-[40px] w-[40px] bg-white grid place-items-center rounded-md">
                <FontAwesomeIcon
                  className="text-[#5B0202] text-2xl"
                  icon={faRocket}
                />
              </span>
              <span className="font-[500] text-[30px]">02</span>
            </div>
            <h4 className="font-[500] text-[30px] capitalize">mission</h4>
            <p>
              We aim to be a world-class Architectural Construction Company
              providing efficient affordable, sustainable, cost effective
              services of highest level of quality
            </p>
          </div>
          <div className="bg-[#5B0202] flex flex-col gap-3 p-5 w-[275px] rounded-md hover:cursor-pointer hover:drop-shadow-3xl transition-all duration-100 ease-in">
            <div className=" flex justify-between">
              <span className="h-[40px] w-[40px] bg-white grid place-items-center rounded-md">
                <FontAwesomeIcon
                  className="text-[#5B0202] text-2xl"
                  icon={faHandHoldingHeart}
                />
              </span>
              <span className="font-[500] text-[30px]">03</span>
            </div>
            <h4 className="font-[500] text-[30px] capitalize">values</h4>
            <p>
              We believe in maintaining the highest standard of professionalism,
              integrity, creativity, positive attitude, and delivery that meets
              and surpass expectations while offering prompt and lasting
              solutions that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

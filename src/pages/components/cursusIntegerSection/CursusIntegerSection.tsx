import React from "react";
import Image from "next/image";
import Image1 from "../../../assets/course.png";
import Icon from "../../../assets/icon.svg";
import CustomButton from "../CustomButton";

interface CursusIntegerSectionProps {
  backgroundClass?: string;
  withSkew: boolean;
}

const CursusIntegerSection: React.FC<CursusIntegerSectionProps> = ({
  backgroundClass,
  withSkew,
}) => {
  const skewClass = withSkew ? "skew-bg" : "";

  return (
    <div className={`relative mx-auto`}>
      {withSkew && (
        <div
          className={`absolute ${backgroundClass} inset-0 transform -skew-y-15 z-0`}
        ></div>
      )}
      <div
        className={`flex flex-col sm:flex-row md:flex-row-reverse justify-center	    z-10 pb-12 mx-2 md:mx-10`}
      >
        <div className="md:pt-20 ">
          <Image src={Image1} alt="Your Image" width={500} height={500} />
        </div>
        <div className="flex flex-col md:pt-24 ">
          <p className="text-xl sm:text-xl md:text-3xl font-bold text-yellow">
            risus praesent vulputate.
          </p>
          <p className="text-2xl sm:text-2xl md:text-4xl font-bold text-black py-2">
            Cursus Integer
          </p>
          <p className="text-2xl sm:text-2xl md:text-4xl font-bold text-black py-2 typing-container typing-text">
            Consequat Tristique.
          </p>
          <div className="flex flex-wrap  md:justify-start">
            <CustomButton
              iconSrc={Icon}
              label="Cursus Integer"
              backgroundColor="white"
              textColor="black"
            />

            <CustomButton
              iconSrc={Icon}
              label="Cursus Integer"
              backgroundColor="white"
              textColor="black"
            />
          </div>
          <div className="flex flex-wrap  py-2 md:justify-start">
            <CustomButton
              iconSrc={Icon}
              label="Cursus Integer"
              backgroundColor="white"
              textColor="black"
            />

            <CustomButton
              iconSrc={Icon}
              label="Cursus Integer"
              backgroundColor="white"
              textColor="black"
            />
          </div>

          <button className="bg-yellow text-black py-3 px-4 rounded-full my-4 md:mt-8 md:w-1/2">
            <p>Cursus Integer</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CursusIntegerSection;

import BoxText from "@/components/helper/BoxText";
import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="pt-16 pb-16 ">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* Text Content  */}
        <div className="lg:col-span-2">
          <BoxText>Our Team</BoxText>
          <h1 className="mt-4 text-xl text-gray-700 font-bold md:text-2xl ">
            Our Team of Exceptional Talent, Innovation, and Vision
          </h1>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptas quod mollitia vitae minus laborum, temporibus nostrum culpa
            impedit maiores
          </p>
          {/* Button  */}
          <a
            href="#_"
            className="rounded mt-6 inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Join Our Team</span>
          </a>
        </div>
        {/* Images Content  */}
        <div className="sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:col-span-3">
            <div className="relative overflow-hidden">
                <Image data-aos = 'fade-right' data-aos-anchor-placement = 'top-center' src="/images/t1.jpg" alt="team" width={300} height={300} className="rounded-lg" />
                <div className="absolute w-full h-[5rem] bottom-0 p-4 bg-rose-500 rounded-lg">
                    <p className="text-lg text-white font-bold">Obito Uchina</p>
                    <p className="text-gray-200">(Founder)</p>
                </div>
            </div>
            <div data-aos = 'fade-right' data-aos-delay = '100' data-aos-anchor-placement = 'top-center' className="relative overflow-hidden">
                <Image src="/images/t2.jpg" alt="team" width={300} height={300} className="rounded-lg" />
                <div className="absolute w-full h-[5rem] bottom-0 p-4 bg-orange-500 rounded-lg">
                    <p className="text-lg text-white font-bold">Jessica Doe</p>
                    <p className="text-gray-200">(Co-Founder)</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

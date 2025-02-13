import React, { useEffect, useState } from "react";
import Header from "@/common/Header";
import overlay from "@/assets/images/overlay.png";
import Footer from "@/common/Footer";
import loader from "@/assets/images/loader.gif";
import Image from "next/image";
function Information() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const images = document.querySelectorAll("img");
    let imagesLoaded = 0;

    images.forEach((img) => {
      if (img.complete) {
        imagesLoaded++;
      } else {
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }
        };
        img.onerror = () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }
        };
      }
    });

    if (imagesLoaded === images.length) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);
  return (
    <>
      {loading ? (
        <>
          <div className="fixed top-0 left-0 right-0 h-screen bg-black">
            <div className="flex self-center h-screen">
              <Image src={loader} className="w-1/2 m-auto" alt="loading" />
            </div>
          </div>
        </>
      ) : (
        <div>
          <Header className="2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto" />
          <div className="2xl:bg-full-bg xl:bg-full-bg lg:bg-tab-bg md:bg-tab-bg sm:bg-mobile-bg bg-mobile-bg bg-cover bg-no-repeat pt-[90px] 2xl:px-0 xl:px-0 lg:px-0 md:px-10 sm:px-6 s:px-6 ">
            <div className="pt-16 pb-3">
              <h1 className="4xl:text-[104px] 3xl:text-[72px] 2xl:text-[50px] xl:text-[50px] lg:text-[50px] md:text-[42px] sm:text-[38 px] s:text-[38px] font-bold leading-none text-center text-[#4E4D69]">
                NFG information
              </h1>
            </div>
            <div className=" 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-8 s:mb-8 ">
              <Image
                className="object-cover w-full"
                src={overlay}
                alt="Overlay"
              />
            </div>

            <div className=" 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-12 xl:py-12 lg:py-12 md:py-12 sm:py-8 s:py-8">
              <p className="text-[#9991BE]">
                Get Cover LLC is a subsidiary of NFG SA. a London based global
                private investment firm focused on private equity and structured
                finance investments into operating companies engaged in the
                insurance, financial services, energy, infrastructure and real
                estate sectors.
                <br /> <br />
                With more than $2.5 billion in firm capital and a focus on
                transformative business combinations across our target industry
                sectors throughout North America, Europe, Africa, and the Middle
                East creating a strategic international presence, coupled with a
                deep understanding of the importance of capital, NFG has the
                experience, expertise, and financial capability to fund bespoke
                structured finance transactions creating efficient and cost-
                effective financing programs that drive long term value
                creation.
              </p>
            </div>
            <div className=" 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Information;

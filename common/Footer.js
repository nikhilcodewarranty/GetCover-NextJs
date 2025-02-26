import React, { useEffect, useState } from "react";
import logo from "@/assets/images/New_logo.png";
import Linked from "@/assets/images/sider/linked.svg";
import Insta from "@/assets/images/sider/instagram.svg";
import FaceBook from "@/assets/images/sider/facebook.svg";
import Twitter from "@/assets/images/sider/twitter.png";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24); // Update daily

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="flex justify-end py-3">
        <Link
          href="/financial"
          className="text-[#847CA0] border-r-2 border-[#847CA0] pr-5"
        >
          Financial{" "}
        </Link>
        <Link
          href="/terms-and-conditions"
          className="text-[#847CA0] border-r-2 border-[#847CA0] px-5"
        >
          Terms & Conditions{" "}
        </Link>
        <Link href="/privacy-policy" className="text-[#847CA0] pl-5">
          {" "}
          Privacy Policy
        </Link>
      </div>
      <div className="2xl:flex xl:flex lg:flex md:hidden sm:hidden s:hidden justify-between py-6 pr-5 border-t border-[#847CA0]">
        <div className="self-center">
          <Image src={logo} className="w-[158px]" alt="logo" />
        </div>
        <div className=" self-center">
          <p className="self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] text-[#9991BE]">
            Copyright © 2023-{year} GetCover Company. All rights reserved.
          </p>
          {/* <p className="4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] text-[#B8AEDA] font-medium text-center " style={{ bottom: '20px' }}>Design, Develop & Maintain by <Link rel="noreferrer" href="https://codenomad.net/" className='text-[#fff] ' target="_blank">Codenomad India </Link></p> */}
        </div>
        <div className="flex">
          <Link
            href="https://www.linkedin.com/company/get-cover-company"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image src={Linked} alt="Linked" />{" "}
          </Link>
          <Link
            href="https://www.facebook.com/GetCoverCompany"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={FaceBook} alt="FaceBook" />
          </Link>
          <Link
            href="https://x.com/GetCoverCompany"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Twitter} alt="Twitter" />
          </Link>
          <Link
            href="https://www.instagram.com/getcovercompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Insta} alt="Insta" />
          </Link>
        </div>
      </div>
      <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block s:block  py-6 pr-5 border-t border-[#B8AEDA]">
        <div className="2xl:flex xl:flex lg:flex md:flex sm:block s:block justify-between text-center">
          <div className="self-center">
            <Image src={logo} className="mx-auto w-[158px]" alt="logo" />
          </div>
          <div className="flex justify-around my-3">
            <Link
              href="https://www.linkedin.com/company/get-cover-company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Linked} className="w-14 h-14" alt="Linked" />
            </Link>
            <Link
              href="https://www.facebook.com/GetCoverCompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={FaceBook} className="w-14 h-14" alt="FaceBook" />
            </Link>
            <Link
              href="https://x.com/GetCoverCompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Twitter} className="w-14 h-14" alt="Twitter" />
            </Link>
            <Link
              href="https://www.instagram.com/getcovercompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Insta} className="w-14 h-14" alt="Insta" />
            </Link>
          </div>
        </div>
        <div className=" text-center mt-4">
          <p className="self-center text-base text-[#B8AEDA]">
            Copyright © 2023-2024 GetCover Company. All rights reserved.
          </p>
          {/* <p className="text-base text-[#B8AEDA] font-medium text-center " style={{ bottom: '20px' }}>Design, Develop & Maintain by <Link href="https://codenomad.net/" rel="noreferrer" className='!text-[#ffff] ' target="_blank">Codenomad India </Link></p> */}
        </div>
      </div>
    </>
  );
}

export default Footer;

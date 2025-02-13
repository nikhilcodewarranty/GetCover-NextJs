import { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import "tailwindcss/tailwind.css";

// -------------Component imported
import Header from "@/common/Header";
import Footer from "@/common/Footer";

// -------------Media Images imported
import banner from "@/assets/images/banner.png";
import overlay from "@/assets/images/overlay.png";
import AboutUs from "@/assets/images/aboutUs.png";
import WHY_Get from "@/assets/images/about.png";
import Hand from "@/assets/images/MobileHand.png";
import plainImage from "@/assets/images/K12 Education Plan.png";
import plainImage2 from "@/assets/images/Reseller Extended Warranty.png";
import plainImage1 from "@/assets/images/Government Programs.png";
import plainImage3 from "@/assets/images/Brokers and Distributors.png";
import right from "@/assets/images/sider/right.svg";
import MobileIcon from "@/assets/images/sider/Mobile Protection Plans.png";
import PowerIcon from "@/assets/images/sider/Power Tool Protection.png";
import LaptopIcon from "@/assets/images/sider/Laptop Protection.png";
import GamingIcon from "@/assets/images/sider/Gaming Console Protection.png";
import HeadphoneIcon from "@/assets/images/sider/Headphone Protection.png";
import SmartwatchIcon from "@/assets/images/sider/Smartwatch Protection.png";
import FitnessIcon from "@/assets/images/sider/Fitness Equipment Protection.png";
import MajorIcon from "@/assets/images/sider/Major Appliance Protection.png";
import Tablets from "@/assets/images/sider/Tablets Protection.png";
import Television from "@/assets/images/sider/Television Protection.png";
import Camera from "@/assets/images/sider/Camera Protection.png";
import Desktop from "@/assets/images/sider/Desktop Protection.png";
import PcIcon from "@/assets/images/sider/pcIcon.svg";
import Cycling from "@/assets/images/sider/Cycling Protection.png";
import DVD from "@/assets/images/sider/DVD Media Protection.png";
import Furniture from "@/assets/images/sider/Furniture Protection.png";
import House from "@/assets/images/sider/House security Protection.png";
import Lawn from "@/assets/images/sider/Lawn & Garden Protection.png";
import Mp3 from "@/assets/images/sider/Mp3 Player Protection.png";
import Personal from "@/assets/images/sider/Personal Care Protection.png";
import Theater from "@/assets/images/sider/Home Theater Protection.png";
import Toys from "@/assets/images/sider/Toys Protection.png";
import check from "@/assets/images/icons/Bullet_Point.png";
import FadeIn from "@/common/FadeIn";
import loader from "@/assets/images/loader.gif";
import CustomAccordion from "@/common/Accordion";
import Contact from "@/common/contact";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from 'next/head';
import Script from "next/script";
export default function Page() {
  const [loading, setLoading] = useState(true);
  const CarouselRef = useRef(null);
  const CarouselRef1 = useRef(null);

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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const accordionItems = [
    {
      title: "Q: Is a proof of purchase necessary for me to warranty my item?",
      content:
        "If at time of purchase we have pregistered your product, proof of purchase is not necessary, otherwise you will need to register your product.",
    },
    {
      title: "Q: What is considered proof of purchase?",
      content:
        "Proof of purchase is provided by uploading Receipts: Printed or digital receipts from a store or online retailer, Invoices, Order Confirmations: Emails or other documents confirming your order from an online retailer, Credit Card Statements: Showing the transaction amount and merchant or Purchase Orders.",
    },
    {
      title: "Q: What type of repairs are covered under the warranty?",
      content:
        "Mechanical Breakdown, Accidental damage, if purchased. Additionally, some products qualify for replacement versus repair.",
    },
    {
      title: "Q: When will my coverage start after I purchase my warranty?",
      content:
        "Coverage terms start from the date of purchase with accidental damage repairs starting from day 1 and mechanical breakdown commencing on the expiration of the manufactures warranty.",
    },
    {
      title: "Q: How long does the repair process take?",
      content:
        "Depending on the type of service provided, depot mail-in, on-site, or carry-in the average time of repair or replacement varies from 2 to 5 days from product receipt",
    },
  ];

  const router = useRouter();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 100; // Adjust based on your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (router.isReady && router.query.sectionId) {
      const scrollToTarget = () => {
        const section = document.getElementById(router.query.sectionId);
        if (section) {
          const headerOffset = 100;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      };

      // Delay execution to ensure the element is present
      setTimeout(scrollToTarget, 200);
    }
  }, [router.isReady, router.query.sectionId]);

  const protectionPlans = [
    {
      background: "bg-Mobile",
      icon: MobileIcon,
      title: "Mobile Protection",
      subtitle: "Plans",
      background1: "bg-Power",
      icon1: HeadphoneIcon,
      title1: "Headphone",
      subtitle1: "Protection",
    },
    {
      background: "bg-Laptop",
      icon: PowerIcon,
      title: "Power Tool",
      subtitle: "Protection",
      background1: "bg-Gaming",
      icon1: SmartwatchIcon,
      title1: "Smartwatch",
      subtitle1: "Protection",
    },
    {
      background: "bg-Mobile",
      icon: LaptopIcon,
      title: "Laptop",
      subtitle: "Protection",
      background1: "bg-Power",
      icon1: FitnessIcon,
      title1: "Fitness Equipment",
      subtitle1: "Protection",

    },
    {
      background: "bg-Laptop",
      icon: Camera,
      title: "Camera",
      subtitle: "Protection",
      background1: "bg-Gaming",
      icon1: Television,
      title1: "Television",
      subtitle1: "Protection",
    },
    {
      background: "bg-Mobile",
      icon: GamingIcon,
      title: "Gaming Console",
      subtitle: "Protection",
      background1: "bg-Power",
      icon1: Theater,
      title1: "Home Theater",
      subtitle1: "Protection",
    },
    {
      background: "bg-Laptop",
      icon: Tablets,
      title: "Tablet",
      subtitle: "Protection",
      background1: "bg-Gaming",
      icon1: Cycling,
      title1: "Electric Bike",
      subtitle1: "Protection",
    },
    {
      background: "bg-Mobile",
      icon: DVD,
      title: "DVD Media",
      subtitle: "Protection",
      background1: "bg-Power",
      icon1: Lawn,
      title1: "Lawn & Garden",
      subtitle1: "Protection",
    },
    {
      background: "bg-Laptop",
      icon: Mp3,
      title: "Mp3 Player",
      subtitle: "Protection",
      background1: "bg-Gaming",
      icon1: PcIcon,
      title1: "Pc",
      subtitle1: "Protection",
    },
    {
      background: "bg-Mobile",
      icon: MajorIcon,
      title: "Major Appliance",
      subtitle: "Protection",
      background1: "bg-Power",
      icon1: Television,
      title1: "Desktop",
      subtitle1: "Protection",
    },
    {
      background: "bg-Mobile",
      icon: Personal,
      title: "Personal Care",
      subtitle: "Protection",
      background1: "bg-Power",
      icon1: Furniture,
      title1: "Furniture",
      subtitle1: "Protection",
    },
    {
      background: "bg-Laptop",
      icon: House,
      title: "House security",
      subtitle: "Protection",
      background1: "bg-Gaming",
      icon1: Toys,
      title1: "Toys",
      subtitle1: "Protection",
    },

  ];

  return (
    <>
      <Head>
        <link rel="canonical" href="https://getcover.com/" />
        <title>Get Cover</title>
        <meta
          name="description"
          content="Expertise You Can
            Trust, Assurance
            You Can Rely On"
        />
        <link rel="icon" type="image/x-icon" href="/Get-Fabicon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/Get-Fabicon.png" />

      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-S97Z671TBL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S97Z671TBL');
        `}
      </Script>
      {loading ? (
        <>
          <div className="fixed top-0 left-0 right-0 h-screen bg-black">
            <div className="flex self-center h-screen">
              <Image src={loader} className="w-1/2 m-auto" alt="loading..." />
            </div>
          </div>
        </>
      ) : (
        <>
          <Header className="2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto" />
          <div id="home"></div>
          <div className="2xl:bg-full-bg xl:bg-full-bg lg:bg-tab-bg md:bg-tab-bg sm:bg-mobile-bg bg-mobile-bg bg-cover bg-no-repeat pt-[90px] 2xl:px-0 xl:px-0 lg:px-0 md:px-10 sm:px-6 s:px-6 ">
            <FadeIn className=" 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto">
              <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
                <div className="self-center 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center">
                  {/* <h1 className='4xl:text-[104px] 3xl:text-[72px] 2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[52px] sm:text-[42px] s:text-[38px] font-bold leading-none text-white'> Check Back <br /> <span className='text-[#dacdffda]'> Soon </span> </h1> */}
                  <p className="bg-gradient-to-r from-[#5B4C74] via-[#B064CA] to-[#FF9E9C] bg-clip-text text-transparent capitalize 4xl:text-[36px] 3xl:text-[36px] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[24px] s:text-[24px] font-bold mb-2">
                    Device Protection Simplified
                  </p>
                  <h1 className="4xl:text-[104px] 3xl:text-[72px] 2xl:text-[50px] xl:text-[50px] lg:text-[50px] md:text-[42px] sm:text-[38 px] s:text-[38px] font-bold leading-none text-[#4E4D69]">
                    <span className="">
                      {" "}
                      Expertise You Can{" "}
                      <br className="4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden" />{" "}
                      Trust,
                    </span>{" "}
                    <br className="2xl:hidden xl:hidden lg:hidden md:block sm:hidden s:hidden" />{" "}
                    Assurance{" "}
                    <br className="4xl:hidden 3xl:hidden 2xl:block xl:block lg:block md:hidden sm:hidden s:hidden" />{" "}
                    You Can Rely On
                  </h1>
                  {/* <p className='text-[#dacdffda] 4xl:text-[50px] 3xl:text-[38px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] md:text-[28px] sm:text-[28px] s:text-[28px] font-bold leading-none my-4'>Expertise You Can Trust, Assurance  <br className='2xl:block xl:block lg:hidden md:block sm:hidden s:hidden' />  You Can Rely On</p> */}
                  <p className="text-[#8884B1] font-bold 4xl:text-[40px] 3xl:text-[34px] 2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[22px] s:text-[18px] mb-8">
                    {" "}
                    Warranty Cover Solutions and Premium{" "}
                    <br className="4xl:hidden 3xl:hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden s:hidden" />{" "}
                    Technology{" "}
                    <br className="2xl:hidden xl:hidden lg:hidden md:block sm:hidden s:hidden" />{" "}
                    with Hassle-Free Service to <br /> Maximize Your Experience
                  </p>
                  <div className="2xl:flex xl:flex lg:flex md:hidden sm:hidden s:hidden">
                    <p
                      onClick={() => scrollToSection("contact-us")}
                      className="cursor-pointer bg-gradient 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] font-semibold text-[#fff] py-4 px-12 rounded-lg "
                    >
                      Explore More
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    className="mx-auto 2xl:w-auto xl:w-auto lg:w-auto md:w-[320px] sm:w-[320px] s:w-auto"
                    src={banner}
                    alt="Banner"
                  />
                </div>
                <div className="text-center 2xl:hidden xl:hidden lg:hidden md:flex sm:flex s:flex pb-3 justify-center">
                  <p
                    onClick={() => scrollToSection("contact-us")}
                    className="cursor-pointer bg-gradient 4xl:text-[35px] 3xl:text-[35px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] font-semibold text-[#fff] py-4 px-12 rounded-lg"
                  >
                    Explore More
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn className=" 2xl:mb-16 xl:mb-16 lg:mb-16 md:mb-12 sm:mb-8 s:mb-8 ">
              <Image
                className="object-cover w-full"
                src={overlay}
                alt="Overlay"
              />
            </FadeIn>
            <div id="about-us"></div>
            <FadeIn className=" 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-12 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8">
              <div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 s:grid-cols-6 gap-4 s:gap-2 sm:gap-2">
                <div className="2xl:col-span-7 xl:col-span-7 lg:col-span-7 flex md:col-span-7 sm:col-span-6 s:col-span-6">
                  <div className="self-center">
                    <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block s:block">
                      <h1 className="4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold 4xl:leading-[55px] 3xl:leading-[55px] 2xl:leading-[40px] xl:leading-[40px] lg:leading-[40px] md:leading-[40px] sm:leading-[40px] s:leading-[40px] text-[#4E4D69] mb-3 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center s:text-center">
                        About Us
                      </h1>
                      <p className="4xl:text-[30px] 3xl:text-[24px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] s:text-[18px] text-[#9991BE] 4xl:leading-[35px] 3xl:leading-[30px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] s:leading-[24px] mb-8 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center s:text-center">
                        Get Cover has entered the US market, building the most
                        flexible solutions for sustainable coverage across a
                        broad range of technologies. We’ve listened to our
                        customers and developed a warranty program that gives
                        you a competitive edge. Get Cover is an Insurtech
                        leader, delivering warranty coverage solutions through
                        its proprietary technology to both enterprise
                        organizations (B2B) and individual clients (B2C). <br />{" "}
                        <br /> As new technologies mature, providers must stay
                        competitive by offering improved warranties,
                        streamlining administration and operating with more
                        accurate data.
                      </p>
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto w-2/3 self-center"
                        src={AboutUs}
                        alt="Why Get"
                      />
                    </div>
                  </div>
                </div>
                <div className="2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-5 sm:col-span-6 s:col-span-6 self-center">
                  <div className="2xl:block xl:block lg:block md:block sm:hidden s:hidden">
                    <h1 className="4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold 4xl:leading-[55px] 3xl:leading-[55px] 2xl:leading-[40px] xl:leading-[40px] lg:leading-[40px] md:leading-[40px] sm:leading-[40px] s:leading-[40px] text-[#4E4D69] mb-3">
                      About Us
                    </h1>
                    <p className="4xl:text-[30px] 3xl:text-[24px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] s:text-[18px] text-[#9991BE] 4xl:leading-[35px] 3xl:leading-[30px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] s:leading-[24px] mb-8">
                      Get Cover has entered the US market, building the most
                      flexible solutions for sustainable coverage across a broad
                      range of technologies. We’ve listened to our customers and
                      developed a warranty program that gives you a competitive
                      edge. Get Cover is an Insurtech leader, delivering
                      warranty coverage solutions through its proprietary
                      technology to both enterprise organizations (B2B) and
                      individual clients (B2C). <br /> <br /> As new
                      technologies mature, providers must stay competitive by
                      offering improved warranties, streamlining administration
                      and operating with more accurate data.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <div id="technology"></div>
            <div className="bg-tech-bg bg-contain bg-center bg-no-repeat">
              <FadeIn className=" 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-12 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8">
                <div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 gap-4">
                  <div className="2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-6">
                    <div className="self-center">
                      <h1 className="4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold 4xl:leading-[55px] 3xl:leading-[55px] 2xl:leading-[40px] xl:leading-[40px] lg:leading-[40px] md:leading-[40px] sm:leading-[40px] s:leading-[40px] text-[#4E4D69] mb-3 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center">
                        Cutting-edge Solution with Innovation
                      </h1>
                      <p className="4xl:text-[30px] 3xl:text-[24px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] s:text-[18px] text-[#9991BE] 4xl:leading-[35px] 3xl:leading-[30px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] s:leading-[24px] mb-8 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center">
                        At Get Cover, we leverage cutting-edge, proprietary
                        technology to simplify warranty management for our
                        customers. Our advanced systems automate claims and
                        provide real-time data tracking, ensuring seamless
                        interactions and minimizing manual effort. Serving both
                        individual (B2C) and corporate (B2B) clients, we deliver
                        innovative, efficient warranty solutions across
                        industries.
                      </p>
                      <div className="text-left 2xl:block xl:block lg:block md:hidden sm:hidden s:hidden">
                        <button
                          onClick={() => scrollToSection("contact-us")}
                          className="bg-[#4E4D69] cursor-pointer 4xl:text-[35px] 3xl:text-[35px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] font-semibold text-[#fff] py-4 px-12 rounded-lg"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-6 sm:col-span-6  self-center pl-8">
                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 s:grid-cols-1 gap-4">
                      <div className="flex  my-4">
                        <Image
                          src={check}
                          className="w-[45px] h-[45px] self-center"
                          alt="check"
                        />
                        <p className="text-[#4E4D69] text-xl ml-3 font-semibold self-center">
                          Automated Claims <br /> Processing
                        </p>
                      </div>
                      <div className="flex my-4">
                        <Image
                          src={check}
                          className="w-[45px] h-[45px] self-center"
                          alt="check"
                        />
                        <p className="text-[#4E4D69] text-xl ml-3 font-semibold self-center">
                          Advanced Data <br /> Analytics
                        </p>
                      </div>
                      <div className="flex my-4">
                        <Image
                          src={check}
                          className="w-[45px] h-[45px] self-center"
                          alt="check"
                        />
                        <p className="text-[#4E4D69] text-xl ml-3 font-semibold self-center">
                          Real-Time Warranty
                          <br /> Tracking
                        </p>
                      </div>
                      <div className="flex  my-4">
                        <Image
                          src={check}
                          className="w-[45px] h-[45px] self-center"
                          alt="check"
                        />
                        <p className="text-[#4E4D69] text-xl ml-3 font-semibold self-center">
                          Sales <br /> Enhancement
                        </p>
                      </div>
                      <div className="text-left 2xl:hidden xl:hidden lg:hidden md:block sm:block s:block">
                        <button className="bg-[#4E4D69] 4xl:text-[35px] 3xl:text-[35px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px] font-semibold text-[#fff] py-4 px-12 rounded-lg">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn className=" 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-12 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8 ">
              <div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4">
                <div className="2xl:col-span-6 xl:col-span-6 flex lg:col-span-6 md:col-span-6 sm:col-span-6">
                  <div className="self-center">
                    <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block s:block">
                      <h1 className="4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold leading-[40px] text-[#4E4D69] mb-3 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center">
                        Why Get Device <br /> Protection Plans?
                      </h1>
                      <p className="text-lg text-[#B8AEDA] leading-[24px] mb-8 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center">
                        One major benefit of a device protection plan is saving
                        money on expensive{" "}
                        <br className="2xl:block xl:block lg:block md:hidden sm:hidden s:hidden" />{" "}
                        repairs while safeguarding against damage,
                        <br className="2xl:block xl:block lg:block md:hidden sm:hidden s:hidden" />{" "}
                        loss, and malfunctions.
                      </p>
                    </div>
                    <div className="flex">
                      <Image
                        className="mx-auto self-center"
                        src={WHY_Get}
                        alt="Why Get"
                      />
                    </div>
                  </div>
                </div>
                <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6  self-center pl-8">
                  <div className="2xl:block xl:block lg:block md:block sm:hidden s:hidden">
                    <h1 className="4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold 4xl:leading-[55px] 3xl:leading-[55px] 2xl:leading-[40px] xl:leading-[40px] lg:leading-[40px] md:leading-[40px] sm:leading-[40px] s:leading-[40px] text-[#4E4D69] mb-3">
                      Why Get Device <br /> Protection Plans?
                    </h1>
                    <p className="4xl:text-[30px] 3xl:text-[24px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] s:text-[18px] text-[#9991BE] 4xl:leading-[35px] 3xl:leading-[30px] 2xl:leading-[24px] xl:leading-[24px] lg:leading-[24px] md:leading-[24px] sm:leading-[24px] s:leading-[24px] mb-8">
                      One major benefit of a device protection plan is saving
                      money on expensive{" "}
                      <br className="2xl:block xl:block lg:block md:hidden sm:hidden s:hidden" />{" "}
                      repairs while safeguarding against damage,{" "}
                      <br className="2xl:block xl:block lg:block md:hidden sm:hidden s:hidden" />{" "}
                      loss, and malfunctions.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h1 className="text-[#4E4D69] 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[21px] xl:text-[21px] lg:text-[21px] md:text-[21px] sm:text-[21px] s:text-[21px] font-bold">
                      Repair Plans
                    </h1>
                    <p className="gradient-text1  to-[#9991BE] bg-clip-text text-transparent 4xl:text-[24px] 3xl:text-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] mb-3">
                      Efficient, effective solutions for repairing your
                      products, ensuring they work like new.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h1 className="text-[#4E4D69] 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[21px] xl:text-[21px] lg:text-[21px] md:text-[21px] sm:text-[21px] s:text-[21px] font-bold">
                      Replacement Plans
                    </h1>
                    <p className="gradient-text1  to-[#9991BE] bg-clip-text text-transparent  4xl:text-[24px] 3xl:text-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] mb-3">
                      Get Cover offers warranty programs that replace products
                      instead of repairing them.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h1 className="text-[#4E4D69] 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[21px] xl:text-[21px] lg:text-[21px] md:text-[21px] sm:text-[21px] s:text-[21px] font-bold">
                      Accidental Damage Plans
                    </h1>
                    <p className="gradient-text1  to-[#9991BE] bg-clip-text text-transparent 4xl:text-[24px] 3xl:text-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px] mb-3">
                      Finding skilled and experienced technicians <br /> for
                      appliance repairs can be difficult.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <div id="programs"></div>
            <FadeIn className=" 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-16 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8">
              <div className="flex justify-between">
                <p className="4xl:text-[50px] 3xl:text-[50px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[35px] s:text-[35px] font-bold leading-none text-[#4E4D69] ">
                  Essential Gadgets <br /> Protection Plans
                </p>
                <div className="self-center flex 2xl:block xl:block lg:block md:hidden sm:hidden s:hidden">
                  <button
                    className="self-center"
                    onClick={() => CarouselRef.current.previous()}
                  >
                    <Image
                      src={right}
                      className="w-10 h-10 mr-4 rotate-180  mx-auto opacity-50 hover:opacity-100"
                      alt="right"
                    />
                  </button>
                  <button
                    className="self-center"
                    onClick={() => CarouselRef.current.next()}
                  >
                    <Image
                      src={right}
                      className="w-10 h-10 mr-4 opacity-50 mx-auto hover:opacity-100"
                      alt="right"
                    />
                  </button>
                </div>
              </div>
              <div className="my-10">
                <div className="2xl:block xl:block lg:block md:hidden sm:hidden s:hidden">
                  <Carousel
                    responsive={responsive}
                    arrows={false}
                    infinite={true}
                    renderDotsOutside={true}
                    ref={CarouselRef}
                  >
                    {protectionPlans.map((plan, index) => (
                      <div className="mx-3" key={index}>
                        <div className={`${plan.background} bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]`}>
                          <div className="flex pl-4">
                            <div className="self-center w-[30%]">
                              <Image className="mx-auto" src={plan.icon} alt={plan.title} />
                            </div>
                            <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                              {plan.title} <br /> {plan.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className={`${plan.background1} bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]`}>
                          <div className="flex pl-4">
                            <div className="self-center w-[30%]">
                              <Image className="mx-auto" src={plan.icon1} alt={plan.title1} />
                            </div>
                            <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                              {plan.title1} <br /> {plan.subtitle1}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block s:block">
                  <Carousel
                    responsive={responsive}
                    arrows={false}
                    infinite={true}
                    renderDotsOutside={true}
                    ref={CarouselRef1}
                  >
                    <div className="mx-3">
                      <div className="bg-Mobile bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={MobileIcon}
                              alt="mobile"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Mobile Protection <br /> Plans
                          </p>
                        </div>
                      </div>
                      <div className="bg-Power bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={HeadphoneIcon}
                              alt="Headphone"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Headphone <br /> Protection
                          </p>
                        </div>
                      </div>

                      <div className="bg-Laptop bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={PowerIcon}
                              alt="Power"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Power Tool <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Gaming bg-cover bg-no-repeat px-4 py-7 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={SmartwatchIcon}
                              alt="Smartwatch"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Smartwatch <br /> Protection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-3">
                      <div className="bg-Mobile bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={LaptopIcon}
                              alt="Laptop"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Laptop <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Power bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={FitnessIcon}
                              alt="Fitness"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Fitness Equipment <br /> Protection
                          </p>
                        </div>
                      </div>

                      <div className="bg-Laptop bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={GamingIcon}
                              alt="Gaming"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Gaming Console <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Gaming bg-cover bg-no-repeat px-4 py-7 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={MajorIcon}
                              alt="Major"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Major Appliance <br /> Protection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-3">
                      <div className="bg-Mobile bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={Tablets}
                              alt="Gaming"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Tablets <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Power bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={Television}
                              alt="Major"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Television <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Laptop bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={Camera}
                              alt="Gaming"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Camera <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Gaming bg-cover bg-no-repeat px-4 py-7 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={Desktop}
                              alt="Major"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Desktop <br /> Protection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-3">
                      <div className="bg-Mobile bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={Furniture}
                              alt="Gaming"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Furniture <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Power bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={Cycling}
                              alt="Major"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Cycling <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Laptop bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image className="mx-auto" src={DVD} alt="Gaming" />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            DVD Media <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Gaming bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image className="mx-auto" src={House} alt="Gaming" />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            House security <br /> Protection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-3">
                      <div className="bg-Mobile bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image className="mx-auto" src={Lawn} alt="Gaming" />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Lawn & Garden <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Power bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image className="mx-auto" src={Mp3} alt="Major" />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Mp3 Player <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Laptop bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={PcIcon}
                              alt="Gaming"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Pc <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Gaming bg-cover bg-no-repeat px-4 py-7 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={Personal}
                              alt="Major"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[21px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Personal Care <br /> Protection
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mx-3">
                      <div className="bg-Mobile bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={Theater}
                              alt="Laptop"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Home Theater
                            <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Power bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image className="mx-auto" src={Toys} alt="Fitness" />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Toys <br /> Protection
                          </p>
                        </div>
                      </div>

                      <div className="bg-Laptop bg-cover bg-no-repeat px-4 py-7 mb-4 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={GamingIcon}
                              alt="Gaming"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Gaming Console <br /> Protection
                          </p>
                        </div>
                      </div>
                      <div className="bg-Gaming bg-cover bg-no-repeat px-4 py-7 rounded-[20px]">
                        <div className="flex pl-4">
                          <div className="self-center w-[30%]">
                            <Image
                              className="mx-auto"
                              src={MajorIcon}
                              alt="Major"
                            />
                          </div>
                          <p className="text-[#4E4D69] 4xl:text-[26px] 3xl:text-[26px] 2xl:text-[16px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-[15px] s:text-[15px]">
                            Major Appliance <br /> Protection
                          </p>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </FadeIn>

            <div id="enterprise"></div>
            <div className="2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-16 xl:py-16 lg:py-16 md:py-12 sm:py-8 s:py-8">
              <FadeIn className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="2xl:col-span-3 xl:col-span-3 lg:col-span-2 md:col-span-2 sm:col-span-1">
                  <h1 className=" 4xl:text-[45px] 3xl:text-[45px] 2xl:text-[35px] xl:text-[35px] lg:text-[35px] md:text-[35px] sm:text-[30px] s:text-[30px] font-bold leading-none my-4 text-[#4E4D69] text-center">
                    Enterprise
                  </h1>
                  <p className="text-[#B8AEDA] 4xl:text-[30px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] leading-1 text-center">
                    Enterprise programs are available for the following sectors:
                  </p>
                </div>
              </FadeIn>
              <FadeIn className="grid 2xl:grid-cols-4 mt-16 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 s:grid-cols-1 gap-4">
                <div className="col-span-1 mb-4">
                  <div className="pr-5">
                    <Image className="mb-3" src={plainImage} alt="plainImage" />
                    <h1 className="4xl:text-[30px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] font-semibold text-[#4E4D69] leading-tight capitalize">
                      Education
                    </h1>
                    <p className="text-[#9991BE] mb-3 capitalize 4xl:text-[25px] 3xl:text-[25px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px]">
                      Comprehensive warranty solutions for educational
                      institutions, protecting devices and equipment essential
                      for learning.
                    </p>
                    <div className="flex">
                      <p
                        onClick={() => scrollToSection("contact-us")}
                        className="text-[#4E4D69] cursor-pointer 4xl:text-[20px] 3xl:text-[20px] 2xl:text-[11px] xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] s:text-[11px] border border-[#AB9CC0] py-2 px-5  rounded-lg"
                      >
                        {" "}
                        Get Started Today
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mb-4">
                  <div className="pr-5">
                    <Image className="mb-3" src={plainImage2} alt="plainImage" />
                    <h1 className="4xl:text-[30px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] font-semibold text-[#4E4D69] leading-tight capitalize">
                      Corporate Accounts
                    </h1>
                    <p className="text-[#9991BE] mb-3 capitalize 4xl:text-[25px] 3xl:text-[25px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px]">
                      Efficient warranty <br /> solutions for businesses,
                      safeguarding assets and reducing operational disruptions.
                    </p>
                    <div className="flex">
                      <p
                        onClick={() => scrollToSection("contact-us")}
                        className="text-[#4E4D69] cursor-pointer 4xl:text-[20px] 3xl:text-[20px] 2xl:text-[11px] xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] s:text-[11px] border border-[#AB9CC0] py-2 px-5  rounded-lg"
                      >
                        {" "}
                        Get Started Today
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mb-4">
                  <div className="pr-5">
                    <Image className="mb-3" src={plainImage1} alt="plainImage" />
                    <h1 className="4xl:text-[30px] 3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] font-semibold text-[#4E4D69] capitalize leading-tight">
                      Government Programs
                    </h1>
                    <p className="text-[#9991BE] capitalize  4xl:text-[25px] 3xl:text-[25px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px]">
                      Specialized warranty <br /> solutions for government
                      organizations, ensuring compliance and operational
                      efficiency.
                    </p>
                    <div className="flex ">
                      <p
                        onClick={() => scrollToSection("contact-us")}
                        className="text-[#4E4D69] cursor-pointer 4xl:text-[20px] 3xl:text-[20px] 2xl:text-[11px] xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] s:text-[11px] border border-[#AB9CC0] py-2 px-5 mt-3 rounded-lg"
                      >
                        {" "}
                        Get Started Today
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 mb-4">
                  <div className=" h-full">
                    <Image className="mb-3" src={plainImage3} alt="plainImage" />
                    <h1 className="4xl:text-[30px]  3xl:text-[30px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] s:text-[20px] font-semibold text-[#4E4D69] leading-tight capitalize">
                      Brokers and Distributors
                    </h1>
                    <p className="text-[#9991BE] mb-3 capitalize 4xl:text-[25px] 3xl:text-[25px] 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] s:text-[16px]">
                      Collaborative warranty <br /> solutions for brokers and
                      distributors, enabling  seamless service and  support.
                    </p>
                    <div className="flex ">
                      <div
                        onClick={() => scrollToSection("contact-us")}
                        className="text-[#4E4D69] cursor-pointer 4xl:text-[20px] mt-6 w-auto mr-auto 3xl:text-[20px] 2xl:text-[11px] xl:text-[11px] lg:text-[11px] md:text-[11px] sm:text-[11px] s:text-[11px] border border-[#AB9CC0] py-2 px-5 rounded-lg"
                      >
                        {" "}
                        Get Started Today
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div id="app"></div>
            <FadeIn className=" 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto mt-20 2xl:py-14 xl:py-14 lg:py-14 md:py-10 sm:py-8 s:py-8">
              <div className="bg-soon-bg bg-cover bg-no-repeat rounded-[16px] ">
                <div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-6 gap-4 2xl:px-12 xl:px-12 lg:px-12 md:px-10 sm:px-8 s:px-8">
                  <div className="2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-6  self-center pt-8">
                    <p className="4xl:text-[140px] 3xl:text-[130px] 2xl:text-[90px] xl:text-[85px] lg:text-[45px] md:text-[32px] sm:text-[55px] s:text-[55px] leading-[1] text-[#4E4D69] pl-14 font-bold">
                      Coming <br /> Soon!
                    </p>
                    <p className="pl-14 text-[#9991BE] !leading-normal 4xl:text-[30px] 3xl:text-[30px] 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base s:text-base">
                      Check Back Soon to download <br />
                      <span className="text-[#9991BE]">
                        {" "}
                        The Get Cover Mobile APP.{" "}
                      </span>{" "}
                    </p>
                  </div>
                  <div className="2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-6 sm:col-span-6 ">
                    <Image
                      src={Hand}
                      className="2xl:-mt-24 xl:-mt-24 lg:-mt-24 md:-mt-16 sm:-mt-0 s:mt-0 mx-auto"
                      alt="mobile Hand"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
            <div id="faq"></div>
            <FadeIn className=" 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto 2xl:py-14 xl:py-14 lg:py-14 md:py-10 sm:py-8 s:py-8">
              <div className="lg:w-[80%] md:w-[90%] sm:w-[90%] s:w-[90%] mx-auto">
                <p className="capitalize font-bold text-[#4E4D69] text-[30px] text-center mb-5">
                  frequently asked questions
                </p>
                {/* <p className='text-[#B8AEDA] text-center mb-5'>Reference site about Lorem Ipsum, giving information on its origins.</p> */}
                <CustomAccordion items={accordionItems} />
              </div>
            </FadeIn>
            <div id="contact-us"></div>
            <Contact />
            <div className=" 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto">
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
}

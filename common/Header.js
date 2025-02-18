import React, { useEffect, useState } from 'react';
import logo from '@/assets/images/New_logo.png';
import menu from '@/assets/images/icons/menu.svg';
import cross from '@/assets/images/icons/cross.svg';
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from "next/image";
import useScrollToSection from './scroll';
const Header = ({ className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const openDiv = () => {
        setIsVisible(!isVisible);
    };

    const redirectToSection = useScrollToSection();

    return (
        <div className={`fixed top-0 z-10 left-0 right-0 w-full bg-[#ffffff08] backdrop-blur-lg 2xl:px-0 xl:px-0 lg:px-0 md:px-16 sm:px-8 s:px-8`}>
            <div className={`${className}`}>
                <div className='flex justify-between py-6  2xl:pr-5 xl:pr-5 lg:pr-5 md:pr-5 sm:pr-0 s:pr-0'>
                    <div className='self-center'>
                        <Link href='/'>
                            <Image src={logo} className="w-[158px]" alt='logo' />
                        </Link>
                    </div>
                    <div className='self-center 2xl:hidden xl:hidden lg:hidden md:block sm:block s:block'>
                        <Image src={menu} onClick={openDiv} alt='menu' />
                    </div>
                    <div className='justify-between text-[#4E4D69] self-center 2xl:flex xl:flex lg:flex md:hidden sm:hidden s:hidden'>
                        <div onClick={() => redirectToSection('home')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'> Home</div>
                        <div onClick={() => redirectToSection('about-us')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'> About Us</div>
                        <div onClick={() => redirectToSection('technology')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>Technology</div>
                        <div onClick={() => redirectToSection('programs')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>Programs</div>
                        <div onClick={() => redirectToSection('enterprise')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>Enterprise</div>
                        <div onClick={() => redirectToSection('app')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>Mobile APP</div>
                        <div onClick={() => redirectToSection('faq')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>FAQ</div>
                        <div onClick={() => redirectToSection('contact-us')} className='ml-5 self-center 4xl:text-[22px] 3xl:text-[19px] 2xl:text-[16px] xl:text-[16px] lg:text-[13px] md:text-[10px] sm:text-[10px] s:text-[16px] cursor-pointer'>Contact Us</div>
                        <Link href="https://app.getcover.com/" target='_blank' className='text-[#ffff] 4xl:text-[20px] 3xl:text-[19px] 2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[12px] s:text-[12px] font-semibold bg-[#4E4D69] rounded-lg p-3 ml-5'>LOGIN</Link>
                    </div>

                    {isVisible && (
                        <div className='fixed top-0 left-0 w-full h-screen bg-[#f2e9f2] backdrop-blur-2xl'>
                            <Image src={cross} onClick={openDiv} className='ml-5 mt-5' alt='cross' />
                            <div className='mt-8  w-full  mx-auto'>
                                <Link href='/'>
                                    <Image src={logo} className="w-[158px] mx-auto" alt='logo' />
                                </Link>
                                <p className='text-center my-5 text-[#4E4D69] cursor-pointer' onClick={() => redirectToSection('home')}>Home</p>
                                <p className='text-center my-5 text-[#4E4D69] cursor-pointer' onClick={() => redirectToSection('about-us')}>About Us</p>
                                <p className='text-center mb-5 text-[#4E4D69] cursor-pointer' onClick={() => redirectToSection('technology')}> Technology</p>
                                <p className='text-center my-5 text-[#4E4D69] cursor-pointer' onClick={() => redirectToSection('programs')}>Programs</p>
                                <p className='text-center mb-5 text-[#4E4D69] cursor-pointer' onClick={() => redirectToSection('enterprise')}> Enterprise</p>
                                <p className='text-center mb-5 text-[#4E4D69] cursor-pointer' onClick={() => redirectToSection('app')}>APP</p>
                                <p className='text-center mb-5 text-[#4E4D69] cursor-pointer' onClick={() => redirectToSection('faq')}>FAQ</p>
                                <p className='text-center mb-5 text-[#4E4D69] cursor-pointer' onClick={() => redirectToSection('contact-us')}>Contact Us</p>
                                <p className='text-center my-5'><Link href="https://app.getcover.com/" target='_blank' className='text-[#ffff] text-sm font-semibold bg-[#4E4D69] rounded-lg p-3'>LOGIN</Link></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;

import React, { useEffect, useState } from 'react'
import Header from '@/common/Header'
import overlay from '@/assets/images/overlay.png';
import Footer from '@/common/Footer';
import loader from '@/assets/images/loader.gif';
import Link from "next/link";
import Image from "next/image";
function Policy() {
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
            {loading ?
                <>
                    <div className='fixed top-0 left-0 right-0 h-screen bg-black'>
                        <div className='flex self-center h-screen'>
                            <Image src={loader} className='w-1/2 m-auto' alt='loading' />
                        </div>
                    </div>
                </> :
                <div>
                    <Header className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto' />
                    <div className='2xl:bg-full-bg xl:bg-full-bg lg:bg-tab-bg md:bg-tab-bg sm:bg-mobile-bg bg-mobile-bg bg-cover bg-no-repeat pt-[90px] 2xl:px-0 xl:px-0 lg:px-0 md:px-10 sm:px-6 s:px-6 '>
                        <div className='pt-16 pb-3'>
                            <h1 className='4xl:text-[104px] 3xl:text-[72px] 2xl:text-[50px] xl:text-[50px] lg:text-[50px] md:text-[42px] sm:text-[38 px] s:text-[38px] font-bold leading-none text-center text-[#4E4D69]'>Privacy Policy</h1>
                        </div>
                        <div className=' 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-8 s:mb-8 ' >
                            <Image className='object-cover w-full' src={overlay} alt='Overlay' />
                            <div className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto relative'>
                                <p className='text-[#4E4D69] font-[600] text-right mt-2'><span className='text-[#9991BE]'> Effective Date: </span> September 1, 2024</p>
                            </div>
                        </div>

                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto mt-3'>
                            <p className='text-[#4E4D69] text-3xl font-semibold mb-4 mt-16'>1) Introduction</p>
                            <p className='text-[#9991BE]'>Get Cover LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our
                                customers and partners. This Privacy Policy explains how we collect, use, disclose, and
                                protect your personal information when you interact with us in our role as an insurtech
                                warranty administrator.</p>
                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto mt-3'>
                            <p className='text-[#4E4D69] text-3xl font-semibold my-4'>2)  Information We Collect</p>
                            <p className='text-[#9991BE]'>We collect various types of information, including:
                                <br />
                                <br />
                                - Personal Information: Name, contact information (email, phone number, address), and
                                other identifying details.
                                <br />
                                <br />
                                - Transaction Information: Details of purchases, warranty claims, and related
                                transactions.
                                <br />
                                <br />
                                - Technical Information: IP address, browser type, operating system, and other technical
                                data from your interactions with our website and services.
                                <br />
                                <br />
                                - Usage Information: Data on how you use our website and services, including your
                                preferences and behaviors.</p>
                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto mt-3'>
                            <p className='text-[#4E4D69] text-3xl font-semibold my-4'>3)   How We Use Your Information</p>
                            <p className='text-[#9991BE]'>We use your information for the following purposes:
                                <br />
                                <br />
                                - To Administer Warranties: Process warranty claims, manage warranty records, and
                                provide customer support.
                                <br />
                                <br />
                                - To Communicate: Send updates, notifications, and promotional materials related to our
                                services.
                                <br />
                                <br />
                                - To Improve Our Services: Analyze data to enhance our services, understand user
                                needs, and optimize our website.
                                <br />
                                <br />
                                - To Comply with Legal Obligations: Fulfill legal and regulatory requirements, respond to
                                legal requests, and protect our rights.</p>
                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto mt-3'>
                            <p className='text-[#4E4D69] text-3xl font-semibold my-4'>4)  How We Share Your Information</p>
                            <p className='text-[#9991BE] mb-3'>We may share your information with:
                                <br />
                                <br />
                                - Third-Party Service Providers**: Companies that perform services on our behalf, such
                                as data processing and customer support.
                                <br />
                                <br />
                                - Business Partners: Entities involved in providing or supporting warranty services.
                                <br />
                                <br />
                                - Legal Authorities: When required by law or to protect our legal rights and interests.
                                <br />
                                <br />
                                - Business Transfers: In the event of a merger, acquisition, or sale of assets.</p>
                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto mt-3'>
                            <p className='text-[#4E4D69] text-3xl font-semibold my-4'>5)  Data Security</p>
                            <p className='text-[#9991BE] mb-3'>We implement reasonable security measures to protect your personal information from
                                unauthorized access, use, or disclosure. However, no method of transmission over the
                                internet or electronic storage is 100% secure, and we cannot guarantee absolute
                                security.</p>
                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto mt-3'>
                            <p className='text-[#4E4D69] text-3xl font-semibold my-4'>6)  Your Rights</p>
                            <p className='text-[#9991BE] mb-3'>You have the following rights regarding your personal information:
                                <br />
                                <br />
                                - Access: Request access to the personal information we hold about you.
                                <br />
                                <br />
                                - Correction: Request correction of inaccurate or incomplete information.
                                <br />
                                <br />
                                - Deletion: Request deletion of your personal information, subject to legal and
                                contractual obligations.
                                <br />
                                <br />
                                - Opt-Out: Opt-out of receiving marketing communications.</p>
                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto mt-3'>
                            <p className='text-[#4E4D69] text-3xl font-semibold my-4'>7)  Cookies and Tracking Technologies</p>
                            <p className='text-[#9991BE] mb-3'>We use cookies and similar tracking technologies to collect information about your
                                browsing activities and enhance your experience on our website. You can manage your
                                cookie preferences through your browser settings.</p>
                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto mt-3'>
                            <p className='text-[#4E4D69] text-3xl font-semibold my-4'>8)  Changes to This Privacy Policy</p>
                            <p className='text-[#9991BE] mb-3'>We may update this Privacy Policy from time to time. Any changes will be posted on our
                                website with an updated effective date. Your continued use of our services constitutes
                                acceptance of the revised policy.</p>
                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto mt-3'>
                            <p className='text-[#4E4D69] text-3xl font-semibold my-4'>9)  Contact Us</p>
                            <p className='text-[#9991BE] mb-3'>If you have any questions or concerns about this Privacy Policy or our data practices,
                                please contact us at:
                                <br />
                                <br />
                                By Mail : Get Cover LLC - Attn: Customer Services, 9701 Wilshire Blvd, Suite 930
                                Beverly Hills, California 90212.
                                <br />
                                <br />
                                By E-mail: to <Link href='mailto:customerservices@getcover.com' className='underline text-[#4E4D69]'>customerservices@getcover.com</Link></p>
                        </div>
                        <div className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto'>
                            <Footer />
                        </div>
                    </div>
                </div >}
        </>
    )
}

export default Policy

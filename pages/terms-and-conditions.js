import React, { useEffect, useState } from 'react'
import Header from '@/common/Header'
import overlay from '@/assets/images/overlay.png';
import Footer from '@/common/Footer';
import loader from '@/assets/images/loader.gif';
import Image from "next/image";
function TAndC() {
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
                            <h1 className='4xl:text-[104px] 3xl:text-[72px] 2xl:text-[50px] xl:text-[50px] lg:text-[50px] md:text-[42px] sm:text-[38 px] s:text-[38px] font-bold leading-none text-center text-[#4E4D69]'>Terms and Conditions</h1>
                        </div>
                        <div className=' 2xl:mb-12 xl:mb-12 lg:mb-12 md:mb-12 sm:mb-8 s:mb-8 ' >
                            <Image className='object-cover w-full' src={overlay} alt='Overlay' />
                        </div>

                        <div className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto  2xl:py-12 xl:py-12 lg:py-12 md:py-12 sm:py-8 s:py-8'>

                            <p className='text-[#9991BE]'>These Terms and Conditions constitute a legally binding agreement made between you, whether personally
                                or on behalf of an entity (“you”) and Get Cover LLC (“we,” “us” or “our”), concerning your access to and use
                                of the getcover.com website as well as any other media form, media channel, mobile website or mobile
                                application related, linked, or otherwise connected thereto (collectively, the “Site”).
                                <br />
                                <br />
                                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these
                                Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly
                                prohibited from using the Site and you must discontinue use immediately.
                                <br />
                                <br />
                                Supplemental terms and conditions or documents that may be posted on the Site from time to time are
                                hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make
                                changes or modifications to these Terms and Conditions at any time and for any reason.
                                <br />
                                <br />
                                We will alert you about any changes by updating the “Last updated” date of these Terms and Conditions,
                                and you waive any right to receive specific notice of each such change.
                                <br />
                                <br />
                                It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. You
                                will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in
                                any revised Terms and Conditions by your continued use of the Site after the date such revised Terms and
                                Conditions are posted.
                                <br />
                                <br />
                                The information provided on the Site is not intended for distribution to or use by any person or entity in any
                                jurisdiction or country where such distribution or use would be contrary to law or regulation or which would
                                subject us to any registration requirement within such jurisdiction or country.
                                <br />
                                <br />
                                Accordingly, those persons who choose to access the Site from other locations do so on their own initiative
                                and are solely responsible for compliance with local laws, if and to the extent local laws are applicable</p>

                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto'>

                            <p className='text-[#4E4D69] text-2xl font-semibold mb-4 mt-16'>1)  Limited Liability Clause</p>
                            <p className='text-[#9991BE]'>In no event will we or our directors, employees, or agents be liable
                                to you or any third party for any direct, indirect, consequential,
                                exemplary, incidental, special, or punitive damages, including lost
                                profit, lost revenue, loss of data, or other damages arising from
                                your use of the site, even if we have been advised of the possibility
                                of such damages</p>
                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto'>
                            <p className='text-[#4E4D69] text-2xl font-semibold my-4'>2)  Intellectual Property Clause</p>
                            <p className='text-[#9991BE]'>Unless otherwise indicated, the Site is our proprietary property and all source code,
                                databases, functionality, software, website designs, audio, video, text, photographs, and
                                graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos
                                contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are
                                protected by copyright and trademark laws and various other intellectual property rights and
                                unfair competition laws of the United States, foreign jurisdictions, and international
                                conventions.
                                <br />
                                <br />
                                The Content and the Marks are provided on the Site “AS IS” for your information and personal
                                use only. Except as expressly provided in these Terms and Conditions, no part of the Site and
                                no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted,
                                publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise
                                exploited for any commercial purpose whatsoever, without our express prior written
                                permission.
                                <br />
                                <br />
                                Provided that you are eligible to use the Site, you are granted a limited license to access and
                                use the Site and to download or print a copy of any portion of the Content to which you have
                                properly gained access solely for your
                                personal, non-commercial use. We reserve all rights
                                not expressly granted to you in and to the Site, the Content and the Marks.</p>
                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto'>
                            <p className='text-[#4E4D69] text-2xl font-semibold my-4'>3)  Governing Law Clause</p>
                            <p className='text-[#9991BE]'>These Terms and Conditions and your use of the Site are
                                governed by and construed in accordance with the laws of the
                                State of California applicable to agreements made and to be
                                entirely performed within the State
                                Commonwealth of California,
                                without regard to its conflict of law principles.</p>
                        </div>
                        <div className='2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto'>
                            <p className='text-[#4E4D69] text-2xl font-semibold my-4'>4)  Termination/Access of Account</p>
                            <p className='text-[#9991BE] mb-3'>These Terms and Conditions shall remain in full force and effect while you use the Site.</p>
                            <p className='text-[#9991BE] mb-3'>WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS AND CONDITIONS,
                                WE RESERVE THE RIGHT
                                TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE
                                OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING
                                CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
                                REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
                                REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS
                                AND CONDITIONS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
                                TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE [YOUR
                                ACCOUNT AND] ANY CONTENT
                                OR INFORMATION THAT YOU POSTED AT ANY
                                TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>
                            <p className='text-[#9991BE]'>If we terminate or suspend your account for any reason, you are prohibited from registering
                                and creating a new account under your name, a fake or borrowed name, or the name of
                                any third party, even if you may be acting on behalf of the third party.

                                In addition to terminating or suspending your account, we reserve the right to take
                                appropriate legal action, including without limitation pursuing civil, criminal, and injunctive
                                redress.</p>
                        </div>
                        <div className=' 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto'>
                            <Footer />
                        </div>
                    </div>
                </div >}
        </>
    )
}

export default TAndC

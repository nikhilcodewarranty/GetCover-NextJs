import React, { useState } from "react";
import Input from "./Input";
import Select from "./select";
import FadeIn from "./FadeIn";
import Email from "@/assets/images/sider/email.svg";
import Phone from "@/assets/images/sider/phone.svg";
import Address from "@/assets/images/sider/address.svg";
import Link from "next/link";
import Image from "next/image";
function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [text, setText] = useState("");
  const [emailError, setEmailError] = useState("");
  const [category, setCategory] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  // Dummy data for Select options (adjust as needed)
  const [categorys, setCategorys] = useState([
    // Initialize options array
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Education", label: "Education" },
    { value: "Corporate Accounts", label: "Corporate Accounts" },
    { value: "Government Programs", label: "Government Programs" },
    { value: "Brokers and Distributors", label: "Brokers and Distributors" },
  ]);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailValue)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handlePhoneChange = (e) => {
    // Extract digits from the input
    let digitsOnly = e.target.value.replace(/\D/g, "");

    // Limit to 10 digits
    if (digitsOnly.length > 10) {
      digitsOnly = digitsOnly.slice(0, 10);
    }

    // Set the raw input value
    setPhoneNumber(e.target.value.slice(0, 10));

    // Validate the phone number only if it contains 10 digits
    if (digitsOnly.length !== 10) {
      setPhoneError("Phone number must be 10 digits.");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailError || phoneError) {
      setShow(true);
      setText("Please fix the validation errors before submitting.");
      setTimeout(() => {
        setText("");
      }, 4000);
      return;
    }

    try {
      // Fetch the IP address
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      const ipAddress = ipData.ip;

      // Get the site URL
      const siteURL = window.location.href;

      // Get the location
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          // Include location, site URL, and IP address in the payload
          const payload = {
            firstName,
            lastName,
            email,
            phoneNumber,
            description,
            category,
            siteURL,
            ipAddress,
          };

          // Make the API request
          const response = await fetch(
            "https://api.getcover.com/api-v1/user/contact-us",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            }
          );

          if (!response.ok) {
            const errorDetails = await response.json();
            setShow(true);
            setText(errorDetails.message);
            setTimeout(() => {
              setText("");
            }, 10000);
            return;
          }

          setShow(true);
          setText("Message sent successfully!");
          setTimeout(() => {
            setText("");
          }, 10000);

          // Clear form fields
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setDescription("");
          setCategory("");
        },
        (error) => {
          console.error("Error getting location:", error);
          setShow(true);
          setText("Unable to retrieve location.");
          setTimeout(() => {
            setText("");
          }, 4000);
        }
      );
    } catch (error) {
      console.error("Error occurred while sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div>
        <FadeIn className=" 2xl:w-large xl:w-1366 lg:w-tablet md:w-full sm:w-full mx-auto 2xl:py-14 xl:py-14 lg:py-14 md:py-10 sm:py-8 s:py-8">
          <div className="bg-Contact bg-cover bg-no-repeat rounded-[16px]">
            <div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 s:grid-cols-6 gap-4 2xl:p-12 xl:p-12 lg:p-12 md:p-10 sm:p-8 s:p-8">
              <div className="2xl:col-span-5 xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-6 s:col-span-6 self-center px-6">
                <p className="2xl:text-[50px] xl:text-[45px] lg:text-[45px] md:text-[32px] sm:text-[28px] s:text-[28px] text-[#4E4D69] 2xl:leading-[55px] xl:leading-[50px] lg:leading-[50px] md:leading-[37px] sm:leading-[32px] s:leading-[32px]  font-bold 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center s:text-center">
                  Are you ready to Get Covered? Contact Us
                </p>
                <div className="my-4">
                  <div className="  2xl:flex xl:flex lg:flex md:flex sm:block s:block text-center">
                    <Image
                      src={Address}
                      className="w-[30px] h-[30px] 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 sm:mx-auto s:mx-auto"
                      alt="Address"
                    />
                    <div className=" 2xl:pl-5 xl:pl-5 lg:pl-5 md:pl-5 sm:pl-0 s:pl-0  2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center s:text-center">
                      <p className="text-[#4E4D69] font-semibold">Address</p>
                      <p className="capitalize text-[#9991BE]">
                        9701 Wilshire Blvd., Suite 930 <br /> Beverly Hills, CA
                        90212
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="2xl:flex xl:flex lg:flex md:flex sm:block s:block text-center">
                    <Image
                      src={Phone}
                      className="w-[30px] h-[30px] 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 sm:mx-auto s:mx-auto"
                      alt="Phone"
                    />
                    <div className=" 2xl:pl-5 xl:pl-5 lg:pl-5 md:pl-5 sm:pl-0 s:pl-0  2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center s:text-center">
                      <p className="text-[#4E4D69] font-semibold">Phone</p>
                      <p className=" capitalize text-[#9991BE]">
                        {" "}
                        <Link href="tel:3107730033"> 310-773-0033 </Link> <br />{" "}
                        <Link href="tel:8882095598">888-209-5598</Link>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="2xl:flex xl:flex lg:flex md:flex sm:block s:block text-center">
                    <Image
                      src={Email}
                      className="w-[30px] h-[23px] 2xl:mx-0 xl:mx-0 lg:mx-0 md:mx-0 sm:mx-auto s:mx-auto"
                      alt="Email"
                    />
                    <div className=" 2xl:pl-5 xl:pl-5 lg:pl-5 md:pl-5 sm:pl-0 s:pl-0  2xl:text-left xl:text-left lg:text-left md:text-left sm:text-center s:text-center">
                      <p className="text-[#4E4D69] font-semibold">Email</p>
                      <p className="text-[#9991BE] break-words underline">
                        <Link href="mailto:info@getcover.com" className="undeline">
                          info@getcover.com{" "}
                        </Link>{" "}
                        <br />
                        <Link
                          href="mailto:customerservices@getcover.com"
                          className="undeline break-words w-full"
                        >
                          {" "}
                          customerservices@getcover.com{" "}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:col-span-7 self-center xl:col-span-7 lg:col-span-7 md:col-span-6 sm:col-span-6 s:col-span-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 s:col-span-2">
                      <Input
                        name="firstName"
                        value={firstName}
                        required
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 s:col-span-2">
                      <Input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 s:col-span-2">
                      <Input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => handleEmailChange(e)}
                      />
                      {emailError && (
                        <div className="text-sm text-red-600 ">
                          {emailError}
                        </div>
                      )}
                    </div>
                    <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 s:col-span-2">
                      <Input
                        type="number"
                        name="phoneNumber"
                        required
                        minLength={9}
                        maxLength={10}
                        placeholder="Phone #"
                        value={phoneNumber}
                        onChange={(e) => handlePhoneChange(e)}
                      />
                      {phoneError && (
                        <div className="text-sm text-red-600">{phoneError}</div>
                      )}
                    </div>
                    <div className="col-span-2">
                      <Select
                        name="category"
                        value={category}
                        OptionName="Category"
                        onChange={handleCategoryChange} // Correctly handle change
                        options={categorys}
                      />
                    </div>
                    <div className="col-span-2">
                      <Input
                        type="text"
                        name="description"
                        placeholder="How We Can Help You?"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2 s:col-span-2 flex">
                      <button
                        type="submit"
                        className="font-semibold text-[#fff] bg-[#B064CA] rounded-lg 4xl:text-[26px] 3xl:text-[20px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[14px] s:text-[14px]  px-5 py-4"
                      >
                        Send Message
                      </button>
                      {show && (
                        <p className="self-center pl-5 text-[#000] text-lg">
                          {text}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
}

export default Contact;

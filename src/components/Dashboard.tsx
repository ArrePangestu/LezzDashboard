import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import { BiTimer } from "react-icons/bi";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { GiCardJackClubs } from "react-icons/gi";
import { GiCardQueenClubs } from "react-icons/gi";
import { GiCardKingClubs } from "react-icons/gi";
import { GiCardAceHearts } from "react-icons/gi";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface FAQ {
  question: string;
  answer: string;
}

function Dashboard() {
  const gradient = {
    backgroundImage: "linear-gradient(to right, #da92e7, #706af6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2024-06-01") - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString();
  };

  const pricingOptions = [
    {
      title: "PRO",
      price: 99,
      oldPrice: 1440,
      features: [
        "Up to 50 forms creation/project",
        "Unlimited components",
        "1 project",
        "1 device",
      ],
      buttonText: "Get Pro Lifetime",
      bgColor: "bg-indigo-200",
      buttonColor: "bg-indigo-500",
      textButtonColor: "text-white",
      textColor: "text-purple-900",
    },
    {
      title: "TEAM",
      price: 198,
      oldPrice: 3540,
      features: [
        "Up to 75 forms creation/project",
        "Unlimited components",
        "2 projects",
        "3 devices",
      ],
      buttonText: "Get Team Lifetime",
      bgColor: "bg-indigo-200",
      buttonColor: "bg-indigo-500",
      textButtonColor: "text-white",
      textColor: "text-purple-900",
    },
    {
      title: "STARTUP",
      price: 296,
      oldPrice: 8340,
      features: [
        "Up to 150 forms creation/project",
        "Unlimited components",
        "5 projects",
        "5 devices",
      ],
      buttonText: "Get Startup Lifetime",
      bgColor: "bg-indigo-500",
      buttonColor: "bg-indigo-200",
      textButtonColor: "text-indigo-500",
      textColor: "text-white",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.includes(index)
        ? prevOpenIndexes.filter((i) => i !== index)
        : [...prevOpenIndexes, index]
    );
  };

  const faqs: FAQ[] = [
    {
      question: "How can I pay for my appointment?",
      answer:
        "You can pay for your appointment using various payment methods such as credit cards, debit cards, and online payment gateways. Please contact our office for more details.",
    },
    {
      question:
        "Is the cost of the appointment covered by private health insurance?",
      answer:
        "The cost of your appointment may be covered by private health insurance. We recommend checking with your insurance provider for specific coverage details.",
    },
    {
      question: "Do I need a referral?",
      answer:
        "A referral may be required depending on the type of consultation you are seeking. Please contact us to find out if a referral is necessary for your appointment.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "Our opening hours are Monday to Friday from 9 AM to 5 PM. We are closed on weekends and public holidays.",
    },
    {
      question: "What can I expect at my first consultation?",
      answer:
        "During your first consultation, you can expect a thorough assessment of your condition, discussion of your medical history, and a detailed plan for your treatment moving forward.",
    },
  ];

  const [play, setPlay] = React.useState(false);
  const handlePlay = () => setPlay(true);
  const handleClose = () => setPlay(false);

  useEffect(() => {
    const body = document.body;
    if (play) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [play]);

  const rows = [
    ["drag & drop form", "✅", "✅", "✅"],
    ["built in validation", "✅", "✅", "✅"],
    ["connect to external API", "✅", "❌", "✅"],
    ["generate real native code", "✅", "❌", "❌"],
    ["you own the code", "✅", "❌", "❌"],
  ];

  return (
    <Fragment>
      <div className="container-xl bg-black">
        {/* Hero */}
        <div className="pt-16 pb-36 text-center">
          <h1
            className="text-5xl md:text-7xl font-bold sm:font-extrabold py-2 mb-5"
            style={gradient}
          >
            Not just from builder.
          </h1>
          <h1 className="text-white text-3xl sm:text-5xl font-bold sm:font-extrabold">
            Build natively for React & React Native.
          </h1>
          <p className="text-white text-xl mt-5">
            Not just embedded from! Build complex form by drag and drop, then{" "}
            <span className="block">
              generate it natively into React, NextJs, an React Native!
            </span>
          </p>
        </div>

        {/* Dashboard Large */}
        <div className="flex place-items-center place-content-center sm:my-0 my-20">
          <Image
            src="/image/lezzform-video-placeholder.png"
            alt="LezzAuth Showcase/Demo"
            className="sm:relative absolute hidden sm:block"
            width={1300}
            height={1300}
          />

          <Image
            src="/image/lezzform-video-placeholder.png"
            alt="LezzAuth Showcase/Demo"
            className="sm:relative absolute sm:hidden p-10"
            width={900}
            height={900}
          />
          <div className="absolute" onClick={handlePlay}>
            <button className="px-6 aspect-square size-20 text-sm bg-lezzindigo rounded-full hover:bg-lezzchia hover:scale-110 hover:ring-8 hover:ring-lezzborder transition-all ease-out duration-300 delay-150">
              {/* <Image src="/image/ic-play.svg" alt="Playback" width={40} height={40} /> */}
              <FaCirclePlay className="w-20 h-20 -ms-6" />
            </button>
            {/* <FaCirclePlay className="px-6 aspect-square size-20 text-sm bg-lezzindigo rounded-full hover:bg-lezzchia hover:scale-110 hover:ring-8 hover:ring-lezzborder transition-all ease-out duration-300 delay-150" /> */}
          </div>
          {play && (
            <div
              className="fixed z-[100] top-0 left-0 w-screen h-screen flex place-items-center place-content-center bg-slate-400 bg-opacity-50"
              onClick={handleClose}
            >
              <div className="relative w-fit h-5/6">
                <div
                  className="absolute top-[-10px] right-[-10px] text-white"
                  onClick={handleClose}
                >
                  <IoIosCloseCircle className="aspect-square p-1 text-xs bg-lezzindigo rounded-full size-6 hover:bg-lezzchia transition-all ease-out duration-300 delay-150" />
                </div>
                <iframe
                  className="rounded-2xl w-full h-full mr-10 sm:aspect-video"
                  src="https://www.youtube.com/embed/cetIBzvKSa4"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onClick={(e) => e.stopPropagation()} // Prevent closing on iframe click
                />
              </div>
            </div>
          )}
        </div>

        {/* Landing */}
        <div className="md:mt-20 mt-40 text-center ">
          <h1 className="text-white text-3xl sm:text-5xl font-bold sm:font-extrabold">
            Only <span style={gradient}>$99</span> to enjoy{" "}
            <span style={gradient}>lifetime access</span>
          </h1>
          <p className="text-xl text-white text-center tracking-wide mt-5 pb-20 px-4 sm:px-8">
            get all features such as project creation, form creation,
            components, etc
          </p>

          {/* Count Time */}
          <p className="text-white text-center md:tracking-wider pb-5 text-3xl sm:text-5xl font-bold sm:font-extrabold">
            <span style={gradient}>Limited time</span> offer, sales ends in
          </p>

          <div className="text-white pb-2">
            <div className="flex sm:flex-row justify-center space-x-4 space-y-0">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold md:text-7xl">
                  {addLeadingZero(timeLeft.days)} :
                </span>
                <span className="text-xl">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold md:text-7xl">
                  {addLeadingZero(timeLeft.hours)} :
                </span>
                <span className="text-xl">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold md:text-7xl">
                  {addLeadingZero(timeLeft.minutes)} :
                </span>
                <span className="text-xl">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold md:text-7xl">
                  {addLeadingZero(timeLeft.seconds)}
                </span>
                <span className="text-xl">Seconds</span>
              </div>
            </div>
          </div>

          <p className="text-center text-white text-md px-4 sm:px-8">
            Don&apos;t miss the lifetime deal offer and start build complex
            React form in minutes!
          </p>
          <button className="rounded-md bg-indigo-500 w-60 h-10 text-white mx-auto block mt-5 mb-20">
            Get Lifetime Deal
          </button>

          {/* Table */}
          <div>
            <p className="text-white text-center tracking-wide px-4 sm:px-8 text-3xl sm:text-5xl font-bold sm:font-extrabold mb-10">
              A <span style={gradient}>comparison</span> of top platforms
            </p>

            <div className="hidden lg:block overflow-x-auto">
              <table className="mx-auto w-full sm:w-2/3 bg-slate-400 border-collapse bg-opacity-50">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-white border-t border-b ">
                      Features
                    </th>
                    <th className="border-t border">
                      <Image
                        src="/image/lezzform-logo.svg"
                        alt="logo"
                        width={80}
                        height={80}
                        className="mx-auto"
                      />
                    </th>
                    <th className="border-t border">
                      <Image
                        src="/image/gform.png"
                        alt="logo"
                        width={20}
                        height={20}
                        className="mx-auto"
                      />
                    </th>
                    <th className="border-t border-b">
                      <Image
                        src="/image/mform.png"
                        alt="logo"
                        width={80}
                        height={80}
                        className="mx-auto"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={
                        rowIndex % 2 === 0
                          ? "bg-black bg-opacity-75"
                          : "bg-slate-300 bg-opacity-25"
                      }
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          // className="py-2 px-4 text-white border-t border-b"
                          className={`py-2 px-4  text-white ${
                            cellIndex !== 0 ? "border-l" : "text-start"
                          } ${
                            cellIndex !== row.length - 1 ? "border-r " : ""
                          } border-b`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="block lg:hidden overflow-x-auto">
              <table className="mx-auto w-full sm:w-2/3 bg-slate-400 border-collapse bg-opacity-50">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-white border-t border-b ">
                      Features
                    </th>
                    <th className="border-t border">
                      <Image
                        src="/image/lezzform-logo.svg"
                        alt="logo"
                        width={80}
                        height={80}
                        className="mx-auto"
                      />
                    </th>
                    <th className="border-t border">
                      <Image
                        src="/image/gform.png"
                        alt="logo"
                        width={20}
                        height={20}
                        className="mx-auto"
                      />
                    </th>
                    <th className="border-t border-b">
                      <Image
                        src="/image/mform.png"
                        alt="logo"
                        width={80}
                        height={80}
                        className="mx-auto"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={
                        rowIndex % 2 === 0
                          ? "bg-black bg-opacity-75"
                          : "bg-slate-300 bg-opacity-25"
                      }
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          // className="py-2 px-4 text-white border-t border-b"
                          className={`py-2 px-4  text-white ${
                            cellIndex !== 0 ? "border-l" : "text-start"
                          } ${
                            cellIndex !== row.length - 1 ? "border-r " : ""
                          } border-b`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Steps */}
          <div className="text-white min-h-screen flex flex-col items-center py-20 px-4 sm:px-8 mt-5">
            <p className="text-center text-3xl sm:text-5xl font-bold sm:font-extrabold">
              How it <span style={gradient}>works?</span>
            </p>
            <div className="mt-20 space-y-20">
              {/* Step 1 */}
              <div className="relative max-w-4xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
                  <div className="md:w-1/2">
                    {/* <Image src="image/lezzdash.png" alt="Step 1" className="rounded shadow-lg w-full" /> */}
                    <Image
                      src="/image/carbon1.png"
                      alt="lezzdash"
                      width={350}
                      height={350}
                    />
                  </div>
                  <div className="md:w-1/2 pl-0 md:pl-8">
                    <h2 className="text-2xl font-semibold mb-4 text-start">
                      Just <span style={gradient}>drag and drop</span>
                    </h2>
                    <p className="text-gray-300 text-start">
                      Simplify form creation with our Drag and Drop Form
                      Component. Effortlessly design custom forms by dragging
                      elements into place, streamlining your form-building
                      process on our intuitive platform.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 border-r-4 border-purple-500 hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-purple-500 text-purple-700 w-12 h-12 rounded-full items-center justify-center text-2xl font-bold md:flex hidden">
                  1
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative max-w-4xl mx-auto px-4 sm:px-8 mt-5 md:mt-5">
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
                  <div className="md:w-1/2 order-1 md:order-2 pl-0 md:pl-8">
                    <h2 className="md:text-2xl font-semibold mb-4 flex md:whitespace-nowrap md:-ms-24">
                      Use the{" "}
                      <span style={gradient}>
                        &nbsp;generated natively&nbsp;
                      </span>
                      component
                    </h2>
                    <p className="text-gray-300 md:text-end me-14 text-start">
                      Implement with our natively generated code import
                      effortlessly with a single line, and enjoy complete
                      customization capabilities.
                    </p>
                  </div>
                  <div className="md:w-1/2 order-1 md:order-2 ">
                    <Image
                      src="/image/carbon2.png"
                      alt="lezzdash"
                      width={350}
                      height={350}
                      className="md:ms-10"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 border-r-4 border-purple-500 hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-purple-500 text-purple-700 w-12 h-12 rounded-full items-center justify-center text-2xl font-bold md:flex hidden">
                  2
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative max-w-4xl mx-auto px-4 sm:px-8 mt-20 md:mt-0">
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
                  <div className="md:w-1/2">
                    {/* <Image src="image/lezzdash.png" alt="Step 3" className="rounded shadow-lg w-full" /> */}
                    <Image
                      src="/image/carbon3.png"
                      alt="lezzdash"
                      width={350}
                      height={350}
                    />
                  </div>
                  <div className="md:w-1/2 pl-0 md:pl-8">
                    <h2 className="text-2xl font-semibold mb-4 text-start">
                      Forms <span style={gradient}>ready in minutes</span>
                    </h2>
                    <p className="text-gray-300 text-start">
                      Get your forms up and running in minutes and enjoy
                      real-time code generation for every platform update,
                      ensuring seamless and immediate implementation.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 border-r-4 border-purple-500 hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-purple-500 text-purple-700 w-12 h-12 rounded-full items-center justify-center text-2xl font-bold md:flex hidden">
                  3
                </div>
              </div>
            </div>
          </div>

          {/* Discover */}
          <div className="bg-black text-white py-16 px-4 sm:px-8 -mt-10 md:-mt-20">
            <div className="text-center mb-12">
              <h1 className="text-white text-3xl sm:text-5xl font-bold sm:font-extrabold">
                Discover our <span style={gradient}>features</span>
              </h1>
              <p className="text-gray-400 mt-2 text-xl">
                Not just embedded form!
              </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
              <div className="bg-gray-800 group p-6 rounded-lg h-60 hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <h2 className="text-xl font-semibold mb-4">Drag & Drop Form</h2>
                <p className="text-gray-400 group-hover:text-white">
                  Effortlessly design custom forms by dragging elements into
                  place,
                </p>
                <div className="flex mt-8">
                  <GiCardJackClubs className="size-20" />
                  <GiCardQueenClubs className="size-20" />
                  <GiCardKingClubs className="size-20" />
                  <GiCardAceHearts className="size-20" />
                </div>
              </div>
              <div className="bg-gray-800 group hover:text-white p-6 rounded-lg md:mb-20 hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <div className="flex">
                  <GiCardJackClubs className="size-20" />
                  <GiCardQueenClubs className="size-20" />
                  <GiCardKingClubs className="size-20" />
                  <GiCardAceHearts className="size-20" />
                </div>
                <h2 className="text-xl font-semibold mb-4">
                  Connect to external API
                </h2>
                <p className="text-gray-400 group-hover:text-white">
                  Easy to integrate with external APIs for every form
                  configuration and action.
                </p>
              </div>
              <div className="bg-gray-800 group p-6 rounded-lg hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <h2 className="text-xl font-semibold mb-4">
                  Generate real native code
                </h2>
                <p className="text-gray-400 group-hover:text-white">
                  Design your form on our platform, and it will be automatically
                  generated into native code
                </p>
                <div className="flex mt-8">
                  <GiCardJackClubs className="size-20"/>
                  <GiCardQueenClubs className="size-20"/>
                  <GiCardKingClubs className="size-20"/>
                  <GiCardAceHearts className="size-20"/>
                </div>
              </div>
              <div className="bg-gray-800 group md:-mt-14 p-6 rounded-lg md:h-85 hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
              <div className="flex">
                  <GiCardJackClubs className="size-20"/>
                  <GiCardQueenClubs className="size-20"/>
                  <GiCardKingClubs className="size-20"/>
                  <GiCardAceHearts className="size-20"/>
                </div>
                <h2 className="text-xl font-semibold mt-10">
                  Built-in Validation
                </h2>
                <p className="text-gray-400 group-hover:text-white">
                  Simplify data accuracy with built-in validation, offering
                  diverse options for hassle-free submissions
                </p>
              </div>
              <div className="bg-gray-800 group p-6 rounded-lg hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] md:-mt-20">
                <h2 className="text-xl font-semibold mb-4">
                  Real time code generated
                </h2>
                <p className="text-gray-400 group-hover:text-white">
                  Any changes made to the form on our platform will instantly
                  regenerate the code in your project, ensuring seamless updates
                  and consistency
                </p>
                <div className="flex mt-8">
                  <GiCardJackClubs className="size-20"/>
                  <GiCardQueenClubs className="size-20"/>
                  <GiCardKingClubs className="size-20"/>
                  <GiCardAceHearts className="size-20"/>
                </div>
              </div>
              <div className="bg-gray-800 group p-6 rounded-lg hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <h2 className="text-xl font-semibold mb-4">You own the code</h2>
                <p className="text-gray-400 group-hover:text-white">
                  You retain full ownership of the code, empowering you with
                  control and flexibility for your projects
                </p>
                <div className="flex mt-8">
                  <GiCardJackClubs className="size-20"/>
                  <GiCardQueenClubs className="size-20"/>
                  <GiCardKingClubs className="size-20"/>
                  <GiCardAceHearts className="size-20"/>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit */}
          <div className="bg-black text-white py-16 px-4 sm:px-8">
            <div className="text- mb-12 px-4 sm:px-8">
              <h1 className="text-white text-3xl sm:text-5xl font-bold sm:font-extrabold">
                Benefit using <span style={gradient}>Lezzform</span>
              </h1>
              <p className="text-gray-400 mt-3 text-xl">
                Tired of doing repetitive work like creating form in React?
              </p>
            </div>
            <div className="max-w-7xl text-start mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-6">
              <div className="bg-gray-800 p-10 rounded-lg shadow-md">
                <BiTimer className="size-10" />
                <h2 className="text-xl font-semibold mb-4">
                  Safe time, code more
                </h2>
                <p className="text-gray-400">
                  LezzCode streamlines coding task with its one-line approach,
                  letting you accomplish more in less time.
                </p>
              </div>
              <div className="bg-gray-800 p-10 rounded-lg shadow-md">
                <BiTimer className="size-10" />
                <h2 className="text-xl font-semibold mb-4">Drag & Drop Form</h2>
                <p className="text-gray-400">
                  Effortlessly design custom forms by dragging elements into
                  place,
                </p>
              </div>
              <div className="bg-gray-800 p-10 rounded-lg shadow-md">
                <BiTimer className="size-10" />
                <h2 className="text-xl font-semibold mb-4">Drag & Drop Form</h2>
                <p className="text-gray-400">
                  Effortlessly design custom forms by dragging elements into
                  place,
                </p>
              </div>
              <div className="bg-gray-800 p-10 rounded-lg shadow-md">
                <BiTimer className="size-10" />
                <h2 className="text-xl font-semibold mb-4">Drag & Drop Form</h2>
                <p className="text-gray-400">
                  Effortlessly design custom forms by dragging elements into
                  place,
                </p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mt-20 px-4 sm:px-8 md:-mt-1">
            <div className="text-center mb-12 px-4 sm:px-8">
              <h1 className="text-white text-3xl sm:text-5xl font-bold sm:font-extrabold">
                Ready to <span style={gradient}>get started</span>
              </h1>
              <p className="text-white mt-2 text-xl">
                For only $99, enjoy lifetime access to our powerful form
                builder!
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
              {pricingOptions.map((option, index) => (
                <div
                  key={index}
                  className={`${option.bgColor} ${option.textColor} p-6 rounded-lg shadow-md text-start`}
                >
                  <h3 className={`text-xl font-bold ${option.textColor}`}>
                    {option.title}
                  </h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">${option.price}</span>
                    {option.oldPrice && (
                      <span className={`line-through ${option.textColor} ml-2`}>
                        ${option.oldPrice}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${option.textColor}`}>
                    Lifetime deal at one-time cost
                  </p>
                  <ul className="text-left mt-4 mb-6">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-center mb-2">
                        ✅{feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`${option.buttonColor} ${option.textButtonColor} py-2 px-4 rounded-lg w-full hover:${option.buttonColor}`}
                  >
                    {option.buttonText}
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center px-4 sm:px-8">
              <p className="bg-gray-800 text-white p-4 rounded-lg max-w-4xl mx-auto">
                NOTE: This product is{" "}
                <span className="font-bold text-yellow-300">
                  NON-REFUNDABLE
                </span>{" "}
                as itI&apos;ves a data offering. All sales are final. See SAMPLE
                of exactly what youI&apos;ved get monthly & read all FAQs before
                purchasing.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <div className="container max-w-4xl mx-auto">
              <h1 className="text-4xl text-white text-center sm:text-5xl font-bold sm:font-extrabold">
                Are you <span style={gradient}>still not convinced? </span>see
                FAQ
              </h1>
              <p className="text-white mt-2 text-center text-xl">
                Your Guide to Understanding Lezzform
              </p>
              <div className="mt-12 space-y-8 p-5">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
                  >
                    <button
                      className="flex items-center justify-between w-full p-8"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h1 className="font-semibold text-white dark:text-white">
                        {faq.question}
                      </h1>
                      <span
                        className={`text-gray-400 bg-gray-200 rounded-full ${
                          openIndexes.includes(index) ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {openIndexes.includes(index) ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M18 12H6"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          )}
                        </svg>
                      </span>
                    </button>
                    {openIndexes.includes(index) && (
                      <>
                        <hr className="border-gray-200 dark:border-gray-700" />
                        <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                          {faq.answer}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comunity */}
          <div className="bg-black text-white py-16 px-4 sm:px-8">
            <div className="text-center mb-12 px-4 sm:px-8">
              <h1 className="text-4xl text-white sm:text-5xl font-bold sm:font-extrabold">
                Join the <span style={gradient}>Community</span>
              </h1>
              <p className="text-gray-400 mt-2 text-xl">
                Supported by a network of early advocates, contributors, and
                champions
              </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
              <div className="bg-gray-800 group  h-80 p-6 rounded-lg hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <div className="flex items-center mb-4">
                  <Image
                    width={30}
                    height={30}
                    className="rounded-full mr-4"
                    src="data:image/png;base64,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"
                    alt="profile"
                  />
                  <h2 className="text-md text-white">@thoughguy_</h2>
                </div>
                <p className="text-gray-400 group-hover:text-white">
                  Working with lezzform has been one of the best dev experiences
                  I&apos;ve had lately. The best dev experiences. Im the best
                  Captain in the Sea
                </p>
              </div>

              <div className="bg-gray-800 group md:mb-10 p-6 rounded-lg hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <div className="flex items-center mb-4">
                  <Image
                    width={30}
                    height={30}
                    className="rounded-full mr-4"
                    src="data:image/png;base64,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"
                    alt="profile"
                  />
                  <h2 className="text-md text-white">@thoughguy_</h2>
                </div>
                <p className="text-gray-400 group-hover:text-white">
                  Working with lezzform has been one of the best dev experiences
                  I&apos;ve had lately. The best dev experiences. Im the best
                  Captain in the Sea
                </p>
              </div>

              <div className="bg-gray-800 group p-6 rounded-lg hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <div className="flex items-center mb-4">
                  <Image
                    width={30}
                    height={30}
                    className="rounded-full mr-4"
                    src="data:image/png;base64,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"
                    alt="profile"
                  />
                  <h2 className="text-md text-white">@thoughguy_</h2>
                </div>
                <p className="text-gray-400 group-hover:text-white">
                  Working with lezzform has been one of the best dev experiences
                  I&apos;ve had lately. The best dev experiences. Im the best
                  Captain in the Sea
                </p>
              </div>

              <div className="bg-gray-800 group md:-mb-10 p-6 rounded-lg hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <div className="flex items-center mb-4">
                  <Image
                    width={30}
                    height={30}
                    className="rounded-full mr-4"
                    src="data:image/png;base64,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"
                    alt="profile"
                  />
                  <h2 className="text-md text-white">@thoughguy_</h2>
                </div>
                <p className="text-gray-400 group-hover:text-white">
                  Working with lezzform has been one of the best dev experiences
                  I&apos;ve had lately. The best dev experiences. Im the best
                  Captain in the Sea
                </p>
              </div>

              <div className="bg-gray-800 group p-6 rounded-lg hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <div className="flex items-center mb-4">
                  <Image
                    width={30}
                    height={30}
                    className="rounded-full mr-4"
                    src="data:image/png;base64,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"
                    alt="profile"
                  />
                  <h2 className="text-md text-white">@thoughguy_</h2>
                </div>
                <p className="text-gray-400 group-hover:text-white">
                  Working with lezzform has been one of the best dev experiences
                  I&apos;ve had lately. The best dev experiences. Im the best
                  Captain in the Sea
                </p>
              </div>

              <div className="bg-gray-800 group md:-mt-10 p-6 rounded-lg hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <div className="flex items-center mb-4">
                  <Image
                    width={30}
                    height={30}
                    className="rounded-full mr-4"
                    src="data:image/png;base64,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"
                    alt="profile"
                  />
                  <h2 className="text-md text-white">@thoughguy_</h2>
                </div>
                <p className="text-gray-400 group-hover:text-white">
                  Working with lezzform has been one of the best dev experiences
                  I&apos;ve had lately. The best dev experiences. Im the best
                  Captain in the Sea
                </p>
              </div>

              <div className="bg-gray-800 group p-6 rounded-lg hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <div className="flex items-center mb-4">
                  <Image
                    width={30}
                    height={30}
                    className="rounded-full mr-4"
                    src="data:image/png;base64,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"
                    alt="profile"
                  />
                  <h2 className="text-md text-white">@thoughguy_</h2>
                </div>
                <p className="text-gray-400 group-hover:text-white">
                  Working with lezzform has been one of the best dev experiences
                  I&apos;ve had lately. The best dev experiences. Im the best
                  Captain in the Sea
                </p>
              </div>

              <div className="bg-gray-800 group md:mt-10 h-80 p-6 rounded-lg hover:bg-blue-500 hover:shadow-blue-500 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]">
                <div className="flex items-center mb-4">
                  <Image
                    width={30}
                    height={30}
                    className="rounded-full mr-4"
                    src="data:image/png;base64,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"
                    alt="profile"
                  />
                  <h2 className="text-md text-white">@thoughguy_</h2>
                </div>
                <p className="text-gray-400 group-hover:text-white">
                  Working with lezzform has been one of the best dev experiences
                  I&apos;ve had lately. The best dev experiences. Im the best
                  Captain in the Sea
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black py-16 md:-mt-10">
            <p className="text-white text-center">
              Dont miss the lifetime deal offer and start build complex React
              form in minutes!
            </p>
            <button className="rounded-md bg-indigo-500 w-60 h-10 text-white mx-auto block mt-5 mb-20">
              Get Lifetime Deal
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;

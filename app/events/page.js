"use client";
import { useState } from "react";
import Stepper, { Step } from "@/components/ui/cards/Stepper";
import ShinyText from '@/components/ui/text/ShinyText';
import Link from "next/link";  // Import the Link component for navigation

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 sm:px-6 lg:px-8 scale-100 sm:scale-105 md:scale-110 lg:scale-100">
      {/* Shiny Text component with opacity and responsiveness */}
      <ShinyText
        text="March 17th Symposium: Participant Hub"
        disabled={false}
        speed={3}
        className="custom-class text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mx-auto py-32 opacity-90 hover:opacity-100 transition-opacity duration-300 font-bold"
      />
     
      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log(step); // Just log the step without returning anything
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold">
            Registration and Confirmation
          </h2>
          <p className="mt-4 text-lg sm:text-xl">Check out the next step!</p>
        </Step>
        <Step>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Pre-Symposium Preparation
          </h2>
          <img
            style={{
              height: "200px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center -70px",
              borderRadius: "15px",
              marginTop: "1em",
            }}
            src="https://img.freepik.com/free-vector/taking-notes-concept-illustration_114360-1114.jpg?t=st=1738872143~exp=1738875743~hmac=4f9173d0a4274a68e3bb483620d66ef79b4586bcc4e85221e70fe253f118f93f&w=826"
            alt="Step 2"
          />
          <p className="mt-4 text-lg sm:text-xl">Agenda Overview</p>
        </Step>
        <Step>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Symposium Day March 17
          </h2>
        </Step>
        <Step>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Prize Distribution
          </h2>
          <p className="mt-4 text-lg sm:text-xl"></p>
        </Step>
      </Stepper>

      {/* Go Home Button */}
      <div className="mt-8 py-16">
        <Link href="/">
          <button className={`
            justify-center align-middle px-6 py-3 rounded-2xl
            bg-black text-white font-semibold hover:bg-white hover:text-black
            transition-all duration-300
            flex items-center gap-2
            shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
            hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
            hover:text-cyan-300
          `}>
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

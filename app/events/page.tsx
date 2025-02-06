"use client";
import { useState } from "react";
import Stepper, { Step } from "@/components/ui/cards/Stepper";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 sm:px-6 lg:px-8 scale-100 sm:scale-105 md:scale-110 lg:scale-100">
      {/* Stepper component */}
      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          return console.log(step);
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
          {/* <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name?"
            className="mt-4 p-2 rounded-md text-black w-full sm:w-80 md:w-96"
          /> */}
        </Step>
        <Step>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Prize Distribution
          </h2>
          <p className="mt-4 text-lg sm:text-xl"></p>
        </Step>
      </Stepper>
    </div>
  );
}

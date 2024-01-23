"use client";
import Image from "next/image";
import React from "react";
import TestimonialImage01 from "@/public/images/mainImg.jpg";
import TestimonialImage02 from "@/public/images/projectImg.jpg";

export default function Testimonials() {
  const items = [
    {
      Name: "SciFest UCP",
      ImagePath: TestimonialImage01,
      Description:
        "Dive into a virtual celebration of scientific wonders and engineering marvels at our university's Festival where innovation meets inspiration.",
      Link: "http://www.scifestucp.com",
    },
    {
      Name: "Coach Abi",
      ImagePath: TestimonialImage02,
      Description:
        "Explore a futuristic chatbot for instant AI-driven assistance on your mobile app, making interactions smarter and more efficient.",
      Link: "https://apps.apple.com/pk/app/coach-abi/id6474151705",
    },
  ];

  return (
    <section>
      <div
        className="max-w-6xl mx-auto px-4  sm:px-6"
        id="our-projects-section"
      >
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-20">
            <h2 className="h2 mb-4">Our Projects</h2>
            {/* <p className="text-xl text-gray-400">Coming Soon...</p> */}
          </div>
          <div className="no-scrollbar flex gap-6 max-w-full  overflow-auto">
            {items.map(({ Name, ImagePath, Description, Link }, index: any) => (
              <div
                className="flex flex-col flex-shrink-0 h-full p-6 mx-3 cursor-pointer bg-gray-800"
                data-aos="fade-up"
                key={index}
                onClick={() => {
                  window.open(Link, "_blank");
                }}
              >
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    src={ImagePath}
                    width={300}
                    height={200}
                    alt="Testimonial 01"
                  />
                </div>
                <div className="font-bold text-2xl my-0.5">{Name}</div>
                <blockquote className="text-lg  w-64 text-gray-400 grow">
                  {Description}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

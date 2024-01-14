"use client";
import Image from "next/image";
import React from "react";
import TestimonialImage01 from "@/public/images/mainImg.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  const [items, setItems] = React.useState(["notarizr", "a", "b", "c", "d"]);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4  sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-20">
            <h2 className="h2 mb-4">Our Projects</h2>
            {/* <p className="text-xl text-gray-400">Coming Soon...</p> */}
          </div>
          <div className="no-scrollbar flex gap-6 max-w-full  overflow-auto">
            {/* <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              transitionBehavior={"auto"}
              transitionDuration={300}
              
            > */}
            {items.map(({ id }) => (
              <div
                className="flex flex-col flex-shrink-0 h-full p-6 mx-3  bg-gray-800"
                data-aos="fade-up"
                key={id}
              >
                <div className="relative inline-flex flex-col mb-4">
                  <Image
                    // className="rounded-full"
                    src={TestimonialImage01}
                    width={300}
                    height={200}
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-lg w-48 text-gray-400 grow">
                  A intuitive website for a university's proud occasion of
                  Science & Engineering Festival
                </blockquote>
              </div>
            ))}
            {/* </ScrollMenu> */}
          </div>
        </div>
      </div>
    </section>
  );
}

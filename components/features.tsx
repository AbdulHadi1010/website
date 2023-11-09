import WebLogo from "../public/images/coding.png";
import AppLogo from "../public/images/app-dev.png";
import DigiLogo from "../public/images/bullhorn.png";
import SEO from "../public/images/seo.png";
import UxLogo from "../public/images/design.png";
import AD from "../public/images/advertising.png";
import Image from "next/image";

export default function Features() {
  const services = [
    {
      service: "Web Development",
      intro:
        "Crafting interactive and user-centric websites that leave a lasting digital impression. Your online presence, our expertise.",
    },
    {
      service: "App Development",
      intro:
        "Transforming ideas into intuitive and innovative mobile applications. We breathe life into your app concepts.",
    },
    {
      service: "SEO",
      intro:
        "Boosting your online visibility and driving organic traffic. Elevate your search engine rankings and dominate the digital landscape.",
    },
    {
      service: "Content Writing",
      intro:
        "Words that resonate, content that captivates. Our expert writers craft compelling narratives tailored to your audience.",
    },
    {
      service: "Graphic Design",
      intro:
        "Visual storytelling at its finest. From logos to branding, we design graphics that speak volumes and leave a memorable impact.",
    },
  ];
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Innovative Excellence, Simplified Solutions:
            </h2>
            <p className="text-xl text-gray-400">
              At iCode Bugz, we're not just a software company; we're innovators
              crafting cutting-edge solutions. Fueled by passion, we specialize
              in redefining the digital landscape with our robust products.
              Experience innovation simplified.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center "
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600  rounded-full">
                <Image
                  src={WebLogo}
                  alt="Web Logo"
                  width={50}
                  height={50}
                  className="m-3"
                />
              </div>
              <h4 className="h4 mb-2 ">Web Developement</h4>
              <p className="text-lg text-gray-400 text-center">
                Transforming ideas into sleek, functional, and user-friendly
                web masterpieces.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600  rounded-full">
                <Image
                  src={AppLogo}
                  alt="Web Logo"
                  width={50}
                  height={50}
                  className="m-3"
                />
              </div>
              <h4 className="h4 mb-2">App Development</h4>
              <p className="text-lg text-gray-400 text-center">
                From concept to code, redefine excellence in mobile
                app development.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600  rounded-full">
                <Image
                  src={AD}
                  alt="Web Logo"
                  width={50}
                  height={50}
                  className="m-3"
                />
              </div>
              <h4 className="h4 mb-2">Digital Marketing</h4>
              <p className="text-lg text-gray-400 text-center">
                Strategize, optimize, and conquer the digital landscape
                with our marketing.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600  rounded-full">
                <Image
                  src={SEO}
                  alt="Web Logo"
                  width={50}
                  height={50}
                  className="m-3"
                />
              </div>
              <h4 className="h4 mb-2">SEO/Content writing</h4>
              <p className="text-lg text-gray-400 text-center">
                From SEO mastery to social media magic, Your brand's online
                journey starts here, with our dynamic marketing solutions
              </p>
            </div>
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600  rounded-full">
                <Image
                  src={DigiLogo}
                  alt="Web Logo"
                  width={50}
                  height={50}
                  className="m-3"
                />
              </div>
              <h4 className="h4 mb-2">Social Media Management</h4>
              <p className="text-lg text-gray-400 text-center">
                From strategy to scheduling – we manage your social
                presence with finesse.
              </p>
            </div>
            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="bg-purple-600  rounded-full">
                <Image
                  src={UxLogo}
                  alt="Web Logo"
                  width={50}
                  height={50}
                  className="m-3"
                />
              </div>
              <h4 className="h4 mb-2">Graphic Design</h4>
              <p className="text-lg text-gray-400 text-center">
                From concept to canvas, crafting designs that resonate with
                your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

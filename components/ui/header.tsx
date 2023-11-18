import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import Logo from "../../public/images/mainLogo.png.png";

export default function Header() {
  return (
    <header className="absolute w-full z-30 ">
      <div className="max-w-6xl  mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 ">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image src={Logo} alt="Cruip" width={100} height={100} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#our-services-section"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about-us-section"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About us
                </Link>
              </li>

              {/* <ScrollToComponent target="contact-us-section"> */}
              <li>
                <Link
                  href="#contact-us-section"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                >
                  Contact us
                </Link>
              </li>
              {/* </ScrollToComponent> */}
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

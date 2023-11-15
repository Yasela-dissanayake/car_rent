import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-5 border-t text-black-100 border-gray-100">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 sm:px16 mx-md:flex-col">
        <div className="flex flex-col justify-start items-tart gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t px-6 py-10 border-gray-100 sm:px-16">
        <p>@2023 Carhub. All Rights Reserved</p>

        <div className="footer_copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import LogoWithName from "../molecules/LogoWithName";
import { PrimaryButton } from "../atoms/Button";

const Footer = () => (
  <>
    <div className="border-t border-b md:flex md:justify-between gap-5 border-[#E3E1E3] w-full py-6 px-5">
      <div className="md:w-2/6">
        <LogoWithName />
        <div className="my-6 text-[#2D2E36] dark:text-white font-semibold">
          Get the lastes Updates
        </div>
        <div className="flex relative mb-6">
          <input
            className="w-full bg-black focus:shadow focus:outline-none h-[38px] rounded-[10px] placeholder:text-[12px] placeholder:text-white placeholder:font-semibold pl-1"
            placeholder="Your Email"
          />
          <PrimaryButton
            title="Email Me!"
            classProps="absolute top-0 right-0"
          />
        </div>
      </div>
      <div className="md:w-4/6 flex justify-between md:justify-around">
        <div>
          <div className="mb-6 text-xl text-[#2D2E36] dark:text-white font-semibold">
            NFTMart
          </div>
          <div className="text-[#4F4F4F] dark:text-white mb-3">Explore</div>
          <div className="text-[#4F4F4F] dark:text-white mb-3">
            How it Works
          </div>
          <div className="text-[#4F4F4F] dark:text-white">Contact Us</div>
        </div>
        <div>
          <div className="mb-6 text-xl text-[#2D2E36] dark:text-white font-semibold">
            Support
          </div>
          <div className="text-[#4F4F4F] dark:text-white mb-3">Help center</div>
          <div className="text-[#4F4F4F] dark:text-white mb-3">
            Terms of service
          </div>
          <div className="text-[#4F4F4F] dark:text-white mb-3">Legal</div>
          <div className="text-[#4F4F4F] dark:text-white">Privacy policy</div>
        </div>
      </div>
    </div>
    <div className="pt-6 pb-12 px-5 flex flex-col items-center">
      <div className="text-[#2D2E36] dark:text-white font-semibold">
        CrpytoKet, Inc. All Rights Reserved
      </div>
    </div>
  </>
);

export default Footer;

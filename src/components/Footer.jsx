import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center w-20 md:w-30">
                <img src={logo} alt="logo" />
                <span className="ml-4 text-lg font-bold">joinportalpro</span>
              </div>
              <div>
                <p className="mb-4  text-base font-medium">
             Made with love by team data dominators
                </p>
                <p className="text-sm">
                  &copy; Copyright 2024. All Rights Reserved by data dominators 
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Footer;

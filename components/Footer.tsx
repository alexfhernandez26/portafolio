import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto px-4 sm:px-6 md:max-w-5">
      <hr className="bg-neutral-600 h-0.5 w-full mt-8 border-0" />
      <div className="flex justify-between content-center mt-4 text-neutral-900">
        <div> &copy; Fernando Hernandez</div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="">
            <AiOutlineGithub
              size={30}
              className="hover:tanslate-y-1 transition-transform cursor-pointer"
            />
          </a>
          <a href="">
            <AiOutlineTwitter
              size={30}
              className="hover:tanslate-y-1 transition-transform cursor-pointer"
            />
          </a>
          <a href="">
            <AiOutlineYoutube
              size={30}
              className="hover:tanslate-y-1 transition-transform cursor-pointer"
            />
          </a>
          <a href="">
            <AiOutlineLinkedin
              size={30}
              className="hover:tanslate-y-1 transition-transform cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

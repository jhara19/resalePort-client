import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from '../../../Images/gym-logo-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="mt-32 footer footer-center p-10 bg-slate-800 rounded text-slate-300">
      <div>
        <img src={logo} className="w-16 -mb-6" alt="" />
      </div>
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover" href=" ">
          About us
        </a>
        <a className="link link-hover" href=" ">
          Contact
        </a>
        <a className="link link-hover" href=" ">
          Jobs
        </a>
        <a className="link link-hover" href=" ">
          Blogs
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-2xl ">
          <a
            href="https://www.youtube.com/watch?v=poQXNp9ItL4"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.facebook.com/rakib.molla.9634340/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-rakib1/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MohammadRakib1e18"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by ResalePort.com</p>
      </div>
    </footer>
  );
};

export default Footer;

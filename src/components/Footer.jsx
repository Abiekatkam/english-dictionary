import React from "react";
import Links from "./Links";
import GithubProfileImage from "../assets/breathe.jpg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="lg:w-[380px] lg:h-[600px] flex flex-col items-center justify-center gap-10 bg-black rounded-lg lg:p-4 p-6 text-white shadow-2xl">
      <div className="flex flex-col justify-center items-center gap-0">
        <img
          src={GithubProfileImage}
          alt="githubprofieimage"
          className="lg:w-40 lg:h-40 w-[120px] h-[120px] rounded-full object-cover object-center border-4 border-white shadow-lg"
        />
        <p className="lg:text-[2rem] text-[1.5rem] font-bold capitalize">
          Abie Katkam
        </p>
        <span className="lg:text-[0.9rem] text-[0.7rem] opacity-50">
          All rights reserved {year}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-0">
        <p className="lg:text-[1rem] text-[0.9rem] font-bold uppercase">
          Follow me on
        </p>
        <div className="flex flex-row gap-2 justify-center items-center  transition-all ease-in">
          <Links
            link={"https://github.com/Abiekatkam"}
            iconUrl={"fa-brands fa-github"}
          />
          <Links
            link={"https://www.linkedin.com/in/abhishek-katkam-988744231/"}
            iconUrl={"fa-brands fa-linkedin"}
          />
          <Links
            link={"https://www.instagram.com/_abie._/"}
            iconUrl={"fa-brands fa-instagram"}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-0">
        <p className="lg:text-[1rem] text-[0.9rem] font-bold uppercase">
          Source Code
        </p>
        <div className="flex flex-row gap-2 justify-center items-center  transition-all ease-in">
          <Links
            link={"https://github.com/Abiekatkam/english-dictionary"}
            iconUrl={"fa-solid fa-link"}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

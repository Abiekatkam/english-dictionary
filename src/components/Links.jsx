import React from "react";

const Links = ({ link, iconUrl, iconColor }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="text-white lg:w-[35px] w-[30px] lg:h-[35px] h-[30px] flex items-center justify-center lg:text-[1.9rem] text-[1.5rem] opacity-50 hover:opacity-100 cursor-pointer hover:scale-105"
    >
      <i className={iconUrl}></i>
    </a>
  );
};

export default Links;

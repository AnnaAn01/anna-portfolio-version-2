import React from "react";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <a href="/#">Home</a>
        <a href="/#">Tech stack</a>
        <a href="/#">Portfolio</a>
        <a href="/#">About me</a>
        <button>Contact</button>
        <button>
          <MdClose />
        </button>
      </nav>
      <button>
        <IoMdMenu />
      </button>
    </header>
  );
};

export default Navbar;

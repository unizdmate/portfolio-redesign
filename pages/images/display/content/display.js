import React from "react";
import Image from "next/image";

const display = () => {
  return (
    <div>
      <Image src="/testImg.jpg" layout="fill" alt="Homepage"></Image>
    </div>
  );
};

export default display;

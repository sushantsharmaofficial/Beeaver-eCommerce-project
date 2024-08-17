import React from "react";
import { tailChase } from "ldrs";

tailChase.register(); // Default values
const Loader = () => {
  return (
    <div className="container mx-auto h-40  lg:h-screen w-screen flex items-center justify-center mt-20 mb-28">
      <l-tail-chase size="80" speed="1.75" color="black"></l-tail-chase>
    </div>
  );
};

export default Loader;

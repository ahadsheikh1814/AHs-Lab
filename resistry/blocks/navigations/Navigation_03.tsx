import React from "react";

const Navigation_03 = () => {
  return (
    <header className="w-full max-w-5xl rounded-2xl mt-5 dark:bg-neutral-800 bg-neutral-100 h-14 mx-auto dark:border-neutral-700 border backdrop-blur-sm border-neutral-200 flex items-center justify-between px-5">
      <Logo/>
    </header>
  );
};

export default Navigation_03;

const Logo =()=>{
  return(
    <div>
      <h1 className="text-xl font-bold font-mono">AHs-Lab</h1>
    </div>
  );
}
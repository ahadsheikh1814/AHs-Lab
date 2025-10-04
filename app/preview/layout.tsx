"use client";
// import BlockMenu from "@/components/layout/BlockMenu";
// import BlocksViewCodeBtn from "@/components/layout/BlocksViewCodeBtn";
import React from "react";

const PreviewLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return(
    <div>
        {/* <div className="z-[100]">
            <BlockMenu/>
        </div>
        <div className="z-[100]">
          <BlocksViewCodeBtn/>
        </div> */}
        {children}
    </div>
  );
};

export default PreviewLayout;

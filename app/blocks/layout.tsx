"use client";
import BlockMenu from "@/components/layout/BlockMenu";
import BlocksViewCodeBtn from "@/components/layout/BlocksViewCodeBtn";
import React from "react";

const Block_Layout = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return(
    <div>
        <div className="z-[100]">
            <BlockMenu/>
        </div>
        <div className="z-[100]">
          <BlocksViewCodeBtn/>
        </div>

        {children}
    </div>
  );
};

export default Block_Layout;

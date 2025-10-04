"use client"

import { use } from "react";
import { useRegistryComponent } from "@/hooks/useRegistryComponent";

const BlockPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);

  const Comp = useRegistryComponent(slug);

  if (!Comp) return <p>Component not found</p>;

  return (
      <Comp />
  );
};

export default BlockPage;

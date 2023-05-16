"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Logo: React.FC = () => {
  const router = useRouter();

  return <p className="text-2xl font-bold">bilim.ai</p>;
};

export default Logo;

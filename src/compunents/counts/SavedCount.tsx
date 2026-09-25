
"use client";

import { FitContext } from "@/context/fitProvider";
import Link from "next/link";
import React, { useContext } from "react";

const SavedCount = () => {
  const { SavedFit } = useContext(FitContext);

  return (
    <Link
      href="/MyPlan"
      className="flex items-center gap-2"
    >
      <span>Saved</span>

      <span className="border border-[#2D313B] py-1 px-3 rounded-full">
        {SavedFit.length}
      </span>
    </Link>
  );
};

export default SavedCount;


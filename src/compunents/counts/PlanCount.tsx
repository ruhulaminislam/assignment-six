
"use client";

import { FitContext } from "@/context/fitProvider";
import Link from "next/link";
import React, { useContext } from "react";

const PlanCount = () => {
  const { AddtoFit } = useContext(FitContext);

  return (
    <Link
      href="/MyPlan"
      className="flex items-center gap-2"
    >
      <span>Plan</span>

      <span className="text-[#000000] bg-[#ccff00] rounded-full py-1 px-3">
        {AddtoFit.length}
      </span>
    </Link>
  );
};

export default PlanCount;


"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import ShaderShowcase from "@/components/ui/hero";

export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-slate-900 text-white border-slate-800"
      >
        Borders are cool
      </Button>
    </div>
  );
}

export default function DemoOne() {
  return (
    <div className="min-h-screen h-full w-full">
      <ShaderShowcase/>
    </div>
  );
}

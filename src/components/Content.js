"use client" //CSR

import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import React from 'react'
import { useEffect ,useState } from "react";
import windowWidth from "@/hooks/windowWidth";

export default function content() {

  const width = windowWidth();
  
  const breakpoint = 620;

  return width < breakpoint ? console.log("mobile") : console.log("desktop");
} 
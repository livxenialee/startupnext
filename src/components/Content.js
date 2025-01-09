"use client" //CSR

import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import React from 'react'
//import { useEffect ,useState } from "react";
import windowWidth from "@/hooks/UseWindowWidth";

const Content = ({item}) => {

  //const [dimension, setDimension] = useState(0);

  const width = windowWidth();

  // useEffect( () => {

  // setDimension(window.innerWidth);


  //   const handleResize = () => {

  //     setDimension(window.innerWidth);

  //     console.log(window.innerWidth);
  //   }


  //   window.addEventListener("resize", handleResize)

  //   return () => {

  //     window.removeEventListener("resize", handleResize);

  //   }

  // }, [] );


  const breakPoint = 620;

  return width < breakPoint ? <MobileView item={item} /> : <DesktopView item={item} />;

};

export default Content;



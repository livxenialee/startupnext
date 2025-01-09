"use client"; // CSR - client baseret (server kan ikke læse javascript)
// hvis den ikke er client baseret er den SSR

import Content from "@/components/Content";

export default function Home() {

  let myData = [
    {
      headline: "ABOUT",
      title: "ABOUT",
      color: "#0F528C",
      description: "Description of about"
    },
    {
      headline: "WHAT",
      title: "WHAT",
      color: "#2182BF",
      description: "Description of what",
      more: "Something What" 
    },
    {
      headline: "CONTACT",
      title: "CONTACT",
      color: "#D9AD29",
      description: "Description of contact"
    }
  ]

  return (
    <main>
      <Content item={myData} />
    </main>
  )

}

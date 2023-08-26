import Header, { page_loc } from "@/components/header"
import { Metadata } from "next"
import Image from "next/image"
import React from "react"
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: "Home - Reabek"
}
export default function Home() {
  return (
    <React.Fragment>
      <Header location={page_loc.Home}/>
      
    </React.Fragment>
  )
}

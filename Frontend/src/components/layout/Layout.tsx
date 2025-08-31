import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-16 flex-1 bg-card/60">
        <Outlet /> {/* This is where the nested page (like HomePage) gets rendered */}
      </main>
      <Footer />
    </>
  )
}

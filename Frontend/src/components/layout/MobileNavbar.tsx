// src/components/layout/MobileNavbar.tsx
import { useState, useEffect } from "react"

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "faculty", label: "Faculty" },
  { id: "events", label: "Events" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
]

export default function MobileNavbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const options = { threshold: 0.6 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    }, options)

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur border-b border-border">
      <ul className="flex justify-around py-3 text-sm font-medium">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className={`px-2 py-1 transition-colors ${
                active === id
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

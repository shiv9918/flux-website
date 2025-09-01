// src/components/layout/MobileLayout.tsx
import MobileNavbar from "./MobileNavbar" // the scroll-aware nav we built earlier

// Page components reused as sections
import HomePage from "@/pages/home"
import AboutPage from "@/pages/about/AboutPage"
import FacultyPage from "@/pages/faculty/FacultyPage"
import EventsPage from "@/pages/events/events"
import ContactPage from "@/pages/contact/contact";
import TeamPage from "@/pages/team/team";
import Application from "@/pages/induction/Application";

export default function MobileLayout() {
  return (
    <div className="relative">
      <MobileNavbar />
      <section id="home" className="pt-16 scroll-mt-16">
        <HomePage />
      </section>
      <section id="about" className="pt-16 scroll-mt-16">
        <AboutPage />
      </section>
      <section id="faculty" className="pt-16 scroll-mt-16">
        <FacultyPage />
      </section>
      <section id="events" className="pt-16 scroll-mt-16">
        <EventsPage />
      </section>
      <section id="team" className="pt-16 scroll-mt-16">
        <TeamPage />
      </section>
      <section id="contact" className="pt-16 scroll-mt-16">
        <ContactPage />
      </section>
        <section id="contact" className="pt-16 scroll-mt-16">
            <Application />
        </section>
    </div>
  )
}

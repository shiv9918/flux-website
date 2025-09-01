import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Using lucide-react for icons
import logo from "@/assets/images/flux_logo.png";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "faculty", label: "Faculty" },
    { id: "events", label: "Events" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
    { id: "join", label: "Induction" },
];

export default function MobileNavbar() {
    const [active, setActive] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Effect to handle body scroll lock when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function to restore scroll on component unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    // Effect for intersection observer to set active link
    useEffect(() => {
        const options = { threshold: 0.6 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        }, options);

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Function to handle link clicks: scrolls to section and closes menu
    const handleLinkClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false); // Close the menu after clicking a link
    };

    return (
        <>
            {/* --- Main Navbar --- */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur border-b border-border">
                <div className="flex items-center justify-between h-16 px-4">
                    {/* You can place your Logo or Site Title here */}
                    <img src={logo} alt="Logo" className="h-8 w-auto" />

                    {/* --- Hamburger Menu Button --- */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="z-50 p-2 text-primary focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* --- Full-screen Overlay Menu --- */}
            <div
                className={`fixed inset-0 z-40 bg-card/95 backdrop-blur-lg flex items-center justify-center transition-opacity duration-300 ease-in-out
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <ul className="flex flex-col items-center gap-y-8">
                    {sections.map(({ id, label }) => (
                        <li key={id}>
                            <button
                                onClick={() => handleLinkClick(id)}
                                className={`text-2xl font-medium transition-colors ${
                                    active === id
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-primary"
                                }`}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

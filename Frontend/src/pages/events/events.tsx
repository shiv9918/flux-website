import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

// Import event images
import techConferenceImg from '@/assets/images/tech-conference.jpg';
import designWorkshopImg from '@/assets/images/design-workshop.jpg';
import networkingEventImg from '@/assets/images/networking-event.jpg';
import startupPitchImg from '@/assets/images/startup-pitch.jpg';
import aiSummitImg from '@/assets/images/ai-summit.jpg';
import marketingMasterclassImg from '@/assets/images/marketing-masterclass.jpg';

// Event type definition
interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  isUpcoming: boolean;
  location?: string;
  attendees?: number;
}

// Sample events data
const events: Event[] = [
  {
    id: 1,
    title: "Hack-e-thon Series (Bi-Annual)",
    date: "2024-12-15",
    description: "24-48 hour coding challenges focused on real-world problems.",
    imageUrl: techConferenceImg,
    isUpcoming: true,
    location: "CSED, MMMUT, Gorakhpur",
    attendees: 500
  },
  {
    id: 2,
    title: "Annual Research Conclave",
    date: "2024-12-20",
    description: "Invited talks, panel discussions, and technical workshops with experts.",
    imageUrl: designWorkshopImg,
    isUpcoming: true,
    location: "CSED, MMMUT, Gorakhpur",
    attendees: 150
  },
  {
    id: 3,
    title: "Tech Conferences",
    date: "2024-12-22",
    description: "Student-led conferences inviting paper submissions and presentations.",
    imageUrl: networkingEventImg,
    isUpcoming: true,
    location: "CSED, MMMUT, Gorakhpur",
    attendees: 200
  },
  {
    id: 4,
    title: "Workshops & Seminars",
    date: "2024-11-10",
    description: "Skill-development sessions on tools and research methodologies.",
    imageUrl: startupPitchImg,
    isUpcoming: false,
    location: "CSED, MMMUT, Gorakhpur",
    attendees: 300
  },
  {
    id: 5,
    title: "Project Showcases & Demos",
    date: "2024-10-25",
    description: "Exhibiting student projects and collaborative works.",
    imageUrl: aiSummitImg,
    isUpcoming: false,
    location: "CSED, MMMUT, Gorakhpur",
    attendees: 800
  },
  {
    id: 6,
    title: "Publication Drives",
    date: "2024-10-15",
    description: "Sessions to guide students in writing and submitting research papers.",
    imageUrl: marketingMasterclassImg,
    isUpcoming: false,
    location: "CSED, MMMUT, Gorakhpur",
    attendees: 250
  }
];

const EventsPage: React.FC = () => {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = () => window.matchMedia('(min-width: 768px)').matches; // md breakpoint

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            // If user prefers reduced motion, just make visible
            if (prefersReduced) {
              el.classList.remove('opacity-0');
              el.classList.add('opacity-100');
              observer.unobserve(el);
              return;
            }

            // On desktop/tablet, add slide-up animation. On small screens, just reveal without animation.
            if (isDesktop()) {
              el.classList.remove('opacity-0');
              el.classList.add('animate-slide-up', 'opacity-100');
            } else {
              el.classList.remove('opacity-0');
              el.classList.add('opacity-100');
            }

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = document.querySelectorAll('.scroll-card');
    els.forEach((el) => observer.observe(el));

    // Re-observe on resize because isDesktop() can change
    const onResize = () => {
      // No-op: existing observer behavior handles new intersections; just keep it for future extension.
    };
    window.addEventListener('resize', onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);
  const upcomingEvents = events.filter(event => event.isUpcoming).slice(0, 3);
  const allEvents = events;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Spotify-style animated bars (hidden on small screens, decorative) */}
        <div className="hidden md:absolute md:top-10 md:left-10 md:flex md:items-end md:gap-1 opacity-20" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 bg-primary rounded-full md:animate-spotify-wave`}
              style={{
                height: `${20 + i * 10}px`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative container mx-auto max-w-6xl text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-bounce-in">
            Discover Amazing
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent animate-fade-in-left">
              Events
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up">
            Connect, learn, and grow with industry leaders and innovators at our carefully curated events.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-right">
            Don't miss these exciting opportunities to connect and learn
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 scroll-card opacity-0`}
              >
                <div className="relative">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      index === 0 ? 'h-80' : 'h-64'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Event Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full md:animate-pulse-glow">
                      Upcoming
                    </span>
                  </div>
                  
                  {/* Spotify-style corner decoration */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-4 mb-3 text-sm opacity-90">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(event.date)}
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-white/90 mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm opacity-90">
                      <Users className="w-4 h-4" />
                      {event.attendees} attendees
                    </div>
                    <Button variant="default" size="lg" className="group">
                      Register Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">All Events</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Explore our complete collection of past and upcoming events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allEvents.map((event) => (
              <div
                key={event.id}
                className={`group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 scroll-card opacity-0`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      event.isUpcoming 
                        ? 'bg-primary text-white animate-pulse-glow' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {event.isUpcoming ? 'Upcoming' : 'Past Event'}
                    </span>
                      {event.isUpcoming && (
                      <div className="w-2 h-2 bg-primary rounded-full animate-ping" aria-hidden="true"></div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(event.date)}
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {event.attendees} attendees
                    </div>
                    <Button variant={event.isUpcoming ? "default" : "outline"} size="sm" className="group">
                      {event.isUpcoming ? 'Register' : 'View Details'}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
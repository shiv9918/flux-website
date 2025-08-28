import { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  Users,
  Zap,
  Brain,
  ArrowRight,
  Sparkles,
  LucideIcon,
} from "lucide-react";

// Type definitions
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  pulse: number;
}

interface EventItem {
  id: number;
  title: string;
  date: string;
  type: string;
  icon: React.ReactNode;
  participants: string;
  description: string;
  iconBg: string;
  tagColor: string;
  tagBg: string;
}

// Particle System Component
const ParticleSystem = ({ isActive = true }: { isActive?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      // Ensure minimum dimensions to avoid zero width/height
      const width = Math.max(1, rect.width * dpr);
      const height = Math.max(1, rect.height * dpr);
      canvas.width = width;
      canvas.height = height;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      particles.current = [];
      for (let i = 0; i < 50; i++) {
        particles.current.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = () => {
      if (!isActive) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      particles.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.pulse += 0.02;

        // Wrap around edges
        const rect = canvas?.getBoundingClientRect();
        if (!rect) return;
        
        if (particle.x < 0) particle.x = rect.width;
        if (particle.x > rect.width) particle.x = 0;
        if (particle.y < 0) particle.y = rect.height;
        if (particle.y > rect.height) particle.y = 0;

        // Draw particle with pulsing effect
        const pulseFactor = Math.sin(particle.pulse) * 0.5 + 1;
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size * pulseFactor,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = particle.color;
        ctx.globalAlpha =
          particle.opacity * (Math.sin(particle.pulse) * 0.3 + 0.7);
        ctx.fill();

        // Draw connections
        particles.current.forEach((otherParticle) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (1 - distance / 100) * 0.2;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
      animationId.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute animate-float-${(i % 3) + 1} opacity-20`}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 2) * 40}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        >
          <div
            className={`w-${2 + (i % 3)} h-${
              2 + (i % 3)
            } bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm`}
          />
        </div>
      ))}
    </div>
  );
};

// Modern Event Card Component
interface EventCardProps {
  event: EventItem;
  index: number;
  onHover: (event: EventItem) => void;
}

const EventCard = ({ event, index, onHover }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  interface Ripple {
    x: number;
    y: number;
    id: number;
  }
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      className={`group relative transform transition-all duration-500 ease-out cursor-pointer ${
        isHovered
          ? "scale-105 -translate-y-4"
          : "hover:scale-102 hover:-translate-y-2"
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: `slideUp 0.8s ease-out forwards`,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(event);
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Holographic background effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-tilt" />

      {/* Glassmorphism card */}
      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>

        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute pointer-events-none animate-ripple"
            style={{
              left: ripple.x - 20,
              top: ripple.y - 20,
              width: 40,
              height: 40,
            }}
          >
            <div className="w-full h-full bg-white/20 rounded-full animate-ping" />
          </div>
        ))}

        <div className="relative p-8">
          {/* Floating icon */}
          <div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${event.iconBg} mb-6 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}
          >
            <div className="relative">
              {event.icon}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Event type with animated badge */}
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${event.tagBg} ${event.tagColor} mb-6 transform transition-transform duration-300 group-hover:scale-105`}
          >
            <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
            <span>{event.type}</span>
            <Sparkles className="w-3 h-3" />
          </div>

          {/* Title with text gradient */}
          <h3 className="font-bold text-2xl mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
            {event.description}
          </p>

          {/* Event details with icons */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="font-medium">{event.date}</span>
            </div>

            <div className="flex items-center space-x-3 text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <span className="font-medium">{event.participants} Expected</span>
            </div>
          </div>

          {/* Status and CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <span className="text-green-400 font-medium text-sm">
                Registration Open
              </span>
            </div>

            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group/btn">
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Animated bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </div>

      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-float-particle opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 20}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Component
export default function ModernEventsPreview() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const events: EventItem[] = [
    {
      id: 1,
      title: "Hack-e-thon Series",
      date: "Sep 15 – 16",
      type: "Competition",
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      participants: "120+",
      description:
        "24-48 hour coding challenges focused on real-world problems with cutting-edge tech stacks",
      iconBg: "bg-orange-500/20",
      tagColor: "text-orange-400",
      tagBg: "bg-orange-500/20",
    },
    {
      id: 2,
      title: "Annual Research Conclave",
      date: "Oct 20 – 22",
      type: "Conference",
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      participants: "200+",
      description:
        "Invited talks, panel discussions, and technical workshops with industry experts and researchers",
      iconBg: "bg-blue-500/20",
      tagColor: "text-blue-400",
      tagBg: "bg-blue-500/20",
    },
    {
      id: 3,
      title: "Tech Conferences",
      date: "Nov 8 – 10",
      type: "Conference",
      icon: <Users className="w-6 h-6 text-purple-400" />,
      participants: "150+",
      description:
        "Student-led conferences with paper submissions and presentations on emerging technologies",
      iconBg: "bg-purple-500/20",
      tagColor: "text-purple-400",
      tagBg: "bg-purple-500/20",
    },
  ];

  const onHover = (event: EventItem) => {
    setSelectedEvent(event);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particle System Background */}
      <ParticleSystem isActive={true} />

      {/* Floating Elements */}
      <FloatingElements />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
              Upcoming
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Events
              </span>
            </h1>

            {/* Floating calendar icon */}
            <div className="absolute -top-4 -right-12 text-blue-400/50 animate-float-slow">
              <Calendar className="w-12 h-12" />
            </div>
          </div>

          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Stay in the loop with our latest workshops, meetups, and tech
            festivals designed to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-semibold animate-pulse">
              spark your curiosity
            </span>
            .
          </p>

          {/* CTA Button */}
          <div
            className={`mt-8 transform transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="events"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium bg-primary text-black hover:brightness-110 transition transform hover:scale-105"
            >
              🎯 View All Events →
            </a>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              onHover={onHover}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className={`text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-lg font-medium">
                More exciting events coming soon
              </span>
            </div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(90deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(10deg);
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0px) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-40px) scale(0);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes tilt {
          0%,
          50%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 3.5s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 2s ease-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
        .animate-tilt {
          animation: tilt 10s ease-in-out infinite;
        }
        .animate-ripple {
          animation: ripple 0.6s linear;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}

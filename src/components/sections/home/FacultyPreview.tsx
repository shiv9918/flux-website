import { useState, useEffect } from "react";
import { Award, BookOpen } from "lucide-react";
import SatvikSir from "../../../assets/images/SatvikSir.jpg";

// Your existing SectionCTA component (keeping it exactly as is)
const SectionCTA = ({
  to,
  label,
}: {
  to: string;
  label: string;
  variant?: "primary";
}) => (
  <a href={to} className="inline-block">
    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
      {label}
    </button>
  </a>
);

export default function FacultyPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredHod, setHoveredHod] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section bg-[hsl(var(--card)/0.6)] text-white relative overflow-hidden">
      {/* Subtle background animations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-16 left-20 w-40 h-40 bg-neutral-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-24 right-16 w-56 h-56 bg-neutral-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neutral-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neutral-400/25 rounded-full animate-float"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 relative">
            <span className="relative inline-block">
              Meet Our Faculty
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-transparent transition-all duration-1000 ${
                  isVisible ? "w-full" : "w-0"
                }`}
                style={{ animationDelay: "600ms" }}
              ></div>
            </span>
          </h2>

          <p
            className={`text-lg text-neutral-300 leading-relaxed mb-6 max-w-3xl mx-auto transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Under the guidance of our Faculty Co-ordinator, our faculty team
            blends expertise with dedication — shaping the minds of tomorrow
            through innovation, research, and unwavering commitment to
            excellence.
          </p>

          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <SectionCTA
              to="/faculty"
              label="View All Faculty →"
              variant="primary"
            />
          </div>
        </div>

        {/* HOD Section */}
        <div
          className={`flex justify-center transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredHod(true)}
            onMouseLeave={() => setHoveredHod(false)}
          >
            <div className="absolute inset-0 rounded-full border border-neutral-700/50 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full border border-neutral-600/30 animate-spin-reverse"></div>

            <div
              className={`absolute inset-4 rounded-full blur-xl transition-all duration-500 ${
                hoveredHod ? "bg-neutral-500/30" : "bg-neutral-600/10"
              }`}
            ></div>

            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-green-500/40 rounded-full animate-orbit"
                  style={{
                    animationDelay: `${i * 2}s`,
                    animationDuration: "6s",
                  }}
                />
              ))}
            </div>

            <div className="relative">
              <div
                className={`w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-neutral-700 via-neutral-600 to-neutral-800 rounded-full relative overflow-hidden border-4 border-neutral-800 group-hover:border-neutral-700 transition-all duration-500 transform ${
                  hoveredHod ? "scale-110 shadow-2xl" : "shadow-lg"
                }`}
              >
                <img
                  src={SatvikSir}
                  alt="Faculty Co-ordinator"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-4 transition-opacity duration-300 ${
                    hoveredHod ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center text-white">
                    <div className="text-sm font-semibold">
                      Faculty Co-ordinator
                    </div>
                    <div className="text-xs text-neutral-300 mt-1">
                      Leading Excellence
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-full border-2 border-green-500/30 animate-ping opacity-20"></div>
              </div>

              <div className="absolute -top-4 -left-4 bg-neutral-800 text-neutral-300 p-2 rounded-full border border-neutral-700 animate-bounce">
                <Award className="w-4 h-4" />
              </div>

              <div
                className="absolute -top-4 -right-4 bg-neutral-800 text-neutral-300 p-2 rounded-full border border-neutral-700 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <BookOpen className="w-4 h-4" />
              </div>

              
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 flex justify-center space-x-8 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1.2s" }}
        >
          {[
            { label: "Faculty Members", value: "25+" },
            { label: "Research Papers", value: "150+" },
            { label: "Years Experience", value: "20+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/30 hover:border-green-500/30 transition-all duration-300 hover:scale-105"
              style={{ transitionDelay: `${1.4 + index * 0.1}s` }}
            >
              <div className="text-xl font-bold text-green-400">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Decorative dots */}
        <div
          className={`mt-12 flex justify-center transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1.8s" }}
        >
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-green-500 to-neutral-600 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) translateX(0px);
              opacity: 0.3;
            }
            25% {
              transform: translateY(-15px) translateX(8px);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-8px) translateX(-8px);
              opacity: 0.3;
            }
            75% {
              transform: translateY(-20px) translateX(5px);
              opacity: 0.4;
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spin-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          @keyframes orbit {
            0% {
              transform: rotate(0deg) translateX(60px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(60px) rotate(-360deg);
            }
          }

          .animate-float {
            animation: float 8s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 25s linear infinite;
          }

          .animate-spin-reverse {
            animation: spin-reverse 18s linear infinite;
          }

          .animate-orbit {
            animation: orbit 6s linear infinite;
          }
        `}
      </style>
    </section>
  );
}

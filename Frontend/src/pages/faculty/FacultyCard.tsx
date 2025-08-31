import React from 'react';
import { Mail, Linkedin, Globe } from 'lucide-react';

export interface FacultyMember {
  id: number;
  name: string;
  title: string;
  department: string;
  specialization: string[];
  email: string;
  phone: string;
  profileImage: string;
  description: string;
  publications?: number;
  experience?: number;
  citations?: number;
  skills?: number;
  linkedinUrl?: string;
  websiteUrl?: string;
  googleScholarUrl?: string;
  // Additional fields for the new data
  patents?: string;
  projectPublications?: string;
  booksPublished?: string;
  internationalPublications?: string;
  organisations?: string;
  internationalConferences?: string;
  articles?: string;
  areasOfExpertise?: string; // New field for Shantanu Shahi
}

interface FacultyCardProps {
  faculty: FacultyMember;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto 
                    h-auto min-h-[20rem] md:min-h-[18rem] lg:min-h-[20rem] 
                    rounded-2xl overflow-hidden 
                    transition-all duration-300 ease-out 
                    hover:transform hover:scale-[1.02] 
                    hover:-translate-y-2
                    hover:shadow-2xl hover:shadow-green-400/20
                    cursor-pointer group mx-4 md:mx-auto">
      
      {/* Simple border on hover - no blinking */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 z-[0]
                      bg-gradient-to-r from-green-400/20 via-emerald-300/20 to-green-400/20 
                      shadow-lg"></div>
      
      {/* Content background - pure black */}
      <div className="absolute inset-[2px] rounded-2xl bg-black z-[10]"></div>
      
      {/* Inner gradient */}
      <div className="absolute inset-[2px] rounded-2xl z-[11] 
                      bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      {/* Content Layer */}
      <div className="relative z-20 h-full w-full 
                      p-4 md:p-6 lg:p-8 
                      flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 
                      text-white overflow-hidden">
        
        {/* Profile Section */}
        <div className="flex-shrink-0 
                        w-full md:w-32 lg:w-40 
                        flex md:flex-col items-center md:items-start 
                        gap-4 md:gap-4">
          
          {/* Profile Image Container - no blinking */}
          <div className="relative flex-shrink-0">
            <img 
              src={faculty.profileImage} 
              alt={faculty.name}
              className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 
                         rounded-xl md:rounded-2xl 
                         border-2 md:border-4 border-green-400/50 
                         object-cover transition-all duration-300 
                         group-hover:scale-105 md:group-hover:scale-110 
                         shadow-2xl contrast-110 saturate-110
                         group-hover:border-green-300/80 group-hover:shadow-green-400/40"
            />
            
            {/* Status indicator - no blinking */}
            <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 
                            w-4 h-4 md:w-5 md:h-5 
                            rounded-full border-2 md:border-3 border-white 
                            bg-green-400 shadow-lg shadow-green-400/50
                            group-hover:shadow-xl group-hover:shadow-green-400/80
                            transition-all duration-300">
              <div className="absolute inset-[2px] rounded-full bg-white/90"></div>
            </div>
          </div>

          {/* Mobile: Basic Info */}
          <div className="flex-1 md:hidden min-w-0">
            <h3 className="text-xl font-bold mb-1 text-gray-200 leading-tight truncate
                           group-hover:text-green-100 transition-colors duration-300">
              {faculty.name}
            </h3>
            <div className="text-sm font-semibold mb-1 truncate 
                            text-green-400 group-hover:text-green-300 transition-colors duration-300">
              {faculty.title}
            </div>
          </div>

          {/* Social Links - no blinking */}
          <div className="hidden md:flex flex-col gap-2 mt-2 lg:mt-4">
            {faculty.linkedinUrl && (
              <a 
                href={faculty.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 lg:p-2.5 bg-green-400/10 backdrop-blur-sm border border-green-400/30 
                           rounded-lg lg:rounded-xl transition-all duration-300 
                           hover:bg-green-400/25 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/30
                           hover:border-green-300/60 group/link overflow-hidden"
              >
                <Linkedin size={14} className="lg:w-4 lg:h-4 text-gray-300 group-hover/link:text-green-200 relative z-10 transition-colors duration-300" />
              </a>
            )}
            
            {/* Show website and Google Scholar for everyone except Shantanu (ID 4) */}
            {faculty.id !== 4 && faculty.websiteUrl ? (
              <a 
                href={faculty.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 lg:p-2.5 bg-green-400/10 backdrop-blur-sm border border-green-400/30 
                           rounded-lg lg:rounded-xl transition-all duration-300 
                           hover:bg-green-400/25 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/30
                           hover:border-green-300/60 group/link overflow-hidden"
              >
                <Globe size={14} className="lg:w-4 lg:h-4 text-gray-300 group-hover/link:text-green-200 relative z-10 transition-colors duration-300" />
              </a>
            ) : faculty.id !== 4 && faculty.googleScholarUrl && (
              <a 
                href={faculty.googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 lg:p-2.5 bg-green-400/10 backdrop-blur-sm border border-green-400/30 
                           rounded-lg lg:rounded-xl transition-all duration-300 
                           hover:bg-green-400/25 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/30
                           hover:border-green-300/60 group/link overflow-hidden"
              >
                <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 bg-gray-300 group-hover/link:bg-green-200 
                                transition-colors duration-300 rounded-sm text-xs 
                                flex items-center justify-center font-bold text-black relative z-10">
                  G
                </div>
              </a>
            )}
            
            {/* Show email for everyone except Shantanu (ID 4) */}
            {faculty.id !== 4 && (
              <a 
                href={`mailto:${faculty.email}`}
                className="relative p-2 lg:p-2.5 bg-green-400/10 backdrop-blur-sm border border-green-400/30 
                           rounded-lg lg:rounded-xl transition-all duration-300 
                           hover:bg-green-400/25 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/30
                           hover:border-green-300/60 group/link overflow-hidden"
              >
                <Mail size={14} className="lg:w-4 lg:h-4 text-gray-300 group-hover/link:text-green-200 relative z-10 transition-colors duration-300" />
              </a>
            )}
          </div>
        </div>

        {/* Right Section - Faculty Information */}
        <div className="flex-1 flex flex-col justify-between min-w-0 space-y-2 md:space-y-3">
          
          {/* Desktop Header Info */}
          <div className="hidden md:block min-w-0">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-1 lg:mb-2 
                           text-gray-200 leading-tight truncate drop-shadow-lg
                           group-hover:text-green-100 transition-colors duration-300">
              {faculty.name}
            </h3>
            <div className="text-base lg:text-lg xl:text-xl font-semibold mb-1 truncate 
                            text-green-400 group-hover:text-green-300 transition-colors duration-300">
              {faculty.title}
            </div>
            <p className="text-gray-400 text-sm lg:text-base mb-1 lg:mb-2 leading-relaxed truncate
                          group-hover:text-gray-300 transition-colors duration-300">
              {faculty.department}
            </p>
            <p className="text-gray-500 text-xs lg:text-sm leading-relaxed line-clamp-2 lg:line-clamp-3
                          group-hover:text-gray-400 transition-colors duration-300">
              {faculty.description}
            </p>
          </div>

          {/* Mobile Description */}
          <div className="md:hidden min-w-0">
            <p className="text-gray-400 text-sm mb-1 truncate
                          group-hover:text-gray-300 transition-colors duration-300">
              {faculty.department}
            </p>
            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2
                          group-hover:text-gray-400 transition-colors duration-300">
              {faculty.description}
            </p>
          </div>

          {/* Stats Section - Updated to show different metrics per faculty */}
          <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 justify-center md:justify-start py-2 md:py-3">
            {/* Dr. Satvik Vats - ID 1 */}
            {faculty.id === 1 && (
              <>
                {faculty.patents && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.patents}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Patents</div>
                  </div>
                )}
                {faculty.projectPublications && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.projectPublications}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
                  </div>
                )}
                {faculty.booksPublished && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.booksPublished}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Books</div>
                  </div>
                )}
                {faculty.internationalPublications && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.internationalPublications}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Intl Pubs</div>
                  </div>
                )}
                {faculty.organisations && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.organisations}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Orgs</div>
                  </div>
                )}
              </>
            )}

            {/* Dr. Shwet Ketu - ID 2 */}
            {faculty.id === 2 && (
              <>
                {faculty.patents && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.patents}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Patents</div>
                  </div>
                )}
                {faculty.internationalConferences && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.internationalConferences}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Intl Conf</div>
                  </div>
                )}
                {faculty.internationalPublications && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.internationalPublications}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Intl Pubs</div>
                  </div>
                )}
                {faculty.organisations && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.organisations}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Orgs</div>
                  </div>
                )}
              </>
            )}

            {/* Dr. Satya Prakash Yadav - ID 3 */}
            {faculty.id === 3 && (
              <>
                {faculty.articles && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.articles}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Articles</div>
                  </div>
                )}
                {faculty.citations && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.citations}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Citations</div>
                  </div>
                )}
                {faculty.experience && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.experience}+
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Years</div>
                  </div>
                )}
                {faculty.booksPublished && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.booksPublished}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Books</div>
                  </div>
                )}
                {faculty.organisations && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.organisations}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Orgs</div>
                  </div>
                )}
              </>
            )}

            {/* Dr. Shantanu Shahi - ID 4 */}
            {faculty.id === 4 && (
              <>
                {faculty.skills && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.skills}+
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Skills</div>
                  </div>
                )}
                {faculty.areasOfExpertise && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.areasOfExpertise}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Areas</div>
                  </div>
                )}
                {faculty.experience && (
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold 
                                    text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-lg">
                      {faculty.experience}+
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Years</div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Specialization Tags */}
          <div className="w-full overflow-hidden">
            <div className="flex flex-wrap gap-2 md:gap-2.5 justify-center md:justify-start pb-2 md:pb-0">
              {faculty.specialization.slice(0, 4).map((skill, index) => (
                <span 
                  key={index} 
                  className="relative bg-green-400/10 backdrop-blur-sm border border-green-400/25 
                             px-2.5 py-1.5 md:px-3 md:py-1.5 lg:px-4 lg:py-2 
                             rounded-lg md:rounded-xl lg:rounded-2xl 
                             text-xs md:text-xs lg:text-sm font-semibold 
                             transition-all duration-300 hover:bg-green-400/25 
                             hover:-translate-y-1 whitespace-nowrap text-gray-400 
                             shadow-lg hover:shadow-xl flex-shrink-0 hover:border-green-300/50
                             group-hover:border-green-400/40 overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-green-200 transition-colors duration-300">
                    {skill.length > 20 ? skill.substring(0, 18) + '...' : skill}
                  </span>
                </span>
              ))}
              {faculty.specialization.length > 4 && (
                <span className="bg-green-400/10 backdrop-blur-sm border border-green-400/25 
                                 px-2.5 py-1.5 md:px-3 md:py-1.5 lg:px-4 lg:py-2 
                                 rounded-lg md:rounded-xl lg:rounded-2xl 
                                 text-xs md:text-xs lg:text-sm 
                                 font-semibold text-gray-400 flex-shrink-0
                                 group-hover:text-green-200 transition-colors duration-300">
                  +{faculty.specialization.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Social Links */}
          <div className="flex md:hidden gap-3 justify-center pt-2 pb-1">
            {faculty.linkedinUrl && (
              <a 
                href={faculty.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-400/10 backdrop-blur-sm border border-green-400/25 
                           rounded-lg transition-all duration-300 hover:bg-green-400/25 flex-shrink-0
                           hover:border-green-300/50 hover:shadow-lg hover:shadow-green-400/30"
              >
                <Linkedin size={14} className="text-gray-300 hover:text-green-200 transition-colors duration-300" />
              </a>
            )}
            
            {/* Show website and Google Scholar for everyone except Shantanu (ID 4) */}
            {faculty.id !== 4 && faculty.websiteUrl ? (
              <a 
                href={faculty.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-400/10 backdrop-blur-sm border border-green-400/25 
                           rounded-lg transition-all duration-300 hover:bg-green-400/25 flex-shrink-0
                           hover:border-green-300/50 hover:shadow-lg hover:shadow-green-400/30"
              >
                <Globe size={14} className="text-gray-300 hover:text-green-200 transition-colors duration-300" />
              </a>
            ) : faculty.id !== 4 && faculty.googleScholarUrl && (
              <a 
                href={faculty.googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-400/10 backdrop-blur-sm border border-green-400/25 
                           rounded-lg transition-all duration-300 hover:bg-green-400/25 flex-shrink-0
                           hover:border-green-300/50 hover:shadow-lg hover:shadow-green-400/30"
              >
                <div className="w-3.5 h-3.5 bg-gray-300 hover:bg-green-200 transition-colors duration-300
                                rounded-sm text-xs flex items-center justify-center font-bold text-black">
                  G
                </div>
              </a>
            )}
            
            {/* Show email for everyone except Shantanu (ID 4) */}
            {faculty.id !== 4 && (
              <a 
                href={`mailto:${faculty.email}`}
                className="p-2 bg-green-400/10 backdrop-blur-sm border border-green-400/25 
                           rounded-lg transition-all duration-300 hover:bg-green-400/25 flex-shrink-0
                           hover:border-green-300/50 hover:shadow-lg hover:shadow-green-400/30"
              >
                <Mail size={14} className="text-gray-300 hover:text-green-200 transition-colors duration-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;

import React from 'react';
import { GraduationCap, Calendar, School } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-16 sm:py-24 bg-transparent">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs sm:text-sm">
            <GraduationCap className="w-4 h-4" />
            Education
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Academic Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Building a strong foundation in computer science with a focus on modern software engineering practices.
          </p>
        </div>

        {/* Timeline/Card */}
        <div className="relative">
          {/* timeline line for large screens */}
          <div className="hidden sm:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/20 to-white/10" aria-hidden="true" />

          <div className="sm:pl-16">
            <article className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.35)]">
              {/* corner gradient */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
              </div>

              <div className="p-5 sm:p-8">
                {/* top row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/30 text-blue-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white">MCA in Computer Science</h3>
                      <p className="text-xs sm:text-sm text-gray-400">Vivekananda Global University</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-blue-300/90 bg-blue-600/10 border border-blue-400/20 px-3 py-1.5 rounded-full w-max">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs sm:text-sm font-medium">2025 – Present • Ongoing</span>
                  </div>
                </div>

                {/* divider */}
                <div className="my-5 border-t border-white/10" />

                {/* details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="md:col-span-2 space-y-3">
                    <h4 className="text-white font-semibold text-sm">Focus Areas</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Software Development, Full-Stack Engineering, and Research. Emphasis on scalable web architectures,
                      clean code, and modern tooling across the stack.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        'Software Development',
                        'Full-Stack Engineering',
                        'APIs & Microservices',
                        'System Design',
                        'Databases',
                        'Research & Innovation',
                      ].map((chip) => (
                        <span
                          key={chip}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 text-blue-200"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-semibold text-sm">Institution</h4>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="mt-0.5 text-purple-300">
                        <School className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white">Vivekananda Global University</p>
                        <p className="text-xs text-gray-400">Jaipur, Rajasthan, India</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      Program: Master of Computer Applications (MCA)
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COVERAGE_AREAS } from '@/lib/data';

export default function CoverageMap() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<SVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const activeArea = COVERAGE_AREAS.find((a) => a.id === hoveredArea);

  return (
    <section id="coverage" className="py-20 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-bg-secondary rounded-2xl p-4 overflow-hidden">
              <svg
                viewBox="0 0 420 440"
                className="w-full"
                onMouseMove={handleMouseMove}
                aria-label="Map of Nottingham coverage areas"
                role="img"
              >
                {/* Background */}
                <rect width="420" height="440" fill="#F0EDE6" rx="12"/>

                {/* River Trent suggestion */}
                <path
                  d="M60,300 Q120,310 180,305 Q240,300 300,308 Q340,313 380,320"
                  stroke="#B8D4E8"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <text x="120" y="328" fill="#94B4C8" fontSize="9" fontFamily="system-ui" opacity="0.7">River Trent</text>

                {COVERAGE_AREAS.map((area) => {
                  const isHovered = hoveredArea === area.id;
                  return (
                    <g key={area.id}>
                      <motion.path
                        d={area.path}
                        fill={isHovered ? '#C8956C' : '#2C3E2D'}
                        fillOpacity={isHovered ? 0.5 : 0.18}
                        stroke={isHovered ? '#C8956C' : '#2C3E2D'}
                        strokeWidth={isHovered ? 1.5 : 1}
                        strokeOpacity={isHovered ? 0.8 : 0.35}
                        animate={{
                          fillOpacity: isHovered ? 0.5 : 0.18,
                          strokeOpacity: isHovered ? 0.8 : 0.35,
                        }}
                        transition={{ duration: 0.2 }}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredArea(area.id)}
                        onMouseLeave={() => setHoveredArea(null)}
                        rx="3"
                      />
                      <text
                        x={area.labelX}
                        y={area.labelY}
                        textAnchor="middle"
                        fill={isHovered ? '#8B5E3C' : '#2C3E2D'}
                        fontSize="9"
                        fontFamily="system-ui"
                        fontWeight={isHovered ? '600' : '400'}
                        opacity={isHovered ? 1 : 0.65}
                        className="pointer-events-none select-none"
                      >
                        {area.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredArea && activeArea && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute pointer-events-none bg-bg-dark text-text-on-dark px-3 py-2 rounded-lg text-xs shadow-lg z-10 whitespace-nowrap"
                    style={{
                      left: tooltipPos.x + 12,
                      top: tooltipPos.y - 40,
                    }}
                  >
                    <p className="font-medium">{activeArea.name}</p>
                    <p className="text-text-on-dark/60">{activeArea.count} projects completed</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-4 text-xs text-text-secondary">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-primary opacity-40 border border-primary/40" />
                <span>Coverage area</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-accent opacity-50 border border-accent/60" />
                <span>Hover to explore</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Where we work</p>
            <h2 className="font-display text-text-primary mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
              Based in Nottingham.<br />Working within 20 miles.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              We take on projects across Nottingham city and the surrounding areas. Close enough to be on site quickly, local enough to know our suppliers and sub-contractors personally.
            </p>

            {/* Area list for accessibility */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2" aria-label="Areas we cover">
              {COVERAGE_AREAS.map((area) => (
                <div key={area.id} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-text-secondary">{area.name}</span>
                  <span className="text-text-secondary/40 text-xs ml-auto">{area.count}</span>
                </div>
              ))}
            </div>

            <p className="text-text-secondary/50 text-xs mt-6">
              Outside the area? Get in touch anyway, we may be able to help.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

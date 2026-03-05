'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/lib/data';
import type { Project } from '@/lib/types';

const FILTERS = [
  { id: 'all', label: 'All projects' },
  { id: 'kitchen', label: 'Kitchens' },
  { id: 'bathroom', label: 'Bathrooms' },
  { id: 'utility', label: 'Utility rooms' },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl bg-bg-secondary cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-bg-dark/0 group-hover:bg-bg-dark/50 transition-colors duration-300 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 0 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-5 py-2.5 rounded-full text-text-primary text-sm font-medium flex items-center gap-2"
          >
            View project <span aria-hidden>&#8594;</span>
          </motion.div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-text-primary text-lg mb-1 leading-snug">{project.title}</h3>
        <div className="flex items-center gap-1.5 text-text-secondary text-xs mb-3">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1C4 1 2.5 2.5 2.5 4.5C2.5 7 6 11 6 11C6 11 9.5 7 9.5 4.5C9.5 2.5 8 1 6 1Z" stroke="currentColor" strokeWidth="1"/>
            <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1"/>
          </svg>
          {project.location}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white border border-black/8 text-text-secondary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <div className="bg-bg-dark pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">Our work</p>
          <h1 className="font-display text-text-on-dark mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Projects we&apos;re proud of.
          </h1>
          <p className="text-text-on-dark/60 max-w-xl leading-relaxed">
            Every project is different. Browse our completed work across kitchens, bathrooms, and utility rooms across Nottingham.
          </p>
        </div>
      </div>

      <div className="bg-bg-primary py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`h-10 px-5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white border border-black/10 text-text-secondary hover:border-primary/30 hover:text-text-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-text-secondary text-center py-20">No projects in this category yet.</p>
          )}
        </div>
      </div>

      {/* CTA strip */}
      <div className="bg-bg-secondary py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-text-primary text-2xl mb-1">Seen something you like?</h2>
            <p className="text-text-secondary">Let&apos;s talk about your project. No obligation, no hard sell.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-12 px-7 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-all duration-200 hover:scale-[1.02] flex-shrink-0"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </>
  );
}

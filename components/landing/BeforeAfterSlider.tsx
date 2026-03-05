'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  aspectRatio?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before renovation',
  afterAlt = 'After renovation',
  aspectRatio = '4/3',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const getPositionFromEvent = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return 50;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    return Math.max(0, Math.min(100, (x / rect.width) * 100));
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    setPosition(getPositionFromEvent(e.clientX));
  }, [getPositionFromEvent]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setPosition(getPositionFromEvent(touch.clientX));
  }, [getPositionFromEvent]);

  const handleContainerClick = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) {
      setPosition(getPositionFromEvent(e.clientX));
    }
  }, [getPositionFromEvent]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl cursor-col-resize select-none"
      style={{ aspectRatio }}
      onClick={handleContainerClick}
      onTouchMove={handleTouchMove}
      aria-label="Before and after comparison slider"
    >
      {/* After image (bottom layer, full width) */}
      <div className="absolute inset-0">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm text-text-on-dark text-xs font-medium px-3 py-1.5 rounded-full">
          After
        </div>
      </div>

      {/* Before image (top layer, clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-bg-dark/80 backdrop-blur-sm text-text-on-dark text-xs font-medium px-3 py-1.5 rounded-full">
          Before
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center z-10 touch-none"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchStart={(e) => e.stopPropagation()}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 5));
          if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 5));
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 6L3 10L7 14" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 6L17 10L13 14" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

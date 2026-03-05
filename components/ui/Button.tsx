'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const VARIANT_CLASSES = {
  primary: 'bg-accent text-white hover:bg-accent/90',
  secondary: 'border border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-primary hover:bg-primary/8',
};

export default function Button({ variant = 'primary', href, onClick, children, className = '', type = 'button' }: ButtonProps) {
  const classes = `inline-flex items-center justify-center h-11 px-6 rounded-full font-medium text-sm transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>{children}</Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}

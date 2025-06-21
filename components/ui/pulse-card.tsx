import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  variant?: 'emerald' | 'blue' | 'purple' | 'amber' | 'rose';
  size?: 'sm' | 'md' | 'lg';
  glowEffect?: boolean;
  hoverScale?: number;
  interactive?: boolean;
  showGridLines?: boolean;
}

// All variants use green-300 and green-400 for a unified green theme
export const VARIANTS = {
  emerald: {
    accent: 'green-300',
    gradient: 'from-green-300/20 to-green-300/0',
    shine:
      '205deg, transparent 0deg, hsl(144deg 60% 70%) 20deg, hsl(144deg 60% 85% / 0.3) 280deg',
    border: 'green-300/20',
    color: 'rgb(134 239 172)', // Tailwind green-300
  },
  blue: {
    accent: 'green-400',
    gradient: 'from-green-400/20 to-green-400/0',
    shine:
      '205deg, transparent 0deg, hsl(144deg 60% 60%) 20deg, hsl(144deg 60% 85% / 0.3) 280deg',
    border: 'green-400/20',
    color: 'rgb(74 222 128)', // Tailwind green-400
  },
  purple: {
    accent: 'green-300',
    gradient: 'from-green-300/20 to-green-300/0',
    shine:
      '205deg, transparent 0deg, hsl(144deg 60% 70%) 20deg, hsl(144deg 60% 85% / 0.3) 280deg',
    border: 'green-300/20',
    color: 'rgb(134 239 172)',
  },
  amber: {
    accent: 'green-400',
    gradient: 'from-green-400/20 to-green-400/0',
    shine:
      '205deg, transparent 0deg, hsl(144deg 60% 60%) 20deg, hsl(144deg 60% 85% / 0.3) 280deg',
    border: 'green-400/20',
    color: 'rgb(74 222 128)',
  },
  rose: {
    accent: 'green-300',
    gradient: 'from-green-300/20 to-green-300/0',
    shine:
      '205deg, transparent 0deg, hsl(144deg 60% 70%) 20deg, hsl(144deg 60% 85% / 0.3) 280deg',
    border: 'green-300/20',
    color: 'rgb(134 239 172)',
  },
};

const SIZES = {
  sm: {
    padding: 'p-6 pt-12',
    iconSize: 'h-5 w-5',
    titleSize: 'text-sm',
    descSize: 'text-xs',
  },
  md: {
    padding: 'p-8 pt-16',
    iconSize: 'h-6 w-6',
    titleSize: 'text-base',
    descSize: 'text-[15px]',
  },
  lg: {
    padding: 'p-6 pt-16',
    iconSize: 'h-7 w-7',
    titleSize: 'text-lg',
    descSize: 'text-base',
  },
};

export function CardHoverEffect({
  icon,
  title,
  description,
  className,
  variant = 'emerald',
  size = 'md',
  glowEffect = false,
  hoverScale = 1.02,
  interactive = true,
}: CardProps) {
  const variantConfig = VARIANTS[variant];
  const sizeConfig = SIZES[size];

  const Div = interactive ? motion.div : 'div';
  const IconWrapper = interactive ? motion.span : 'span';

  return (
    <Div
      whileHover={interactive ? { scale: hoverScale } : undefined}
      transition={{ duration: 0.3, ease: 'easeInOut', type: 'keyframes' }}
      className={cn(
        'group relative z-30 w-full cursor-pointer overflow-hidden rounded-2xl',
        sizeConfig.padding,
        // Set background to green-950 and text to white
        'bg-green-950 text-white',
        // Remove old bg-white/80 and dark:bg-black/5
        // Light/dark mode overlays (optional, can be removed if not needed)
        'before:bg-linear-to-b before:from-white/5 before:to-white/20 before:backdrop-blur-3xl',
        'after:bg-linear-to-b after:from-transparent after:via-transparent after:to-white/20',
        // Common styles
        "before:absolute before:inset-0 before:rounded-[inherit] before:content-['']",
        "after:absolute after:inset-0 after:rounded-[inherit] after:content-['']",
        glowEffect && `hover:before:bg-${variantConfig.accent}/10`,
        // Shadows
        'shadow-[0px_3px_8px_rgba(0,0,0,0.04),0px_12px_20px_rgba(0,0,0,0.08)]',
        'hover:shadow-[0px_5px_15px_rgba(0,0,0,0.03),0px_25px_35px_rgba(0,0,0,0.2)]',
        className,
      )}
      style={
        {
          '--card-color': variantConfig.color,
        } as React.CSSProperties
      }
    >
      {/* Moving Border */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[inherit]"
        style={{
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          padding: '2px',
        }}
      >
        <div
          className="absolute inset-[-200%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 340deg, var(--card-color) 360deg)`,
            animation: 'spin 4s linear infinite',
          }}
        />
      </div>

      {/* Icon */}
      <IconWrapper
        className="relative z-50 table rounded-xl pb-2"
        whileHover={interactive ? { scale: 1.1 } : undefined}
        transition={{ duration: 0.3, ease: 'easeInOut', type: 'keyframes' }}
      >
        <span
          className={cn(
            'absolute inset-[4.5px] rounded-[inherit]',
            'bg-linear-to-b from-black/5 to-black/10 backdrop-blur-3xl',
            'dark:from-white/10 dark:to-white/5',
            'transition-all duration-300',
          )}
        />
        <span
          className={cn(
            'z-1 relative block transition-colors duration-300',
            'text-black/60 group-hover:text-[var(--card-color)]',
            'dark:text-zinc-400',
            sizeConfig.iconSize,
          )}
        >
          {icon}
        </span>
      </IconWrapper>

      {/* Content */}
      <div className="relative z-30 mt-2">
        <h3
          className={cn(
            'font-medium transition-colors duration-300',
            'text-white group-hover:text-[var(--card-color)]',
            sizeConfig.titleSize,
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            'mt-1 transition-colors duration-300',
            'text-white/80',
            sizeConfig.descSize,
          )}
        >
          {description}
        </p>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 z-20 overflow-hidden rounded-[inherit] opacity-100 transition-all duration-500">
        <div
          className="absolute bottom-[55%] left-1/2 aspect-square w-[200%] -translate-x-1/2 rounded-[50%]"
          style={{
            background: `conic-gradient(from ${variantConfig.shine}, transparent 360deg)`,
            filter: 'blur(40px)',
          }}
        />
      </div>
    </Div>
  );
}
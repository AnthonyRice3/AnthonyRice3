'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import { CardHoverEffect } from '@/components/ui/pulse-card';
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
} from 'lucide-react';

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}

const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};

const defaultValues: AboutUsProps['values'] = [
  {
    title: 'Music',
    description:
      'In my free time, I enjoy composing, listening to, and exploring a wide range of music genres as a creative outlet.',
    icon: 'Lightbulb',
  },
  {
    title: 'Travel',
    description:
      'I have a passion for travel, using it as an opportunity to experience new cultures, gain perspective, and recharge creatively.',
    icon: 'Users',
  },
  {
    title: 'Fitness',
    description:
      'I stay committed to fitness through regular training and exercise, valuing both the mental clarity and discipline it builds over time.',
    icon: 'Sparkles',
  },
  {
    title: 'Gaming',
    description:
      "I game to relax, connect with friends, and challenge myself. Occcasionally I may have a live stream going it's a fun way to unwind and stay sharp.",
    icon: 'Globe',
  },
];

export default function Interests() {
  const aboutData = {
    title: 'About Us',
    subtitle:
      '',
    mission:
      'I have always been drawn to visual creativity from design and illustration to storytelling, art helps me express ideas beyond words.',
    vision:
      'I’m fascinated by how technology shapes the world. Whether it’s coding, cybersecurity, or systems thinking, I love solving real problems with it.',
    values: defaultValues,
    className: 'relative overflow-hidden py-20',
  };

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden pt-20">
      

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header Section */}
       

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-amber-to-amber-100 to-transparent"
              />

              <div className="mb-6 inline-flex aspect-square h-16 w-16 flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-200 backdrop-blur-sm">
                <Rocket className="h-8 w-8 text-amber-to-amber-100" />
              </div>

              <div className="space-y-4">
                <h2 className="mb-4 bg-gradient-to-r from-amber-400/90 to-amber-100 bg-clip-text text-3xl font-bold text-transparent">
                  ART
                </h2>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-green-300/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-300/20 to-green-300/5 backdrop-blur-sm">
                <Target className="h-8 w-8 text-green-300" />
              </div>

              <h2 className="mb-4 bg-gradient-to-r from-green-300/90 to-green-300/70 bg-clip-text text-3xl font-bold text-transparent">
                TECH
              </h2>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            
            <p className="mx-auto mt-4 max-w-2xl text-2xl text-muted-foreground">
              Just A Few Things I Enjoy to do In My Free Time!
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              const IconComponent = iconComponents[value.icon];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0
                        ? 'purple'
                        : index === 1
                          ? 'blue'
                          : index === 2
                            ? 'amber'
                            : 'rose'
                    }
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

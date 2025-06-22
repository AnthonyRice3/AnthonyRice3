import {
  Building2,
  Lightbulb,
  ScreenShare,
  Trophy,
  User,
  User2,
  LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: 'left' | 'right';
  cornerStyle?: string;
};

const leftFeatures: FeatureItem[] = [
  {
    icon: Building2,
    title: 'DevSecOps (SAST, DAST & SCA)',
    description:
      'I embed automated security checks into development pipelines, catching vulnerabilities early in the lifecycle.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: User2,
    title: 'Web Technologies (HTML, CSS, JavaScript, React, Node.js)',
    description:
      'I build responsive, interactive web interfaces and backends, balancing performance, usability, and secure architecture.',
    position: 'left',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Trophy,
    title: 'API Security (RESTful, OAuth2, JWT)',
    description:
      'I implement secure authentication and authorization protocols to protect data exchanged across application endpoints.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: ScreenShare,
    title: 'SDLC Models (CI/CD, Spiral & Agile)',
    description:
      'I integrate security within agile workflows and CI/CD pipelines to ensure safe, continuous product delivery.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: User,
    title: 'Blockchain (Defi, DApps & Smart Contracts)',
    description:
      'I architect and develop decentralized applications, leveraging smart contracts to enable secure, transparent, permissionless financial systems.',
    position: 'right',
    cornerStyle: 'sm:translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Lightbulb,
    title: ' Audio & Video Production (IPTV)',
    description:
      'I design and deploy secure, high-quality multimedia content systems for broadcast, streaming, and post-production workflows.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-tl-[2px]',
  },
];

const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          'relative rounded-2xl px-4 pb-4 pt-4 text-sm',
          'bg-green-950 ring-1 ring-green-300/30',
          feature.cornerStyle,
        )}
      >
        <div className="mb-3 text-[2rem] text-green-300">
          <Icon />
        </div>
        <h2 className="mb-2.5 text-2xl text-white">{feature.title}</h2>
        <p className="text-pretty text-base text-green-100/80">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-green-300/0 via-green-300 to-green-300/0 opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,rgba(134,239,172,0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

export default function SkillsCards() {
  return (
    <section className="pb-8 pt-20" id="features">
      <div className="mx-6 max-w-[1120px] pb-16 pt-2 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            
            <h2 className="mb-2 text-center text-2xl text-green-100 sm:mb-2.5 md:text-[2rem]">
              Keys to My Success
            </h2>
            <p className="mx-auto max-w-[18rem] text-pretty text-center text-green-300/70">
              Practical Skills in Action: <span className='text-white'> How I Apply My Technical Expertise!</span>
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
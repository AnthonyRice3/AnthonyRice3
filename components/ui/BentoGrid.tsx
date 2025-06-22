import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string | StaticImageData; 
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-green-950 p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {img && (
        <Image
          src={img}
          height={200} 
          width={400}  
          alt={typeof title === "string" ? title : "Bento grid image"}
          className="rounded-lg flex flex-1 w-full h-full min-h-[6rem] "
        />
      )}

      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-white dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-white dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
import { ReactNode } from "react";

interface SectionProps {
  id: string; // Add the id prop
  title: string;
  children: ReactNode;
  className?: string; // Make className optional
}

const Section = ({ id, title, children, className }: SectionProps) => {
  return (
    <section id={id} className={`container mx-auto py-8 ${className || ""}`}>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{title}</h2>
      <div className="text-gray-600 dark:text-gray-300">{children}</div>
    </section>
  );
};

export default Section;

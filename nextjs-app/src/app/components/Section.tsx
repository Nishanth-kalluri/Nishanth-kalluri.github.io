import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{title}</h2>
      <div className="text-gray-600 dark:text-gray-300">{children}</div>
    </section>
  );
};

export default Section;

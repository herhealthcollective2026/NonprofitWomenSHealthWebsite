import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = "", hover = false, onClick }: CardProps) {
  const baseStyles = "bg-card rounded-xl p-6 shadow-sm border border-border";
  const hoverStyles = hover ? "hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1" : "";
  const clickable = onClick ? "cursor-pointer" : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${clickable} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

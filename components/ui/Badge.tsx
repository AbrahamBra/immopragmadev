interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "violet" | "success" | "warning";
  className?: string;
}

const variantStyles = {
  cyan: "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
  violet: "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/20",
  success: "bg-accent-success/10 text-accent-success border-accent-success/20",
  warning: "bg-accent-warning/10 text-accent-warning border-accent-warning/20",
};

export default function Badge({
  children,
  variant = "cyan",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

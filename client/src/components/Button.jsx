const variantClasses = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-white text-slate-700 border border-border-subtle hover:bg-slate-50",
  ghost: "text-brand hover:bg-blue-50",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}

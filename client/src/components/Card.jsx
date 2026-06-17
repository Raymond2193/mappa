export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-surface rounded-xl border border-border-subtle shadow-sm p-4 ${className}`}>
      {children}
    </div>
  );
}

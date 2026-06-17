export default function Input({
  label,
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
}) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-xs font-medium text-slate-600 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full rounded-md border border-border-subtle bg-surface px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand disabled:bg-slate-50 disabled:text-slate-400"
      />
    </div>
  );
}

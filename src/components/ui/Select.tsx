import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Select.tsx — accessible wrapper around a native <select>.
 *
 * Same surface contract as Input (rounded-input, token border, paper bg, ink
 * text, steel placeholder-equivalent via the first disabled option). Focus →
 * border brand-bright + global focus-visible outline. Errors in bronze.
 *
 * Native <select> is used (not a custom listbox) for keyboard accessibility,
 * mobile-native picker, and zero-JS reliability.
 */

export type SelectProps = {
  id?: string;
  label?: string;
  error?: string;
  hint?: string;
  className?: string;
  /** Optional placeholder shown as the first, disabled option. */
  placeholder?: string;
  children: React.ReactNode;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id" | "className">;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { id, label, error, hint, className, placeholder, children, ...rest },
  ref,
) {
  const selectId = id ?? rest.name;
  const describedBy = [hint ? `${selectId}-hint` : null, error ? `${selectId}-error` : null]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label htmlFor={selectId} className="text-small font-medium text-ink">
          {label}
        </label>
      ) : null}

      <select
        id={selectId}
        ref={ref}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "rounded-input border bg-paper px-3.5 py-2.5 text-body text-ink transition-colors duration-200 ease-smooth focus:border-brand-bright focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-bright focus-visible:outline-offset-2",
          error && "border-bronze focus:border-bronze focus-visible:outline-bronze",
          className,
        )}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {children}
      </select>

      {hint && !error ? (
        <p id={`${selectId}-hint`} className="text-caption text-steel">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p id={`${selectId}-error`} className="text-caption text-bronze" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
});

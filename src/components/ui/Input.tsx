import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Input.tsx — accessible text input.
 *
 * Surface: rounded-input, token border, paper background, ink text, steel
 * placeholder. Focus → border brand-bright (plus the global focus-visible outline).
 * Errors render in bronze to stay on-palette (the brief asks to prefer bronze
 * over an invented red).
 *
 * Forwarded ref so parent forms can drive focus / validation.
 */

export type InputProps = {
  id?: string;
  label?: string;
  error?: string;
  hint?: string;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "className">;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, error, hint, className, ...rest },
  ref,
) {
  const inputId = id ?? rest.name;
  const describedBy = [hint ? `${inputId}-hint` : null, error ? `${inputId}-error` : null]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label htmlFor={inputId} className="text-small font-medium text-ink">
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        ref={ref}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "rounded-input border bg-paper px-3.5 py-2.5 text-body text-ink transition-colors duration-200 ease-smooth placeholder:text-steel focus:border-brand-bright focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-bright focus-visible:outline-offset-2",
          error && "border-bronze focus:border-bronze focus-visible:outline-bronze",
          className,
        )}
        {...rest}
      />

      {hint && !error ? (
        <p id={`${inputId}-hint`} className="text-caption text-steel">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p id={`${inputId}-error`} className="text-caption text-bronze" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
});

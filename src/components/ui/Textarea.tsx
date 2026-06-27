import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Textarea.tsx — accessible multiline input.
 *
 * Same surface contract as Input (rounded-input, token border, paper bg, ink
 * text, steel placeholder). Focus → border brand-bright + global focus-visible
 * outline. Errors in bronze. Defaults to a comfortable 4-row min height and
 * allows vertical resize only (keeps layout stable horizontally).
 */

export type TextareaProps = {
  id?: string;
  label?: string;
  error?: string;
  hint?: string;
  className?: string;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "className">;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { id, label, error, hint, className, rows = 4, ...rest },
  ref,
) {
  const areaId = id ?? rest.name;
  const describedBy = [hint ? `${areaId}-hint` : null, error ? `${areaId}-error` : null]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label htmlFor={areaId} className="text-small font-medium text-ink">
          {label}
        </label>
      ) : null}

      <textarea
        id={areaId}
        ref={ref}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "resize-y rounded-input border bg-paper px-3.5 py-2.5 text-body text-ink transition-colors duration-200 ease-smooth placeholder:text-steel focus:border-brand-bright focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-bright focus-visible:outline-offset-2",
          error && "border-bronze focus:border-bronze focus-visible:outline-bronze",
          className,
        )}
        {...rest}
      />

      {hint && !error ? (
        <p id={`${areaId}-hint`} className="text-caption text-steel">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p id={`${areaId}-error`} className="text-caption text-bronze" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
});

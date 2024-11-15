import clsx from 'clsx';
import { useMemo, useState, type ComponentProps } from 'react';
import { getLength, isTooLong } from './get-length';

type TextAreaProps = ComponentProps<'textarea'> & { label: string };

export const TextArea = ({ label, required, maxLength, ...props }: TextAreaProps) => {
  const [value, setValue] = useState(props.value ?? '');
  const tooLong = useMemo(() => isTooLong(value, maxLength), [value, maxLength]);
  const length = useMemo(() => getLength(value), [value]);

  return (
    <label className="flex flex-col gap-1.5">
      <span
        className={clsx(
          'inline-flex items-center gap-1 text-sm font-medium',
          required && 'after:h-1.5 after:w-1.5 after:rounded-full after:bg-accent-500',
        )}
      >
        {label}
      </span>

      <textarea
        className={clsx(
          'min-h-[200px] w-full min-w-[300px] max-w-[500px] gap-2 rounded-md bg-transparent bg-white p-4 text-sm placeholder-slate-400 shadow-sm ring-1 ring-inset ring-slate-500 invalid:bg-danger-50 focus:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:cursor-not-allowed disabled:bg-slate-50 dark:bg-slate-800 dark:placeholder-slate-300',
          tooLong && 'ring-2 ring-danger-700 dark:ring-danger-800',
        )}
        {...props}
        onChange={(e) => {
          setValue(e.target.value);
          if (typeof props.onChange === 'function') props.onChange(e);
        }}
        value={value}
        required={required}
        aria-invalid={tooLong}
      />

      {maxLength && (
        <div className="gap-1.4 flex justify-end text-xs">
          <p
            className={clsx(
              tooLong
                ? 'text-danger-600 dark:text-danger-300'
                : 'test-slate-500 dark:text-slate-100',
            )}
          >
            <span data-testid="length">{length}</span>/{maxLength}
          </p>
        </div>
      )}
    </label>
  );
};

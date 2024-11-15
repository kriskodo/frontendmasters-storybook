import { cva, VariantProps } from 'class-variance-authority';

export type ButtonProps = VariantProps<typeof buttonVariants>;

const kind = {
  primary: [
    'bg-primary-600',
    'hover:bg-primary-700',
    'active:bg-primary-800',
    'disabled:bg-primary-200',
  ],
  secondary: [
    'bg-secondary-700',
    'text-white',
    'hover:bg-secondary-700',
    'active:bg-secondary-800',
    'disabled:bg-secondary-200',
  ],
  destructive: [
    'bg-danger-600',
    'hover:bg-danger-700, active:bg-danger-800',
    'disabled:bg-danger-200',
  ],
  ghost: [
    'bg-slate-500',
    'hover:bg-slate-600',
    'text-secondary-50',
    'hover:text-slate-950',
    'active:text-slate-800',
    'disabled:bg-slate-200',
  ],
};

const size = {
  small: ['text-sm', 'px-2', 'py-1'],
  medium: ['text-base', 'px-3', 'py-1.5'],
  large: ['text-lg', 'px-4', 'py-2'],
};

export const buttonVariants = cva(
  [
    'items-center',
    'cursor-pointer',
    'inline-flex',
    'gap-1.5',
    'rounded-md',
    'border',
    'border-transparent',
    'px-2.5',
    'py-1.5',
    'font-semibold',
    'text-white',
    'shadow-sm',
    'transition-colors',
    'disabled:text-slate-950',
  ],
  {
    variants: {
      kind,
      size,
    },
    defaultVariants: { kind: 'primary', size: 'medium' },
  },
);

export const buttonKinds = Object.keys(kind);
export const buttonSizes = Object.keys(size);

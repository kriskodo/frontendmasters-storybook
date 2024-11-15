import { cva, VariantProps } from 'class-variance-authority';

export type ButtonProps = VariantProps<typeof buttonVariants>;
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
      kind: {
        primary: [
          'bg-primary-600',
          'hover:bg-primary-700, active:bg-primary-800',
          'disabled:bg-primary-200',
        ],
        secondary: [
          'bg-secondary-600',
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
          'bg-slate-400',
          'hover:bg-slate-500',
          'text-primary-600',
          'hover:text-slate-950',
          'active:text-slate-800',
          'disabled:bg-slate-200',
        ],
      },
      size: {
        small: ['text-sm', 'px-2', 'py-1'],
        medium: ['text-base', 'px-3', 'py-1.5'],
        large: ['text-lg', 'px-4', 'py-2'],
      },
    },
    defaultVariants: { kind: 'primary', size: 'medium' },
  },
);

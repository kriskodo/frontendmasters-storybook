import { cva, type VariantProps } from 'class-variance-authority';

const color = {
  primary: [
    'border-primary-500',
    'bg-primary-100',
    'dark:bg-primary-800',
    'dark:border-primary-900',
  ],
  success: [
    'bg-success-100',
    'border-success-500',
    'dark:bg-success-800',
    'dark:bg-success-800, dark:border-success-900',
  ],
  danger: ['bg-danger-100', 'border-danger-500', 'dark:bg-danger-800', 'dark:border-danger-900'],
  information: [
    'bg-information-100',
    'border-information-500',
    'dark:bg-information-800',
    'dark:border-information-900',
  ],
  warning: [
    'bg-warning-100',
    'border-warning-500',
    'dark:bg-warning-800',
    'dark:border-warning-900',
  ],
} as const;

const size = {
  small: ['w-[240px]', 'h-[480px]', 'text-sm'],
  medium: ['w-[324px]', 'h-[480px]', 'text-md'],
  large: ['w-[360px]', 'text-lg'],
};

export type CalloutProps = VariantProps<typeof variants>;
export const variants = cva(
  [
    'p-4',
    'gap-4',
    'border-purple-600',
    'rounded-md',
    'border',
    'text-bg-primary-900',
    'dark:text-bg-primary-50',
  ],
  {
    variants: {
      color,
      size,
    },
    defaultVariants: { color: 'primary', size: 'medium' },
  },
);

export const colorVariants = Object.keys(color);
export const sizeVariants = Object.keys(size);

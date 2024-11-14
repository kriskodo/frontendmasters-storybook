import clsx from 'clsx';
import styles from './button.module.css';

export type ButtonProps = React.ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'destructive' | 'ghost';
  size: 'small' | 'medium' | 'large';
};

export const Button = (props: ButtonProps) => {
  const { variant = 'primary', size = 'medium', className, ...rest } = props;
  return (
    <button className={clsx(styles.button, styles[variant], styles[size], className)} {...rest} />
  );
};

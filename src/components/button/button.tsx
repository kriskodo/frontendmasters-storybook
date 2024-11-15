import { ButtonProps, buttonVariants } from './button.variants';

export type Props = React.ComponentProps<'button'> & ButtonProps;

export const Button = (props: Props) => {
  const { kind = 'primary', size = 'medium', className, ...rest } = props;
  return <button className={buttonVariants({ kind, size, className })} {...rest} />;
};

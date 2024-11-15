import { ComponentProps } from 'react';
import { CalloutProps, variants } from './callout.variants';

type Props = { title: string } & ComponentProps<'div'> & CalloutProps;

export const Callout: React.FunctionComponent<Props> = ({
  title,
  color = 'primary',
  size = 'medium',
  children,
  ...rest
}) => {
  return (
    <div className={variants({ color, size })} {...rest}>
      <div className="flex items-center justify-start gap-2 pb-4">
        <div>icon</div>
        <h2 className="font-bold">{title}</h2>
      </div>

      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
};

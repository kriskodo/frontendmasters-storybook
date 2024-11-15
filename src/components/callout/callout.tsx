import { ComponentProps } from 'react';
import { CalloutProps, variants } from './callout.variants';

type Props = ComponentProps<'div'> & CalloutProps;

export const Callout: React.FunctionComponent<Props> = (props) => {
  const { color = 'primary', size = 'medium', ...rest } = props;
  return (
    <div className={variants({ color, size })} {...rest}>
      <div className="flex items-center justify-start gap-2 pb-4">
        <div>icon</div>
        <p className="font-bold">An Important Title</p>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia laoreet eros, id
        scelerisque lectus gravida eu. Proin velit metus, semper a venenatis scelerisque, hendrerit
        vel nulla. In ultricies urna interdum neque congue, at viverra arcu varius. Nullam faucibus
        ipsum eu bibendum tristique. Ut accumsan, ipsum eleifend ullamcorper eleifend, libero lorem
        pretium metus, placerat molestie metus massa vel nisi. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Praesent quis efficitur risus.
        Maecenas mollis rhoncus ipsum, a lobortis ligula.
      </p>
    </div>
  );
};

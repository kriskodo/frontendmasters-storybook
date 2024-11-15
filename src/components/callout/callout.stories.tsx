import { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';
import { colorVariants, sizeVariants } from './callout.variants';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia laoreet eros, idscelerisque lectus gravida eu. Proin velit metus, semper a venenatis scelerisque, hendreritvel nulla. In ultricies urna interdum neque congue, at viverra arcu varius. Nullam faucibusipsum eu bibendum tristique. Ut accumsan, ipsum eleifend ullamcorper eleifend, libero lorempretium metus, placerat molestie metus massa vel nisi. Orci varius natoque penatibus etmagnis dis parturient montes, nascetur ridiculus mus. Praesent quis efficitur risus.Maecenas mollis rhoncus ipsum, a lobortis ligula.';
const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  args: { children: lorem, title: 'Title', color: 'primary', size: 'medium' },
  argTypes: {
    color: {
      control: 'select',
      options: colorVariants,
    },
    size: {
      control: 'select',
      options: sizeVariants,
    },
  },
  parameters: { viewport: { defaultViewport: 'mobile2' }, themes: { themeOverride: 'light' } },
};

type Story = StoryObj<typeof Callout>;

export const Primary: Story = {};

export const Success: Story = { args: { color: 'success' } };

export const Danger: Story = { args: { color: 'danger' } };

export const Information: Story = { args: { color: 'information' } };

export const Warning: Story = { args: { color: 'warning' } };

export const Small: Story = {
  args: { size: 'small' },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

export const Large: Story = {
  args: { size: 'large' },
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export default meta;

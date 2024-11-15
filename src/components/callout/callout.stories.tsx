import { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';
import { colorVariants, sizeVariants } from './callout.variants';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia laoreet eros, idscelerisque lectus gravida eu. Proin velit metus, semper a venenatis scelerisque, hendreritvel nulla. In ultricies urna interdum neque congue, at viverra arcu varius. Nullam faucibusipsum eu .';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  args: { children: lorem, title: 'Title', color: 'primary', size: 'medium' },
  argTypes: {
    title: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
      type: { name: 'string', required: true },
    },
    color: {
      control: 'select',
      table: {
        type: { summary: 'string' },
      },
      options: colorVariants,
    },
    size: {
      control: 'select',
      type: { name: 'string' },
      options: sizeVariants,
    },
  },
  parameters: { viewport: { defaultViewport: 'mobile2' } },
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

export const Dark: Story = {
  args: {},
  globals: { theme: 'dark' },
};

export default meta;

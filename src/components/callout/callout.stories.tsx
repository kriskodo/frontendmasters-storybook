import { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';
import { colorVariants, sizeVariants } from './callout.variants';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  args: { color: 'primary', size: 'medium' },
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

import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Button', kind: 'primary', size: 'medium', disabled: false },
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    kind: { control: 'select' },
    size: { control: 'select' },
  },
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = { args: { kind: 'secondary' } };

export const Destructive: Story = { args: { kind: 'destructive' } };

export const Ghost: Story = { args: { kind: 'ghost' } };

export const Small: Story = { args: { size: 'small' } };

export const Large: Story = { args: { size: 'large' } };

export const DarkMode: Story = {
  parameters: { themes: { themeOverride: 'light' }, viewport: { defaultViewport: 'mobile1' } },
};

export default meta;

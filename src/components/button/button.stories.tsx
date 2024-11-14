import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const defaultProps = { children: 'Button', variant: 'primary', size: 'medium', disabled: false };

const meta: Meta = {
  title: 'Button',
  component: Button,
  args: defaultProps,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: { control: 'select' },
    size: { control: 'select' },
  },
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = { args: { variant: 'secondary' } };

export const Destructive: Story = { args: { variant: 'destructive' } };

export const Ghost: Story = { args: { variant: 'ghost' } };

export const Small: Story = { args: { size: 'small' } };

export const Large: Story = { args: { size: 'large' } };

export default meta;

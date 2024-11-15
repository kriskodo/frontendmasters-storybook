import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { buttonKinds, buttonSizes } from './button.variants';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Button', kind: 'primary', size: 'medium', disabled: false },
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    kind: { control: 'select', options: buttonKinds },
    size: { control: 'select', options: buttonSizes },
  },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = { args: { kind: 'secondary' } };

export const Destructive: Story = { args: { kind: 'destructive' } };

export const Ghost: Story = { args: { kind: 'ghost' } };

export const Small: Story = {
  args: { size: 'small' },
};

export const Large: Story = { args: { size: 'large' } };

export default meta;

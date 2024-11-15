import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { TextArea } from './text-area';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    label: 'Text Area Label',
    placeholder: 'Enter some text here…',
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the text area',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the text area',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the text area',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the text area as required',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const value = 'Hello, World!';
    await userEvent.type(textArea, value, { delay: 50 });
    expect(textArea).toHaveValue(value);
  },
};

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate voluptatibus sed est facilis earum odit obcaecati ipsam commodi? Perspiciatis excepturi consequatur cumque neque magni dicta. Provident aliquam praesentium quasi.';

export const MaxLength: Story = {
  args: {
    maxLength: 100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    await userEvent.type(textArea, lorem);
    expect(textArea).toHaveClass('ring-danger-500');
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeDisabled();
    const value = 'Hello, World!';
    await userEvent.type(textArea, value);
    expect(textArea).toHaveValue('');
  },
};

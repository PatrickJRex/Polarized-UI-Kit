import type { Meta, StoryObj } from '@storybook/web-components';
import { fn } from '@storybook/test';
import type { ButtonProps } from './Button';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    label: {
      control: 'text',
      description: "set the label",
      defaultValue: "Button",
      name: "Label"
    },
    buttonType: {
      control: 'select',
      description: "Select a button type",
      options: ['primary','ghost', 'secondary'],
      name: "Button Type"
    },
    buttonSize: {
      control: 'select',
      description: "Select a size",
      options: ['small','medium', 'large'],
      name: "Button Size"
    }
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    buttonType: "primary",
    buttonSize: "medium"
  },
};


export const Secondary: Story = {
  args: {
    label: 'Button',
    buttonType: "secondary",
    buttonSize: "medium"
  },
};


export const Ghost: Story = {
  args: {
    label: 'Button',
    buttonType: "ghost",
    buttonSize: "medium"
  },
};

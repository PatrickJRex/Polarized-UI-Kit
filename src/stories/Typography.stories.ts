import type { Meta, StoryObj } from '@storybook/web-components';
import { TypeProps } from './Typography';
import { Typography } from './Typography';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Atoms/Typography',
    tags: ['autodocs'],
    render: (args) => Typography(args),
    argTypes: {
      label: {
        control: 'text',
        description: "set the label",
        defaultValue: "Button",
        name: "Label"
      },
      tag: {
        control: 'select',
        description: 'Set the tag',
        defaultValue: 'p',
        options: ['small', 'p', 'h1','h2','h3','h4','h5','JUMBO'],
        name: "Tag"
      },
      weight: {
        control: 'select',
        description: 'Set the weight',
        defaultValue: 400,
        options: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800],
        name: "Weight"
      },
    },
    args: {}
  } satisfies Meta<TypeProps>;

export default meta;
type Story = StoryObj<TypeProps>;
  
export const JUMBO: Story = {
  args: {
    label: 'Lorem ipsum...',
    tag: 'h1',
    weight: 800
  },
};

export const H1: Story = {
    args: {
      label: 'Lorem ipsum...',
      tag: 'h1',
      weight: 700
    },
  };

  export const H2: Story = {
    args: {
      label: 'Lorem ipsum...',
      tag: 'h2',
      weight: 700
    },
  };

  export const H3: Story = {
    args: {
      label: 'Lorem ipsum...',
      tag: 'h3',
      weight: 700
    },
  };

  export const H4: Story = {
    args: {
      label: 'Lorem ipsum...',
      tag: 'h4',
      weight: 700
    },
  };

  export const H5: Story = {
    args: {
      label: 'Lorem ipsum...',
      tag: 'h5',
      weight: 700
    },
  };

  export const Paragraph: Story = {
    args: {
      label: 'Lorem ipsum...',
      tag: 'p',
      weight: 400
    },
  };

  export const Small: Story = {
    args: {
      label: 'Lorem ipsum...',
      tag: 'small',
      weight: 400
    },
  };
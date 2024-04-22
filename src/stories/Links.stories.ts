import type { Meta, StoryObj } from '@storybook/web-components';
import { Link } from './Links';
import { LinkProps } from './Links';

const meta = {
    title: 'Atoms/Links',
    tags: ['autodocs'],
    render: (args) => Link(args),
    argTypes: {
        label: {
            control: 'text',
            description: "set the label",
            defaultValue: "Link",
            name: "Label"
          },
          link: {
            control: 'url',
            description: "set the link"
          },
          weight: {
            control: 'select',
            description: 'Set the weight',
            defaultValue: 400,
            options: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800],
            name: "Weight"
          },
          type: {
            control: "select",
            description: "Set the link type",
            options: ['primary', 'decorated','inline'],
            defaultValue: 'primary',
            name: "Type"
          }

    }
} satisfies Meta<LinkProps>;


export default meta;
type Story = StoryObj<LinkProps>;


export const LinkBasic: Story = {
    args: {
        label: 'lorem impsum....',
        type: 'primary'
    }
}

export const LinkDecorated: Story = {
    args: {
        label: 'lorem impsum....',
        type:'decorated',
        
    }
}

export const LinkInline: Story = {
    args: {
        label: 'lorem impsum....',
        type:'inline',
    }
}
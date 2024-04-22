import type { Meta, StoryObj } from '@storybook/web-components';
import { DecoratedHeadingProps } from './DecoratedHeading';
import { DecoratedHeading } from './DecoratedHeading';

const meta = {
    title: 'Molecules/DecoratedHeading',
    tags: ['autodocs'],
    render: (args) => DecoratedHeading(args),
    argTypes: {
        label: {
            control: 'text',
            description: "Set the text for the heading",
            defaultValue: "See the game in action!",
            name: "Heading text"
        },
        position: {
            control: 'select',
            description: "Set the text position",
            defaultValue: "center",
            options: ['left','center','right'],
            name: "Heading position"
        },
        tag: {
            control: 'select',
            description: 'Set the tag',
            defaultValue: 'p',
            options: ['h1','h2','h3'],
            name: "Tag"
          },
    }
} satisfies Meta<DecoratedHeadingProps>;

export default meta;
type Story = StoryObj<DecoratedHeadingProps>;


export const DecoratedH2: Story = {
    args: {
       label: "Watch the game in action",
       tag: 'h2',
       position: 'center'
    }
}

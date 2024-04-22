import {Meta, StoryObj } from '@storybook/web-components';
import { Collapsable } from './Collapsable';
import { CollapsableProps } from './Collapsable';

const meta = {
    title: 'Atoms/Collapsable',
    tags: ['autodocs'],
    render: (args) => Collapsable(args),
    argTypes: {
        type: {
            control: 'select',
            options: ['generic', 'faq'],
            name: "Type",
            defaultValue: 'generic'
        },
        details: {
            control: 'text',
            name: "Details"
        },
        summary: {
            control: 'text',
            name: "Summary"
        }
    }

} satisfies Meta<CollapsableProps>

export default meta;
type Story = StoryObj<CollapsableProps>;

export const Generic: Story = {
    args: {
        type: 'generic',
        summary: "This is a generic summary",
        details: "Lorem ipsum, set dolar more more more more"
    }
}

export const FAQ: Story = {
    args: {
        type: 'faq',
        summary: "This is a FAQ summary",
        details: "Lorem ipsum, set dolar more more more more"
    }
}


import type { Meta, StoryObj } from '@storybook/web-components';
import { ReviewProps } from './Review';
import { Review } from './Review';


const meta = {
    title: 'Molecules/Reviews',
    tags: ['autodocs'],
    render: (args) => Review(args),
    argTypes: {
        reviewer: {
            control: 'text',
            defaultValue: "Helen",
            description: "Reviewer's name",
            name: "Reviewer"
        },
        icon: {
            control: 'text',
            defaultValue: "icon-user.svg",
            description: "Name the icon to use",
            name: "Icon"
        },
        reviewHeadline: {
            control: 'text',
            defaultValue: "Hilarious",
            description: "Add the headline",
            name: "Headline"
        },
        reviewText: {
            control: 'text',
            defaultValue: "Some of the most fun and engaging conversations I've ever had. And we laughed our asses off for 45 minutes!",
            description: "Add the headline",
            name: "Headline"
        }
    }

} satisfies Meta<ReviewProps>;

export default meta;
type Story = StoryObj<ReviewProps>;

export const ExampleReview: Story = {
    args: {
        reviewer: "Bob",
        reviewHeadline: "Hilarious!",
        icon: 'icon-user.svg',
        reviewText: "Some of the most fun and engaging conversations I've ever had. And we laughed our asses off for 45 minutes!"
    }
}
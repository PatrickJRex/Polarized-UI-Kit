import type { Meta, StoryObj } from '@storybook/web-components';
import { WhySoPolarized, WhySoProps } from './WhySoPolarized';

const meta = {
  title: 'Molecules/WhySoPolarized',
  tags: ['autodocs'],
  render: (args) => WhySoPolarized(args),
  argTypes: {
    headline: {
        control: 'text',
        defaultValue: 'The world is insanely polarized today.',
        description: "Headline text",
        name: "Headline"
    },
    bodyCopy: {
        control: 'text',
        defaultValue: "From Politics to Sex to Pineapple on Pizza, we're divided on almost everything. So we made a game out of it to bring people together and solve this existential crisis with a healthy dose of much needed FUN and laughter.",
        name: "Body copy"
    },
    socialHeading: {
        control: 'text',
        defaultValue: 'Follow us for updates!',
        name: "Social Media heading"
    },
    headingImage: {
        control: 'text',
        defaultValue: 'polarized-logo.svg',
        name: "Heading image path"
    }
  }
} satisfies Meta<WhySoProps>;
export default meta;
type Story = StoryObj<WhySoProps>;

export const Default: Story = {
    args: {
        headline: "The world is insanely polarized today.",
        bodyCopy: "From Politics to Sex to Pineapple on Pizza, we're divided on almost everything. So we made a game out of it to bring people together and solve this existential crisis with a healthy dose of much needed FUN and laughter.",
        socialHeading: "Follow us for updates!",
        headingImage: 'polarized-logo.svg'
    }
  }
import type { Meta, StoryObj } from '@storybook/web-components';
import { Hero, HeroProps } from './Hero';


const meta = {
    title: 'Molecules/Hero',
    tags: ['autodocs'],
    render: (args) => Hero(args),
    argTypes: {
        type: {
            control: "select",
            options: ['home','faqs','how-to-play'],
            defaultValue: 'home',
            description: "Page hero type",
            name: "Hero type"
        }
    }

} satisfies Meta<HeroProps>

export default meta;
type Story = StoryObj<HeroProps>;

export const Home: Story = {
    args: {
        type: 'home'
    }
}

export const FAQS: Story = {
    args: {
        type: 'faq'
    }
}

export const HowToPlay: Story = {
    args: {
        type: 'how-to-play'
    }
}



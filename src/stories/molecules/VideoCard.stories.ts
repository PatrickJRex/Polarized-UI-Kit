import type { Meta, StoryObj } from '@storybook/web-components';
import { VideoCard, VideoCardProps } from './VideoCard';

const meta = {
  title: 'Molecules/VideoCard',
  tags: ['autodocs'],
  render: (args) => VideoCard(args),
  argTypes: {
    image: {
      control: 'text',
      description: 'Choose an image to override the youtube thumbnail',
      name: "Image",
      defaultValue: 'docs.png'
    },
    videoId: {
      control: 'text',
      description: 'Add a video ID',
      name: "Video ID"
    },
  }
} satisfies Meta<VideoCardProps>;
export default meta;
type Story = StoryObj<VideoCardProps>;

export const ExampleVideo: Story = {
  args: {
    videoId: 'pD4E_RddfZQ',
    alt: 'Are men crying a turnoff?',
  }
}

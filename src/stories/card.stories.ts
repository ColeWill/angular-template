import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Example/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    buttonText: {
      control: 'text',
    },
    showButton: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    content: 'This is a simple card component with Tailwind CSS styling.',
    showButton: true,
    buttonText: 'Learn More',
  },
};

export const WithoutButton: Story = {
  args: {
    title: 'Card Without Button',
    content: 'This card has no button, just title and content.',
    showButton: false,
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Product Card',
    content: 'This is a product description with custom content and styling.',
    showButton: true,
    buttonText: 'Buy Now',
  },
};
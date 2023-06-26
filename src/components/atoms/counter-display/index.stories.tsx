import type { Meta, StoryObj } from '@storybook/react';

import Counter from '.';

const meta = {
  title: 'atoms/Counter',
  component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Gimli Icon basic
 */
export const Basic = {
  args: {
  }
} satisfies Story;

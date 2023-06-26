import type { Meta, StoryObj } from '@storybook/react';

import CounterDisplay from '.';

const meta = {
  title: 'atoms/CounterDisplay',
  component: CounterDisplay,
} satisfies Meta<typeof CounterDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Gimli Icon basic
 */
export const Basic = {
  args: {
  }
} satisfies Story;

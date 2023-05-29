import type { Meta, StoryObj } from '@storybook/react';

import GimliIcon, { IconColor } from '.';

const meta = {
  title: 'atoms/GimliIcon',
  component: GimliIcon,
} satisfies Meta<typeof GimliIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Gimli Icon basic
 */
export const GimliIconBasic = {
  args: {
    name: 'gl-i-add',
  },
} satisfies Story;

/**
 * Gimli Icon with the primary color
 */
export const GimliIconPrimaryColor: Story = {
  args: {
    name: 'gl-i-add',
    color: IconColor.PRIMARY,
  },
} satisfies Story;

/**
 * Gimli Icon with the secondary color
 */
export const GimliIconSecondaryColor: Story = {
  args: {
    name: 'gl-i-add',
    color: IconColor.SECONDARY,
  },
} satisfies Story;

/**
 * Gimli Icon with the white color
 */
export const GimliIconWhiteColor: Story = {
  args: {
    name: 'gl-i-add',
    color: IconColor.WHITE,
  },
} satisfies Story;

/**
 * Gimli Icon disabled
 */
export const GimliIconDisabled: Story = {
  args: {
    name: 'gl-i-add',
    disabled: true,
  },
} satisfies Story;

/**
 * Gimli Icon handle click event
 */
export const GimliIconWithClick: Story = {
  args: {
    name: 'gl-i-add',
    onClick: () => window.alert('Click !'),
  },
} satisfies Story;

/**
 * Gimli Icon with the modified size
 */
export const GimliIconSize: Story = {
  args: {
    name: 'gl-i-add',
    size: 40,
  },
} satisfies Story;

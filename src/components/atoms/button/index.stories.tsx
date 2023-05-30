
import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonColor, ButtonFormat } from './index';

const meta = {
  title: 'atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilledPrimary = {
  args: {
    color: ButtonColor.PRIMARY,
    format: ButtonFormat.FILLED,
  }
} satisfies Story;

export const FilledSecondary = {
  args: {
    color: ButtonColor.SECONDARY,
    format: ButtonFormat.FILLED,
  }
} satisfies Story;

export const OutlinedPrimary = {
  args: {
    color: ButtonColor.PRIMARY,
    format: ButtonFormat.OUTLINED,
  }
} satisfies Story;

export const OutlinedSecondary = {
  args: {
    color: ButtonColor.SECONDARY,
    format: ButtonFormat.OUTLINED,
  }
} satisfies Story;

export const FilledWithIcon = {
  args: {
    format: ButtonFormat.FILLED,
    icon: 'gl-i-delete',
  }
} satisfies Story;

export const IconSize = {
  args: {
    icon: 'gl-i-delete',
    iconSize: 22,
  }
} satisfies Story;

export const OutlinedWithIcon = {
  args: {
    format: ButtonFormat.OUTLINED,
    icon: 'gl-i-delete',
  }
} satisfies Story;

export const FilledDisabled = {
  args: {
    format: ButtonFormat.FILLED,
    icon: 'gl-i-delete',
    disabled: true,
  }
} satisfies Story;

export const OutlinedDisabled = {
  args: {
    format: ButtonFormat.OUTLINED,
    icon: 'gl-i-delete',
    disabled: true,
  }
} satisfies Story;

export const LoadingWithoutIcon = {
  args: {
    format: ButtonFormat.FILLED,
    isLoading: true,
  }
} satisfies Story;


export const LoadingOutlinedWithoutIcon = {
  args: {
    format: ButtonFormat.OUTLINED,
    isLoading: true,
  }
} satisfies Story;

export const LoadingWithIcon = {
  args: {
    format: ButtonFormat.FILLED,
    icon: 'gl-i-delete',
    isLoading: true,
  }
} satisfies Story;

export const LoadingOutlinedWithIcon = {
  args: {
    format: ButtonFormat.OUTLINED,
    icon: 'gl-i-delete',
    isLoading: true,
  }
} satisfies Story;
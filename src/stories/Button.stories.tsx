import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/ui/button';
import doneIcon from '../assets/icons/done.svg';
import downIcon from '../assets/icons/chevron-down.svg';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      description: 'default, hover, active',
      defaultValue: 'default'
    },
    priority: {
      description: 'primary, sencodary, tertiary',
      defaultValue: ''
    },
    label: {
      description: 'string',
      defaultValue: ''
    },
    showLabel: {
      description: 'boolean',
      defaultValue: 'true'
    },
    iconStart: {
      description: 'Accepts .svg icons',
      defaultValue: ''
    },
    iconEnd: {
      description: 'Accepts .svg icons',
      defaultValue: ''
    },
    onClick: {
      description: 'Function which returns a ClickEvent',
      defaultValue: '',
    },
    disabled: {
      description: 'boolean',
      defaultValue: false
    },
    showIconStart: {
      description: 'boolean',
      defaultValue: false
    },
    showIconEnd: {
      description: 'boolean',
      defaultValue: false
    },

  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    state: 'default',
    priority: 'primary',
    label: 'Primary',
    iconStart: doneIcon,
    iconEnd: downIcon,
    showIconStart: true,
    showIconEnd: true,
    showLabel: true,
    disabled: false,
    onClick: console.log
  },
};

export const Secondary: Story = {
  args: {
    priority: 'secondary',
    label: 'Secondary',
  },
};

export const Tertiary: Story = {
  args: {
    priority: 'tertiary',
    label: 'Tertiary',
  },
};

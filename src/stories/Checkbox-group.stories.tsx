import type { Meta, StoryObj } from '@storybook/react';
import CheckboxGroup from '../components/ui/checkbox-group';
import Checkbox from '../components/ui/checkbox';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Checkbox-group',
  component: CheckboxGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: {
      description: 'string',
      defaultValue: ''
    },
    infoLabel: {
      description: 'string',
      defaultValue: ''
    },
    disabled: {
      description: 'boolean',
      defaultValue: false
    },
    invalid: {
      description: 'boolean',
      defaultValue: false
    },
    required: {
      description: 'boolean',
      defaultValue: false
    },
    errorText: {
      description: 'string',
      defaultValue: ''
    },
    children: {
      description: 'Accepts Checkbox components',
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
  args: {
    label: 'Group title',
    infoLabel: 'Group information text',
    errorText: 'Group error text',
    disabled: false,
    invalid: true,
    required: true,
    children:
      [
        <Checkbox name="checbox1" helpLabel="Contextual help message" label="Label" onChange={console.log} />,
        <Checkbox name="checbox2" helpLabel="Contextual help message" label="Label" onChange={console.log} />,
      ],
  }
};

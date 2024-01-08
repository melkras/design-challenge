import type { Meta, StoryObj } from '@storybook/react';
import Input, { TInput } from '../components/ui/input';
import { useArgs } from '@storybook/preview-api';

const meta: Meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      defaultValue: '',
      variant: {
        options: ['default', 'hover', 'active'],
        control: { type: 'radio' },
      },
    },
    label: {
      description: 'string',
      defaultValue: '',
    },
    showHelp: {
      description: 'boolean',
      defaultValue: false,
    },
    helpLabel: {
      description: 'string',
      defaultValue: true,
    },
    disabled: {
      description: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = (args: TInput) => {
  const [{ checked, showHelp }, updateArgs] = useArgs();

  const handleCheckboxChange = () => {
    updateArgs({ checked: !checked });
  };

  return (
    <Input
      {...args}
      showHelp={showHelp}
      onChange={handleCheckboxChange}
    />
  );
};

Primary.args = {
  state: 'default',
  label: 'Label',
  helpLabel: 'Contextual help message',
  invalid: true,
  showHelp: true,
  disabled: false,
};
